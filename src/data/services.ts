export type ServiceCategory =
  | 'construction'
  | 'facade'
  | 'interior'
  | 'infrastructure'
  | 'renewal'
  | 'consulting';

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  icon:
    | 'building'
    | 'home'
    | 'warehouse'
    | 'factory'
    | 'layers'
    | 'thermometer'
    | 'droplets'
    | 'volume'
    | 'triangle'
    | 'hardhat'
    | 'brick'
    | 'iron'
    | 'paint'
    | 'plug'
    | 'wrench'
    | 'pipette'
    | 'square'
    | 'trees'
    | 'shovel'
    | 'compass'
    | 'shield'
    | 'refresh'
    | 'ruler'
    | 'store'
    | 'hotel'
    | 'office';
  tagline: string;
  intro: string;
  description: string;
  keywords: string[];
  scope: string[];
  stages: Array<{ title: string; description: string }>;
  materials: string[];
  advantages: string[];
  suitableFor: string[];
  relatedServices: string[];
  faq: Array<{ q: string; a: string }>;
}

export const services: Service[] = [
  {
    slug: 'anahtar-teslim-insaat',
    title: 'Anahtar Teslim İnşaat',
    shortTitle: 'Anahtar Teslim İnşaat',
    category: 'construction',
    icon: 'building',
    tagline: 'Kavramdan teslimata tek bir çözüm ortağı.',
    intro:
      'Konsept, projelendirme, ruhsat, kaba yapı, ince işler ve teslim sürecinin tek çatı altında yönetildiği eksiksiz bir inşaat hizmetidir.',
    description:
      'Ocean İnşaat anahtar teslim projelerde arsanın veya mevcut yapının incelenmesinden başlayarak fizibilite, mimari–statik–mekanik–elektrik projelerin hazırlanması, imar ve ruhsat işlemleri, kaba yapı imalatı, ince işler, cephe, peyzaj ve teslim aşamalarını tek bir sözleşme kapsamında yürütür. Bütçe, süre ve kalite üçlüsü baştan tanımlanır; süreç boyunca düzenli raporlama ile şeffaflık sağlanır.',
    keywords: [
      'anahtar teslim inşaat',
      'anahtar teslim müteahhit',
      'anahtar teslim proje firması',
      'komple inşaat hizmeti',
    ],
    scope: [
      'Arsa etüdü ve fizibilite raporu',
      'Mimari, statik, mekanik ve elektrik projeleri',
      'Ruhsat, iskân ve resmi süreç yönetimi',
      'Hafriyat ve kaba yapı imalatı',
      'İnce işler (sıva, boya, seramik, parke, kapı, dolap)',
      'Dış cephe, çatı ve yalıtım uygulamaları',
      'Elektrik ve mekanik tesisat',
      'Peyzaj ve çevre düzenlemesi',
      'Anahtar teslimi ve satış sonrası destek',
    ],
    stages: [
      { title: 'Ön Analiz', description: 'Arsa, imar, ihtiyaç programı ve bütçe çerçevesi belirlenir.' },
      { title: 'Projelendirme', description: 'Mimari, statik, mekanik ve elektrik projeler koordineli hazırlanır.' },
      { title: 'Sözleşme', description: 'İş programı, ödeme planı, teknik şartname ve süre sözleşmede netleştirilir.' },
      { title: 'Ruhsat', description: 'Belediye onayları ve yasal izinler tamamlanır.' },
      { title: 'Kaba Yapı', description: 'Hafriyat, temel, betonarme veya çelik iskelet imalatları yürütülür.' },
      { title: 'İnce İşler', description: 'Sıva, şap, seramik, boya, dolap, kapı ve tesisat işlemleri tamamlanır.' },
      { title: 'Cephe ve Yalıtım', description: 'Dış cephe kaplama, mantolama ve su yalıtımı uygulanır.' },
      { title: 'Test ve Kontrol', description: 'Yapı, tesisat ve güvenlik testleri yapılır; eksikler kapatılır.' },
      { title: 'Teslim', description: 'İskân sonrası anahtar teslimi ve garantili destek başlar.' },
    ],
    materials: [
      'C30/C35 hazır beton',
      'B500C nervürlü çelik',
      'TS 825 uyumlu yalıtım levhaları',
      'A2 sınıfı yangına dayanımlı cephe malzemeleri',
      'Enerji sınıfı yüksek doğrama sistemleri',
    ],
    advantages: [
      'Tek muhatap, tek sözleşme, tek sorumluluk',
      'Sabit süre ve sabit bütçe planlaması',
      'Detaylı iş programı ile öngörülebilir teslim',
      'Deneyimli teknik ekiple sahada sürekli denetim',
      'Malzeme temini ve tedarik risklerinin firma tarafından üstlenilmesi',
    ],
    suitableFor: [
      'Konut ve apartman projeleri',
      'Villa ve müstakil yapılar',
      'Ticari yapılar ve ofis binaları',
      'Fabrika ve endüstriyel tesisler',
      'Otel, mağaza ve karma kullanımlı yapılar',
    ],
    relatedServices: ['kat-karsiligi-insaat', 'konut-insaati', 'villa-insaati', 'ticari-yapi-insaati'],
    faq: [
      {
        q: 'Anahtar teslim inşaat neleri kapsar?',
        a: 'Projelendirmeden ruhsata, kaba yapıdan ince işlere ve teslime kadar tüm süreç tek sözleşme altında yürütülür.',
      },
      {
        q: 'Süreç ne kadar sürer?',
        a: 'Proje büyüklüğüne göre değişmekle birlikte tek yapılı orta ölçekli bir konut projesi ortalama 12–20 ay içerisinde teslim edilir.',
      },
      {
        q: 'Ödeme planı nasıl yapılır?',
        a: 'İş programına bağlı hakediş esaslı bir ödeme planı ile ilerlenir; her ödeme tamamlanan iş kaleminin denetimi sonrasında yapılır.',
      },
    ],
  },
  {
    slug: 'kat-karsiligi-insaat',
    title: 'Kat Karşılığı İnşaat',
    shortTitle: 'Kat Karşılığı İnşaat',
    category: 'construction',
    icon: 'ruler',
    tagline: 'Arsanızı güvenli ve değerli bir yatırıma dönüştürün.',
    intro:
      'Arsa sahibi ile müteahhit arasında pay esaslı yürütülen, tarafların hak ve yükümlülüklerinin sözleşmeyle güvence altına alındığı inşaat modelidir.',
    description:
      'Ocean İnşaat kat karşılığı projelerde arsa incelemesi, imar durumu, fizibilite, pay dağılımı ve mimari geliştirme aşamalarını arsa sahibi ile birlikte planlar. Süreç noter onaylı sözleşme ile başlar; ruhsat, inşaat, iskân ve tapu devri firmamız tarafından yönetilir. Amaç, arsanın gerçek değerini ortaya çıkararak arsa sahibine hem finansal hem hukuki güvence sunmaktır.',
    keywords: [
      'kat karşılığı inşaat',
      'kat karşılığı müteahhit',
      'kat karşılığı arsa',
      'arsa payı karşılığı inşaat',
    ],
    scope: [
      'Arsa ve imar durumu analizi',
      'Fizibilite ve değer analizi',
      'Pay dağılımı ve daire seçim modeli',
      'Noter onaylı arsa payı karşılığı inşaat sözleşmesi',
      'Mimari, statik, mekanik ve elektrik projeler',
      'Ruhsat ve resmi süreçler',
      'Kaba yapı ve ince işler',
      'İskân ve tapu devir işlemleri',
    ],
    stages: [
      { title: 'Ön Görüşme', description: 'Arsa sahibinin beklentileri ve arsanın konumu değerlendirilir.' },
      { title: 'İmar İncelemesi', description: 'İmar durumu, çekme mesafeleri, TAKS/KAKS analizi yapılır.' },
      { title: 'Fizibilite', description: 'Bölgesel pazar değerleri, satış potansiyeli ve pay dağılım simülasyonu.' },
      { title: 'Sözleşme', description: 'Pay oranı, teslim süresi ve teknik şartname noter huzurunda imzalanır.' },
      { title: 'Projelendirme', description: 'Mimari ve mühendislik projeleri sözleşmede belirlenen kaliteye göre üretilir.' },
      { title: 'Ruhsat ve Kaba Yapı', description: 'Belediye onayları alınır, temel ve iskelet imalatı başlar.' },
      { title: 'İnce İşler', description: 'Cephe, tesisat, seramik, boya ve doğrama işleri tamamlanır.' },
      { title: 'İskân ve Tapu', description: 'İskân belgesi alınır, arsa sahibi ve müteahhit payları tapuya işlenir.' },
    ],
    materials: [
      'Yüksek dayanımlı hazır beton ve nervürlü demir',
      'Isı yalıtım yönetmeliğine uygun mantolama levhaları',
      'Alüminyum veya PVC yalıtımlı doğrama',
      'Deprem yönetmeliğine uygun bağlantı elemanları',
    ],
    advantages: [
      'Arsa sahibinden nakit talep edilmez',
      'Noter onaylı sözleşme ile hukuki güvence',
      'Şeffaf pay dağılımı ve daire seçim planı',
      'İmar hakkının en verimli şekilde kullanılması',
      'Anahtar teslim ve tapulu daire güvencesi',
    ],
    suitableFor: [
      'Merkez ve alt bölgelerdeki müsait imarlı arsalar',
      'Eski yapıların bulunduğu dönüşüm alanları',
      'Ortak arsa sahipliği bulunan parseller',
    ],
    relatedServices: ['anahtar-teslim-insaat', 'kentsel-donusum', 'konut-insaati'],
    faq: [
      {
        q: 'Kat karşılığı inşaatta pay oranı nasıl belirlenir?',
        a: 'Arsanın konumu, imar durumu, inşaat maliyeti ve bölgedeki satış rayiçleri üzerinden yapılan fizibiliteyle belirlenir.',
      },
      {
        q: 'Sözleşme nerede imzalanır?',
        a: 'Arsa payı karşılığı inşaat sözleşmeleri Türk Borçlar Kanunu gereği noter huzurunda düzenlenir.',
      },
      {
        q: 'Daire seçimi ne zaman yapılır?',
        a: 'Mimari projenin tamamlanmasının ardından sözleşmede belirlenen pay dağılımına göre kura veya seçim yöntemiyle yapılır.',
      },
    ],
  },
  {
    slug: 'konut-insaati',
    title: 'Konut ve Apartman İnşaatı',
    shortTitle: 'Konut İnşaatı',
    category: 'construction',
    icon: 'home',
    tagline: 'Yaşam kalitesini önceleyen çağdaş konutlar.',
    intro:
      'Yatay ve düşey mimari kurgudan enerji verimliliğine kadar konforu tanımlayan tüm başlıkları kapsayan konut projeleri.',
    description:
      'Ocean İnşaat konut ve apartman projelerinde plan çözümü, doğal aydınlatma, ses ve ısı yalıtımı, ortak alan kalitesi ve yapı güvenliği başlıklarını birlikte ele alır. Deprem yönetmeliğine uygun betonarme çözümleri, enerji sınıfı yüksek doğrama sistemleri ve düşük bakım gerektiren cephe uygulamaları ile teslim sonrası dönemde de sürdürülebilir bir yaşam alanı oluşturur.',
    keywords: [
      'konut inşaatı',
      'apartman inşaatı',
      'daire inşaatı',
      'konut müteahhiti',
    ],
    scope: [
      'Konsept ve avan proje',
      'Kesin ve uygulama projesi',
      'Statik, mekanik ve elektrik projeleri',
      'Kaba yapı imalatı',
      'İnce işler ve dekorasyon',
      'Ortak alan tasarımı ve peyzaj',
    ],
    stages: [
      { title: 'İhtiyaç Analizi', description: 'Kullanıcı profili, daire tipolojisi ve ortak alan kurgusu belirlenir.' },
      { title: 'Projelendirme', description: 'Mimari, statik ve tesisat projeleri birlikte üretilir.' },
      { title: 'Ruhsat', description: 'Belediye onayı ve yapı denetim süreçleri tamamlanır.' },
      { title: 'Yapım', description: 'Kaba yapı ve ince işler iş programına uygun yürütülür.' },
      { title: 'Teslim', description: 'Kalite kontrol ve iskân sonrası anahtar teslimi yapılır.' },
    ],
    materials: [
      'C30/37 hazır beton',
      'B500C nervürlü demir',
      'Isı ve ses yalıtımlı yapı elemanları',
      'A enerji sınıfı doğrama ve cam',
    ],
    advantages: [
      'Deprem yönetmeliğine uygun betonarme çözümleri',
      'Doğal aydınlatma ve havalandırma odaklı plan çözümleri',
      'Ortak alanlarda konforu artıran detaylar',
      'Düşük işletme giderleri için enerji verimli tasarım',
    ],
    suitableFor: ['Site tipi konut projeleri', 'Bağımsız apartman projeleri', 'Karma kullanımlı yapılar'],
    relatedServices: ['anahtar-teslim-insaat', 'kat-karsiligi-insaat', 'villa-insaati'],
    faq: [
      {
        q: 'Konut projesi kaç ayda tamamlanır?',
        a: 'Yapı büyüklüğüne bağlı olarak ortalama 12–24 ay arasında teslim süresi öngörülür.',
      },
      {
        q: 'Malzeme kalitesi nasıl belirlenir?',
        a: 'Sözleşmeye eklenen teknik şartnamede kullanılacak marka ve modeller açıkça yazılır.',
      },
    ],
  },
  {
    slug: 'villa-insaati',
    title: 'Villa İnşaatı',
    shortTitle: 'Villa İnşaatı',
    category: 'construction',
    icon: 'home',
    tagline: 'Kişiye özel tasarımla üretilen özel yaşam alanları.',
    intro:
      'Arazi topoğrafyasına, aile yaşam biçimine ve tasarım tercihlerinize göre şekillenen özgün villa projeleri.',
    description:
      'Ocean İnşaat villa projelerinde arazinin manzarası, yönü ve eğimi, kullanıcının yaşam alışkanlıkları ve mimari tercihler birlikte değerlendirilir. Betonarme, hafif çelik veya karma sistem seçenekleriyle akıllı ev, ısı pompası, güneş enerjisi ve gri su geri kazanımı gibi teknolojiler kolaylıkla entegre edilir.',
    keywords: ['villa inşaatı', 'lüks villa yapımı', 'anahtar teslim villa'],
    scope: [
      'Arsa analizi ve topografik ölçüm',
      'Mimari ve peyzaj konsepti',
      'Statik ve mekanik projelendirme',
      'Akıllı ev altyapısı',
      'İnce işler ve dekorasyon',
      'Havuz ve peyzaj uygulamaları',
    ],
    stages: [
      { title: 'Konsept', description: 'Kullanıcı tercihleri, oda programı ve stil belirlenir.' },
      { title: 'Tasarım', description: 'Mimari, peyzaj ve iç mekân tasarımları koordineli üretilir.' },
      { title: 'Uygulama', description: 'Kaba yapı, cephe, iç mekân ve peyzaj işleri yürütülür.' },
      { title: 'Teslim', description: 'Kullanıcıya özel kalite kontrol ve teslim süreci uygulanır.' },
    ],
    materials: [
      'C30/37 hazır beton veya hafif çelik konstrüksiyon',
      'Doğal taş, ahşap ve alüminyum kompozit cephe kaplamaları',
      'Yerden ısıtma sistemleri',
      'Isı ve ses yalıtımlı doğrama sistemleri',
    ],
    advantages: [
      'Kullanıcıya özel mimari kurgu',
      'Doğal malzeme ve sürdürülebilir tasarım seçenekleri',
      'Akıllı ev ve enerji sistemleri entegrasyonu',
      'Peyzaj, havuz ve dış alan detaylarında bütüncül planlama',
    ],
    suitableFor: [
      'Müstakil arsalar',
      'Villa siteleri',
      'Kırsal ve yayla bölgeleri',
    ],
    relatedServices: ['konut-insaati', 'peyzaj', 'anahtar-teslim-insaat'],
    faq: [
      {
        q: 'Villa inşaatında hangi taşıyıcı sistem tercih edilmeli?',
        a: 'Arazi zemini ve mimari tercihe göre betonarme, hafif çelik veya karma sistem seçilebilir.',
      },
      {
        q: 'Havuz ve peyzaj işleri aynı sözleşmeye dahil edilebilir mi?',
        a: 'Evet, tüm dış alan işleri anahtar teslim sözleşmesine dahil edilerek tek muhataptan yönetilebilir.',
      },
    ],
  },
  {
    slug: 'ticari-yapi-insaati',
    title: 'Ticari Yapı İnşaatı',
    shortTitle: 'Ticari Yapı İnşaatı',
    category: 'construction',
    icon: 'store',
    tagline: 'Marka kimliğini yapıya taşıyan ticari çözümler.',
    intro:
      'Mağaza, ofis, plaza ve karma kullanımlı ticari yapıların projelendirme ve inşaat süreçleri.',
    description:
      'Ocean İnşaat ticari yapı projelerinde marka kimliği, ziyaretçi akışı, müşteri deneyimi ve işletme verimliliği başlıklarını birlikte planlar. Cephe tasarımı, aydınlatma, iklimlendirme ve zayıf akım altyapıları bir bütün olarak kurgulanır.',
    keywords: ['ticari yapı inşaatı', 'plaza inşaatı', 'ofis binası inşaatı', 'mağaza inşaatı'],
    scope: [
      'Konsept ve marka odaklı mimari',
      'Cephe tasarımı',
      'İklimlendirme ve zayıf akım altyapısı',
      'Perakende odaklı iç mekân çözümleri',
      'Otopark ve servis alanları',
    ],
    stages: [
      { title: 'İhtiyaç Analizi', description: 'Marka, kullanıcı akışı ve işletme modeli değerlendirilir.' },
      { title: 'Tasarım', description: 'Mimari, mekanik ve elektrik projeleri birlikte üretilir.' },
      { title: 'Uygulama', description: 'Kaba yapı, cephe, iç mekân ve altyapı işleri yürütülür.' },
      { title: 'Devreye Alma', description: 'Sistem testleri ve teslim yapılır.' },
    ],
    materials: [
      'Yüksek dayanımlı beton ve çelik',
      'Kompozit ve cam giydirme cephe sistemleri',
      'VRF veya chiller iklimlendirme sistemleri',
      'A2 sınıfı yangın güvenlik ekipmanları',
    ],
    advantages: [
      'Marka kimliğini yansıtan mimari',
      'Yüksek ziyaretçi trafiğine uygun çözümler',
      'Enerji verimli mekanik altyapı',
      'Bakım maliyeti düşük malzeme seçimleri',
    ],
    suitableFor: ['Ofis binaları', 'Plaza projeleri', 'Perakende mağazalar', 'Showroomlar'],
    relatedServices: ['anahtar-teslim-insaat', 'ic-mekan-tadilati', 'celik-konstruksiyon'],
    faq: [
      {
        q: 'Ticari yapıda cephe tasarımı ne kadar önemli?',
        a: 'Ticari yapıda cephe marka kimliğinin bir parçasıdır; ışık, malzeme ve oran seçimleri müşteri algısını doğrudan etkiler.',
      },
    ],
  },
  {
    slug: 'fabrika-insaati',
    title: 'Fabrika ve Endüstriyel Yapılar',
    shortTitle: 'Fabrika İnşaatı',
    category: 'construction',
    icon: 'factory',
    tagline: 'Üretim akışını önceleyen endüstriyel yapılar.',
    intro:
      'Üretim süreçlerine, ekipman yerleşimine ve lojistik ihtiyaçlara göre kurgulanmış endüstriyel yapı çözümleri.',
    description:
      'Ocean İnşaat fabrika ve endüstriyel yapı projelerinde makine yerleşimi, malzeme akışı, iş güvenliği ve genişleme potansiyeli üzerine kurulu bir tasarım yaklaşımı benimser. Çelik konstrüksiyon veya betonarme çözümler proje ihtiyacına göre planlanır.',
    keywords: ['fabrika inşaatı', 'endüstriyel yapı', 'depo inşaatı', 'sanayi yapısı'],
    scope: [
      'Üretim akışı analizi',
      'Çelik veya betonarme taşıyıcı sistem',
      'Endüstriyel çatı ve cephe',
      'Zemin sertleştirme ve endüstriyel şap',
      'Elektrik ve mekanik altyapı',
      'Yangın söndürme sistemleri',
    ],
    stages: [
      { title: 'Analiz', description: 'Üretim akışı, ekipman ve lojistik ihtiyaçları belirlenir.' },
      { title: 'Tasarım', description: 'Statik ve tesisat sistemleri planlanır.' },
      { title: 'İnşaat', description: 'Çelik veya betonarme yapı, cephe ve altyapı imalatı yapılır.' },
      { title: 'Devreye Alma', description: 'Ekipman altyapıları ve testler tamamlanır.' },
    ],
    materials: [
      'Uzay çatı ve makas sistemleri',
      'Sandviç panel cephe',
      'Endüstriyel epoksi zemin',
      'Yangına dayanıklı boya sistemleri',
    ],
    advantages: [
      'Kısa sürede büyük açıklıklı yapı üretimi',
      'Genişleme ve modülerlik kolaylığı',
      'Yüksek enerji verimliliği',
      'Endüstri 4.0 uyumlu altyapı seçenekleri',
    ],
    suitableFor: [
      'Üretim tesisleri',
      'Lojistik depoları',
      'Soğuk hava depoları',
      'Ar-Ge ve teknoloji binaları',
    ],
    relatedServices: ['celik-konstruksiyon', 'altyapi', 'anahtar-teslim-insaat'],
    faq: [
      {
        q: 'Çelik konstrüksiyon mu betonarme mi tercih edilmeli?',
        a: 'Üretim akışı, açıklık ihtiyacı, yük durumu ve bütçe birlikte değerlendirilerek seçim yapılır.',
      },
    ],
  },
  {
    slug: 'dis-cephe-kaplama',
    title: 'Dış Cephe Kaplama',
    shortTitle: 'Dış Cephe Kaplama',
    category: 'facade',
    icon: 'layers',
    tagline: 'Yapıya kimlik kazandıran modern cephe çözümleri.',
    intro:
      'Kompozit, seramik, doğal taş, alüminyum ve cam kaplamalarla üretilen kalıcı ve estetik dış cephe uygulamaları.',
    description:
      'Ocean İnşaat dış cephe kaplama projelerinde yapının cephe geometrisi, iklim koşulları, yalıtım gereksinimi ve estetik hedefleri birlikte değerlendirilir. Havalandırmalı cephe sistemleri veya doğrudan yapıştırma tekniklerinden hangisinin uygun olduğu, kaplama malzemesinin ağırlığı ve yapının yaşına göre belirlenir.',
    keywords: ['dış cephe kaplama', 'kompozit cephe', 'giydirme cephe', 'seramik cephe'],
    scope: [
      'Cephe konsept tasarımı',
      'Statik ve rüzgar yükü analizleri',
      'Alt taşıyıcı konstrüksiyon',
      'Yalıtım katmanları',
      'Kaplama uygulaması',
      'Ek detayları ve derz sızdırmazlığı',
    ],
    stages: [
      { title: 'Ölçüm', description: 'Cephe hassas şekilde 3B taranır veya ölçülür.' },
      { title: 'Tasarım', description: 'Kaplama modeli ve renk paleti belirlenir.' },
      { title: 'Konstrüksiyon', description: 'Alt taşıyıcı sistem yapıya sabitlenir.' },
      { title: 'Kaplama', description: 'Panel veya seramik plakalar uygulanır.' },
      { title: 'Detay', description: 'Ek yerleri, silikon ve yağmur derz detayları tamamlanır.' },
    ],
    materials: [
      'Alüminyum kompozit panel',
      'Fiber çimento levha',
      'Doğal taş ve porselen seramik',
      'Cam giydirme sistemleri',
    ],
    advantages: [
      'Uzun ömürlü ve düşük bakımlı yüzey',
      'Yalıtım performansında iyileşme',
      'Yangına dayanıklı A2 sınıfı seçenekler',
      'Estetik ve markalaşma imkânı',
    ],
    suitableFor: ['Ofis binaları', 'Konut siteleri', 'Otel ve AVM cepheleri', 'Kurumsal binalar'],
    relatedServices: ['dis-cephe-yenileme', 'mantolama', 'isi-yalitimi'],
    faq: [
      {
        q: 'Kompozit cephe yangın güvenliği açısından uygun mu?',
        a: 'A2 sınıfı, yangına dayanıklı kompozit paneller ilgili yönetmeliklere uygundur ve tercih edilmektedir.',
      },
    ],
  },
  {
    slug: 'dis-cephe-yenileme',
    title: 'Dış Cephe Yenileme',
    shortTitle: 'Dış Cephe Yenileme',
    category: 'facade',
    icon: 'refresh',
    tagline: 'Yaşlanan cepheyi yeniden hayata geçirin.',
    intro:
      'Eskimiş, çatlamış veya nem tutmuş cephelerin sökülerek yeniden yalıtımlı ve estetik bir yüzey ile giydirilmesi.',
    description:
      'Ocean İnşaat dış cephe yenileme projelerinde mevcut yapının hasar tespiti, taşıyıcı sistem uygunluğu ve yalıtım eksiklikleri detaylı analiz edilir. Yenileme sürecinde yalıtım, sıva, boya ve dekoratif detaylar birlikte planlanarak binaya hem estetik hem işletme değeri katılır.',
    keywords: ['dış cephe yenileme', 'cephe tadilatı', 'bina yenileme', 'cephe boya'],
    scope: [
      'Mevcut cephenin analizi',
      'Sıva onarımı ve nem kontrolü',
      'Isı yalıtım katmanı',
      'Dekoratif kaplama uygulaması',
      'Cephe boya ve derz uygulamaları',
    ],
    stages: [
      { title: 'Analiz', description: 'Cephedeki çatlak, nem ve bozulmalar tespit edilir.' },
      { title: 'Hazırlık', description: 'Eski katmanlar sökülür, yüzey pürüzsüz hâle getirilir.' },
      { title: 'Yalıtım', description: 'Mantolama veya yalıtım katmanı uygulanır.' },
      { title: 'Kaplama/Boya', description: 'Yeni yüzey ve renk uygulanır.' },
    ],
    materials: [
      'EPS veya XPS yalıtım plakaları',
      'Elyaflı sıva sistemleri',
      'Silikon esaslı boya',
      'Su bazlı astar sistemleri',
    ],
    advantages: [
      'Binanın estetik değerinin yükselmesi',
      'Isınma ve soğutma giderlerinde tasarruf',
      'Nem ve küf sorunlarının çözümü',
      'Kısa sürede tamamlanan uygulama',
    ],
    suitableFor: [
      'Eski apartmanlar',
      'Site giriş cepheleri',
      'Kamu ve ticari binalar',
    ],
    relatedServices: ['mantolama', 'dis-cephe-kaplama', 'ic-dis-cephe-boya'],
    faq: [
      {
        q: 'Cephe yenileme sırasında iskele nasıl kurulur?',
        a: 'İş güvenliği yönetmeliğine uygun çelik iskele veya asma iskele sistemleri kullanılır ve sertifikalı ekipçe yönetilir.',
      },
    ],
  },
  {
    slug: 'mantolama',
    title: 'Mantolama ve Isı Yalıtımı',
    shortTitle: 'Mantolama',
    category: 'facade',
    icon: 'thermometer',
    tagline: 'Isıtma ve soğutma maliyetlerini kalıcı olarak düşürün.',
    intro:
      'Dış cepheye uygulanan yalıtım levhaları ile yapının enerji verimliliğinin ve konforunun artırılması.',
    description:
      'Ocean İnşaat mantolama uygulamalarında yapının iklim bölgesine göre TS 825 uyumlu kalınlıkta yalıtım levhaları seçer. Uygulama öncesinde nem kaynakları ve ısı köprüleri incelenir, uygulama sonrasında ise beklenen tasarruf hesabı yapılır.',
    keywords: ['mantolama', 'ısı yalıtımı', 'enerji tasarrufu', 'dış cephe mantolama'],
    scope: [
      'Cephe analizi',
      'Yalıtım kalınlığı hesabı',
      'EPS/XPS/taş yünü uygulaması',
      'Fileli sıva',
      'Silikon esaslı dekoratif kaplama',
    ],
    stages: [
      { title: 'Analiz', description: 'Yalıtım ihtiyacı ve nem kaynakları belirlenir.' },
      { title: 'Yüzey Hazırlığı', description: 'Astar ve tesviye çalışmaları yapılır.' },
      { title: 'Yalıtım', description: 'Levhalar yapıya sabitlenir.' },
      { title: 'Kaplama', description: 'Fileli sıva ve dekoratif kaplama uygulanır.' },
    ],
    materials: [
      'EPS 16 dns yalıtım levhası',
      'XPS levhalar (bodrum ve subasman)',
      'Taş yünü (yangın performansı için)',
      'Silikon esaslı dekoratif sıva',
    ],
    advantages: [
      'Yakıt tüketiminde %25\'e varan tasarruf',
      'İç mekân konforunun artması',
      'Nem ve küf oluşumunun engellenmesi',
      'Binaya değer katan estetik yüzey',
    ],
    suitableFor: ['Apartmanlar', 'Villalar', 'Kamu binaları', 'Ticari yapılar'],
    relatedServices: ['isi-yalitimi', 'dis-cephe-yenileme', 'ses-yalitimi'],
    faq: [
      {
        q: 'Mantolama ne kadar sürer?',
        a: 'Orta ölçekli bir apartmanda cephe alanına bağlı olarak 15–35 gün arasında tamamlanır.',
      },
    ],
  },
  {
    slug: 'isi-yalitimi',
    title: 'Isı Yalıtımı',
    shortTitle: 'Isı Yalıtımı',
    category: 'facade',
    icon: 'thermometer',
    tagline: 'Yapının enerji karnesini iyileştirin.',
    intro:
      'Cephe, çatı, döşeme ve tesisat üzerinde uygulanan çok katmanlı ısı yalıtımı çözümleri.',
    description:
      'Ocean İnşaat ısı yalıtımı hizmetinde yapının tüm kabuk yüzeylerini bütüncül olarak değerlendirir. Yalnızca cephe değil; çatı arası, bodrum ve tesisat hatları da yalıtılarak enerji sınıfı yüksek yapılar elde edilir.',
    keywords: ['ısı yalıtımı', 'enerji verimliliği', 'yalıtım firması', 'BEP-TR'],
    scope: [
      'Cephe, çatı ve döşeme yalıtımı',
      'Tesisat yalıtımı',
      'Termal kamera analizi',
      'BEP-TR ve enerji kimlik belgesi süreçleri',
    ],
    stages: [
      { title: 'Etüt', description: 'Termal kamera ile ısı kayıpları belirlenir.' },
      { title: 'Plan', description: 'Katman çözümleri ve malzeme seçimi yapılır.' },
      { title: 'Uygulama', description: 'İlgili yüzeylere yalıtım uygulanır.' },
      { title: 'Rapor', description: 'Tasarruf hesabı ve enerji raporu sunulur.' },
    ],
    materials: ['EPS', 'XPS', 'Taş yünü', 'Poliüretan köpük', 'Alüminyum folyolu şiltler'],
    advantages: [
      'Enerji faturasında kalıcı düşüş',
      'Isıl konforun artması',
      'Karbon ayak izinin azaltılması',
      'Yapının kabuk ömrünün uzaması',
    ],
    suitableFor: ['Konut', 'Ofis', 'Fabrika', 'Kamu binaları'],
    relatedServices: ['mantolama', 'su-yalitimi', 'ses-yalitimi'],
    faq: [
      {
        q: 'Hangi yalıtım kalınlığı yeterli?',
        a: 'TS 825 iklim bölgesi haritasına göre 5–12 cm arası kalınlıklar önerilir.',
      },
    ],
  },
  {
    slug: 'su-yalitimi',
    title: 'Su Yalıtımı',
    shortTitle: 'Su Yalıtımı',
    category: 'facade',
    icon: 'droplets',
    tagline: 'Yapının en büyük düşmanı olan suyu kalıcı olarak durdurun.',
    intro:
      'Temel, çatı, balkon, teras, ıslak hacim ve perde duvarların modern su yalıtım sistemleri ile korunması.',
    description:
      'Ocean İnşaat su yalıtımı uygulamalarında yapının hangi bölgede olduğuna, taban suyu seviyesine ve yüzey tipine göre bitümlü membran, poliüretan, çimento esaslı veya sıvı membran çözümlerini birlikte planlar.',
    keywords: ['su yalıtımı', 'temel yalıtımı', 'teras yalıtımı', 'membran uygulaması'],
    scope: [
      'Temel su yalıtımı',
      'Teras ve çatı yalıtımı',
      'Balkon yalıtımı',
      'Islak hacim yalıtımı',
      'Havuz yalıtımı',
    ],
    stages: [
      { title: 'Yüzey Hazırlığı', description: 'Yüzey temizlenir ve astar uygulanır.' },
      { title: 'Yalıtım Uygulaması', description: 'Uygun sistem katmanlı olarak uygulanır.' },
      { title: 'Test', description: 'Su tutma testi yapılır.' },
      { title: 'Koruma Katmanı', description: 'Şap veya koruma tabakası ile bitirilir.' },
    ],
    materials: [
      'Bitümlü membran',
      'Poliüretan esaslı sıvı membran',
      'Çimento esaslı su yalıtım harcı',
      'EPDM membran',
    ],
    advantages: [
      'Yapının uzun ömürlü kalması',
      'Küf ve nem sorunlarının önlenmesi',
      'Bakım ve tamir maliyetlerinin düşmesi',
      'İç mekân sağlığının korunması',
    ],
    suitableFor: ['Yeni yapılar', 'Eski binaların rehabilitasyonu', 'Endüstriyel yapılar', 'Havuz ve depolar'],
    relatedServices: ['isi-yalitimi', 'catt-yapimi', 'mantolama'],
    faq: [
      {
        q: 'Su yalıtımı ne kadar süre garanti kapsamında kalır?',
        a: 'Kullanılan sistem ve marka güvencesine göre 5–15 yıl arasında garanti sağlanabilir.',
      },
    ],
  },
  {
    slug: 'ses-yalitimi',
    title: 'Ses Yalıtımı',
    shortTitle: 'Ses Yalıtımı',
    category: 'facade',
    icon: 'volume',
    tagline: 'Sessiz ve konforlu mekânlar için akustik çözümler.',
    intro:
      'Duvar, döşeme ve tavan üzerine uygulanan akustik levha ve süngerler ile ortamdaki ses geçişinin kontrol altına alınması.',
    description:
      'Ocean İnşaat ses yalıtımı projelerinde mekânın kullanım amacı ve akustik hedefi doğrultusunda süngerli, panelli veya asma tavan tipi çözümler geliştirir.',
    keywords: ['ses yalıtımı', 'akustik yalıtım', 'stüdyo yalıtım', 'komşu ses yalıtımı'],
    scope: [
      'Duvar ses yalıtımı',
      'Döşeme darbe sesi yalıtımı',
      'Tavan yalıtımı',
      'Kapı ve pencere sızdırmazlık işleri',
    ],
    stages: [
      { title: 'Ölçüm', description: 'Ses seviyesi ölçülür ve hedef değer belirlenir.' },
      { title: 'Tasarım', description: 'Katmanlı sistem tasarımı yapılır.' },
      { title: 'Uygulama', description: 'Yüzeylere yalıtım malzemeleri uygulanır.' },
      { title: 'Kontrol', description: 'Uygulama sonrası ölçüm ile başarı doğrulanır.' },
    ],
    materials: ['Taş yünü', 'Akustik sünger', 'MDF akustik panel', 'Kauçuk şilte'],
    advantages: [
      'Komşu ve trafik gürültüsünde belirgin azalma',
      'Toplantı ve stüdyo alanlarında akustik konfor',
      'İş verimliliğinin artması',
      'Kolay entegre edilen sistemler',
    ],
    suitableFor: ['Konut', 'Ofis', 'Stüdyo', 'Otel ve restoran'],
    relatedServices: ['isi-yalitimi', 'ic-mekan-tadilati', 'ofis-tadilati'],
    faq: [
      {
        q: 'Ses yalıtımı komşu gürültüsünü tamamen keser mi?',
        a: 'Ses tamamen ortadan kaldırılamasa da hedef desibel değerine göre kayda değer düşüş sağlanır.',
      },
    ],
  },
  {
    slug: 'catt-yapimi',
    title: 'Çatı Yapımı',
    shortTitle: 'Çatı Yapımı',
    category: 'facade',
    icon: 'triangle',
    tagline: 'Yağmur, kar ve rüzgâra karşı dayanıklı çatı sistemleri.',
    intro:
      'Ahşap, çelik veya beton karkas üzerine kiremit, sandviç panel veya membran çözümleri ile üretilen çatı sistemleri.',
    description:
      'Ocean İnşaat çatı projelerinde yağış rejimi, rüzgâr yükü ve estetik tercihler doğrultusunda uygun eğim ve malzeme seçimi yapar. Çatı arası havalandırma ve yalıtımı da dahil bütüncül olarak planlanır.',
    keywords: ['çatı yapımı', 'kiremit çatı', 'çelik çatı', 'sandviç panel çatı'],
    scope: [
      'Ahşap veya çelik makas imalatı',
      'Kiremit veya panel kaplama',
      'Çatı yalıtımı',
      'Yağmur oluğu ve inişleri',
    ],
    stages: [
      { title: 'Tasarım', description: 'Eğim, malzeme ve statik hesap yapılır.' },
      { title: 'İmalat', description: 'Karkas ve makaslar imal edilir.' },
      { title: 'Uygulama', description: 'Kaplama, yalıtım ve oluk sistemleri uygulanır.' },
    ],
    materials: [
      'Kiremit',
      'Bitümlü shingle',
      'Sandviç panel',
      'Metal çatı örtüsü',
      'EPDM veya TPO membran',
    ],
    advantages: [
      'Uzun ömürlü ve bakımı kolay sistemler',
      'Yağış ve rüzgâr yüklerine dayanıklılık',
      'Enerji verimliliği ile uyumlu yalıtım',
      'Estetik tasarım seçenekleri',
    ],
    suitableFor: ['Konut', 'Villa', 'Fabrika', 'Ticari yapı'],
    relatedServices: ['catt-tadilati', 'su-yalitimi', 'isi-yalitimi'],
    faq: [
      {
        q: 'Hangi çatı türü tercih edilmeli?',
        a: 'Bölgenin iklim koşulları, yapının kullanım amacı ve bütçe birlikte değerlendirilerek karar verilir.',
      },
    ],
  },
  {
    slug: 'catt-tadilati',
    title: 'Çatı Tadilatı',
    shortTitle: 'Çatı Tadilatı',
    category: 'renewal',
    icon: 'refresh',
    tagline: 'Yaşlı çatınızı su geçirmez bir yapıya dönüştürün.',
    intro:
      'Mevcut çatı örtüsünün sökülmesi, yalıtımın yenilenmesi ve modern kaplama sistemleri ile yeniden inşası.',
    description:
      'Ocean İnşaat çatı tadilatı projelerinde çatı arasındaki nem, küf ve akıntı sorunları detaylı olarak analiz edilir. Ahşap veya çelik karkasın durumu değerlendirilir, gerekli güçlendirmeler yapılır ve uygun kaplama seçimiyle çatı yeniden inşa edilir.',
    keywords: ['çatı tadilatı', 'çatı onarımı', 'çatı aktarma', 'çatı yalıtımı'],
    scope: [
      'Mevcut çatı analizi',
      'Kiremit sökümü ve tesviye',
      'Yalıtım yenilenmesi',
      'Karkas güçlendirme',
      'Yeni kaplama uygulaması',
      'Oluk ve iniş yenilemesi',
    ],
    stages: [
      { title: 'Kontrol', description: 'Çatının detaylı incelemesi yapılır.' },
      { title: 'Söküm', description: 'Eski kaplama ve zarar görmüş elemanlar sökülür.' },
      { title: 'Onarım', description: 'Karkas onarımı ve yalıtım katmanları yenilenir.' },
      { title: 'Yeniden Yapım', description: 'Kaplama ve oluk sistemi tamamlanır.' },
    ],
    materials: ['Kiremit', 'OSB', 'Membran', 'Alüminyum oluk', 'Cam yünü'],
    advantages: [
      'Yağış sızıntılarının kalıcı çözümü',
      'Isı yalıtımının iyileşmesi',
      'Görsel yenilenme',
      'Bakım maliyetlerinin düşmesi',
    ],
    suitableFor: ['Eski apartmanlar', 'Villalar', 'Tarihi yapılar'],
    relatedServices: ['catt-yapimi', 'su-yalitimi', 'restorasyon'],
    faq: [
      {
        q: 'Çatı tadilatı sırasında bina kullanılabilir mi?',
        a: 'Kaba iş dışında iç mekânlar büyük ölçüde kullanılabilir; ancak bazı gürültülü işlemler için kısa süreli kısıtlama gerekebilir.',
      },
    ],
  },
  {
    slug: 'ic-mekan-tadilati',
    title: 'İç Mekân Tadilatı',
    shortTitle: 'İç Mekân Tadilatı',
    category: 'interior',
    icon: 'brick',
    tagline: 'Mevcut alanlarınızı çağdaş yaşam mekânlarına dönüştürün.',
    intro:
      'Duvar, döşeme, tavan, tesisat ve dekorasyon başlıklarını kapsayan bütüncül iç mekân tadilatı.',
    description:
      'Ocean İnşaat iç mekân tadilatı projelerinde alanın kullanım amacı, kullanıcı sayısı ve estetik hedefleri belirlenir. Duvar açma–kapama, tesisat yenileme, alçıpan tavan, aydınlatma, boya ve dolap uygulamaları tek elden yürütülür.',
    keywords: ['iç mekan tadilatı', 'ev tadilatı', 'daire tadilatı', 'renovasyon'],
    scope: [
      'Duvar açma ve yıkım işleri',
      'Elektrik ve sıhhi tesisat yenileme',
      'Alçıpan bölme ve tavan',
      'Zemin uygulaması',
      'Boya ve dekorasyon',
      'Mobilya ve dolap uygulaması',
    ],
    stages: [
      { title: 'Konsept', description: 'Mekân kullanım analizi ve tasarım kararları alınır.' },
      { title: 'Söküm', description: 'Yıkım ve söküm işleri güvenli şekilde yürütülür.' },
      { title: 'Altyapı', description: 'Elektrik, mekanik ve sıhhi tesisat yenilenir.' },
      { title: 'İnce İşler', description: 'Sıva, boya, zemin ve mobilya uygulanır.' },
    ],
    materials: ['Alçıpan', 'Laminat / seramik', 'Silikon esaslı boya', 'MDF ve lam mobilya'],
    advantages: [
      'Kullanım verimliliğinin artması',
      'Yaşam kalitesinin yükselmesi',
      'Yatırım değerinin artması',
      'Enerji verimliliğinde iyileşme',
    ],
    suitableFor: ['Daire', 'Villa', 'Ofis', 'Mağaza'],
    relatedServices: ['ev-tadilati', 'ofis-tadilati', 'magaza-tadilati'],
    faq: [
      {
        q: 'Tadilat sırasında evde kalınabilir mi?',
        a: 'Kısmi tadilatlarda mümkün olabilse de kapsamlı işlerde geçici olarak boşaltılması önerilir.',
      },
    ],
  },
  {
    slug: 'ev-tadilati',
    title: 'Ev Tadilatı',
    shortTitle: 'Ev Tadilatı',
    category: 'interior',
    icon: 'home',
    tagline: 'Ailenizin yaşam alışkanlıklarına uygun bir ev.',
    intro:
      'Mutfak, banyo, oda ve genel alanları kapsayan uçtan uca ev tadilat hizmetleri.',
    description:
      'Ocean İnşaat ev tadilatı projelerinde ailenin yaşam alışkanlıklarına uygun plan revizyonları, tesisat ve elektrik yenilemeleri, dolap ve mobilya çözümleri ile birlikte plan çözümü ve dekorasyon süreci yürütülür.',
    keywords: ['ev tadilatı', 'daire tadilatı', 'komple ev tadilatı', 'mutfak banyo tadilatı'],
    scope: [
      'Mutfak ve banyo tadilatı',
      'Tesisat yenileme',
      'Zemin ve duvar kaplama',
      'Dolap ve mobilya',
      'Aydınlatma ve boya',
    ],
    stages: [
      { title: 'Ölçüm', description: 'Ev planı çıkarılır ve ihtiyaçlar belirlenir.' },
      { title: 'Tasarım', description: 'Konsept ve malzeme kararları verilir.' },
      { title: 'Uygulama', description: 'Söküm, altyapı ve ince işler tamamlanır.' },
      { title: 'Teslim', description: 'Kontrol ve temizlik sonrası teslim edilir.' },
    ],
    materials: ['Seramik', 'Laminat', 'Su bazlı boya', 'MDF dolap'],
    advantages: [
      'Yaşam konforunda artış',
      'Enerji ve su tasarrufu',
      'Estetik ve modern görünüm',
      'Yatırım değerinde artış',
    ],
    suitableFor: ['Daireler', 'Müstakil evler', 'Yazlıklar'],
    relatedServices: ['ic-mekan-tadilati', 'seramik-fayans', 'parke-zemin'],
    faq: [
      {
        q: 'Komple ev tadilatı ne kadar sürer?',
        a: 'Ortalama 3+1 bir dairede yaklaşık 30–60 gün arasında değişir.',
      },
    ],
  },
  {
    slug: 'ofis-tadilati',
    title: 'Ofis Tadilatı',
    shortTitle: 'Ofis Tadilatı',
    category: 'interior',
    icon: 'office',
    tagline: 'Ekip verimliliğini artıran modern çalışma alanları.',
    intro:
      'Açık ofis, toplantı odaları, kabinler ve sosyal alanların bütüncül olarak yenilendiği ofis tasarım ve uygulama hizmeti.',
    description:
      'Ocean İnşaat ofis tadilatı projelerinde marka kimliği, çalışma biçimi, ekip büyüklüğü ve teknolojik altyapı ihtiyaçları birlikte planlanır. Aydınlatma, akustik ve iklimlendirme başlıkları verimliliği ön planda tutan bir mimari kurguyla ele alınır.',
    keywords: ['ofis tadilatı', 'ofis dekorasyon', 'ofis yenileme', 'kurumsal ofis tadilatı'],
    scope: [
      'Açık ve kapalı ofis düzenleri',
      'Toplantı ve odaklanma alanları',
      'Alçıpan bölmeler ve cam ünite',
      'Aydınlatma ve zayıf akım altyapısı',
      'Aktif ve dinlenme alanları',
    ],
    stages: [
      { title: 'Analiz', description: 'Ekip yapısı ve iş akışı incelenir.' },
      { title: 'Tasarım', description: 'Konsept ve malzeme paleti hazırlanır.' },
      { title: 'Uygulama', description: 'Mimari, mekanik ve elektrik işleri koordineli yürütülür.' },
      { title: 'Kurulum', description: 'Mobilya ve teknoloji altyapısı devreye alınır.' },
    ],
    materials: ['Cam bölme sistemleri', 'Karo halı', 'Akustik panel', 'Ergonomik mobilya'],
    advantages: [
      'Çalışan memnuniyetinde artış',
      'İşe alım avantajı',
      'Marka değerinin yükselmesi',
      'Enerji ve akustik konforda iyileşme',
    ],
    suitableFor: ['Şirket merkezleri', 'Startup ofisleri', 'Kamu binaları', 'Ortak çalışma alanları'],
    relatedServices: ['ic-mekan-tadilati', 'magaza-tadilati', 'ses-yalitimi'],
    faq: [
      {
        q: 'Ofis çalışırken tadilat yapılabilir mi?',
        a: 'Bölgesel çalışma planı ve mesai dışı çalışmalarla ekip verimliliği korunarak tadilat sürdürülebilir.',
      },
    ],
  },
  {
    slug: 'magaza-tadilati',
    title: 'Mağaza Tadilatı',
    shortTitle: 'Mağaza Tadilatı',
    category: 'interior',
    icon: 'store',
    tagline: 'Marka konseptinizi kısa sürede yeni bir yüzeye taşıyın.',
    intro:
      'Perakende mağazalar için hızlı, kaliteli ve marka standartlarına uygun tadilat uygulamaları.',
    description:
      'Ocean İnşaat mağaza tadilatı projelerinde satış kaybını en aza indiren gece çalışma programları ve mağaza konseptine uygun malzeme seçimleri ile hızlı teslim odaklı bir hizmet sunar.',
    keywords: ['mağaza tadilatı', 'perakende mağaza yenileme', 'AVM mağaza tadilatı'],
    scope: [
      'Vitrin uygulamaları',
      'Zemin ve tavan yenileme',
      'Aydınlatma ve elektrik altyapısı',
      'Kasa ve depolama alanları',
    ],
    stages: [
      { title: 'Konsept', description: 'Marka kimliğine uygun konsept belirlenir.' },
      { title: 'Söküm', description: 'Mevcut mağaza sökülür.' },
      { title: 'Uygulama', description: 'Kaba iş ve ince işler tamamlanır.' },
      { title: 'Kurulum', description: 'Aydınlatma, mobilya ve teşhir sistemleri kurulur.' },
    ],
    materials: ['Şeffaf cam vitrin', 'Modüler teşhir sistemleri', 'LED aydınlatma', 'PVC/laminat zemin'],
    advantages: [
      'Kısa süreli teslim',
      'Marka konseptine tam uyum',
      'Satış performansına katkı',
      'Estetik ve kalıcı yüzey',
    ],
    suitableFor: ['AVM mağazaları', 'Cadde mağazaları', 'Restoran ve kafeler'],
    relatedServices: ['ic-mekan-tadilati', 'ticari-yapi-insaati', 'ofis-tadilati'],
    faq: [
      {
        q: 'AVM içindeki mağaza tadilatı gündüz yapılabilir mi?',
        a: 'AVM yönetimleri genellikle gece çalışmasına izin verir; buna uygun ekip planlaması yapılır.',
      },
    ],
  },
  {
    slug: 'otel-tadilati',
    title: 'Otel Tadilatı',
    shortTitle: 'Otel Tadilatı',
    category: 'interior',
    icon: 'hotel',
    tagline: 'Konuk deneyimini yeniden tanımlayan otel yenilemeleri.',
    intro:
      'Oda, lobi, restoran, spa ve genel alanlar için bütüncül otel yenileme uygulamaları.',
    description:
      'Ocean İnşaat otel projelerinde işletmenin doluluk takvimi ve konuk deneyimi göz önünde bulundurularak faz bazlı bir yenileme planı hazırlanır. Odalar bölümler hâlinde yenilenir, ortak alanlar sezon dışı zamanlanır.',
    keywords: ['otel tadilatı', 'otel yenileme', 'termal otel tadilatı', 'butik otel tadilatı'],
    scope: [
      'Oda yenilemeleri',
      'Lobi ve restoran tadilatı',
      'Cephe ve peyzaj',
      'Mekanik ve elektrik altyapı revizyonu',
    ],
    stages: [
      { title: 'Konsept', description: 'Marka konumlandırması ve konsept çalışılır.' },
      { title: 'Planlama', description: 'Faz bazlı iş programı hazırlanır.' },
      { title: 'Uygulama', description: 'Fazlar sırayla uygulanır.' },
      { title: 'Teslim', description: 'Genel test ve devreye alma yapılır.' },
    ],
    materials: ['Doğal taş', 'Ahşap kaplama', 'Akustik panel', 'Yüksek performanslı tekstil'],
    advantages: [
      'Konuk memnuniyetinde artış',
      'Doluluk ve fiyat konumlandırmasında iyileşme',
      'Enerji verimliliğinde tasarruf',
      'Marka değerinin güçlenmesi',
    ],
    suitableFor: ['Termal oteller', 'Şehir otelleri', 'Butik oteller', 'Tatil köyleri'],
    relatedServices: ['ic-mekan-tadilati', 'ticari-yapi-insaati', 'restorasyon'],
    faq: [
      {
        q: 'Otel çalışırken tadilat yapılabilir mi?',
        a: 'Kat veya blok bazlı planlama ile mümkündür.',
      },
    ],
  },
  {
    slug: 'bina-guclendirme',
    title: 'Bina Güçlendirme',
    shortTitle: 'Bina Güçlendirme',
    category: 'renewal',
    icon: 'shield',
    tagline: 'Depreme karşı yapınızı bilimsel yöntemlerle güçlendirin.',
    intro:
      'Deprem yönetmeliğine göre yapılan performans analizi ve statik güçlendirme uygulamaları.',
    description:
      'Ocean İnşaat bina güçlendirme sürecinde önce yapıya ait mimari–statik projeler incelenir, karotla dayanım testleri yapılır ve TBDY 2018 yönetmeliğine göre performans analizi tamamlanır. Sonuçlar doğrultusunda mantolama, çelik kuşaklama, karbon fiber veya perde ekleme yöntemleri uygulanır.',
    keywords: ['bina güçlendirme', 'deprem güçlendirme', 'karbon fiber güçlendirme', 'perde ekleme'],
    scope: [
      'Deprem performans analizi',
      'Karot ve zemin testleri',
      'Perde ekleme',
      'Kolon mantolama',
      'Karbon fiber uygulaması',
      'Çelik kuşaklama',
    ],
    stages: [
      { title: 'Röleve', description: 'Yapının mimari ve statik ölçümü çıkarılır.' },
      { title: 'Analiz', description: 'Performans analizi ve dayanım testleri yapılır.' },
      { title: 'Proje', description: 'Güçlendirme projesi hazırlanır.' },
      { title: 'Uygulama', description: 'Onaylı yöntemlerle güçlendirme yapılır.' },
      { title: 'Rapor', description: 'Onaylı güçlendirme raporu teslim edilir.' },
    ],
    materials: [
      'Yüksek dayanımlı hazır beton',
      'Nervürlü demir',
      'Karbon fiber şeritler',
      'Çelik plaka ve profil',
      'Epoksi enjeksiyon',
    ],
    advantages: [
      'Yapı ömrünün uzaması',
      'Deprem risklerinin azaltılması',
      'Bina değerinin artması',
      'Yeniden inşaya göre daha ekonomik çözüm',
    ],
    suitableFor: [
      'Riskli bulunan konutlar',
      'Kamu binaları',
      'Okul ve hastaneler',
      'Ticari yapılar',
    ],
    relatedServices: ['kentsel-donusum', 'betonarme-yapilar', 'restorasyon'],
    faq: [
      {
        q: 'Güçlendirme mi yıkıp yeniden yapmak mı daha ekonomik?',
        a: 'Yapının yaşı, taşıyıcı sistemi ve maliyet analizine göre belirlenir; performans analizi sonucu yönlendirir.',
      },
    ],
  },
  {
    slug: 'kentsel-donusum',
    title: 'Kentsel Dönüşüm',
    shortTitle: 'Kentsel Dönüşüm',
    category: 'renewal',
    icon: 'refresh',
    tagline: 'Riskli yapıdan güvenli konuta uçtan uca kentsel dönüşüm süreci.',
    intro:
      'Riskli yapı tespiti, yıkım, projelendirme ve yeniden inşa süreçlerinin arsa sahipleri adına yönetimi.',
    description:
      'Ocean İnşaat kentsel dönüşüm süreçlerinde riskli yapı tespiti, hak sahipleri ile toplantılar, sözleşme, yıkım ruhsatı, tapu tescil süreci ve yeniden inşa gibi başlıkları uçtan uca yönetir. 6306 sayılı Kanun kapsamında sağlanan kira yardımı, muafiyet ve krediler konusunda bilgilendirme yapılır.',
    keywords: ['kentsel dönüşüm', 'riskli yapı', '6306 sayılı kanun', 'kentsel dönüşüm firması'],
    scope: [
      'Riskli yapı raporu süreci',
      'Hak sahipleri toplantıları',
      'Sözleşme ve kat mülkiyeti işlemleri',
      'Yıkım ruhsatı ve yıkım',
      'Yeni projenin geliştirilmesi ve inşası',
    ],
    stages: [
      { title: 'İnceleme', description: 'Yapı ve arsa incelemesi yapılır.' },
      { title: 'Rapor', description: 'Bakanlık lisanslı kurumdan risk raporu alınır.' },
      { title: 'Anlaşma', description: 'Hak sahipleri ile inşaat modeli belirlenir.' },
      { title: 'Yıkım', description: 'Yıkım ruhsatı alınır ve uygulama yapılır.' },
      { title: 'Yeniden İnşa', description: 'Yeni proje inşa edilir.' },
      { title: 'Teslim', description: 'Yeni daireler iskân ile teslim edilir.' },
    ],
    materials: ['Deprem yönetmeliğine uygun hazır beton', 'Enerji verimli yalıtım', 'Modern doğrama sistemleri'],
    advantages: [
      'Güvenli yapı',
      'Devlet destekleri ve kira yardımı',
      'Modern konfor standartları',
      'Değer artışı',
    ],
    suitableFor: [
      'Riskli bulunan yapılar',
      'Deprem yönetmeliğine uymayan konutlar',
      'Eski parseller',
    ],
    relatedServices: ['bina-guclendirme', 'kat-karsiligi-insaat', 'anahtar-teslim-insaat'],
    faq: [
      {
        q: 'Kentsel dönüşümde kira yardımı ne kadar süre alınır?',
        a: 'Kanunda belirlenen süre boyunca ilgili yönetmeliğe göre kira yardımı alınabilir.',
      },
    ],
  },
  {
    slug: 'betonarme-yapilar',
    title: 'Betonarme Yapılar',
    shortTitle: 'Betonarme Yapılar',
    category: 'construction',
    icon: 'iron',
    tagline: 'Türkiye\'nin en yaygın taşıyıcı sistemi ile güvenli yapılar.',
    intro:
      'Yönetmeliklere uygun betonarme taşıyıcı sistemli konut, ticari ve endüstriyel yapılar.',
    description:
      'Ocean İnşaat betonarme yapı üretiminde beton sınıfı, demir sınıfı ve donatı detayları uygulama projesine göre denetlenir. Beton dökümü öncesi ve sonrasında karot ve slump testleri yapılır.',
    keywords: ['betonarme yapı', 'betonarme müteahhit', 'betonarme apartman'],
    scope: [
      'Betonarme projelendirme',
      'Kalıp ve donatı işleri',
      'Beton dökümü',
      'Kür ve kalite testleri',
    ],
    stages: [
      { title: 'Proje', description: 'Statik proje ve iş programı hazırlanır.' },
      { title: 'Kalıp', description: 'Kalıp sistemleri kurulur.' },
      { title: 'Donatı', description: 'Demir işleri projeye uygun yerleştirilir.' },
      { title: 'Beton', description: 'Onaylı hazır beton dökülür ve kür yapılır.' },
    ],
    materials: ['C30/37 hazır beton', 'B500C nervürlü demir', 'Kalıp yağı', 'Su geçirmez katkılar'],
    advantages: [
      'Yerel yönetmeliklere yüksek uyum',
      'Ekonomik ve dayanıklı taşıyıcı sistem',
      'Kolay onarım ve güçlendirme imkânı',
      'Uzun ömürlü yapı',
    ],
    suitableFor: ['Konut', 'Ticari yapı', 'Kamu binası'],
    relatedServices: ['celik-konstruksiyon', 'bina-guclendirme', 'anahtar-teslim-insaat'],
    faq: [
      {
        q: 'Beton sınıfı neye göre seçilir?',
        a: 'Yapının statik projesine, bölgenin deprem yükü ve zemin sınıfına göre belirlenir.',
      },
    ],
  },
  {
    slug: 'celik-konstruksiyon',
    title: 'Çelik Konstrüksiyon',
    shortTitle: 'Çelik Konstrüksiyon',
    category: 'construction',
    icon: 'iron',
    tagline: 'Hızlı montaj ve büyük açıklıklara uygun çelik yapılar.',
    intro:
      'Fabrika, depo, ticari yapı ve prefabrik çözümler için çelik konstrüksiyon üretim ve montajı.',
    description:
      'Ocean İnşaat çelik konstrüksiyon projelerinde fabrika üretimli hazır profillerle sahada hızlı montaj gerçekleştirilir. Kaynaklı ve cıvatalı bağlantılar EN standartlarına göre uygulanır.',
    keywords: ['çelik konstrüksiyon', 'çelik yapı', 'çelik fabrika', 'prefabrik çelik'],
    scope: [
      'Çelik statik projelendirme',
      'Profil üretim ve boyama',
      'Şantiye montajı',
      'Kaynak ve bağlantı testleri',
    ],
    stages: [
      { title: 'Proje', description: 'Çelik statik projeler hazırlanır.' },
      { title: 'Üretim', description: 'Profil ve levha üretimi yapılır.' },
      { title: 'Boyama', description: 'Yangın ve pas koruma boyaları uygulanır.' },
      { title: 'Montaj', description: 'Sahada hızlı montaj yapılır.' },
    ],
    materials: ['S275 / S355 çelik', 'Sandviç panel', 'Yangın koruyucu boya', 'Yüksek mukavemetli cıvata'],
    advantages: [
      'Hızlı üretim ve montaj',
      'Büyük açıklıklı iç mekânlar',
      'Sökülebilir ve genişletilebilir yapı',
      'Yönetmeliklere uygun tasarım',
    ],
    suitableFor: ['Fabrika', 'Depo', 'Ticari yapı', 'Katlı otopark'],
    relatedServices: ['fabrika-insaati', 'anahtar-teslim-insaat', 'ticari-yapi-insaati'],
    faq: [
      {
        q: 'Çelik yapılar deprem yönetmeliğine uygun mu?',
        a: 'Doğru tasarlanmış çelik yapılar hem deprem yönetmeliğine hem de yangın güvenliğine uygundur.',
      },
    ],
  },
  {
    slug: 'alci-siva',
    title: 'Alçı ve Sıva Uygulamaları',
    shortTitle: 'Alçı ve Sıva',
    category: 'interior',
    icon: 'brick',
    tagline: 'Pürüzsüz yüzeyler için hassas alçı ve sıva işçiliği.',
    intro:
      'Duvar ve tavan sıvası, saten alçı, alçıpan bölme ve dekoratif alçı işleri.',
    description:
      'Ocean İnşaat alçı ve sıva işlerinde tüm yüzeyler standartlara uygun düzlemsellik ve terazide tamamlanır. Böylece boya, kâğıt ve dekoratif kaplamalar mükemmel bir yüzeyde uygulanır.',
    keywords: ['alçı sıva', 'saten alçı', 'alçıpan uygulama', 'sıva ustası'],
    scope: [
      'Kaba sıva',
      'Saten alçı',
      'Alçıpan bölme ve tavan',
      'Dekoratif alçı işleri',
    ],
    stages: [
      { title: 'Hazırlık', description: 'Yüzey temizliği ve astar uygulanır.' },
      { title: 'Kaba İş', description: 'Kaba sıva veya alçıpan bölmeler tamamlanır.' },
      { title: 'İnce İş', description: 'Saten alçı ile boyanacak yüzey elde edilir.' },
    ],
    materials: ['Alçı', 'Kireçli sıva', 'Alçıpan levha', 'Metal karkas profiller'],
    advantages: [
      'Pürüzsüz boya yüzeyi',
      'Isı ve ses yalıtımına katkı',
      'Estetik dekoratif detaylar',
    ],
    suitableFor: ['Konut', 'Ofis', 'Ticari yapılar'],
    relatedServices: ['ic-mekan-tadilati', 'ic-dis-cephe-boya', 'ses-yalitimi'],
    faq: [
      {
        q: 'Sıva sonrası ne kadar süre beklenmeli?',
        a: 'Sıva kalınlığına göre 7–21 gün arası bekleme süresi önerilir.',
      },
    ],
  },
  {
    slug: 'ic-dis-cephe-boya',
    title: 'İç ve Dış Cephe Boya',
    shortTitle: 'İç ve Dış Cephe Boya',
    category: 'facade',
    icon: 'paint',
    tagline: 'Uzun ömürlü boya sistemleri ile kalıcı yüzeyler.',
    intro:
      'Silikon esaslı dış cephe boyaları ve düşük VOC değerli iç mekân boyaları ile profesyonel boya uygulamaları.',
    description:
      'Ocean İnşaat boya uygulamalarında yüzey hazırlığı, astar seçimi ve uygun ekipman ile sağlıklı ve kalıcı yüzeyler elde eder. Renk kartelası, iklim ve kullanım amacına göre önerilir.',
    keywords: ['iç cephe boya', 'dış cephe boya', 'silikon esaslı boya', 'binaya boya'],
    scope: [
      'Yüzey hazırlığı',
      'Astar uygulaması',
      'İç boya',
      'Dış cephe boya',
      'Dekoratif boya sistemleri',
    ],
    stages: [
      { title: 'Yüzey', description: 'Zımpara ve temizlik ile astar için hazırlanır.' },
      { title: 'Astar', description: 'Uygun astar uygulanır.' },
      { title: 'Boya', description: 'Boya iki veya üç katta uygulanır.' },
    ],
    materials: ['Silikonlu dış cephe boyası', 'Su bazlı iç boya', 'Antibakteriyel boyalar', 'Astar sistemleri'],
    advantages: [
      'Uzun ömürlü yüzey',
      'Estetik yenilenme',
      'Düşük VOC ile sağlıklı iç mekân',
      'Nem ve küf koruması',
    ],
    suitableFor: ['Konut', 'Ofis', 'Ticari yapı'],
    relatedServices: ['ic-mekan-tadilati', 'dis-cephe-yenileme', 'alci-siva'],
    faq: [
      {
        q: 'Boya kaç yıl garantilidir?',
        a: 'Doğru uygulanmış silikon esaslı dış cephe boyaları için 10 yıla kadar üretici garantisi sağlanır.',
      },
    ],
  },
  {
    slug: 'seramik-fayans',
    title: 'Seramik ve Fayans',
    shortTitle: 'Seramik ve Fayans',
    category: 'interior',
    icon: 'square',
    tagline: 'Islak hacim ve genel yüzeylerde estetik ve dayanıklı çözüm.',
    intro:
      'Mutfak, banyo, balkon, teras ve mağaza gibi alanlarda modern seramik ve porselen uygulamaları.',
    description:
      'Ocean İnşaat seramik uygulamalarında yüzey tesviyesi, su yalıtımı ve derz seçimi büyük özenle yapılır. Böylece uzun yıllar dayanıklı ve estetik yüzeyler elde edilir.',
    keywords: ['seramik fayans', 'porselen döşeme', 'banyo mutfak seramik', 'seramik ustası'],
    scope: [
      'Zemin ve duvar seramik uygulaması',
      'Su yalıtımı entegrasyonu',
      'Derz ve silikon işçiliği',
    ],
    stages: [
      { title: 'Hazırlık', description: 'Yüzey tesviyesi ve yalıtım kontrol edilir.' },
      { title: 'Uygulama', description: 'Seramik, projeye uygun kalıpta döşenir.' },
      { title: 'Derz', description: 'Renk ve dayanım açısından uygun derz yapılır.' },
    ],
    materials: ['Porselen seramik', 'Yapıştırıcı harç', 'Su yalıtım harcı', 'Silikon'],
    advantages: [
      'Yüksek dayanıklılık',
      'Kolay temizlik',
      'Estetik çeşitlilik',
      'Islak hacim güvenliği',
    ],
    suitableFor: ['Banyo', 'Mutfak', 'Balkon', 'Mağaza'],
    relatedServices: ['ic-mekan-tadilati', 'su-yalitimi', 'parke-zemin'],
    faq: [
      {
        q: 'Eski seramikler sökülmeden yenisi döşenebilir mi?',
        a: 'Kot farkı, altlık uygunluğu ve statik değerlendirmeye göre bazı durumlarda mümkün olabilir.',
      },
    ],
  },
  {
    slug: 'parke-zemin',
    title: 'Parke ve Zemin Kaplama',
    shortTitle: 'Parke ve Zemin',
    category: 'interior',
    icon: 'square',
    tagline: 'Modern ve sıcak yaşam alanları için zemin kaplamaları.',
    intro:
      'Laminat, ahşap, LVT ve epoksi zemin uygulamaları ile modern mekânlar.',
    description:
      'Ocean İnşaat zemin uygulamalarında kullanım yoğunluğu, nem seviyesi ve estetik hedef doğrultusunda uygun malzeme seçimi yapılır. Uygulama öncesi şap tesviyesi ve nem ölçümü ihmal edilmez.',
    keywords: ['laminat parke', 'ahşap parke', 'LVT zemin', 'epoksi zemin'],
    scope: [
      'Laminat parke',
      'Ahşap masif parke',
      'LVT/PVC zemin',
      'Epoksi endüstriyel zemin',
    ],
    stages: [
      { title: 'Yüzey', description: 'Şap tesviyesi ve nem ölçümü yapılır.' },
      { title: 'Kaplama', description: 'Malzeme yapıştırılarak veya geçmeli olarak döşenir.' },
      { title: 'Süpürgelik', description: 'Süpürgelik ve geçiş profilleri tamamlanır.' },
    ],
    materials: ['Laminat AC5', 'Masif ahşap', 'LVT plaka', 'Epoksi reçine'],
    advantages: [
      'Sıcak ve modern görünüm',
      'Hızlı uygulama',
      'Kolay bakım',
      'Farklı bütçelere uygun seçenekler',
    ],
    suitableFor: ['Konut', 'Ofis', 'Mağaza', 'Fabrika'],
    relatedServices: ['ic-mekan-tadilati', 'ev-tadilati', 'seramik-fayans'],
    faq: [
      {
        q: 'Laminat parke ıslak hacimlerde kullanılır mı?',
        a: 'Standart laminat parkeler ıslak hacim için önerilmez; bunun için su geçirmez LVT tercih edilmelidir.',
      },
    ],
  },
  {
    slug: 'elektrik-tesisati',
    title: 'Elektrik Tesisatı',
    shortTitle: 'Elektrik Tesisatı',
    category: 'infrastructure',
    icon: 'plug',
    tagline: 'Güvenli ve verimli elektrik altyapıları.',
    intro:
      'Yönetmeliklere uygun kuvvetli ve zayıf akım elektrik tesisatı projeleri.',
    description:
      'Ocean İnşaat elektrik tesisatı projelerinde topraklama, kaçak akım koruması, kablo kesitleri ve kompanzasyon sistemleri projeye uygun şekilde uygulanır. LED aydınlatma ve akıllı ev entegrasyonları isteğe bağlı olarak eklenir.',
    keywords: ['elektrik tesisatı', 'topraklama', 'akıllı ev elektrik', 'zayıf akım'],
    scope: [
      'Ana pano ve dağıtım panoları',
      'Aydınlatma ve priz devreleri',
      'Topraklama ve paratoner',
      'Zayıf akım altyapıları',
      'Akıllı ev sistemleri',
    ],
    stages: [
      { title: 'Proje', description: 'Elektrik projesi hazırlanır.' },
      { title: 'Kaba İş', description: 'Boru ve buatlar yerleştirilir.' },
      { title: 'Kablolama', description: 'Devrelere uygun kablo çekilir.' },
      { title: 'Devreye Alma', description: 'Testler ve topraklama ölçümleri yapılır.' },
    ],
    materials: ['Halojensiz kablo', 'A tip kaçak akım rölesi', 'IP\'ye uygun buat ve armatürler'],
    advantages: [
      'Güvenli ve yönetmeliğe uygun altyapı',
      'Enerji verimliliği',
      'Akıllı ev entegrasyonu',
      'Uzun ömür',
    ],
    suitableFor: ['Konut', 'Ofis', 'Fabrika', 'Ticari yapı'],
    relatedServices: ['mekanik-tesisat', 'sihhi-tesisat', 'anahtar-teslim-insaat'],
    faq: [
      {
        q: 'Akıllı ev sistemleri sonradan entegre edilebilir mi?',
        a: 'Altyapı planlaması yapıldığında sonradan sorunsuz şekilde entegre edilebilir.',
      },
    ],
  },
  {
    slug: 'mekanik-tesisat',
    title: 'Mekanik Tesisat',
    shortTitle: 'Mekanik Tesisat',
    category: 'infrastructure',
    icon: 'wrench',
    tagline: 'Isıtma, soğutma ve havalandırmada modern çözümler.',
    intro:
      'Doğalgaz, kombi, klima, VRF ve havalandırma sistemleri için mekanik tesisat uygulamaları.',
    description:
      'Ocean İnşaat mekanik tesisat projelerinde iç mekân konforu, enerji verimliliği ve işletme maliyetleri birlikte planlanır. Isı pompası ve güneş enerjisi entegrasyonları isteğe bağlı olarak eklenir.',
    keywords: ['mekanik tesisat', 'ısıtma soğutma', 'VRF sistem', 'ısı pompası'],
    scope: [
      'Kombi ve doğalgaz tesisatı',
      'Klima ve VRF sistemleri',
      'Radyatör ve yerden ısıtma',
      'Havalandırma ve baca',
      'Isı pompası ve güneş enerjisi',
    ],
    stages: [
      { title: 'Proje', description: 'Mekanik projeler hazırlanır.' },
      { title: 'Uygulama', description: 'Boru ve kanal işleri tamamlanır.' },
      { title: 'Test', description: 'Basınç ve sızdırmazlık testleri yapılır.' },
      { title: 'Devreye Alma', description: 'Sistemler kalibre edilir.' },
    ],
    materials: [
      'Alupex ve PPR boru',
      'İzoleli havalandırma kanalları',
      'Yerden ısıtma boruları',
      'Enerji sınıfı yüksek klima ve VRF üniteleri',
    ],
    advantages: [
      'Yüksek konfor',
      'Düşük işletme gideri',
      'Bakım kolaylığı',
      'Yenilenebilir enerji uyumu',
    ],
    suitableFor: ['Konut', 'Ofis', 'Fabrika', 'Otel'],
    relatedServices: ['elektrik-tesisati', 'sihhi-tesisat', 'anahtar-teslim-insaat'],
    faq: [
      {
        q: 'VRF ile klima arasındaki fark nedir?',
        a: 'VRF sistemleri çok noktaya tek merkezden servis sağladığı için büyük yapılar için daha verimlidir.',
      },
    ],
  },
  {
    slug: 'sihhi-tesisat',
    title: 'Sıhhi Tesisat',
    shortTitle: 'Sıhhi Tesisat',
    category: 'infrastructure',
    icon: 'pipette',
    tagline: 'Temiz ve pis su hatlarında güvenli mühendislik.',
    intro:
      'Yapıya özel çıkarılan projeye uygun sıhhi tesisat imalatı.',
    description:
      'Ocean İnşaat sıhhi tesisat uygulamalarında temiz su, pis su, yağmur suyu ve gri su hatları ayrı ayrı planlanır. Yalıtımlı borular ve sızdırmaz bağlantılar ile kalıcı çözümler üretilir.',
    keywords: ['sıhhi tesisat', 'su tesisatı', 'pis su', 'gri su geri kazanımı'],
    scope: [
      'Temiz su hattı',
      'Pis su ve havalandırma',
      'Yağmur suyu drenajı',
      'Gri su geri kazanım altyapısı',
    ],
    stages: [
      { title: 'Proje', description: 'Sıhhi tesisat projesi hazırlanır.' },
      { title: 'Kaba İş', description: 'Boru güzergâhları döşenir.' },
      { title: 'Test', description: 'Basınç testleri yapılır.' },
      { title: 'İnce İş', description: 'Vitrifiye ve armatürler monte edilir.' },
    ],
    materials: ['PPR temiz su borusu', 'HDPE pis su borusu', 'Yalıtımlı geçiş elemanları'],
    advantages: [
      'Kalıcı ve sızdırmaz tesisat',
      'Bakım kolaylığı',
      'Su tasarrufu uygulamaları',
      'Sağlıklı yaşam alanı',
    ],
    suitableFor: ['Konut', 'Ofis', 'Fabrika'],
    relatedServices: ['mekanik-tesisat', 'elektrik-tesisati', 'ic-mekan-tadilati'],
    faq: [
      {
        q: 'Sıhhi tesisatta hangi boru kullanılmalı?',
        a: 'Temiz su için PPR, pis su için HDPE tercih edilmesi kalıcı çözüm sunar.',
      },
    ],
  },
  {
    slug: 'hafriyat',
    title: 'Hafriyat ve Kazı Çalışmaları',
    shortTitle: 'Hafriyat',
    category: 'infrastructure',
    icon: 'shovel',
    tagline: 'Sağlam temeller için doğru kazı.',
    intro:
      'İş makineleri ile yürütülen hafriyat, iksa, dolgu ve sıkıştırma işlemleri.',
    description:
      'Ocean İnşaat hafriyat çalışmalarında zemin etüdüne göre uygun ekipman ve iksa yöntemi seçilir. Çevre yapı güvenliği ve çalışma güvenliği ön planda tutulur.',
    keywords: ['hafriyat', 'kazı', 'iksa', 'temel kazısı'],
    scope: [
      'Zemin etüdüne göre kazı planı',
      'İksa sistemleri',
      'Hafriyat nakli',
      'Dolgu ve sıkıştırma',
    ],
    stages: [
      { title: 'Etüt', description: 'Zemin etüdüne göre kazı yöntemi belirlenir.' },
      { title: 'Kazı', description: 'İş makineleri ile kazı yapılır.' },
      { title: 'İksa', description: 'Gerekirse iksa uygulanır.' },
      { title: 'Nakil', description: 'Onaylı sahalara hafriyat nakli yapılır.' },
    ],
    materials: ['Beton kazık', 'Ankraj sistemleri', 'Çelik iksa', 'Dolgu malzemeleri'],
    advantages: [
      'Güvenli temel',
      'Komşu yapı güvenliği',
      'Yönetmeliklere uygun süreç',
    ],
    suitableFor: ['Konut', 'Ticari', 'Endüstriyel yapılar'],
    relatedServices: ['altyapi', 'anahtar-teslim-insaat', 'betonarme-yapilar'],
    faq: [
      {
        q: 'İksa hangi durumlarda zorunlu?',
        a: 'Derin kazılar, sıkışık kentsel dokular ve zayıf zeminlerde iksa yapılması zorunludur.',
      },
    ],
  },
  {
    slug: 'altyapi',
    title: 'Altyapı Çalışmaları',
    shortTitle: 'Altyapı',
    category: 'infrastructure',
    icon: 'shovel',
    tagline: 'Yapının görünmeyen ama en önemli parçası.',
    intro:
      'Yol, kanalizasyon, içme suyu, elektrik ve iletişim altyapı çalışmaları.',
    description:
      'Ocean İnşaat altyapı çalışmalarında bölgesel belediye ve kurum standartlarına uygun kanal, boru ve kablolama altyapıları hazırlar. Site içi yol, drenaj ve peyzaj altyapıları da bu kapsamda ele alınır.',
    keywords: ['altyapı', 'site altyapısı', 'yağmur suyu drenajı', 'kanalizasyon'],
    scope: [
      'Yol ve kaldırım',
      'Yağmur suyu drenajı',
      'İçme suyu ve kanalizasyon',
      'Elektrik ve iletişim kanalları',
    ],
    stages: [
      { title: 'Proje', description: 'Altyapı projeleri hazırlanır.' },
      { title: 'Kazı', description: 'Hatların güzergâhları açılır.' },
      { title: 'İmalat', description: 'Boru ve kablolar döşenir.' },
      { title: 'Kaplama', description: 'Yüzey kaplaması yapılır.' },
    ],
    materials: ['HDPE boru', 'Beton bordür', 'Asfalt', 'Elektrik kanal boruları'],
    advantages: [
      'Uzun ömürlü altyapı',
      'Bakım maliyetlerinin düşmesi',
      'Kentsel entegrasyon',
    ],
    suitableFor: ['Siteler', 'Endüstriyel bölgeler', 'Kamu projeleri'],
    relatedServices: ['hafriyat', 'peyzaj', 'anahtar-teslim-insaat'],
    faq: [
      {
        q: 'Site içi altyapıda dikkat edilmesi gereken en önemli konu nedir?',
        a: 'Yağmur ve pis su drenajının doğru planlanması ile uzun vadeli sorunların önüne geçilir.',
      },
    ],
  },
  {
    slug: 'peyzaj',
    title: 'Peyzaj ve Çevre Düzenlemesi',
    shortTitle: 'Peyzaj',
    category: 'infrastructure',
    icon: 'trees',
    tagline: 'Yapıyı çevreyle buluşturan yeşil dokunuşlar.',
    intro:
      'Bahçe, teras, yürüyüş yolu ve ortak alanlar için peyzaj tasarım ve uygulama hizmetleri.',
    description:
      'Ocean İnşaat peyzaj projelerinde iklim koşulları ve bakım kolaylığı ön plana çıkarılarak sürdürülebilir bitki seçimi yapılır. Otomatik sulama, aydınlatma ve sert zemin işleri birlikte planlanır.',
    keywords: ['peyzaj', 'çevre düzenlemesi', 'site peyzaj', 'bahçe peyzajı'],
    scope: [
      'Peyzaj tasarım',
      'Bitki seçimi ve dikim',
      'Otomatik sulama',
      'Sert zemin ve yürüyüş yolları',
      'Dış mekân aydınlatma',
    ],
    stages: [
      { title: 'Tasarım', description: 'Kullanım ve iklime uygun tasarım yapılır.' },
      { title: 'Uygulama', description: 'Sert ve yumuşak peyzaj işleri tamamlanır.' },
      { title: 'Bakım', description: 'Başlangıç dönemi bakım desteği sağlanır.' },
    ],
    materials: ['Doğal taş', 'Ahşap deck', 'Otomatik sulama sistemi', 'Yerli bitkiler'],
    advantages: [
      'Yapının değer artışı',
      'Kullanıcı memnuniyeti',
      'Su verimli sulama',
      'Sürdürülebilir bitki örtüsü',
    ],
    suitableFor: ['Siteler', 'Villalar', 'Ticari kampüsler'],
    relatedServices: ['villa-insaati', 'altyapi', 'anahtar-teslim-insaat'],
    faq: [
      {
        q: 'Peyzaj bakımı sonrası da veriyor musunuz?',
        a: 'Talep hâlinde ilk 12 ay boyunca periyodik bakım desteği sağlanır.',
      },
    ],
  },
  {
    slug: 'restorasyon',
    title: 'Restorasyon ve Yenileme',
    shortTitle: 'Restorasyon',
    category: 'renewal',
    icon: 'refresh',
    tagline: 'Tarihi dokuyu koruyarak modern konfora taşıyın.',
    intro:
      'Tarihi yapılar ve özgün mimari dokular için koruma amaçlı restorasyon uygulamaları.',
    description:
      'Ocean İnşaat restorasyon projelerinde koruma kurulu onaylı projeler doğrultusunda geleneksel malzeme ve teknikler kullanılır. Yapının özgün karakteri korunurken günümüz konforu entegre edilir.',
    keywords: ['restorasyon', 'tarihi yapı yenileme', 'koruma amaçlı restorasyon'],
    scope: [
      'Röleve ve restitüsyon çalışmaları',
      'Restorasyon projeleri',
      'Malzeme analizleri',
      'Uygulama ve konservasyon',
    ],
    stages: [
      { title: 'Analiz', description: 'Yapının tarihi ve teknik analizi yapılır.' },
      { title: 'Proje', description: 'Koruma kurulu onaylı projeler hazırlanır.' },
      { title: 'Uygulama', description: 'Geleneksel yöntemlerle uygulama yapılır.' },
    ],
    materials: ['Horasan harcı', 'Kireç sıvası', 'Ahşap ve doğal taş', 'Bakır ve kurşun kaplama'],
    advantages: [
      'Kültürel mirasın korunması',
      'Yapının uzun ömürlü kalması',
      'Modern konforun entegre edilmesi',
    ],
    suitableFor: ['Tarihi konaklar', 'Camiler ve türbeler', 'Anıt eserler'],
    relatedServices: ['bina-guclendirme', 'catt-tadilati', 'mimari-projelendirme'],
    faq: [
      {
        q: 'Restorasyonda hangi kurumlardan onay alınır?',
        a: 'Kültür ve Turizm Bakanlığı Kurulu ve ilgili belediye onayları alınır.',
      },
    ],
  },
  {
    slug: 'mimari-projelendirme',
    title: 'Mimari Projelendirme',
    shortTitle: 'Mimari Projelendirme',
    category: 'consulting',
    icon: 'compass',
    tagline: 'Kavramdan uygulamaya profesyonel mimari projeler.',
    intro:
      'Mimari konsept, avan proje, kesin proje ve uygulama projesi süreçleri.',
    description:
      'Ocean İnşaat mimari projelendirme sürecinde arazi analizi, imar durumu, ihtiyaç programı ve estetik hedeflerle uyumlu projeler hazırlar. BIM tabanlı çizim ve koordinasyon ile hata payı düşürülür.',
    keywords: ['mimari proje', 'mimari çizim', 'BIM projelendirme'],
    scope: [
      'Konsept ve avan proje',
      'Kesin ve uygulama projesi',
      'BIM koordinasyon',
      'Ruhsat dokümantasyonu',
    ],
    stages: [
      { title: 'Konsept', description: 'İhtiyaç ve estetik hedefler belirlenir.' },
      { title: 'Avan Proje', description: 'Genel çözüm ve kütle çalışılır.' },
      { title: 'Uygulama Projesi', description: 'Detaylı çizimler tamamlanır.' },
    ],
    materials: ['CAD ve BIM yazılımları', 'Onaylı çizim standartları'],
    advantages: [
      'Uygulanabilir ve maliyet dostu projeler',
      'BIM ile çakışma önleme',
      'Ruhsat süreçlerinde hız',
    ],
    suitableFor: ['Konut', 'Ticari yapı', 'Endüstriyel yapı'],
    relatedServices: ['statik-projelendirme', 'insaat-danismanligi', 'anahtar-teslim-insaat'],
    faq: [
      {
        q: 'BIM projelendirmenin avantajı nedir?',
        a: 'BIM ile mimari, statik ve tesisat projeleri arasındaki çakışmalar önceden görülüp çözülür.',
      },
    ],
  },
  {
    slug: 'statik-projelendirme',
    title: 'Statik Projelendirme',
    shortTitle: 'Statik Projelendirme',
    category: 'consulting',
    icon: 'ruler',
    tagline: 'Deprem yönetmeliğine uygun statik projeler.',
    intro:
      'Betonarme ve çelik yapılar için deprem yönetmeliği uyumlu statik projelendirme hizmetleri.',
    description:
      'Ocean İnşaat statik projelerinde TBDY 2018 kapsamında modelleme, doğrusal olmayan analiz ve performans hedeflerine uygun tasarım yapılır. Zemin etüdü ve mimari proje koordinasyonu sağlanır.',
    keywords: ['statik proje', 'deprem yönetmeliği', 'betonarme statik', 'çelik statik'],
    scope: [
      'Statik proje ön analiz',
      'Yapı modellemesi',
      'Zemin etüdü koordinasyonu',
      'Ruhsat sunumu',
    ],
    stages: [
      { title: 'Analiz', description: 'Zemin ve mimari veriler değerlendirilir.' },
      { title: 'Model', description: 'Yapı modellenir ve çözülür.' },
      { title: 'Tasarım', description: 'Kesitler ve donatı planları çıkarılır.' },
    ],
    materials: ['Statik analiz yazılımları', 'TBDY 2018 dokümantasyonu'],
    advantages: [
      'Güvenli ve ekonomik tasarım',
      'Ruhsat süreçlerinde uyum',
      'Alternatif çözüm senaryoları',
    ],
    suitableFor: ['Yeni yapılar', 'Güçlendirme projeleri', 'Endüstriyel yapılar'],
    relatedServices: ['mimari-projelendirme', 'insaat-danismanligi', 'bina-guclendirme'],
    faq: [
      {
        q: 'Statik proje ne kadar sürer?',
        a: 'Yapı büyüklüğüne göre 3–8 hafta arasında değişir.',
      },
    ],
  },
  {
    slug: 'insaat-danismanligi',
    title: 'İnşaat Danışmanlığı',
    shortTitle: 'İnşaat Danışmanlığı',
    category: 'consulting',
    icon: 'compass',
    tagline: 'Yatırımlarınızın her aşamasında bağımsız danışmanlık.',
    intro:
      'Yatırımcı, arsa sahibi ve kurumsal müşteriler için proje yönetim ve danışmanlık hizmetleri.',
    description:
      'Ocean İnşaat inşaat danışmanlığı hizmetinde fizibilite, ihale yönetimi, iş programı kontrolü, hakediş ve kalite denetimi başlıklarında bağımsız destek sunar. Yatırım risklerini azaltmayı hedefler.',
    keywords: ['inşaat danışmanlığı', 'proje yönetimi', 'ihale yönetimi', 'yatırım danışmanlığı'],
    scope: [
      'Fizibilite raporu',
      'İhale ve satın alma yönetimi',
      'İş programı ve maliyet kontrolü',
      'Hakediş denetimi',
      'Kalite ve iş güvenliği denetimi',
    ],
    stages: [
      { title: 'Analiz', description: 'Projenin mevcut durumu incelenir.' },
      { title: 'Plan', description: 'Süreç kurgusu ve iş programı hazırlanır.' },
      { title: 'Denetim', description: 'Uygulama boyunca kontrol raporları üretilir.' },
    ],
    materials: ['Proje yönetim yazılımları', 'BIM tabanlı raporlama'],
    advantages: [
      'Bağımsız değerlendirme',
      'Bütçe ve süre disiplini',
      'Kalite ve güvenlik güvencesi',
    ],
    suitableFor: ['Yatırımcılar', 'Arsa sahipleri', 'Kurumsal müşteriler'],
    relatedServices: ['mimari-projelendirme', 'statik-projelendirme', 'anahtar-teslim-insaat'],
    faq: [
      {
        q: 'Danışmanlık hizmeti tek sefer mi alınır?',
        a: 'Projenin tamamı boyunca ya da belirlenen fazlarda alınabilir.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
