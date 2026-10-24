// ===== Dava dosyaları ve soru havuzu =====
// Her karar: q soru, o şıklar, a doğru şık (yazım sırası), e gerekçe, r mevzuat, t süre (sn)
const CASES = [
  // ---------------- CEZA ----------------
  {
    id: 'c1', b: 'ceza', title: 'Gece Bahçesinde Bıçak', court: 'Ankara 21. Asliye Ceza Mahkemesi', esas: '2026/1482 E.', role: 'Hâkim', zorluk: 2,
    intro: "Sanık Aydın K., 14 Mart 2026 gecesi saat 02.10'da elinde bıçakla bahçesine giren ve evin kapısını zorlayan Mert S.'yi göğsünden itip yere düşürdü. Mert S. başını bahçe taşına çarparak yaralandı. İddianamede TCK m.86 uyarınca kasten yaralama suçundan cezalandırma isteniyor.",
    evidence: [
      ['Komşu kamerası', "Mert S. bıçağı önde tutarak kapıya yürüyor ve kapıyı tekmeliyor. Sanık kapıyı açıp onu bir kez itiyor, ardından hemen geri çekiliyor."],
      ['Adli tıp raporu', "Mert S.'de kafa derisinde 4 cm kesi. Yaralanma basit tıbbi müdahaleyle giderilebilir; hayati tehlike yok."],
      ['Tanık Selma K.', '"Mert kapıyı tekmeliyor, \'çıkın dışarı\' diye bağırıyordu. Çok korktuk."'],
      ['Sanık savunması', '"Eşimi korumak için ittim, başka bir şey yapmadım."']
    ],
    steps: [
      { q: 'Sanığın eylemini değerlendirirken önce hangi kurumu incelersin?', o: ['Haksız tahrik (TCK m.29)', 'Meşru savunma (TCK m.25/1)', 'Zorunluluk hâli (TCK m.25/2)', 'Hakkın kullanılması (TCK m.26)'], a: 1,
        e: 'Kendisine veya başkasına yönelik haksız, gerçekleşen ya da tekrarı muhtemel bir saldırıyı o anki durumla orantılı biçimde defetmek zorunluluğuyla hareket eden kişiye ceza verilmez. Haksız tahrik ise yalnızca cezayı indirir; hukuka uygunluk nedeni değildir.', r: 'TCK m.25/1' },
      { q: 'Kamera, itişin saldırıyla orantılı olduğunu ve sanığın hemen geri çekildiğini gösteriyor. Hüküm ne olmalı?', o: ['Ceza verilmesine yer olmadığına', 'Davanın düşmesine', 'Beraat', 'Mahkûmiyet, TCK m.29 indirimiyle'], a: 2,
        e: 'Meşru savunma bir hukuka uygunluk nedenidir; fiil baştan hukuka uygundur. Bu durumda beraat kararı verilir. Kusurluluğu kaldıran nedenler ise "ceza verilmesine yer olmadığı" kararına yol açar.', r: 'CMK m.223/2-d' },
      { q: 'Farklı senaryo: Mert yere düşüp bıçak elinden kaçtıktan sonra sanık panikle iki tekme daha atsaydı ve bu, mazur görülebilir korkudan kaynaklansaydı?', o: ['Sınır mazur görülebilir korkuyla aşılmıştır; ceza verilmez', 'Ceza üçte bir oranında indirilir', 'Meşru savunma düşer, tam ceza verilir', 'Haksız tahrik hükümleri uygulanır'], a: 0,
        e: 'Hukuka uygunluk nedenlerinde sınırın mazur görülebilir heyecan, korku veya telaştan dolayı aşılması hâlinde faile ceza verilmez. Bu bir kusurluluk sorunudur; hüküm "ceza verilmesine yer olmadığı" olur.', r: 'TCK m.27/2 · CMK m.223/3' },
      { q: 'Kolluk, olay gecesi hâkim kararı ve savcı emri olmadan sanığın evini aradı, ruhsatsız bir tabanca buldu. Tabanca hükme esas alınabilir mi?', o: ['Evet, suçüstü hâli olduğu için', 'Evet, sanık itiraz etmezse', 'Hayır, hukuka aykırı elde edilen delil hükme esas alınamaz', 'Yalnızca bilirkişi raporu alınırsa'], a: 2,
        e: 'Konutta arama ancak hâkim kararıyla, gecikmesinde sakınca varsa Cumhuriyet savcısının yazılı emriyle yapılır; konutta kolluk amirinin emriyle arama yapılamaz. Kanuna aykırı elde edilen bulgu delil olarak kabul edilemez.', r: 'AY m.38/6 · CMK m.119, 206/2-a, 217/2' }
    ]
  },
  {
    id: 'c2', b: 'ceza', title: 'Tezgâhtaki Telefon', court: 'İzmir 7. Asliye Ceza Mahkemesi', esas: '2026/903 E.', role: 'Hâkim', zorluk: 1,
    intro: 'Sanık Burak T., 3 Haziran 2026 öğleden sonra bir telefon mağazasında tezgâhta duran teşhir telefonunu çantasına koydu ve ödeme yapmadan çıktı. Telefon, soruşturma aşamasında sanık tarafından sağlam olarak iade edildi.',
    evidence: [
      ['Mağaza kamerası', 'Sanık etrafı kolaçan edip telefonu çantasına koyuyor. Kimseye güç kullanılmıyor, kimseyle konuşmuyor.'],
      ['Mağaza müdürü', '"Telefon iki gün sonra polis aracılığıyla eksiksiz geri geldi. Zararımız kalmadı."'],
      ['Adli sicil', 'Kaydı yok.'],
      ['Sanık savunması', '"Pişmanım. Aynı gün geri vermek istedim ama korktum."']
    ],
    steps: [
      { q: 'Eylemin suç vasfı nedir?', o: ['Yağma (TCK m.148)', 'Hırsızlık (TCK m.141/1)', 'Güveni kötüye kullanma (TCK m.155)', 'Dolandırıcılık (TCK m.157)'], a: 1,
        e: 'Zilyedinin rızası olmadan taşınır malın bulunduğu yerden alınması hırsızlıktır. Cebir yok (yağma değil), mal sanığa teslim edilmemiş (güveni kötüye kullanma değil), hileli davranış yok (dolandırıcılık değil).', r: 'TCK m.141/1' },
      { q: 'Basit hırsızlığın kanundaki ceza aralığı?', o: ['6 ay – 2 yıl', '2 – 5 yıl', '1 – 3 yıl', '3 – 7 yıl'], a: 2,
        e: 'Zilyedinin rızası olmadan başkasına ait taşınır malı alan kişi bir yıldan üç yıla kadar hapis cezasıyla cezalandırılır.', r: 'TCK m.141/1' },
      { q: 'Telefon soruşturma aşamasında aynen iade edildi, zarar tamamen giderildi. Etkin pişmanlık indirimi?', o: ['Yarısına kadar indirim', 'Üçte ikisine kadar indirim', 'Üçte bire kadar indirim', 'Ceza verilmez'], a: 1,
        e: 'Suç tamamlandıktan sonra, kovuşturma başlamadan önce zarar aynen iade veya tazminle tamamen giderilirse ceza üçte ikisine kadar indirilir. Kovuşturma başladıktan sonra, hükümden önce olsaydı indirim yarısına kadar olurdu.', r: 'TCK m.168/1-2' },
      { q: 'Sonuç ceza 4 ay hapis. Bu ceza kanun anlamında nasıl nitelenir?', o: ['Uzun süreli hapis cezası', 'Adli para cezası', 'Güvenlik tedbiri', 'Kısa süreli hapis cezası'], a: 3,
        e: 'Hükmedilen bir yıl veya daha az süreli hapis cezası kısa süreli hapis cezasıdır ve adli para cezası gibi seçenek yaptırımlara çevrilebilir.', r: 'TCK m.49/2, m.50' }
    ]
  },
  {
    id: 'c3', b: 'ceza', title: 'Kayıttaki Ses', court: 'Bursa 4. Asliye Ceza Mahkemesi', esas: '2026/611 E.', role: 'Hâkim', zorluk: 3,
    intro: 'Katılan Elif D., eski iş ortağı sanık Cem A.\'nın kendisini aylardır telefonla tehdit ettiğini, son görüşmede "seni de çocuklarını da yaşatmam" dediğini ve bu görüşmeyi sanığın bilgisi dışında telefonuna kaydettiğini beyan etti.',
    evidence: [
      ['Ses kaydı', 'Sanığın sesiyle "seni de çocuklarını da yaşatmam" cümlesi duyuluyor. Kayıt görüşme sırasında katılan tarafından alınmış.'],
      ['HTS kaydı', 'İlgili saatte iki hat arasında 6 dakikalık görüşme var.'],
      ['Sanık savunması', '"Kayıt benim rızam olmadan alındı, delil olamaz. Başka bir şey söylemeyeceğim."']
    ],
    steps: [
      { q: 'Katılanın gizlice aldığı ses kaydı delil olarak değerlendirilebilir mi?', o: ['Hayır, rıza olmadığı için her durumda hukuka aykırıdır', 'Yalnızca savcı onaylarsa', 'Evet; anlık suçta başka delil imkânı olmayan mağdurun kaydı hukuka uygun kabul edilir', 'Sadece tanıkla desteklenirse'], a: 2,
        e: "Yargıtay Ceza Genel Kurulu'na göre, kişiye karşı o anda işlenen bir suçta başka türlü delil elde etme ve yetkililere başvurma imkânı olmayan mağdurun konuşmayı kaydetmesi hukuka uygundur. Mağdurun buluşma ayarlayıp konuşmayı yönlendirerek sonradan delil \"yaratması\" ise hukuka aykırıdır ve hükme esas alınamaz.", r: 'Yargıtay CGK 01.12.2020, E.2018/39, K.2020/485 · CMK m.217/2' },
      { q: '"Seni de çocuklarını da yaşatmam" sözü hangi tehdit türüdür?', o: ['Hayata yönelik tehdit; 6 ay – 2 yıl hapis', 'Malvarlığına yönelik tehdit, şikâyete bağlı', 'Hakaret', 'Şantaj'], a: 0,
        e: 'Kişinin kendisinin veya yakınının hayatına, vücut ya da cinsel dokunulmazlığına saldırı gerçekleştireceğinden bahisle tehdit altı aydan iki yıla kadar hapis gerektirir. Malvarlığına büyük zarar veya sair kötülük tehdidi ise şikâyete bağlıdır.', r: 'TCK m.106/1' },
      { q: 'Sanık duruşmada soruları cevaplamayı reddetti. Bu susma nasıl değerlendirilir?', o: ['Suçun ikrarı sayılır', 'Aleyhine yorumlanır', 'Duruşmaya ara verilip beyana zorlanır', 'Susma hakkıdır, aleyhine delil sayılamaz'], a: 3,
        e: 'Sanık yüklenen suç hakkında açıklamada bulunmama hakkına sahiptir ve bu hak kendisine hatırlatılır. Susmanın aleyhe yorumlanması adil yargılanma hakkını ihlal eder.', r: 'AY m.38/5 · CMK m.147/1-e' },
      { q: 'Katılan yalnızca şikâyete bağlı bir tehdidi, fiili ve faili öğrendikten 7 ay sonra şikâyet etseydi?', o: ['Zamanaşımı dolana kadar şikâyet edilebilir', 'Şikâyet süresi geçmiştir; dava düşer', 'Şikâyet süresi 1 yıldır, sorun yok', 'Savcı re\'sen devam eder'], a: 1,
        e: 'Şikâyete bağlı suçlarda şikâyet, fiil ve failin öğrenildiği günden itibaren altı ay içinde yapılmalıdır. Süre geçmişse kovuşturma şartı gerçekleşmez ve düşme kararı verilir.', r: 'TCK m.73/1 · CMK m.223/8' }
    ]
  },
  {
    id: 'c4', b: 'ceza', title: 'Ekrana Bakan Sürücü', court: 'Konya 3. Asliye Ceza Mahkemesi', esas: '2026/1207 E.', role: 'Hâkim', zorluk: 3,
    intro: "Sanık Deniz Y., 22 Ağustos 2026'da şehir içinde araç kullanırken telefonundaki mesaja baktı ve kırmızı ışıkta duran araca arkadan çarptı. Yan koltukta oturan babası Hasan Y. hayatını kaybetti. Başka yaralanan yok.",
    evidence: [
      ['Kaza tespit tutanağı', 'Sürücü asli kusurlu. Hız sınırı aşılmamış, alkol 0,00 promil.'],
      ['Telefon incelemesi', 'Çarpışmadan 4 saniye önce bir mesajlaşma uygulaması açılmış.'],
      ['Sanık savunması', '"Babamı ben öldürdüm. Her gün bununla yaşıyorum."']
    ],
    steps: [
      { q: 'Sanığın kusur türü nedir?', o: ['Olası kast', 'Bilinçli taksir', 'Doğrudan kast', 'Basit taksir'], a: 3,
        e: 'Sanık dikkat ve özen yükümlülüğüne aykırı davranmış, ancak sonucu öngördüğüne dair veri yok. Öngörülebilir sonucun öngörülmemesi basit taksirdir. Öngörüp istememek bilinçli taksir, öngörüp kabullenmek olası kast olurdu.', r: 'TCK m.22/2' },
      { q: 'Babasının ölümü nedeniyle taksirle öldürme suçundan nasıl karar verirsin?', o: ['Ceza verilmesine yer olmadığına', 'Mahkûmiyet, altıda bir indirimle', 'Beraat', 'Davanın düşmesine'], a: 0,
        e: 'Taksirli hareketin sonucu münhasıran failin kişisel ve ailevi durumu bakımından cezaya hükmedilmesini gereksiz kılacak derecede mağduriyete yol açmışsa ceza verilmez. Bilinçli taksirde ise ceza yalnızca yarıdan altıda bire kadar indirilebilir.', r: 'TCK m.22/6 · CMK m.223/3' },
      { q: 'Farklı senaryo: Kazada yalnızca arka koltuktaki arkadaşı, basit tıbbi müdahaleyle giderilebilecek şekilde yaralansaydı ve şikâyetçi olmasaydı?', o: ['Kovuşturma re\'sen sürer', 'Uzlaştırma zorunludur, aksi hâlde mahkûmiyet', 'Şikâyet yokluğundan düşme kararı verilir', 'Beraat kararı verilir'], a: 2,
        e: 'Taksirle yaralama şikâyete bağlıdır (bilinçli taksirle işlenen, basit yaralamayı aşan hâller hariç). Şikâyet yoksa kovuşturma şartı gerçekleşmez ve dava düşer.', r: 'TCK m.89/5 · CMK m.223/8' },
      { q: 'Başka bir sürücü şehir içinde 150 km/s hızla giderken çarpabileceğini öngörmüş ama "iyi sürücüyüm, olmaz" diye güvenmiş olsaydı?', o: ['Basit taksir', 'Olası kast', 'Bilinçli taksir; ceza üçte birden yarısına kadar artırılır', 'Kast yok, beraat'], a: 2,
        e: 'Kişinin öngördüğü sonucu istememesine karşın neticenin meydana gelmesi bilinçli taksirdir ve ceza üçte birden yarısına kadar artırılır. Sonucu "olursa olsun" diye kabullenseydi olası kast olurdu.', r: 'TCK m.22/3' }
    ]
  },

  // ---------------- İŞ ----------------
  {
    id: 'i1', b: 'is', title: 'On İki Saatlik Vardiya', court: 'İstanbul Anadolu 9. İş Mahkemesi', esas: 'Dava öncesi', role: 'İşçi vekili', zorluk: 2,
    intro: "Müvekkil Fatma Ö. bir lojistik deposunda 4 yıl 2 ay çalıştı. Haftada 6 gün 08.00–20.00 arası çalıştı, her gün 1 saat ara dinlenme kullandı. Son brüt ücreti 42.000 TL. İşveren 10 Ekim 2026'da \"devamsızlık\" gerekçesiyle sözleşmeyi bildirimsiz feshetti; devamsızlık tutanağı yok.",
    evidence: [
      ['PDKS kayıtları', 'Fesihten önceki 3 ayda devamsızlık yok. Giriş 07.52–08.05, çıkış 20.00–20.15.'],
      ['Bordrolar', 'Fazla çalışma tahakkuku yok; bordrolar işçiye hiç imzalatılmamış.'],
      ['Tanık (vardiya amiri)', '"Depoda herkes 12 saat çalışır, fazla mesai ödenmez."'],
      ['Fesih bildirimi', '"Devamsızlık." Tarih ve gün belirtilmemiş.']
    ],
    steps: [
      { q: 'Kıdem, ihbar ve fazla çalışma alacakları için dava açmadan önce ne yapmalısın?', o: ['Noter ihtarı çekmek', 'Doğrudan iş mahkemesinde dava açmak', "İŞKUR'a şikâyet etmek", 'Arabulucuya başvurmak (dava şartı)'], a: 3,
        e: 'Kanuna, bireysel veya toplu iş sözleşmesine dayanan işçi alacağı ve tazminatı ile işe iade taleplerinde arabulucuya başvurulmuş olması dava şartıdır. Doğrudan açılan dava usulden reddedilir.', r: '7036 s. K. m.3/1' },
      { q: 'Haftada 6 gün, günde 12 saat, günlük 1 saat ara dinlenme. Haftalık fazla çalışma kaç saat?', o: ['27 saat', '21 saat', '15 saat', '24 saat'], a: 1, t: 20,
        e: 'Günlük fiili çalışma 12 − 1 = 11 saat; haftalık 6 × 11 = 66 saat. 45 saati aşan 21 saat fazla çalışmadır ve her saati yüzde elli zamlı ödenir.', r: 'İş K. m.41, 63, 68' },
      { q: 'Bordrolar imzasız ve fazla çalışma tahakkuku içermiyor. Fazla çalışmanın ispat yükü kimde ve nasıl ispatlanır?', o: ['İşverende; işçi hiçbir şey ispatlamaz', 'İşçide; tanık ve PDKS kayıtları gibi delillerle ispatlanabilir', 'İşçide; yalnızca yazılı belgeyle', 'Mahkeme re\'sen araştırır, ispat yükü yoktur'], a: 1,
        e: 'Fazla çalışma yaptığını iddia eden işçi bunu ispatla yükümlüdür. İşçinin imzasını taşımayan bordrolar ona karşı delil olarak ileri sürülemez; bu durumda fazla çalışma tanık beyanları, PDKS ve giriş-çıkış kayıtlarıyla ispatlanabilir.', r: 'TMK m.6 · İş K. m.41' },
      { q: 'Müvekkilin kıdemi 4 yıl 2 ay. İhbar süresi kaç haftadır?', o: ['4 hafta', '6 hafta', '2 hafta', '8 hafta'], a: 3,
        e: 'Hizmeti üç yıldan fazla süren işçi için bildirim süresi sekiz haftadır. Bildirime uyulmadan fesihte bu sürenin ücreti ihbar tazminatı olarak ödenir.', r: 'İş K. m.17/2-d' },
      { q: '31 Temmuz 2026 sonrası açılacak davada fazla çalışma alacağının tutarı tam bilinmiyor. Hangi stratejiyi seçersin?', o: ['Belirsiz alacak davası (HMK m.107)', 'Kısmi dava; tahkikat sonuna kadar bir defaya mahsus artırım', 'Önce tespit, sonra eda davası', 'Her aşamada sınırsız ıslah'], a: 1,
        e: '7589 sayılı Kanunla (RG 31.07.2026) belirsiz alacak davası yürürlükten kaldırıldı. Yeni düzende kısmi dava açılır; talep tahkikat sonuna kadar bir defaya mahsus ve ıslah sayılmadan artırılabilir, artırılan kısım için zamanaşımı dava tarihinde kesilmiş sayılır.', r: 'HMK m.109/4 (7589 s. K.)' },
      { q: 'Fazla çalışma ücreti alacağında zamanaşımı?', o: ['1 yıl', '2 yıl', '5 yıl', '10 yıl'], a: 2,
        e: 'Ücret alacakları ile kıdem, ihbar ve yıllık izin ücreti gibi alacaklar beş yıllık zamanaşımına tabidir.', r: 'TBK m.147/1 · İş K. Ek m.3' }
    ]
  },
  {
    id: 'i2', b: 'is', title: 'Savunmasız Fesih', court: 'Ankara 14. İş Mahkemesi', esas: '2026/2214 E.', role: 'İşçi vekili', zorluk: 2,
    intro: "Müvekkil Gökhan E., 120 işçi çalıştıran bir yazılım şirketinde belirsiz süreli sözleşmeyle 2 yıl 3 aydır çalışıyordu. İşveren \"performans düşüklüğü\" gerekçesiyle bildirimli fesih yaptı; fesihten önce müvekkilin savunması alınmadı. Fesih bildirimi 2 Ekim 2026'da tebliğ edildi.",
    evidence: [
      ['Fesih bildirimi', '"Performans hedeflerinin altında kalınması." Savunma tutanağı yok.'],
      ['Performans raporları', 'Son iki dönem: "Beklentiyi karşılıyor."'],
      ['SGK kaydı', 'İşyerinde 120 sigortalı işçi.']
    ],
    steps: [
      { q: 'Müvekkil iş güvencesinden yararlanır mı?', o: ['Hayır, en az 50 işçi şartı aranır', 'Hayır, bildirimli fesih yapıldı', 'Evet; 30+ işçi, 6 ay kıdem ve belirsiz süreli sözleşme var', 'Yalnızca sendika üyesiyse'], a: 2,
        e: 'Otuz veya daha fazla işçi çalıştıran işyerinde, en az altı aylık kıdemi olan ve belirsiz süreli sözleşmeyle çalışan işçi iş güvencesi kapsamındadır.', r: 'İş K. m.18/1' },
      { q: 'İşe iade için arabulucuya en geç ne zamana kadar başvurmalısın?', o: ['Fesih bildiriminin tebliğinden itibaren 1 ay', 'Fesihten itibaren 2 hafta', 'Fesihten itibaren 6 iş günü', '5 yıllık zamanaşımı içinde'], a: 0,
        e: 'Sözleşmesi feshedilen işçi, fesih bildiriminin tebliği tarihinden itibaren bir ay içinde arabulucuya başvurmak zorundadır.', r: 'İş K. m.20/1' },
      { q: 'Arabuluculukta anlaşma sağlanamadı. Dava açma süresi?', o: ['Son tutanaktan itibaren 1 ay', 'Son tutanaktan itibaren 2 hafta', 'Fesihten itibaren 1 yıl', 'Süre sınırı yok'], a: 1,
        e: 'Anlaşmaya varılamazsa son tutanağın düzenlendiği tarihten itibaren iki hafta içinde iş mahkemesinde dava açılabilir.', r: 'İş K. m.20/1' },
      { q: 'Savunma alınmadan "performans" gerekçesiyle yapılan fesihte ana argümanın?', o: ['İhbar süresi verilmediği için fesih geçersiz', 'Verimle ilgili fesihten önce savunma alınması zorunlu; fesih geçersiz', 'Fesih yok hükmünde, sözleşme hiç bitmedi', 'Performans hiçbir zaman fesih nedeni olamaz'], a: 1,
        e: 'Belirsiz süreli sözleşmeyle çalışan işçinin davranışı veya verimiyle ilgili nedenlerle, savunması alınmadan sözleşmesi feshedilemez. Raporlar da performans iddiasıyla çelişiyor.', r: 'İş K. m.19/2' },
      { q: 'Feshin geçersizliğine karar verildi ve kesinleşti. Müvekkil işe dönmek için ne yapmalı?', o: ['1 ay içinde noter ihtarı', 'Kesinleşen kararın tebliğinden itibaren 10 iş günü içinde işverene başvurmalı', 'Bir şey yapmasına gerek yok; işveren davet eder', '2 hafta içinde icra takibi'], a: 1,
        e: 'İşçi, kesinleşen kararın tebliğinden itibaren on iş günü içinde işe başlamak için işverene başvurmak zorundadır; başvurmazsa fesih geçerli sayılır.', r: 'İş K. m.21/5' },
      { q: 'İşveren işçiyi işe başlatmazsa işe başlatmama tazminatı ne kadardır?', o: ['En az 2, en çok 4 aylık ücret', 'En az 6, en çok 12 aylık ücret', 'Sabit 3 aylık ücret', 'En az 4, en çok 8 aylık ücret'], a: 3,
        e: 'İşveren işçiyi bir ay içinde işe başlatmazsa en az dört, en çok sekiz aylık ücret tutarında tazminat öder. Ayrıca boşta geçen süre için en çok dört aya kadar ücret ve diğer haklar ödenir.', r: 'İş K. m.21/1, 21/3' }
    ]
  },
  {
    id: 'i3', b: 'is', title: 'Üç Aydır Maaş Yok', court: 'İzmir 5. İş Mahkemesi', esas: 'Dava öncesi', role: 'İşçi vekili', zorluk: 1,
    intro: 'Müvekkil Hakan Ç. bir inşaat firmasında 3 yıl 6 aydır çalışıyor. İşveren Temmuz, Ağustos ve Eylül 2026 ücretlerini ödemedi. Müvekkil ayrılmak istiyor ama "istifa edersem tazminatımı kaybeder miyim?" diye soruyor. 2026 yılında yıllık izin kullanmamış.',
    evidence: [
      ['Banka dökümü', 'Son ücret yatışı 30 Haziran 2026.'],
      ['Mesaj yazışması', 'İşveren: "Para gelince öderiz, sabredin."'],
      ['Puantaj', 'Müvekkil her gün çalışmaya devam etmiş.']
    ],
    steps: [
      { q: 'Müvekkil sözleşmeyi nasıl sona erdirmeli?', o: ['İstifa dilekçesi vermeli', 'İşverenin feshetmesini beklemeli', 'Ücretin ödenmemesi nedeniyle haklı nedenle derhal feshetmeli', 'İhbar süresi vererek feshetmeli'], a: 2,
        e: 'Ücreti kanun veya sözleşme hükümlerine göre ödenmeyen işçi sözleşmeyi süreyi beklemeden haklı nedenle feshedebilir. Fesih bildiriminde gerekçenin açıkça yazılması kıdem tazminatı için önemlidir.', r: 'İş K. m.24/II-e' },
      { q: 'Haklı nedenle fesihte müvekkil hangi tazminatları alır?', o: ['Kıdem ve ihbar', 'Yalnızca ihbar', 'Hiçbiri', 'Kıdem alır, ihbar alamaz'], a: 3,
        e: 'İşçinin haklı feshi kıdem tazminatına hak kazandırır. İhbar tazminatı ise bildirim süresine uymadan fesheden tarafın karşı tarafa ödediği tazminattır; fesheden işçi kendisi talep edemez.', r: '1475 s. K. m.14 · İş K. m.17' },
      { q: 'Feshi beklemeden, ücreti ödenmeyen müvekkil başka ne yapabilir?', o: ['İş görmekten kaçınabilir (ödeme gününden itibaren 20 gün geçtiyse)', 'İşyerindeki malzemeyi alıkoyabilir', 'Yalnızca suç duyurusunda bulunabilir', 'Hiçbir şey'], a: 0,
        e: 'Ücreti ödeme gününden itibaren yirmi gün içinde mücbir sebep dışında ödenmeyen işçi iş görmekten kaçınabilir. Bu kaçınma toplu nitelik kazansa da grev sayılmaz.', r: 'İş K. m.34' },
      { q: '3 yıl 6 aylık kıdem için yıllık ücretli izin süresi?', o: ['20 gün', '14 gün', '26 gün', '18 gün'], a: 1,
        e: 'Hizmet süresi bir yıldan beş yıla kadar (beş yıl dahil) olanlara on dört günden az olmamak üzere yıllık izin verilir. Kullanılmayan izin ücreti sözleşme sona erince ödenir.', r: 'İş K. m.53, 59' }
    ]
  },
  {
    id: 'i4', b: 'is', title: 'Evlilik Kıdemi', court: 'Bursa 2. İş Mahkemesi', esas: 'Dava öncesi', role: 'İşçi vekili', zorluk: 1,
    intro: "Müvekkil Kübra A. bir tekstil fabrikasında 2 yıl 7 aydır çalışıyor. 15 Mart 2026'da evlendi ve şimdi evlilik nedeniyle işten ayrılmak istiyor. Fabrika Bursa'da, işverenin merkezi İstanbul'da.",
    evidence: [
      ['Nüfus kaydı', 'Evlenme tarihi 15.03.2026.'],
      ['SGK hizmet dökümü', '2 yıl 7 ay kesintisiz hizmet.']
    ],
    steps: [
      { q: 'Müvekkil evlilik nedeniyle kendi isteğiyle ayrılırsa kıdem tazminatı alır mı?', o: ['Evet; evlilik tarihinden itibaren 1 yıl içinde ayrılırsa alır', 'Hayır, istifa eden işçi kıdem alamaz', 'Yalnızca 5 yıl kıdemi varsa', 'Yalnızca işveren onaylarsa'], a: 0,
        e: "Kadın işçinin evlendiği tarihten itibaren bir yıl içinde kendi arzusuyla sözleşmeyi sona erdirmesi hâlinde kıdem tazminatı ödenir. Müvekkil 15.03.2027'ye kadar bu haktan yararlanabilir.", r: '1475 s. K. m.14/1-5' },
      { q: 'Kıdem tazminatı hangi ücret üzerinden hesaplanır?', o: ['Net ücret', 'Asgari ücret', 'Son 12 ayın net ortalaması', 'Son brüt ücret ve düzenli yan haklar (giydirilmiş ücret), tavanla sınırlı'], a: 3,
        e: 'Her tam yıl için 30 günlük ücret esas alınır. Hesapta son brüt ücretin yanında yol, yemek gibi düzenli ödenen parasal menfaatler de dikkate alınır; tutar kıdem tazminatı tavanını aşamaz.', r: '1475 s. K. m.14' },
      { q: 'Davayı hangi mahkemede açabilirsin?', o: ['Yalnızca İstanbul iş mahkemesi (davalının merkezi)', 'Bursa veya İstanbul iş mahkemesi', 'Bursa Asliye Ticaret Mahkemesi', 'Bursa Tüketici Mahkemesi'], a: 1,
        e: 'İş mahkemeleri görevlidir. Yetkili mahkeme, davalının dava tarihindeki yerleşim yeri veya işin yapıldığı yer mahkemesidir; işçi ikisinden birini seçebilir.', r: '7036 s. K. m.5, 6' },
      { q: 'Zorunlu arabuluculukta görüşmeler kural olarak ne kadar sürede sonuçlandırılır?', o: ['1 hafta', '30 gün', '3 hafta; zorunlu hâllerde en çok 1 hafta uzatılabilir', '6 hafta'], a: 2,
        e: 'Arabulucu, kendisine başvurulan tarihten itibaren üç hafta içinde süreci sonuçlandırır; zorunlu hâllerde bu süre en fazla bir hafta uzatılabilir.', r: '7036 s. K. m.3/10' }
    ]
  },

  // ---------------- AİLE ----------------
  {
    id: 'a1', b: 'aile', title: 'On Aylık Evlilik', court: 'Antalya 2. Aile Mahkemesi', esas: '2026/1855 E.', role: 'Hâkim', zorluk: 2,
    intro: 'Selin ve Kaan B. 10 aydır evli. Ortak dilekçeyle anlaşmalı boşanma istediler ve protokol sundular: müşterek çocuk yok, karşılıklı tazminat ve nafaka talebi yok, ev eşyası paylaşılmış.',
    evidence: [
      ['Evlilik cüzdanı', 'Evlenme tarihi 28.12.2025.'],
      ['Protokol', 'Taraflar karşılıklı hiçbir talepte bulunmadıklarını beyan ediyor.'],
      ['Duruşma beyanı', 'İki taraf da "anlaştık, boşanmak istiyoruz" diyor.']
    ],
    steps: [
      { q: 'Talep anlaşmalı boşanma olarak kabul edilebilir mi?', o: ['Evet, taraflar anlaştıysa her zaman', 'Evet, çocuk olmadığı için', 'Hayır; evlilik en az 1 yıl sürmüş olmalı', 'Hayır, önce arabuluculuk zorunlu'], a: 2,
        e: 'Evlilik en az bir yıl sürmüş ve eşler birlikte başvurmuş ya da biri diğerinin davasını kabul etmişse evlilik birliği temelinden sarsılmış sayılır. Bir yıl dolmadıysa bu hüküm uygulanamaz.', r: 'TMK m.166/3' },
      { q: 'Bu durumda tarafların "boşanmak istiyoruz" beyanları hâkimi bağlar mı?', o: ['Evet, ikrar kesin delildir', 'Hayır; boşanma olgularına ilişkin ikrar hâkimi bağlamaz, temelden sarsılma ispatlanmalı', 'Evet, yazılı protokol olduğu için', 'Sadece yeminle desteklenirse'], a: 1,
        e: 'Hâkim, boşanmaya ilişkin olguların varlığına kanaat getirmedikçe bunları ispatlanmış sayamaz; tarafların bu konudaki ikrarı hâkimi bağlamaz. Dava genel sebebe göre çekişmeli olarak görülür.', r: 'TMK m.184 · TMK m.166/1' },
      { q: 'Farklı senaryo: Evlilik 2 yıl sürmüş olsaydı, anlaşmalı boşanmada hâkimin yapması zorunlu olan nedir?', o: ['Yalnızca protokolü imzalatmak', 'Tanık dinlemek', 'Sosyal inceleme raporu almak', 'Tarafları bizzat dinlemek, serbest iradeye kanaat getirmek ve protokolü uygun bulmak'], a: 3,
        e: 'Hâkim tarafları bizzat dinler, iradelerinin serbestçe açıklandığına kanaat getirir ve boşanmanın malî sonuçları ile çocukların durumuna ilişkin düzenlemeyi uygun bulursa boşanmaya karar verir.', r: 'TMK m.166/3' },
      { q: 'Protokolde velayet anneye verilmiş, ama babanın kişisel ilişkisi ve iştirak nafakası hiç düzenlenmemiş (2 yıllık evlilik, 1 çocuk). Hâkim ne yapar?', o: ['Protokolü olduğu gibi onaylar', 'Çocuğun menfaatine gerekli değişiklikleri yapar; taraflar kabul ederse boşanmaya karar verir', 'Davayı reddeder', 'Dosyayı arabulucuya gönderir'], a: 1,
        e: 'Hâkim, tarafların ve çocukların menfaatlerini gözeterek anlaşmada gerekli gördüğü değişiklikleri yapabilir. Değişiklikler taraflarca kabul edilirse boşanmaya karar verilir.', r: 'TMK m.166/3, 182' },
      { q: 'Boşanan kadın hemen yeniden evlenmek istiyor. Kanuni bekleme süresi?', o: ['100 gün', '180 gün', 'Bekleme süresi yok', '300 gün'], a: 3,
        e: 'Evliliği sona eren kadın, sona erme tarihinden itibaren üç yüz gün geçmedikçe evlenemez. Doğurmakla süre biter; gebe olmadığı anlaşılırsa veya aynı eşle yeniden evlenecekse mahkeme süreyi kaldırır.', r: 'TMK m.132' }
    ]
  },
  {
    id: 'a2', b: 'aile', title: 'Affedilen Mesajlar', court: 'İstanbul 11. Aile Mahkemesi', esas: 'Dava öncesi', role: 'Davacı vekili', zorluk: 2,
    intro: 'Müvekkil Burcu T., eşi Levent T.\'nin başka bir kadınla ilişkisini 8 ay önce mesajlardan öğrendi. O dönem eşine "seni affediyorum, yeniden başlayalım" yazdı. Son 2 ayda eşi müvekkile sürekli hakaret etmeye başladı. Müvekkil çalışmıyor, düzenli geliri yok.',
    evidence: [
      ['Mesaj dökümü', 'Levent T. ile üçüncü kişi arasında 8 ay öncesine ait yazışmalar.'],
      ['Müvekkilin mesajı', '"Seni affediyorum, yeniden başlayalım."'],
      ['Tanıklar', 'Son 2 ayda eşin müvekkile hakaret ettiğini doğruluyor.'],
      ['Gelir durumu', 'Müvekkilin geliri yok; eşinin aylık net geliri 95.000 TL.']
    ],
    steps: [
      { q: 'Davayı zina sebebine dayandırabilir misin?', o: ['Evet, zina mutlak sebeptir, süre yoktur', 'Evet, 5 yıl dolmadığı için', 'Hayır; öğrenmeden itibaren 6 ay geçmiş ve müvekkil affetmiş', 'Yalnızca cezai mahkûmiyet varsa'], a: 2,
        e: 'Zina sebebiyle dava hakkı, öğrenmeden itibaren altı ay ve her hâlde fiilden itibaren beş yıl geçmekle düşer. Ayrıca affeden eşin dava hakkı yoktur.', r: 'TMK m.161/2-3' },
      { q: 'Hangi sebebe dayanmak en isabetlidir?', o: ['Evlilik birliğinin temelinden sarsılması', 'Terk (TMK m.164)', 'Akıl hastalığı (TMK m.165)', 'Ortak hayatın yeniden kurulamaması (TMK m.166/4)'], a: 0,
        e: 'Affedilen olay tek başına dayanak yapılamasa da sonraki hakaretler ortak hayatın sürdürülmesini beklenemez kılar. Genel boşanma sebebi en uygun dayanaktır.', r: 'TMK m.166/1' },
      { q: 'Müvekkilin geliri yok ve kusuru daha ağır değil. Boşanmadan sonrası için hangi nafakayı istersin?', o: ['İştirak nafakası', 'Yoksulluk nafakası', 'Yalnızca tedbir nafakası', 'Nafaka istenemez'], a: 1,
        e: 'Boşanma yüzünden yoksulluğa düşecek taraf, kusuru daha ağır olmamak koşuluyla diğer taraftan malî gücü oranında nafaka isteyebilir. Dava süresince ayrıca tedbir nafakası istenebilir.', r: 'TMK m.175, 169' },
      { q: 'Müvekkil "yoksulluk nafakası artık süreli mi oldu?" diye soruyor. Ekim 2026 itibarıyla doğru cevap?', o: ['Evet, AYM kararıyla bütün nafakalar 3 yılla sınırlandı', 'AYM "süresiz olarak" ibaresini iptal etti; iptal 30.06.2027\'de yürürlüğe girecek, o tarihe kadar mevcut hüküm uygulanır', 'Hayır, AYM başvuruyu reddetti', 'Yoksulluk nafakası tamamen kaldırıldı'], a: 1, t: 20,
        e: 'Anayasa Mahkemesi TMK m.175\'teki "süresiz olarak" ibaresini iptal etti; iptal, kararın Resmî Gazete\'de yayımlanmasından dokuz ay sonra (30.06.2027) yürürlüğe girecek. Yasama yeni bir süre düzenlemesi yapabilir. Nafaka kurumu kaldırılmadı ve iptal kararları geriye yürümez.', r: 'AYM 04.06.2026, E.2025/156, K.2026/131 · RG 30.09.2026/33386' },
      { q: 'Hakaretler nedeniyle kişilik hakkı saldırıya uğrayan müvekkil için ne istenebilir?', o: ['Yalnızca maddi tazminat', 'Cezai şart', 'Hiçbir şey, hakaret ceza mahkemesinin işidir', 'Manevi tazminat'], a: 3,
        e: 'Boşanmaya sebep olan olaylar yüzünden kişilik hakkı saldırıya uğrayan taraf, kusurlu diğer taraftan uygun miktarda manevi tazminat isteyebilir.', r: 'TMK m.174/2' },
      { q: 'Dava hangi yerde açılabilir?', o: ['Yalnızca evlenmenin yapıldığı yer', 'Eşlerden birinin yerleşim yeri veya son 6 aydır birlikte oturdukları yer', 'Yalnızca davalının yerleşim yeri', 'Türkiye\'deki herhangi bir aile mahkemesi'], a: 1,
        e: 'Boşanma davalarında yetkili mahkeme, eşlerden birinin yerleşim yeri veya davadan önce son altı aydan beri birlikte oturdukları yer mahkemesidir.', r: 'TMK m.168' }
    ]
  },
  {
    id: 'a3', b: 'aile', title: 'Ada Kimde Kalacak', court: 'Eskişehir 1. Aile Mahkemesi', esas: '2026/740 E.', role: 'Hâkim', zorluk: 3,
    intro: "Çekişmeli boşanma davasında eşler, 10 yaşındaki kızları Ada'nın velayetini istiyor. Çocuğun günlük bakımını anne üstlenmiş; baba son 3 yıl yurt dışında çalışmış, 4 ay önce dönmüş. Ada görüşmede babasıyla yaşamak istediğini söyledi.",
    evidence: [
      ['Sosyal inceleme raporu', 'Anneyle güçlü bağlanma; okul düzeni annenin evinde oturmuş. Babanın evi yeterli, ancak çalışma saatleri uzun.'],
      ['Çocuğun beyanı', '"Babamla kalmak istiyorum, o bana hiç kızmıyor."'],
      ['Okul rehberlik raporu', 'Akademik ve sosyal uyum iyi.']
    ],
    steps: [
      { q: "Ada'nın görüşü konusunda nasıl hareket edersin?", o: ['10 yaşındaki çocuk dinlenmez', 'Çocuğun tercihi aynen uygulanır', 'Dinlenir; görüşü dikkate alınır ama bağlayıcı değildir, üstün yarar esastır', 'Yalnızca 15 yaşından sonra dinlenir'], a: 2,
        e: 'İdrak çağındaki çocuğun kendisini ilgilendiren konularda görüşü alınır ve yaşı ile olgunluğuna göre ağırlık verilir. Velayet kararının ölçütü ise çocuğun üstün yararıdır; tercihin gerekçesi de değerlendirilir.', r: 'Çocuk Hakları Sözleşmesi m.12 · TMK m.182' },
      { q: 'Velayete ilişkin uzman görüşü nasıl alınır?', o: ['Adli Tıp Kurumu raporu', 'Aile mahkemesi uzmanınca (psikolog, pedagog, sosyal çalışmacı) sosyal inceleme raporu', 'Zorunlu bilirkişi heyeti', 'Kolluk araştırması'], a: 1,
        e: 'Aile mahkemelerinde psikolog, pedagog ve sosyal çalışmacı uzmanlar görev yapar; hâkim gerek gördüğünde tarafları ve çocuğu bu uzmanlara inceletir.', r: '4787 s. K. m.5' },
      { q: 'Rapor anne yanında istikrarı öne çıkarıyor. Velayet anneye verilirse baba için ne düzenlenir?', o: ['Çocukla kişisel ilişki (görüşme düzeni), kendiliğinden', 'Hiçbir şey; baba ayrıca dava açar', 'Yalnızca telefon görüşmesi', 'Babanın velayeti ortak velayet olarak sürer'], a: 0,
        e: 'Hâkim boşanma kararıyla birlikte, velayeti kendisine verilmeyen eşle çocuk arasındaki kişisel ilişkiyi çocuğun yararına uygun biçimde düzenler.', r: 'TMK m.182/1, 323' },
      { q: 'Velayeti verilmeyen babanın çocuğun giderlerine katılımı nasıl belirlenir?', o: ['Sadece anne talep ederse', 'Baba gönüllü öderse', 'Çocuk 18 yaşına gelince toplu ödenir', 'Gücü oranında iştirak nafakası takdir edilir'], a: 3,
        e: 'Velayet kendisine verilmeyen eş, çocuğun bakım ve eğitim giderlerine gücü oranında katılmak zorundadır. Bu katılım iştirak nafakasıyla sağlanır.', r: 'TMK m.182/2' }
    ]
  },
  {
    id: 'a4', b: 'aile', title: 'Gece Yarısı Başvurusu', court: 'Gaziantep 3. Aile Mahkemesi', esas: 'Nöbetçi hâkimlik', role: 'Hâkim', zorluk: 2,
    intro: 'Zeynep K. gece 23.30\'da karakola gelerek eşi Murat K.\'nın kendisini darp ettiğini ve "seni öldüreceğim" dediğini anlattı. Elinde doktor raporu yok; yüzünde kızarıklık var. Ortak konutta iki çocuklarıyla yaşıyorlar.',
    evidence: [
      ['Kolluk tutanağı', 'Başvurucu ağlayarak beyanda bulundu. Murat K. şu an evde.'],
      ['Komşu beyanı', '"Gece bağırış ve kapı çarpma sesleri duydum."'],
      ['Başvurucu', '"Eve dönmekten korkuyorum."']
    ],
    steps: [
      { q: 'Koruyucu tedbir kararı için ne aranır?', o: ['Doktor raporu şarttır', 'Ceza davası açılmış olmalı', 'Şiddetin uygulandığına dair delil veya belge aranmaz', 'İki tanık gerekir'], a: 2,
        e: 'Koruyucu ve önleyici tedbir kararı verilmesi için şiddetin uygulandığı hususunda delil veya belge aranmaz; tedbir gecikmeksizin verilir.', r: '6284 s. K. m.8/3' },
      { q: 'Gecikmesinde sakınca var. Murat K.\'yı ortak konuttan uzaklaştırma kararını kim verebilir?', o: ['Yalnızca aile mahkemesi hâkimi, ertesi gün', 'Kolluk amiri de verebilir; ertesi iş günü hâkim onayına sunulur', 'Mülki amir, onaysız', 'Cumhuriyet savcısı, kesin olarak'], a: 1,
        e: 'Gecikmesinde sakınca bulunan hâllerde konuttan uzaklaştırma ve yaklaşmama gibi bazı önleyici tedbirler kolluk amirlerince de alınabilir. Karar, alındığı günü izleyen ilk iş gününde hâkimin onayına sunulur; hâkim 24 saat içinde onaylamazsa tedbir kendiliğinden kalkar.', r: '6284 s. K. m.5' },
      { q: 'Tedbir kararı ilk defasında en fazla ne kadar süreyle verilir?', o: ['1 ay', '3 ay', '1 yıl', '6 ay'], a: 3,
        e: 'Tedbir kararları ilk defasında en fazla altı ay süreyle verilebilir; şiddet tehlikesi sürüyorsa süre uzatılabilir.', r: '6284 s. K. m.8/1' },
      { q: 'Murat K. uzaklaştırma kararına aykırı olarak eve geldi. Yaptırım nedir?', o: ['Adli para cezası', 'Yalnızca uyarı', 'Tedbir kendiliğinden kalkar', '3 günden 10 güne kadar zorlama hapsi; tekrarında 15 günden 30 güne kadar'], a: 3,
        e: 'Tedbir kararına aykırılıkta hâkim kararıyla üç günden on güne kadar zorlama hapsi uygulanır; tekrarında her defasında on beş günden otuz güne kadar. Toplam süre altı ayı geçemez.', r: '6284 s. K. m.13' }
    ]
  }
];

