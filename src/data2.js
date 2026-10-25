// ===== İdare, borçlar ve miras hukuku =====
CASES.push(
  // ---------------- İDARE ----------------
  {
    id: 'd1', b: 'idare', title: 'Mühürlenen Kafe', court: 'İzmir 3. İdare Mahkemesi', esas: 'Dava öncesi', role: 'Davacı vekili', zorluk: 2,
    intro: "Müvekkil Tuna Ltd. Şti.'nin işlettiği kafe, belediye encümeni kararıyla \"ruhsata aykırı faaliyet\" gerekçesiyle süresiz olarak kapatıldı. Karar 1 Ekim 2026'da tebliğ edildi. Şirketin geçerli işyeri açma ve çalışma ruhsatı var; kafede 14 kişi çalışıyor.",
    evidence: [
      ['Encümen kararı', '"Ruhsata aykırı faaliyet nedeniyle işyerinin süresiz kapatılmasına." Hangi aykırılık olduğu yazılmamış.'],
      ['İşyeri ruhsatı', 'Kafe-restoran faaliyeti için 2024 tarihli geçerli ruhsat.'],
      ['Zabıta tutanağı', 'Tutanakta yalnızca "denetim yapıldı" ifadesi var; tespit edilen aykırılık yok.'],
      ['Mali tablo', 'Kapalı geçen her gün için kira, maaş ve stok kaybı sürüyor.']
    ],
    steps: [
      { q: 'Kapatma kararına karşı hangi davayı açarsın?', o: ['Tam yargı davası', 'İptal davası', 'Sulh hukukta tespit davası', 'Asliye hukukta men-i müdahale'], a: 1,
        e: 'Yetki, şekil, sebep, konu ve maksat yönlerinden biriyle hukuka aykırı olduğu ileri sürülen idari işleme karşı, menfaati ihlal edilenler iptal davası açar. Uğranılan zarar için ayrıca tam yargı davası açılabilir.', r: 'İYUK m.2/1-a' },
      { q: 'Dava açma süresi ne kadardır ve ne zaman başlar?', o: ['Tebliğden itibaren 30 gün', 'Tebliğden itibaren 60 gün', 'Öğrenmeden itibaren 1 yıl', 'Kararın alındığı günden itibaren 60 gün'], a: 1,
        e: 'Özel kanunlarda ayrı süre gösterilmeyen hâllerde dava açma süresi idare mahkemelerinde altmış gündür ve yazılı bildirimi izleyen günden başlar. Vergi mahkemelerinde süre otuz gündür.', r: 'İYUK m.7/1-2' },
      { q: 'İşletme her gün zarar ediyor. Yürütmenin durdurulmasını hangi koşullarla alırsın?', o: ['Telafisi güç veya imkânsız zarar ve açık hukuka aykırılık birlikte bulunmalı', 'Bu iki koşuldan biri yeterli', 'Teminat yatırılması yeterli', 'İdarenin onayı gerekir'], a: 0,
        e: 'Yürütmenin durdurulması, idari işlemin uygulanması hâlinde telafisi güç veya imkânsız zararların doğması ve işlemin açıkça hukuka aykırı olması şartlarının birlikte gerçekleşmesine bağlıdır.', r: 'İYUK m.27/2' },
      { q: 'Mahkeme kapatma kararının "neden aykırı bulunduğunu" yerine koyup "bence 1 ay kapatmak daha uygun olurdu" diyebilir mi?', o: ['Evet, ölçülülük gereği', 'Hayır; idari yargı yerindelik denetimi yapamaz, idari eylem ve işlem niteliğinde karar veremez', 'Evet, yalnızca istinafta', 'Sadece bilirkişi önerirse'], a: 1,
        e: 'İdari yargı yetkisi idari eylem ve işlemlerin hukuka uygunluğunun denetimiyle sınırlıdır. İdari mahkemeler yerindelik denetimi yapamaz, idarenin takdir yetkisini kaldıracak veya idari işlem niteliğinde karar veremez.', r: 'İYUK m.2/2' },
      { q: 'İdare mahkemesi işlemi iptal etti, bölge idare mahkemesi istinafı reddetti. İdare Danıştay\'a temyiz başvurusu yapabilir mi?', o: ['Hayır, BİM kararları her zaman kesindir', 'Evet; ticari faaliyeti süresiz engelleyen işlemlere karşı davalarda BİM kararı temyiz edilebilir', 'Yalnızca parasal sınır aşılırsa', 'Yalnızca Danıştay izin verirse'], a: 1,
        e: 'Belli bir ticari faaliyeti süresiz veya otuz gün ya da daha uzun süre engelleyen işlemlere karşı açılan iptal davalarında bölge idare mahkemesi kararlarına karşı, tebliğden itibaren otuz gün içinde Danıştay\'da temyiz yoluna gidilebilir.', r: 'İYUK m.46/1-e' }
    ]
  },
  {
    id: 'd2', b: 'idare', title: 'Karında Unutulan Gazlı Bez', court: 'Ankara 9. İdare Mahkemesi', esas: 'Dava öncesi', role: 'Davacı vekili', zorluk: 3,
    intro: "Müvekkil Nesrin A. 10 Ocak 2026'da bir devlet hastanesinde safra kesesi ameliyatı oldu. Aylarca süren karın ağrısından sonra 2 Haziran 2026'da yapılan tetkiklerde karnında gazlı bez unutulduğu anlaşıldı; ikinci bir ameliyat gerekti. Müvekkil ameliyatı yapan hekime dava açmak istiyor.",
    evidence: [
      ['Tomografi raporu', '02.06.2026: Batın içinde yabancı cisim (cerrahi gazlı bez) ile uyumlu görünüm.'],
      ['Epikriz', 'Yabancı cisim ikinci ameliyatla çıkarıldı; 3 hafta hastanede yatış.'],
      ['Gelir belgesi', 'Müvekkil serbest çalışan grafik tasarımcı; 4 ay çalışamadı.']
    ],
    steps: [
      { q: 'Tazminat davası kime karşı açılmalı?', o: ['Doğrudan ameliyatı yapan hekime, asliye hukukta', 'İdareye (Sağlık Bakanlığı); hekime ancak idare rücu edebilir', 'Hastane başhekimine şahsen', 'Hem hekime hem idareye, aynı davada'], a: 1,
        e: 'Kamu görevlilerinin yetkilerini kullanırken işledikleri kusurlardan doğan tazminat davaları, rücu edilmek kaydıyla ve kanunun gösterdiği şekle uygun olarak, ancak idare aleyhine açılabilir.', r: 'AY m.129/5 · İYUK m.2/1-b' },
      { q: 'İdari eylemden doğan zarar için dava açmadan önce ne yapmalısın?', o: ['Doğrudan dava açarım', 'Öğrenmeden itibaren 1 yıl ve her hâlde eylemden itibaren 5 yıl içinde idareye başvururum', 'Önce arabulucuya giderim', 'Valiliğe şikâyet ederim'], a: 1,
        e: 'İdari eylemlerden hakları ihlal edilmiş olanlar, eylemi öğrendikleri tarihten itibaren bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde ilgili idareye başvurarak haklarının yerine getirilmesini istemek zorundadır.', r: 'İYUK m.13/1' },
      { q: 'Başvurudan sonra 30 gün geçti, idare cevap vermedi. Ne olur?', o: ['İstek kabul edilmiş sayılır', 'İstek reddedilmiş sayılır; bu tarihten itibaren dava açma süresi içinde (60 gün) dava açılır', 'İdare cevap verene kadar beklenir', 'Süre 60 güne uzar'], a: 1,
        e: 'İlgililerin idareye başvurusuna otuz gün içinde cevap verilmezse istek reddedilmiş sayılır. Zımni ret üzerine dava açma süresi içinde idari yargıya başvurulur.', r: 'İYUK m.10/2 (7331 s. K.), m.13/1' },
      { q: 'İdarenin sorumluluğunun dayanağı nedir?', o: ['Hekimin kişisel kusuru; idare sorumlu değil', 'Hizmet kusuru; sağlık hizmeti kötü işlemiş', 'Sosyal risk ilkesi', 'Hiçbiri; tıbbi komplikasyon'], a: 1,
        e: 'Ameliyatta yabancı cisim unutulması hizmetin kötü işlemesidir ve idarenin hizmet kusuru olarak değerlendirilir. İdare, kendi eylem ve işlemlerinden doğan zararı ödemekle yükümlüdür.', r: 'AY m.125/son' },
      { q: 'Bilirkişi zararı daha yüksek hesapladı, talebini artırdın. Artırılan kısma faiz hangi tarihten işler?', o: ['Artırım dilekçesinin verildiği tarihten', 'Karar tarihinden', 'Dava dilekçesindeki miktar için faiz hangi tarihten işletiliyorsa o tarihten', 'Faiz istenemez'], a: 2, t: 20,
        e: 'Danıştay İçtihatları Birleştirme Kurulu\'na göre tam yargı davalarında miktar artırımı yapılan kısım için de, dava dilekçesinde talep edilen miktar için faize hangi tarihten hükmedilecekse o tarihten faiz uygulanır.', r: 'Danıştay İDDK E.2021/5, K.2024/2 · RG 16.04.2025/32872' }
    ]
  },
  {
    id: 'd3', b: 'idare', title: 'Komşu Parseldeki Kule', court: 'İstanbul 6. İdare Mahkemesi', esas: '2026/1311 E.', role: 'Davacı vekili', zorluk: 3,
    intro: "Belediye, müvekkil Ayşe K.'nin evinin bitişiğindeki parselde kat yüksekliğini 4'ten 18'e çıkaran imar planı değişikliğini 2 Mart 2026'da askıya çıkardı. Müvekkil ilanı fark etmedi. 15 Eylül 2026'da plana dayanılarak komşu parseldeki X İnşaat A.Ş.'ye yapı ruhsatı verildi.",
    evidence: [
      ['Askı ilanı', 'Plan değişikliği 02.03.2026–02.04.2026 arasında belediye ilan panosunda askıda kaldı.'],
      ['Yapı ruhsatı', '15.09.2026 tarihli, 18 katlı konut için.'],
      ['Tapu kaydı', 'Müvekkilin taşınmazı plan değişikliği yapılan parselle sınır komşusu.']
    ],
    steps: [
      { q: 'Müvekkilin bu plana karşı dava açma ehliyeti var mı?', o: ['Hayır, yalnızca plan alanındaki malikler dava açabilir', 'Evet; komşu parsel maliki olarak menfaati ihlal edilmiştir', 'Herkes, menfaat aranmaksızın dava açabilir', 'Yalnızca muhtarlık açabilir'], a: 1,
        e: 'İptal davası, idari işlem nedeniyle menfaati ihlal edilenler tarafından açılır. Plan değişikliğinden doğrudan etkilenen komşu taşınmaz malikinin kişisel, meşru ve güncel menfaati bulunur.', r: 'İYUK m.2/1-a' },
      { q: 'İlanı gereken düzenleyici işlemlerde dava açma süresi ne zaman başlar?', o: ['İlgilinin öğrendiği günden', 'İlan tarihini izleyen günden', 'Askının bittiği günden', 'İşlemin uygulandığı günden'], a: 1,
        e: 'İlanı gereken düzenleyici işlemlerde dava süresi, ilan tarihini izleyen günden itibaren başlar.', r: 'İYUK m.7/4' },
      { q: 'Plana karşı 60 günlük süre kaçtı. Şimdi ne yapabilirsin?', o: ['Hiçbir şey; plan kesinleşti', 'Plana dayanan yapı ruhsatına karşı, ruhsatla birlikte plana da dava açabilirim', 'Yalnızca tazminat isteyebilirim', 'Sadece valiliğe itiraz edebilirim'], a: 1,
        e: 'Düzenleyici işleme karşı doğrudan dava açılmamış olması, bu işlemin uygulanması üzerine ilgilinin uygulama işlemiyle birlikte düzenleyici işleme de dava açmasına engel olmaz.', r: 'İYUK m.7/4' },
      { q: 'X İnşaat davaya idare yanında müdahil oldu. Mahkeme planı iptal etti; belediye istinafa gitmedi. Müdahil tek başına istinaf yoluna başvurabilir mi?', o: ['Hayır, müdahil asıl tarafa bağlıdır', 'Evet; katıldığı tarafın tutum ve beyanlarına aykırı olmamak kaydıyla', 'Yalnızca davacı izin verirse', 'Yalnızca Danıştay\'a temyizle'], a: 1,
        e: 'Danıştay İçtihatları Birleştirme Kurulu\'na göre idari yargıda müdahil, yanında katıldığı taraf kanun yoluna başvurmasa da, o tarafın tutum ve beyanlarına aykırı olmamak kaydıyla tek başına kanun yoluna başvurabilir.', r: 'Danıştay İDDK E.2021/4, K.2023/1' },
      { q: 'Bölge idare mahkemesinin imar planına ilişkin kararı Danıştay\'da temyiz edilebilir mi?', o: ['Hayır, kesindir', 'Evet; imar planlarından doğan davalarda temyiz yolu açıktır', 'Yalnızca parasal sınırı aşarsa', 'Yalnızca Bakanlık başvurabilir'], a: 1,
        e: 'İmar planları ve parselasyon işlemlerinden doğan davalarda bölge idare mahkemesi kararlarına karşı tebliğden itibaren otuz gün içinde Danıştay\'da temyiz yoluna gidilebilir.', r: 'İYUK m.46/1-g' }
    ]
  },

  // ---------------- BORÇLAR ----------------
  {
    id: 'b1', b: 'borclar', title: 'Oğlum Evlenecek', court: 'Kadıköy 2. Sulh Hukuk Mahkemesi', esas: 'Dava öncesi', role: 'Kiracı vekili', zorluk: 2,
    intro: "Müvekkil Murat Y., 1 Kasım 2022'den beri 1 yıl süreli, her yıl kendiliğinden uzayan bir konut kira sözleşmesiyle oturuyor. Ev sahibi, \"oğlum evlenecek, eve o girecek\" diyerek müvekkilin evi 1 Kasım 2026'da boşaltmasını istiyor. Ayrıca yeni dönem için kirayı yüzde 70 artırmak istiyor.",
    evidence: [
      ['Kira sözleşmesi', 'Başlangıç 01.11.2022; süre 1 yıl. Aynı gün imzalanmış, tarihi boş bırakılmış bir "tahliye taahhüdü" ekli.'],
      ['Ev sahibinin mesajı', '"Sözleşme bitiyor, çıkman lazım. Kalacaksan kira yüzde 70 artacak."'],
      ['Nüfus kaydı', 'Ev sahibinin oğlu 27 yaşında, nişanlı.']
    ],
    steps: [
      { q: 'Ev sahibi "sözleşme süresi bitti" diye müvekkili çıkarabilir mi?', o: ['Evet, belirli süreli sözleşme sona erdi', 'Hayır; kiracı 15 gün önce bildirmedikçe sözleşme 1 yıl uzar ve kiraya veren süre bitimine dayanarak feshedemez', 'Evet, 3 ay önceden ihtarla', 'Yalnızca 5 yıl dolduysa'], a: 1,
        e: 'Konut ve çatılı işyeri kiralarında kiracı, belirli süreli sözleşmenin bitiminden en az on beş gün önce bildirimde bulunmadıkça sözleşme aynı koşullarla bir yıl uzar. Kiraya veren, sözleşme süresinin bitimine dayanarak sözleşmeyi sona erdiremez; ancak on yıllık uzama süresinin sonunda sebep göstermeden fesih imkânı doğar.', r: 'TBK m.347/1' },
      { q: 'Yüzde 70 artış talebine karşı hukuki sınır nedir?', o: ['Taraflar serbest; sınır yok', 'Bir önceki kira yılında TÜFE\'nin on iki aylık ortalamalarına göre değişim oranı', 'Asgari ücret artışı', 'ÜFE\'nin yıllık değişimi'], a: 1,
        e: 'Yenilenen kira dönemlerinde kararlaştırılacak kira bedeline ilişkin anlaşmalar, bir önceki kira yılında tüketici fiyat endeksindeki on iki aylık ortalamalara göre değişim oranını geçmemek koşuluyla geçerlidir.', r: 'TBK m.344/1' },
      { q: 'Sözleşmeyle aynı gün imzalatılan tahliye taahhüdü geçerli mi?', o: ['Evet, yazılı olduğu için', 'Hayır; tahliye taahhüdü kiralananın tesliminden sonra yazılı olarak verilmelidir', 'Evet, noter onayı varsa', 'Yalnızca işyerlerinde geçersizdir'], a: 1,
        e: 'Kiracı, kiralananın tesliminden sonra kiralananı belli bir tarihte boşaltmayı yazılı olarak üstlenmişse kiraya veren bu tarihte sözleşmeyi sona erdirebilir. Sözleşmeyle birlikte, teslimden önce alınan taahhüt bu koşulu taşımaz.', r: 'TBK m.352/1' },
      { q: 'Ev sahibi oğlunun konut ihtiyacına dayanarak tahliye davası açmak isterse, sözleşme süresi 1 Kasım 2026\'da bitiyorsa dava süresi?', o: ['Herhangi bir zamanda', 'Sürenin bitiminden itibaren 1 ay içinde', 'Sürenin bitiminden itibaren 6 ay içinde', 'Sürenin bitiminden önce en az 3 ay'], a: 1,
        e: 'Kiraya veren, kiralananı kendisi, eşi, altsoyu, üstsoyu veya bakmakla yükümlü olduğu kişiler için konut ihtiyacı nedeniyle kullanma zorunluluğu varsa, belirli süreli sözleşmelerde sürenin sonunda, sürenin bitiminden başlayarak bir ay içinde açacağı davayla sözleşmeyi sona erdirebilir.', r: 'TBK m.350' },
      { q: 'Ev sahibi tahliye davası açmadan önce ne yapmak zorundadır?', o: ['Noter ihtarı', 'Arabulucuya başvurmak (dava şartı)', 'Kira tespit davası açmak', 'Hiçbir şey'], a: 1,
        e: 'Kira ilişkisinden kaynaklanan uyuşmazlıklarda, ilamsız icra yoluyla tahliyeye ilişkin hükümler hariç, dava açılmadan önce arabulucuya başvurulmuş olması dava şartıdır. Kural 1 Eylül 2023\'ten beri uygulanıyor.', r: 'HUAK m.18/B (7445 s. K.)' }
    ]
  },
  {
    id: 'b2', b: 'borclar', title: 'Kardeşe Kefalet', court: 'Bursa 12. İcra Dairesi', esas: '2026/18834 Esas', role: 'Kefil vekili', zorluk: 2,
    intro: "Müvekkil Serkan T., evli. Kardeşinin şirketinin banka kredisine bankanın hazır matbu formunu imzalayarak kefil oldu. Formda azami kefalet tutarı ve tarih matbu olarak yazılı; müvekkilin el yazısıyla yazılmış bir şey yok. Eşinin rızası alınmamış. Banka müvekkile karşı ilamsız icra takibi başlattı.",
    evidence: [
      ['Kefalet formu', 'Azami tutar ve tarih bilgisayar çıktısı; yalnızca imza müvekkile ait.'],
      ['Nüfus kaydı', 'Müvekkil 2019\'dan beri evli; ayrılık kararı yok.'],
      ['Banka ihtarı', 'Ana para ve "kanuni faiz" talep ediliyor; sözleşmede faiz oranı belirlenmemiş.']
    ],
    steps: [
      { q: 'Kefalet sözleşmesinin geçerliliği hakkında temel savunman?', o: ['Kefalet geçerli, savunma yok', 'Azami miktar ve kefalet tarihi kefilin kendi el yazısıyla yazılmadığından kefalet geçersiz', 'Yalnızca faiz kısmı geçersiz', 'Kefalet için noter onayı şart'], a: 1,
        e: 'Kefalet sözleşmesi yazılı yapılmadıkça ve kefilin sorumlu olacağı azami miktar ile kefalet tarihi belirtilmedikçe geçerli olmaz. Kefilin azami miktarı, kefalet tarihini ve müteselsil kefalet hâlinde bu sıfatını kendi el yazısıyla belirtmesi şarttır.', r: 'TBK m.583/1' },
      { q: 'Evli müvekkilin kefaleti için eşin rızası gerekir mi?', o: ['Hayır, kefalet kişiseldir', 'Evet; ayrılık kararı yoksa eşin yazılı rızası gerekir (kanundaki istisnalar saklı)', 'Yalnızca konut kredisinde', 'Sadece sözlü rıza yeterli'], a: 1,
        e: 'Eşlerden biri, mahkemece verilmiş bir ayrılık kararı olmadıkça veya yasal olarak ayrı yaşama hakkı doğmadıkça, ancak diğerinin yazılı rızasıyla kefil olabilir; rıza en geç sözleşmenin kurulması anında verilmelidir. Kanunda bazı ticari ve mesleki faaliyetler için istisnalar vardır.', r: 'TBK m.584/1' },
      { q: 'Sözleşmede oran yoksa 2026\'da kanuni faiz nasıl belirlenir?', o: ['Sabit yıllık yüzde 9', 'TCMB\'nin önceki yıl 31 Aralık kısa vadeli kredi reeskont oranının yüzde 80\'i', 'Ticari avans faizinin iki katı', 'Hâkimin takdiriyle'], a: 1, t: 20,
        e: 'AYM, eski kanuni faiz hükmünü sözleşmeden kaynaklanmayan borçlar bakımından iptal etmişti. 7589 sayılı Kanunla kanuni faiz, TCMB\'nin önceki yıl 31 Aralık reeskont oranının yüzde 80\'ine bağlandı; 30 Haziran\'daki oran 5 puan veya daha fazla farklıysa yılın ikinci yarısında o oran esas alınır.', r: '3095 s. K. m.1 (7589 s. K.) · AYM E.2024/24, K.2025/164' },
      { q: 'Kefalet geçersiz bulunursa, banka müvekkile kefalet sözleşmesine dayanarak neyi talep edebilir?', o: ['Borcun tamamını', 'Yarısını', 'Hiçbir şeyi; geçersiz kefalet kefili bağlamaz', 'Yalnızca faizi'], a: 2,
        e: 'Şekil şartlarına uyulmadan yapılan kefalet sözleşmesi geçersizdir ve kefile bu sözleşmeye dayanılarak bir sorumluluk yüklenemez.', r: 'TBK m.583' }
    ]
  },
  {
    id: 'b3', b: 'borclar', title: 'Yaya Geçidinde', court: 'Antalya 4. Asliye Hukuk Mahkemesi', esas: '2026/2041 E.', role: 'Davacı vekili', zorluk: 3,
    intro: "Müvekkil Elif S., 5 Ağustos 2026'da yaya geçidinden karşıya geçerken kırmızı ışıkta geçen bir aracın çarpması sonucu bacağından ağır yaralandı. Sürücü kusurlu. Müvekkil serbest muhasebeci; 5 ay çalışamadı ve kalıcı yüzde 12 maluliyet raporu aldı. Dava dilekçesinde yalnızca maddi tazminat istendi.",
    evidence: [
      ['Kaza tespit tutanağı', 'Sürücü tam kusurlu; yaya kusursuz.'],
      ['Adli tıp raporu', 'Kalıcı yüzde 12 iş gücü kaybı.'],
      ['Dava dilekçesi', 'Yalnızca maddi tazminat (geçici ve sürekli iş göremezlik) talep edilmiş; manevi tazminat talebi yok.']
    ],
    steps: [
      { q: 'Haksız fiilden doğan tazminat için zamanaşımı nedir?', o: ['1 yıl', 'Zararı ve tazminat yükümlüsünü öğrenmeden itibaren 2 yıl, her hâlde fiilden itibaren 10 yıl', '5 yıl', '20 yıl'], a: 1,
        e: 'Tazminat istemi, zarar görenin zararı ve tazminat yükümlüsünü öğrendiği tarihten başlayarak iki yıl ve her hâlde fiilin işlendiği tarihten başlayarak on yıl geçmekle zamanaşımına uğrar. Fiil ceza kanunlarında daha uzun zamanaşımı öngörülen bir suç ise o süre uygulanır.', r: 'TBK m.72/1' },
      { q: 'Aşağıdakilerden hangisi haksız fiil sorumluluğunun unsurlarından değildir?', o: ['Hukuka aykırı fiil', 'Zarar ve illiyet bağı', 'Kusur', 'Taraflar arasında sözleşme bulunması'], a: 3,
        e: 'Kusurlu ve hukuka aykırı bir fiille başkasına zarar veren, bu zararı gidermekle yükümlüdür. Haksız fiil sorumluluğu sözleşme ilişkisi gerektirmez.', r: 'TBK m.49/1' },
      { q: 'Olay 31.07.2026\'dan sonra. Gelecekteki (henüz elde edilmemiş) kazanç kaybına ilişkin tazminata faiz hangi tarihten işler?', o: ['Olay tarihinden', 'Dava tarihinden', 'Karar tarihinden', 'İhtar tarihinden'], a: 2, t: 20,
        e: '7589 sayılı Kanunla bedensel zarar ve destekten yoksunluk tazminatında faiz başlangıcı düzenlendi: kazancın bilindiği dönem için olay tarihinden, bilinemeyen (gelecek) dönem için karar tarihinden itibaren kanuni faiz işler. Kural 31.07.2026 ve sonrasındaki olaylara uygulanır.', r: 'TBK m.55 (7589 s. K.)' },
      { q: 'Yargılama sürerken manevi tazminat talebini kısmi ıslahla davaya eklemek istiyorsun. Mümkün mü?', o: ['Evet, ıslah her şeyi düzeltir', 'Hayır; dava dilekçesinde yer almayan bir talep kısmen ıslah yoluyla davaya dâhil edilemez', 'Evet, karşı taraf kabul ederse', 'Evet, yalnızca istinafta'], a: 1,
        e: 'Yargıtay İçtihadı Birleştirme Büyük Genel Kurulu, dava dilekçesinde yer almayan bir talebin kısmen ıslah yoluyla davaya dâhil edilemeyeceğine karar verdi. Manevi tazminat için ayrı dava açılması gerekir.', r: 'Yargıtay İBBGK 08.05.2026, E.2021/8, K.2026/1 · RG 30.06.2026' },
      { q: 'Bedensel zarar nedeniyle manevi tazminatın dayanağı nedir?', o: ['TBK m.56: hâkim, olayın özelliklerini göz önünde tutarak uygun bir miktar paranın ödenmesine karar verebilir', 'Manevi tazminat yalnızca ölümde istenir', 'TBK m.72', 'Yalnızca ceza mahkemesi karar verir'], a: 0,
        e: 'Bedensel bütünlüğün zedelenmesi hâlinde hâkim, olayın özelliklerini göz önünde tutarak zarar görene uygun bir miktar paranın manevi tazminat olarak ödenmesine karar verebilir.', r: 'TBK m.56/1' }
    ]
  },

  // ---------------- MİRAS ----------------
  {
    id: 'm1', b: 'miras', title: 'Tarihsiz Vasiyetname', court: 'İzmir 8. Asliye Hukuk Mahkemesi', esas: '2026/977 E.', role: 'Davacı vekili', zorluk: 3,
    intro: "Ahmet B. 3 Mart 2026'da öldü. Geride eşi Leyla ile çocukları Can ve Ece kaldı. Terekenin net değeri 12.000.000 TL. Ahmet B.'nin el yazısıyla yazıp imzaladığı, ancak tarih içermeyen bir vasiyetnamede bütün mallarını Can'a bıraktığı görüldü. Müvekkil Ece, vasiyetnamenin açılmasıyla 20 Nisan 2026'da durumu öğrendi.",
    evidence: [
      ['Vasiyetname', 'Baştan sona murisin el yazısı ve imzası; yıl, ay, gün yok.'],
      ['Mirasçılık belgesi', 'Eş Leyla, çocuklar Can ve Ece.'],
      ['Bilirkişi raporu', 'Terekenin net değeri 12.000.000 TL.']
    ],
    steps: [
      { q: 'Vasiyetname olmasaydı sağ kalan eş Leyla\'nın yasal miras payı ne olurdu?', o: ['1/2 (6.000.000 TL)', '1/4 (3.000.000 TL)', '1/3 (4.000.000 TL)', '3/4 (9.000.000 TL)'], a: 1,
        e: 'Sağ kalan eş, mirasbırakanın altsoyu ile birlikte mirasçı olursa mirasın dörtte birini alır. Kalan dörtte üç çocuklar arasında eşit paylaşılır: Can ve Ece 4.500.000\'er TL.', r: 'TMK m.499/1' },
      { q: 'Ece\'nin saklı payı kaç TL\'dir?', o: ['4.500.000 TL', '2.250.000 TL', '3.000.000 TL', '1.125.000 TL'], a: 1, t: 20,
        e: 'Altsoyun saklı payı yasal miras payının yarısıdır. Ece\'nin yasal payı 4.500.000 TL olduğundan saklı payı 2.250.000 TL\'dir.', r: 'TMK m.506/1' },
      { q: 'El yazılı vasiyetnamede yapılış tarihi yok. Sonuç?', o: ['Geçerli; tarih şart değil', 'Kendiliğinden yok hükmünde; dava gerekmez', 'Şekle aykırıdır; iptal davasıyla iptal edilebilir', 'Noter onayıyla düzeltilebilir'], a: 2,
        e: 'El yazılı vasiyetname, yılı, ayı ve günü de dâhil olmak üzere baştan sona mirasbırakanın el yazısıyla yazılmış ve imzalanmış olmalıdır. Kanunda öngörülen şekle uyulmadan yapılan tasarruf, iptal davasıyla iptal edilebilir.', r: 'TMK m.538/1, m.557' },
      { q: 'Vasiyetname ayakta kalsa bile Ece saklı payını nasıl korur ve süresi nedir?', o: ['Tenkis davası; saklı payın zedelendiğini öğrenmeden itibaren 1 yıl, her hâlde vasiyetnamenin açılmasından itibaren 10 yıl', 'Tenkis davası; 5 yıl', 'Ortaklığın giderilmesi davası; süresiz', 'Mirasın reddi'], a: 0,
        e: 'Tenkis davası açma hakkı, mirasçıların saklı paylarının zedelendiğini öğrendikleri tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin üzerinden on yıl geçmekle düşer. Tenkis, def\'i yoluyla her zaman ileri sürülebilir.', r: 'TMK m.571' },
      { q: 'Leyla, murisin borçlarından endişe ediyor ve mirası reddetmek istiyor. Süre?', o: ['1 ay', '3 ay', '6 ay', '1 yıl'], a: 1,
        e: 'Ret süresi üç aydır. Süre, yasal mirasçılar için mirasbırakanın ölümünü öğrendikleri tarihten, mirasçılığı daha sonra öğrendiklerini ispat etmedikçe, işlemeye başlar.', r: 'TMK m.606' }
    ]
  },
  {
    id: 'm2', b: 'miras', title: 'Satış Gibi Gösterilen Tarla', court: 'Konya 2. Asliye Hukuk Mahkemesi', esas: '2026/356 E.', role: 'Davacı vekili', zorluk: 2,
    intro: "Hüseyin Ç. adına kayıtlı tarlayı 2019'da tapuda oğlu Kemal'e \"satış\" olarak devretti. Tapu harcı dışında bedel ödendiğine dair kayıt yok. Hüseyin Ç. 2025'te öldü. Kızı Zehra (müvekkil), babasının diğer çocuklarından mal kaçırmak için devri satış gibi gösterdiğini söylüyor.",
    evidence: [
      ['Tapu kaydı', '2019: Hüseyin Ç.\'den Kemal Ç.\'ye "satış". Tarla bu tarihten önce 30 yıl murisin adına kayıtlı.'],
      ['Banka dökümleri', 'Satış tarihinde Kemal\'in hesabından para çıkışı yok.'],
      ['Tanık (köy muhtarı)', '"Hüseyin amca, \'tarla kızlara kalmasın\' derdi."']
    ],
    steps: [
      { q: 'Müvekkil hangi davayı açmalı?', o: ['Ortaklığın giderilmesi', 'Muris muvazaasına dayalı tapu iptali ve tescil', 'Mirasın reddi', 'Vasiyetnamenin iptali'], a: 1,
        e: 'Mirasbırakanın, gerçekte bağışlamak istediği taşınmazını mirasçılardan mal kaçırmak amacıyla satış gibi göstererek devretmesi muris muvazaasıdır. Görünürdeki satış muvazaalı, gizli bağış ise şekle aykırı olduğundan geçersizdir.', r: 'Yargıtay YİBK 01.04.1974, 1/2' },
      { q: 'Zehra hangi oranda tapu iptali ve tescil isteyebilir?', o: ['Saklı payı oranında', 'Miras payı oranında', 'Tarlanın tamamı', 'Yarı oranında'], a: 1,
        e: 'Muris muvazaasına dayalı davada her mirasçı, saklı payla sınırlı olmaksızın kendi miras payı oranında tapu iptali ve tescil isteyebilir.', r: 'Yargıtay YİBK 01.04.1974, 1/2' },
      { q: 'Dava herhangi bir zamanaşımı veya hak düşürücü süreye tabi mi?', o: ['Evet, ölümden itibaren 1 yıl', 'Evet, 10 yıl', 'Hayır; muvazaalı işlem geçersiz olduğundan süreye tabi değildir', 'Evet, tescilden itibaren 5 yıl'], a: 2,
        e: 'Muvazaalı işlemler baştan geçersiz olduğundan muris muvazaasına dayalı tapu iptali ve tescil davası zamanaşımı veya hak düşürücü süreye tabi değildir.', r: 'TBK m.19 · Yargıtay yerleşik uygulaması' },
      { q: 'Farklı senaryo: Muris tarlanın parasını vermiş, ancak tarla satıcıdan doğrudan Kemal adına tescil edilmiş; hiç muris adına kayıtlı olmamış. 1974 İBK\'ya dayalı tapu iptali?', o: ['Yine kabul edilir', 'Uygulanamaz; taşınmaz hiç murisin adına kayıtlı olmadığından İBK kapsamı dışındadır', 'Sadece tanıkla ispatlanırsa kabul edilir', 'Davalı kabul ederse uygulanır'], a: 1, t: 20,
        e: 'Yargıtay 1. Hukuk Dairesi, taşınmazların hiçbir zaman murisin adına kayıtlı olmadığı bir olayda 01.04.1974 tarihli İBK\'nın uygulanma olanağı bulunmadığını belirterek davanın reddini onadı. Bu durumda tenkis veya denkleştirme gibi başka yollar değerlendirilir.', r: 'Yargıtay 1. HD 10.03.2026, E.2025/1464, K.2026/1869' },
      { q: 'Davadan önce mirasçılığı belgelemek için mirasçılık belgesini nereden alırsın?', o: ['Yalnızca nüfus müdürlüğünden', 'Sulh hukuk mahkemesinden veya noterden', 'Tapu müdürlüğünden', 'Aile mahkemesinden'], a: 1,
        e: 'Yasal mirasçılar, sulh hukuk mahkemesinden veya noterden mirasçı olduklarını gösteren bir belge verilmesini isteyebilir.', r: 'TMK m.598/1' }
    ]
  },
  {
    id: 'm3', b: 'miras', title: 'Paylaşılamayan Ev', court: 'Ankara 12. Sulh Hukuk Mahkemesi', esas: '2026/1590 E.', role: 'Davacı vekili', zorluk: 2,
    intro: "Kardeşler Sema, Okan ve Berk, babalarından miras kalan Çankaya'daki tek daireye paylı malik oldu. Okan dairede oturmak, Sema ve Berk satmak istiyor. Anlaşma sağlanamıyor. Müvekkil Sema ortaklığın giderilmesini istiyor.",
    evidence: [
      ['Tapu kaydı', 'Daire, intikalle 3 kardeş adına 1/3\'er paylı kayıtlı. Üçüncü kişi malik yok.'],
      ['Ekspertiz', 'Muhammen bedel 7.500.000 TL; daire fiziken bölünemez.']
    ],
    steps: [
      { q: 'Ortaklığın giderilmesi davası açmadan önce zorunlu adım?', o: ['Noter ihtarı', 'Arabulucuya başvuru (dava şartı)', 'Tapuya şerh', 'Hiçbir şey'], a: 1,
        e: 'Taşınır ve taşınmazların paylaştırılmasına ve ortaklığın giderilmesine ilişkin uyuşmazlıklarda, dava açılmadan önce arabulucuya başvurulmuş olması dava şartıdır. Kural 1 Eylül 2023\'ten beri uygulanıyor.', r: 'HUAK m.18/B (7445 s. K.)' },
      { q: 'Görevli mahkeme hangisidir?', o: ['Asliye hukuk mahkemesi', 'Sulh hukuk mahkemesi', 'Aile mahkemesi', 'İcra hukuk mahkemesi'], a: 1,
        e: 'Paylı veya elbirliği mülkiyetine konu mal ve haklar hakkında ortaklığın giderilmesine ilişkin davalar, değer ve miktarına bakılmaksızın sulh hukuk mahkemesinde görülür.', r: 'HMK m.4/1-b' },
      { q: 'Daire fiziken bölünemiyor. Mahkeme nasıl karar verir?', o: ['Okan\'a verir, diğerlerine bedel ödetir', 'Satış suretiyle ortaklığın giderilmesine', 'Davayı reddeder', 'Daireyi belediyeye devreder'], a: 1,
        e: 'Paydaşlar anlaşamazsa hâkim, malın aynen bölünmesine; bu mümkün değilse veya önemli bir değer kaybı doğacaksa açık artırmayla satılmasına karar verir.', r: 'TMK m.699' },
      { q: 'Satış ilanı 31.07.2026\'dan sonra yapıldı ve bütün malikler mirasçı. İlk açık artırmaya kimler katılabilir?', o: ['Herkes', 'Yalnızca malik mirasçılar; teklif muhammen kıymetin yüzde 100\'ünü bulmalı', 'Yalnızca Okan', 'Yalnızca kamu kurumları'], a: 1, t: 20,
        e: '7589 sayılı Kanunla, tüm maliklerin miras yoluyla edindiği ve mirasçılar dışında üçüncü kişinin mülkiyeti bulunmayan taşınmazlarda ilk artırma yalnızca malik mirasçılar arasında yapılır; bu usul bir defaya mahsustur. Alıcı çıkmazsa ikinci artırma herkese açık olarak muhammen kıymetin yüzde 50\'si üzerinden yapılır.', r: 'İİK m.114 (7589 s. K.)' },
      { q: 'Farklı senaryo: Berk payını dava öncesi bir yabancıya satmış olsaydı ilk artırma nasıl yapılırdı?', o: ['Yine yalnızca mirasçılar arasında', 'Genel hükümlere göre herkese açık', 'Yalnızca payı satın alan yabancıyla', 'Satış yapılamaz'], a: 1,
        e: 'Mirasçılara özgü ilk artırma ancak tüm maliklerin miras yoluyla edindiği ve mirasçı olmayan bir malikin bulunmadığı taşınmazlarda uygulanır. Paydaşlar arasında mirasçı olmayan bir malik varsa genel hükümler uygulanır.', r: 'İİK m.114 (7589 s. K.)' }
    ]
  }
);

