import { PageHero } from '@/components/shared/PageHero';
import { LegalContent } from '@/components/legal/LegalContent';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Çerez Politikası',
  description: 'Ocean İnşaat internet sitesinde kullanılan çerezler hakkında bilgilendirme.',
  path: '/cerez-politikasi',
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="Çerez Politikası"
        description="Sitemizde kullanılan çerezler ve bunların işlevleri hakkında bilgi alın."
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Çerez Politikası', href: '/cerez-politikasi' },
        ]}
      />
      <LegalContent
        sections={[
          {
            title: '1. Çerez Nedir?',
            body: 'Çerezler; internet sitesini ziyaret ettiğinizde tarayıcınıza yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, siteyi kullanım deneyiminizi iyileştirmek için kullanılır.',
          },
          {
            title: '2. Kullanılan Çerez Türleri',
            body: 'Sitemizde zorunlu çerezler, performans çerezleri ve tercih çerezleri kullanılabilir. Zorunlu çerezler sitenin çalışması için gereklidir ve devre dışı bırakılamaz.',
          },
          {
            title: '3. Çerezlerin Yönetimi',
            body: 'Tarayıcı ayarlarınızdan çerezleri kabul edebilir, engelleyebilir veya silebilirsiniz. Çerezleri engellemeniz halinde site fonksiyonları kısıtlanabilir.',
          },
          {
            title: '4. Üçüncü Taraf Çerezler',
            body: 'Google Analytics, Google Maps ve benzer üçüncü taraf hizmetlerin kullandığı çerezler için ilgili hizmet sağlayıcıların çerez politikaları geçerlidir.',
          },
        ]}
      />
    </>
  );
}
