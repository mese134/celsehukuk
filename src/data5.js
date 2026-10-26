// ===== İçerik genişletmesi 3 (+%50) · son kontrol 26.10.2026 =====
CASES.push(
  {
    id: "c6", b: "ceza", title: "Gece Durağında", court: "Bursa Cumhuriyet Başsavcılığı", esas: "2026/22107 Soruşturma", role: "Cumhuriyet savcısı", zorluk: 2,
    intro: "Şüpheli Kaan D., 14 Ekim 2026 gecesi saat 01.30'da otobüs durağında bekleyen Berk S.'ye bıçak gösterip \"telefonunu ve cüzdanını ver\" dedi; eşyaları alıp kaçtı. İki saat sonra yakalandı; eşyalar üzerinde çıktı.",
    evidence: [
      ["Durak kamerası", "Şüphelinin bıçağı mağdura doğrulttuğu ve eşyaları aldığı görülüyor."],
      ["Yakalama tutanağı", "Telefon, cüzdan ve 18 cm'lik bıçak şüphelinin üzerinde bulundu."],
      ["Mağdur ifadesi", "\"Bıçağı görünce korktum, direnmedim.\""]
    ],
    steps: [
      { q: "Eylemin temel suç vasfı nedir?", o: ["Hırsızlık", "Yağma", "Tehdit", "Güveni kötüye kullanma"], a: 1,
        e: "Başkasına ait taşınır bir malı, zilyedinin rızası olmadan almak için cebir veya tehdit kullanmak yağmadır. Hırsızlıktan farkı cebir veya tehdittir.", r: "TCK m.148/1" },
      { q: "Bıçak gösterilerek işlenen yağmanın cezası hangi aralıktadır?", o: ["6 – 10 yıl", "10 – 15 yıl", "3 – 7 yıl", "15 – 20 yıl"], a: 1,
        e: "Yağmanın silahla işlenmesi nitelikli hâldir ve on yıldan on beş yıla kadar hapis cezası gerektirir. Basit yağmanın cezası altı yıldan on yıla kadardır. Eylem gece işlendiği için ayrıca 149/1-h bendi de gerçekleşmiştir.", r: "TCK m.149/1-a, h" },
      { q: "İddianameyi hangi mahkemeye düzenlersin?", o: ["Asliye ceza mahkemesi", "Ağır ceza mahkemesi", "Sulh ceza hâkimliği", "Çocuk mahkemesi"], a: 1,
        e: "Yağma suçları (basit hâli dâhil) ağır ceza mahkemesinin görevine giren suçlar arasında açıkça sayılmıştır.", r: "5235 s. K. m.12" },
      { q: "Tutuklama talebinde tutuklama nedeni yönünden ne söyleyebilirsin?", o: ["Tutuklama nedeni ayrıca ispat edilmelidir", "Yağma katalog suçtur; kuvvetli şüphe varsa tutuklama nedeni var sayılabilir", "Yağmada tutuklama yasaktır", "Yalnızca adli kontrol uygulanabilir"], a: 1,
        e: "Kuvvetli suç şüphesinin varlığı hâlinde, kanunda sayılan katalog suçlarda tutuklama nedeni var sayılabilir. Yağma (m.148, 149) bu suçlar arasındadır.", r: "CMK m.100/3-a" },
      { q: "Şüphelinin müdafii yok. Müdafi görevlendirilmesi zorunlu mu?", o: ["Hayır, talep etmedikçe", "Evet; alt sınırı 5 yıldan fazla hapis gerektiren suçlarda müdafi görevlendirilir", "Yalnızca kovuşturmada", "Yalnızca şüpheli çocuksa"], a: 1,
        e: "Alt sınırı beş yıldan fazla hapis cezasını gerektiren suçlardan dolayı yapılan soruşturma ve kovuşturmada, şüpheli veya sanığın talebi aranmaksızın müdafi görevlendirilir. Yağmanın alt sınırı altı yıldır.", r: "CMK m.150/3" }
    ]
  },
  {
    id: "c7", b: "ceza", title: "Sahte Kiralık İlanı", court: "Antalya Cumhuriyet Başsavcılığı", esas: "2026/30551 Soruşturma", role: "Cumhuriyet savcısı", zorluk: 3,
    intro: "Şüpheli Selim A., bir ilan sitesinde var olmayan bir yazlık için kiralık ilan verdi. Mağdur Pınar T., \"kapora\" olarak 40.000 TL'yi banka havalesiyle gönderdi. Para, Selim A.'nın arkadaşı Onur K.'nın hesabına geldi; Onur K. hesabını 2.000 TL karşılığında kullandırdığını, başka bir şey yapmadığını söylüyor. Olay Eylül 2026'da gerçekleşti.",
    evidence: [
      ["Banka dekontu", "12.09.2026; 40.000 TL, alıcı Onur K."],
      ["İlan kayıtları", "İlan Selim A.'nın telefon numarasıyla açılmış; fotoğraflar başka bir siteden alınmış."],
      ["Onur K. ifadesi", "\"Hesabımı kullandırdım, 2.000 TL aldım; ilanla ilgim yok.\""]
    ],
    steps: [
      { q: "Selim A.'nın eylemi hangi suçu oluşturur?", o: ["Basit dolandırıcılık", "Bilişim sistemleri ve banka araç olarak kullanılarak nitelikli dolandırıcılık", "Hırsızlık", "Güveni kötüye kullanma"], a: 1,
        e: "Dolandırıcılık suçunun bilişim sistemlerinin, banka veya kredi kurumlarının araç olarak kullanılması suretiyle işlenmesi nitelikli hâldir.", r: "TCK m.158/1-f" },
      { q: "Dosyayı uzlaştırma bürosuna göndermen gerekir mi?", o: ["Evet, dolandırıcılık uzlaştırma kapsamındadır", "Hayır; uzlaştırma kapsamında yalnızca basit dolandırıcılık (m.157) vardır", "Evet, mağdur isterse", "Yalnızca zarar 50.000 TL'nin altındaysa"], a: 1,
        e: "Kanunda uzlaştırmaya tabi suçlar arasında yalnızca basit dolandırıcılık (TCK m.157) sayılmıştır. Nitelikli dolandırıcılık uzlaştırma kapsamı dışındadır.", r: "CMK m.253/1-b" },
      { q: "25.12.2025 sonrasında açılacak bu davada görevli mahkeme hangisidir?", o: ["Ağır ceza mahkemesi", "Asliye ceza mahkemesi", "Sulh ceza hâkimliği", "Tüketici mahkemesi"], a: 1,
        e: "7571 sayılı Kanunla 5235 sayılı Kanun m.12'den \"nitelikli dolandırıcılık\" ibaresi çıkarıldı. Bu suçlarda artık asliye ceza mahkemesi görevlidir.", r: "5235 s. K. m.12 (7571 s. K.)" },
      { q: "Onur K.'nın katkısı yalnızca hesabını kullandırmaktan ibaret. 7589 sayılı Kanun sonrası cezası nasıl belirlenir?", o: ["Cezasızdır", "Nitelikli dolandırıcılığa iştirakten verilecek ceza yarı oranında indirilir", "Ceza iki katına çıkar", "Yalnızca idari para cezası verilir"], a: 1, t: 20,
        e: "Suça iştirakin, haksız menfaat amacıyla kendisine ait banka hesabının kullanılmasını sağlayan bilgileri veya araçları başkasına vermekle sınırlı olması hâlinde verilecek ceza yarı oranında indirilir. Hüküm 31.07.2026'da yürürlüğe girdi.", r: "TCK m.158/4 (7589 s. K.)" },
      { q: "Nitelikli dolandırıcılıkta (üst sınır 10 yıl) dava zamanaşımı süresi?", o: ["8 yıl", "15 yıl", "20 yıl", "Zamanaşımı yoktur"], a: 1,
        e: "Beş yıldan fazla ve yirmi yıldan fazla olmamak üzere hapis cezasını gerektiren suçlarda dava zamanaşımı on beş yıldır.", r: "TCK m.66/1-d" }
    ]
  },
  {
    id: "i6", b: "is", title: "Baretsiz Düşüş", court: "Konya 2. İş Mahkemesi", esas: "Dava öncesi", role: "İşçi vekili", zorluk: 2,
    intro: "Müvekkil Hüseyin Y., bir inşaatta kalıp ustası. 5 Ekim 2026'da iskele korkuluğu olmayan 3. kattan düştü; kolu ve kaburgaları kırıldı. İşveren olayı SGK'ya bildirmedi. Müvekkil düştüğü sırada baret takmıyordu.",
    evidence: [
      ["Hastane raporu", "Sol kol ve iki kaburga kırığı; 4 ay iş göremezlik öngörüsü."],
      ["İş müfettişi tespiti", "İskelede korkuluk ve emniyet ağı yok; kuşak verilmemiş."],
      ["Tanık beyanı", "Ustabaşı: \"Korkuluk için malzeme istedik, gelmedi.\""]
    ],
    steps: [
      { q: "Maddi ve manevi tazminat davası açmadan önce arabulucuya gitmek zorunlu mu?", o: ["Evet, tüm işçi-işveren uyuşmazlıklarında", "Hayır; iş kazasından doğan tazminat davaları dava şartı arabuluculuğun dışındadır", "Yalnızca manevi tazminat için", "Yalnızca işveren talep ederse"], a: 1,
        e: "İş kazası veya meslek hastalığından kaynaklanan maddi ve manevi tazminat ile bunlarla ilgili tespit, itiraz ve rücu davaları zorunlu arabuluculuk kapsamı dışında bırakılmıştır.", r: "7036 s. K. m.3/1" },
      { q: "İşveren iş kazasını SGK'ya en geç ne zaman bildirmeliydi?", o: ["Aynı gün", "Kazadan sonraki 3 iş günü içinde", "15 gün içinde", "1 ay içinde"], a: 1,
        e: "İş kazası işyerinde meydana gelmişse işveren kolluğa derhal, Sosyal Güvenlik Kurumuna da en geç kazadan sonraki üç iş günü içinde bildirmekle yükümlüdür.", r: "5510 s. K. m.13/2-b" },
      { q: "İşverenin sorumluluğunun temel dayanağı nedir?", o: ["Yalnızca işçinin kusuru", "Çalışanların işle ilgili sağlık ve güvenliğini sağlama ve gerekli önlemleri alma yükümlülüğü", "SGK'nın kusuru", "İşverenin sorumluluğu yoktur, sigorta öder"], a: 1,
        e: "İşveren, çalışanların işle ilgili sağlık ve güvenliğini sağlamakla yükümlüdür; mesleki risklerin önlenmesi dâhil her türlü tedbiri almak zorundadır.", r: "6331 s. K. m.4/1" },
      { q: "Müvekkilin baret takmaması tazminatı nasıl etkileyebilir?", o: ["Hiç etkilemez", "Müterafik kusur olarak değerlendirilirse hâkim tazminatı indirebilir", "Davayı tamamen düşürür", "Tazminatı artırır"], a: 1,
        e: "Zarar gören, zararın doğmasında veya artmasında etkili olmuşsa hâkim tazminatı indirebilir veya tamamen kaldırabilir. Korkuluk eksikliği karşısında baretin düşmeye etkisi bilirkişiyle tartışılmalıdır.", r: "TBK m.52/1" },
      { q: "İşçinin işverene karşı iş kazasından doğan tazminat davası hangi zamanaşımına tabidir?", o: ["2 yıl", "5 yıl", "10 yıl", "1 yıl"], a: 2,
        e: "İşverenin iş sözleşmesinden doğan koruma borcuna aykırılığına dayanan iş kazası tazminat davaları, Yargıtay uygulamasına göre on yıllık genel zamanaşımına tabidir.", r: "TBK m.146 · Yargıtay yerleşik uygulaması" }
    ]
  },
  {
    id: "i7", b: "is", title: "Devralınan Fabrika", court: "Gaziantep 4. İş Mahkemesi", esas: "Dava öncesi", role: "İşçi vekili", zorluk: 3,
    intro: "Müvekkil Yusuf Ç., 2019'dan beri bir tekstil fabrikasında dokuma operatörü. Ocak 2026'da fabrika, tüm makine ve çalışanlarıyla birlikte başka bir şirkete devredildi. Yeni işveren, dokuma bölümünü bir \"alt işveren\" şirkete verdiğini ve müvekkilin artık o şirketin işçisi olduğunu söylüyor. Eski işverenin 2025'e ait 3 aylık ücret borcu var.",
    evidence: [
      ["Devir sözleşmesi", "02.01.2026; işyeri bütünüyle devredilmiş."],
      ["Alt işveren sözleşmesi", "Dokuma, fabrikanın asıl işi; teknolojik uzmanlık gerektirdiği yazmıyor."],
      ["Bordrolar", "Ekim–Aralık 2025 ücretleri ödenmemiş."]
    ],
    steps: [
      { q: "İşyeri devrinde müvekkilin iş sözleşmesine ne olur?", o: ["Kendiliğinden sona erer", "Bütün hak ve borçlarıyla devralan işverene geçer", "Yeniden deneme süresi başlar", "Kıdem sıfırlanır"], a: 1,
        e: "İşyeri veya bir bölümü hukuki bir işleme dayalı olarak başka birine devredildiğinde, devir tarihinde mevcut iş sözleşmeleri bütün hak ve borçlarıyla birlikte devralana geçer.", r: "İş K. m.6/1" },
      { q: "2025'e ait ödenmemiş ücretlerden kim sorumludur?", o: ["Yalnızca eski işveren", "Yalnızca yeni işveren", "İkisi birlikte; eski işverenin sorumluluğu devirden itibaren 2 yılla sınırlı", "Hiçbiri"], a: 2,
        e: "Devreden ve devralan işveren, devirden önce doğmuş ve devir tarihinde ödenmesi gereken borçlardan birlikte sorumludur. Devreden işverenin sorumluluğu devir tarihinden itibaren iki yılla sınırlıdır.", r: "İş K. m.6/3" },
      { q: "Yeni işveren \"devir nedeniyle\" müvekkili işten çıkarabilir mi?", o: ["Evet, serbestçe", "Hayır; sırf devir nedeniyle fesih yapılamaz", "Evet, kıdem tazminatı öderse", "Yalnızca ilk 6 ayda"], a: 1,
        e: "Devreden veya devralan işveren, iş sözleşmesini sırf işyerinin veya işyerinin bir bölümünün devrinden dolayı feshedemez. Ekonomik ve teknolojik sebeplerle fesih hakları saklıdır.", r: "İş K. m.6/4" },
      { q: "Asıl iş olan dokuma alt işverene hangi koşulda verilebilir?", o: ["Her zaman", "Ancak işletmenin ve işin gereği ile teknolojik nedenlerle uzmanlık gerektiren işlerde", "Yalnızca kamu işyerlerinde", "Hiçbir koşulda"], a: 1,
        e: "Asıl işin bir bölümünde alt işveren ilişkisi ancak işletmenin ve işin gereği ile teknolojik nedenlerle uzmanlık gerektiren işlerde kurulabilir. Aksi hâlde ilişki muvazaalı sayılabilir.", r: "İş K. m.2/7" },
      { q: "Alt işveren ilişkisi muvazaalı bulunursa sonuç?", o: ["Müvekkil alt işverenin işçisi olarak kalır", "Müvekkil başlangıçtan itibaren asıl işverenin işçisi sayılır", "Sözleşme batıldır, hiçbir hak doğmaz", "Yalnızca idari para cezası uygulanır"], a: 1,
        e: "Muvazaalı işlem hâlinde alt işverenin işçileri başlangıçtan itibaren asıl işverenin işçisi sayılarak işlem görür. Geçerli bir alt işveren ilişkisinde ise asıl işveren alt işverenle birlikte sorumludur.", r: "İş K. m.2/6-7" }
    ]
  },
  {
    id: "a6", b: "aile", title: "Büyüyen Çocuk", court: "Samsun 1. Aile Mahkemesi", esas: "2026/1544 E.", role: "Davacı vekili", zorluk: 2,
    intro: "Müvekkil Derya K. 2020'de boşandı; oğlu Can'ın velayeti kendisinde. Babaya aylık 2.000 TL iştirak nafakası yüklendi. Can şimdi 17 yaşında ve üniversite hazırlığında; giderleri arttı. Babanın geliri de 2020'ye göre dört kat yükseldi. Baba son 6 aydır nafakayı ödemiyor.",
    evidence: [
      ["Boşanma kararı", "2020; iştirak nafakası aylık 2.000 TL."],
      ["Gider belgeleri", "Dershane, okul servisi, sağlık giderleri: aylık 14.000 TL."],
      ["Babanın gelir yazısı", "SGK: aylık net 95.000 TL."]
    ],
    steps: [
      { q: "Nafakanın artırılması hangi gerekçeyle istenebilir?", o: ["Hiçbir gerekçeyle; kesinleşen karar değişmez", "Tarafların mali durumunun değişmesi veya hakkaniyetin gerektirmesi", "Yalnızca babanın rızasıyla", "Yalnızca enflasyon %100'ü aşarsa"], a: 1,
        e: "Tarafların mali durumlarının değişmesi veya hakkaniyetin gerektirmesi hâlinde nafakanın artırılması veya azaltılması istenebilir. Velayet kendisine verilmeyen eş, çocuğun bakım ve eğitim giderlerine gücü oranında katılır.", r: "TMK m.176/4, m.182/2" },
      { q: "Hâkim, gelecek yıllar için nafakanın nasıl artacağını belirleyebilir mi?", o: ["Hayır, her yıl yeni dava gerekir", "Evet; istem hâlinde gelecek yıllardaki nafaka miktarını belirleyebilir", "Yalnızca TÜFE ile sınırlı olarak ve re'sen", "Hayır, bu icra dairesinin işidir"], a: 1,
        e: "Hâkim, istem hâlinde, çocuk için ödenecek nafakanın gelecek yıllarda ne miktarda olacağını tarafların sosyal ve ekonomik durumlarına göre belirleyebilir.", r: "TMK m.330" },
      { q: "Can 18 yaşını doldurup üniversiteye başlarsa babanın yükümlülüğü ne olur?", o: ["Kesin olarak sona erer", "Eğitimi devam ettiği sürece, durum ve koşullara göre eğitimi bitinceye kadar sürer", "Otomatik olarak iki katına çıkar", "Yükümlülük anneye geçer"], a: 1,
        e: "Çocuk ergin olduğu hâlde eğitimi devam ediyorsa ana ve baba, durum ve koşullara göre bakılmalarının kendilerinden beklenebileceği ölçüde, eğitimi bitinceye kadar çocuğa bakmakla yükümlüdür. Bu talebi ergin çocuk kendisi ileri sürer.", r: "TMK m.328/2" },
      { q: "Ödenmeyen 6 aylık nafaka için icra takibine rağmen ödeme yapılmazsa babaya hangi yaptırım uygulanabilir?", o: ["Yalnızca faiz", "Şikâyet üzerine 3 aya kadar tazyik hapsi", "Velayetin babaya geçmesi", "Adli para cezası, hapis yok"], a: 1,
        e: "Nafaka ödemeye ilişkin icra emrine uymayan borçlu, alacaklının şikâyeti üzerine üç aya kadar tazyik hapsi ile cezalandırılır.", r: "İİK m.344" },
      { q: "Tazyik hapsindeki baba birikmiş nafakayı öderse ne olur?", o: ["Hapis süresi tamamlanır", "Tahliye edilir", "Cezası ertelenir ama sicile işlenir", "Hiçbir etkisi olmaz"], a: 1,
        e: "Tazyik hapsi bir ceza değil, ödemeye zorlama aracıdır. Borçlu birikmiş nafakayı öderse tahliye edilir.", r: "İİK m.344" }
    ]
  },
  {
    id: "a7", b: "aile", title: "İkinci Nikâh", court: "İzmir 6. Aile Mahkemesi", esas: "2026/2210 E.", role: "Davacı vekili", zorluk: 3,
    intro: "Müvekkil Seda G., 2025'te Murat G. ile evlendi. Ekim 2026'da, Murat G.'nin 2019'da Almanya'da resmî olarak evlendiğini ve bu evliliğin hâlâ sürdüğünü öğrendi. Müvekkil evliliğin ortadan kaldırılmasını istiyor.",
    evidence: [
      ["Alman evlilik kaydı", "Murat G. ile Anna B., 2019; boşanma kaydı yok."],
      ["Türk nüfus kaydı", "Murat G. ile Seda G., 2025; kayıtta \"bekâr\" beyanı."],
      ["Mesajlar", "Murat G.: \"Oradaki evliliğimi sana söyleyemedim.\""]
    ],
    steps: [
      { q: "Bu evlilik hangi sebeple sakattır?", o: ["Nisbi butlan; yanılma", "Mutlak butlan; eşlerden biri evlenme sırasında evliydi", "Boşanma sebebi; zina", "Hiçbir sakatlık yok"], a: 1,
        e: "Eşlerden birinin evlenme sırasında evli olması mutlak butlan sebebidir.", r: "TMK m.145/1" },
      { q: "Mutlak butlan davasını kimler açabilir?", o: ["Yalnızca aldatılan eş", "Cumhuriyet savcısı re'sen; ayrıca ilgili olan herkes", "Yalnızca nüfus müdürlüğü", "Yalnızca önceki eş"], a: 1,
        e: "Mutlak butlan davası Cumhuriyet savcısı tarafından re'sen açılır. İlgili olan herkes de bu davayı açabilir.", r: "TMK m.146" },
      { q: "İptal kararı kesinleşene kadar evliliğin durumu nedir?", o: ["Baştan beri yok hükmündedir", "Geçerli bir evliliğin bütün sonuçlarını doğurur", "Askıya alınmıştır", "Yalnızca mal rejimi bakımından geçerlidir"], a: 1,
        e: "Batıl bir evlenme ancak hâkim kararıyla ortadan kaldırılabilir. İptal kararı kesinleşinceye kadar evlilik geçerli bir evliliğin bütün sonuçlarını doğurur.", r: "TMK m.156" },
      { q: "Farklı senaryo: Murat G. evli değil, ama evlenmeden önce ağır ve bulaşıcı bir hastalığını gizlemiş olsaydı?", o: ["Hiçbir hak doğmaz", "Aldatma nedeniyle evlenmenin iptali (nisbi butlan) istenebilir", "Mutlak butlan", "Yalnızca manevi tazminat"], a: 1,
        e: "Diğer eşin, evlilik birliği içinde kendisinin veya altsoyunun sağlığını ciddi biçimde tehlikeye düşürecek bir hastalığı kendisinden gizlenmişse eş, evlenmenin iptalini isteyebilir.", r: "TMK m.150/2" },
      { q: "Bu nisbi butlan davası hangi süre içinde açılmalıdır?", o: ["Süre yoktur", "Sebebin öğrenilmesinden 6 ay, her hâlde evlenmeden 5 yıl", "1 yıl; 10 yıl", "30 gün"], a: 1,
        e: "İptal davası açma hakkı, iptal sebebinin öğrenildiği veya korkutmanın etkisinin ortadan kalktığı tarihten başlayarak altı ay ve her hâlde evlenmenin üzerinden beş yıl geçmekle düşer.", r: "TMK m.152" }
    ]
  },
  {
    id: "d6", b: "idare", title: "Uygulanmayan Karar", court: "Erzurum 1. İdare Mahkemesi", esas: "Dava öncesi", role: "Davacı vekili", zorluk: 2,
    intro: "Müvekkil Zeynep A., bir il müdürlüğünde şube müdürüyken gerekçesiz olarak uzman kadrosuna atandı. Henüz dava açılmadı. Müvekkil hem atamanın iptalini hem de aradaki maaş farkının ödenmesini istiyor. Atama işlemini il müdürlüğü yaptı.",
    evidence: [
      ["Atama onayı", "05.10.2026; \"hizmet gereği\" ibaresi dışında gerekçe yok."],
      ["Sicil özeti", "Son üç yılda üstün başarı belgesi, disiplin cezası yok."],
      ["Bordro karşılaştırması", "Şube müdürü ile uzman arasındaki aylık fark yaklaşık 18.000 TL."]
    ],
    steps: [
      { q: "Müvekkilin her iki talebi için hangi yolu izleyebilirsin?", o: ["Yalnızca iptal davası açılabilir", "İptal ve tam yargı davalarını birlikte açabilir ya da önce iptal davası açıp kararın tebliğinden sonra tam yargı davası açabilirim", "Maaş farkı için asliye hukuk mahkemesine giderim", "Yalnızca idareye başvururum"], a: 1,
        e: "İlgililer, haklarını ihlal eden bir idari işlem dolayısıyla doğrudan tam yargı davası veya iptal ve tam yargı davalarını birlikte açabilecekleri gibi, önce iptal davası açıp kararın tebliğinden itibaren dava açma süresi içinde tam yargı davası da açabilirler.", r: "İYUK m.12" },
      { q: "Dava hangi yer idare mahkemesinde açılır?", o: ["Davacının ikametgâhı", "Kural olarak dava konusu işlemi yapan idari merciin bulunduğu yer", "Ankara İdare Mahkemesi", "Danıştay"], a: 1,
        e: "Özel bir yetki kuralı yoksa yetkili mahkeme, dava konusu işlemi yapan idari merciin bulunduğu yer idare mahkemesidir.", r: "İYUK m.32/1" },
      { q: "Mahkeme atamayı iptal etti. İdare kararı en geç ne zaman uygulamalıdır?", o: ["Kararın kesinleşmesinden sonra 1 yıl içinde", "Gecikmeksizin; her hâlde kararın tebliğinden itibaren 30 gün içinde", "İstinaf sonuçlanınca", "İstediği zaman"], a: 1,
        e: "İdare, kararların icaplarına göre gecikmeksizin işlem tesis etmek veya eylemde bulunmak zorundadır. Bu süre hiçbir şekilde kararın idareye tebliğinden başlayarak otuz günü geçemez.", r: "İYUK m.28/1" },
      { q: "Kamu görevlisi kararı 30 gün içinde kasten uygulamazsa kime karşı tazminat davası açılabilir?", o: ["Yalnızca idareye karşı", "İdareye karşı açılabileceği gibi, kararı yerine getirmeyen kamu görevlisine karşı da", "Yalnızca kamu görevlisine karşı", "Tazminat istenemez"], a: 1,
        e: "Kararların otuz gün içinde kamu görevlilerince kasten yerine getirilmemesi hâlinde, idare aleyhine tazminat davası açılabileceği gibi kararı yerine getirmeyen kamu görevlisi aleyhine de tazminat davası açılabilir.", r: "İYUK m.28/4" },
      { q: "İdare dava dilekçesine ne kadar sürede cevap verebilir?", o: ["7 gün", "Tebliğden itibaren 30 gün; bir defaya mahsus uzatılabilir", "60 gün", "Cevap verme hakkı yoktur"], a: 1,
        e: "Dava dilekçesine, tebliğinden itibaren otuz gün içinde cevap verilebilir. Bu süre haklı sebeplerin varlığı hâlinde mahkemece bir defaya mahsus uzatılabilir.", r: "İYUK m.16" }
    ]
  },
  {
    id: "d7", b: "idare", title: "Kaymakamlıktaki Dosya", court: "Sivas İl Merkezi", esas: "Soruşturma izni", role: "Şikâyetçi vekili", zorluk: 2,
    intro: "Müvekkil Hakan E., bir ilçedeki tapu müdürlüğünde işlemi kasten bekletilerek zarara uğratıldığını iddia ediyor. Görevli memur Fatih T. hakkında görevi kötüye kullanma suçundan Cumhuriyet başsavcılığına şikâyette bulundu. Başsavcılık, soruşturma izni için evrakı kaymakamlığa gönderdi.",
    evidence: [
      ["Başvuru kaydı", "İşlem 3 ay boyunca gerekçesiz bekletilmiş."],
      ["Yazışmalar", "Aynı türden diğer başvurular 1 haftada sonuçlanmış."],
      ["Kaymakamlık yazısı", "Ön inceleme başlatıldı; 06.10.2026."]
    ],
    steps: [
      { q: "Memurun görevinden doğan suçu için doğrudan kovuşturma yapılabilir mi?", o: ["Evet, savcı doğrudan iddianame düzenler", "Hayır; kanunla belirlenen istisnalar dışında idari merciin iznine bağlıdır", "Yalnızca valinin talebiyle", "Yalnızca suç ağır cezalıksa izin gerekir"], a: 1,
        e: "Memurlar ve diğer kamu görevlilerinin görevleri sebebiyle işledikleri suçlardan dolayı soruşturma yapılması, kanunla belirlenen istisnalar dışında, yetkili idari merciin iznine bağlıdır.", r: "AY m.129/6 · 4483 s. K. m.2" },
      { q: "İlçede görevli bu memur hakkında izin vermeye yetkili merci kimdir?", o: ["Vali", "Kaymakam", "Bakan", "Cumhuriyet başsavcısı"], a: 1,
        e: "İlçede görevli memurlar ve diğer kamu görevlileri hakkında soruşturma izni vermeye kaymakam yetkilidir. İlde ve merkez ilçede görevliler ile kaymakamlar hakkında vali yetkilidir.", r: "4483 s. K. m.3/a" },
      { q: "Kaymakam kararını en geç ne zaman vermelidir?", o: ["7 gün", "Ön inceleme dâhil 30 gün; zorunlu hâllerde bir defa 15 gün uzatılabilir", "60 gün", "Süre yoktur"], a: 1,
        e: "Yetkili merci soruşturma izni konusundaki kararını, ön inceleme dâhil en geç otuz gün içinde verir. Bu süre zorunlu hâllerde on beş günü geçmemek üzere bir defa uzatılabilir.", r: "4483 s. K. m.7" },
      { q: "Kaymakam soruşturma izni vermedi. İtiraz süresi?", o: ["7 gün", "Tebliğden itibaren 10 gün", "30 gün", "60 gün"], a: 1,
        e: "Soruşturma izni verilmesine veya verilmemesine ilişkin karara karşı itiraz süresi, kararın tebliğinden itibaren on gündür.", r: "4483 s. K. m.9" },
      { q: "İtirazı hangi merci inceler?", o: ["Danıştay İkinci Dairesi", "Kaymakamlığın yargı çevresindeki bölge idare mahkemesi", "Asliye ceza mahkemesi", "Vali"], a: 1,
        e: "Kanunda sayılan üst düzey görevliler dışındaki kişiler hakkında itirazı, yetkili merciin yargı çevresinde bulunduğu bölge idare mahkemesi inceler.", r: "4483 s. K. m.9" }
    ]
  },
  {
    id: "b6", b: "borclar", title: "Düşürülmüş Kilometre", court: "Denizli 2. Asliye Hukuk Mahkemesi", esas: "Dava öncesi", role: "Alıcı vekili", zorluk: 2,
    intro: "Müvekkil Tuncay B., Mart 2026'da bir komşusundan (tacir değil) ikinci el otomobil aldı; satış noterde yapıldı. İlanda ve sözleşmede araç \"85.000 km\" olarak gösterildi. Sözleşmeye \"araç görüldüğü gibi satılmıştır\" kaydı konuldu. Eylül 2026'daki bakımda aracın gerçekte 240.000 km'de olduğu ve satıcının göstergeyi değiştirttiği anlaşıldı.",
    evidence: [
      ["Noter satış sözleşmesi", "12.03.2026; \"görüldüğü gibi\" kaydı."],
      ["Servis kayıtları", "2024'te araç 210.000 km'de bakıma girmiş."],
      ["Ekspertiz", "Gösterge paneli 2025'te değiştirilmiş."]
    ],
    steps: [
      { q: "Ayıp nedeniyle müvekkilin seçimlik hakları nelerdir?", o: ["Yalnızca sözleşmeden dönme", "Dönme, bedelden indirim, ücretsiz onarım veya imkân varsa ayıpsız misli ile değişim", "Yalnızca manevi tazminat", "Hiçbir hakkı yok; görüldüğü gibi alındı"], a: 1,
        e: "Satılanın ayıplı çıkması hâlinde alıcı; sözleşmeden dönme, satılanı alıkoyup ayıp oranında bedelden indirim, aşırı masraf gerektirmiyorsa ücretsiz onarım veya imkân varsa ayıpsız misli ile değiştirme haklarından birini kullanabilir.", r: "TBK m.227/1" },
      { q: "\"Görüldüğü gibi satılmıştır\" kaydı satıcıyı korur mu?", o: ["Evet, her durumda", "Hayır; satıcı ayıbı ağır kusuruyla gizlemişse sorumsuzluk anlaşması kesin olarak hükümsüzdür", "Yalnızca noter satışında korur", "Yalnızca 1 yıl korur"], a: 1,
        e: "Satıcının ayıptan doğan sorumluluğunu kaldıran veya daraltan her türlü anlaşma, satıcı ayıpları ağır kusuruyla alıcıdan gizlemişse kesin olarak hükümsüzdür.", r: "TBK m.221" },
      { q: "Ayıp sonradan ortaya çıktı. Müvekkil ne yapmalıydı?", o: ["Hiçbir şey; süre sınırı yok", "Gizli ayıbı öğrenir öğrenmez hemen satıcıya bildirmeli", "1 yıl beklemeli", "Yalnızca dava açmalı, bildirim gereksiz"], a: 1,
        e: "Olağan gözden geçirmeyle ortaya çıkarılamayan bir ayıp sonradan ortaya çıkarsa alıcı bunu hemen satıcıya bildirmek zorundadır; aksi hâlde satılanı kabul etmiş sayılır.", r: "TBK m.223/2" },
      { q: "Ayıba dayanmak dışında müvekkil başka hangi yola başvurabilir?", o: ["Hiçbiri", "Aldatma nedeniyle sözleşmeyle bağlı olmadığını bildirebilir", "Gabin; aşırı yararlanma", "Vekâletsiz iş görme"], a: 1,
        e: "Taraflardan biri diğerinin aldatması sonucu sözleşme yapmışsa, yanılması esaslı olmasa bile sözleşmeyle bağlı değildir. Ayıp hükümleri ile aldatma hükümleri birlikte (seçimlik) uygulanabilir.", r: "TBK m.36/1" },
      { q: "Müvekkil sözleşmeden dönerse taraflar ne iade eder?", o: ["Yalnızca alıcı aracı iade eder", "Alıcı aracı elde ettiği yararlarla; satıcı bedeli ödeme gününden itibaren faiziyle iade eder", "Satıcı bedelin yarısını iade eder", "Kimse bir şey iade etmez, yalnızca tazminat ödenir"], a: 1,
        e: "Sözleşmeden dönme durumunda alıcı, satılanı ondan elde ettiği yararlarla birlikte satıcıya geri vermekle; satıcı da satış bedelini ödeme gününden itibaren işleyecek faiziyle birlikte geri vermekle yükümlüdür.", r: "TBK m.229/1" }
    ]
  },
  {
    id: "b7", b: "borclar", title: "Çatlayan Duvarlar", court: "Muğla 1. Asliye Hukuk Mahkemesi", esas: "Dava öncesi", role: "İş sahibi vekili", zorluk: 2,
    intro: "Müvekkil Levent O., kendi arsasına müstakil bir ev yaptırmak için 2023'te bir müteahhitle götürü bedelli sözleşme yaptı. Ev Mayıs 2024'te teslim edildi. Ağustos 2026'da duvarlarda ve döşemede ciddi çatlaklar oluştu. Bilirkişi, temelde projeye aykırı eksik demir kullanıldığını tespit etti. Müteahhit ayrıca demir fiyatları arttığı için ek ücret istiyor.",
    evidence: [
      ["Sözleşme", "Götürü bedel: 4.200.000 TL; teslim 15.05.2024."],
      ["Bilirkişi raporu", "Temelde projeye göre %30 eksik donatı; yapısal risk var."],
      ["Müteahhidin yazısı", "\"Demir fiyatı arttı, 600.000 TL ek ödeme yapılmalı.\""]
    ],
    steps: [
      { q: "Taraflar arasındaki sözleşmenin tipi nedir?", o: ["Satış sözleşmesi", "Eser sözleşmesi", "Hizmet sözleşmesi", "Vekâlet sözleşmesi"], a: 1,
        e: "Eser sözleşmesi, yüklenicinin bir eser meydana getirmeyi, iş sahibinin de bunun karşılığında bir bedel ödemeyi üstlendiği sözleşmedir.", r: "TBK m.470" },
      { q: "Ayıplı eser karşısında iş sahibinin seçimlik hakları hangileridir?", o: ["Yalnızca dönme", "Sözleşmeden dönme, ücretten indirim veya masrafı yükleniciye ait ücretsiz onarım", "Yalnızca onarım", "Yalnızca tazminat"], a: 1,
        e: "Eser kabule zorlanamayacak derecede ayıplıysa iş sahibi sözleşmeden dönebilir; ayrıca ayıp oranında ücretten indirim veya aşırı masraf gerektirmiyorsa masrafları yükleniciye ait olmak üzere ücretsiz onarım isteyebilir. Genel hükümlere göre tazminat hakkı saklıdır.", r: "TBK m.475/1" },
      { q: "Taşınmaz yapılarda ayıplı ifadan doğan dava hakları ne kadar sürede zamanaşımına uğrar?", o: ["Teslimden 2 yıl", "Teslimden 5 yıl; yüklenicinin ağır kusuru varsa 20 yıl", "Ayıbın öğrenilmesinden 1 yıl", "10 yıl"], a: 1, t: 20,
        e: "Yükleniciye karşı ayıplı ifadan doğan dava hakları teslimden itibaren iki yılda zamanaşımına uğrar; ancak bu süre taşınmaz yapılarda beş yıldır. Ayıp yüklenicinin ağır kusurundan doğmuşsa süre yirmi yıldır.", r: "TBK m.478" },
      { q: "Çatlakları fark eden müvekkil hemen ne yapmalı?", o: ["Hiçbir şey; dava açmak yeterli", "Sonradan ortaya çıkan ayıbı derhal yükleniciye bildirmeli", "1 yıl içinde noterden ihtar çekmeli", "Belediyeye başvurmalı"], a: 1,
        e: "Eserin ayıpları sonradan ortaya çıkarsa iş sahibi bunları hemen yükleniciye bildirmek zorundadır; aksi hâlde eseri kabul etmiş sayılır. Yüklenicinin ayıbı kasten gizlediği hâllerde bu sonuç doğmaz.", r: "TBK m.477/3" },
      { q: "Müteahhidin demir fiyatı artışı nedeniyle ek ücret talebi ne olur?", o: ["Kabul edilmelidir", "Götürü bedelde yüklenici, iş fazla emek ve gider gerektirse bile ücretin artırılmasını kural olarak isteyemez", "Yarısı ödenir", "Hâkim her durumda TÜFE ile artırır"], a: 1,
        e: "Ücret götürü olarak belirlenmişse yüklenici eseri o ücretle meydana getirmekle yükümlüdür; öngörülenden fazla emek ve gider gerekse bile ücretin artırılmasını isteyemez. Ancak öngörülemeyen olağanüstü durumlar varsa hâkim uyarlama yapabilir.", r: "TBK m.480/1-2" }
    ]
  },
  {
    id: "m6", b: "miras", title: "Bekâr Ağabey", court: "Kırklareli Sulh Hukuk Mahkemesi", esas: "2026/301 D.İş", role: "Mirasçı vekili", zorluk: 2,
    intro: "Mirasbırakan Nazım T., 3 Eylül 2026'da bekâr ve çocuksuz olarak öldü. Annesi 2020'de ölmüş; babası Hasan T. sağ. Nazım'ın anne-baba bir kardeşi Kerem T. (müvekkil) ve yalnızca anne bir kardeşi Ayten K. var. Nazım'ın vasiyetnamesi yok; terekesi 2.400.000 TL değerinde.",
    evidence: [
      ["Nüfus kaydı", "Anne Gülsüm (ö. 2020), baba Hasan (sağ); kardeşler Kerem (anne-baba bir) ve Ayten (anne bir)."],
      ["Ölüm kaydı", "03.09.2026."],
      ["Tereke tespiti", "Daire ve banka hesabı: toplam 2.400.000 TL."]
    ],
    steps: [
      { q: "Altsoyu olmayan Nazım'ın mirasçıları hangi zümreden belirlenir?", o: ["Birinci zümre (altsoy)", "İkinci zümre (ana-baba ve onların altsoyu)", "Üçüncü zümre (büyük ana-babalar)", "Devlet"], a: 1,
        e: "Altsoyu bulunmayan mirasbırakanın mirasçıları ana ve babasıdır; bunlar eşit olarak mirasçı olurlar.", r: "TMK m.496/1" },
      { q: "Baba Hasan T.'nin yasal miras payı ne kadardır?", o: ["Tamamı", "1/2 (1.200.000 TL)", "1/4", "1/3"], a: 1,
        e: "Ana ve baba eşit olarak mirasçıdır; her birinin payı yarıdır.", r: "TMK m.496/1" },
      { q: "Ölmüş annenin 1/2'lik payı kime geçer?", o: ["Tamamen babaya", "Annenin altsoyuna; Kerem ve Ayten'e eşit olarak (1/4'er)", "Yalnızca anne-baba bir kardeş Kerem'e", "Devlete"], a: 1, t: 20,
        e: "Mirasbırakandan önce ölmüş olan ana veya babanın yerini her derecede kendi altsoyu alır. Annenin altsoyu Kerem ve Ayten'dir; ikisi de annenin çocuğu olduğundan eşit pay alırlar.", r: "TMK m.496/2" },
      { q: "Babanın saklı payı ne kadardır?", o: ["Yasal payının yarısı", "Yasal payının dörtte biri", "Saklı payı yoktur", "Yasal payının tamamı"], a: 1,
        e: "Ana ve babadan her biri için saklı pay, yasal miras payının dörtte biridir. Kardeşlerin saklı payı 2007'den beri yoktur.", r: "TMK m.506/2" },
      { q: "Ayten mirası reddederse onun payı kime geçer?", o: ["Devlete", "Ayten mirasbırakandan önce ölmüş gibi hak sahiplerine (örneğin kendi altsoyuna)", "Yalnızca babaya", "Kerem'e geçmesi zorunludur"], a: 1,
        e: "Yasal mirasçılardan birinin reddettiği miras payı, o mirasçı mirasbırakandan önce ölmüş gibi hak sahiplerine geçer.", r: "TMK m.611/1" }
    ]
  },
  {
    id: "m7", b: "miras", title: "Yabancıya Satılan Pay", court: "Edirne 2. Asliye Hukuk Mahkemesi", esas: "Dava öncesi", role: "Davacı vekili", zorluk: 3,
    intro: "Üç kardeş babalarından kalan tarlayı 2024'te tapuda paylı mülkiyete çevirdi; her birinin 1/3 payı var. Kardeşlerden Ercan, 10 Haziran 2026'da payını 900.000 TL'ye tanımadıkları Rıza U.'ya sattı. Satış, 4 Ağustos 2026'da noter aracılığıyla müvekkil Gönül'e bildirildi.",
    evidence: [
      ["Tapu kaydı", "Paylı mülkiyet; Ercan, Gönül ve Cengiz 1/3'er."],
      ["Satış resmî senedi", "10.06.2026; 900.000 TL."],
      ["Noter bildirimi", "04.08.2026'da Gönül'e tebliğ edildi."]
    ],
    steps: [
      { q: "Müvekkil bu satışa karşı hangi hakkı kullanabilir?", o: ["Hiçbir hak yok", "Yasal önalım (şufa) hakkı", "Muris muvazaası", "Tenkis"], a: 1,
        e: "Paylı mülkiyette bir taşınmazdaki payını üçüncü kişiye satan paydaşa karşı diğer paydaşlar önalım hakkını kullanabilir.", r: "TMK m.732" },
      { q: "Önalım davası en geç ne zaman açılmalı?", o: ["Satıştan itibaren 1 yıl", "Bildirimden itibaren 3 ay; her hâlde satıştan itibaren 2 yıl", "Bildirimden itibaren 30 gün", "Süre yok"], a: 1,
        e: "Önalım hakkı, satışın hak sahibine bildirildiği tarihten başlayarak üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer.", r: "TMK m.733/4" },
      { q: "Davada müvekkil hangi yükümlülüğü yerine getirmelidir?", o: ["Hiçbir ödeme yapmaz", "Hâkimin belirlediği süre ve yerde satış bedelini ve alıcıya düşen tapu masraflarını nakden depo etmelidir", "Yalnızca harç yatırır", "Bedelin yarısını depo eder"], a: 1,
        e: "Önalım hakkı alıcıya karşı dava açılarak kullanılır. Hak sahibi, tescil kararı verilmeden önce hâkimin belirleyeceği süre ve yerde satış bedeli ile alıcıya düşen tapu giderlerini nakden depo etmekle yükümlüdür.", r: "TMK m.734" },
      { q: "Farklı senaryo: Ercan payını kardeşi Cengiz'e satsaydı Gönül önalım hakkını kullanabilir miydi?", o: ["Evet", "Hayır; yasal önalım yalnızca üçüncü kişiye satışta doğar", "Yalnızca bedel düşükse", "Yalnızca mahkeme izin verirse"], a: 1,
        e: "Yasal önalım hakkı, payın paydaş olmayan üçüncü kişiye satılması hâlinde doğar. Paydaşlar arasındaki satışta önalım hakkı kullanılamaz.", r: "TMK m.732" },
      { q: "Farklı senaryo: Tapu hâlâ mirasçılar adına elbirliği mülkiyeti olarak kayıtlı olsaydı?", o: ["Önalım aynen kullanılırdı", "Yasal önalım paylı mülkiyete özgüdür; elbirliği mülkiyetinde kullanılamaz", "Önalım süresi 10 yıl olurdu", "Dava sulh hukukta görülürdü"], a: 1,
        e: "Yasal önalım hakkı paylı mülkiyete özgüdür; elbirliği mülkiyetinde (miras ortaklığında) önalım hakkı kullanılamaz. Önce paylı mülkiyete geçilmesi gerekir.", r: "TMK m.732 · Yargıtay yerleşik uygulaması" }
    ]
  }
);