const QUICK = [
  // CEZA
  { id: 'qc1', b: 'ceza', q: 'Bireysel suçlarda gözaltı süresi, en yakın hâkime gönderme için gereken süre hariç en fazla?', o: ['12 saat', '24 saat', '48 saat', '4 gün'], a: 1, e: 'Yakalanan kişi, yakalama yerine en yakın hâkime gönderilmesi için zorunlu süre hariç yirmi dört saati geçemez.', r: 'CMK m.91/1' },
  { id: 'qc2', b: 'ceza', q: 'Şikâyete bağlı suçlarda şikâyet süresi, fiil ve failin öğrenilmesinden itibaren?', o: ['3 ay', '1 yıl', '6 ay', '2 yıl'], a: 2, e: 'Şikâyet hakkı, fiil ve failin öğrenildiği günden itibaren altı ay içinde kullanılır.', r: 'TCK m.73/1' },
  { id: 'qc3', b: 'ceza', q: 'Ceza muhakemesinde istinaf süresi hangi andan itibaren ne kadardır?', o: ['Hükmün açıklanmasından itibaren 7 gün', 'Hükmün gerekçesiyle birlikte tebliğinden itibaren iki hafta', 'Hükmün açıklanmasından itibaren iki hafta', 'Kesinleşmeden itibaren 1 ay'], a: 1, e: 'AYM, sürenin hükmün açıklanmasından başlatılmasını Anayasa\'ya aykırı bularak iptal etti (RG 24.10.2023). Yürürlükteki metne göre istinaf istemi, hükmün gerekçesiyle birlikte tebliğ edildiği tarihten itibaren iki hafta içinde yapılır.', r: 'CMK m.273/1' },
  { id: 'qc4', b: 'ceza', q: 'Fiili işlediği sırada 12 yaşını doldurmamış çocuk hakkında?', o: ['Ceza yarı oranında indirilir', 'Algılama yeteneği araştırılır', 'Tam ceza verilir', 'Ceza sorumluluğu yoktur; güvenlik tedbiri uygulanabilir'], a: 3, e: 'On iki yaşını doldurmamış çocukların ceza sorumluluğu yoktur; çocuklara özgü güvenlik tedbirleri uygulanabilir.', r: 'TCK m.31/1' },
  { id: 'qc5', b: 'ceza', q: 'Haksız tahrikte (müebbet cezalar dışındaki hâllerde) ceza hangi oranda indirilir?', o: ['Dörtte birden dörtte üçe kadar', 'Altıda birden üçte bire kadar', 'Üçte birden yarıya kadar', 'Ceza verilmez'], a: 0, e: 'Haksız bir fiilin meydana getirdiği hiddet veya şiddetli elemin etkisi altında suç işleyen kişiye, diğer hâllerde verilecek cezanın dörtte birinden dörtte üçüne kadarı indirilir.', r: 'TCK m.29' },
  { id: 'qc6', b: 'ceza', q: 'Kasten öldürme suçunun temel hâlinin cezası?', o: ['20 – 25 yıl hapis', 'Müebbet hapis', 'Ağırlaştırılmış müebbet hapis', '15 – 20 yıl hapis'], a: 1, e: 'Bir insanı kasten öldüren kişi müebbet hapis cezasıyla cezalandırılır. Nitelikli hâller ağırlaştırılmış müebbet gerektirir.', r: 'TCK m.81/1' },
  { id: 'qc7', b: 'ceza', q: 'Kanuna aykırı elde edilen bulguların delil sayılamayacağı hangi normda düzenlenir?', o: ['AY m.36', 'TCK m.2', 'AY m.38/6', 'CMK m.100'], a: 2, e: 'Kanuna aykırı olarak elde edilmiş bulgular delil olarak kabul edilemez. CMK m.206 ve 217 de bu ilkeyi tekrarlar.', r: 'AY m.38/6' },
  { id: 'qc8', b: 'ceza', q: 'Kısa süreli hapis cezası hangi süreyi kapsar?', o: ['6 ay ve altı', '1 yıl veya daha az', '2 yıl veya daha az', '3 yıl veya daha az'], a: 1, e: 'Hükmedilen bir yıl veya daha az süreli hapis cezası kısa süreli hapis cezasıdır.', r: 'TCK m.49/2' },
  { id: 'qc9', b: 'ceza', q: 'Hâkim kararı yokken, gecikmesinde sakınca varsa konutta arama kimin yazılı emriyle yapılabilir?', o: ['Kolluk amiri', 'Cumhuriyet savcısı', 'Vali', 'Mülki amir'], a: 1, e: 'Gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısının yazılı emriyle arama yapılabilir; konutta kolluk amirinin emriyle arama yapılamaz.', r: 'CMK m.119/1' },
  { id: 'qc10', b: 'ceza', q: 'Meşru savunmada sınırın mazur görülebilir korkuyla aşılması hâlinde?', o: ['Ceza yarı oranında indirilir', 'Ceza altıda bir indirilir', 'Tam ceza verilir', 'Ceza verilmez'], a: 3, e: 'Sınırın mazur görülebilecek bir heyecan, korku veya telaştan dolayı aşılması hâlinde faile ceza verilmez.', r: 'TCK m.27/2' },
  // İŞ
  { id: 'qi1', b: 'is', q: 'Haftalık normal çalışma süresi en çok kaç saattir?', o: ['40', '45', '48', '50'], a: 1, e: 'Genel bakımdan çalışma süresi haftada en çok kırk beş saattir.', r: 'İş K. m.63' },
  { id: 'qi2', b: 'is', q: 'Fazla çalışma ücreti normal saat ücretinin yüzde kaç fazlasıyla ödenir?', o: ['%25', '%75', '%50', '%100'], a: 2, e: 'Her bir saat fazla çalışma için normal çalışma ücretinin saat başına düşen miktarı yüzde elli yükseltilerek ödenir.', r: 'İş K. m.41/2' },
  { id: 'qi3', b: 'is', q: 'Yıllık fazla çalışma süresi en çok kaç saattir?', o: ['180', '220', '300', '270'], a: 3, e: 'Fazla çalışma süresinin toplamı bir yılda iki yüz yetmiş saatten fazla olamaz.', r: 'İş K. m.41/8' },
  { id: 'qi4', b: 'is', q: 'Hizmeti 5 yıldan fazla, 15 yıldan az olan işçinin yıllık izni?', o: ['14 gün', '20 gün', '18 gün', '26 gün'], a: 1, e: 'Beş yıldan fazla on beş yıldan az olanlara yirmi günden az olmamak üzere yıllık izin verilir.', r: 'İş K. m.53' },
  { id: 'qi5', b: 'is', q: '15 yıl ve daha fazla hizmeti olan işçinin yıllık izni?', o: ['26 gün', '20 gün', '24 gün', '30 gün'], a: 0, e: 'On beş yıl (dahil) ve daha fazla olanlara yirmi altı günden az olmamak üzere yıllık izin verilir.', r: 'İş K. m.53' },
  { id: 'qi6', b: 'is', q: 'Hizmeti 6 ay ile 1,5 yıl arasındaki işçide ihbar süresi?', o: ['2 hafta', '6 hafta', '4 hafta', '8 hafta'], a: 2, e: 'İşi altı aydan bir buçuk yıla kadar sürmüş işçi için bildirim süresi dört haftadır.', r: 'İş K. m.17' },
  { id: 'qi7', b: 'is', q: 'Ahlak ve iyi niyet kurallarına aykırılık nedeniyle haklı fesih hakkı ne zaman düşer?', o: ['Öğrenmeden itibaren 1 ay', '30 gün', 'Süre yok', 'Öğrenmeden 6 iş günü, her hâlde fiilden 1 yıl sonra'], a: 3, e: 'Fesih hakkı, karşı tarafın bu çeşit davranışta bulunduğunu öğrendiği günden başlayarak altı iş günü geçtikten ve her hâlde fiilin gerçekleşmesinden itibaren bir yıl sonra kullanılamaz.', r: 'İş K. m.26' },
  { id: 'qi8', b: 'is', q: 'İşe iade davasında bölge adliye mahkemesinin kararı?', o: ['Temyize tabidir', 'Kesindir', 'Karar düzeltmeye tabidir', 'İtiraza tabidir'], a: 1, e: 'İşe iade davası ivedilikle sonuçlandırılır; istinaf hâlinde bölge adliye mahkemesi kesin olarak karar verir.', r: 'İş K. m.20/3' },
  { id: 'qi9', b: 'is', q: 'Kıdem tazminatına hak kazanmak için asgari kıdem?', o: ['6 ay', '2 yıl', '1 yıl', '3 yıl'], a: 2, e: 'Kıdem tazminatı için işçinin işyerinde en az bir yıl çalışmış olması gerekir.', r: '1475 s. K. m.14' },
  { id: 'qi10', b: 'is', q: 'Kanuna dayanan işçi alacağı davalarında dava şartı nedir?', o: ['İhtarname', 'İŞKUR başvurusu', 'Arabulucuya başvuru', 'Sendikaya bildirim'], a: 2, e: 'İşçi veya işveren alacağı ve tazminatı ile işe iade taleplerinde arabulucuya başvurulmuş olması dava şartıdır.', r: '7036 s. K. m.3' },
  { id: 'qi11', b: 'is', q: 'Belirsiz alacak davasını (HMK m.107) yürürlükten kaldıran kanun?', o: ['7036 sayılı Kanun', '7589 sayılı Kanun', '7445 sayılı Kanun', '6100 sayılı Kanun'], a: 1, e: '12. Yargı Paketi olarak bilinen 7589 sayılı Kanun 31.07.2026 tarihli Resmî Gazete\'de yayımlandı; HMK m.107\'yi kaldırdı ve m.109\'a tek seferlik artırım imkânı ekledi.', r: '7589 s. K. (RG 31.07.2026)' },
  // AİLE
  { id: 'qa1', b: 'aile', q: 'Anlaşmalı boşanma için evlilik en az ne kadar sürmüş olmalı?', o: ['6 ay', '2 yıl', '1 yıl', '3 yıl'], a: 2, e: 'Evlilik en az bir yıl sürmüş olmalıdır.', r: 'TMK m.166/3' },
  { id: 'qa2', b: 'aile', q: 'Zina sebebiyle boşanma davası, öğrenmeden itibaren ne kadar içinde açılmalı?', o: ['6 ay', '3 ay', '1 yıl', '5 yıl'], a: 0, e: 'Dava hakkı öğrenmeden itibaren altı ay ve her hâlde zinadan itibaren beş yıl geçmekle düşer.', r: 'TMK m.161/2' },
  { id: 'qa3', b: 'aile', q: 'Terk sebebiyle boşanma için ayrılık en az ne kadar sürmüş olmalı?', o: ['3 ay', '4 ay', '1 yıl', '6 ay'], a: 3, e: 'Ayrılık en az altı ay sürmüş ve devam ediyor olmalıdır; ihtar ayrılığın dördüncü ayı dolmadıkça istenemez.', r: 'TMK m.164' },
  { id: 'qa4', b: 'aile', q: 'Evliliği sona eren kadın için kanuni bekleme süresi?', o: ['100 gün', '300 gün', '200 gün', '1 yıl'], a: 1, e: 'Kadın, evliliğin sona ermesinden itibaren üç yüz gün geçmedikçe evlenemez.', r: 'TMK m.132' },
  { id: 'qa5', b: 'aile', q: 'Türk hukukunda yasal mal rejimi nedir?', o: ['Mal ayrılığı', 'Mal ortaklığı', 'Edinilmiş mallara katılma', 'Paylaşmalı mal ayrılığı'], a: 2, e: 'Eşler arasında, kanunda öngörülen diğer rejimlerden birini seçmedikçe edinilmiş mallara katılma rejimi geçerlidir.', r: 'TMK m.202' },
  { id: 'qa6', b: 'aile', q: 'Mirasla edinilen mal hangi gruba girer?', o: ['Kişisel mal', 'Edinilmiş mal', 'Ortak mal', 'Aile konutu'], a: 0, e: 'Eşlerden birine sonradan miras yoluyla geçen malvarlığı değerleri kişisel maldır.', r: 'TMK m.220' },
  { id: 'qa7', b: 'aile', q: 'Boşanma davası reddedilip kesinleştikten sonra ortak hayat kurulamazsa, ne kadar süre geçince boşanma kararı verilir?', o: ['1 yıl', '2 yıl', '5 yıl', '3 yıl'], a: 3, e: 'Ret kararının kesinleşmesinden itibaren üç yıl geçmiş ve ortak hayat yeniden kurulamamışsa, eşlerden birinin istemi üzerine boşanmaya karar verilir.', r: 'TMK m.166/4' },
  { id: 'qa8', b: 'aile', q: '6284 sayılı Kanun kapsamında tedbir kararı için doktor raporu şart mı?', o: ['Evet', 'Hayır; delil veya belge aranmaz', 'Sadece fiziksel şiddette', 'Sadece ilk başvuruda'], a: 1, e: 'Tedbir kararı verilmesi için şiddetin uygulandığı hususunda delil veya belge aranmaz.', r: '6284 s. K. m.8/3' },
  { id: 'qa9', b: 'aile', q: 'Boşanma davalarında görevli mahkeme?', o: ['Asliye hukuk', 'Aile mahkemesi', 'Sulh hukuk', 'Asliye ticaret'], a: 1, e: 'Aile hukukundan doğan dava ve işler aile mahkemelerinde görülür; aile mahkemesi bulunmayan yerlerde asliye hukuk mahkemesi bu sıfatla bakar.', r: '4787 s. K. m.4' },
  { id: 'qa10', b: 'aile', q: 'Hayata kast veya pek kötü muamele sebebiyle boşanma davası, öğrenmeden itibaren ne kadar içinde açılmalı?', o: ['3 ay', '1 yıl', '6 ay', '3 yıl'], a: 2, e: 'Dava hakkı, sebebin öğrenilmesinden itibaren altı ay ve her hâlde olaydan itibaren beş yıl geçmekle düşer.', r: 'TMK m.162' }
];
