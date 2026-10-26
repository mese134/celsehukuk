"""Celse derleme betiği.

src/ içindeki oyun kaynağından üç çıktı üretir:
  www/index.html    Android uygulaması (çevrimdışı, CELSE_APP = true)
  site/index.html   Web sürümü (Netlify vb. için)
  site/yasal.html   Herkese açık yasal metinler (Play Store gizlilik politikası adresi)
Yazı tipleri uygulamanın içine gömülür; Google Fonts'a bağlantı kurulmaz.

Kullanım:  python3 tools/build.py
"""
import html, json, os, re, shutil, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src')
os.chdir(ROOT)

# ---- 1. Oyun gövdesi: app.html + veri dosyaları
app = open(os.path.join(SRC, 'app.html'), encoding='utf-8').read()
data = '\n'.join(open(os.path.join(SRC, f), encoding='utf-8').read()
                 for f in ['data.js', 'data2.js', 'data3.js', 'data4.js', 'data5.js', 'data6.js', 'legal.js'])
body = app.replace('/*DATA*/', data)
gf = re.search(r'<link rel="preconnect" href="https://fonts.googleapis.com">\s*<link rel="stylesheet" href="https://fonts.googleapis.com/[^"]+">', body)
assert gf, 'Google Fonts bağlantısı bulunamadı'
body = body.replace(gf.group(0), '<link rel="stylesheet" href="fonts/fonts.css">')

# ---- 2. Yazı tipleri (npm @fontsource paketlerinden)
def build_fonts(dst):
    os.makedirs(dst, exist_ok=True)
    css = []
    for fam, weights in [('spectral', [500, 600, 700]), ('source-sans-3', [400, 600, 700])]:
        base = os.path.join(ROOT, 'node_modules', '@fontsource', fam)
        for w in weights:
            c = open(os.path.join(base, f'{w}.css'), encoding='utf-8').read()
            for name, blk in re.findall(r'/\* ([\w-]+) \*/\s*(@font-face \{.*?\})', c, re.S):
                if not re.search(r'-latin(-ext)?-\d+-normal$', name):
                    continue
                f = name + '.woff2'
                shutil.copy(os.path.join(base, 'files', f), os.path.join(dst, f))
                css.append(re.sub(r"src: [^;]+;", f"src: url({f}) format('woff2');", blk))
    open(os.path.join(dst, 'fonts.css'), 'w', encoding='utf-8').write('\n'.join(css) + '\n')

HEAD = ('<!doctype html><html lang="tr"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
        '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
        'body{margin:0;font:14px system-ui,-apple-system,sans-serif}img{max-width:100%}[hidden]{display:none!important}'
        'html,body{overscroll-behavior:none;-webkit-tap-highlight-color:transparent}</style>{FLAG}</head><body>')
BACK = '''<script>
(function(){
  var C = window.Capacitor, App = C && C.Plugins && C.Plugins.App;
  if (!App) return;
  App.addListener('backButton', function(){ if (!(window.celseBack && window.celseBack())) App.exitApp(); });
})();
</script>'''

os.makedirs('www', exist_ok=True)
build_fonts('www/fonts')
open('www/index.html', 'w', encoding='utf-8').write(
    HEAD.replace('{FLAG}', '<script>window.CELSE_APP=true;</script>') + body + BACK + '</body></html>')

