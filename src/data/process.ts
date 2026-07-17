export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  outcomes: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'İlk Görüşme ve İhtiyaç Analizi',
    description:
      'Projenin amacı, beklentileri ve ölçeği hakkında ilk bilgiler alınır; birlikte çalışılıp çalışılamayacağı konusunda ön değerlendirme yapılır.',
    outcomes: ['Proje briefi', 'Kaba bütçe aralığı', 'Ön iş programı'],
  },
  {
    number: '02',
    title: 'Yerinde Keşif',
    description:
      'Teknik ekip arsa veya mevcut yapı üzerinde inceleme yapar; zemin, çevre yapı, altyapı ve imar durumu değerlendirilir.',
    outcomes: ['Keşif raporu', 'Fotoğraflı tespit', 'Ölçüm çıktısı'],
  },
  {
    number: '03',
    title: 'Projelendirme ve Fizibilite',
    description:
      'Mimari, statik, mekanik ve elektrik disiplinleri birlikte çalışır; farklı senaryolar için fizibilite hazırlanır.',
    outcomes: ['Avan proje', 'Kaba metraj', 'Maliyet-değer analizi'],
  },
  {
    number: '04',
    title: 'Bütçe ve Teklif Hazırlığı',
    description:
      'Detaylı teknik şartname üzerinden bütçe kalemleri çıkarılır ve nihai teklif hazırlanır.',
    outcomes: ['Detaylı teklif', 'Ödeme planı', 'Alternatif malzeme seçenekleri'],
  },
  {
    number: '05',
    title: 'Sözleşme ve İş Programı',
    description:
      'Karşılıklı görüşme sonrasında sözleşme imzalanır; iş programı ve kalite planı devreye alınır.',
    outcomes: ['Sözleşme', 'Ayrıntılı iş programı', 'Kalite planı'],
  },
  {
    number: '06',
    title: 'İnşaat ve Uygulama',
    description:
      'Şantiye kurulur; hafriyat, kaba yapı, ince işler, tesisat ve cephe işleri iş programına uygun yürütülür.',
    outcomes: ['Haftalık ilerleme raporu', 'Fotoğraflı takip', 'İş güvenliği raporu'],
  },
  {
    number: '07',
    title: 'Kalite Kontrol',
    description:
      'Her fazda kalite kontrol denetimleri yapılır; malzeme testleri ve saha kontrolleri raporlanır.',
    outcomes: ['Kalite raporları', 'Test sonuçları', 'Kontrol tutanakları'],
  },
  {
    number: '08',
    title: 'Teslim ve Son Kontroller',
    description:
      'Yapı, tesisat ve güvenlik testleri yapılır; eksikler kapatılır ve teslim tutanağı hazırlanır.',
    outcomes: ['Teslim tutanağı', 'İskân dokümanları', 'Kullanım kılavuzları'],
  },
  {
    number: '09',
    title: 'Satış Sonrası Destek',
    description:
      'Garanti süresi boyunca teknik destek sağlanır; periyodik kontroller ve bakım hizmetleri sunulur.',
    outcomes: ['Garanti dokümanı', 'Periyodik bakım planı', 'Teknik destek hattı'],
  },
];