QUICK.push(
  // CEZA
  { id: "qc20", b: "ceza", q: "Kasten yaralama suçunun temel hâlinin cezası?", o: ["4 ay – 1 yıl", "1 – 3 yıl hapis", "2 – 5 yıl", "6 ay – 2 yıl"], a: 1, e: "Kasten başkasının vücuduna acı veren veya sağlığının ya da algılama yeteneğinin bozulmasına neden olan kişi, bir yıldan üç yıla kadar hapis cezası ile cezalandırılır.", r: "TCK m.86/1" },
  { id: "qc21", b: "ceza", q: "Konut dokunulmazlığının ihlali suçunun temel hâli nasıl kovuşturulur ve cezası nedir?", o: ["Re'sen; 2 – 5 yıl", "Şikâyet üzerine; 6 ay – 2 yıl hapis", "Şikâyet üzerine; yalnızca adli para cezası", "Re'sen; 1 – 3 yıl"], a: 1, e: "Bir kimsenin konutuna, konutunun eklentilerine rızasına aykırı olarak giren veya rıza ile girdikten sonra buradan çıkmayan kişi, mağdurun şikâyeti üzerine altı aydan iki yıla kadar hapis cezası ile cezalandırılır.", r: "TCK m.116/1" },
  { id: "qc22", b: "ceza", q: "Kişilerin huzur ve sükûnunu bozma suçunun cezası?", o: ["Şikâyet üzerine 3 ay – 1 yıl hapis", "Re'sen 1 – 3 yıl", "Yalnızca idari para cezası", "6 ay – 2 yıl"], a: 0, e: "Sırf huzur ve sükûnunu bozmak amacıyla belli bir kişiye ısrarla telefon eden, gürültü yapan veya hukuka aykırı başka bir davranışta bulunan kişi, mağdurun şikâyeti üzerine üç aydan bir yıla kadar hapis cezası ile cezalandırılır.", r: "TCK m.123/1" },
  { id: "qc23", b: "ceza", q: "Olası kastla işlenen suçta (müebbet dışındaki hâllerde) ceza nasıl belirlenir?", o: ["Ceza aynen uygulanır", "Temel ceza üçte birden yarıya kadar indirilir", "Ceza yarı oranında artırılır", "Ceza verilmez"], a: 1, e: "Olası kast hâlinde ağırlaştırılmış müebbet yerine yirmi yıldan yirmi beş yıla, müebbet yerine on beş yıldan yirmi yıla kadar hapis verilir; diğer hâllerde temel ceza üçte birden yarısına kadar indirilir.", r: "TCK m.21/2" },
  { id: "qc24", b: "ceza", q: "Teşebbüs hâlinde (müebbet dışındaki hâllerde) ceza nasıl belirlenir?", o: ["Tamamlanmış suç gibi", "Ceza dörtte birden dörtte üçe kadar indirilir", "Yarı oranında artırılır", "Teşebbüs cezalandırılmaz"], a: 1, e: "Suça teşebbüs eden kişi, meydana gelen zarar veya tehlikenin ağırlığına göre cezalandırılır; ağırlaştırılmış müebbet ve müebbet dışındaki hâllerde verilecek cezanın dörtte birinden dörtte üçüne kadarı indirilir.", r: "TCK m.35/2" },
  { id: "qc25", b: "ceza", q: "Suçun kanuni tanımındaki fiili birlikte gerçekleştiren kişiler nasıl sorumlu olur?", o: ["Yardım eden olarak", "Her biri fail olarak", "Azmettiren olarak", "Yalnızca en ağır kusurlu olan sorumludur"], a: 1, e: "Suçun kanuni tanımında yer alan fiili birlikte gerçekleştiren kişilerden her biri fail olarak sorumlu olur (müşterek faillik).", r: "TCK m.37/1" },
  { id: "qc26", b: "ceza", q: "Başkasını suç işlemeye azmettiren kişiye hangi ceza verilir?", o: ["Cezanın yarısı", "İşlenen suçun cezası", "Ceza verilmez", "Cezanın üçte biri"], a: 1, e: "Başkasını suç işlemeye azmettiren kişi, işlenen suçun cezası ile cezalandırılır.", r: "TCK m.38/1" },
  { id: "qc27", b: "ceza", q: "Suça yardım edene (müebbet dışındaki hâllerde) ceza nasıl verilir?", o: ["Fail gibi", "Cezanın yarısı indirilir; ceza 8 yılı geçemez", "Cezanın dörtte biri indirilir", "Ceza verilmez"], a: 1, e: "Yardım edene, ağırlaştırılmış müebbet yerine on beş–yirmi yıl, müebbet yerine on–on beş yıl hapis verilir; diğer hâllerde cezanın yarısı indirilir. Bu durumda ceza sekiz yılı geçemez.", r: "TCK m.39/1" },
  { id: "qc28", b: "ceza", q: "Zincirleme suçta ceza nasıl artırılır?", o: ["İki katına", "Dörtte birden dörtte üçe kadar", "Yarısı kadar sabit", "Artırılmaz"], a: 1, e: "Bir suç işleme kararının icrası kapsamında, değişik zamanlarda bir kişiye karşı aynı suçun birden fazla işlenmesi hâlinde tek ceza verilir; ancak bu ceza dörtte birinden dörtte üçüne kadar artırılır.", r: "TCK m.43/1" },
  { id: "qc29", b: "ceza", q: "Yetişkin bir sanığa verilen hapis cezası en fazla ne kadarsa ertelenebilir?", o: ["1 yıl", "2 yıl (18 yaşından küçük ve 65 yaşından büyükler için 3 yıl)", "3 yıl", "5 yıl"], a: 1, e: "İki yıl veya daha az süreyle hapis cezasına mahkûm edilen kişinin cezası ertelenebilir. Fiili işlediği sırada on sekiz yaşını doldurmamış veya altmış beş yaşını bitirmiş kişiler bakımından üst sınır üç yıldır.", r: "TCK m.51/1" },
  { id: "qc30", b: "ceza", q: "Suçüstü hâlinde kolluk dışındaki biri şüpheliyi yakalayabilir mi?", o: ["Hayır, yalnızca kolluk", "Evet; suçüstü hâlinde herkes geçici yakalama yapabilir", "Yalnızca mağdur", "Yalnızca savcı izniyle"], a: 1, e: "Kişiye suçu işlerken rastlanması veya suçüstü bir fiilden dolayı izlenmesi hâlinde, kaçması olasılığı bulunur veya hemen kimliği belirlenemezse herkes tarafından geçici olarak yakalanabilir.", r: "CMK m.90/1-a" },
  { id: "qc31", b: "ceza", q: "Haksız tutuklama nedeniyle tazminat başvurusu hangi sürede yapılmalı?", o: ["Kesinleşmeden itibaren 1 ay", "Kesinleşmenin öğrenilmesinden 3 ay; her hâlde kesinleşmeden 1 yıl", "5 yıl", "Süresiz"], a: 1, e: "Tazminat istemi, karar veya hükmün kesinleştiğinin ilgiliye tebliğinden itibaren üç ay ve her hâlde kesinleşme tarihinden itibaren bir yıl içinde yapılabilir.", r: "CMK m.142/1" },
  // İŞ
  { id: "qi21", b: "is", q: "Ücret en geç hangi aralıklarla ödenmelidir?", o: ["Üç ayda bir", "En geç ayda bir; sözleşmeyle bir haftaya kadar indirilebilir", "Yılda iki kez", "İşverenin takdirine göre"], a: 1, e: "Ücret en geç ayda bir ödenir. İş sözleşmeleri veya toplu iş sözleşmeleriyle ödeme süresi bir haftaya kadar indirilebilir.", r: "İş K. m.32" },
  { id: "qi22", b: "is", q: "Hangi iş sözleşmelerinin yazılı yapılması zorunludur?", o: ["Hepsinin", "Süresi bir yıl ve daha fazla olan belirli süreli sözleşmelerin", "Hiçbirinin", "Yalnızca kısmi süreli olanların"], a: 1, e: "İş sözleşmesi kanunda aksi belirtilmedikçe özel bir şekle tabi değildir. Ancak süresi bir yıl ve daha fazla olan iş sözleşmelerinin yazılı yapılması zorunludur.", r: "İş K. m.8/1" },
  { id: "qi23", b: "is", q: "Belirli süreli iş sözleşmesi üst üste yenilenebilir mi?", o: ["Evet, sınırsızca", "Esaslı bir neden olmadıkça birden fazla üst üste yapılamaz; aksi hâlde belirsiz süreli sayılır", "En fazla 10 kez", "Hayır, hiçbir şekilde"], a: 1, e: "Belirli süreli iş sözleşmesi esaslı bir neden olmadıkça birden fazla üst üste (zincirleme) yapılamaz. Aksi hâlde sözleşme başlangıçtan itibaren belirsiz süreli kabul edilir.", r: "İş K. m.11/2" },
  { id: "qi24", b: "is", q: "İşveren çalışma koşullarını esaslı biçimde değiştirmek isterse işçi ne kadar sürede yazılı kabul etmezse değişiklik onu bağlamaz?", o: ["3 gün", "6 iş günü", "15 gün", "30 gün"], a: 1, e: "Esaslı değişiklik işçiye yazılı olarak bildirilir; bu şekle uygun olarak yapılmayan ve işçi tarafından altı iş günü içinde yazılı olarak kabul edilmeyen değişiklikler işçiyi bağlamaz.", r: "İş K. m.22/1" },
  { id: "qi25", b: "is", q: "Bildirim süresi içinde işçiye verilmesi gereken iş arama izni?", o: ["Haftada 2 saat", "Günde 2 saatten az olmamak üzere", "Toplam 1 gün", "Verilmesi zorunlu değil"], a: 1, e: "Bildirim süreleri içinde işveren, işçiye yeni bir iş bulması için gerekli olan iş arama iznini iş saatleri içinde ve ücret kesintisi yapmadan vermeye mecburdur. İş arama izninin süresi günde iki saatten az olamaz.", r: "İş K. m.27/1" },
  { id: "qi26", b: "is", q: "Yıllık ücretli izin bölünebilir mi?", o: ["Hayır, hiçbir şekilde", "Tarafların anlaşmasıyla, bir bölümü 10 günden az olmamak üzere bölümler hâlinde kullanılabilir", "İşveren dilediği gibi böler", "Yalnızca 2 eşit parçaya"], a: 1, e: "Yıllık ücretli izin işveren tarafından bölünemez. Ancak tarafların anlaşmasıyla bir bölümü on günden aşağı olmamak üzere bölümler hâlinde kullanılabilir.", r: "İş K. m.56/2" },
  { id: "qi27", b: "is", q: "18 yaş ve altı ile 50 yaş ve üstü işçilerin yıllık izni en az kaç gündür?", o: ["14 gün", "20 gün", "26 gün", "30 gün"], a: 1, e: "On sekiz ve daha küçük yaştaki işçilerle elli ve daha yukarı yaştaki işçilere verilecek yıllık ücretli izin süresi yirmi günden az olamaz.", r: "İş K. m.53" },
  { id: "qi28", b: "is", q: "Kıdem tazminatının geç ödenmesi hâlinde hangi faiz uygulanır?", o: ["Kanuni faiz", "Mevduata uygulanan en yüksek faiz", "Avans faizi", "Faiz işlemez"], a: 1, e: "Kıdem tazminatının ödenmesinde gecikme hâlinde, gecikilen süre için mevduata uygulanan en yüksek faiz ödenir.", r: "1475 s. K. m.14/11" },
  { id: "qi29", b: "is", q: "İznini işyerinin bulunduğu yerden başka bir yerde geçirecek işçiye ne verilmelidir?", o: ["Ücretli 7 gün yol izni", "Talep ederse toplam 4 güne kadar ücretsiz yol izni", "Yol parası", "Hiçbir şey"], a: 1, e: "Yıllık iznini işyerinin kurulu bulunduğu yerden başka bir yerde geçirecek işçilere, istemde bulunmaları ve bu hususu belgelemeleri koşuluyla gidiş ve dönüşlerinde toplam dört güne kadar ücretsiz yol izni verilmesi zorunludur.", r: "İş K. m.56/4" },
  { id: "qi30", b: "is", q: "Fazla çalışma karşılığında işçi ücret yerine serbest zaman isterse her fazla saat için ne kadar serbest zaman verilir?", o: ["1 saat", "1 saat 30 dakika", "2 saat", "45 dakika"], a: 1, e: "Fazla çalışma yapan işçi isterse bu çalışmalar karşılığında zamlı ücret yerine, her fazla çalışma saati için bir saat otuz dakika serbest zaman kullanabilir.", r: "İş K. m.41/4" },
  { id: "qi31", b: "is", q: "Kaç yaşını doldurmamış çocukların çalıştırılması kural olarak yasaktır?", o: ["12", "15 (14 yaşını doldurmuş ve zorunlu eğitimi tamamlamışlar hafif işlerde çalışabilir)", "16", "18"], a: 1, e: "On beş yaşını doldurmamış çocukların çalıştırılması yasaktır. Ancak on dört yaşını doldurmuş ve zorunlu temel eğitimini tamamlamış çocuklar, gelişmelerine ve okullarına engel olmayacak hafif işlerde çalıştırılabilir.", r: "İş K. m.71/1" },
  { id: "qi32", b: "is", q: "Ciddi ve yakın bir tehlikeyle karşılaşan çalışan ne yapabilir?", o: ["Hiçbir şey, çalışmaya devam eder", "Durumun tespiti için başvurabilir; tedbir alınana kadar çalışmaktan kaçınabilir", "Derhal tazminatsız istifa etmek zorundadır", "Yalnızca polise haber verir"], a: 1, e: "Ciddi ve yakın tehlikeyle karşı karşıya kalan çalışanlar, kurula veya işverene başvurarak durumun tespit edilmesini isteyebilir; gerekli tedbir alınıncaya kadar çalışmaktan kaçınabilir. Bu sürede ücretleri ve diğer hakları saklıdır.", r: "6331 s. K. m.13" },
  // AİLE
  { id: "qa21", b: "aile", q: "Aşağıdakilerden hangisiyle evlenmek kanunen yasak değildir?", o: ["Kardeş", "Teyze", "Teyze çocuğu (kuzen)", "Üvey ana"], a: 2, e: "Üstsoy ile altsoy, kardeşler, amca, dayı, hala ve teyze ile yeğenler arasında ve sıhrî hısımlar arasında (üstsoy-altsoy) evlenme yasaktır. Kuzenler arasında yasal evlenme engeli yoktur.", r: "TMK m.129" },
  { id: "qa22", b: "aile", q: "Akıl hastalığı sebebiyle boşanma için ne aranır?", o: ["Yalnızca tanık", "Ortak hayatın çekilmez hâle gelmesi ve hastalığın geçmeyeceğinin resmî sağlık kurulu raporuyla tespiti", "Hastanın rızası", "En az 1 yıl hastanede kalması"], a: 1, e: "Eşlerden biri akıl hastası olup bu yüzden ortak hayat diğer eş için çekilmez hâle gelirse ve hastalığın geçmesine olanak bulunmadığı resmî sağlık kurulu raporuyla tespit edilirse boşanma davası açılabilir.", r: "TMK m.165" },
  { id: "qa23", b: "aile", q: "Boşanmadan doğan dava hakları (tazminat, nafaka gibi) ne zaman zamanaşımına uğrar?", o: ["Boşanma hükmünün kesinleşmesinden itibaren 1 yıl", "5 yıl", "10 yıl", "Süresiz"], a: 0, e: "Evliliğin boşanma sebebiyle sona ermesinden doğan dava hakları, boşanma hükmünün kesinleşmesinin üzerinden bir yıl geçmekle zamanaşımına uğrar.", r: "TMK m.178" },
  { id: "qa24", b: "aile", q: "Boşanan kadın kural olarak hangi soyadını kullanır?", o: ["Eski eşinin soyadını", "Evlenmeden önceki soyadını; menfaati varsa hâkim eski eşin soyadını kullanmasına izin verebilir", "İstediği soyadını", "Çocuğunun soyadını"], a: 1, e: "Boşanan kadın evlenmeden önceki soyadını yeniden kazanır. Kadının boşandığı kocasının soyadını kullanmasında menfaati bulunduğu ve kocaya zarar vermeyeceği ispat edilirse hâkim izin verir.", r: "TMK m.173" },
  { id: "qa25", b: "aile", q: "Ortak hayat nedeniyle kişiliği veya ekonomik güvenliği ciddi tehlikeye düşen eşin hakkı nedir?", o: ["Hiçbir hak yok", "Tehlike sürdükçe ayrı yaşama hakkı", "Derhal boşanma kararı", "Diğer eşi evden çıkarma hakkı (yalnızca 6284 ile)"], a: 1, e: "Ortak hayat sebebiyle kişiliği, ekonomik güvenliği veya ailenin huzuru ciddi biçimde tehlikeye düşen eş, bu tehlike sürdükçe ayrı yaşama hakkına sahiptir.", r: "TMK m.197/1" },
  { id: "qa26", b: "aile", q: "Eşlerden biri diğerine ait malın edinilmesine karşılıksız katkıda bulunduysa tasfiyede ne ister?", o: ["Hiçbir şey", "Katkısı oranında değer artış payı", "Malın tamamını", "Yalnızca verdiği paranın faizini"], a: 1, e: "Eşlerden biri diğerine ait bir malın edinilmesine, iyileştirilmesine veya korunmasına hiç ya da uygun karşılık almaksızın katkıda bulunmuşsa, tasfiye sırasında bu malda meydana gelen değer artışı için katkısı oranında alacak hakkına sahiptir.", r: "TMK m.227/1" },
  { id: "qa27", b: "aile", q: "Eşin ölümüyle mal rejimi sona erdi. Sağ kalan eş aile konutu için ne isteyebilir?", o: ["Hiçbir şey", "Katılma alacağına mahsuben konut üzerinde intifa veya oturma hakkı (ya da mülkiyet) tanınmasını", "Konutun satılmasını", "Kira bedeli"], a: 1, e: "Sağ kalan eş, birlikte yaşadıkları ve ölen eşe ait olan konut üzerinde, katılma alacağına mahsup edilmek üzere intifa veya oturma hakkı tanınmasını isteyebilir; haklı sebepler varsa mülkiyet hakkı da tanınabilir.", r: "TMK m.240" },
  { id: "qa28", b: "aile", q: "Evlilik devam ederken velayeti kim kullanır?", o: ["Yalnızca baba", "Yalnızca anne", "Ana ve baba birlikte", "Mahkemenin seçtiği eş"], a: 2, e: "Evlilik devam ettiği sürece ana ve baba velayeti birlikte kullanırlar.", r: "TMK m.336/1" },
  { id: "qa29", b: "aile", q: "Küçüğün evlat edinilebilmesi için evlat edinenin ona ne kadar süre bakmış olması gerekir?", o: ["3 ay", "6 ay", "1 yıl", "2 yıl"], a: 2, e: "Küçüğün evlat edinilebilmesi için, evlat edinen tarafından bir yıl süreyle bakılıp eğitilmiş olması şarttır.", r: "TMK m.305/1" },
  { id: "qa30", b: "aile", q: "Eşlerin birlikte evlat edinebilmesi için hangi koşul aranır?", o: ["En az 1 yıl evli olmak", "En az 5 yıldan beri evli olmak veya 30 yaşını doldurmuş olmak", "En az 40 yaşında olmak", "Çocuksuz olmak"], a: 1, e: "Eşler ancak birlikte evlat edinebilirler. Bunun için en az beş yıldan beri evli olmaları veya otuz yaşını doldurmuş olmaları gerekir.", r: "TMK m.306" },
  { id: "qa31", b: "aile", q: "Evlat edinen, evlatlıktan en az kaç yaş büyük olmalıdır?", o: ["10", "15", "18", "21"], a: 2, e: "Evlat edinen her durumda evlatlıktan en az on sekiz yaş büyük olmalıdır.", r: "TMK m.308/1" },
  { id: "qa32", b: "aile", q: "İrat biçimindeki nafaka hangi durumlarda kendiliğinden kalkar?", o: ["Yalnızca mahkeme kararıyla", "Alacaklının yeniden evlenmesi veya taraflardan birinin ölümüyle", "5 yıl geçince", "Borçlunun işsiz kalmasıyla"], a: 1, e: "Nafaka alacaklısının yeniden evlenmesi veya taraflardan birinin ölümü hâlinde irat kendiliğinden kalkar. Evlenmeksizin fiilen evliymiş gibi yaşama gibi hâllerde ise mahkeme kararıyla kaldırılır.", r: "TMK m.176/3" },
  // İDARE
  { id: "qd18", b: "idare", q: "Aşağıdakilerden hangisi idari yargıda dilekçenin ilk incelemesinde incelenen hususlardan biri değildir?", o: ["Görev ve yetki", "Süre aşımı", "İşlemin esas yönünden hukuka uygunluğu", "Husumet"], a: 2, e: "İlk incelemede görev ve yetki, idari merci tecavüzü, ehliyet, kesin ve yürütülmesi gereken bir işlem olup olmadığı, süre aşımı, husumet ve dilekçenin usule uygunluğu incelenir. Esas inceleme sonraki aşamadır.", r: "İYUK m.14/3" },
  { id: "qd19", b: "idare", q: "Adli yargının görevine giren bir dava idare mahkemesinde açılırsa ne olur?", o: ["İdare mahkemesi esastan karar verir", "Dava görev yönünden reddedilir", "Dosya Yargıtay'a gönderilir", "Dava düşer, harç iade edilmez"], a: 1, e: "İlk inceleme sonunda adli yargının görevine giren davaların görev yönünden reddine karar verilir; idari yargı içindeki görev ve yetki uyuşmazlıklarında ise dosya görevli ve yetkili mahkemeye gönderilir.", r: "İYUK m.15/1-a" },
  { id: "qd20", b: "idare", q: "İdari yargıda inceleme nasıl yapılır?", o: ["Yalnızca tarafların getirdiği delillerle", "Mahkeme her türlü incelemeyi kendiliğinden (re'sen) yapar", "Yalnızca bilirkişi raporuyla", "Duruşma zorunludur"], a: 1, e: "Danıştay, idare ve vergi mahkemeleri bakmakta oldukları davalara ait her türlü incelemeyi kendiliğinden yaparlar (re'sen araştırma ilkesi).", r: "İYUK m.20/1" },
  { id: "qd21", b: "idare", q: "Birden fazla idari işleme karşı tek dilekçeyle dava açılabilir mi?", o: ["Hayır, hiçbir zaman", "Kural olarak her işleme ayrı dava açılır; aralarında maddi veya hukuki bağlılık ya da sebep-sonuç ilişkisi varsa tek dilekçe olabilir", "Evet, sınırsız", "Yalnızca vergi davalarında"], a: 1, e: "Her idari işlem aleyhine ayrı ayrı dava açılır. Ancak aralarında maddi veya hukuki yönden bağlılık ya da sebep-sonuç ilişkisi bulunan işlemlere karşı tek dilekçeyle de dava açılabilir.", r: "İYUK m.5/1" },
  { id: "qd22", b: "idare", q: "HSK'nın hangi kararlarına karşı yargı yolu açıktır?", o: ["Tüm kararlarına", "Yalnızca meslekten çıkarma cezasına ilişkin kararlarına", "Hiçbirine", "Yalnızca atama kararlarına"], a: 1, e: "Hâkimler ve Savcılar Kurulunun meslekten çıkarma cezasına ilişkin kararları dışındaki kararlarına karşı yargı mercilerine başvurulamaz.", r: "AY m.159" },
  { id: "qd23", b: "idare", q: "Devletin işlemlerinde ilgililere bildirmesi gereken husus hangisidir?", o: ["İşlemi yapan memurun adı", "Hangi kanun yollarına ve mercilere başvurulacağı ile süreleri", "İşlemin maliyeti", "Bildirim zorunlu değildir"], a: 1, e: "Devlet, işlemlerinde ilgili kişilerin hangi kanun yollarına ve mercilere başvuracağını ve sürelerini belirtmek zorundadır.", r: "AY m.40/2" },
  { id: "qd24", b: "idare", q: "Hizmeti 10 yıldan fazla olan devlet memurunun yıllık izni?", o: ["20 gün", "24 gün", "30 gün", "36 gün"], a: 2, e: "Yıllık izin süresi hizmeti bir yıldan on yıla kadar (on yıl dâhil) olanlar için yirmi gün, hizmeti on yıldan fazla olanlar için otuz gündür.", r: "657 s. K. m.102" },
  { id: "qd25", b: "idare", q: "Devlet memurluğundan çıkarma cezasını kim verir?", o: ["Disiplin amiri", "Atamaya yetkili amir tek başına", "Yüksek disiplin kurulu", "İdare mahkemesi"], a: 2, e: "Uyarma, kınama, aylıktan kesme ve kademe ilerlemesinin durdurulması cezaları disiplin amirlerince; devlet memurluğundan çıkarma cezası ise memurun bağlı olduğu kurumun yüksek disiplin kurulunca verilir.", r: "657 s. K. m.126" },
  { id: "qd26", b: "idare", q: "Kınama cezası memurun özlük dosyasından ne zaman silinebilir?", o: ["1 yıl sonra", "5 yıl sonra, başvuru üzerine", "10 yıl sonra", "Hiçbir zaman"], a: 1, e: "Uyarma ve kınama cezaları beş yıl, devlet memurluğundan çıkarma dışındaki diğer cezalar on yıl geçtikten sonra memurun başvurusu üzerine; bu sürelerdeki davranışları dikkate alınarak özlük dosyasından silinebilir.", r: "657 s. K. m.133" },
  { id: "qd27", b: "idare", q: "Görevden uzaklaştırılan memura bu süre içinde aylığının ne kadarı ödenir?", o: ["Hiç ödenmez", "Yarısı", "Üçte ikisi", "Tamamı"], a: 2, e: "Görevden uzaklaştırılan memurlara bu süre içinde aylıklarının üçte ikisi ödenir; sosyal hak ve yardımlardan yararlanmaya devam ederler.", r: "657 s. K. m.141" },
  { id: "qd28", b: "idare", q: "Devlet memuru olabilmek için asgari yaş?", o: ["16", "18", "21", "22"], a: 1, e: "Devlet memurluğuna alınacaklarda aranacak genel şartlardan biri on sekiz yaşını bitirmiş olmaktır.", r: "657 s. K. m.48/A" },
  { id: "qd29", b: "idare", q: "Ağır cezalık suçüstü hâlinde memur hakkında soruşturma izni gerekir mi?", o: ["Evet, her durumda", "Hayır; ağır cezayı gerektiren suçüstü hâli genel hükümlere tabidir", "Yalnızca vali izniyle", "Yalnızca bakan izniyle"], a: 1, e: "Ağır cezayı gerektiren suçüstü hâli genel hükümlere tabidir; bu durumda soruşturma izni aranmaz.", r: "4483 s. K. m.2" },
  // BORÇLAR
  { id: "qb20", b: "borclar", q: "Sözleşmelerin geçerliliği kural olarak bir şekle bağlı mıdır?", o: ["Evet, yazılı olmalı", "Hayır; kanunda aksine hüküm yoksa hiçbir şekle bağlı değildir", "Noter onayı şart", "Tanık şart"], a: 1, e: "Sözleşmelerin geçerliliği, kanunda aksine bir hüküm bulunmadıkça hiçbir şekle bağlı değildir.", r: "TBK m.12/1" },
  { id: "qb21", b: "borclar", q: "Ahlaka veya kamu düzenine aykırı sözleşmenin yaptırımı nedir?", o: ["İptal edilebilirlik", "Kesin hükümsüzlük", "Askıda hükümsüzlük", "Geçerli, yalnızca tazminat doğar"], a: 1, e: "Kanunun emredici hükümlerine, ahlaka, kamu düzenine, kişilik haklarına aykırı veya konusu imkânsız olan sözleşmeler kesin olarak hükümsüzdür.", r: "TBK m.27/1" },
  { id: "qb22", b: "borclar", q: "Haksız fiilde zararı ve failin kusurunu kim ispat eder?", o: ["Fail", "Zarar gören", "Mahkeme re'sen", "Sigorta şirketi"], a: 1, e: "Zarar gören, zararını ve zarar verenin kusurunu ispat yükü altındadır.", r: "TBK m.50/1" },
  { id: "qb23", b: "borclar", q: "Karşılıklı sözleşmede borçlu temerrüde düştü, verilen ek süre de sonuçsuz kaldı. Alacaklının seçimlik hakları?", o: ["Yalnızca ifa davası", "İfa + gecikme tazminatı; ifadan vazgeçip müspet zarar; veya sözleşmeden dönüp menfi zarar", "Yalnızca dönme", "Hiçbir hak yok"], a: 1, e: "Alacaklı, ifa ve gecikme tazminatı isteyebileceği gibi, ifadan vazgeçerek ifa edilmemeden doğan zararın (müspet zarar) giderilmesini isteyebilir veya sözleşmeden dönebilir (menfi zarar).", r: "TBK m.125/2" },
  { id: "qb24", b: "borclar", q: "Borçlunun sorumlu tutulamayacağı sebeplerle ifa imkânsızlaşırsa ne olur?", o: ["Borçlu tazminat öder", "Borç sona erer", "Borç iki katına çıkar", "Alacaklı borçluya ceza öder"], a: 1, e: "Borcun ifası borçlunun sorumlu tutulamayacağı sebeplerle imkânsızlaşırsa borç sona erer.", r: "TBK m.136/1" },
  { id: "qb25", b: "borclar", q: "Aşağıdakilerden hangisi zamanaşımını keser?", o: ["Alacaklının borçluya telefon etmesi", "Borçlunun borcu ikrar etmesi veya alacaklının dava açması ya da icra takibi yapması", "Sürenin yarısının dolması", "Tarafların aynı şehirde oturması"], a: 1, e: "Borçlunun borcu ikrar etmesi, alacaklının dava veya def'i yoluyla mahkemeye ya da hakeme başvurması, icra takibinde bulunması veya iflas masasına başvurması zamanaşımını keser; yeni süre işlemeye başlar.", r: "TBK m.154, 156" },
  { id: "qb26", b: "borclar", q: "Hâkim zamanaşımını kendiliğinden dikkate alabilir mi?", o: ["Evet, her zaman", "Hayır; zamanaşımı def'i olarak ileri sürülmelidir", "Yalnızca kira davalarında", "Yalnızca tüketici davalarında"], a: 1, e: "Hâkim, zamanaşımını kendiliğinden göz önüne alamaz.", r: "TBK m.161" },
  { id: "qb27", b: "borclar", q: "Alacağın devri hangi şekle tabidir?", o: ["Şekle tabi değil", "Yazılı şekil", "Resmî şekil", "Noter onayı"], a: 1, e: "Alacağın devri, yazılı şekilde yapılmadıkça geçerli olmaz.", r: "TBK m.184/1" },
  { id: "qb28", b: "borclar", q: "Taşınır satışında yarar ve hasar kural olarak ne zaman alıcıya geçer?", o: ["Sözleşme imzalanınca", "Zilyetliğin devri anında", "Bedel ödenince", "Fatura kesilince"], a: 1, e: "Kanun veya sözleşmede aksi öngörülmedikçe, taşınır satışında yarar ve hasar, malın zilyetliğinin devri anında alıcıya geçer.", r: "TBK m.208/1" },
  { id: "qb29", b: "borclar", q: "Kiracı sözleşme süresinden önce kiralananı boşaltırsa kira borcu ne olur?", o: ["Hemen sona erer", "Benzer koşullarla yeniden kiraya verilebileceği makul bir süre için devam eder", "Sözleşmenin sonuna kadar her durumda devam eder", "İki katına çıkar"], a: 1, e: "Kiracı sözleşme süresine veya fesih dönemine uymaksızın kiralananı geri verirse, borçları kiralananın benzer koşullarla kiraya verilebileceği makul bir süre için devam eder.", r: "TBK m.325/1" },
  { id: "qb30", b: "borclar", q: "Kiralananı sonradan satın alan yeni malik, gereksinim nedeniyle tahliye için ne yapmalıdır?", o: ["Hemen dava açar", "Edinmeden itibaren 1 ay içinde kiracıya yazılı bildirim yapıp 6 ay sonra dava açar", "Kira döneminin bitimini bekler, bildirim gerekmez", "Kiracıyla yeni sözleşme yapmak zorundadır"], a: 1, e: "Kiralananı sonradan edinen kişi, gereksinim varsa edinme tarihinden itibaren bir ay içinde durumu kiracıya yazılı olarak bildirmek koşuluyla sözleşmeyi altı ay sonra açacağı davayla sona erdirebilir.", r: "TBK m.351/1" },
  { id: "qb31", b: "borclar", q: "Vekâlet sözleşmesi ne zaman sona erdirilebilir?", o: ["Yalnızca süre bitince", "Taraflar her zaman dönebilir veya feshedebilir; uygun olmayan zamanda fesih tazminat doğurur", "Yalnızca mahkeme kararıyla", "Hiçbir zaman, ölüme kadar sürer"], a: 1, e: "Vekâlet veren veya vekil, her zaman sözleşmeden dönebilir veya sözleşmeyi feshedebilir. Ancak uygun olmayan zamanda sözleşmeyi sona erdiren taraf, diğerinin bu yüzden uğradığı zararı gidermekle yükümlüdür.", r: "TBK m.512" },
  // MİRAS
  { id: "qm20", b: "miras", q: "Birinci derecede mirasçılar kimlerdir ve nasıl paylaşırlar?", o: ["Kardeşler; eşit", "Altsoy (çocuklar); eşit", "Ana-baba; eşit", "Eş; tamamı"], a: 1, e: "Mirasbırakanın mirasçıları öncelikle altsoyudur. Çocuklar eşit olarak mirasçı olurlar.", r: "TMK m.495/1" },
  { id: "qm21", b: "miras", q: "Çocuğu, ana-babası ve onların altsoyu olmayan bir mirasbırakanın amcası mirasçı olabilir mi?", o: ["Hayır, hiçbir zaman", "Evet; büyük ana-baba zümresinde, ölmüş büyük babanın yerine onun altsoyu olarak", "Yalnızca vasiyetle", "Yalnızca Devlet izin verirse"], a: 1, e: "Bu durumda mirasçılar büyük ana ve babalardır. Mirasbırakandan önce ölmüş olan büyük ana veya babanın yerini kendi altsoyu (örneğin amca, hala, dayı, teyze) alır.", r: "TMK m.497" },
  { id: "qm22", b: "miras", q: "Sağ kalan eş büyük ana-baba zümresiyle birlikte mirasçı olursa payı?", o: ["1/4", "1/2", "3/4", "Tamamı"], a: 2, e: "Sağ kalan eş, büyük ana ve babalar ve onların çocukları ile birlikte mirasçı olursa mirasın dörtte üçünü, bunlar da yoksa tamamını alır.", r: "TMK m.499/3" },
  { id: "qm23", b: "miras", q: "Evlilik dışında doğan çocuk babasına mirasçı olur mu?", o: ["Hayır", "Soybağı kurulmuşsa evlilik içi hısımlar gibi mirasçı olur", "Yarı pay alır", "Yalnızca vasiyetle"], a: 1, e: "Babaya soybağı ile bağlı evlilik dışı hısımlar, evlilik içi hısımlar gibi mirasçı olurlar.", r: "TMK m.498" },
  { id: "qm24", b: "miras", q: "Vasiyetname yapabilmek için hangi ehliyet gerekir?", o: ["18 yaş ve erginlik", "Ayırt etme gücü ve 15 yaşını doldurmuş olmak", "21 yaş", "Kısıtlı olmamak ve 25 yaş"], a: 1, e: "Ayırt etme gücüne sahip ve on beş yaşını doldurmuş olan herkes, kanunda belirtilen sınırlar içinde ölüme bağlı tasarruf (vasiyetname) yapabilir.", r: "TMK m.502" },
  { id: "qm25", b: "miras", q: "Miras sözleşmesi yapabilmek için hangi ehliyet gerekir?", o: ["15 yaş", "Ayırt etme gücü, erginlik ve kısıtlı olmamak", "Yalnızca ayırt etme gücü", "Noter onayı"], a: 1, e: "Miras sözleşmesi yapabilmek için ayırt etme gücüne sahip ve ergin olmak, kısıtlı bulunmamak gerekir.", r: "TMK m.503" },
  { id: "qm26", b: "miras", q: "Mirastan çıkarma (ıskat) hangi koşulla geçerlidir?", o: ["Sözlü olarak bildirilmesi yeterli", "Çıkarma sebebinin ölüme bağlı tasarrufta belirtilmesiyle", "Noter ihtarıyla", "Mahkeme kararıyla"], a: 1, e: "Mirastan çıkarma, sebebi ölüme bağlı tasarrufta belirtilmişse geçerlidir.", r: "TMK m.512/1" },
  { id: "qm27", b: "miras", q: "Mirasbırakan vasiyetnamesinden dönebilir mi?", o: ["Hayır, vasiyetname kesindir", "Evet; her zaman, kanundaki şekillerden birine uyarak", "Yalnızca mirasçılar kabul ederse", "Yalnızca 10 yıl içinde"], a: 1, e: "Mirasbırakan, vasiyetname yapma konusunda kanunda öngörülen şekillerden birine uymak koşuluyla vasiyetnamesinden her zaman dönebilir.", r: "TMK m.542" },
  { id: "qm28", b: "miras", q: "Ana rahmindeki çocuk mirasçı olabilir mi?", o: ["Hayır", "Evet; sağ doğmak koşuluyla", "Yalnızca baba ölmüşse", "Yalnızca vasiyetle"], a: 1, e: "Ana rahmindeki çocuk, sağ doğmak koşuluyla mirasçı olur.", r: "TMK m.582/1" },
  { id: "qm29", b: "miras", q: "Mirasbırakanı kasten öldüren veya öldürmeye teşebbüs eden kişi?", o: ["Mirasçı olur", "Mirastan yoksun olur (mirasçı olamaz)", "Payı yarıya iner", "Yalnızca saklı payını alır"], a: 1, e: "Mirasbırakanı kasten ve hukuka aykırı olarak öldüren veya öldürmeye teşebbüs eden kişi mirasçı olamaz ve ölüme bağlı tasarrufla herhangi bir hak edinemez.", r: "TMK m.578/1" },
  { id: "qm30", b: "miras", q: "Mirası reddetme hakkı olan mirasçı ne zamana kadar resmî defter tutulmasını isteyebilir?", o: ["3 ay", "1 ay içinde", "1 yıl", "Süre yoktur"], a: 1, e: "Mirası reddetme hakkı bulunan her mirasçı defter tutulmasını isteyebilir. İstem, ret için öngörülen usule göre bir ay içinde sulh mahkemesine yapılır.", r: "TMK m.619" },
  { id: "qm31", b: "miras", q: "Mirasçılar arasındaki paylaşma sözleşmesinin şekli nedir?", o: ["Resmî şekil", "Yazılı şekil", "Şekle tabi değil", "Mahkeme onayı"], a: 1, e: "Paylaşma sözleşmesi yazılı şekilde yapılmadıkça geçerli olmaz.", r: "TMK m.676" }
);

SOURCES[0].items.push(["7571 sayılı Kanun (11. Yargı Paketi, RG 25.12.2025/33118), 5235 s. K. m.12", "Nitelikli dolandırıcılık (TCK m.158) ağır ceza mahkemesinin görev listesinden çıkarıldı; bu davalara artık asliye ceza mahkemesi bakar."]);
SOURCES[0].items.push(["7589 sayılı Kanun, TCK m.158/4", "Dolandırıcılığa iştirakin yalnızca banka hesabı veya ödeme aracı bilgilerini vermekten ibaret olması hâlinde ceza yarı oranında indirilir (31.07.2026)."]);
