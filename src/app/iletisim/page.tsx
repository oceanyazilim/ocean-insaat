import { Suspense } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { ContactForm } from '@/components/contact/ContactForm';
import { siteConfig, whatsappUrl } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'İletişim',
  description:
    'Ocean İnşaat ile iletişime geçin. Telefon, e-posta, WhatsApp ve online form aracılığıyla ücretsiz teklif ve keşif talep edin.',
  path: '/iletisim',
  keywords: ['ocean inşaat iletişim', 'inşaat teklif', 'inşaat firması iletişim'],
});

const image =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Projenizi Konuşalım"
        description="Sorunuza en kısa sürede yanıt verebilmemiz için lütfen aşağıdaki formu doldurun veya doğrudan telefon ile bize ulaşın."
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'İletişim', href: '/iletisim' },
        ]}
        image={image}
      />

      <section className="section bg-offwhite">
        <div className="container-wide grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5 space-y-8">
            <SectionHeader eyebrow="Bize Ulaşın" title="İletişim Kanallarımız" />

            <div className="space-y-6">
              <ContactCell icon={Phone} label="Telefon" value={siteConfig.contact.phoneDisplay} href={siteConfig.contact.phoneHref} />
              <ContactCell icon={Mail} label="E-Posta" value={siteConfig.contact.email} href={siteConfig.contact.emailHref} />
              <ContactCell icon={MapPin} label="Adres" value={siteConfig.contact.address} href={siteConfig.contact.mapsUrl} />
              <ContactCell icon={Clock} label="Çalışma Saatleri" value={
                <div className="space-y-1">
                  {siteConfig.contact.workingHours.map((h) => (
                    <div key={h.label} className="text-sm">
                      <span className="text-charcoal-500">{h.label}:</span> {h.value}
                    </div>
                  ))}
                </div>
              } />
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] hover:bg-[#20BA5A] text-white w-full justify-center"
            >
              WhatsApp ile İletişime Geç
            </a>

            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden border border-charcoal-100">
                <iframe
                  title="Ocean İnşaat konum haritası"
                  src={`https://maps.google.com/maps?q=${siteConfig.contact.coordinates.lat},${siteConfig.contact.coordinates.lng}&z=13&output=embed`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <SectionHeader eyebrow="Teklif Formu" title="Projenizin Detaylarını Paylaşın" />
            <div className="mt-10 bg-white border border-charcoal-100 p-6 md:p-8">
              <Suspense fallback={<div className="text-charcoal-500 text-sm">Form yükleniyor…</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCell({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 flex-none items-center justify-center border border-charcoal-200 text-ocean-700">
        <Icon className="h-5 w-5" strokeWidth={1.4} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500">{label}</div>
        <div className="mt-1 text-charcoal-900">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block hover:text-ocean-700 transition-colors">
      {inner}
    </a>
  ) : (
    inner
  );
}
