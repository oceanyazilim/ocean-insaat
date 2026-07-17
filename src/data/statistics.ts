export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
  description?: string;
}

export const statistics: Statistic[] = [
  { label: 'Yıllık Sektör Deneyimi', value: 10, suffix: '+', description: 'Türkiye genelinde inşaat ve tadilat projelerinde deneyim.' },
  { label: 'Tamamlanan Proje', value: 50, suffix: '+', description: 'Konut, ticari ve endüstriyel yapı teslimatı.' },
  { label: 'Mutlu Müşteri', value: 100, suffix: '+', description: 'Bireysel ve kurumsal müşteri referansı.' },
  { label: 'Uzman Ekip Üyesi', value: 20, suffix: '+', description: 'Mühendis, mimar ve saha teknisyeni.' },
];