QUICK.push(
  // İDARE
  { id: 'qd1', b: 'idare', q: 'İdare mahkemelerinde dava açma süresi (özel süre yoksa)?', o: ['30 gün', '60 gün', '90 gün', '1 yıl'], a: 1, e: 'Dava açma süresi idare mahkemelerinde altmış, vergi mahkemelerinde otuz gündür.', r: 'İYUK m.7/1' },
  { id: 'qd2', b: 'idare', q: 'Vergi mahkemelerinde dava açma süresi?', o: ['15 gün', '60 gün', '30 gün', '45 gün'], a: 2, e: 'Vergi mahkemelerinde dava açma süresi otuz gündür.', r: 'İYUK m.7/1' },
  { id: 'qd3', b: 'idare', q: 'İdareye yapılan başvuruya kaç gün içinde cevap verilmezse istek reddedilmiş sayılır?', o: ['15 gün', '30 gün', '60 gün', '90 gün'], a: 1, e: '7331 sayılı Kanunla (2021) zımni ret süresi altmış günden otuz güne indirildi.', r: 'İYUK m.10/2' },
  { id: 'qd4', b: 'idare', q: 'İdari eylemden zarar görenin idareye başvuru süresi?', o: ['Öğrenmeden 60 gün', 'Öğrenmeden 1 yıl, her hâlde eylemden 5 yıl', 'Eylemden 2 yıl', 'Süre yok'], a: 1, e: 'Eylemi öğrenmeden itibaren bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde idareye başvurulur.', r: 'İYUK m.13/1' },
  { id: 'qd5', b: 'idare', q: 'Yürütmenin durdurulması kararı için gerekenler?', o: ['Telafisi güç zarar veya açık hukuka aykırılıktan biri', 'İkisi birlikte', 'Yalnızca teminat', 'İdarenin muvafakati'], a: 1, e: 'Telafisi güç veya imkânsız zarar ile işlemin açıkça hukuka aykırı olması şartları birlikte gerçekleşmelidir.', r: 'İYUK m.27/2' },
  { id: 'qd6', b: 'idare', q: 'İdari yargıda istinaf süresi?', o: ['15 gün', '30 gün', '60 gün', 'İki hafta'], a: 1, e: 'İdare ve vergi mahkemelerinin kararlarına karşı tebliğden itibaren otuz gün içinde istinaf yoluna başvurulabilir.', r: 'İYUK m.45/1' },
  { id: 'qd7', b: 'idare', q: 'İptal davasında hukuka aykırılık sebepleri hangileridir?', o: ['Yetki, şekil, sebep, konu, maksat', 'Kusur, zarar, illiyet', 'Kamu yararı ve yerindelik', 'Süre, harç, görev'], a: 0, e: 'İdari işlemler yetki, şekil, sebep, konu ve maksat yönlerinden biriyle hukuka aykırı ise iptal edilir.', r: 'İYUK m.2/1-a' },
  { id: 'qd8', b: 'idare', q: 'Kamu görevlisinin görevini yaparken verdiği zarar için tazminat davası kime açılır?', o: ['Görevliye', 'İdareye; idare görevliye rücu edebilir', 'Görevlinin amirine', 'Valiliğe'], a: 1, e: 'Bu davalar rücu edilmek kaydıyla ancak idare aleyhine açılabilir.', r: 'AY m.129/5' },
  { id: 'qd9', b: 'idare', q: 'Üst makama başvuru dava açma süresine etkisi?', o: ['Süreyi keser, baştan başlar', 'İşlemeye başlamış süreyi durdurur', 'Hiçbir etkisi yoktur', 'Süreyi iki katına çıkarır'], a: 1, e: 'İlgililer dava açmadan önce üst makama, yoksa işlemi yapan makama başvurabilir; bu başvuru işlemeye başlamış dava açma süresini durdurur.', r: 'İYUK m.11/1' },
  { id: 'qd10', b: 'idare', q: 'Danıştay İDDK\'ya göre idari yargıda müdahil, katıldığı taraf kanun yoluna gitmezse ne yapabilir?', o: ['Hiçbir şey', 'O tarafın tutum ve beyanlarına aykırı olmamak kaydıyla tek başına kanun yoluna başvurabilir', 'Yalnızca karar düzeltme ister', 'Yeni dava açar'], a: 1, e: 'İçtihatları Birleştirme Kurulu, daireler arasındaki aykırılığı müdahilin tek başına kanun yoluna başvurabileceği yönünde giderdi.', r: 'Danıştay İDDK E.2021/4, K.2023/1' },
  // BORÇLAR
  { id: 'qb1', b: 'borclar', q: 'Kanunda aksine hüküm yoksa genel zamanaşımı süresi?', o: ['5 yıl', '10 yıl', '15 yıl', '20 yıl'], a: 1, e: 'Kanunda aksine bir hüküm bulunmadıkça her alacak on yıllık zamanaşımına tabidir.', r: 'TBK m.146' },
  { id: 'qb2', b: 'borclar', q: 'Kira bedeli alacaklarında zamanaşımı?', o: ['2 yıl', '5 yıl', '10 yıl', '1 yıl'], a: 1, e: 'Kira bedelleri, anapara faizleri ve diğer dönemsel edimler beş yıllık zamanaşımına tabidir.', r: 'TBK m.147/1' },
  { id: 'qb3', b: 'borclar', q: 'Aşırı yararlanmada (gabin) sözleşmeyle bağlı olmadığını bildirme süresi?', o: ['6 ay', 'Bir yıl ve her hâlde sözleşmeden itibaren 5 yıl', '2 yıl', '10 yıl'], a: 1, e: 'Zarar gören, düşüncesizlik veya deneyimsizliğini öğrendiği, zor durumda kalmada ise bu durumun ortadan kalktığı tarihten başlayarak bir yıl ve her hâlde sözleşmenin kurulmasından başlayarak beş yıl içinde bu hakkını kullanabilir.', r: 'TBK m.28/2' },
  { id: 'qb4', b: 'borclar', q: 'Yanılma, aldatma veya korkutma ile kurulan sözleşmede iptal (bağlı olmadığını bildirme) süresi?', o: ['3 ay', '6 ay', '1 yıl', '2 yıl'], a: 2, e: 'Yanılma veya aldatmanın öğrenildiği ya da korkutmanın etkisinin ortadan kalktığı tarihten başlayarak bir yıl içinde bildirilmezse sözleşme onanmış sayılır.', r: 'TBK m.39/1' },
  { id: 'qb5', b: 'borclar', q: 'Haksız fiilde tazminat isteminin zamanaşımı?', o: ['1 yıl / 5 yıl', '2 yıl / 10 yıl', '5 yıl / 10 yıl', '10 yıl / 20 yıl'], a: 1, e: 'Zararı ve tazminat yükümlüsünü öğrenmeden itibaren iki yıl, her hâlde fiilden itibaren on yıl.', r: 'TBK m.72/1' },
  { id: 'qb6', b: 'borclar', q: 'Konut kira artışının yasal üst sınırı neye göre belirlenir?', o: ['Yıllık ÜFE', 'TÜFE\'nin on iki aylık ortalamalarına göre değişim oranı', 'Asgari ücret artışı', 'Sınır yok'], a: 1, e: 'Yenilenen kira dönemlerinde artış, bir önceki kira yılında TÜFE\'nin on iki aylık ortalamalarına göre değişim oranını geçemez.', r: 'TBK m.344/1' },
  { id: 'qb7', b: 'borclar', q: 'On yıllık uzama süresi dolan konut kirasında kiraya veren sebep göstermeden nasıl fesheder?', o: ['Her zaman, 15 gün önceden', 'İzleyen her uzama yılının bitiminden en az 3 ay önce bildirimle', 'Fesih imkânı yoktur', 'Yalnızca dava ile'], a: 1, e: 'On yıllık uzama süresi sonunda kiraya veren, bu süreyi izleyen her uzama yılının bitiminden en az üç ay önce bildirimde bulunarak sözleşmeyi sebep göstermeksizin sona erdirebilir.', r: 'TBK m.347/1' },
  { id: 'qb8', b: 'borclar', q: 'Kefalet sözleşmesinde kefilin el yazısıyla yazması gerekenler?', o: ['Yalnızca imza', 'Azami miktar, kefalet tarihi ve varsa müteselsil kefalet sıfatı', 'Borçlunun adresi', 'Faiz oranı'], a: 1, e: 'Kefil, sorumlu olduğu azami miktarı, kefalet tarihini ve müteselsil kefil olması hâlinde bu sıfatını kendi el yazısıyla belirtmelidir.', r: 'TBK m.583/1' },
  { id: 'qb9', b: 'borclar', q: '7589 sayılı Kanun sonrası kanuni faiz neye bağlandı?', o: ['Sabit yıllık yüzde 9', 'TCMB kısa vadeli kredi reeskont oranının yüzde 80\'i', 'Avans faizi', 'Enflasyon oranı'], a: 1, e: 'Kanuni faiz, TCMB\'nin önceki yıl 31 Aralık reeskont oranının yüzde 80\'i üzerinden belirlenir; yıl ortasında 5 puanlık sapma varsa ikinci yarıda 30 Haziran oranı esas alınır.', r: '3095 s. K. m.1 (7589 s. K.)' },
  { id: 'qb10', b: 'borclar', q: 'Kira uyuşmazlıklarında arabuluculuk dava şartı hangi tarihten beri uygulanıyor?', o: ['1 Ocak 2019', '1 Eylül 2023', '31 Temmuz 2026', 'Uygulanmıyor'], a: 1, e: '7445 sayılı Kanunla HUAK\'a eklenen m.18/B, ilamsız icra yoluyla tahliye hariç kira uyuşmazlıklarında arabuluculuğu 1 Eylül 2023\'ten itibaren dava şartı yaptı.', r: 'HUAK m.18/B' },
  { id: 'qb11', b: 'borclar', q: 'Yargıtay İBBGK\'nın 2026/1 sayılı kararına göre dava dilekçesinde yer almayan talep?', o: ['Kısmen ıslahla eklenebilir', 'Kısmen ıslah yoluyla davaya dâhil edilemez', 'Cevap süresi içinde eklenebilir', 'Bilirkişi raporundan sonra eklenebilir'], a: 1, e: 'Yargıtay İçtihadı Birleştirme Büyük Genel Kurulu, 08.05.2026 tarihinde bu yönde karar verdi; karar 30.06.2026 tarihli Resmî Gazete\'de yayımlandı.', r: 'Yargıtay İBBGK E.2021/8, K.2026/1' },
  // MİRAS
  { id: 'qm1', b: 'miras', q: 'Sağ kalan eş altsoyla birlikte mirasçı olursa yasal payı?', o: ['1/2', '1/4', '1/3', '3/4'], a: 1, e: 'Eş, altsoyla birlikte mirasın dörtte birini alır.', r: 'TMK m.499/1' },
  { id: 'qm2', b: 'miras', q: 'Sağ kalan eş ana-baba zümresiyle birlikte mirasçı olursa yasal payı?', o: ['1/4', '1/2', '3/4', 'Tamamı'], a: 1, e: 'Eş, ana ve baba zümresiyle birlikte mirasın yarısını alır.', r: 'TMK m.499/2' },
  { id: 'qm3', b: 'miras', q: 'Altsoyun saklı payı?', o: ['Yasal payının tamamı', 'Yasal payının yarısı', 'Yasal payının dörtte biri', 'Yasal payının üçte biri'], a: 1, e: 'Altsoy için saklı pay, yasal miras payının yarısıdır.', r: 'TMK m.506/1' },
  { id: 'qm4', b: 'miras', q: 'Eşin altsoy veya ana-baba zümresiyle birlikte mirasçı olduğunda saklı payı?', o: ['Yasal payının yarısı', 'Yasal payının dörtte üçü', 'Yasal payının tamamı', 'Saklı payı yok'], a: 2, e: 'Bu hâlde eşin saklı payı yasal miras payının tamamıdır; diğer hâllerde dörtte üçüdür.', r: 'TMK m.506/3' },
  { id: 'qm5', b: 'miras', q: 'Kardeşlerin saklı payı var mı?', o: ['Evet, yasal payın yarısı', 'Evet, dörtte biri', 'Hayır; 2007 değişikliğiyle kaldırıldı', 'Yalnızca eş yoksa'], a: 2, e: '5650 sayılı Kanunla (2007) kardeşlerin saklı paylı mirasçılığı kaldırıldı.', r: 'TMK m.506 (5650 s. K.)' },
  { id: 'qm6', b: 'miras', q: 'Mirası reddetme süresi?', o: ['1 ay', '3 ay', '6 ay', '1 yıl'], a: 1, e: 'Ret süresi üç aydır.', r: 'TMK m.606/1' },
  { id: 'qm7', b: 'miras', q: 'Tenkis davası hangi sürelerde açılmalı?', o: ['Öğrenmeden 1 yıl, her hâlde 10 yıl', '6 ay / 5 yıl', '2 yıl / 10 yıl', 'Süresiz'], a: 0, e: 'Öğrenmeden itibaren bir yıl, her hâlde vasiyetnamenin açılmasından veya mirasın açılmasından itibaren on yıl. Def\'i yoluyla her zaman ileri sürülebilir.', r: 'TMK m.571' },
  { id: 'qm8', b: 'miras', q: 'Sözlü vasiyet hangi durumda yapılabilir?', o: ['Her zaman, iki tanıkla', 'Yakın ölüm tehlikesi, ulaşım kesilmesi, salgın, savaş gibi olağanüstü durumlarda, iki tanığa', 'Yalnızca noterde', 'Yalnızca hastanede doktora'], a: 1, e: 'Olağanüstü durumlar yüzünden resmî veya el yazılı vasiyetname yapamayan mirasbırakan, son arzusunu iki tanığa anlatarak sözlü vasiyet yapabilir.', r: 'TMK m.539' },
  { id: 'qm9', b: 'miras', q: 'Ortaklığın giderilmesi davasında görevli mahkeme?', o: ['Asliye hukuk', 'Sulh hukuk', 'Aile', 'Kadastro'], a: 1, e: 'Ortaklığın giderilmesine ilişkin davalar değer ve miktara bakılmaksızın sulh hukuk mahkemesinde görülür.', r: 'HMK m.4/1-b' },
  { id: 'qm10', b: 'miras', q: '7589 sayılı Kanunla miras taşınmazının satışında getirilen yenilik?', o: ['Satış yasaklandı', 'Tüm malikler mirasçıysa ilk artırma yalnızca malik mirasçılar arasında yapılır', 'Belediyeye önalım hakkı', 'Taşınmaz ihalesiz paylaştırılır'], a: 1, e: 'Bu usul bir defaya mahsustur; ilk artırmada teklif muhammen kıymetin yüzde 100\'ünü bulmalı, ikinci artırma herkese açıktır.', r: 'İİK m.114 (7589 s. K.)' },
  { id: 'qm11', b: 'miras', q: 'Muris muvazaasına ilişkin içtihadı birleştirme kararının tarihi?', o: ['01.04.1974, 1/2', '22.02.1984', '15.12.2006', '08.05.2026'], a: 0, e: 'Yargıtay İçtihadı Birleştirme Kararı 01.04.1974 tarih ve 1/2 sayılıdır; mirasçılara, satış gibi gösterilen bağışlara karşı tapu iptali ve tescil yolunu açar.', r: 'Yargıtay YİBK 01.04.1974, 1/2' }
);

