export interface TeamMember {
  name: string;
  role: string;
  discipline: string;
}

export const teamMembers: TeamMember[] = [
  { name: 'İnşaat Mühendisleri', role: 'Şantiye ve Proje Yönetimi', discipline: 'İnşaat Mühendisliği' },
  { name: 'Mimarlar', role: 'Konsept ve Uygulama Projeleri', discipline: 'Mimarlık' },
  { name: 'Statik Mühendisleri', role: 'Deprem Yönetmeliği Uyumu', discipline: 'Statik Tasarım' },
  { name: 'Mekanik Mühendisleri', role: 'Isıtma, Soğutma ve Havalandırma', discipline: 'Mekanik Tesisat' },
  { name: 'Elektrik Mühendisleri', role: 'Kuvvetli ve Zayıf Akım', discipline: 'Elektrik Tesisat' },
  { name: 'İş Güvenliği Uzmanları', role: 'Şantiye İSG Denetimi', discipline: 'İş Sağlığı ve Güvenliği' },
  { name: 'Peyzaj Mimarları', role: 'Dış Alan ve Peyzaj Tasarımı', discipline: 'Peyzaj Mimarlığı' },
  { name: 'Kalite Kontrol Uzmanları', role: 'Malzeme ve Uygulama Denetimi', discipline: 'Kalite Kontrol' },
];

export const corporate = {
  mission:
    'Yatırımcılarımıza güvenle inşa edilmiş, uzun ömürlü ve enerji verimli yapılar teslim ederek Türkiye\'nin yapı standartlarının yükselmesine katkı sağlamak.',
  vision:
    'Türkiye genelinde konut, ticari ve endüstriyel projelerde tercih edilen, kalite ve güvenilirlikte referans gösterilen bir müteahhitlik firması olmak.',
  values: [
    'Güven',
    'Kalite',
    'Şeffaflık',
    'Sorumluluk',
    'Yenilikçilik',
    'Sürdürülebilirlik',
    'Zamanında Teslim',
    'Müşteri Memnuniyeti',
  ],
  qualityPolicy:
    'Her fazda malzeme, işçilik ve uygulama kalitesini bağımsız kontrol raporları ile belgeleyen bir yaklaşım benimseriz. Süreç boyunca gelen tüm geri bildirimler kalite sistemimizi geliştirmek için kullanılır.',
  environment:
    'Şantiye çevresinde toz, gürültü ve atık yönetimini yönetmeliklere uygun şekilde yürütür; enerji verimli malzemeleri önceliklendiririz.',
  safety:
    'İş sağlığı ve güvenliği kültürünü tüm ekiplerimize benimseterek sıfır ölümcül kaza hedefiyle çalışırız.',
  capabilities: [
    'BIM tabanlı projelendirme',
    'Zemin ve karot test koordinasyonu',
    'İş programı yazılımları ile takip',
    'ERP entegre satın alma',
    'Şantiye kamera sistemleri',
    'Enerji simülasyonu ve BEP-TR',
  ],
  timeline: [
    { year: '2014', title: 'Ocean İnşaat Kuruldu', description: 'Konut projeleriyle Marmara Bölgesi\'nde faaliyete başladı.' },
    { year: '2016', title: 'Kat Karşılığı Projeler', description: 'Kadıköy ve Ataşehir\'deki kat karşılığı projelerle büyüdü.' },
    { year: '2018', title: 'İlk Endüstriyel Yapı', description: 'Kocaeli\'de ilk fabrika yapısı teslim edildi.' },
    { year: '2020', title: 'Kentsel Dönüşüm', description: 'Riskli yapı raporlu projelerde uçtan uca hizmet başladı.' },
    { year: '2022', title: 'BIM Tabanlı Süreç', description: 'BIM tabanlı projelendirme ve saha entegrasyonu tamamlandı.' },
    { year: '2024', title: 'Karma Kullanım', description: 'Karma kullanımlı büyük ölçekli projelerin yönetimine geçildi.' },
  ],
};
