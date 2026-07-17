export type BlogCategory =
  | 'insaat-rehberi'
  | 'kat-karsiligi'
  | 'kentsel-donusum'
  | 'dis-cephe'
  | 'tadilat'
  | 'yapi-guclendirme'
  | 'mimari'
  | 'yalitim'
  | 'insaat-maliyetleri'
  | 'mevzuat';

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  categoryLabel: string;
  publishedAt: string;
  readingMinutes: number;
  excerpt: string;
  cover: string;
  keywords: string[];
  content: Array<
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'h3'; text: string }
    | { type: 'ul'; items: string[] }
    | { type: 'quote'; text: string }
  >;
}

export const blogCategoryLabels: Record<BlogCategory, string> = {
  'insaat-rehberi': 'İnşaat Rehberi',
  'kat-karsiligi': 'Kat Karşılığı',
  'kentsel-donusum': 'Kentsel Dönüşüm',
  'dis-cephe': 'Dış Cephe',
  'tadilat': 'Tadilat',
  'yapi-guclendirme': 'Yapı Güçlendirme',
  'mimari': 'Mimari',
  'yalitim': 'Yalıtım',
  'insaat-maliyetleri': 'İnşaat Maliyetleri',
  'mevzuat': 'Mevzuat ve Süreçler',
};

