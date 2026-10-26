// ===== İnfaz hesabı · 26.10.2026 · yalnızca yetişkinler ve genel rejim; resmî PDF karşılaştırması bekliyor =====
// Kapsam dışı bırakılanlar (kaynaklar çelişkili veya yakın zamanda değişti): çocuklar (7593 s. K., 18.08.2026),
// terör suçları, ikinci kez tekerrür, birden fazla cezanın içtimaı.
CASES.push(
  {
    id: "f1", b: "infaz", title: "Sekiz Yılın Hesabı", court: "Bursa Cumhuriyet Başsavcılığı İnfaz Bürosu", esas: "2026/4120 İlam", role: "Hükümlü vekili", zorluk: 2,
    intro: "Müvekkil Taner B., 12 Mart 2025'te işlediği nitelikli hırsızlık suçundan 8 yıl hapis cezasına mahkûm oldu; karar Ekim 2026'da kesinleşti. Müvekkil yargılama sırasında 10 ay tutuklu kaldı. Daha önce mahkûmiyeti yok (mükerrir değil). Ailesi \"cezaevinde ne kadar kalacak?\" diye soruyor.",
    evidence: [
      ["İlam", "8 yıl hapis; TCK m.142; suç tarihi 12.03.2025."],
      ["Tutukluluk", "10 ay tutuklu kaldı; tahliye edildi."],
      ["Adli sicil", "Önceki mahkûmiyet yok."]
    ],
    steps: [
      { q: "Bu suçta koşullu salıverilme için cezanın ne kadarının iyi hâlle infaz kurumunda geçirilmesi gerekir?", o: ["Üçte biri", "Yarısı", "Üçte ikisi", "Dörtte üçü"], a: 1,
        e: "Süreli hapis cezalarında genel kural, cezanın yarısının infaz kurumunda iyi hâlle geçirilmesidir. Hırsızlık, üçte iki oranının uygulandığı istisnai suçlar arasında değildir.", r: "5275 s. K. m.107/2" },
      { q: "Koşullu salıverilme için kurumda geçirilmesi gereken toplam süre ne kadardır?", o: ["2 yıl 8 ay", "4 yıl", "5 yıl 4 ay", "6 yıl"], a: 1, t: 20,
        e: "8 yılın yarısı 4 yıldır.", r: "5275 s. K. m.107/2" },
      { q: "10 aylık tutukluluk bu hesapta nasıl değerlendirilir?", o: ["Hiç dikkate alınmaz", "Cezadan düşülür (mahsup); kalan kurum süresi 3 yıl 2 ay olur", "Yarısı düşülür", "Yalnızca denetimli serbestlikten düşülür"], a: 1, t: 25,
        e: "Hükümden önce gerçekleşen ve şahsi hürriyeti sınırlayan gözaltı ve tutukluluk gibi hâllerde geçirilen süreler hükmolunan cezadan indirilir. 4 yıl (48 ay) − 10 ay = 38 ay, yani 3 yıl 2 ay.", r: "TCK m.63" },
      { q: "Genel kurala göre denetimli serbestlikten ne zaman yararlanabilir?", o: ["Hemen", "Koşullu salıverilmeye 1 yıl kala; böylece cezaevinde en erken 2 yıl 2 ay kalır", "Koşullu salıverilmeye 3 yıl kala", "Hiçbir zaman"], a: 1, t: 25,
        e: "Koşullu salıverilmeye bir yıl kalan hükümlü, açık kurumda bulunma ve iyi hâl gibi kanundaki koşulları taşıyorsa, kalan süreyi denetimli serbestlik tedbiri altında geçirebilir. 3 yıl 2 ay − 1 yıl = 2 yıl 2 ay. Suç 31.07.2023'ten sonra işlendiği için 7571 sayılı Kanun'un geçici düzenlemesinden yararlanamaz.", r: "5275 s. K. m.105/A" },
      { q: "Koşullu salıverildikten sonraki denetim süresi ne kadar olur?", o: ["1 yıl", "4 yıl", "8 yıl", "Denetim süresi yoktur"], a: 1,
        e: "Süreli hapis cezalarında denetim süresi, cezanın infaz kurumunda geçirilmesi gereken kısmından sonra kalan kısmıdır. 8 yıllık cezada yarısı kurumda çekildiğinden kalan 4 yıl denetim süresidir; bu sürede yeni bir kasıtlı suç işlenirse koşullu salıverilme geri alınabilir.", r: "5275 s. K. m.107" }
    ]
  },
  {
    id: "f2", b: "infaz", title: "Müebbetin Yatarı", court: "Ankara Cumhuriyet Başsavcılığı İnfaz Bürosu", esas: "2026/2210 İlam", role: "Hükümlü vekili", zorluk: 3,
    intro: "Büronuza infaz hesabı için dört farklı müvekkil başvurdu. Hepsinin suç tarihi 2024'tür ve hiçbiri çocuk değildir. Dosyaları sırayla değerlendir.",
    evidence: [
      ["Müvekkil A", "Kasten öldürmeden 18 yıl hapis (haksız tahrik indirimiyle); mükerrir değil."],
      ["Müvekkil B", "Ağırlaştırılmış müebbet hapis; mükerrir değil; terör veya örgüt suçu değil."],
      ["Müvekkil C", "Müebbet hapis; mükerrir değil."],
      ["Müvekkil D", "Dolandırıcılıktan 9 yıl hapis; mükerrir."]
    ],
    steps: [
      { q: "Müvekkil A (kasten öldürme, 18 yıl) koşullu salıverilme için kurumda ne kadar kalmalıdır?", o: ["9 yıl", "12 yıl", "13 yıl 6 ay", "18 yıl"], a: 1, t: 20,
        e: "Kasten öldürme suçlarında (TCK m.81-83) koşullu salıverilme için cezanın üçte ikisinin infaz kurumunda geçirilmesi gerekir: 18 × 2/3 = 12 yıl.", r: "5275 s. K. m.107/2" },
      { q: "Müvekkil B (ağırlaştırılmış müebbet) koşullu salıverilme için kurumda en az kaç yıl kalmalıdır?", o: ["24 yıl", "30 yıl", "36 yıl", "Koşullu salıverilemez"], a: 1,
        e: "Ağırlaştırılmış müebbet hapis cezasına mahkûm olan hükümlü otuz yılını iyi hâlle infaz kurumunda geçirirse koşullu salıverilebilir.", r: "5275 s. K. m.107/2" },
      { q: "Müvekkil C (müebbet) için süre nedir?", o: ["20 yıl", "24 yıl", "30 yıl", "33 yıl"], a: 1,
        e: "Müebbet hapis cezasına mahkûm olan hükümlü yirmi dört yılını iyi hâlle infaz kurumunda geçirirse koşullu salıverilebilir.", r: "5275 s. K. m.107/2" },
      { q: "Müvekkil D mükerrir. 9 yıllık cezasında koşullu salıverilme için kurumda ne kadar kalmalıdır?", o: ["4 yıl 6 ay", "6 yıl", "6 yıl 9 ay", "9 yıl"], a: 1, t: 20,
        e: "Tekerrür hâlinde süreli hapis cezalarında koşullu salıverilme için cezanın üçte ikisinin infaz kurumunda geçirilmesi gerekir: 9 × 2/3 = 6 yıl.", r: "5275 s. K. m.108/1" },
      { q: "Farklı senaryo: Müvekkil C mükerrir olsaydı müebbette süre kaç yıl olurdu?", o: ["24 yıl", "30 yıl", "33 yıl", "39 yıl"], a: 2,
        e: "Tekerrür hâlinde koşullu salıverilme için müebbette otuz üç yıl, ağırlaştırılmış müebbette otuz dokuz yıl infaz kurumunda geçirilmelidir.", r: "5275 s. K. m.108/1" }
    ]
  }
);

