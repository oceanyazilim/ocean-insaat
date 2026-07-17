export const projectCategories = [
  'Konut',
  'Villa',
  'Ticari Yapı',
  'Endüstriyel Yapı',
  'Enerji',
  'Turizm Yapısı',
  'Kurumsal Yapı',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface ProjectGalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle?: string;
  location: string;
  city: string;
  categories: ProjectCategory[];
  coverImage: string;
  coverAlt: string;
  gallery: ProjectGalleryImage[];
  shortDescription: string;
  description: string;
  status?: string;
  startYear?: string;
  completionYear?: string;
  constructionArea?: string;
  floors?: string;
  units?: string;
  clientType?: string;
  services?: string[];
  scopeNote?: string;
  featured?: boolean;
  featuredOrder?: number;
  seoTitle: string;
  seoDescription: string;
}

const PLACEHOLDER = 'Bilgi güncellenecektir';

const base = '/images/projects';

export const projects: Project[] = [
  {
    slug: 'sancaktepe-atak-apartmani-1',
    title: 'İstanbul Sancaktepe ATAK Apartmanı 1',
    shortTitle: 'Sancaktepe ATAK Apartmanı 1',
    location: 'Sancaktepe / İstanbul',
    city: 'İstanbul',
    categories: ['Konut'],
    coverImage: `${base}/sancaktepe-atak-apartmani-1/sancaktepe-atak-apartmani-1-01.jpeg`,
    coverAlt: 'Sancaktepe ATAK Apartmanı 1 konut projesinin tamamlanmış dış cephe görünümü',
    gallery: [
      {
        src: `${base}/sancaktepe-atak-apartmani-1/sancaktepe-atak-apartmani-1-01.jpeg`,
        alt: 'Sancaktepe ATAK Apartmanı 1 konut projesinin dış cephe görünümü',
      },
      {
        src: `${base}/sancaktepe-atak-apartmani-1/sancaktepe-atak-apartmani-1-02.jpeg`,
        alt: 'Sancaktepe ATAK Apartmanı 1 projesinden bina cephesi detayı',
      },
      {
        src: `${base}/sancaktepe-atak-apartmani-1/sancaktepe-atak-apartmani-1-03.jpeg`,
        alt: 'Sancaktepe ATAK Apartmanı 1 iç mekân uygulamalarından bir kare',
      },
      {
        src: `${base}/sancaktepe-atak-apartmani-1/sancaktepe-atak-apartmani-1-04.jpeg`,
        alt: 'Sancaktepe ATAK Apartmanı 1 kaba yapı ve uygulama aşamasından görüntü',
      },
      {
        src: `${base}/sancaktepe-atak-apartmani-1/sancaktepe-atak-apartmani-1-05.jpeg`,
        alt: 'Sancaktepe ATAK Apartmanı 1 şantiyesinden temel imalatı görüntüsü',
      },
    ],
    shortDescription:
      'Sancaktepe\'de tamamlanmış çağdaş bir apartman projesi. Modern çizgileri ve kontrastlı cephe kurgusuyla bölgeye çağdaş bir kimlik katmaktadır.',
    description:
      'Ocean İnşaat\'ın İstanbul Sancaktepe bölgesindeki konut portföyünün öne çıkan projelerinden biri olan ATAK Apartmanı 1, çağdaş cephe çizgileri ve pratik plan çözümüyle bölgedeki konut standardını yukarı taşımayı hedefler. Kaba yapıdan cephe uygulamalarına kadar tüm inşaat sürecine ait belgeli fotoğraflar galeride yer almaktadır.',
    status: 'Tamamlandı',
    startYear: PLACEHOLDER,
    completionYear: PLACEHOLDER,
    constructionArea: PLACEHOLDER,
    floors: PLACEHOLDER,
    units: PLACEHOLDER,
    clientType: PLACEHOLDER,
    services: [
      'Anahtar Teslim İnşaat',
      'Betonarme Uygulamalar',
      'Dış Cephe',
      'İç Mekân Uygulamaları',
    ],
    scopeNote: '',
    featured: true,
    featuredOrder: 1,
    seoTitle: 'Sancaktepe ATAK Apartmanı 1 | Ocean İnşaat Projeleri',
    seoDescription:
      'Ocean İnşaat\'ın İstanbul Sancaktepe\'de yer alan ATAK Apartmanı 1 projesini, proje görsellerini ve uygulama aşamalarını inceleyin.',
  },
  {
    slug: 'kadikoy-merdivenkoy-okay-apartmani',
    title: 'Kadıköy Merdivenköy Okay Apartmanı',
    shortTitle: 'Merdivenköy Okay Apartmanı',
    location: 'Merdivenköy, Kadıköy / İstanbul',
    city: 'İstanbul',
    categories: ['Konut'],
    coverImage: `${base}/kadikoy-merdivenkoy-okay-apartmani/kadikoy-merdivenkoy-okay-apartmani-01.jpeg`,
    coverAlt: 'Kadıköy Merdivenköy Okay Apartmanı projesinin cadde üzerinden dış cephe görünümü',
    gallery: [
      {
        src: `${base}/kadikoy-merdivenkoy-okay-apartmani/kadikoy-merdivenkoy-okay-apartmani-01.jpeg`,
        alt: 'Kadıköy Merdivenköy Okay Apartmanı projesinin caddeden görünümü',
      },
      {
        src: `${base}/kadikoy-merdivenkoy-okay-apartmani/kadikoy-merdivenkoy-okay-apartmani-02.jpeg`,
        alt: 'Kadıköy Merdivenköy Okay Apartmanı proje görünümü',
      },
      {
        src: `${base}/kadikoy-merdivenkoy-okay-apartmani/kadikoy-merdivenkoy-okay-apartmani-03.jpeg`,
        alt: 'Kadıköy Merdivenköy Okay Apartmanı bina cephesi detayı',
      },
      {
        src: `${base}/kadikoy-merdivenkoy-okay-apartmani/kadikoy-merdivenkoy-okay-apartmani-04.jpeg`,
        alt: 'Kadıköy Merdivenköy Okay Apartmanı inşaat sürecinden bir kare',
      },
      {
        src: `${base}/kadikoy-merdivenkoy-okay-apartmani/kadikoy-merdivenkoy-okay-apartmani-05.jpeg`,
        alt: 'Kadıköy Merdivenköy Okay Apartmanı temel kazı ve uygulama aşaması',
      },
    ],
    shortDescription:
      'Kadıköy Merdivenköy\'de cadde üzerinde konumlanmış çok katlı konut projesi. Kentsel dokuya uyumlu, düşey vurgulu bir cephe çözümüne sahiptir.',
    description:
      'Kadıköy Merdivenköy\'de yoğun bir kentsel dokuda konumlanan Okay Apartmanı, cadde üzerinde bina cephesi kimliğiyle öne çıkmaktadır. Ocean İnşaat proje sürecinde, sıkışık yapı adasında güvenli kazı ve uygulama planlaması ile ilerlemiş; teslim edilen yapıda hem konut hem ticari kullanım bütüncül olarak çözülmüştür. Galeride kazı aşamasından tamamlanmış cepheye kadar sürecin farklı adımlarını görebilirsiniz.',
    status: 'Tamamlandı',
    startYear: PLACEHOLDER,
    completionYear: PLACEHOLDER,
    constructionArea: PLACEHOLDER,
    floors: PLACEHOLDER,
    units: PLACEHOLDER,
    clientType: PLACEHOLDER,
    services: [
      'Anahtar Teslim İnşaat',
      'Betonarme Uygulamalar',
      'Dış Cephe',
      'İç Mekân Uygulamaları',
    ],
    scopeNote: '',
    featured: true,
    featuredOrder: 2,
    seoTitle: 'Kadıköy Merdivenköy Okay Apartmanı | Ocean İnşaat Projeleri',
    seoDescription:
      'Ocean İnşaat\'ın Kadıköy Merdivenköy\'de yer alan Okay Apartmanı projesini, proje galerisini ve uygulama detaylarını inceleyin.',
  },
  {
    slug: 'bodrum-gumusluk-vernus-villalari',
    title: 'Bodrum Gümüşlük Vernus Villaları',
    shortTitle: 'Gümüşlük Vernus Villaları',
    location: 'Gümüşlük, Bodrum / Muğla',
    city: 'Muğla',
    categories: ['Villa', 'Konut', 'Turizm Yapısı'],
    coverImage: `${base}/bodrum-gumusluk-vernus-villalari/bodrum-gumusluk-vernus-villalari-01.jpeg`,
    coverAlt:
      'Bodrum Gümüşlük Vernus Villaları projesinin denize sıfır konumdaki havadan görünümü',
    gallery: [
      {
        src: `${base}/bodrum-gumusluk-vernus-villalari/bodrum-gumusluk-vernus-villalari-01.jpeg`,
        alt: 'Bodrum Gümüşlük Vernus Villaları projesinin havadan panoramik görünümü',
      },
      {
        src: `${base}/bodrum-gumusluk-vernus-villalari/bodrum-gumusluk-vernus-villalari-02.jpeg`,
        alt: 'Bodrum Gümüşlük Vernus Villaları dış cephe ve peyzaj detayı',
      },
      {
        src: `${base}/bodrum-gumusluk-vernus-villalari/bodrum-gumusluk-vernus-villalari-03.jpeg`,
        alt: 'Bodrum Gümüşlük Vernus Villaları villalarından teslim edilmiş iç mekân görünümü',
      },
      {
        src: `${base}/bodrum-gumusluk-vernus-villalari/bodrum-gumusluk-vernus-villalari-04.jpeg`,
        alt: 'Bodrum Gümüşlük Vernus Villaları projesinden mimari detay',
      },
      {
        src: `${base}/bodrum-gumusluk-vernus-villalari/bodrum-gumusluk-vernus-villalari-05.jpeg`,
        alt: 'Bodrum Gümüşlük Vernus Villaları projesinden dış alan detayı',
      },
    ],
    shortDescription:
      'Bodrum Gümüşlük\'te denize sıfır konumda, kademeli araziye yerleşmiş villa projesi. Ege karakteri ve modern mimari çizgiler bir arada.',
    description:
      'Bodrum Gümüşlük\'te sarp bir sahil şeridine yerleşen Vernus Villaları, bölgenin doğal dokusu ile modern villa mimarisini birleştiren bir proje olarak öne çıkar. Havadan çekilen görüntüler projenin denize olan yakın ilişkisini ve peyzaj kurgusunu net biçimde ortaya koymaktadır. Ocean İnşaat, bu tipteki yamaç arazilerin gerektirdiği hassas kazı ve uygulama süreçlerinde deneyime sahiptir.',
    status: 'Tamamlandı',
    startYear: PLACEHOLDER,
    completionYear: PLACEHOLDER,
    constructionArea: PLACEHOLDER,
    floors: PLACEHOLDER,
    units: PLACEHOLDER,
    clientType: PLACEHOLDER,
    services: [
      'Anahtar Teslim İnşaat',
      'Betonarme Uygulamalar',
      'Dış Cephe',
      'İç Mekân Uygulamaları',
      'Proje Yönetimi',
    ],
    scopeNote: '',
    featured: true,
    featuredOrder: 3,
    seoTitle: 'Bodrum Gümüşlük Vernus Villaları | Ocean İnşaat Projeleri',
    seoDescription:
      'Ocean İnşaat\'ın Bodrum Gümüşlük\'te yer alan Vernus Villaları projesini, havadan görsellerini ve teslim edilmiş iç mekân galerisini inceleyin.',
  },
  {
    slug: 'malatya-avrupa-temper-3-2-mw-ges',
    title: 'Malatya Avrupa Temper 3,2 MW GES Projesi',
    shortTitle: 'Avrupa Temper 3,2 MW GES',
    location: 'Malatya',
    city: 'Malatya',
    categories: ['Enerji', 'Endüstriyel Yapı'],
    coverImage: `${base}/malatya-avrupa-temper-ges/malatya-avrupa-temper-ges-01.jpeg`,
    coverAlt: 'Malatya Avrupa Temper 3,2 MW güneş enerjisi santralinin çatı üzerinden görünümü',
    gallery: [
      {
        src: `${base}/malatya-avrupa-temper-ges/malatya-avrupa-temper-ges-01.jpeg`,
        alt: 'Malatya Avrupa Temper 3,2 MW GES çatı üzerine yerleştirilmiş güneş paneli tarlası',
      },
      {
        src: `${base}/malatya-avrupa-temper-ges/malatya-avrupa-temper-ges-02.jpeg`,
        alt: 'Malatya Avrupa Temper 3,2 MW GES panellerin dizilim detayı',
      },
      {
        src: `${base}/malatya-avrupa-temper-ges/malatya-avrupa-temper-ges-03.jpeg`,
        alt: 'Malatya Avrupa Temper 3,2 MW GES uygulamasından geniş açı görünüm',
      },
    ],
    shortDescription:
      'Malatya\'da 3,2 MW kapasiteli çatı üstü güneş enerjisi santrali. Endüstriyel bir fabrika çatısına yerleştirilmiş büyük ölçekli GES uygulaması.',
    description:
      'Malatya\'da yer alan Avrupa Temper tesisinin çatısına konumlandırılmış 3,2 MW kapasiteli güneş enerjisi santrali, Ocean İnşaat\'ın enerji projelerindeki uygulama deneyimini yansıtmaktadır. Proje kapsamındaki çatı üstü panel sistemleri, taşıyıcı konstrüksiyon çözümleri ve elektrik altyapısı endüstriyel ölçekte üretim yapan tesislerin öz tüketimini destekleyen tipte planlanmıştır.',
    status: 'Tamamlandı',
    startYear: PLACEHOLDER,
    completionYear: PLACEHOLDER,
    constructionArea: '3,2 MW kurulu güç',
    floors: PLACEHOLDER,
    units: PLACEHOLDER,
    clientType: PLACEHOLDER,
    services: ['Endüstriyel Yapı', 'Çelik Konstrüksiyon', 'Elektrik Tesisatı', 'Proje Yönetimi'],
    scopeNote: '',
    featured: true,
    featuredOrder: 4,
    seoTitle: 'Malatya Avrupa Temper 3,2 MW GES Projesi | Ocean İnşaat',
    seoDescription:
      'Ocean İnşaat\'ın Malatya\'da uyguladığı 3,2 MW kapasiteli Avrupa Temper güneş enerjisi santrali projesini ve saha görsellerini inceleyin.',
  },
  {
    slug: 'malatya-genpark-conax-fabrikasi',
    title: 'Malatya Genpark Jeneratör ve Conax Pano Üretim Fabrikası',
    shortTitle: 'Malatya Genpark Conax Fabrikası',
    location: 'Malatya',
    city: 'Malatya',
    categories: ['Endüstriyel Yapı', 'Ticari Yapı'],
    coverImage: `${base}/malatya-genpark-conax-fabrikasi/malatya-genpark-conax-fabrikasi-01.jpeg`,
    coverAlt: 'Malatya Genpark Jeneratör ve Conax Pano Üretim Fabrikası dış cephe görünümü',
    gallery: [
      {
        src: `${base}/malatya-genpark-conax-fabrikasi/malatya-genpark-conax-fabrikasi-01.jpeg`,
        alt: 'Malatya Genpark ve Conax pano üretim fabrikası dış cephe ve giriş bölümü',
      },
      {
        src: `${base}/malatya-genpark-conax-fabrikasi/malatya-genpark-conax-fabrikasi-02.jpeg`,
        alt: 'Malatya Genpark Conax fabrikasının cephe detayı ve giriş çevresi',
      },
      {
        src: `${base}/malatya-genpark-conax-fabrikasi/malatya-genpark-conax-fabrikasi-03.jpeg`,
        alt: 'Malatya Genpark Conax pano üretim tesisi genel görünüm',
      },
    ],
    shortDescription:
      'Malatya\'da jeneratör ve elektrik panosu üretimine yönelik özel olarak tasarlanmış modern endüstriyel yapı.',
    description:
      'Genpark Jeneratör ve Conax Pano Üretim Fabrikası, üretim akışı, showroom ve idari fonksiyonların bir arada çözüldüğü çok amaçlı bir endüstriyel yapıdır. Cephede kullanılan kontrastlı metal ve cam yüzeyler, markanın teknolojiye dair kimliğini yansıtan modern bir görünüm oluşturur. Ocean İnşaat, benzer üretim tesislerinde inşaat ve uygulama süreçlerinde tecrübe sahibidir.',
    status: 'Tamamlandı',
    startYear: PLACEHOLDER,
    completionYear: PLACEHOLDER,
    constructionArea: PLACEHOLDER,
    floors: PLACEHOLDER,
    units: PLACEHOLDER,
    clientType: PLACEHOLDER,
    services: [
      'Endüstriyel Yapı',
      'Betonarme Uygulamalar',
      'Dış Cephe',
      'Çelik Konstrüksiyon',
      'Proje Yönetimi',
    ],
    scopeNote: '',
    featured: true,
    featuredOrder: 5,
    seoTitle: 'Malatya Genpark Conax Pano Üretim Fabrikası | Ocean İnşaat',
    seoDescription:
      'Ocean İnşaat\'ın Malatya\'da yer alan Genpark Jeneratör ve Conax Pano Üretim Fabrikası projesini ve saha görsellerini inceleyin.',
  },
  {
    slug: 'quattro-istanbul-serifali',
    title: 'Quattro İstanbul Şerifali Projesi',
    shortTitle: 'Quattro İstanbul Şerifali',
    location: 'Şerifali, Ümraniye / İstanbul',
    city: 'İstanbul',
    categories: ['Konut', 'Ticari Yapı'],
    coverImage: `${base}/quattro-istanbul-serifali/quattro-istanbul-serifali-01.jpeg`,
    coverAlt: 'Quattro İstanbul Şerifali projesinin kaba yapı imalatı sırasındaki dış görünümü',
    gallery: [
      {
        src: `${base}/quattro-istanbul-serifali/quattro-istanbul-serifali-01.jpeg`,
        alt: 'Quattro İstanbul Şerifali projesi betonarme yapı ve dolgu duvar imalatı aşamasından görüntü',
      },
      {
        src: `${base}/quattro-istanbul-serifali/quattro-istanbul-serifali-02.jpeg`,
        alt: 'Quattro İstanbul Şerifali projesi inşaat sürecinden ikinci kare',
      },
    ],
    shortDescription:
      'Ümraniye Şerifali\'de karma kullanım odaklı çok katlı yapının inşaat sürecinden görüntüler.',
    description:
      'Quattro İstanbul Şerifali, Ümraniye\'nin gelişen iş ve konut hattında konumlanan çok katlı bir projedir. Ocean İnşaat\'ın portföyünde inşaat süreç fotoğraflarıyla yer alan proje; büyük ölçekli betonarme imalat, çevre yapı güvenliği ve iş programı disiplini açısından tipik bir karma kullanımlı yapı örneği olarak öne çıkar.',
    status: 'Uygulama Aşamasında',
    startYear: PLACEHOLDER,
    completionYear: PLACEHOLDER,
    constructionArea: PLACEHOLDER,
    floors: PLACEHOLDER,
    units: PLACEHOLDER,
    clientType: PLACEHOLDER,
    services: ['Betonarme Uygulamalar', 'Anahtar Teslim İnşaat', 'Proje Yönetimi'],
    scopeNote: '',
    featured: true,
    featuredOrder: 6,
    seoTitle: 'Quattro İstanbul Şerifali Projesi | Ocean İnşaat Projeleri',
    seoDescription:
      'Ocean İnşaat\'ın Ümraniye Şerifali\'de yer alan Quattro İstanbul projesini ve inşaat sürecine ait görselleri inceleyin.',
  },
  {
    slug: 'manisa-yg-1-cnc-uretim-tesisi',
    title: 'Manisa YG-1 CNC Üretim Tesisi',
    shortTitle: 'Manisa YG-1 CNC Üretim Tesisi',
    location: 'Manisa',
    city: 'Manisa',
    categories: ['Endüstriyel Yapı'],
    coverImage: `${base}/manisa-yg-1-cnc-uretim-tesisi/manisa-yg-1-cnc-uretim-tesisi-01.jpeg`,
    coverAlt: 'Manisa YG-1 CNC üretim tesisi iç mekân imalat alanı ve havalandırma altyapısı',
    gallery: [
      {
        src: `${base}/manisa-yg-1-cnc-uretim-tesisi/manisa-yg-1-cnc-uretim-tesisi-01.jpeg`,
        alt: 'Manisa YG-1 CNC üretim tesisi mekanik altyapı ve havalandırma kanalları',
      },
      {
        src: `${base}/manisa-yg-1-cnc-uretim-tesisi/manisa-yg-1-cnc-uretim-tesisi-02.jpeg`,
        alt: 'Manisa YG-1 CNC üretim tesisinden uygulama sürecine ait görüntü',
      },
      {
        src: `${base}/manisa-yg-1-cnc-uretim-tesisi/manisa-yg-1-cnc-uretim-tesisi-03.jpeg`,
        alt: 'Manisa YG-1 CNC üretim tesisi iç hacim ve altyapı imalatı',
      },
    ],
    shortDescription:
      'Manisa\'da CNC üretim faaliyetine yönelik özel olarak inşa edilmiş endüstriyel üretim alanı.',
    description:
      'YG-1 CNC üretim tesisi, Manisa\'da hassas talaşlı imalat üretimine yönelik özel olarak tasarlanmış bir endüstriyel yapıdır. Yüksek tavanlı üretim hacmi, endüstriyel havalandırma altyapısı ve büyük açıklıklı taşıyıcı sistem, tesisin CNC üretim akışına uygun çözümler sunar. Ocean İnşaat, benzer üretim yapılarının inşaat süreçlerinde deneyim sahibidir.',
    status: 'Tamamlandı',
    startYear: PLACEHOLDER,
    completionYear: PLACEHOLDER,
    constructionArea: PLACEHOLDER,
    floors: PLACEHOLDER,
    units: PLACEHOLDER,
    clientType: PLACEHOLDER,
    services: [
      'Endüstriyel Yapı',
      'Betonarme Uygulamalar',
      'Mekanik Tesisat',
      'Elektrik Tesisatı',
      'Çelik Konstrüksiyon',
    ],
    scopeNote: '',
    featured: false,
    seoTitle: 'Manisa YG-1 CNC Üretim Tesisi | Ocean İnşaat Projeleri',
    seoDescription:
      'Ocean İnşaat\'ın Manisa\'da yer alan YG-1 CNC üretim tesisi projesini ve saha görsellerini inceleyin.',
  },
  {
    slug: 'malatya-city-avm',
    title: 'Malatya City AVM Projesi',
    shortTitle: 'Malatya City AVM',
    location: 'Malatya',
    city: 'Malatya',
    categories: ['Ticari Yapı'],
    coverImage: `${base}/malatya-city-avm/malatya-city-avm-01.jpeg`,
    coverAlt: 'Malatya City AVM iç mekân tasarımından hol ve mağaza aksı',
    gallery: [
      {
        src: `${base}/malatya-city-avm/malatya-city-avm-01.jpeg`,
        alt: 'Malatya City AVM iç mekân tasarımından hol ve karşılama alanı',
      },
      {
        src: `${base}/malatya-city-avm/malatya-city-avm-02.jpeg`,
        alt: 'Malatya City AVM iç mekân tasarımından ortak alan detayı',
      },
      {
        src: `${base}/malatya-city-avm/malatya-city-avm-03.jpeg`,
        alt: 'Malatya City AVM kapalı otopark bölümü',
      },
      {
        src: `${base}/malatya-city-avm/malatya-city-avm-04.jpeg`,
        alt: 'Malatya City AVM iç mekân detay tasarımı',
      },
    ],
    shortDescription:
      'Malatya\'da modern iç mekân kurgusuyla planlanmış alışveriş merkezi projesi. Geniş ortak alanlar ve entegre otopark çözümüyle öne çıkar.',
    description:
      'Malatya City AVM, kentin ticari merkezinde konumlanan büyük ölçekli bir alışveriş merkezi projesi olarak tasarlanmıştır. İç mekân görselleri, kullanıcı deneyimini önceleyen ferah hol tasarımını, marka aksını ve entegre otopark çözümünü ortaya koymaktadır. Ocean İnşaat, bu ölçekteki ticari yapılarda tesisat, çelik konstrüksiyon ve iç mekân uygulamaları konularında deneyim sahibidir.',
    status: 'Proje Aşamasında',
    startYear: PLACEHOLDER,
    completionYear: PLACEHOLDER,
    constructionArea: PLACEHOLDER,
    floors: PLACEHOLDER,
    units: PLACEHOLDER,
    clientType: PLACEHOLDER,
    services: [
      'Ticari Yapı',
      'İç Mekân Uygulamaları',
      'Mekanik Tesisat',
      'Elektrik Tesisatı',
    ],
    scopeNote: '',
    featured: false,
    seoTitle: 'Malatya City AVM Projesi | Ocean İnşaat Projeleri',
    seoDescription:
      'Ocean İnşaat\'ın portföyünde yer alan Malatya City AVM projesini ve iç mekân görsellerini inceleyin.',
  },
  {
    slug: 'petrol-is-sendikasi-gebze-subesi',
    title: 'Petrol-İş Sendikası Gebze Şubesi',
    shortTitle: 'Petrol-İş Gebze Şubesi',
    location: 'Gebze / Kocaeli',
    city: 'Kocaeli',
    categories: ['Kurumsal Yapı', 'Ticari Yapı'],
    coverImage: `${base}/petrol-is-gebze-subesi/petrol-is-gebze-subesi-01.jpeg`,
    coverAlt: 'Petrol-İş Sendikası Gebze Şubesi toplantı ve konferans salonu iç mekânı',
    gallery: [
      {
        src: `${base}/petrol-is-gebze-subesi/petrol-is-gebze-subesi-01.jpeg`,
        alt: 'Petrol-İş Sendikası Gebze Şubesi konferans ve toplantı salonu',
      },
      {
        src: `${base}/petrol-is-gebze-subesi/petrol-is-gebze-subesi-02.jpeg`,
        alt: 'Petrol-İş Sendikası Gebze Şubesi iç mekân uygulamalarından bir kare',
      },
      {
        src: `${base}/petrol-is-gebze-subesi/petrol-is-gebze-subesi-03.jpeg`,
        alt: 'Petrol-İş Sendikası Gebze Şubesi hizmet binasından mekân detayı',
      },
    ],
    shortDescription:
      'Petrol-İş Sendikası\'nın Gebze şubesi için tasarlanmış hizmet binası. Konferans salonu ve iç mekân uygulamalarıyla öne çıkmaktadır.',
    description:
      'Petrol-İş Sendikası Gebze Şubesi, konferans salonu, çalışma alanları ve karşılama bölümleri ile üye ve ziyaretçilere hizmet veren çok fonksiyonlu bir kurumsal yapıdır. İç mekân çözümlerinde akustik konforu önceleyen malzeme seçimleri dikkat çekmektedir. Ocean İnşaat, kurumsal yapılara özel iç mekân uygulamalarında tecrübe sahibidir.',
    status: 'Tamamlandı',
    startYear: PLACEHOLDER,
    completionYear: PLACEHOLDER,
    constructionArea: PLACEHOLDER,
    floors: PLACEHOLDER,
    units: PLACEHOLDER,
    clientType: 'Sendika',
    services: ['İç Mekân Uygulamaları', 'Anahtar Teslim İnşaat', 'Proje Yönetimi'],
    scopeNote: '',
    featured: false,
    seoTitle: 'Petrol-İş Sendikası Gebze Şubesi | Ocean İnşaat Projeleri',
    seoDescription:
      'Ocean İnşaat\'ın Gebze\'de tamamladığı Petrol-İş Sendikası Şubesi hizmet binası projesini ve iç mekân görsellerini inceleyin.',
  },
  {
    slug: 'cambasi-kayak-merkezi',
    title: 'Çambaşı Kayak Merkezi',
    shortTitle: 'Çambaşı Kayak Merkezi',
    location: 'Çambaşı Yaylası / Ordu',
    city: 'Ordu',
    categories: ['Turizm Yapısı'],
    coverImage: `${base}/cambasi-kayak-merkezi/cambasi-kayak-merkezi-01.png`,
    coverAlt: 'Çambaşı Kayak Merkezi tesislerinin karla kaplı yaylada havadan görünümü',
    gallery: [
      {
        src: `${base}/cambasi-kayak-merkezi/cambasi-kayak-merkezi-01.png`,
        alt: 'Çambaşı Kayak Merkezi tesislerinin havadan görünümü',
      },
      {
        src: `${base}/cambasi-kayak-merkezi/cambasi-kayak-merkezi-02.png`,
        alt: 'Çambaşı Kayak Merkezi çevresinden karla kaplı yayla manzarası',
      },
      {
        src: `${base}/cambasi-kayak-merkezi/cambasi-kayak-merkezi-03.png`,
        alt: 'Çambaşı Kayak Merkezi telesiyej hattından görünüm',
      },
      {
        src: `${base}/cambasi-kayak-merkezi/cambasi-kayak-merkezi-04.png`,
        alt: 'Çambaşı Kayak Merkezi bungalov alanının gece görünümü',
      },
    ],
    shortDescription:
      'Ordu\'nun Çambaşı Yaylası\'nda konumlanan kayak ve sosyal tesis alanı. Yayla dokusuna uyumlu bir turizm yapısı.',
    description:
      'Çambaşı Kayak Merkezi, Ordu\'nun kayak turizmine hizmet eden yayla merkezinde konumlanan çok fonksiyonlu bir sosyal tesis alanıdır. Telesiyej hattı, konaklama ve karşılama alanları bir arada bulunmaktadır. Ocean İnşaat\'ın merkezdeki katkı kapsamı proje verisi güncellendikçe detaylandırılacaktır.',
    status: 'Tamamlandı',
    startYear: PLACEHOLDER,
    completionYear: PLACEHOLDER,
    constructionArea: PLACEHOLDER,
    floors: PLACEHOLDER,
    units: PLACEHOLDER,
    clientType: PLACEHOLDER,
    services: ['Turizm Yapısı', 'Sosyal Tesis Uygulamaları', 'Proje Yönetimi'],
    scopeNote: '',
    featured: false,
    seoTitle: 'Çambaşı Kayak Merkezi | Ocean İnşaat Projeleri',
    seoDescription:
      'Ocean İnşaat\'ın Ordu Çambaşı Yaylası\'nda yer alan Çambaşı Kayak Merkezi projesini ve saha görsellerini inceleyin.',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));
}

export function getRelatedProjects(project: Project, limit = 3): Project[] {
  return projects
    .filter((p) => p.slug !== project.slug)
    .map((p) => ({
      p,
      score:
        p.categories.filter((c) => project.categories.includes(c)).length * 2 +
        (p.city === project.city ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ p }) => p);
}

export function isPlaceholder(value?: string) {
  return !value || value === PLACEHOLDER;
}
