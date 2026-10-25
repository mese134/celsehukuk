// ===== İçerik genişletmesi (+%25) · son kontrol 24.10.2026 =====
CASES.push(
  {
    id: 'd4', b: 'idare', title: 'Yol Geçecek Bahçe', court: 'Manisa 2. Asliye Hukuk Mahkemesi', esas: '2026/1402 E.', role: 'Malik vekili', zorluk: 2,
    intro: "Belediye, müvekkil Sevgi T.'nin bahçesinin 600 m²'lik kısmını yol yapımı için kamulaştırmaya karar verdi. Satın alma usulüyle yapılan pazarlıkta anlaşma sağlanamadı. Belediye asliye hukuk mahkemesinde bedel tespiti ve tescil davası açtı; mahkemenin davetiyesi müvekkile 5 Ekim 2026'da tebliğ edildi. Müvekkil, yolun kamu yararı kararının hukuka aykırı olduğunu düşünüyor.",
    evidence: [
      ['Encümen kararı', 'Kamu yararı kararı ve kamulaştırma kararı alınmış; imar planında yol olarak ayrılmış.'],
      ['Uzlaşma tutanağı', 'İdarenin teklifi müvekkilce kabul edilmedi.'],
      ['Mahkeme davetiyesi', '05.10.2026 tebliğ. Duruşma günü ve bedelin yatırılacağı banka gösterilmiş.']
    ],
    steps: [
      { q: 'Kamulaştırma işleminin iptali için dava nerede ve hangi sürede açılmalı?', o: ['Asliye hukukta, 1 yıl içinde', 'İdare mahkemesinde, mahkeme davetiyesinin tebliğinden itibaren 30 gün içinde', 'İdare mahkemesinde, kamulaştırma kararından itibaren 60 gün içinde', 'Danıştay\'da, süresiz'], a: 1,
        e: 'Malik, asliye hukuk mahkemesinin bedel tespiti davetiyesinin tebliğinden, adresi bilinmeyenler için ilan tarihinden itibaren otuz gün içinde idari yargıda iptal davası veya adli yargıda maddi hatalara karşı düzeltim davası açabilir.', r: '2942 s. K. m.14/1, m.10/3-d' },
      { q: 'İptal davası açtın. Kamulaştırmanın kesinleşmesini önlemek için asliye hukuk mahkemesine neyi ispatlamalısın?', o: ['Yalnızca davanın açıldığını', 'Davanın açıldığını ve yürütmenin durdurulması kararı alındığını', 'Bilirkişi raporunu', 'Hiçbir şeyi; dava kendiliğinden durdurur'], a: 1, t: 20,
        e: 'İdari yargıda iptal davası açan malik, süresi içinde dava açtığını ve yürütmenin durdurulması kararı aldığını belgelemezse kamulaştırma işlemi kesinleşir ve taşınmaz mahkemece belirlenen bedel üzerinden idare adına tescil edilir.', r: '2942 s. K. m.10/3-f' },
      { q: 'Anayasa\'ya göre kamulaştırma bedeli kural olarak nasıl ödenir?', o: ['Beş yıl taksitle', 'Peşin', 'İdarenin bütçe durumuna göre', 'Arsa karşılığı'], a: 1,
        e: 'Devlet ve kamu tüzel kişileri, kamu yararının gerektirdiği hâllerde gerçek karşılıklarını peşin ödemek şartıyla özel mülkiyette bulunan taşınmazları kamulaştırmaya yetkilidir. Taksitle ödeme yalnızca Anayasa\'da sayılan istisnai hâllerde mümkündür.', r: 'AY m.46' },
      { q: 'AYM\'nin 2026\'da 2942 sayılı Kanun m.10/3-d hakkında verdiği karar nedir?', o: ['Hükmü iptal etti, dava süresi kalktı', 'İtirazı oybirliğiyle reddetti; hüküm yürürlükte', 'Hükmü kısmen iptal etti', 'Henüz karar vermedi'], a: 1, t: 20,
        e: 'Anayasa Mahkemesi, davetiye içeriğinde iptal ve düzeltim davası süresine yer veren m.10/3-d\'nin Anayasa\'ya aykırı olmadığına oybirliğiyle karar verdi.', r: 'AYM 15.01.2026, E.2025/191, K.2026/14 · RG 18.03.2026/33200' }
    ]
  },
  {
    id: 'b4', b: 'borclar', title: 'Ödenmeyen Kira', court: 'Eskişehir 4. İcra Dairesi', esas: 'Takip öncesi', role: 'Kiraya veren vekili', zorluk: 2,
    intro: "Müvekkil Orhan D., dairesini 1 Mart 2025'ten beri aylık kira ile kiraya veriyor. Kiracı Ağustos ve Eylül 2026 kiralarını ödemedi. Sözleşmede 4 aylık kira tutarında güvence bedeli alındığı yazıyor. Kiracı bu kira yılı içinde daha önce de bir kez ödemeyi geciktirmiş ve müvekkil o zaman da yazılı ihtar çekmişti.",
    evidence: [
      ['Kira sözleşmesi', 'Konut; yıllık; güvence: 4 aylık kira.'],
      ['Banka dökümü', 'Ağustos ve Eylül 2026 kiraları yatırılmamış.'],
      ['Önceki ihtar', 'Mayıs 2026\'da çekilen ihtar üzerine kira geç de olsa ödenmiş.']
    ],
    steps: [
      { q: 'Kiracıya temerrüt nedeniyle fesih ihtarında en az ne kadar süre verilmeli?', o: ['7 gün', '15 gün', '30 gün', '60 gün'], a: 2,
        e: 'Kiracı muaccel kira bedelini ödemezse kiraya veren yazılı olarak süre verip bu sürede ödenmezse sözleşmeyi feshedeceğini bildirebilir. Konut ve çatılı işyeri kiralarında bu süre en az otuz gündür.', r: 'TBK m.315' },
      { q: 'Tahliye talepli ilamsız icra takibi (ödeme emri) başlatmadan önce arabulucuya gitmek zorunlu mu?', o: ['Evet, her kira uyuşmazlığında', 'Hayır; ilamsız icra yoluyla tahliye hükümleri arabuluculuk dava şartının dışındadır', 'Yalnızca konutta', 'Yalnızca kira 1 yılı geçtiyse'], a: 1,
        e: 'Kira uyuşmazlıklarında arabuluculuk dava şartıdır; ancak kiralanan taşınmazların İcra ve İflas Kanunu\'na göre ilamsız icra yoluyla tahliyesine ilişkin hükümler bu kuralın dışında tutulmuştur.', r: 'HUAK m.18/B · İİK m.269' },
      { q: 'Sözleşmedeki 4 aylık güvence bedeli hükmü ne olur?', o: ['Geçerli', 'Üç aylık kira bedelini aşan kısım bakımından geçersiz', 'Tamamen geçersiz, güvence alınamaz', 'Yalnızca nakit ise geçerli'], a: 1,
        e: 'Konut ve çatılı işyeri kiralarında kiracıya güvence verme borcu yüklenmişse, güvence üç aylık kira bedelini aşamaz.', r: 'TBK m.342/1' },
      { q: 'Kiracı bu kira yılında ikinci kez haklı ihtara sebep olursa müvekkil ne yapabilir?', o: ['Hemen tahliye ettirir', 'Kira yılının bitiminden itibaren 1 ay içinde dava açarak sözleşmeyi sona erdirebilir', 'Kirayı iki katına çıkarır', 'Hiçbir şey'], a: 1, t: 20,
        e: 'Kiracı bir kira yılı içinde kira bedelini ödememesi nedeniyle iki haklı ihtara sebep olmuşsa kiraya veren, kira süresinin veya ihtarların yapıldığı kira yılının bitiminden başlayarak bir ay içinde dava açarak sözleşmeyi sona erdirebilir.', r: 'TBK m.352/2' },
      { q: 'Kiracı muaccel kira borcunu ödemedi. Temerrüde düşmesi için ihtar gerekir mi?', o: ['Her zaman gerekir', 'Ödeme günü sözleşmede belirlenmişse ihtara gerek yoktur', 'Yalnızca noter ihtarı gerekir', 'Temerrüt kira borçlarında uygulanmaz'], a: 1,
        e: 'Muaccel bir borcun borçlusu alacaklının ihtarıyla temerrüde düşer; borcun ifa edileceği gün birlikte belirlenmişse bu günün geçmesiyle ihtara gerek kalmadan temerrüde düşer.', r: 'TBK m.117' }
    ]
  },
  {
    id: 'm4', b: 'miras', title: 'Borçlu Babanın Mirası', court: 'Samsun 3. Sulh Hukuk Mahkemesi', esas: 'Ret beyanı', role: 'Mirasçı vekili', zorluk: 2,
    intro: "Kenan E. 1 Eylül 2026'da öldü. Geride iki banka kredisi, kredi kartı borçları ve değeri borçlarının çok altında kalan küçük bir arsa bıraktı. Çocukları Deniz ve Arda mirası reddetmeyi düşünüyor. Arda, babasının ölümünden bir hafta sonra onun arabasını satıp parasını kendi borçlarına harcamış.",
    evidence: [
      ['Banka yazıları', 'Toplam borç terekenin aktifinin yaklaşık dört katı.'],
      ['Araç satış belgesi', '08.09.2026, satan: Arda E. (vekâleten değil, mirasçı sıfatıyla).'],
      ['Tapu kaydı', 'Arsa murisin adına kayıtlı, haciz şerhleri var.']
    ],
    steps: [
      { q: 'Mirasçılar mirası ne zaman ve nasıl kazanır?', o: ['Mirasçılık belgesi alınca', 'Mirasbırakanın ölümüyle, bir bütün olarak, kendiliğinden', 'Tapu tescili ile', 'Ret süresi dolunca'], a: 1,
        e: 'Mirasçılar, mirasbırakanın ölümüyle mirası bir bütün olarak kanun gereğince kazanır (külli halefiyet). Tereke alacakları, hakları ve borçları da mirasçılara geçer.', r: 'TMK m.599' },
      { q: 'Mirası kabul eden mirasçının tereke borçlarından sorumluluğu nasıldır?', o: ['Yalnızca miras payı kadar', 'Müteselsilen ve kişisel olarak (tüm malvarlığıyla)', 'Sorumlu değildir', 'Yalnızca saklı payı oranında'], a: 1,
        e: 'Mirasçılar, mirasbırakanın borçlarından müteselsilen ve kişisel olarak sorumludur. Bu nedenle borca batık terekelerde ret yolu önemlidir.', r: 'TMK m.641/1' },
      { q: 'Deniz mirası reddetmek istiyor. Ret beyanı nereye yapılır?', o: ['Notere', 'Sulh hukuk mahkemesine, sözlü veya yazılı beyanla', 'Tapu müdürlüğüne', 'Bankaya'], a: 1,
        e: 'Ret, mirasçılar tarafından sulh mahkemesine sözlü veya yazılı beyanla yapılır; ret kayıtsız ve şartsız olmalıdır. Süre üç aydır.', r: 'TMK m.609, m.606' },
      { q: 'Ölüm tarihinde murisin ödemeden acizliği açıkça belli olsaydı ne olurdu?', o: ['Miras kendiliğinden kabul edilmiş sayılır', 'Miras reddedilmiş sayılır (hükmen ret)', 'Devlet mirasçı olur', 'Mirasçılar yarı oranında sorumlu olur'], a: 1,
        e: 'Ölüm tarihinde mirasbırakanın ödemeden aczi açıkça belli veya resmen tespit edilmişse miras reddedilmiş sayılır. Hükmen ret, mahkemede tespit davasıyla ileri sürülebilir.', r: 'TMK m.605/2' },
      { q: 'Arda, ölümden sonra murisin arabasını kendi adına satıp parasını harcadı. Mirası reddedebilir mi?', o: ['Evet, üç ay dolmadığı için', 'Hayır; tereke malını kendine mal eden mirasçı mirası reddedemez', 'Evet, yalnızca araç bedelini öderse', 'Evet, kardeşi izin verirse'], a: 1,
        e: 'Ret süresi içinde tereke işlerini olağan yönetim dışında yürüten veya tereke mallarını gizleyen ya da kendisine mal eden mirasçı mirası reddedemez.', r: 'TMK m.610/2' }
    ]
  }
);

