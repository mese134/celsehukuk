#!/usr/bin/env python3
"""Resmî Gazete günlük fihristini okuyup site/rg.json dosyasını üretir.

GitHub Actions'ta her gün birkaç kez çalışır. Önceki rg.json yayındaki siteden
alınır; böylece son 30 günün arşivi depoya bir şey yazmadan korunur. Bir gün
okunamazsa eski kayıt silinmez.

Kullanım: python3 tools/rg.py site/rg.json [--debug klasör]
"""
import json, os, re, sys, time, urllib.request, urllib.error
from datetime import datetime, timedelta, timezone
from html.parser import HTMLParser
from urllib.parse import urljoin

BASE = 'https://www.resmigazete.gov.tr/eskiler/{y}/{m}/{d}{suf}.htm'
SITE_RG = os.environ.get('SITE_URL', 'https://mese134.github.io/celsehukuk/') + 'rg.json'
KEEP_DAYS = 30
TR = timezone(timedelta(hours=3))
UA = 'Mozilla/5.0 (compatible; CelseRG/1.0; +https://mese134.github.io/celsehukuk/)'
AYLAR = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
GUNLER = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']

# Alt başlığa göre tür ve önem
TYPES = [
    (r'CUMHURBAŞKANLIĞI KARARNAME', 'CB Kararnamesi', True),
    (r'KANUN', 'Kanun', True),
    (r'ANAYASA MAHKEMESİ', 'AYM Kararı', True),
    (r'YARGITAY', 'Yargıtay Kararı', True),
    (r'DANIŞTAY', 'Danıştay Kararı', True),
    (r'UYUŞMAZLIK MAHKEMESİ', 'Uyuşmazlık Mahkemesi', True),
    (r'YÖNETMELİK', 'Yönetmelik', True),
    (r'GENELGE', 'Genelge', False),
    (r'CUMHURBAŞKANI KARAR', 'CB Kararı', False),
    (r'TEBLİĞ', 'Tebliğ', False),
    (r'KURUL KARAR', 'Kurul Kararı', False),
    (r'MİLLETLERARASI', 'Milletlerarası Andlaşma', False),
    (r'KARAR', 'Karar', False),
]
# Hukuk uygulayıcısını doğrudan ilgilendiren başlıklar "önemli" sayılır
BOOST = re.compile(r'Türk Ticaret|Türk Borçlar|Türk Medenî|Türk Medeni|Ceza|İcra|İflas|Avukat|Noter|Arabulucu|Tüketici|Kişisel Veri|Hukuk|Yargı|Mahkeme|Anonim ve Limited|Kira|Tapu|Kamulaştırma Kanunu|Vergi Usul|İş Kanunu|Sosyal Sigortalar')
SKIP_SUB = re.compile(r'ATAMA|İLÂN|İLAN')
SECTION = re.compile(r'^(YASAMA|YÜRÜTME VE İDARE|YARGI|İL[ÂA]N) BÖLÜMÜ$')


def up(s):
    return s.replace('i', 'İ').replace('ı', 'I').upper().replace('Â', 'A').replace('Î', 'I').replace('Û', 'U')


def fetch(url, tries=3):
    req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept-Language': 'tr-TR,tr;q=0.9'})
    for n in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=15) as r:
                raw = r.read()
            break
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            if n == tries - 1:
                raise
        except Exception:
            if n == tries - 1:
                raise
        time.sleep(2 + 3 * n)
    m = re.search(rb'charset=["\']?([\w-]+)', raw[:2000], re.I)
    enc = (m.group(1).decode() if m else 'utf-8').lower()
    for e in ([enc] if enc not in ('utf-8', 'utf8') else []) + ['utf-8', 'cp1254']:
        try:
            return raw.decode(e)
        except (UnicodeDecodeError, LookupError):
            pass
    return raw.decode('utf-8', 'replace')


class Lines(HTMLParser):
    """HTML'i satırlara böler; her satırda düz metin ve içindeki bağlantılar tutulur."""
    BLOCK = {'p', 'div', 'br', 'tr', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'td'}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.lines, self.text, self.links, self.a, self.skip = [], [], [], None, 0

    def flush(self):
        t = re.sub(r'\s+', ' ', ''.join(self.text)).strip()
        if t or self.links:
            self.lines.append((t, self.links))
        self.text, self.links = [], []

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style'):
            self.skip += 1
        elif tag in self.BLOCK:
            self.flush()
        elif tag == 'a':
            self.a = [dict(attrs).get('href'), []]

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.skip = max(0, self.skip - 1)
        elif tag == 'a' and self.a:
            href, parts = self.a
            t = re.sub(r'\s+', ' ', ''.join(parts)).strip()
            if href and t:
                self.links.append((href, t))
            self.a = None
        elif tag in self.BLOCK:
            self.flush()

    def handle_data(self, data):
        if self.skip:
            return
        self.text.append(data)
        if self.a:
            self.a[1].append(data)


def clean(t):
    return re.sub(r'^[\s\-–—•·]+', '', t).strip()


def classify(sub):
    u = up(sub)
    for pat, name, key in TYPES:
        if re.search(pat, u):
            return name, key
    return sub.title(), False


