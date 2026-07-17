export interface LocationPage {
  slug: string;
  city: string;
  district: string;
  title: string;
  heroDescription: string;
  intro: string;
  focusAreas: string[];
  highlights: Array<{ title: string; description: string }>;
  faq: Array<{ q: string; a: string }>;
  featuredProjectSlugs: string[];
}

export const locations: LocationPage[] = [
  {
    slug: 'istanbul-insaat-firmasi',
    city: 'İstanbul',
    district: 'Genel',
    title: 'İstanbul İnşaat Firması',
    heroDescription:
      'İstanbul\'un yoğun kentsel dokusu, deprem riski ve yüksek imar hakları için özel çözümler.',
    intro:
      'Ocean İnşaat, İstanbul\'un Anadolu ve Avrupa yakalarında konut, ticari, endüstriyel ve renovasyon projelerini uçtan uca yönetir. Şehrin farklı ilçelerinde yürütülen sıkışık kazı çalışmaları, kentsel dönüşüm süreçleri ve prestijli konut projeleri için deneyimli ekiplerimiz sahada görev alır.',
    focusAreas: [
      'Anahtar Teslim İnşaat',
      'Kat Karşılığı İnşaat',
      'Bina Güçlendirme',
      'Dış Cephe Uygulamaları',
      'Kentsel Dönüşüm',
    ],
    highlights: [
      {
        title: 'Yoğun Kentsel Doku',
        description:
          'Ankrajlı iksa, komşu yapı monitörleri ve gece–gündüz denetim ile güvenli kazı ve inşaat.',
      },
      {
        title: 'Yüksek İmar Hakları',
        description:
          'Merkez ilçelerde yüksek imar hakkını en verimli şekilde kullanarak konforlu yaşam alanları.',
      },
      {
        title: 'Deprem Yönetmeliğine Uyum',
        description:
          'TBDY 2018 uyumlu tasarım ve mevcut yapılar için güçlendirme çözümleri.',
      },
    ],
    faq: [
      {
        q: 'İstanbul\'da hangi ilçelerde çalışıyorsunuz?',
        a: 'Ataşehir, Kadıköy, Ümraniye, Pendik, Sancaktepe, Şişli, Beşiktaş, Kartal, Tuzla, Bakırköy başta olmak üzere tüm İstanbul\'da hizmet vermekteyiz.',
      },
      {
        q: 'Kentsel dönüşüm süreçlerini yönetiyor musunuz?',
        a: 'Evet, risk raporundan yeniden inşaya kadar tüm süreç Ocean İnşaat tarafından yönetilir.',
      },
    ],
    featuredProjectSlugs: [
      'sancaktepe-atak-apartmani-1',
      'kadikoy-merdivenkoy-okay-apartmani',
      'quattro-istanbul-serifali',
    ],
  },
  {
    slug: 'kocaeli-insaat-firmasi',
    city: 'Kocaeli',
    district: 'Genel',
    title: 'Kocaeli İnşaat Firması',
    heroDescription:
      'Sanayi ve konut projeleri için Kocaeli\'ye özel çözümler ve deneyimli ekipler.',
    intro:
      'Ocean İnşaat, Kocaeli\'nde fabrika, üretim tesisi, konut ve kentsel dönüşüm projeleri yürütmektedir. Bölgeye özgü zemin koşulları ve organize sanayi bölgelerine yönelik altyapı deneyimi ile yatırımcılara güvenilir bir çözüm ortağı sunar.',
    focusAreas: [
      'Fabrika İnşaatı',
      'Çelik Konstrüksiyon',
      'Endüstriyel Altyapı',
      'Konut İnşaatı',
      'Kentsel Dönüşüm',
    ],
    highlights: [
      {
        title: 'Endüstriyel Deneyim',
        description: 'Gebze, Dilovası ve Çayırova\'da tamamlanmış üretim tesisi projeleri.',
      },
      {
        title: 'OSB Uyumu',
        description: 'Organize sanayi bölgelerindeki tüm yönetmelik ve altyapı gerekliliklerine hakim ekipler.',
      },
      {
        title: 'Hızlı Devreye Alma',
        description: 'Çelik konstrüksiyon ile kısa sürede işletmeye alınan büyük açıklıklı yapılar.',
      },
    ],
    faq: [
      {
        q: 'Gebze OSB\'de proje yürütüyor musunuz?',
        a: 'Evet, Gebze başta olmak üzere Dilovası ve Çayırova OSB bölgelerinde üretim tesisi projelerimiz mevcuttur.',
      },
      {
        q: 'Konut projeleri de yapıyor musunuz?',
        a: 'İzmit ve Gölcük başta olmak üzere Kocaeli genelinde kentsel dönüşüm ve konut projeleri yürütmekteyiz.',
      },
    ],
    featuredProjectSlugs: ['petrol-is-sendikasi-gebze-subesi'],
  },
  {
    slug: 'pendik-insaat-firmasi',
    city: 'İstanbul',
    district: 'Pendik',
    title: 'Pendik İnşaat Firması',
    heroDescription:
      'Pendik\'te konut, kentsel dönüşüm ve cephe yenileme projeleri için deneyimli ekipler.',
    intro:
      'Ocean İnşaat, Pendik ilçesinde bulunan siteler, apartmanlar ve kentsel dönüşüm parselleri için özel çözümler sunmaktadır. Site yönetimleri ile birlikte yürüttüğümüz cephe yenileme projeleri ilçedeki en yaygın hizmetlerimizden biridir.',
    focusAreas: [
      'Cephe Yenileme',
      'Mantolama',
      'Kentsel Dönüşüm',
      'Kat Karşılığı İnşaat',
      'Bina Güçlendirme',
    ],
    highlights: [
      {
        title: 'Pendik Deneyimi',
        description: 'İlçedeki farklı mahallelerde tamamlanmış çok sayıda cephe ve mantolama projesi.',
      },
      {
        title: 'Site Yönetimi Uyumu',
        description: 'Site yönetimleri ile şeffaf işbirliği ve düzenli raporlama.',
      },
      {
        title: 'Hızlı Teslim',
        description: 'Blok bazlı iş programı ile kısa sürede tamamlanan uygulamalar.',
      },
    ],
    faq: [
      {
        q: 'Pendik\'te hangi hizmetler öne çıkıyor?',
        a: 'Cephe yenileme, mantolama, kentsel dönüşüm ve kat karşılığı inşaat en yaygın taleplerdir.',
      },
    ],
    featuredProjectSlugs: [],
  },
  {
    slug: 'sancaktepe-insaat-firmasi',
    city: 'İstanbul',
    district: 'Sancaktepe',
    title: 'Sancaktepe İnşaat Firması',
    heroDescription:
      'Sancaktepe\'de villa, konut ve kat karşılığı projeleri için güvenilir çözüm ortağı.',
    intro:
      'Sancaktepe\'nin gelişen dokusunda villa, müstakil konut ve kat karşılığı projeleri için Ocean İnşaat deneyimli ekipleri ile çalışmaktadır. Ferah parseller üzerinde tasarlanan projelerde arazi topoğrafyası ve manzara açısı özenle değerlendirilir.',
    focusAreas: [
      'Villa İnşaatı',
      'Kat Karşılığı İnşaat',
      'Konut İnşaatı',
      'Peyzaj',
      'Anahtar Teslim İnşaat',
    ],
    highlights: [
      {
        title: 'Villa Uzmanlığı',
        description: 'Kişiye özel villa projelerinde konsept, uygulama ve peyzaj bütünlüğü.',
      },
      {
        title: 'Arazi Analizi',
        description: 'Sancaktepe\'nin eğimli parsellerine uygun statik ve mimari çözümler.',
      },
    ],
    faq: [
      {
        q: 'Sancaktepe\'de villa inşa ediyor musunuz?',
        a: 'Evet, tekli ve çoklu villa projelerimiz mevcuttur.',
      },
    ],
    featuredProjectSlugs: ['sancaktepe-atak-apartmani-1'],
  },
  {
    slug: 'umraniye-insaat-firmasi',
    city: 'İstanbul',
    district: 'Ümraniye',
    title: 'Ümraniye İnşaat Firması',
    heroDescription:
      'Ümraniye\'de ofis, ticari yapı ve kentsel dönüşüm projeleri için deneyimli ekipler.',
    intro:
      'Ümraniye, İstanbul\'un Anadolu yakasında finans ve teknoloji şirketlerinin yoğunlaştığı bir merkezdir. Ocean İnşaat bölgede ofis, ticari yapı ve kentsel dönüşüm projelerinde faaliyet göstermektedir.',
    focusAreas: ['Ticari Yapı İnşaatı', 'Ofis Tadilatı', 'Kentsel Dönüşüm', 'Anahtar Teslim İnşaat'],
    highlights: [
      {
        title: 'Ticari Deneyim',
        description: 'Teknoloji ve finans şirketlerine yönelik büyük ölçekli ticari yapılar.',
      },
      {
        title: 'Karma Kullanım',
        description: 'Konut ve ticari fonksiyonların bir arada çözüldüğü karma projeler.',
      },
    ],
    faq: [
      {
        q: 'Ümraniye\'de ofis binası inşa ediyor musunuz?',
        a: 'Evet, Ümraniye Teknoloji Vadisi ve çevresinde ofis ve karma kullanım projeleri geliştirdik.',
      },
    ],
    featuredProjectSlugs: ['quattro-istanbul-serifali'],
  },
  {
    slug: 'gebze-insaat-firmasi',
    city: 'Kocaeli',
    district: 'Gebze',
    title: 'Gebze İnşaat Firması',
    heroDescription:
      'Gebze\'de endüstriyel yapı, lojistik depo ve konut projeleri için özel çözümler.',
    intro:
      'Gebze\'de sanayi ve konut projelerinde deneyimli ekiplerimizle üretim tesisi, lojistik depo, ofis ve konut projeleri yürütmekteyiz. OSB uyumu ve hızlı devreye alma odaklı iş programlarımızla sanayi yatırımcılarına güvenilir bir çözüm ortağıyız.',
    focusAreas: ['Fabrika İnşaatı', 'Çelik Konstrüksiyon', 'Endüstriyel Altyapı', 'Konut İnşaatı'],
    highlights: [
      {
        title: 'OSB Deneyimi',
        description: 'Gebze OSB projelerinde altyapı ve tesisat çözümlerinde yetkinlik.',
      },
      {
        title: 'Lojistik Depo',
        description: 'Yüksek dikey depolama sistemleri için hassas endüstriyel zeminler.',
      },
    ],
    faq: [
      {
        q: 'Gebze\'de üretim tesisi inşa ediyor musunuz?',
        a: 'Evet, farklı sektörler için üretim tesisi ve lojistik depo projelerimiz bulunmaktadır.',
      },
    ],
    featuredProjectSlugs: ['petrol-is-sendikasi-gebze-subesi'],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}