// Yeni eklenen aile hukuku sorusu: AYM süresiz nafaka kararı
QUICK.push(
  { id: 'qa11', b: 'aile', q: 'AYM, TMK m.175\'teki "süresiz olarak" ibaresini iptal etti. İptal ne zaman yürürlüğe girecek?', o: ['Hemen, 04.06.2026\'da', '30.09.2026\'da', '30.06.2027\'de', 'Meclis karar verince'], a: 2, e: 'Karar 30.09.2026 tarihli Resmî Gazete\'de yayımlandı; iptal hükmü dokuz ay sonra, 30.06.2027\'de yürürlüğe girecek.', r: 'AYM E.2025/156, K.2026/131 · RG 30.09.2026/33386' }
);

const LAST_CHECK = '25 Ekim 2026';
const SOURCES = [
  { k: 'Yürürlükteki mevzuat', items: [
    ['7589 sayılı Kanun (12. Yargı Paketi), RG 31.07.2026/33326', 'Belirsiz alacak davasının kaldırılması (HMK m.107), kısmi davada tek seferlik artırım (HMK m.109/4), kanuni faiz (3095 m.1), bedensel zararda faiz başlangıcı (TBK m.55), miras taşınmazında mirasçılara özgü ilk artırma (İİK m.114), İYUK m.46 değişiklikleri.'],
    ['7445 sayılı Kanun, HUAK m.18/B', 'Kira ile ortaklığın giderilmesi uyuşmazlıklarında arabuluculuk dava şartı (01.09.2023).'],
    ['7331 sayılı Kanun', 'İYUK m.10 zımni ret süresinin 30 güne indirilmesi (2021).'],
    ['13. Yargı Paketi', '24 Ekim 2026 itibarıyla TBMM\'ye sunulmadı; oyuna yalnızca yürürlükteki hükümler alındı.']
  ] },
  { k: 'Anayasa Mahkemesi', items: [
    ['AYM 04.06.2026, E.2025/156, K.2026/131 (RG 30.09.2026/33386)', 'TMK m.175\'teki "süresiz olarak" ibaresinin iptali; yürürlük 30.06.2027.'],
    ['AYM 22.07.2025, E.2024/24, K.2025/164', 'Kanuni faiz hükmünün sözleşme dışı borçlar bakımından iptali; ardından 7589 sayılı Kanunla yeniden düzenlendi.'],
    ['AYM kararı (RG 24.10.2023)', 'CMK m.273/1\'de istinaf süresinin hükmün açıklanmasından başlatılmasının iptali.']
  ] },
  { k: 'Yargıtay', items: [
    ['Yargıtay İBBGK 08.05.2026, E.2021/8, K.2026/1 (RG 30.06.2026)', 'Dava dilekçesinde yer almayan talep kısmen ıslahla davaya eklenemez.'],
    ['Yargıtay 1. HD 10.03.2026, E.2025/1464, K.2026/1869', 'Hiç muris adına kayıtlı olmayan taşınmazda 1974 İBK uygulanmaz.'],
    ['Yargıtay CGK 01.12.2020, E.2018/39, K.2020/485', 'Anlık suç kaydı ile yönlendirilerek yaratılan ses kaydı ayrımı.'],
    ['Yargıtay YİBK 01.04.1974, 1/2', 'Muris muvazaası.']
  ] },
  { k: 'Danıştay', items: [
    ['Danıştay İDDK 24.10.2024, E.2021/5, K.2024/2 (RG 16.04.2025/32872)', 'Tam yargı davasında artırılan miktara da asıl talebin faiz başlangıcından faiz işler.'],
    ['Danıştay İDDK E.2021/4, K.2023/1', 'Müdahil, katıldığı tarafın tutumuna aykırı olmamak kaydıyla tek başına kanun yoluna başvurabilir.']
  ] }
];
