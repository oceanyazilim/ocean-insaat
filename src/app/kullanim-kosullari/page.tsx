import { PageHero } from '@/components/shared/PageHero';
import { LegalContent } from '@/components/legal/LegalContent';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Kullanım Koşulları',
  description: 'Ocean İnşaat internet sitesinin kullanımına ilişkin koşullar.',
  path: '/kullanim-kosullari',
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="Kullanım Koşulları"
        description="Sitemizi ziyaret ederek işbu kullanım koşullarını kabul etmiş sayılırsınız."
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Kullanım Koşulları', href: '/kullanim-kosullari' },
        ]}
      />
      <LegalContent
        sections={[
          {
            title: '1. Kapsam',
            body: 'İşbu kullanım koşulları, siteyi ziyaret eden tüm kullanıcılar için geçerlidir. Site kullanımıyla bu koşulları kabul etmiş sayılırsınız.',
          },
          {
            title: '2. Fikri Mülkiyet',
            body: 'Site içeriği, tasarımı, logoları, metinleri ve görselleri Ocean İnşaat\'a aittir. İzinsiz kopyalanamaz, çoğaltılamaz veya dağıtılamaz.',
          },
          {
            title: '3. Sorumluluk Reddi',
            body: 'Ocean İnşaat, site içeriğinin doğruluğunu sağlamak için çaba göstermektedir. Ancak zamanla değişebilecek bilgiler için lütfen doğrudan iletişim kanallarımızı kullanın.',
          },
          {
            title: '4. Uygulanacak Hukuk',
            body: 'İşbu kullanım koşulları Türkiye Cumhuriyeti yasalarına tabidir. İhtilaflarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.',
          },
        ]}
      />
    </>
  );
}
