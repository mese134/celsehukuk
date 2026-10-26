// ===== İcra ve İflas ile Ticaret genişletmesi (40'ar soru) · 26.10.2026 · resmî PDF karşılaştırması bekliyor =====
CASES.push(
  {
    id: "e3", b: "icra", title: "Borcum Yok", court: "Ankara 12. Asliye Ticaret Mahkemesi", esas: "Dava öncesi", role: "Borçlu vekili", zorluk: 2,
    intro: "Müvekkil Orion Yapı Ltd. Şti. hakkında, daha önce iade edilmiş bir avans gerekçe gösterilerek 900.000 TL'lik ilamsız takip başlatıldı. Müvekkil ödeme emrine süresinde itiraz etmedi; takip kesinleşti ve banka hesaplarına haciz konuldu. Avansın iade edildiğini gösteren banka dekontu elinde.",
    evidence: [
      ["Banka dekontu", "12.03.2026; 900.000 TL, açıklama: \"avans iadesi\"."],
      ["Ödeme emri", "Tebliğ edilmiş; itiraz yok, takip kesinleşmiş."],
      ["Haciz yazıları", "Üç bankadaki hesaplara haciz konulmuş."]
    ],
    steps: [
      { q: "Takip kesinleşmiş olsa da müvekkil borçlu olmadığını hangi davayla ileri sürebilir?", o: ["İtirazın iptali", "Menfi tespit davası", "İhalenin feshi", "Tasarrufun iptali"], a: 1,
        e: "İcra takibinden önce veya sonra borçlu, borçlu olmadığının tespiti için menfi tespit davası açabilir.", r: "İİK m.72/1" },
      { q: "Takipten sonra açılan menfi tespit davasında mahkeme takibi tedbiren durdurabilir mi?", o: ["Evet, teminatsız", "Hayır; ancak teminat karşılığında icra veznesindeki paranın alacaklıya ödenmemesine karar verebilir", "Evet, yalnızca alacaklı kabul ederse", "Hayır, hiçbir tedbir verilemez"], a: 1,
        e: "Takipten sonra açılan menfi tespit davasında icra takibi durdurulamaz. Borçlu, uygun teminat göstermek şartıyla icra veznesindeki paranın alacaklıya verilmemesi için ihtiyati tedbir isteyebilir.", r: "İİK m.72/3" },
      { q: "Bu tedbir için gösterilecek teminat en az ne kadar olmalıdır?", o: ["Alacağın %5'i", "Alacağın %15'i", "Alacağın %50'si", "Alacağın tamamı"], a: 1,
        e: "Bu durumda teminat, alacağın yüzde on beşinden aşağı olamaz.", r: "İİK m.72/3" },
      { q: "Menfi tespit davası hangi mahkemede görülür?", o: ["İcra mahkemesi", "Genel mahkeme; burada taraflar tacir ve uyuşmazlık ticari olduğundan asliye ticaret", "Sulh hukuk", "Danıştay"], a: 1,
        e: "Menfi tespit davası icra mahkemesinde değil, genel görev kurallarına göre görevli mahkemede açılır. Uyuşmazlık ticari ise asliye ticaret mahkemesi görevlidir.", r: "İİK m.72/1 · TTK m.4-5" },
      { q: "Dava borçlu lehine sonuçlanırsa haksız ve kötü niyetli takip yapan alacaklı ne ile sorumlu tutulabilir?", o: ["Hiçbir şey", "Alacağın %20'sinden aşağı olmamak üzere tazminat", "Alacağın iki katı ceza", "Yalnızca yargılama gideri"], a: 1,
        e: "Dava borçlu lehine hükme bağlanırsa takip durur. Borçlunun talebi üzerine haksız ve kötü niyetli takip yapan alacaklı, alacağın yüzde yirmisinden aşağı olmamak üzere tazminata mahkûm edilir.", r: "İİK m.72/5" }
    ]
  },
  {
    id: "e4", b: "icra", title: "Kaçmadan Önce", court: "İzmir 4. Asliye Ticaret Mahkemesi", esas: "2026/611 D.İş", role: "Alacaklı vekili", zorluk: 3,
    intro: "Müvekkil Ege Lojistik A.Ş.'nin, borçlu Selçuk Tarım Ltd. Şti.'den vadesi 1 Ekim 2026'da gelmiş 2.300.000 TL'lik fatura alacağı var. Alacak rehinle güvence altında değil. Borçlunun araçlarını hızla devretmeye başladığı öğrenildi.",
    evidence: [
      ["Faturalar ve sözleşme", "Vade 01.10.2026; ödeme yapılmamış."],
      ["Trafik kayıtları", "Son iki haftada borçlunun 6 aracı devredilmiş."],
      ["İhtarname", "08.10.2026; cevapsız."]
    ],
    steps: [
      { q: "İhtiyati haciz için temel koşul nedir?", o: ["Alacağın ilama bağlanmış olması", "Vadesi gelmiş ve rehinle temin edilmemiş bir para borcu", "Borçlunun iflas etmiş olması", "Noter ihtarı"], a: 1,
        e: "Vadesi gelmiş ve rehinle temin edilmemiş bir para borcunun alacaklısı, borçlunun mallarının ihtiyaten haczini isteyebilir.", r: "İİK m.257/1" },
      { q: "Alacaklı ihtiyati haciz kararı için kural olarak ne göstermelidir?", o: ["Hiçbir şey", "Borçlunun ve üçüncü kişilerin olası zararlarına karşı teminat", "Bilirkişi raporu", "Borçlunun rızası"], a: 1,
        e: "İhtiyati haciz isteyen alacaklı, haksız çıktığı takdirde borçlunun ve üçüncü kişilerin bu yüzden uğrayacakları zararlardan sorumlu olup, teminat göstermeye mecburdur. Alacak bir ilama dayanıyorsa teminat aranmaz.", r: "İİK m.259" },
      { q: "Karar alındı. Uygulanması için ne kadar sürede icra dairesinden istenmelidir?", o: ["7 gün", "Karar tarihinden itibaren 10 gün", "1 ay", "Süre yok"], a: 1,
        e: "İhtiyati haciz kararı, karar tarihinden itibaren on gün içinde icra dairesinden istenerek uygulanır; aksi hâlde kendiliğinden kalkar.", r: "İİK m.261/1" },
      { q: "Dava açmadan önce alınan ihtiyati haciz uygulandıktan sonra alacaklı ne yapmalıdır?", o: ["Hiçbir şey", "Uygulamadan itibaren 7 gün içinde takip başlatmalı veya dava açmalı", "1 yıl içinde dava açmalı", "Yalnızca borçluya bildirmeli"], a: 1,
        e: "Dava açılmadan önce ihtiyati haciz yapılmışsa alacaklı, haczin uygulanmasından itibaren yedi gün içinde takip talebinde bulunmak veya dava açmak zorundadır; aksi hâlde haciz kendiliğinden kalkar.", r: "İİK m.264/1" },
      { q: "Borçlu ihtiyati haciz kararına hangi sürede itiraz edebilir?", o: ["3 gün", "Kararın uygulanmasından (yüzüne karşı uygulanmadıysa tebliğden) itibaren 7 gün", "15 gün", "30 gün"], a: 1,
        e: "Borçlu, ihtiyati haciz kararı yüzüne karşı uygulanmışsa haczin uygulanmasından, değilse tutanağın tebliğinden itibaren yedi gün içinde kararı veren mahkemeye itiraz edebilir.", r: "İİK m.265/1" }
    ]
  },
  {
    id: "t3", b: "ticaret", title: "Kopya Ambalaj", court: "İstanbul 9. Asliye Ticaret Mahkemesi", esas: "Dava öncesi", role: "Davacı vekili", zorluk: 2,
    intro: "Müvekkil Karadeniz Çay A.Ş., yıllardır kırmızı-altın ambalajlı \"Tepe\" çayını satıyor. Rakip bir firma, neredeyse aynı renk ve düzende \"Tepeli\" adlı bir çay piyasaya sürdü. Müşteriler ürünleri karıştırdıklarını bildiriyor ve müvekkilin satışları düştü.",
    evidence: [
      ["Ambalaj karşılaştırması", "Renk, yazı tipi ve yerleşim büyük ölçüde aynı."],
      ["Müşteri şikâyetleri", "\"Tepe sandık, Tepeli çıktı\" içerikli 40 bildirim."],
      ["Satış raporu", "Son üç ayda %18 düşüş."]
    ],
    steps: [
      { q: "Haksız rekabetin genel tanımı nedir?", o: ["Yalnızca fiyat kırmak", "Rakipler veya tedarikçilerle müşteriler arasındaki ilişkileri etkileyen, aldatıcı veya dürüstlük kuralına diğer şekillerdeki aykırı davranış ve uygulamalar", "Yalnızca marka tecavüzü", "Kâr marjı yüksek satış"], a: 1,
        e: "Rakipler arasında veya tedarik edenlerle müşteriler arasındaki ilişkileri etkileyen aldatıcı veya dürüstlük kuralına diğer şekillerdeki aykırı davranışlar ile ticari uygulamalar haksız ve hukuka aykırıdır.", r: "TTK m.54/2" },
      { q: "Rakibin eylemi hangi özel hâle girer?", o: ["Kötüleme", "Başkasının malları, iş ürünleri veya işletmesiyle karışıklık yaratmaya elverişli önlemler almak", "Gizli bilgiyi açıklama", "Sözleşmeyi ihlale yöneltme"], a: 1,
        e: "Başkasının malları, iş ürünleri, faaliyetleri veya işletmesiyle karışıklık yaratmaya yönelik veya buna elverişli önlemler almak dürüstlük kuralına aykırı davranış örneğidir.", r: "TTK m.55/1-a-4" },
      { q: "Müvekkil hangi davaları açabilir?", o: ["Yalnızca tazminat", "Fiilin haksız olup olmadığının tespiti, men'i, maddi durumun ortadan kaldırılması ve kusur varsa tazminat", "Yalnızca ceza şikâyeti", "Yalnızca tespit"], a: 1,
        e: "Haksız rekabet yüzünden zarar gören veya zarar tehlikesiyle karşılaşan kişi; tespit, men, maddi durumun ortadan kaldırılması, yanlış veya yanıltıcı beyanların düzeltilmesi ve kusur varsa zarar ve ziyanın tazminini isteyebilir.", r: "TTK m.56/1" },
      { q: "Tazminat istemi için ayrıca hangi koşul aranır?", o: ["Hiçbir koşul", "Davalının kusuru", "Davalının iflası", "Ürünlerin tamamen aynı olması"], a: 1,
        e: "Tespit, men ve ortadan kaldırma davaları kusur aramaz; zarar ve ziyanın tazmini ise kusur varsa istenebilir.", r: "TTK m.56/1-d" },
      { q: "Dava sürerken satışların devam etmesini durdurmak için ne istenebilir?", o: ["Hiçbir şey", "İhtiyati tedbir", "İhtiyati haciz", "Tespit davası kesinleşmeden hiçbir önlem yok"], a: 1,
        e: "Davacının istemi üzerine mahkeme, mevcut durumun korunmasına, haksız rekabetin önlenmesine ve maddi durumun ortadan kaldırılmasına yönelik ihtiyati tedbirlere karar verebilir.", r: "TTK m.61" }
    ]
  },
  {
    id: "t4", b: "ticaret", title: "Islak Kartonlar", court: "Konya 2. Asliye Ticaret Mahkemesi", esas: "Dava öncesi", role: "Alıcı vekili", zorluk: 2,
    intro: "Müvekkil Anadolu Gıda A.Ş., Mavi Ambalaj Ltd. Şti.'den 50.000 adet karton koli satın aldı. Teslim 2 Ekim 2026 Cuma günü yapıldı. Kolilerin bir kısmının ıslak olduğu teslim sırasında açıkça görülüyordu; geri kalanlarda ise dayanıksızlık ancak üretim hattında kullanılırken anlaşıldı.",
    evidence: [
      ["İrsaliye", "02.10.2026; teslim alan depo sorumlusu."],
      ["Depo fotoğrafları", "Teslim günü çekilmiş; 4 palet ıslak."],
      ["Üretim raporu", "09.10.2026: kolilerin %30'u yük altında yırtıldı."]
    ],
    steps: [
      { q: "Teslim sırasında açıkça görülen ıslaklık satıcıya ne zamana kadar ihbar edilmeliydi?", o: ["8 gün", "2 gün", "1 ay", "Süre yok"], a: 1,
        e: "Ticari satışta malın ayıplı olduğu teslim sırasında açıkça belli ise alıcı iki gün içinde durumu satıcıya ihbar etmek zorundadır.", r: "TTK m.23/1-c" },
      { q: "Açıkça belli olmayan dayanıksızlık için süre nedir?", o: ["2 gün", "Teslimden itibaren 8 gün içinde inceleme ve ayıp çıkarsa ihbar", "2 yıl", "30 gün"], a: 1,
        e: "Ayıp açıkça belli değilse alıcı malları teslim aldığı tarihten itibaren sekiz gün içinde incelemek veya incelettirmek ve ayıp ortaya çıkarsa durumu satıcıya ihbar etmekle yükümlüdür. Bu sürelerde ihbar yapılmazsa mal kabul edilmiş sayılır.", r: "TTK m.23/1-c" },
      { q: "İhbar hangi şekilde yapılmalıdır?", o: ["Telefonla", "Noter, taahhütlü mektup, telgraf veya güvenli elektronik imzalı KEP ile", "WhatsApp mesajı yeterli", "Sözlü olarak depo sorumlusuna"], a: 1,
        e: "Tacirler arasında diğer tarafı temerrüde düşürmeye, sözleşmeyi feshe veya ondan dönmeye yönelik ihbarlar noter, taahhütlü mektup, telgraf veya güvenli elektronik imzalı KEP yoluyla yapılır. İspat açısından bu şekillere uyulmalıdır.", r: "TTK m.18/3" },
      { q: "Satıcı bedeli iade etmekte temerrüde düşerse hangi faiz istenebilir?", o: ["Kanuni faiz", "Avans faizi", "Faiz istenemez", "Mevduat faizi"], a: 1,
        e: "Ticari işlerde temerrüt faizi, sözleşmede daha yüksek bir oran yoksa TCMB'nin kısa vadeli avans işlemlerine uyguladığı faiz oranıdır.", r: "3095 s. K. m.2/2" },
      { q: "Her iki taraf tacir ve satış işletmeleriyle ilgili. Dava hangi mahkemede görülür?", o: ["Asliye hukuk", "Asliye ticaret", "Sulh hukuk", "Tüketici mahkemesi"], a: 1,
        e: "Her iki tarafın ticari işletmesiyle ilgili hususlardan doğan hukuk davaları ticari davadır ve asliye ticaret mahkemesinde görülür. Para alacağı talebinde önce arabulucuya başvurmak dava şartıdır.", r: "TTK m.4/1, m.5/1, m.5/A" }
    ]
  }
);

