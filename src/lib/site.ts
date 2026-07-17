export const siteConfig = {
  name: 'Ocean İnşaat',
  legalName: 'Ocean İnşaat Taahhüt ve Ticaret',
  tagline: 'Güvenle İnşa Ediyor, Geleceği Şekillendiriyoruz',
  description:
    'Ocean İnşaat; konut, ticari yapı, dış cephe, renovasyon, güçlendirme ve anahtar teslim projelerde planlamadan uygulamaya kadar profesyonel çözümler sunar.',
  url: 'https://www.oceaninsaat.com.tr',
  locale: 'tr_TR',
  language: 'tr',
  founded: '2014',
  logo: {
    dark: '/assets/logo/OCEAN-BLACK-TRANSPARENT-LOGO.svg',
    light: '/assets/logo/OCEAN-WHITE-TRANSPARENT-LOGO.svg',
  },
  contact: {
    phoneDisplay: '+90 532 766 06 83',
    phoneHref: 'tel:+905327660683',
    whatsappNumber: '905327660683',
    whatsappMessage:
      'Merhaba Ocean İnşaat, projem hakkında bilgi ve teklif almak istiyorum.',
    email: 'info@oceaninsaat.com.tr',
    emailHref: 'mailto:info@oceaninsaat.com.tr',
    address:
      'Merkez Mahallesi, Ocean İnşaat Plaza, No: 1, 34000 Ataşehir / İstanbul',
    addressShort: 'Ataşehir / İstanbul',
    mapsUrl: 'https://maps.google.com/?q=Ata%C5%9Fehir+%C4%B0stanbul',
    workingHours: [
      { label: 'Pazartesi – Cuma', value: '09:00 – 18:30' },
      { label: 'Cumartesi', value: '10:00 – 15:00' },
      { label: 'Pazar', value: 'Kapalı' },
    ],
    coordinates: { lat: 40.9906, lng: 29.1275 },
  },
  social: {
    instagram: 'https://instagram.com/oceaninsaat',
    linkedin: 'https://linkedin.com/company/oceaninsaat',
    youtube: 'https://youtube.com/@oceaninsaat',
    facebook: 'https://facebook.com/oceaninsaat',
    x: 'https://x.com/oceaninsaat',
  },
  legalLinks: [
    { href: '/gizlilik-politikasi', label: 'Gizlilik Politikası' },
    { href: '/cerez-politikasi', label: 'Çerez Politikası' },
    { href: '/kvkk-aydinlatma-metni', label: 'KVKK Aydınlatma Metni' },
    { href: '/kullanim-kosullari', label: 'Kullanım Koşulları' },
    { href: '/teklif-formu', label: 'Teklif ve Bilgilendirme Formu' },
  ],
  navigation: [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/kurumsal', label: 'Kurumsal' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: '/projeler', label: 'Projeler' },
    { href: '/kat-karsiligi', label: 'Kat Karşılığı' },
    { href: '/surec', label: 'Süreç' },
    { href: '/blog', label: 'Blog' },
    { href: '/iletisim', label: 'İletişim' },
  ],
} as const;

export const whatsappUrl = (message?: string) => {
  const text = encodeURIComponent(message ?? siteConfig.contact.whatsappMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
};
