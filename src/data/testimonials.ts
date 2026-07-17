export interface Testimonial {
  name: string;
  role: string;
  location: string;
  comment: string;
  projectSlug?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Aylin K.',
    role: 'Daire Sahibi',
    location: 'Sancaktepe / İstanbul',
    comment:
      'ATAK Apartmanı sürecinde ekiple sık iletişim halinde olduk. Kaba yapıdan teslime kadar iş programı bize açık şekilde paylaşıldı, gecikme yaşamadık.',
    projectSlug: 'sancaktepe-atak-apartmani-1',
  },
  {
    name: 'Mehmet T.',
    role: 'Kadıköy Merdivenköy Sakini',
    location: 'Kadıköy / İstanbul',
    comment:
      'Sıkışık bir cadde üzerinde inşaatın komşu yapıları rahatsız etmeden ilerlemesi çok kıymetliydi. Ocean İnşaat ekibi hem güvenlik hem temizlik konusunda örnek işledi.',
    projectSlug: 'kadikoy-merdivenkoy-okay-apartmani',
  },
  {
    name: 'Selin B.',
    role: 'Villa Sahibi',
    location: 'Bodrum / Muğla',
    comment:
      'Gümüşlük\'teki villa projemizin manzara açılarını ve peyzaj kurgusunu birlikte planladık. Sonuç bekleyişimizin ötesinde oldu.',
    projectSlug: 'bodrum-gumusluk-vernus-villalari',
  },
  {
    name: 'Ercan A.',
    role: 'Endüstriyel Yatırımcı',
    location: 'Malatya',
    comment:
      'Fabrikamızın çatısına yapılan 3,2 MW GES uygulaması hem estetik hem verim açısından beklentilerimizi karşıladı. Süreç profesyonel yönetildi.',
    projectSlug: 'malatya-avrupa-temper-3-2-mw-ges',
  },
  {
    name: 'Deniz Ö.',
    role: 'Fabrika Yatırımcısı',
    location: 'Malatya',
    comment:
      'Genpark Conax üretim tesisimizin cephesi markamızın kimliğini net şekilde yansıtıyor. Uygulama kalitesi ve termin uyumu çok başarılıydı.',
    projectSlug: 'malatya-genpark-conax-fabrikasi',
  },
  {
    name: 'Yaren G.',
    role: 'Endüstriyel Yönetici',
    location: 'Manisa',
    comment:
      'YG-1 CNC üretim tesisimizin altyapı ve iç mekân uygulamaları için Ocean İnşaat ekibiyle çalışmak sorunsuz oldu. Talep ettiğimiz mekanik çözümleri titizlikle uyguladılar.',
    projectSlug: 'manisa-yg-1-cnc-uretim-tesisi',
  },
];