QUICK.push(
  // İCRA VE İFLAS
  { id: "qe13", b: "icra", q: "Haciz ihbarnamesi tebliğ edilen üçüncü kişi borcu inkâr etmek için ne yapmalıdır?", o: ["Hiçbir şey", "Tebliğden itibaren 7 gün içinde icra dairesine itiraz", "30 gün içinde dava", "Yalnızca borçluya bildirim"], a: 1, e: "Kendisine haciz ihbarnamesi tebliğ edilen üçüncü kişi, yedi gün içinde malın elinde olmadığını veya borcun bulunmadığını icra dairesine bildirmek zorundadır; aksi hâlde mal elinde veya borç zimmetinde sayılır.", r: "İİK m.89/1" },
  { id: "qe14", b: "icra", q: "İlamlı takipte icra emrine karşı borcun ödendiği itirazı nereye ve hangi sürede yapılır?", o: ["İcra dairesine, 3 gün", "İcra mahkemesine, icra emrinin tebliğinden itibaren 7 gün", "Bölge adliye mahkemesine, 15 gün", "Asliye hukuka, 1 ay"], a: 1, e: "İlamlı takipte borçlu, ilamdan sonra borcun ödendiğini veya ertelendiğini ya da zamanaşımına uğradığını icra emrinin tebliğinden itibaren yedi gün içinde icra mahkemesine bildirebilir.", r: "İİK m.33/1" },
  { id: "qe15", b: "icra", q: "Ödeme emrine itiraz etmeyen ve ödemeyen borçlu ne yapmakla yükümlüdür?", o: ["Hiçbir şey", "Ödeme süresi içinde mal beyanında bulunmak", "İflas başvurusu", "Teminat yatırmak"], a: 1, e: "Ödeme emrine itiraz etmeyen ve ödemeyen borçlu, ödeme süresi içinde kanuna uygun şekilde mal beyanında bulunmakla yükümlüdür.", r: "İİK m.74/1" },
  { id: "qe16", b: "icra", q: "Mal beyanında bulunmayan borçluya hangi yaptırım uygulanır?", o: ["Hiçbiri", "Şikâyet üzerine 3 aya kadar tazyik hapsi", "2 yıl hapis", "Adli para cezası"], a: 1, e: "Kanuna uygun şekilde mal beyanında bulunmayan borçlu, alacaklının şikâyeti üzerine üç aya kadar tazyik hapsi ile cezalandırılır.", r: "İİK m.337/1" },
  { id: "qe17", b: "icra", q: "Aşağıdakilerden hangisi doğrudan (takipsiz) iflas sebebidir?", o: ["Tek bir faturanın gecikmesi", "Borçlunun ödemelerini tatil etmesi", "Borçlunun şirket merkezini taşıması", "Vergi borcu bulunması"], a: 1, e: "İflasa tabi borçlunun ödemelerini tatil etmesi, önceden takip yapılmaksızın iflas istemeye imkân veren doğrudan iflas sebeplerindendir.", r: "İİK m.177" },
  { id: "qe18", b: "icra", q: "Konkordatoda geçici mühlet süresi ne kadardır?", o: ["1 ay", "3 ay; talep hâlinde 2 ay uzatılabilir", "1 yıl", "6 ay"], a: 1, e: "Mahkeme konkordato talebi üzerine üç aylık geçici mühlet verir; gerekirse bu süre iki ay uzatılabilir.", r: "İİK m.287/1" },
  { id: "qe19", b: "icra", q: "Konkordatoda kesin mühlet süresi ne kadardır?", o: ["3 ay", "1 yıl; karmaşık durumlarda 6 ay daha uzatılabilir", "2 yıl", "Süresiz"], a: 1, e: "Konkordatonun başarıya ulaşabileceği anlaşılırsa borçluya bir yıllık kesin mühlet verilir; özellikle karmaşık durumlarda mahkeme bu süreyi altı ay daha uzatabilir.", r: "İİK m.289/1" },
  { id: "qe20", b: "icra", q: "Para alacağı için takipte yetkili icra dairesi nasıl belirlenir?", o: ["Alacaklının ikametgâhı", "HMK'nın yetkiye ilişkin hükümleri kıyasen uygulanarak", "Her zaman Ankara icra daireleri", "Borçlunun doğum yeri"], a: 1, e: "Para veya teminat verilmesi için takip yapılacak yer, Hukuk Muhakemeleri Kanunu'nun yetkiye ilişkin hükümleri kıyasen uygulanarak belirlenir.", r: "İİK m.50/1" },
  // TİCARET
  { id: "qt13", b: "ticaret", q: "Tacir, başkası için yaptığı ticari işler karşılığında ücret isteyebilir mi?", o: ["Hayır, açıkça kararlaştırılmadıkça", "Evet; uygun bir ücret isteyebilir", "Yalnızca yazılı sözleşme varsa", "Yalnızca kamu kurumlarından"], a: 1, e: "Ticari işletmesiyle ilgili olarak başkası için iş gören veya hizmet veren tacir, kararlaştırılmamış olsa bile uygun bir ücret isteyebilir.", r: "TTK m.20/1" },
  { id: "qt14", b: "ticaret", q: "Ticari defterler kaç yıl saklanmalıdır?", o: ["3 yıl", "5 yıl", "10 yıl", "20 yıl"], a: 2, e: "Her tacir ticari defterlerini, envanterleri, açılış bilançolarını ve diğer belgeleri on yıl süreyle saklamakla yükümlüdür.", r: "TTK m.82" },
  { id: "qt15", b: "ticaret", q: "Limited şirket tek ortakla kurulabilir mi?", o: ["Hayır, en az 2 ortak gerekir", "Evet; bir veya daha fazla gerçek veya tüzel kişi tarafından kurulabilir", "Yalnızca tüzel kişi ortakla", "En az 5 ortak gerekir"], a: 1, e: "Limited şirket, bir veya daha fazla gerçek veya tüzel kişi tarafından bir ticaret unvanı altında kurulur.", r: "TTK m.573/1" },
  { id: "qt16", b: "ticaret", q: "Limited şirkette en az bir ortağın yönetim ve temsil yetkisi bulunması zorunlu mu?", o: ["Hayır", "Evet", "Yalnızca sermaye 1 milyon TL'yi aşarsa", "Yalnızca tek ortaklı şirkette"], a: 1, e: "Yönetim ve temsil ortak olmayan üçüncü kişilere de verilebilir; ancak en az bir ortağın şirketi yönetim hakkının ve temsil yetkisinin bulunması şarttır.", r: "TTK m.623/1" },
  { id: "qt17", b: "ticaret", q: "Anonim şirketin yönetim kurulu en az kaç kişiden oluşur?", o: ["1", "3", "5", "7"], a: 0, e: "Anonim şirketin, esas sözleşmeyle atanan veya genel kurulca seçilen bir veya daha fazla kişiden oluşan bir yönetim kurulu bulunur.", r: "TTK m.359/1" },
  { id: "qt18", b: "ticaret", q: "Bononun zorunlu unsurlarından biri hangisidir?", o: ["Kefil imzası", "Senet metninde \"bono\" veya \"emre muharrer senet\" kelimesi", "Noter onayı", "Faiz oranı"], a: 1, e: "Bono, senet metninde \"bono\" veya \"emre muharrer senet\" kelimesini ve senedin düzenlendiği dilde içermelidir; kayıtsız şartsız ödeme vaadi, vade, ödeme yeri, lehtar, düzenleme tarihi ve yeri ile düzenleyenin imzası da zorunludur.", r: "TTK m.776/1" },
  { id: "qt19", b: "ticaret", q: "Ticari defter tutma yükümlülüğü kime aittir?", o: ["Yalnızca anonim şirketlere", "Her tacire", "Yalnızca ihracatçılara", "Yalnızca bankalara"], a: 1, e: "Her tacir, ticari defterleri tutmak ve defterlerinde ticari işlemleriyle ticari işletmesinin iktisadi ve mali durumunu açıkça görülebilir bir şekilde ortaya koymak zorundadır.", r: "TTK m.64/1" },
  { id: "qt20", b: "ticaret", q: "Ticari işletme nedir?", o: ["Her türlü kazanç faaliyeti", "Esnaf işletmesi sınırını aşan düzeyde gelir hedefleyen faaliyetlerin devamlı ve bağımsız yürütüldüğü işletme", "Yalnızca fabrika", "Yalnızca şirketler"], a: 1, e: "Ticari işletme, esnaf işletmesi için öngörülen sınırı aşan düzeyde gelir sağlamayı hedef tutan faaliyetlerin devamlı ve bağımsız şekilde yürütüldüğü işletmedir.", r: "TTK m.11/1" }
);