QUICK.push(
  // CEZA (+5)
  { id: 'qc11', b: 'ceza', q: 'Üst sınırı 5 yılı geçmeyen hapis veya adli para cezası gerektiren suçlarda dava zamanaşımı?', o: ['5 yıl', '8 yıl', '10 yıl', '15 yıl'], a: 1, e: 'Kanunda başka türlü belirtilen hâller dışında, beş yıldan fazla olmamak üzere hapis veya adli para cezasını gerektiren suçlarda dava zamanaşımı sekiz yıldır.', r: 'TCK m.66/1-e' },
  { id: 'qc12', b: 'ceza', q: 'Hangi suçlarda tutuklama kararı verilemez?', o: ['Üst sınırı 5 yılı aşmayan suçlarda', 'Sadece adli para cezası gerektiren ve üst sınırı 2 yılı aşmayan hapis gerektiren kasıtlı suçlarda', 'Şikâyete bağlı tüm suçlarda', 'Taksirli suçların hiçbirinde'], a: 1, e: 'Sadece adli para cezasını gerektiren suçlarda ve üst sınırı iki yılı aşmayan hapis cezasını gerektiren kasıtlı suçlarda tutuklama kararı verilemez.', r: 'CMK m.100/4' },
  { id: 'qc13', b: 'ceza', q: 'Alt sınırı kaç yıldan fazla hapis cezası gerektiren suçlarda müdafi görevlendirilmesi zorunludur?', o: ['2 yıl', '3 yıl', '5 yıl', '10 yıl'], a: 2, e: 'Alt sınırı beş yıldan fazla hapis cezasını gerektiren suçlardan dolayı yapılan soruşturma ve kovuşturmada istem aranmaksızın müdafi görevlendirilir.', r: 'CMK m.150/3' },
  { id: 'qc14', b: 'ceza', q: 'Soruşturma evresinde tutukluluğun devamının incelenmesi en geç hangi aralıklarla yapılır?', o: ['15 gün', '30 gün', '60 gün', '3 ay'], a: 1, e: 'Soruşturma evresinde şüphelinin tutukluluğunun devamının gerekip gerekmediği, en geç otuzar günlük süreler içinde sulh ceza hâkimince incelenir.', r: 'CMK m.108/1' },
  { id: 'qc15', b: 'ceza', q: 'Kamu görevlisine görevinden dolayı hakaret suçunun soruşturulması şikâyete bağlı mı?', o: ['Evet, her hakaret şikâyete bağlıdır', 'Hayır; kamu görevlisine görevinden dolayı hakaret şikâyete bağlı değildir', 'Yalnızca sözlü ise', 'Yalnızca savcı isterse'], a: 1, e: 'Hakaret suçunun soruşturulması ve kovuşturulması kural olarak şikâyete bağlıdır; kamu görevlisine görevinden dolayı hakaret bu kuralın istisnasıdır.', r: 'TCK m.131/1' },
  // İŞ (+5)
  { id: 'qi12', b: 'is', q: 'Hafta tatili için işçiye ne kadar kesintisiz dinlenme verilir?', o: ['12 saat', '24 saat', '36 saat', '48 saat'], a: 1, e: 'İşçilere tatil gününden önce çalıştıkları koşuluyla, yedi günlük zaman dilimi içinde kesintisiz en az yirmi dört saat dinlenme verilir.', r: 'İş K. m.46' },
  { id: 'qi13', b: 'is', q: '7,5 saatten fazla süren günlük çalışmada ara dinlenme en az ne kadardır?', o: ['15 dakika', '30 dakika', '1 saat', '2 saat'], a: 2, e: 'Dört saat veya daha kısa işlerde 15 dakika, 4-7,5 saate kadar işlerde yarım saat, 7,5 saatten fazla işlerde bir saat ara dinlenme verilir.', r: 'İş K. m.68' },
  { id: 'qi14', b: 'is', q: 'Gece çalışması en fazla kaç saat sürebilir?', o: ['6 saat', '7,5 saat', '8 saat', '11 saat'], a: 1, e: 'İşçilerin gece çalışmaları yedi buçuk saati geçemez (kanundaki istisnalar saklıdır).', r: 'İş K. m.69/3' },
  { id: 'qi15', b: 'is', q: 'Tekil gebelikte toplam doğum izni süresi?', o: ['12 hafta', '14 hafta', '16 hafta', '24 hafta'], a: 2, e: 'Kadın işçinin doğumdan önce sekiz ve doğumdan sonra sekiz hafta olmak üzere toplam on altı haftalık süre için çalıştırılmaması esastır; çoğul gebelikte doğumdan önceki süreye iki hafta eklenir.', r: 'İş K. m.74/1' },
  { id: 'qi16', b: 'is', q: 'Deneme süresi en çok ne kadar olabilir?', o: ['1 ay; TİS ile 2 ay', '2 ay; TİS ile 4 aya kadar', '3 ay; TİS ile 6 ay', '6 ay'], a: 1, e: 'Deneme süresi en çok iki ay olabilir; toplu iş sözleşmeleriyle dört aya kadar uzatılabilir.', r: 'İş K. m.15/1' },
  // AİLE (+5)
  { id: 'qa12', b: 'aile', q: 'Evlenme için asgari yaş?', o: ['16; hâkim izniyle 15', '17; olağanüstü durumda hâkim izniyle 16', '18; istisnasız', '15'], a: 1, e: 'Erkek veya kadın on yedi yaşını doldurmadıkça evlenemez. Hâkim olağanüstü durumlarda ve pek önemli bir sebeple on altı yaşını doldurmuş olanların evlenmesine izin verebilir.', r: 'TMK m.124' },
  { id: 'qa13', b: 'aile', q: 'Nişanın bozulmasından doğan dava hakları ne kadar sürede zamanaşımına uğrar?', o: ['6 ay', '1 yıl', '2 yıl', '5 yıl'], a: 1, e: 'Nişanın bozulmasından doğan dava hakları, nişanın sona ermesinden başlayarak bir yıl geçmekle zamanaşımına uğrar.', r: 'TMK m.122' },
  { id: 'qa14', b: 'aile', q: 'Kişi kaç yaşında ergin olur ve başka hangi yolla ergin olur?', o: ['18; evlenmekle', '21; mahkeme kararıyla', '18; askerlikle', '17; evlenmekle'], a: 0, e: 'Erginlik on sekiz yaşın doldurulmasıyla başlar; evlenme kişiyi ergin kılar. On beş yaşını dolduran küçük, kendi isteği ve velisinin rızasıyla mahkeme kararıyla da ergin kılınabilir.', r: 'TMK m.11, m.12' },
  { id: 'qa15', b: 'aile', q: 'Edinilmiş mallara katılma rejiminde her eş, diğerinin artık değerinin ne kadarı üzerinde hak sahibidir?', o: ['Dörtte biri', 'Yarısı', 'Tamamı', 'Üçte biri'], a: 1, e: 'Her eş veya mirasçıları, diğer eşin artık değerinin yarısı üzerinde hak sahibidir; alacaklar takas edilir.', r: 'TMK m.236/1' },
  { id: 'qa16', b: 'aile', q: 'Hâkim boşanma yerine ayrılığa karar verirse ayrılık süresi ne kadar olabilir?', o: ['6 ay – 1 yıl', '1 – 3 yıl', '3 – 5 yıl', 'Süresiz'], a: 1, e: 'Ayrılığa bir yıldan üç yıla kadar karar verilebilir. Süre bitince ortak hayat yeniden kurulamamışsa eşlerden her biri boşanma davası açabilir.', r: 'TMK m.171-172' },
  // İDARE (+4)
  { id: 'qd11', b: 'idare', q: 'Kamulaştırma bedelinin tespiti ve idare adına tescil davasında görevli mahkeme?', o: ['İdare mahkemesi', 'Asliye hukuk mahkemesi', 'Sulh hukuk mahkemesi', 'Danıştay'], a: 1, e: 'Satın alma usulüyle sonuç alınamazsa idare, taşınmazın bulunduğu yer asliye hukuk mahkemesine başvurarak bedel tespiti ve tescil ister.', r: '2942 s. K. m.10/1' },
  { id: 'qd12', b: 'idare', q: 'Bilgi edinme başvurusuna kurum kural olarak kaç gün içinde cevap verir?', o: ['7 gün', '15 iş günü', '30 gün', '60 gün'], a: 1, e: 'Kurum ve kuruluşlar başvuru üzerine bilgi veya belgeye erişimi on beş iş günü içinde sağlar; başka birim veya kurum görüşü gerekiyorsa süre otuz iş günüdür.', r: '4982 s. K. m.11' },
  { id: 'qd13', b: 'idare', q: 'Bilgi edinme başvurusu reddedilen kişi Bilgi Edinme Değerlendirme Kuruluna ne kadar sürede itiraz edebilir?', o: ['7 gün', '15 gün', '30 gün', '60 gün'], a: 1, e: 'Ret kararının tebliğinden itibaren on beş gün içinde Kurula itiraz edilebilir; itiraz idari yargıya başvurma süresini durdurur.', r: '4982 s. K. m.13' },
  { id: 'qd14', b: 'idare', q: 'Kabahatler Kanunu\'na göre verilen idari para cezasına karşı başvuru yolu ve süresi?', o: ['İdare mahkemesi, 60 gün', 'Sulh ceza hâkimliği, tebliğden itibaren 15 gün', 'Asliye ceza, 30 gün', 'Valilik, 7 gün'], a: 1, e: 'Kanunda aksine hüküm bulunmadıkça idari yaptırım kararına karşı, tebliğinden itibaren en geç on beş gün içinde sulh ceza hâkimliğine başvurulabilir.', r: '5326 s. K. m.27/1' },
  // BORÇLAR (+4)
  { id: 'qb12', b: 'borclar', q: 'Sebepsiz zenginleşmede iade isteminin zamanaşımı?', o: ['1 yıl / 5 yıl', '2 yıl / 10 yıl', '5 yıl', '10 yıl'], a: 1, e: 'İade istemi, hak sahibinin istem hakkının varlığını öğrendiği tarihten başlayarak iki yıl ve her hâlde zenginleşmenin gerçekleştiği tarihten başlayarak on yıl geçmekle zamanaşımına uğrar.', r: 'TBK m.82' },
  { id: 'qb13', b: 'borclar', q: 'Taşınmaz satış sözleşmesinin geçerlilik şekli?', o: ['Adi yazılı', 'Resmî şekil', 'Sözlü yeterli', 'Noter onayı yeterli'], a: 1, e: 'Taşınmaz satışı, geçerliliği resmî şekilde yapılmasına bağlı bir sözleşmedir; tapu müdürlüğünde yapılır.', r: 'TBK m.237/1' },
  { id: 'qb14', b: 'borclar', q: 'Konut kirasında güvence bedelinin üst sınırı?', o: ['1 aylık kira', '2 aylık kira', '3 aylık kira', 'Sınır yok'], a: 2, e: 'Konut ve çatılı işyeri kiralarında güvence üç aylık kira bedelini aşamaz.', r: 'TBK m.342/1' },
  { id: 'qb15', b: 'borclar', q: 'Taşınır satışında ayıptan doğan sorumluluk davaları (ağır kusur hariç) ne kadar sürede zamanaşımına uğrar?', o: ['6 ay', '1 yıl', 'Teslimden itibaren 2 yıl', '5 yıl'], a: 2, e: 'Satılanın ayıplı olmasından doğan davalar, daha uzun bir süre üstlenilmemişse, satılan alıcıya teslim edilmiş olsa bile teslim tarihinden başlayarak iki yılın geçmesiyle zamanaşımına uğrar.', r: 'TBK m.231/1' },
  // MİRAS (+4)
  { id: 'qm12', b: 'miras', q: 'Mirastan çıkarma (ıskat) sebepleri hangileridir?', o: ['Mirasçının yoksul olması', 'Mirasbırakana veya yakınlarına karşı ağır suç işlemek ya da aile hukukundan doğan yükümlülükleri önemli ölçüde yerine getirmemek', 'Mirasçının yurt dışında yaşaması', 'Mirasbırakanın isteği yeterlidir'], a: 1, e: 'Mirasbırakan, ölüme bağlı tasarrufla, bu iki sebepten birinin varlığında saklı paylı mirasçısını mirastan çıkarabilir.', r: 'TMK m.510' },
  { id: 'qm13', b: 'miras', q: 'Evlatlığın mirasçılığı nasıldır?', o: ['Mirasçı olamaz', 'Evlat edinene altsoy gibi mirasçı olur; kendi ailesindeki mirasçılığı da devam eder', 'Yalnızca vasiyetle mirasçı olur', 'Yarı pay alır'], a: 1, e: 'Evlatlık ve altsoyu, evlat edinene kan hısımı gibi mirasçı olur; evlatlığın kendi ailesindeki mirasçılığı da devam eder. Evlat edinen ve hısımları evlatlığa mirasçı olmaz.', r: 'TMK m.500' },
  { id: 'qm14', b: 'miras', q: 'Ölüm tarihinde mirasbırakanın ödemeden aczi açıkça belliyse?', o: ['Miras kabul edilmiş sayılır', 'Miras reddedilmiş sayılır', 'Hazine mirasçı olur', 'Mirasçılar borçtan yarı oranda sorumlu olur'], a: 1, e: 'Bu durumda miras reddedilmiş sayılır (hükmen ret).', r: 'TMK m.605/2' },
  { id: 'qm15', b: 'miras', q: 'Tereke malını gizleyen veya kendisine mal eden mirasçı mirası reddedebilir mi?', o: ['Evet', 'Hayır', 'Yalnızca üç ay içinde', 'Yalnızca mahkeme izniyle'], a: 1, e: 'Ret süresi içinde tereke işlerini olağan yönetim dışında yürüten veya tereke mallarını gizleyen ya da kendisine mal eden mirasçı mirası reddedemez.', r: 'TMK m.610/2' }
);

SOURCES[1].items.push(['AYM 15.01.2026, E.2025/191, K.2026/14 (RG 18.03.2026/33200)', 'Kamulaştırma Kanunu m.10/3-d\'ye yönelik itiraz oybirliğiyle reddedildi.']);

// İzlenen gelişmeler (mevzuat takibi)
const WATCH = [
  ['13. Yargı Paketi', 'TBMM\'ye sunulmadı (24.10.2026). Taslakta süreli nafaka, iki aşamalı boşanma ve mal rejimi zamanaşımının 5 yıla inmesi var; yasalaşırsa aile soruları güncellenecek.'],
  ['AYM süresiz nafaka iptali', 'Yürürlük 30.06.2027. O tarihten önce yasama yeni düzenleme yapmazsa TMK m.175 soruları yeniden yazılacak.'],
  ['Aile arabuluculuğu', 'Zorunlu arabuluculuk henüz dava şartı değil; düzenleme izleniyor.'],
  ['Kanuni faiz oranı', 'TCMB reeskont oranına bağlı; oran sorulmuyor, yalnızca hesap yöntemi soruluyor.'],
  ['KVKK yapay zekâ teklifi', '08.01.2026\'da TBMM\'ye sunuldu, yasalaşmadı.']
];
