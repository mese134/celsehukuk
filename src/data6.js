// ===== Yeni alanlar: İcra ve İflas, Ticaret · 26.10.2026 · resmî PDF karşılaştırması bekliyor =====
CASES.push(
  {
    id: "e1", b: "icra", title: "Ödenmeyen Faturalar", court: "İstanbul Anadolu 7. İcra Dairesi", esas: "2026/48210 E.", role: "Alacaklı vekili", zorluk: 2,
    intro: "Müvekkil Akın Ambalaj Ltd. Şti., müşterisi Defne Gıda A.Ş.'ye 2026 yılında teslim ettiği ambalajlar için kestiği 640.000 TL'lik faturaların ödenmemesi üzerine genel haciz yoluyla ilamsız takip başlattı. Ödeme emri 2 Ekim 2026'da tebliğ edildi; borçlu 7 Ekim'de \"borcum yok\" diyerek itiraz etti.",
    evidence: [
      ["Faturalar", "Dört adet; borçlu tarafından imzalanmamış, e-fatura olarak gönderilmiş."],
      ["İrsaliyeler", "Teslim alan çalışanın imzası var."],
      ["Ticari defterler", "Müvekkilin defterlerinde alacak kayıtlı."]
    ],
    steps: [
      { q: "Genel haciz yoluyla takipte ödeme emrine itiraz süresi nedir?", o: ["3 gün", "Tebliğden itibaren 7 gün", "10 gün", "15 gün"], a: 1,
        e: "Borçlu, ödeme emrinin tebliğinden itibaren yedi gün içinde itirazını icra dairesine bildirmek zorundadır. Borçlunun 7 Ekim'deki itirazı süresindedir.", r: "İİK m.62/1" },
      { q: "Süresinde yapılan itirazın takibe etkisi nedir?", o: ["Takip devam eder", "Takip durur", "Takip düşer, alacak sona erer", "Haciz hemen yapılır"], a: 1,
        e: "Süresi içinde yapılan itiraz takibi durdurur. Alacaklı, itirazın kaldırılması veya itirazın iptali yoluna gitmelidir.", r: "İİK m.66/1" },
      { q: "Elinde yalnızca imzasız faturalar ve irsaliyeler var. Hangi yola gitmelisin?", o: ["İcra mahkemesinde itirazın kaldırılması", "Genel mahkemede itirazın iptali davası", "Doğrudan haciz talebi", "Ceza şikâyeti"], a: 1,
        e: "İtirazın icra mahkemesinde kaldırılabilmesi için alacağın imzası ikrar edilmiş veya noterce onaylanmış bir borç ikrarını içeren belgeye ya da resmî belgeye dayanması gerekir. İmzasız faturalar bu nitelikte olmadığından genel mahkemede itirazın iptali davası açılır.", r: "İİK m.67/1, m.68/1" },
      { q: "Taraflar tacir ve alacak ticari. Dava açmadan önce ne yapmalısın?", o: ["Hiçbir şey", "Arabulucuya başvurmalıyım; dava şartıdır", "Tüketici hakem heyetine başvurmalıyım", "Noter ihtarı çekmeliyim; dava şartıdır"], a: 1,
        e: "Ticari davalardan konusu bir miktar paranın ödenmesi olan alacak ve tazminat taleplerinde, dava açılmadan önce arabulucuya başvurulmuş olması dava şartıdır.", r: "TTK m.5/A" },
      { q: "Dava kabul edilir ve borçlunun itirazı haksız bulunursa borçlu aleyhine ne istenebilir?", o: ["Yalnızca faiz", "Alacağın %20'sinden aşağı olmamak üzere icra inkâr tazminatı", "Alacağın iki katı", "Adli para cezası"], a: 1,
        e: "İtirazın iptali davasında borçlunun itirazının haksızlığına karar verilirse, talep hâlinde borçlu alacağın yüzde yirmisinden aşağı olmamak üzere icra inkâr tazminatına mahkûm edilir. Bunun için alacağın likit olması aranır.", r: "İİK m.67/2" }
    ]
  },
  {
    id: "e2", b: "icra", title: "Eski Bir Bono", court: "Kocaeli 2. İcra Hukuk Mahkemesi", esas: "Dava öncesi", role: "Borçlu vekili", zorluk: 3,
    intro: "Müvekkil Serkan V. hakkında, vadesi 10 Şubat 2022 olan 300.000 TL'lik bir bonoya dayanılarak kambiyo senetlerine özgü haciz yoluyla takip başlatıldı. Örnek 10 ödeme emri 19 Ekim 2026'da tebliğ edildi. Müvekkil bononun zamanaşımına uğradığını ve üstelik kendisine ait imzanın sahte olduğunu söylüyor.",
    evidence: [
      ["Bono", "Düzenleyen: Serkan V.; lehtar: Murat C.; vade 10.02.2022."],
      ["Ödeme emri", "19.10.2026 tebliğ; Örnek 10."],
      ["İmza örnekleri", "Müvekkilin bankadaki imzası bonodakiyle belirgin biçimde farklı."]
    ],
    steps: [
      { q: "Kambiyo senetlerine özgü takipte borçluya borcu ödemesi için ne kadar süre verilir?", o: ["7 gün", "10 gün", "15 gün", "30 gün"], a: 1,
        e: "Kambiyo senetlerine özgü haciz yolunda ödeme emri, borçluya on gün içinde takip borcunu ödemesi gerektiğini bildirir.", r: "İİK m.168/1" },
      { q: "İmzanın sahte olduğuna dair itiraz nereye ve hangi sürede yapılır?", o: ["İcra dairesine, 7 gün", "İcra mahkemesine, ödeme emrinin tebliğinden itibaren 5 gün", "Asliye hukuk mahkemesine, 1 ay", "Cumhuriyet savcılığına, süresiz"], a: 1,
        e: "Borçlu, senetteki imza kendisine ait değilse bunu ödeme emrinin tebliğinden itibaren beş gün içinde ayrıca ve açıkça icra mahkemesine bildirmelidir; aksi hâlde senetteki imza o takip bakımından kabul edilmiş sayılır.", r: "İİK m.168/1-4, m.170" },
      { q: "Bono düzenleyene karşı zamanaşımı süresi nedir?", o: ["6 ay", "1 yıl", "Vadeden itibaren 3 yıl", "10 yıl"], a: 2,
        e: "Bonoyu düzenleyen poliçeyi kabul eden gibi sorumludur. Kabul edene (bonoda düzenleyene) karşı senetten doğan istemler vade gününden itibaren üç yılda zamanaşımına uğrar. Vade 10.02.2022 olduğundan süre 10.02.2025'te dolmuştur.", r: "TTK m.749/1, m.778" },
      { q: "Zamanaşımı itirazını nasıl ileri sürersin?", o: ["Takip bitince ayrı dava açarak", "Ödeme emrinin tebliğinden itibaren 5 gün içinde icra mahkemesine itirazla", "İcra dairesine sözlü beyanla, süresiz", "Zamanaşımı re'sen dikkate alınır, itiraza gerek yok"], a: 1,
        e: "Kambiyo senedine dayalı takipte borçlu, borcun olmadığı veya zamanaşımına uğradığı gibi itirazlarını ödeme emrinin tebliğinden itibaren beş gün içinde icra mahkemesine bildirir. Zamanaşımı re'sen gözetilmez.", r: "İİK m.168/1-5, m.169/a · TBK m.161" },
      { q: "İcra mahkemesine yapılan itiraz takibi kendiliğinden durdurur mu?", o: ["Evet, her zaman", "Hayır; ancak icra mahkemesi takibin durdurulmasına karar verebilir", "Yalnızca alacaklı kabul ederse", "Yalnızca teminat yatırılırsa kendiliğinden durur"], a: 1,
        e: "Kambiyo senetlerine özgü takipte icra mahkemesine yapılan itiraz icrayı kendiliğinden durdurmaz. Mahkeme, itirazı ciddi bulursa takibin durdurulmasına karar verebilir.", r: "İİK m.169/a" }
    ]
  },
  {
    id: "t1", b: "ticaret", title: "Karşılıksız Çek", court: "Bursa 3. Asliye Ticaret Mahkemesi", esas: "Dava öncesi", role: "Hamil vekili", zorluk: 2,
    intro: "Müvekkil Yıldız Tekstil A.Ş., müşterisi Kaya Konfeksiyon Ltd. Şti.'den bir çek ciro yoluyla aldı. Çekin düzenleme yeri ve ödeme yeri Bursa; düzenleme tarihi 1 Ekim 2026. Müvekkil çeki 8 Ekim 2026'da bankaya ibraz etti; banka \"karşılıksızdır\" şerhi verdi.",
    evidence: [
      ["Çek", "Düzenleyen: Ertan Mobilya Ltd.; ciranta: Kaya Konfeksiyon Ltd.; 450.000 TL."],
      ["Banka şerhi", "08.10.2026; karşılıksızdır."],
      ["Ciro zinciri", "Kesintisiz."]
    ],
    steps: [
      { q: "Düzenlendiği yerde ödenecek çekin ibraz süresi nedir?", o: ["3 gün", "10 gün", "1 ay", "3 ay"], a: 1,
        e: "Düzenlendiği yerde ödenecek çek on gün içinde, düzenlendiği yerden başka bir yerde ödenecek çek bir ay içinde muhataba ibraz edilmelidir. Aynı kıtada değillerse süre üç aydır. Süreler düzenleme tarihinden başlar.", r: "TTK m.796/1-2" },
      { q: "Cirantaya (Kaya Konfeksiyon) başvurabilmek için ne gerekir?", o: ["Hiçbir koşul yok", "Çekin süresinde ibraz edilmiş ve ödenmediğinin tespit edilmiş olması", "Önce düzenleyen hakkında iflas kararı", "Cirantanın rızası"], a: 1,
        e: "Hamil, süresinde ibraz edilmiş olan çekin ödenmemesi ve ödenmemenin kanundaki yollardan biriyle (örneğin muhatabın tarihli şerhi) tespit edilmesi hâlinde cirantalara, düzenleyene ve diğer çek borçlularına başvurabilir.", r: "TTK m.808" },
      { q: "Hangi takip yolunu seçebilirsin?", o: ["Yalnızca ilamlı takip", "Kambiyo senetlerine özgü haciz yolu", "Rehnin paraya çevrilmesi", "Yalnızca iflas yolu"], a: 1,
        e: "Kambiyo senedine dayanan para alacakları için alacaklı, kambiyo senetlerine özgü haciz yoluyla takip yapabilir.", r: "İİK m.167/1" },
      { q: "Hamilin düzenleyen ve cirantalara karşı başvuru hakları ne zaman zamanaşımına uğrar?", o: ["İbraz süresinin bitiminden itibaren 6 ay", "3 yıl", "10 yıl", "1 ay"], a: 0,
        e: "Hamilin cirantalara, düzenleyene ve diğer çek borçlularına karşı başvuru hakları ibraz süresinin bitiminden itibaren altı ay geçmekle zamanaşımına uğrar.", r: "TTK m.814/1" },
      { q: "Çekten doğan alacak davasında görevli mahkeme hangisidir?", o: ["Asliye hukuk", "Asliye ticaret; çekten doğan davalar mutlak ticari davadır", "Sulh hukuk", "Tüketici mahkemesi"], a: 1,
        e: "Tarafların tacir olup olmadığına bakılmaksızın Türk Ticaret Kanunu'nda düzenlenen hususlardan doğan davalar ticari davadır. Çek TTK'da düzenlendiğinden davaya asliye ticaret mahkemesi bakar.", r: "TTK m.4/1-a, m.5/1" }
    ]
  },
  {
    id: "t2", b: "ticaret", title: "Ortaklıktan Ayrılmak", court: "Ankara 5. Asliye Ticaret Mahkemesi", esas: "Dava öncesi", role: "Ortak vekili", zorluk: 3,
    intro: "Müvekkil Elif S., üç ortaklı Eksen Yazılım Ltd. Şti.'nin %20 payına sahip. Diğer iki ortak müdür; Elif S.'ye iki yıldır şirketin hesapları hakkında bilgi vermiyorlar. Elif S. payını bir arkadaşına devretmek ya da şirketten tamamen ayrılmak istiyor.",
    evidence: [
      ["Şirket sözleşmesi", "Pay devrine ilişkin özel hüküm yok."],
      ["İhtarnameler", "2025 ve 2026'da bilgi istendi; cevap verilmedi."],
      ["Ticaret sicili", "Üç ortak; esas sermaye 500.000 TL."]
    ],
    steps: [
      { q: "Limited şirkette ortak sayısı en fazla kaç olabilir?", o: ["5", "50", "100", "Sınırsız"], a: 1,
        e: "Limited şirkette ortakların sayısı elliyi aşamaz.", r: "TTK m.574/1" },
      { q: "Esas sermaye payının devri sözleşmesi hangi şekle tabidir?", o: ["Sözlü yeterli", "Yazılı şekil ve imzaların noterce onaylanması", "Yalnızca ticaret siciline bildirim", "Adi yazılı, imza onayı gerekmez"], a: 1,
        e: "Esas sermaye payının devri ve devir borcunu doğuran işlem yazılı şekilde yapılır ve tarafların imzaları noterce onaylanır.", r: "TTK m.595/1" },
      { q: "Sözleşmede aksine hüküm yoksa devrin hüküm doğurması için ne gerekir?", o: ["Hiçbir şey", "Genel kurulun onayı", "Mahkeme izni", "Müdürlerin oybirliği"], a: 1,
        e: "Şirket sözleşmesinde aksi öngörülmedikçe esas sermaye payının devri için genel kurulun onayı şarttır.", r: "TTK m.595/2" },
      { q: "Müdürlerin bilgi vermemesine karşı müvekkilin dayanağı nedir?", o: ["Bilgi alma hakkı yoktur", "Her ortak müdürlerden şirketin bütün işleri ve hesapları hakkında bilgi isteyebilir", "Yalnızca yıllık bilanço görülebilir", "Yalnızca %50'den fazla payı olanlar bilgi isteyebilir"], a: 1,
        e: "Her ortak müdürlerden şirketin bütün işleri ve hesapları hakkında bilgi vermelerini isteyebilir; defterleri ve belgeleri inceleyebilir. Talep reddedilirse mahkemeye başvurulabilir.", r: "TTK m.614" },
      { q: "Müvekkil ortaklıktan tamamen ayrılmak istiyor. Şirket sözleşmesinde çıkma hakkı yok. Ne yapabilir?", o: ["Hiçbir şey yapamaz", "Haklı sebeplerin varlığında şirketten çıkmak için dava açabilir", "Tek taraflı noter bildirimiyle çıkar", "Yalnızca şirketin feshini isteyebilir"], a: 1,
        e: "Her ortak, haklı sebeplerin varlığında şirketten çıkmak için dava açabilir. İki yıl boyunca bilgi hakkının engellenmesi haklı sebep olarak ileri sürülebilir.", r: "TTK m.638/2" }
    ]
  }
);