const stock = {
  guide: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
  urban: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=1600&q=80',
  facade: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80',
  strengthen: 'https://images.unsplash.com/photo-1590845947676-fa2f0c88e1c9?auto=format&fit=crop&w=1600&q=80',
  cost: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
  contract: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'anahtar-teslim-insaat-nedir',
    title: 'Anahtar Teslim İnşaat Nedir? Kapsamı ve Süreci',
    category: 'insaat-rehberi',
    categoryLabel: 'İnşaat Rehberi',
    publishedAt: '2025-04-14',
    readingMinutes: 8,
    excerpt:
      'Anahtar teslim inşaat; projeden ruhsata, kaba yapıdan teslime kadar tüm sürecin tek çatı altında yönetildiği bir modeldir.',
    cover: stock.guide,
    keywords: ['anahtar teslim inşaat', 'anahtar teslim müteahhit', 'inşaat süreci'],
    content: [
      {
        type: 'p',
        text: 'Anahtar teslim inşaat, mimari–statik–mekanik–elektrik projelendirmeden başlayarak ruhsat işlemleri, kaba yapı, ince işler, cephe, peyzaj ve teslim aşamalarının tek bir sözleşme kapsamında yönetildiği bir hizmet modelidir. Mal sahibi tek bir muhataba karşı sorumludur ve süreç boyunca tüm risk müteahhit tarafında kalır.',
      },
      { type: 'h2', text: 'Anahtar teslim inşaat neleri kapsar?' },
      {
        type: 'ul',
        items: [
          'Arsa analizi ve fizibilite raporu',
          'Mimari, statik ve tesisat projeleri',
          'Ruhsat ve iskân süreçleri',
          'Kaba yapı, ince işler, cephe ve peyzaj',
          'Anahtar teslimi ve satış sonrası destek',
        ],
      },
      { type: 'h2', text: 'Avantajları nelerdir?' },
      {
        type: 'p',
        text: 'Tek muhatap üzerinden yürütülen süreç, hem koordinasyon karmaşasını ortadan kaldırır hem de bütçe ve süre disiplinini artırır. Deneyimli bir firmayla çalışılması hâlinde tedarik risklerinin büyük bölümü de müteahhit tarafında kalır.',
      },
      { type: 'h2', text: 'Sözleşmede dikkat edilmesi gerekenler' },
      {
        type: 'ul',
        items: [
          'Ayrıntılı teknik şartname',
          'İş programı ve süre',
          'Ödeme planı',
          'Değişiklik yönetimi maddeleri',
          'Garanti ve satış sonrası destek',
        ],
      },
      {
        type: 'quote',
        text: 'Anahtar teslim inşaatı diğer modellerden ayıran şey; sürecin başında bütçe, süre ve kalitenin birlikte tanımlanmasıdır.',
      },
    ],
  },
  {
    slug: 'kat-karsiligi-insaat-sozlesmesi',
    title: 'Kat Karşılığı İnşaat Sözleşmesinde Nelere Dikkat Edilmeli?',
    category: 'kat-karsiligi',
    categoryLabel: 'Kat Karşılığı',
    publishedAt: '2025-03-22',
    readingMinutes: 10,
    excerpt:
      'Kat karşılığı inşaat sözleşmesi, arsa sahibi ile müteahhidin karşılıklı yükümlülüklerini belirleyen kritik bir belgedir.',
    cover: stock.contract,
    keywords: ['kat karşılığı sözleşme', 'arsa payı karşılığı inşaat', 'müteahhit sözleşmesi'],
    content: [
      {
        type: 'p',
        text: 'Kat karşılığı inşaat sözleşmeleri, Türk Borçlar Kanunu ve Tapu Kanunu düzenlemeleri gereği noter huzurunda düzenlenmelidir. Sözleşmenin şeffaf ve dengeli olması hem arsa sahibinin hem de müteahhidin haklarını güvence altına alır.',
      },
      { type: 'h2', text: 'Sözleşmede olması gereken maddeler' },
      {
        type: 'ul',
        items: [
          'Arsa ve müteahhit payı oranı',
          'Teslim edilecek daireler ve nitelikleri',
          'İş programı ve teslim süresi',
          'Gecikme cezası',
          'Malzeme kalitesi ve teknik şartname',
          'İskân ve tapu devir süreçleri',
        ],
      },
      { type: 'h2', text: 'Pay dağılımı nasıl belirlenir?' },
      {
        type: 'p',
        text: 'Pay dağılımı; arsa değeri, imar hakları, inşaat maliyeti ve bölgedeki satış rayiçleri üzerinden yapılan fizibilite analizi ile belirlenir. Adil pay dağılımı, sürecin başarısı için kritik önem taşır.',
      },
      { type: 'h2', text: 'Anlaşmazlıkları önlemenin yolları' },
      {
        type: 'ul',
        items: [
          'Ayrıntılı teknik şartname eklenmesi',
          'İş programına uyum takibi',
          'Değişiklik taleplerinin yazılı yönetimi',
          'Bağımsız denetim ve raporlama',
        ],
      },
    ],
  },
  {
    slug: 'dis-cephe-mantolama-avantajlari',
    title: 'Dış Cephe Mantolama Binaya Ne Kazandırır?',
    category: 'dis-cephe',
    categoryLabel: 'Dış Cephe',
    publishedAt: '2025-02-05',
    readingMinutes: 6,
    excerpt:
      'Doğru uygulanan mantolama; enerji tasarrufu, iç mekân konforu ve binaya değer katma anlamına gelir.',
    cover: stock.facade,
    keywords: ['mantolama', 'ısı yalıtımı', 'enerji tasarrufu'],
    content: [
      {
        type: 'p',
        text: 'Mantolama uygulaması; binanın dış cephesine ısı yalıtım levhalarının uygulanması ve üzerinin fileli sıva ile kaplanması esasına dayanır. Bu sayede kışın sıcak, yazın serin bir iç mekân sağlanır.',
      },
      { type: 'h2', text: 'Mantolamanın avantajları' },
      {
        type: 'ul',
        items: [
          'Yakıt tüketiminde %25\'e varan tasarruf',
          'Küf ve rutubet oluşumunun engellenmesi',
          'Binaya değer katan estetik yüzey',
          'Karbon ayak izinin azalması',
        ],
      },
      { type: 'h2', text: 'Yalıtım kalınlığı nasıl belirlenir?' },
      {
        type: 'p',
        text: 'Türkiye\'de TS 825 standardına göre iklim bölgesi haritası bulunmaktadır. Bulunulan iklim bölgesine göre yalıtım kalınlığı belirlenir; İstanbul, Kocaeli gibi bölgelerde çoğunlukla 5 cm kalınlık yeterli olurken daha soğuk bölgelerde 8–10 cm önerilir.',
      },
    ],
  },
  {
    slug: 'bina-guclendirme-sureci',
    title: 'Bina Güçlendirme Süreci Nasıl İlerler?',
    category: 'yapi-guclendirme',
    categoryLabel: 'Yapı Güçlendirme',
    publishedAt: '2025-01-18',
    readingMinutes: 9,
    excerpt:
      'Güçlendirme süreci; röleve, performans analizi, projelendirme ve uygulama aşamalarından oluşur.',
    cover: stock.strengthen,
    keywords: ['bina güçlendirme', 'deprem güçlendirme', 'performans analizi'],
    content: [
      {
        type: 'p',
        text: 'Bina güçlendirme; mevcut yapının deprem yönetmeliği kapsamında incelenmesi ve gerekli görülen bölgelerde donatı, perde veya kuşaklama sistemleriyle iyileştirilmesi anlamına gelir.',
      },
      { type: 'h2', text: 'Aşamalar' },
      {
        type: 'ul',
        items: [
          'Röleve ve mevcut proje incelemesi',
          'Zemin ve karot testleri',
          'TBDY 2018\'e göre performans analizi',
          'Güçlendirme projesinin hazırlanması',
          'Uygulama ve son test',
        ],
      },
      { type: 'h2', text: 'Yaygın güçlendirme yöntemleri' },
      {
        type: 'ul',
        items: [
          'Kolon mantolama',
          'Perde ekleme',
          'Karbon fiber uygulaması',
          'Çelik kuşaklama',
          'Temel takviyesi',
        ],
      },
    ],
  },
  {
    slug: 'insaat-maliyeti-hesaplama',
    title: 'İnşaat Maliyeti Hesaplanırken Hangi Kalemler Kullanılır?',
    category: 'insaat-maliyetleri',
    categoryLabel: 'İnşaat Maliyetleri',
    publishedAt: '2024-12-04',
    readingMinutes: 7,
    excerpt:
      'İnşaat maliyeti; işçilik, malzeme, ekipman, yönetim ve genel giderlerden oluşan çok kalemli bir bütçedir.',
    cover: stock.cost,
    keywords: ['inşaat maliyeti', 'metrekare maliyet', 'bütçe hesaplama'],
    content: [
      {
        type: 'p',
        text: 'İnşaat maliyeti kaba yapı, ince işler, tesisatlar ve dış işler olmak üzere temel kalemlere ayrılır. Her kalem içinde işçilik, malzeme, ekipman ve genel giderler yer alır.',
      },
      { type: 'h2', text: 'Ana maliyet kalemleri' },
      {
        type: 'ul',
        items: [
          'Hafriyat ve iksa',
          'Betonarme kaba yapı',
          'Cephe ve yalıtım',
          'Sıva, boya, seramik ve parke',
          'Elektrik ve mekanik tesisat',
          'Peyzaj ve dış işler',
        ],
      },
      { type: 'h2', text: 'Doğru bütçe için önemli ipuçları' },
      {
        type: 'ul',
        items: [
          'Detaylı teknik şartname hazırlanması',
          'Malzeme markalarının belirlenmesi',
          'Beklenmeyen giderler için %5–8 pay ayrılması',
          'Piyasa dalgalanmaları için sözleşmede madde eklenmesi',
        ],
      },
    ],
  },
  {
    slug: 'kentsel-donusum-arsa-sahibi',
    title: 'Kentsel Dönüşüm Sürecinde Arsa Sahiplerinin Bilmesi Gerekenler',
    category: 'kentsel-donusum',
    categoryLabel: 'Kentsel Dönüşüm',
    publishedAt: '2024-11-19',
    readingMinutes: 11,
    excerpt:
      '6306 sayılı Kanun kapsamında yürütülen kentsel dönüşüm süreçlerinde arsa sahiplerinin hakları ve yükümlülükleri.',
    cover: stock.urban,
    keywords: ['kentsel dönüşüm', '6306 sayılı kanun', 'kira yardımı'],
    content: [
      {
        type: 'p',
        text: '6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun kapsamında yürütülen kentsel dönüşüm süreçleri; riskli yapı tespiti ile başlayıp yeni yapıların inşası ve tapu tescili ile sonuçlanır.',
      },
      { type: 'h2', text: 'Süreç adımları' },
      {
        type: 'ul',
        items: [
          'Bakanlık lisanslı kurumdan risk raporu alınması',
          'Riskli yapı tebligatı',
          'Anlaşma ve yıkım süreci',
          'Yeniden inşa süreci',
          'İskân ve tapu tescili',
        ],
      },
      { type: 'h2', text: 'Hak sahiplerinin destekleri' },
      {
        type: 'ul',
        items: [
          'Kira yardımı',
          'Yıkım desteği',
          'Yeniden inşa kredisi',
          'Harç muafiyetleri',
        ],
      },
    ],
  },
  {
    slug: 'ic-mekan-tadilat-ipuclari',
    title: 'İç Mekân Tadilatı Öncesi Bilmeniz Gereken 10 Şey',
    category: 'tadilat',
    categoryLabel: 'Tadilat',
    publishedAt: '2024-10-11',
    readingMinutes: 6,
    excerpt:
      'İç mekân tadilatı öncesinde plan, bütçe ve malzeme seçimi için pratik bir kontrol listesi.',
    cover: stock.guide,
    keywords: ['iç mekan tadilatı', 'ev tadilatı', 'tadilat rehberi'],
    content: [
      { type: 'p', text: 'Doğru planlanan bir tadilat; hem yaşam kalitesini artırır hem de yatırım değerini yükseltir.' },
      { type: 'h2', text: 'Öncelikli 10 madde' },
      {
        type: 'ul',
        items: [
          'İhtiyaç ve amacın net tanımlanması',
          'Bütçe için %10 esneklik payı',
          'Malzeme marka ve modelinin belirlenmesi',
          'Yönetim ve komşu bilgilendirmeleri',
          'Elektrik ve tesisat altyapısının kontrolü',
          'Su yalıtımının kontrol edilmesi',
          'Doğal aydınlatma ve havalandırmanın önceliklendirilmesi',
          'Depolama alanlarının planlanması',
          'İş güvenliği tedbirleri',
          'Teslim sonrası bakım planı',
        ],
      },
    ],
  },
  {
    slug: 'yapinin-enerji-kimlik-belgesi',
    title: 'Enerji Kimlik Belgesi ve Yapı Enerji Sınıfı',
    category: 'yalitim',
    categoryLabel: 'Yalıtım',
    publishedAt: '2024-09-02',
    readingMinutes: 5,
    excerpt:
      'Enerji Kimlik Belgesi, yapının enerji tüketim özelliklerini ve karbon salınımını belgeleyen zorunlu bir dokümandır.',
    cover: stock.facade,
    keywords: ['enerji kimlik belgesi', 'BEP-TR', 'yalıtım'],
    content: [
      {
        type: 'p',
        text: 'Yapı Sahibi ve yatırımcılar için Enerji Kimlik Belgesi (EKB), yapının enerji verimliliğini gösteren en önemli belgelerden biridir.',
      },
      { type: 'h2', text: 'Neden önemlidir?' },
      {
        type: 'ul',
        items: [
          'Yasal zorunluluk',
          'Enerji tasarrufu göstergesi',
          'Bina satış ve kiralamada rekabet avantajı',
          'Karbon ayak izi hesaplamalarında kullanım',
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