QUICK.push(
  { id: "qx1", b: "infaz", q: "Süreli hapis cezalarında koşullu salıverilme için genel oran nedir?", o: ["Üçte bir", "Yarı", "Üçte iki", "Dörtte üç"], a: 1, e: "Kanunda ayrıca düzenlenen suçlar dışında, süreli hapis cezasının yarısını iyi hâlle infaz kurumunda geçiren hükümlü koşullu salıverilebilir.", r: "5275 s. K. m.107/2" },
  { id: "qx2", b: "infaz", q: "Hırsızlıktan 6 yıl hapis cezası alan, mükerrir olmayan hükümlü koşullu salıverilme için kurumda ne kadar kalmalıdır?", o: ["2 yıl", "3 yıl", "4 yıl", "6 yıl"], a: 1, e: "Genel oran yarıdır: 6 yıl × 1/2 = 3 yıl.", r: "5275 s. K. m.107/2" },
  { id: "qx3", b: "infaz", q: "Kasten öldürmeden 21 yıl hapis cezası alan hükümlü koşullu salıverilme için kurumda ne kadar kalmalıdır?", o: ["10 yıl 6 ay", "14 yıl", "15 yıl 9 ay", "21 yıl"], a: 1, e: "Kasten öldürme suçlarında oran üçte ikidir: 21 × 2/3 = 14 yıl.", r: "5275 s. K. m.107/2" },
  { id: "qx4", b: "infaz", q: "Müebbet hapis cezasında koşullu salıverilme süresi?", o: ["20 yıl", "24 yıl", "28 yıl", "30 yıl"], a: 1, e: "Müebbet hapis cezasına mahkûm olan hükümlü yirmi dört yılını iyi hâlle geçirirse koşullu salıverilebilir.", r: "5275 s. K. m.107/2" },
  { id: "qx5", b: "infaz", q: "Ağırlaştırılmış müebbet hapis cezasında koşullu salıverilme süresi (terör ve örgüt suçları dışında)?", o: ["24 yıl", "28 yıl", "30 yıl", "36 yıl"], a: 2, e: "Ağırlaştırılmış müebbet hapis cezasına mahkûm olan hükümlü otuz yılını iyi hâlle geçirirse koşullu salıverilebilir.", r: "5275 s. K. m.107/2" },
  { id: "qx6", b: "infaz", q: "Mükerrir hükümlünün 12 yıllık süreli hapis cezasında koşullu salıverilme için kurumda geçirmesi gereken süre?", o: ["6 yıl", "8 yıl", "9 yıl", "12 yıl"], a: 1, e: "Tekerrür hâlinde süreli hapis cezalarında oran üçte ikidir: 12 × 2/3 = 8 yıl.", r: "5275 s. K. m.108/1" },
  { id: "qx7", b: "infaz", q: "Genel kurala göre hükümlü denetimli serbestlikten ne zaman yararlanabilir?", o: ["Cezanın başında", "Koşullu salıverilmeye 1 yıl veya daha az süre kaldığında", "Koşullu salıverilmeye 5 yıl kaldığında", "Yalnızca müebbetlerde"], a: 1, e: "Koşullu salıverilmeye bir yıl veya daha az süre kalan hükümlü, kanundaki diğer koşulları taşıyorsa talebi hâlinde kalan süreyi denetimli serbestlik tedbiri altında geçirebilir.", r: "5275 s. K. m.105/A" },
  { id: "qx8", b: "infaz", q: "4 yıl hapis cezası alan (oran 1/2) ve 8 ay tutuklu kalan hükümlü, koşullu salıverilme için kurumda daha ne kadar kalmalıdır?", o: ["2 yıl", "1 yıl 4 ay", "1 yıl", "3 yıl 4 ay"], a: 1, e: "Kurumda geçirilmesi gereken süre 2 yıldır (24 ay). Tutuklulukta geçen 8 ay mahsup edilir: 24 − 8 = 16 ay, yani 1 yıl 4 ay.", r: "TCK m.63 · 5275 s. K. m.107/2" },
  { id: "qx9", b: "infaz", q: "31.07.2023 ve öncesinde işlenen, kapsam dışı olmayan suçlarda 7571 sayılı Kanun ne getirdi?", o: ["Genel af", "Açık cezaevine 3 yıl erken ayrılma ve 3 yıl denetimli serbestlik imkânı", "Cezaların yarıya indirilmesi", "Hiçbir değişiklik"], a: 1, e: "11. Yargı Paketi olarak bilinen 7571 sayılı Kanunla, 31.07.2023 ve öncesinde işlenen suçlarda (terör, örgüt, cinsel suçlar ve aile bireylerine karşı kasten öldürme gibi istisnalar hariç) açık cezaevine üç yıl erken ayrılma ve üç yıl denetimli serbestlik imkânı getirildi.", r: "5275 s. K. Geçici m.10 (7571 s. K.)" },
  { id: "qx10", b: "infaz", q: "Adli para cezası ödenmezse ne olur?", o: ["Cezadan vazgeçilir", "Ödenmeyen kısma karşılık gelen gün sayısınca hapse çevrilir", "İki katına çıkar", "Yalnızca icra takibi yapılır"], a: 1, e: "Adli para cezası ödenmezse, Cumhuriyet savcısı ödenmeyen kısma karşılık gelen gün sayısınca hapis yatırılmasına karar verir.", r: "5275 s. K. m.106/3" },
  { id: "qx11", b: "infaz", q: "Hükümlü, infaz kurumunun işlemine karşı infaz hâkimliğine kural olarak ne kadar sürede şikâyette bulunabilir?", o: ["7 gün", "15 gün", "30 gün", "60 gün"], a: 1, e: "Şikâyet, işlem veya faaliyetin öğrenildiği tarihten itibaren on beş gün içinde infaz hâkimliğine yapılır.", r: "4675 s. K. m.6" },
  { id: "qx12", b: "infaz", q: "Hapis cezasının infazı hangi kadın hükümlüler hakkında geri bırakılır?", o: ["50 yaş üstü kadınlar", "Gebe olan veya doğurduğu tarihten itibaren 1 yıl 6 ay geçmemiş kadınlar", "Tüm anneler", "Yalnızca ikiz doğuranlar"], a: 1, e: "Hapis cezasının infazı, gebe olan veya doğurduğu tarihten itibaren bir yıl altı ay geçmemiş bulunan kadınlar hakkında geri bırakılır.", r: "5275 s. K. m.16/4" },
  { id: "qx13", b: "infaz", q: "Dolandırıcılıktan 5 yıl hapis cezası alan, mükerrir olmayan hükümlü koşullu salıverilme için kurumda ne kadar kalmalıdır?", o: ["1 yıl 8 ay", "2 yıl 6 ay", "3 yıl 4 ay", "5 yıl"], a: 1, e: "Genel oran yarıdır: 5 yıl × 1/2 = 2 yıl 6 ay.", r: "5275 s. K. m.107/2" },
  { id: "qx14", b: "infaz", q: "10 yıl hapis (oran 1/2), tutukluluk yok. Koşullu salıverilmeye 1 yıl kala denetimli serbestliğe ayrılırsa cezaevinde en erken ne kadar kalır?", o: ["3 yıl", "4 yıl", "5 yıl", "6 yıl"], a: 1, e: "Kurumda geçirilmesi gereken süre 5 yıldır; son 1 yıl denetimli serbestlikte geçirilebilirse cezaevinde en erken 4 yıl kalınır (iyi hâl ve diğer koşullar sağlanırsa).", r: "5275 s. K. m.107/2, m.105/A" },
  { id: "qx15", b: "infaz", q: "Kasten öldürmeden 15 yıl hapis cezası alan hükümlünün koşullu salıverilme süresi?", o: ["7 yıl 6 ay", "10 yıl", "11 yıl 3 ay", "15 yıl"], a: 1, e: "Kasten öldürme suçlarında oran üçte ikidir: 15 × 2/3 = 10 yıl.", r: "5275 s. K. m.107/2" },
  { id: "qx16", b: "infaz", q: "Mükerrir hükümlü 6 yıl hapis cezası aldı. Koşullu salıverilme için kurumda ne kadar kalmalıdır?", o: ["3 yıl", "4 yıl", "4 yıl 6 ay", "6 yıl"], a: 1, e: "Tekerrür hâlinde oran üçte ikidir: 6 × 2/3 = 4 yıl.", r: "5275 s. K. m.108/1" },
  { id: "qx17", b: "infaz", q: "Mükerrir hükümlü ağırlaştırılmış müebbet hapis cezası aldı. Koşullu salıverilme süresi?", o: ["30 yıl", "33 yıl", "36 yıl", "39 yıl"], a: 3, e: "Tekerrür hâlinde ağırlaştırılmış müebbette otuz dokuz yıl, müebbette otuz üç yıl infaz kurumunda geçirilmelidir.", r: "5275 s. K. m.108/1" },
  { id: "qx18", b: "infaz", q: "Süre şartı dolan hükümlünün koşullu salıverilmesi için ayrıca ne aranır?", o: ["Hiçbir şey", "Cezasını iyi hâlle geçirmiş olması", "Mağdurun rızası", "Kefalet ödemesi"], a: 1, e: "Koşullu salıverilme için cezanın kanunda belirtilen kısmının infaz kurumunda iyi hâlle geçirilmiş olması gerekir. İyi hâli idare ve gözlem kurulu değerlendirir.", r: "5275 s. K. m.107, m.89" },
  { id: "qx19", b: "infaz", q: "7 yıl 6 ay hapis cezasında (oran 1/2) koşullu salıverilme süresi?", o: ["2 yıl 6 ay", "3 yıl 9 ay", "5 yıl", "3 yıl 6 ay"], a: 1, e: "7 yıl 6 ay = 90 ay; yarısı 45 ay, yani 3 yıl 9 ay.", r: "5275 s. K. m.107/2" },
  { id: "qx20", b: "infaz", q: "3 yıl hapis (oran 1/2) alan hükümlü yargılama sırasında 1 yıl tutuklu kaldı. Koşullu salıverilme için kurumda daha ne kadar kalmalıdır?", o: ["1 yıl 6 ay", "6 ay", "2 yıl", "Hiç kalmaz"], a: 1, e: "Kurumda geçirilmesi gereken süre 1 yıl 6 aydır; 1 yıllık tutukluluk mahsup edilince 6 ay kalır.", r: "TCK m.63 · 5275 s. K. m.107/2" }
);

SOURCES[0].items.push(["7593 sayılı Kanun (RG 18.08.2026/33344)", "Çocuk Koruma Kanunu ile bazı kanunlarda değişiklik: TCK m.31 yaş küçüklüğü cezaları ve 5275 m.107/5 çocuklarda \"bir gün iki gün\" kuralının istisnaları değişti. Oyunda çocuklara ilişkin infaz sorusu bu nedenle yok."]);
SOURCES[0].items.push(["7571 sayılı Kanun, 5275 Geçici m.10", "31.07.2023 ve öncesinde işlenen suçlarda açık cezaevine 3 yıl erken ayrılma ve 3 yıl denetimli serbestlik (istisnalar hariç)."]);
