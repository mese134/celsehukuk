// ===== İçerik genişletmesi 2 (+%25) · son kontrol 25.10.2026 =====
CASES.push(
  {
    id: 'c5', b: 'ceza', title: 'Kesilen Lastikler', court: 'Eskişehir Cumhuriyet Başsavcılığı', esas: '2026/18412 Soruşturma', role: 'Cumhuriyet savcısı', zorluk: 2,
    intro: "Şüpheli Tolga E., park yeri tartışması yüzünden komşusu Neslihan A.'nın aracının dört lastiğini 9 Ekim 2026 gecesi kesti. Neslihan A. ertesi gün şikâyetçi oldu. Lastiklerin bedeli 18.000 TL. Şüphelinin adli sicil kaydı yok.",
    evidence: [
      ['Site kamerası', 'Şüphelinin gece 02.14\'te aracın yanında eğilip her lastiğe bıçak sapladığı görülüyor.'],
      ['Fatura', 'Dört yeni lastik: 18.000 TL.'],
      ['Şikâyet dilekçesi', '10.10.2026 tarihli; müşteki zararının karşılanmasını istiyor.']
    ],
    steps: [
      { q: 'Eylemin suç vasfı nedir?', o: ['Hırsızlık', 'Mala zarar verme', 'Yağma', 'Tehdit'], a: 1,
        e: 'Başkasının taşınır veya taşınmaz malını kısmen veya tamamen yıkan, tahrip eden, yok eden, bozan, kullanılamaz hâle getiren veya kirleten kişi mağdurun şikâyeti üzerine dört aydan üç yıla kadar hapis veya adli para cezasıyla cezalandırılır.', r: 'TCK m.151/1' },
      { q: 'Kamu davası açmadan önce ne yapmalısın?', o: ['Doğrudan iddianame düzenlerim', 'Dosyayı uzlaştırma bürosuna gönderirim', 'Ön ödeme teklif ederim', 'Seri muhakeme uygularım'], a: 1,
        e: 'Soruşturulması ve kovuşturulması şikâyete bağlı suçlar uzlaştırma kapsamındadır. Mala zarar vermenin temel hâli şikâyete bağlı olduğundan önce uzlaştırma yoluna gidilir.', r: 'CMK m.253/1-a' },
      { q: 'Uzlaştırmacı teklifi iletti. Taraf kaç gün içinde kararını bildirmezse teklifi reddetmiş sayılır?', o: ['3 gün', '7 gün', '15 gün', '30 gün'], a: 1, t: 20,
        e: 'Uzlaşma teklifinde bulunulan kişi yedi gün içinde kararını bildirmediği takdirde teklifi reddetmiş sayılır.', r: 'CMK m.253/4' },
      { q: 'Uzlaştırmacı işlemleri hangi sürede sonuçlandırır?', o: ['15 gün; uzatılamaz', '30 gün; büro 20\'şer günden en fazla iki kez uzatabilir', '60 gün', '3 ay'], a: 1,
        e: 'Uzlaştırmacı, soruşturma belgelerinin örneklerini aldığı tarihten itibaren en geç otuz gün içinde işlemleri sonuçlandırır. Uzlaştırma bürosu bu süreyi her defasında yirmi günü geçmemek üzere en fazla iki kez uzatabilir.', r: 'CMK m.253/12' },
      { q: 'Taraflar, bedelin üç taksitte ödenmesi üzerine uzlaştı. Ne karar verirsin?', o: ['Kovuşturmaya yer olmadığına', 'Kamu davasının açılmasının ertelenmesine', 'İddianame düzenlerim', 'Dosyayı mahkemeye gönderirim'], a: 1,
        e: 'Edimin def\'aten yerine getirilmesi hâlinde kovuşturmaya yer olmadığı kararı verilir. Edimin ileri bir tarihe bırakılması, takside bağlanması veya süreklilik arz etmesi hâlinde ise kamu davasının açılmasının ertelenmesine karar verilir; bu süre içinde zamanaşımı işlemez.', r: 'CMK m.253/19' }
    ]
  },
  {
    id: 'i5', b: 'is', title: 'Üç Günlük Yokluk', court: 'Kayseri 3. İş Mahkemesi', esas: 'Dava öncesi', role: 'İşveren vekili', zorluk: 2,
    intro: "Müvekkil şirketin depo çalışanı Serdar K. (kıdemi 4 yıl), 6, 7 ve 8 Ekim 2026 tarihlerinde işverenden izin almadan ve haber vermeden işe gelmedi. İşveren 9 Ekim'de durumu öğrendi ve sözleşmeyi feshetmek istiyor. Serdar K.'nın 2026 yılına ait kullanılmamış 14 günlük yıllık izni var.",
    evidence: [
      ['Devamsızlık tutanakları', 'Üç gün için ayrı ayrı, iki tanık imzalı.'],
      ['Mazeret talep yazısı', '09.10.2026 tarihinde işçiye tebliğ edildi; cevap verilmedi.'],
      ['Puantaj', 'İşçinin 6–8 Ekim için giriş kaydı yok.']
    ],
    steps: [
      { q: 'Bu devamsızlık işverene derhal fesih hakkı verir mi?', o: ['Hayır, en az 5 gün gerekir', 'Evet; ardı ardına iki iş günü izinsiz devamsızlık haklı nedendir', 'Yalnızca işçi sendikalıysa', 'Hayır, önce uyarı cezası verilmeli'], a: 1,
        e: 'İşçinin işverenden izin almaksızın veya haklı bir sebebe dayanmaksızın ardı ardına iki işgünü veya bir ay içinde iki defa herhangi bir tatil gününden sonraki işgünü, yahut bir ayda üç işgünü işine devam etmemesi ahlak ve iyi niyet kurallarına uymayan hâllerdendir.', r: 'İş K. m.25/II-g' },
      { q: 'Fesih hakkı hangi süre içinde kullanılmalıdır?', o: ['Öğrenmeden itibaren 6 iş günü, her hâlde fiilden 1 yıl', 'Öğrenmeden itibaren 30 gün', 'Süre yoktur', 'Fiilden itibaren 2 yıl'], a: 0,
        e: 'Ahlak ve iyi niyet kurallarına aykırılık nedeniyle fesih yetkisi, bu davranışın öğrenildiği günden başlayarak altı işgünü içinde ve her hâlde fiilin gerçekleşmesinden itibaren bir yıl sonra kullanılamaz.', r: 'İş K. m.26/1' },
      { q: 'Feshin haklı olduğu ispatlanırsa işçiye kıdem tazminatı ödenir mi?', o: ['Evet, her durumda', 'Hayır; 25/II\'ye dayanan haklı fesihte kıdem tazminatı ödenmez', 'Yarısı ödenir', 'Yalnızca 5 yılı aşan kıdem için'], a: 1,
        e: 'Kıdem tazminatı, iş sözleşmesinin işveren tarafından İş Kanunu m.25/II\'deki ahlak ve iyi niyet kurallarına uymayan hâller dışında bir nedenle feshedilmesi hâlinde ödenir. Bu hâlde fesih haklı ise kıdem tazminatı doğmaz.', r: '1475 s. K. m.14/1' },
      { q: 'Kullanılmamış 14 günlük yıllık izin için ne yapılır?', o: ['Haklı fesihte izin hakkı yanar', 'Fesih sebebi ne olursa olsun izin ücreti ödenir', 'Yalnızca işçi talep ederse ödenir', 'Bir sonraki işverene devredilir'], a: 1,
        e: 'İş sözleşmesinin herhangi bir nedenle sona ermesi hâlinde, işçinin hak kazanıp da kullanmadığı yıllık izin sürelerine ait ücreti, sözleşmenin sona erdiği tarihteki ücreti üzerinden kendisine ödenir.', r: 'İş K. m.59/1' },
      { q: 'İşçi "hastaydım" diyerek dava açtı. Haklı nedenin ispat yükü kimdedir?', o: ['İşçide', 'İşverende; feshi haklı nedene dayandıran ispatlar', 'Mahkeme re\'sen araştırır, ispat yükü yoktur', 'SGK\'da'], a: 1,
        e: 'Kendi lehine hak çıkaran taraf iddiasını ispatla yükümlüdür; feshi haklı nedene dayandıran işveren devamsızlığı ispatlar. Devamsızlığın haklı bir sebebe dayandığını ise işçi ispat eder.', r: 'TMK m.6' }
    ]
  },
  {
    id: 'a5', b: 'aile', title: 'Kimin Adına Kayıtlı', court: 'Trabzon 2. Aile Mahkemesi', esas: '2026/1033 E.', role: 'Davacı vekili', zorluk: 3,
    intro: "Müvekkil Gülay B., 2010'da evlendiği Hakan B. ile 2024'te boşandı; karar 15 Mart 2025'te kesinleşti. Evlilik içinde, 2016'da Hakan B.'nin maaşından ödenen kredilerle bir daire alındı ve yalnızca Hakan B. adına tescil edildi. Boşanma davası 5 Şubat 2024'te açılmıştı. Taraflar arasında mal rejimi sözleşmesi yok.",
    evidence: [
      ['Tapu kaydı', 'Daire 2016\'dan beri Hakan B. adına; kredi borcu 2022\'de kapanmış.'],
      ['Banka dökümleri', 'Kredi taksitleri Hakan B.\'nin maaş hesabından ödenmiş.'],
      ['Ekspertiz', 'Dairenin bugünkü sürüm değeri 6.000.000 TL; borç yok.']
    ],
    steps: [
      { q: 'Taraflar arasında hangi mal rejimi geçerlidir?', o: ['Mal ayrılığı', 'Edinilmiş mallara katılma', 'Mal ortaklığı', 'Paylaşmalı mal ayrılığı'], a: 1,
        e: 'Eşler, mal rejimi sözleşmesiyle başka bir rejim seçmedikçe aralarında edinilmiş mallara katılma rejimi geçerli olur.', r: 'TMK m.202/1' },
      { q: 'Hakan B.\'nin maaşıyla alınan daire hangi gruba girer?', o: ['Kişisel mal', 'Edinilmiş mal', 'Ortak mal', 'Aile konutu olduğu için kimsenin malı değildir'], a: 1,
        e: 'Edinilmiş mal, her eşin bu mal rejiminin devamı süresince karşılığını vererek elde ettiği malvarlığı değerleridir; eşin çalışmasının karşılığı olan edinimler edinilmiş maldır.', r: 'TMK m.219/1-2' },
      { q: 'Mal rejimi hangi tarihte sona ermiş sayılır?', o: ['Boşanma kararının kesinleştiği 15.03.2025', 'Boşanma davasının açıldığı 05.02.2024', 'Dairenin satıldığı tarihte', 'Tasfiye davasının açıldığı tarihte'], a: 1,
        e: 'Boşanma veya evliliğin iptali hâlinde mal rejimi, davanın açıldığı tarihten geçerli olmak üzere sona erer.', r: 'TMK m.225/2' },
      { q: 'Daire başka değer taşımıyorsa ve borç yoksa, Gülay B.\'nin katılma alacağı ne kadardır?', o: ['1.500.000 TL', '3.000.000 TL', '6.000.000 TL', '2.000.000 TL'], a: 1, t: 20,
        e: 'Her eş veya mirasçıları, diğer eşin artık değerinin yarısı üzerinde hak sahibidir. Edinilmiş mallar tasfiye anındaki sürüm değerleriyle hesaba katılır: 6.000.000 TL artık değerin yarısı 3.000.000 TL.', r: 'TMK m.235/1, m.236/1' },
      { q: 'Katılma alacağı davası ne kadar sürede zamanaşımına uğrar?', o: ['Boşanmanın kesinleşmesinden itibaren 1 yıl', 'Boşanmanın kesinleşmesinden itibaren 10 yıl', '5 yıl', 'Süresiz'], a: 1,
        e: 'Yargıtay yerleşik uygulamasına göre mal rejiminin tasfiyesinden doğan alacaklar, boşanma kararının kesinleşmesinden itibaren genel zamanaşımı süresi olan on yıla tabidir.', r: 'TBK m.146 · Yargıtay yerleşik uygulaması' }
    ]
  },
  {
    id: 'd5', b: 'idare', title: 'Kınama Cezası', court: 'Ankara 4. İdare Mahkemesi', esas: 'Dava öncesi', role: 'Davacı memur vekili', zorluk: 2,
    intro: "Müvekkil Emre T. bir bakanlıkta memur. Amirine sosyal medyada yaptığı eleştiri nedeniyle hakkında disiplin soruşturması açıldı. Savunması için 3 gün süre verildi; müvekkil süre yetmediği için savunma veremedi. 2 Ekim 2026'da kınama cezası verildi ve aynı gün tebliğ edildi.",
    evidence: [
      ['Savunma istem yazısı', '15.09.2026 tebliğ; "3 gün içinde savunmanızı veriniz."'],
      ['Soruşturma onayı', 'Amir olayı 01.08.2026\'da öğrenmiş; soruşturma 20.08.2026\'da başlatılmış.'],
      ['Ceza kararı', 'Kınama; 02.10.2026 tebliğ.']
    ],
    steps: [
      { q: 'Savunma için verilen 3 günlük süre hakkında ne dersin?', o: ['Yeterlidir', 'Kanuna aykırıdır; savunma süresi 7 günden az olamaz', 'Savunma alınması zorunlu değildir', 'Yalnızca memurluktan çıkarmada savunma gerekir'], a: 1,
        e: 'Devlet memuruna isnat edilen hususlar hakkında yedi günden az olmamak üzere verilecek süre içinde savunması alınmadan disiplin cezası verilemez.', r: '657 s. K. m.130/1' },
      { q: 'Amir olayı 01.08.2026\'da öğrendi, soruşturmayı 20.08.2026\'da başlattı. Zamanaşımı açısından sorun var mı?', o: ['Var; 15 gün geçmiş', 'Yok; kınama için öğrenmeden itibaren 1 ay içinde başlanması yeterli', 'Var; aynı gün başlanmalıydı', 'Yok; süre 2 yıldır'], a: 1,
        e: 'Uyarma, kınama, aylıktan kesme ve kademe ilerlemesinin durdurulması cezalarında, disiplin amirlerinin fiili öğrenmesinden itibaren bir ay içinde soruşturmaya başlanmazsa ceza verme yetkisi zamanaşımına uğrar.', r: '657 s. K. m.127/1' },
      { q: 'Kınama cezasına karşı idari itiraz süresi?', o: ['Tebliğden itibaren 7 gün', '15 gün', '30 gün', '60 gün'], a: 0,
        e: 'Disiplin amirlerince verilen uyarma, kınama ve aylıktan kesme cezalarına karşı, kararın tebliğinden itibaren yedi gün içinde itiraz edilebilir.', r: '657 s. K. m.135' },
      { q: 'Kınama gibi hafif bir disiplin cezası yargı denetimine açık mı?', o: ['Hayır, uyarma ve kınama yargı dışındadır', 'Evet; disiplin kararları yargı denetimi dışında bırakılamaz', 'Yalnızca Danıştay\'a', 'Yalnızca ombudsmana'], a: 1,
        e: '2010 Anayasa değişikliğiyle uyarma ve kınama cezalarını yargı dışında tutan istisna kaldırıldı. Disiplin kararları yargı denetimi dışında bırakılamaz.', r: 'AY m.129/3' },
      { q: 'Mahkeme cezayı savunma hakkı ihlali nedeniyle iptal etti. İdare yeniden ceza verebilir mi?', o: ['Hayır, iptal kesin engeldir', 'Evet; kalan zamanaşımı süresi içinde, süre dolmuş veya 6 aydan az kalmışsa en geç 6 ay içinde', 'Evet, süre sınırı olmadan', 'Yalnızca memur kabul ederse'], a: 1, t: 20,
        e: '7573 sayılı Kanunla (yürürlük 29.01.2026) eklenen hükme göre disiplin cezası yargı kararıyla iptal edilirse, kararın idareye ulaştığı tarihten itibaren kalan zamanaşımı süresi içinde; süre dolmuş veya altı aydan az kalmışsa en geç altı ay içinde, karar gerekçesi dikkate alınarak yeniden ceza verilebilir.', r: '657 s. K. m.127 (7573 s. K. ile eklenen fıkra)' }
    ]
  },
  {
    id: 'b5', b: 'borclar', title: 'Bozuk Çıkan Telefon', court: 'İzmir Tüketici Hakem Heyeti', esas: 'Başvuru öncesi', role: 'Tüketici vekili', zorluk: 1,
    intro: "Müvekkil Ece Y. 1 Mart 2026'da bir mağazadan cep telefonu satın aldı. Telefon Eylül 2026'da şarj almamaya başladı. Satıcı \"kullanıcı hatası\" diyerek ilgilenmiyor. Müvekkil ne yapabileceğini soruyor.",
    evidence: [
      ['Fatura', '01.03.2026; tüketici satışı.'],
      ['Yetkili servis raporu', 'Şarj entegresinde üretim kaynaklı arıza; sıvı teması yok.'],
      ['Satıcının cevabı', '"Garanti kapsamı dışında, kullanıcı hatası."']
    ],
    steps: [
      { q: 'Aşağıdakilerden hangisi ayıplı mal nedeniyle tüketicinin seçimlik haklarından biri değildir?', o: ['Sözleşmeden dönme', 'Satış bedelinden indirim', 'Ücretsiz onarım', 'Satıcıdan bedelin iki katını isteme'], a: 3,
        e: 'Malın ayıplı olduğunun anlaşılması durumunda tüketici; sözleşmeden dönme, satış bedelinden indirim isteme, ücretsiz onarılmasını isteme veya ayıpsız bir misli ile değiştirilmesini isteme haklarından birini satıcıya karşı kullanabilir.', r: '6502 s. K. m.11/1' },
      { q: 'Ayıplı maldan sorumluluk ne kadar sürede zamanaşımına uğrar?', o: ['6 ay', 'Teslimden itibaren 2 yıl', '5 yıl', 'Ayıbın öğrenilmesinden 1 yıl'], a: 1,
        e: 'Ayıplı maldan sorumluluk, daha uzun bir süre belirlenmediği sürece, ayıp sonradan ortaya çıksa bile malın tesliminden itibaren iki yıllık zamanaşımına tabidir.', r: '6502 s. K. m.12/1' },
      { q: 'Uyuşmazlığın değeri tüketici hakem heyeti parasal sınırının altında. Nereye başvurulur?', o: ['Doğrudan tüketici mahkemesine', 'Tüketici hakem heyetine; başvuru zorunludur', 'Asliye ticaret mahkemesine', 'Noter aracılığıyla satıcıya'], a: 1,
        e: 'Değeri her yıl belirlenen parasal sınırın altında kalan uyuşmazlıklarda il veya ilçe tüketici hakem heyetlerine başvuru zorunludur.', r: '6502 s. K. m.68/1' },
      { q: 'Sınırın üzerindeki bir uyuşmazlıkta dava açmadan önce ne gerekir?', o: ['Hiçbir şey', 'Arabulucuya başvurmak (dava şartı)', 'Hakem heyeti kararı', 'Ticaret Bakanlığına şikâyet'], a: 1,
        e: 'Tüketici hakem heyetinin görev alanı dışındaki tüketici uyuşmazlıklarında dava açılmadan önce arabulucuya başvurulmuş olması dava şartıdır.', r: '6502 s. K. m.73/A' },
      { q: 'Dava aşamasında görevli mahkeme hangisidir?', o: ['Asliye hukuk mahkemesi', 'Tüketici mahkemesi', 'Asliye ticaret mahkemesi', 'Sulh hukuk mahkemesi'], a: 1,
        e: 'Tüketici işlemleri ile tüketiciye yönelik uygulamalardan doğabilecek uyuşmazlıklara ilişkin davalarda tüketici mahkemeleri görevlidir.', r: '6502 s. K. m.73/1' }
    ]
  },
  {
    id: 'm5', b: 'miras', title: 'Noterdeki Vasiyet', court: 'Malatya 1. Sulh Hukuk Mahkemesi', esas: '2026/412 D.İş', role: 'Mirasçı vekili', zorluk: 2,
    intro: "Mirasbırakan Recep Ö. 2025'te noterde resmî vasiyetname düzenleyerek dükkânını yeğeni Ufuk'a bıraktı. Tanıklardan biri, Recep Ö.'nün kardeşi İsmail'di. Recep Ö. 2 Ağustos 2026'da öldü. Müvekkil, Recep Ö.'nün oğlu Barış.",
    evidence: [
      ['Vasiyetname', 'Noter huzurunda; tanıklar: İsmail Ö. (mirasbırakanın kardeşi) ve Nuri S.'],
      ['Ölüm kaydı', '02.08.2026.'],
      ['Mirasçılık durumu', 'Tek yasal mirasçı oğlu Barış.']
    ],
    steps: [
      { q: 'Resmî vasiyetname nasıl düzenlenir?', o: ['Yalnızca mirasbırakanın el yazısıyla', 'Resmî memurun ve iki tanığın katılımıyla', 'Üç tanığa sözlü anlatımla', 'Yalnızca avukat huzurunda'], a: 1,
        e: 'Resmî vasiyetname, iki tanığın katılmasıyla resmî memur tarafından düzenlenir. Resmî memur sulh hâkimi, noter veya kanunla yetkili kılınan diğer bir görevli olabilir.', r: 'TMK m.532' },
      { q: 'Mirasbırakanın kardeşi tanık olabilir mi?', o: ['Evet, kan hısımı tanık olabilir', 'Hayır; mirasbırakanın kardeşi resmî vasiyetnameye tanık olamaz', 'Yalnızca mirasçı değilse', 'Yalnızca noter izin verirse'], a: 1,
        e: 'Fiil ehliyeti bulunmayanlar, kamu hizmetinden yasaklılar, okuryazar olmayanlar, mirasbırakanın eşi, üstsoy ve altsoy kan hısımları, kardeşleri ve bu kişilerin eşleri resmî vasiyetnamenin düzenlenmesine memur veya tanık olarak katılamazlar.', r: 'TMK m.536/1' },
      { q: 'Vasiyetname ne zaman açılır?', o: ['Mirasçılar talep ettiğinde', 'Ölümden itibaren bir ay içinde sulh hâkimi tarafından', 'Ölümden bir yıl sonra', 'Tapu müdürlüğünde'], a: 1,
        e: 'Vasiyetname, mirasbırakanın ölümünden başlayarak bir ay içinde sulh hâkimi tarafından açılır ve ilgililere okunur.', r: 'TMK m.596/1' },
      { q: 'Şekle aykırılık nedeniyle iptal davası hangi sürelerde açılmalı?', o: ['Öğrenmeden 1 yıl; her hâlde açılmadan 10 yıl (iyiniyetli olmayana karşı 20 yıl)', '6 ay; 5 yıl', 'Öğrenmeden 2 yıl', 'Süresiz'], a: 0,
        e: 'İptal davası açma hakkı, davacının tasarrufu, iptal sebebini ve hak sahibi olduğunu öğrendiği tarihten başlayarak bir yıl ve her hâlde vasiyetnamenin açılması tarihinin üzerinden on yıl geçmekle düşer. İyiniyetli olmayan davalılara karşı bu süre yirmi yıldır.', r: 'TMK m.559/1' },
      { q: 'Recep Ö. dükkânı yeğenine sözleşmeyle bırakmak isteseydi, mirasçılık sözleşmesi hangi şekilde yapılmalıydı?', o: ['Adi yazılı', 'Resmî vasiyetname şeklinde ve taraflar birlikte', 'Sözlü', 'Noter onaylı adi yazılı'], a: 1,
        e: 'Mirasçılık sözleşmesinin geçerli olması için resmî vasiyetname şeklinde düzenlenmesi gerekir. Sözleşmenin tarafları arzularını resmî memura aynı zamanda bildirir ve sözleşmeyi memurun ve iki tanığın önünde imzalarlar.', r: 'TMK m.545' }
    ]
  }
);

