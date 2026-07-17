export interface Advantage {
  title: string;
  description: string;
  icon:
    | 'shield'
    | 'clock'
    | 'award'
    | 'users'
    | 'hard-hat'
    | 'wallet'
    | 'file-text'
    | 'clipboard-list'
    | 'life-buoy'
    | 'scroll';
}

export const advantages: Advantage[] = [
  {
    title: 'Şeffaf Proje Yönetimi',
    description:
      'Her fazda düzenli raporlama, açık maliyet takibi ve müşteri ile paylaşılan iş programı.',
    icon: 'file-text',
  },
  {
    title: 'Zamanında Teslim',
    description:
      'İş programına uyum için sahadaki her disiplin haftalık olarak takip edilir.',
    icon: 'clock',
  },
  {
    title: 'Kaliteli Malzeme Kullanımı',
    description:
      'Sözleşme ile teknik şartnamede net şekilde belirtilen marka ve model kalitesi.',
    icon: 'award',
  },
  {
    title: 'Uzman Teknik Kadro',
    description:
      'İnşaat mühendisi, mimar ve saha teknisyenlerinden oluşan güçlü ekip.',
    icon: 'users',
  },
  {
    title: 'İş Güvenliği Standartları',
    description:
      'Yönetmeliklere uygun kişisel koruyucu donanım, eğitim ve saha denetimi.',
    icon: 'hard-hat',
  },
  {
    title: 'Bütçe Kontrolü',
    description:
      'Kalem bazlı bütçe takibi ile öngörülebilir maliyet ve şeffaf raporlama.',
    icon: 'wallet',
  },
  {
    title: 'Detaylı Sözleşme Süreci',
    description:
      'Kapsam, süre ve kaliteyi ayrıntılı tanımlayan sözleşmeler.',
    icon: 'scroll',
  },
  {
    title: 'Düzenli Proje Raporlaması',
    description:
      'Fotoğraflı haftalık ilerleme raporları ve düzenli müşteri toplantıları.',
    icon: 'clipboard-list',
  },
  {
    title: 'Satış Sonrası Destek',
    description:
      'Teslim sonrası bakım, teknik destek ve garanti kapsamındaki müdahaleler.',
    icon: 'life-buoy',
  },
  {
    title: 'Mevzuata Uygun Uygulama',
    description:
      'İmar, iş sağlığı ve güvenliği, deprem yönetmeliği ve enerji verimliliği mevzuatlarına tam uyum.',
    icon: 'shield',
  },
];
