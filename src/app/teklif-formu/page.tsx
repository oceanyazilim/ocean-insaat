import { Suspense } from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Teklif ve Bilgilendirme Formu',
  description: 'Ocean İnşaat teklif ve bilgilendirme formunu doldurarak projeniz için ücretsiz keşif talep edin.',
  path: '/teklif-formu',
});

export default function QuoteFormPage() {
  return (
    <>
      <PageHero
        eyebrow="Teklif"
        title="Teklif ve Bilgilendirme Formu"
        description="Projenizin detaylarını iletin, teknik ekibimiz sizinle iletişime geçsin."
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Teklif Formu', href: '/teklif-formu' },
        ]}
      />
      <section className="section bg-offwhite">
        <div className="container-tight max-w-4xl">
          <SectionHeader eyebrow="Form" title="Projenizin Detaylarını Paylaşın" />
          <div className="mt-10 bg-white border border-charcoal-100 p-6 md:p-8">
            <Suspense fallback={<div className="text-charcoal-500 text-sm">Form yükleniyor…</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
