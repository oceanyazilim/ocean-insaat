import { PageHero } from '@/components/shared/PageHero';
import { LegalContent } from '@/components/legal/LegalContent';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Gizlilik Politikası',
  description: 'Ocean İnşaat gizlilik politikası ve kullanıcı verilerinin işlenmesine ilişkin ilkeler.',
  path: '/gizlilik-politikasi',
  noIndex: false,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="Gizlilik Politikası"
        description="Ocean İnşaat, kullanıcıların gizliliğine ve kişisel verilerinin korunmasına önem verir."
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
        ]}
      />
      <LegalContent
        sections={[
          {
            title: '1. Amaç',
            body: 'İşbu Gizlilik Politikası; Ocean İnşaat tarafından işletilen internet sitesini ziyaret eden kullanıcıların kişisel verilerinin hangi amaçlarla ve nasıl işlendiğini açıklamak amacıyla hazırlanmıştır.',
          },
          {
            title: '2. Toplanan Bilgiler',
            body: 'Kullanıcıların iletişim formu aracılığıyla paylaştığı ad, soyad, e-posta, telefon, proje türü ve mesaj gibi bilgiler ile site kullanımı sırasında oluşan çerez ve teknik veriler toplanabilir.',
          },
          {
            title: '3. İşleme Amaçları',
            body: 'Toplanan bilgiler; talep edilen hizmetlerin sunulması, teklif hazırlanması, iletişim taleplerinin karşılanması, hizmet kalitesinin artırılması ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir.',
          },
          {
            title: '4. Üçüncü Kişilerle Paylaşım',
            body: 'Kişisel veriler; yalnızca yasal zorunluluk hallerinde veya hizmetin sunulması için gerekli olduğunda, ilgili mevzuat çerçevesinde üçüncü kişilerle paylaşılabilir.',
          },
          {
            title: '5. Kullanıcı Hakları',
            body: 'Kullanıcılar; kişisel verileriyle ilgili KVKK\'nın 11. maddesinde belirtilen hakları info@oceaninsaat.com.tr adresine yazılı olarak başvurarak kullanabilirler.',
          },
          {
            title: '6. Güncellemeler',
            body: 'Ocean İnşaat, işbu Gizlilik Politikasını her zaman güncelleyebilir. Güncel metne her zaman bu sayfadan ulaşılabilir.',
          },
        ]}
      />
    </>
  );
}