os.makedirs('site', exist_ok=True)
build_fonts('site/fonts')
SITE_URL = os.environ.get('SITE_URL', 'https://mese134.github.io/celsehukuk/')
WEB_META = (
    '<meta name="description" content="Türk hukuku duruşma oyunu: ceza, iş, aile, idare, borçlar ve miras dosyalarında 15 saniyede karar ver.">'
    '<meta name="theme-color" content="#8e1b30">'
    '<link rel="manifest" href="manifest.webmanifest">'
    '<link rel="icon" type="image/png" href="icon-192.png">'
    '<link rel="apple-touch-icon" href="apple-touch-icon.png">'
    '<meta name="apple-mobile-web-app-capable" content="yes">'
    '<meta name="apple-mobile-web-app-title" content="Celse">'
    '<meta property="og:type" content="website">'
    '<meta property="og:title" content="Celse · Hukuk Duruşma Oyunu">'
    '<meta property="og:description" content="Dosyayı oku, 15 saniyede karar ver. Ceza, iş, aile, idare, borçlar ve miras hukuku.">'
    f'<meta property="og:url" content="{SITE_URL}">'
    f'<meta property="og:image" content="{SITE_URL}og.png">'
    '<meta property="og:image:width" content="1200"><meta property="og:image:height" content="586">'
    '<meta name="twitter:card" content="summary_large_image">'
)
SW_REG = '''<script>
if ('serviceWorker' in navigator) window.addEventListener('load', function(){ navigator.serviceWorker.register('sw.js').catch(function(){}); });
</script>'''
open('site/index.html', 'w', encoding='utf-8').write(HEAD.replace('{FLAG}', WEB_META) + body + SW_REG + '</body></html>')
for f in ['icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'og.png']:
    shutil.copy(os.path.join(SRC, f), os.path.join('site', f))
json.dump({
    'name': 'Celse · Hukuk Duruşma Oyunu', 'short_name': 'Celse', 'lang': 'tr',
    'start_url': './', 'scope': './', 'display': 'standalone',
    'background_color': '#8e1b30', 'theme_color': '#8e1b30',
    'icons': [{'src': 'icon-192.png', 'sizes': '192x192', 'type': 'image/png'},
              {'src': 'icon-512.png', 'sizes': '512x512', 'type': 'image/png', 'purpose': 'any maskable'}]
}, open('site/manifest.webmanifest', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
fonts = sorted(f for f in os.listdir('site/fonts'))
ver = str(int(os.path.getmtime('site/index.html')))
open('site/sw.js', 'w', encoding='utf-8').write(f'''// Celse çevrimdışı önbellek. Sayfa önce ağdan istenir; bağlantı yoksa önbellekten açılır.
const C = 'celse-{ver}';
const FILES = ['./', 'index.html', 'yasal.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', {', '.join(repr('fonts/' + f) for f in fonts)}];
self.addEventListener('install', e => {{ e.waitUntil(caches.open(C).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); }});
self.addEventListener('activate', e => {{ e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); }});
self.addEventListener('fetch', e => {{
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(r => {{ const copy = r.clone(); caches.open(C).then(c => c.put(e.request, copy)); return r; }}).catch(() => caches.match(e.request, {{ ignoreSearch: true }})));
}});
''')

# ---- 3. Yasal metinler sayfası
legal_src = open(os.path.join(SRC, 'legal.js'), encoding='utf-8').read()
out = subprocess.run(['node', '-e', legal_src.replace('const LEGAL_VERSION', 'var LEGAL_VERSION').replace('const LEGAL ', 'var LEGAL ')
                      + '\nprocess.stdout.write(JSON.stringify({v: LEGAL_VERSION, d: LEGAL}));'],
                     capture_output=True, text=True, check=True).stdout
legal = json.loads(out)

def inline(t):
    t = html.escape(t, quote=False)
    t = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', t)
    t = re.sub(r'\*(.+?)\*', r'<i>\1</i>', t)
    return t

def md(src):
    lines, o, i = src.split('\n'), [], 0
    while i < len(lines):
        l = lines[i]
        if not l.strip(): i += 1; continue
        if l.startswith('### '): o.append(f'<h3>{inline(l[4:])}</h3>'); i += 1; continue
        if l.startswith('|'):
            rows = []
            while i < len(lines) and lines[i].startswith('|'): rows.append(lines[i]); i += 1
            cells = lambda r: [c.strip() for c in r.strip('|').split('|')]
            hd = ''.join(f'<th>{inline(c)}</th>' for c in cells(rows[0]))
            bd = ''.join('<tr>' + ''.join(f'<td>{inline(c)}</td>' for c in cells(r)) + '</tr>' for r in rows[2:])
            o.append(f'<div class="t"><table><thead><tr>{hd}</tr></thead><tbody>{bd}</tbody></table></div>'); continue
        if l.startswith('- '):
            li = []
            while i < len(lines) and lines[i].startswith('- '): li.append(f'<li>{inline(lines[i][2:])}</li>'); i += 1
            o.append('<ul>' + ''.join(li) + '</ul>'); continue
        if re.match(r'^\d+\. ', l):
            li = []
            while i < len(lines) and re.match(r'^\d+\. ', lines[i]): li.append(f'<li>{inline(re.sub(r"^\d+\. ", "", lines[i]))}</li>'); i += 1
            o.append('<ol>' + ''.join(li) + '</ol>'); continue
        p = [l]; i += 1
        while i < len(lines) and lines[i].strip() and not re.match(r'^(#|\||- |\d+\. )', lines[i]): p.append(lines[i]); i += 1
        o.append(f'<p>{inline(" ".join(p))}</p>')
    return '\n'.join(o)

toc = ''.join(f'<li><a href="#{d["id"]}">{html.escape(d["title"])}</a></li>' for d in legal['d'])
secs = ''.join(f'<section id="{d["id"]}"><h2>{html.escape(d["title"])}</h2>{md(d["md"])}</section>' for d in legal['d'])
page = f'''<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Celse · Gizlilik ve Kullanım Koşulları</title><link rel="stylesheet" href="fonts/fonts.css">
<style>
:root{{--bg:#eceff3;--s:#fff;--ink:#151b26;--mu:#5a6476;--li:#d3d9e2;--ac:#8e1b30}}
@media (prefers-color-scheme:dark){{:root{{--bg:#0e121a;--s:#171d28;--ink:#e7ebf1;--mu:#97a1b3;--li:#283141;--ac:#e5627a;color-scheme:dark}}}}
body{{margin:0;background:var(--bg);color:var(--ink);font:15px/1.55 "Public Sans",system-ui,sans-serif}}
main{{max-width:760px;margin:0 auto;padding:24px max(16px,env(safe-area-inset-left,0px)) 64px}}
h1,h2{{font-family:"Zilla Slab",Georgia,serif;line-height:1.15}} h1{{font-size:34px;margin:0 0 6px}} h2{{font-size:26px;margin:40px 0 8px;padding-top:12px;border-top:1px solid var(--li)}}
h3{{font-size:16px;margin:18px 0 4px}} a{{color:var(--ac)}} .mu{{color:var(--mu)}}
.t{{overflow-x:auto;border:1px solid var(--li);border-radius:8px;margin:0 0 12px;background:var(--s)}}
table{{border-collapse:collapse;width:100%;font-size:13.5px;min-width:440px}} th,td{{text-align:left;vertical-align:top;padding:7px 10px;border-bottom:1px solid var(--li)}} th{{background:var(--bg)}}
</style></head><body><main>
<h1>Celse · Gizlilik ve Kullanım Koşulları</h1>
<p class="mu">Sürüm {legal["v"]["terms"]}. Celse'nin gizlilik bildirimi ve kullanım koşulları. Veri toplamıyoruz; veriler yalnızca cihazınızda tutulur. Silmek için uygulamada Yasal → Hesabımı sil adımını kullanın. İletişim: noktanokta629@gmail.com</p>
<ul>{toc}</ul>{secs}</main></body></html>'''
open('site/yasal.html', 'w', encoding='utf-8').write(page)
print('www/index.html', os.path.getsize('www/index.html'), '· site/index.html', os.path.getsize('site/index.html'), '· site/yasal.html', os.path.getsize('site/yasal.html'))