QUICK.push(
  // CEZA
  { id: 'qc16', b: 'ceza', q: 'Hakaret suçunun temel hâlinin cezası?', o: ['1 – 3 yıl hapis', '3 ay – 2 yıl hapis veya adli para cezası', 'Yalnızca adli para cezası', '6 ay – 4 yıl hapis'], a: 1, e: 'Bir kimseye onur, şeref ve saygınlığını rencide edebilecek nitelikte somut bir fiil veya olgu isnat eden veya sövmek suretiyle bir kimsenin onur, şeref ve saygınlığına saldıran kişi, üç aydan iki yıla kadar hapis veya adli para cezası ile cezalandırılır.', r: 'TCK m.125/1' },
  { id: 'qc17', b: 'ceza', q: 'Hakaret suçu uzlaştırma kapsamında mı?', o: ['Evet, şikâyete bağlı olduğu için', 'Hayır; hakaret uzlaştırma kapsamından açıkça çıkarılmıştır', 'Yalnızca sanık çocuksa', 'Yalnızca kamu görevlisine karşıysa'], a: 1, e: 'Soruşturulması ve kovuşturulması şikâyete bağlı olsa bile cinsel dokunulmazlığa karşı suçlar ile ısrarlı takip ve hakaret suçlarında uzlaştırma yoluna gidilmez.', r: 'CMK m.253/3' },
  { id: 'qc18', b: 'ceza', q: 'Kişiyi hürriyetinden yoksun kılma suçunun temel hâlinin cezası?', o: ['6 ay – 2 yıl', '1 – 5 yıl hapis', '2 – 7 yıl', '5 – 10 yıl'], a: 1, e: 'Bir kimseyi hukuka aykırı olarak bir yere gitmek veya bir yerde kalmak hürriyetinden yoksun bırakan kişiye bir yıldan beş yıla kadar hapis cezası verilir.', r: 'TCK m.109/1' },
  { id: 'qc19', b: 'ceza', q: 'Adli para cezası kaç gün arasında belirlenir?', o: ['1 – 365 gün', '5 – 730 gün', '30 – 1000 gün', '10 – 500 gün'], a: 1, e: 'Adli para cezası, beş günden az ve kanunda aksine hüküm bulunmayan hâllerde yedi yüz otuz günden fazla olmamak üzere belirlenen tam gün sayısının, bir gün karşılığı olarak takdir edilen miktar ile çarpılması suretiyle hesaplanır.', r: 'TCK m.52/1' },
  // İŞ
  { id: 'qi17', b: 'is', q: 'İşveren geçerli nedenle feshi nasıl bildirmelidir?', o: ['Sözlü olarak', 'Yazılı olarak ve fesih sebebini açık ve kesin şekilde belirterek', 'E-postayla, sebep belirtmeden', 'Noter aracılığıyla, sebep gerekmez'], a: 1, e: 'İşveren fesih bildirimini yazılı olarak yapmak ve fesih sebebini açık ve kesin bir şekilde belirtmek zorundadır.', r: 'İş K. m.19/1' },
  { id: 'qi18', b: 'is', q: 'Hizmeti 1,5 ile 3 yıl arasındaki işçide ihbar süresi?', o: ['2 hafta', '4 hafta', '6 hafta', '8 hafta'], a: 2, e: 'İşi bir buçuk yıldan üç yıla kadar sürmüş işçi için bildirim süresi altı haftadır.', r: 'İş K. m.17/2-c' },
  { id: 'qi19', b: 'is', q: 'Ulusal bayram veya genel tatil gününde çalışan işçiye ne ödenir?', o: ['Yalnızca o günün ücreti', 'Ayrıca bir günlük ücret (toplam iki kat)', 'Üç kat ücret', 'İzin verilir, ücret ödenmez'], a: 1, e: 'Ulusal bayram ve genel tatil günlerinde çalışmayıp tatil yapan işçilere bir iş karşılığı olmaksızın o günün ücreti tam olarak, tatil yapmayarak çalışan işçilere ise ayrıca çalışılan her gün için bir günlük ücreti ödenir.', r: 'İş K. m.47/1' },
  { id: 'qi20', b: 'is', q: 'Toplu işçi çıkarmada işveren bildirimi ne zaman yapmalıdır?', o: ['Çıkarmayla aynı gün', 'En az 30 gün önceden yazılı olarak', '7 gün önce', '6 ay önce'], a: 1, e: 'İşveren toplu işçi çıkarmak istediğinde, bunu en az otuz gün önceden yazılı olarak işyeri sendika temsilcilerine, ilgili bölge müdürlüğüne ve Türkiye İş Kurumuna bildirir.', r: 'İş K. m.29/1' },
  // AİLE
  { id: 'qa17', b: 'aile', q: 'Boşanma davası açılınca hâkim neyi kendiliğinden yapar?', o: ['Hiçbir şey; taraf talebi beklenir', 'Eşlerin barınması, geçimi, mallarının yönetimi ve çocukların bakımı için geçici önlemleri alır', 'Velayeti doğrudan anneye verir', 'Mal rejimini tasfiye eder'], a: 1, e: 'Boşanma veya ayrılık davası açılınca hâkim, davanın devamı süresince gerekli olan, özellikle eşlerin barınmasına, geçimine, eşlerin mallarının yönetimine ve çocukların bakım ve korunmasına ilişkin geçici önlemleri kendiliğinden alır.', r: 'TMK m.169' },
  { id: 'qa18', b: 'aile', q: 'Aile konutu malik eş tarafından diğer eşin rızası olmadan satılabilir mi?', o: ['Evet, malik serbesttir', 'Hayır; diğer eşin açık rızası olmadan devredilemez', 'Yalnızca kira sözleşmesi feshedilemez', 'Evet, yalnızca tapuya şerh varsa yasak'], a: 1, e: 'Eşlerden biri, diğer eşin açık rızası bulunmadıkça, aile konutu ile ilgili kira sözleşmesini feshedemez, aile konutunu devredemez veya aile konutu üzerindeki hakları sınırlayamaz.', r: 'TMK m.194/1' },
  { id: 'qa19', b: 'aile', q: 'Evlilikten önce yapılan mal rejimi sözleşmesinin şekli?', o: ['Adi yazılı', 'Noterde düzenleme veya onaylama; evlenme başvurusunda yazılı beyan da mümkün', 'Sözlü', 'Mahkeme onayı'], a: 1, e: 'Mal rejimi sözleşmesi, noterde düzenleme veya onaylama şeklinde yapılır. Eşler evlenme başvurusu sırasında seçtikleri mal rejimini yazılı olarak bildirebilirler.', r: 'TMK m.205' },
  { id: 'qa20', b: 'aile', q: 'Eşlerin oturacakları konutu kim seçer?', o: ['Koca', 'Kadın', 'Eşler birlikte', 'Hâkim'], a: 2, e: 'Eşlerin oturacakları konutu birlikte seçerler.', r: 'TMK m.186/1' },
  // İDARE
  { id: 'qd15', b: 'idare', q: 'İdari dava açma süresi ne zaman başlar?', o: ['İşlemin yapıldığı gün', 'Yazılı bildirimi izleyen günden', 'İlgilinin dilekçe verdiği gün', 'Bir sonraki ayın ilk günü'], a: 1, e: 'Dava açma süreleri idari uyuşmazlıklarda yazılı bildirimi izleyen günden başlar.', r: 'İYUK m.7/2-a' },
  { id: 'qd16', b: 'idare', q: 'Yürütmenin durdurulması isteminin kabulü veya reddine karşı itiraz süresi?', o: ['3 gün', 'Tebliğden itibaren 7 gün', '15 gün', '30 gün'], a: 1, e: 'Yürütmenin durdurulması isteminin kabul veya reddine ilişkin kararlara karşı, tebliğinden itibaren yedi gün içinde bir defaya mahsus olmak üzere itiraz edilebilir.', r: 'İYUK m.27/7' },
  { id: 'qd17', b: 'idare', q: 'Devlet memuruna verilebilecek en ağır disiplin cezası hangisidir?', o: ['Kademe ilerlemesinin durdurulması', 'Devlet memurluğundan çıkarma', 'Aylıktan kesme', 'Kınama'], a: 1, e: 'Disiplin cezaları ağırlık sırasıyla uyarma, kınama, aylıktan kesme, kademe ilerlemesinin durdurulması ve devlet memurluğundan çıkarmadır. Çıkarılan kişi bir daha devlet memurluğuna atanamaz.', r: '657 s. K. m.125' },
  // BORÇLAR
  { id: 'qb16', b: 'borclar', q: 'Kira bedelinin tespiti davasında karar yeni dönemden itibaren geçerli olsun istiyorsun. Ne yapmalısın?', o: ['Dönem bittikten sonra dava açarım', 'Yeni dönemden en geç 30 gün önce dava açarım veya bu süre içinde yazılı bildirimde bulunurum', 'Yalnızca noter ihtarı yeterli, süre yok', 'Dava 5 yılda bir açılabilir'], a: 1, e: 'Dava yeni kira döneminin başlangıcından en geç otuz gün önce açılmış veya kiraya veren bu süre içinde artırıma ilişkin yazılı bildirimde bulunmuşsa, belirlenecek kira bedeli yeni dönemden itibaren kiracıyı bağlar.', r: 'TBK m.345/2' },
  { id: 'qb17', b: 'borclar', q: 'Beş yılı aşan kira ilişkisinde yeni kira bedeli nasıl belirlenir?', o: ['Yalnızca TÜFE artışıyla', 'Hâkim; TÜFE oranı, kiralananın durumu ve emsal kira bedellerini dikkate alarak hakkaniyete göre', 'Kiraya verenin teklifine göre', 'Değiştirilemez'], a: 1, e: 'Beş yıldan uzun süreli veya beş yıldan sonra yenilenen kira sözleşmelerinde ve bundan sonraki her beş yıl sonunda, yeni kira yılındaki kira bedeli hâkim tarafından TÜFE oranı, kiralananın durumu ve emsal kira bedelleri göz önüne alınarak hakkaniyete uygun biçimde belirlenir.', r: 'TBK m.344/3' },
  { id: 'qb18', b: 'borclar', q: 'Alacaklı müteselsil kefile hangi koşulla doğrudan başvurabilir?', o: ['Önce borçlu hakkında icra takibi sonuçlanmalı', 'Borçlunun ifada gecikmesi ve ihtarın sonuçsuz kalması ya da borçlunun açıkça ödeme güçsüzlüğünde', 'Hiçbir koşulla', 'Yalnızca rehin paraya çevrildikten sonra'], a: 1, e: 'Müteselsil kefile karşı alacaklı, borçluyu takip etmeden veya taşınmaz rehnini paraya çevirmeden önce, borçlunun ifada gecikmesi ve ihtarın sonuçsuz kalması veya borçlunun açıkça ödeme güçsüzlüğü içinde bulunması koşuluyla borcun ifasını isteyebilir.', r: 'TBK m.586/1' },
  { id: 'qb19', b: 'borclar', q: 'Taşınmaz bağışlama vaadinin geçerlilik şekli?', o: ['Adi yazılı', 'Resmî şekil', 'Sözlü yeterli', 'İki tanıkla'], a: 1, e: 'Taşınmaz bağışlama vaadi resmî şekilde yapılmadıkça geçerli olmaz.', r: 'TBK m.288/2' },
  // MİRAS
  { id: 'qm16', b: 'miras', q: 'Hiç yasal mirasçı yoksa miras kime kalır?', o: ['Belediyeye', 'Devlete', 'En yakın komşuya', 'Mirasbırakanın vakfına'], a: 1, e: 'Mirasçı olarak ne bir kan hısımı ne de sağ kalan eş varsa, miras Devlete kalır.', r: 'TMK m.501' },
  { id: 'qm17', b: 'miras', q: 'Paylaşmaya kadar mirasçılar tereke üzerinde hangi mülkiyetle hak sahibidir?', o: ['Paylı mülkiyet', 'Elbirliği mülkiyeti', 'Kat mülkiyeti', 'Her mirasçı ayrı ayrı malik'], a: 1, e: 'Birden çok mirasçı bulunması hâlinde, mirasın geçmesiyle paylaşma anına kadar mirasçılar arasında terekenin bütününe ilişkin bir ortaklık oluşur ve mirasçılar terekeye ait hak ve alacaklara elbirliğiyle malik olurlar.', r: 'TMK m.640/1' },
  { id: 'qm18', b: 'miras', q: 'Mirasçılık sözleşmesinin geçerlilik şekli?', o: ['Adi yazılı', 'Resmî vasiyetname şekli', 'El yazılı', 'Sözlü, iki tanıkla'], a: 1, e: 'Mirasçılık sözleşmesinin geçerli olması için resmî vasiyetname şeklinde düzenlenmesi gerekir.', r: 'TMK m.545/1' },
  { id: 'qm19', b: 'miras', q: 'Vasiyetnameyi ele geçiren kişi ne yapmalıdır?', o: ['Mirasçılara dağıtmalı', 'Ölümü öğrenir öğrenmez sulh hâkimine teslim etmeli', 'Saklamalı', 'Noterde imha etmeli'], a: 1, e: 'Mirasbırakanın ölümünden sonra ele geçen vasiyetname, açılmak üzere hemen sulh hâkimine teslim edilir.', r: 'TMK m.595' }
);

SOURCES[0].items.push(['CMK m.253 (güncel metin)', 'Uzlaştırma: teklife karar süresi yedi gün (m.253/4); hakaret ve ısrarlı takip uzlaştırma dışında (m.253/3); 30 gün + iki kez 20 gün (m.253/12).']);
SOURCES[0].items.push(['7573 sayılı Kanun (yürürlük 29.01.2026), 657 s. K. m.127', 'Yargı kararıyla iptal edilen disiplin cezasının yeniden verilme süresi.']);
