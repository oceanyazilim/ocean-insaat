import { PageHero } from '@/components/shared/PageHero';
import { LegalContent } from '@/components/legal/LegalContent';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'KVKK Aydınlatma Metni',
  description:
    'Ocean İnşaat KVKK aydınlatma metni: Kişisel verilerin işlenmesi hakkında bilgilendirme.',
  path: '/kvkk-aydinlatma-metni',
});

export default function KvkkPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="KVKK Aydınlatma Metni"
        description="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanan aydınlatma metnimiz."
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'KVKK Aydınlatma Metni', href: '/kvkk-aydinlatma-metni' },
        ]}
      />
      <LegalContent
        sections={[
          {
            title: '1. Veri Sorumlusu',
            body: '6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında Ocean İnşaat Taahhüt ve Ticaret veri sorumlusu sıfatıyla hareket etmektedir.',
          },
          {
            title: '2. İşlenen Kişisel Veri Kategorileri',
            body: 'Kimlik, iletişim, müşteri işlem, pazarlama, işlem güvenliği ve talep/şikayet bilgileri gibi kategoriler kapsamındaki kişisel veriler işlenmektedir.',
          },
          {
            title: '3. Kişisel Verilerin İşlenme Amaçları',
            body: 'Verileriniz; hizmet sunumu, sözleşme süreçleri, iletişim, yasal yükümlülüklerin yerine getirilmesi ve iş sürekliliğinin sağlanması amaçlarıyla işlenir.',
          },
          {
            title: '4. Aktarım',
            body: 'Kişisel veriler; yasal zorunluluk hâlinde yetkili kamu kurumlarına, hizmetin sunulması için gerekli olduğunda tedarikçilere ve iş ortaklarına aktarılabilir.',
          },
          {
            title: '5. Haklarınız',
            body: 'KVKK\'nın 11. maddesi kapsamında; verilerin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, silinmesini veya yok edilmesini isteme gibi haklara sahipsiniz.',
          },
          {
            title: '6. Başvuru',
            body: 'Haklarınızı kullanmak için info@oceaninsaat.com.tr adresine yazılı olarak başvurabilirsiniz.',
          },
        ]}
      />
    </>
  );
}