QUICK.push(
  // İCRA VE İFLAS
  { id: "qe1", b: "icra", q: "İcra dairesinin işlemine karşı şikâyet süresi?", o: ["3 gün", "Öğrenmeden itibaren 7 gün", "15 gün", "30 gün"], a: 1, e: "Şikâyet, kanunun başka bir süre belirlediği hâller dışında, işlemin öğrenildiği günden itibaren yedi gün içinde icra mahkemesine yapılır.", r: "İİK m.16/1" },
  { id: "qe2", b: "icra", q: "Hangi durumda şikâyet herhangi bir süreye bağlı değildir?", o: ["Hiçbir durumda", "Bir hakkın yerine getirilmemesi veya sebepsiz sürüncemede bırakılması", "Haciz tutanağındaki yazım hatası", "Yalnızca alacaklının şikâyetinde"], a: 1, e: "Bir hakkın yerine getirilmemesi veya sebepsiz olarak sürüncemede bırakılması hâlinde her zaman şikâyet yoluna gidilebilir.", r: "İİK m.16/2" },
  { id: "qe3", b: "icra", q: "İtirazın iptali davası hangi süre içinde açılmalıdır?", o: ["7 gün", "İtirazın tebliğinden itibaren 1 yıl", "6 ay", "10 yıl"], a: 1, e: "Ödeme emrine itiraz edilen alacaklı, itirazın kendisine tebliği tarihinden itibaren bir yıl içinde mahkemede dava açarak itirazın iptalini isteyebilir.", r: "İİK m.67/1" },
  { id: "qe4", b: "icra", q: "İtirazın kaldırılması hangi süre içinde istenebilir?", o: ["7 gün", "İtirazın tebliğinden itibaren 6 ay", "1 yıl", "Süresiz"], a: 1, e: "Alacaklı, itirazın kendisine tebliği tarihinden itibaren altı ay içinde icra mahkemesinden itirazın kaldırılmasını isteyebilir.", r: "İİK m.68/1" },
  { id: "qe5", b: "icra", q: "Borçlu takip sırasında borç olmayan bir parayı cebrî icra tehdidi altında ödedi. Geri istemek için ne yapar?", o: ["Şikâyet, 7 gün", "İstirdat davası, ödemeden itibaren 1 yıl içinde", "Ceza şikâyeti", "Hiçbir şey yapamaz"], a: 1, e: "Borçlu, borçlu olmadığı parayı icra takibi sebebiyle ödemek zorunda kalırsa, ödeme tarihinden itibaren bir yıl içinde istirdat davası açabilir.", r: "İİK m.72/7" },
  { id: "qe6", b: "icra", q: "Maaş haczinde haczedilecek miktar en az ne kadar olmalıdır (nafaka alacakları hariç)?", o: ["Maaşın onda biri", "Maaşın dörtte biri", "Maaşın yarısı", "Tamamı"], a: 1, e: "Maaş ve ücretlerden, borçlu ve ailesinin geçimi için gerekli miktar ayrıldıktan sonra kalan kısım haczedilir; ancak haciz miktarı maaşın dörtte birinden az olamaz. Nafaka alacakları bu sınıra tabi değildir.", r: "İİK m.83" },
  { id: "qe7", b: "icra", q: "Alacağı rehinle güvence altına alınmış alacaklı kural olarak önce ne yapmalıdır?", o: ["Genel haciz yoluna gitmeli", "Önce rehnin paraya çevrilmesi yoluna başvurmalı", "İflas istemeli", "Dava açmalı"], a: 1, e: "Rehinle temin edilmiş bir alacak için borçlu, alacaklının önce rehnin paraya çevrilmesi yoluna başvurmasını isteyebilir.", r: "İİK m.45/1" },
  { id: "qe8", b: "icra", q: "İlama dayanan alacakların icra edilebilmesi hangi süreyle sınırlıdır?", o: ["1 yıl", "5 yıl", "10 yıl", "Süresiz"], a: 2, e: "İlam hükümleri on yıl geçmekle zamanaşımına uğrar.", r: "İİK m.39/1" },
  { id: "qe9", b: "icra", q: "Tasarrufun iptali davası açabilmek için alacaklının elinde kural olarak ne bulunmalıdır?", o: ["Yalnızca fatura", "Kesin veya geçici aciz belgesi", "Noter ihtarnamesi", "Bilirkişi raporu"], a: 1, e: "Elinde kesin veya geçici aciz belgesi bulunan alacaklı, borçlunun alacaklılarını zarara uğratmak amacıyla yaptığı tasarrufların iptali için dava açabilir.", r: "İİK m.277/1" },
  { id: "qe10", b: "icra", q: "Tasarrufun iptali dava hakkı ne zaman düşer?", o: ["Tasarruftan itibaren 1 yıl", "Tasarruftan itibaren 5 yıl", "10 yıl", "Süresiz"], a: 1, e: "İptal davası hakkı, iptali istenen tasarrufun yapıldığı tarihten itibaren beş yıl geçmekle düşer.", r: "İİK m.284" },
  { id: "qe11", b: "icra", q: "Aşağıdakilerden hangisi kural olarak haczedilemez?", o: ["Borçlunun ikinci evi", "Borçlunun hâline münasip evi", "Borçlunun lüks aracı", "Borçlunun banka hesabındaki para"], a: 1, e: "Borçlunun ve ailesinin hâline münasip evi haczedilemez. Evin değeri hâline münasip olandan fazlaysa satılır ve münasip ev alınabilecek bedel borçluya bırakılır.", r: "İİK m.82/1-12" },
  { id: "qe12", b: "icra", q: "Konkordato talebi hangi mahkemeye yapılır?", o: ["İcra mahkemesi", "Asliye ticaret mahkemesi", "Sulh hukuk", "Asliye hukuk"], a: 1, e: "Konkordato talebi, borçlunun yetkili asliye ticaret mahkemesine yapılır.", r: "İİK m.285/1" },
  // TİCARET
  { id: "qt1", b: "ticaret", q: "Kimdir tacir?", o: ["Yalnızca şirketler", "Bir ticari işletmeyi kısmen de olsa kendi adına işleten kişi", "Vergi mükellefi olan herkes", "Ticaret odasına kayıtlı olan herkes"], a: 1, e: "Bir ticari işletmeyi, kısmen de olsa, kendi adına işleten kişiye tacir denir.", r: "TTK m.12/1" },
  { id: "qt2", b: "ticaret", q: "Tacirin ticari faaliyetinde hangi özen ölçüsü uygulanır?", o: ["Olağan kişi özeni", "Basiretli bir iş insanı gibi hareket etme", "Yalnızca kasıttan sorumluluk", "Özen yükümlülüğü yoktur"], a: 1, e: "Her tacirin, ticaretine ait bütün faaliyetlerinde basiretli bir iş insanı gibi hareket etmesi gerekir.", r: "TTK m.18/2" },
  { id: "qt3", b: "ticaret", q: "Tacirler arasında temerrüde düşürme veya fesih ihbarı nasıl yapılmalıdır?", o: ["Telefonla", "Noter, taahhütlü mektup, telgraf veya güvenli elektronik imzalı KEP ile", "E-posta yeterli", "Şekil serbesttir"], a: 1, e: "Tacirler arasında diğer tarafı temerrüde düşürmeye, sözleşmeyi feshe veya ondan dönmeye yönelik ihbar veya ihtarlar noter aracılığıyla, taahhütlü mektupla, telgrafla veya güvenli elektronik imza kullanılarak kayıtlı elektronik posta sistemiyle yapılır.", r: "TTK m.18/3" },
  { id: "qt4", b: "ticaret", q: "Bir tacirin borçları hangi karineye tabidir?", o: ["Adi borç sayılır", "Ticari borç sayılır", "Kamu borcu sayılır", "Karine yoktur"], a: 1, e: "Bir tacirin borçlarının ticari olması asıldır. Gerçek kişi tacir, işlemin ticari işletmesiyle ilgili olmadığını karşı tarafa bildirmişse borç adi sayılır.", r: "TTK m.19/1" },
  { id: "qt5", b: "ticaret", q: "Tacir sıfatıyla kararlaştırılan ceza koşulu fahiş olduğu gerekçesiyle indirilebilir mi?", o: ["Evet, her zaman", "Hayır; tacir fahiş olduğu iddiasıyla indirilmesini isteyemez", "Yalnızca yarısına kadar", "Yalnızca tüketici ise"], a: 1, e: "Bir tacirin, ticari işletmesine ilişkin olarak kararlaştırdığı ceza koşulunun fahiş olduğu iddiasıyla indirilmesini isteyemez.", r: "TTK m.22" },
  { id: "qt6", b: "ticaret", q: "Ticari işlerde faiz oranı nasıl belirlenir?", o: ["Kanuni faizle sınırlıdır", "Serbestçe belirlenir", "Yalnızca TCMB belirler", "Faiz yasaktır"], a: 1, e: "Ticari işlerde faizin oranı serbestçe belirlenir.", r: "TTK m.8/1" },
  { id: "qt7", b: "ticaret", q: "Vadesi gösterilmemiş bono ne sayılır?", o: ["Geçersiz", "Görüldüğünde ödenecek bono", "1 ay vadeli", "Adi senet"], a: 1, e: "Vadesi gösterilmemiş olan bono, görüldüğünde ödenmesi gereken bono sayılır.", r: "TTK m.777" },
  { id: "qt8", b: "ticaret", q: "Haksız rekabetten doğan davalarda zamanaşımı?", o: ["6 ay", "Öğrenmeden itibaren 1 yıl, her hâlde 3 yıl", "5 yıl", "10 yıl"], a: 1, e: "Haksız rekabetten doğan davalar, hak sahibinin bu hakların doğduğunu öğrendiği tarihten itibaren bir yıl ve her hâlde doğumlarından itibaren üç yıl geçmekle zamanaşımına uğrar; ceza kanunlarında daha uzun süre varsa o uygulanır.", r: "TTK m.60" },
  { id: "qt9", b: "ticaret", q: "Anonim şirketin olağan genel kurulu ne zaman toplanmalıdır?", o: ["Her ay", "Her faaliyet döneminin sonundan itibaren 3 ay içinde", "İki yılda bir", "Ortaklar istediğinde"], a: 1, e: "Olağan genel kurul her faaliyet dönemi sonundan itibaren üç ay içinde toplanır.", r: "TTK m.409/1" },
  { id: "qt10", b: "ticaret", q: "Anonim şirket genel kurul kararlarının iptali davası hangi süre içinde açılır?", o: ["1 ay", "Karar tarihinden itibaren 3 ay", "6 ay", "1 yıl"], a: 1, e: "Kanun veya esas sözleşmeye aykırı genel kurul kararlarına karşı, karar tarihinden itibaren üç ay içinde şirket merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iptal davası açılabilir.", r: "TTK m.445" },
  { id: "qt11", b: "ticaret", q: "Anonim şirket kaç pay sahibiyle kurulabilir?", o: ["En az 5", "En az 2", "Tek pay sahibiyle de kurulabilir", "En az 3"], a: 2, e: "Anonim şirketin kurucusu bir veya birden fazla gerçek veya tüzel kişi olabilir; tek pay sahipli anonim şirket kurulabilir.", r: "TTK m.338/1" },
  { id: "qt12", b: "ticaret", q: "Gerçek kişi tacirin ticaret unvanı neyden oluşur?", o: ["Serbestçe seçilir", "Ad ve soyadından; kısaltılmadan", "Yalnızca soyadından", "Vergi numarasından"], a: 1, e: "Gerçek kişi tacirin ticaret unvanı, kısaltılmamış ad ve soyadından oluşur; işletmenin türünü gösteren ve gerçeğe uygun eklemeler yapılabilir.", r: "TTK m.41/1" }
);