def parse(html, url):
    p = Lines(); p.feed(html); p.flush()
    out = {'sayi': None, 'groups': []}
    
    section, sub, group = None, None, None
    for text, links in p.lines:
        if out['sayi'] is None:
            m = re.search(r'Sayı\s*:\s*(\d{4,6})', text) or re.search(r'(\d{5})\s*Sayılı', text)
            if m:
                out['sayi'] = m.group(1)
        u = up(text)
        for href, _ in links:
            if re.search(r'/?\d{8}\.pdf$', href or '') and 'pdf' not in out:
                out['pdf'] = urljoin(url, href)
        if not links and SECTION.match(u):
            section = u; sub = None; group = None
            continue
        if section and 'İLAN' in section:
            continue
        if not links and text and u == text.upper() and re.search(r'[A-ZÇĞİÖŞÜ]{3}', u) and len(text) < 120 and 'SAYI' not in u:
            sub = clean(text); group = None
            continue
        if not links or not sub or SKIP_SUB.search(up(sub)):
            continue
        for href, atext in links:
            if not href or href.startswith('#') or 'ilan' in href.lower():
                continue
            title = clean(text if len(links) == 1 else atext)
            if len(title) < 4:
                continue
            if group is None:
                kind, key = classify(sub)
                group = {'k': kind, 'key': key, 'items': []}
                out['groups'].append(group)
            u2 = urljoin(url, href)
            if re.search(r'/\d{8}\.pdf$', u2):
                continue
            item = {'t': title[:400], 'u': u2}
            if group['k'] == 'Yönetmelik' and 'Üniversitesi' in title:
                item['minor'] = 1
            if not group['key'] and BOOST.search(title):
                item['boost'] = 1
            if item not in group['items']:
                group['items'].append(item)
    out['groups'] = [g for g in out['groups'] if g['items']]
    return out


def day_entry(d, debug=None):
    y, mo, dd = d.strftime('%Y'), d.strftime('%m'), d.strftime('%Y%m%d')
    url = BASE.format(y=y, m=mo, d=dd, suf='')
    html = fetch(url)
    if html is None:
        return None
    if debug:
        open(os.path.join(debug, dd + '.htm'), 'w', encoding='utf-8').write(html)
    e = parse(html, url)
    entry = {'date': d.strftime('%Y-%m-%d'), 'label': f'{d.day} {AYLAR[d.month - 1]} {d.year} {GUNLER[d.weekday()]}',
             'sayi': e['sayi'], 'url': url, 'pdf': e.get('pdf'), 'groups': e['groups'], 'mukerrer': []}
    for n in range(1, 5):
        murl = BASE.format(y=y, m=mo, d=dd, suf=f'M{n}')
        mh = fetch(murl)
        if mh is None:
            break
        if debug:
            open(os.path.join(debug, f'{dd}M{n}.htm'), 'w', encoding='utf-8').write(mh)
        me = parse(mh, murl)
        entry['mukerrer'].append({'n': n, 'sayi': me['sayi'], 'url': murl, 'groups': me['groups']})
        time.sleep(0.5)
    return entry


def main():
    out_path = sys.argv[1] if len(sys.argv) > 1 else 'site/rg.json'
    debug = None
    if '--debug' in sys.argv:
        debug = sys.argv[sys.argv.index('--debug') + 1]
        os.makedirs(debug, exist_ok=True)
    prev = {'days': []}
    try:
        with urllib.request.urlopen(urllib.request.Request(SITE_RG, headers={'User-Agent': UA}), timeout=20) as r:
            prev = json.loads(r.read().decode('utf-8'))
    except Exception as ex:
        print('Önceki rg.json alınamadı:', ex)
    days = {x['date']: x for x in prev.get('days', [])}
    today = datetime.now(TR).date()
    # İlk çalışmada son 30 günü doldur; sonra yalnızca son 3 günü yenile (mükerrer sayılar için)
    span = KEEP_DAYS
    errors = []
    t0 = time.time()
    # Önce erişimi sına: sunucu cevap vermiyorsa vakit kaybetmeden eski veriyle devam et
    try:
        fetch('https://www.resmigazete.gov.tr/')
        print('Erişim tamam')
    except Exception as ex:
        print('Resmî Gazete sitesine erişilemedi:', repr(ex))
        errors.append(f'erişim: {ex!r}')
        span = 0
    for k in range(span):
        if time.time() - t0 > 240:
            print('Süre sınırı doldu; kalan günler sonraki çalışmada alınacak')
            break
        d = today - timedelta(days=k)
        if k >= 3 and d.strftime('%Y-%m-%d') in days:
            continue  # eski ve zaten alınmış gün
        try:
            e = day_entry(d, debug if k < 2 else None)
            if e and (e['groups'] or e['mukerrer']):
                days[e['date']] = e
            print(d, 'tamam' if e else 'yayın yok', sum(len(g['items']) for g in e['groups']) if e else 0, 'madde')
        except Exception as ex:
            errors.append(f'{d}: {ex}')
            print(d, 'HATA', ex)
        time.sleep(0.7)
    keep = sorted(days.values(), key=lambda x: x['date'], reverse=True)[:KEEP_DAYS]
    data = {'updated': datetime.now(TR).isoformat(timespec='minutes'), 'source': 'https://www.resmigazete.gov.tr/',
            'days': keep, 'errors': errors[-5:]}
    os.makedirs(os.path.dirname(out_path) or '.', exist_ok=True)
    json.dump(data, open(out_path, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    print('Yazıldı:', out_path, len(keep), 'gün')
    if keep:
        print(json.dumps(keep[0], ensure_ascii=False, indent=1)[:4000])


if __name__ == '__main__':
    main()
