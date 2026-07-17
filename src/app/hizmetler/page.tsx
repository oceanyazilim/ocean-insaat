import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { ServiceIcon } from '@/components/shared/ServiceIcon';
import { CTASection } from '@/components/shared/CTASection';
import { services } from '@/data/services';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Hizmetlerimiz',
  description:
    'Ocean İnşaat hizmet kataloğu: anahtar teslim inşaat, kat karşılığı, dış cephe, mantolama, tadilat, bina güçlendirme, kentsel dönüşüm ve daha fazlası.',
  path: '/hizmetler',
  keywords: [
    'inşaat hizmetleri',
    'müteahhitlik hizmetleri',
    'anahtar teslim inşaat',
    'dış cephe',
    'mantolama',
    'bina güçlendirme',
  ],
});

const categories: Array<{ key: string; label: string }> = [
  { key: 'construction', label: 'İnşaat' },
  { key: 'facade', label: 'Cephe ve Yalıtım' },
  { key: 'interior', label: 'İç Mekân' },
  { key: 'infrastructure', label: 'Tesisat ve Altyapı' },
  { key: 'renewal', label: 'Yenileme ve Güçlendirme' },
  { key: 'consulting', label: 'Proje ve Danışmanlık' },
];

const image =
  'https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=2400&q=85';

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Kavramdan Teslime Kadar Her Detay"
        description="Anahtar teslim inşaat, kat karşılığı, dış cephe, tadilat, güçlendirme, kentsel dönüşüm ve proje danışmanlığı hizmetleri tek çatı altında."
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Hizmetler', href: '/hizmetler' },
        ]}
        image={image}
      />

      <section className="section bg-offwhite">
        <div className="container-wide">
          <div className="space-y-24">
            {categories.map((cat) => {
              const items = services.filter((s) => s.category === cat.key);
              if (items.length === 0) return null;
              return (
                <div key={cat.key}>
                  <div className="grid gap-6 md:grid-cols-12 md:items-end mb-10">
                    <div className="md:col-span-6">
                      <SectionHeader eyebrow={cat.label} title={`${cat.label} Hizmetlerimiz`} />
                    </div>
                    <div className="md:col-span-6 md:text-right text-sm text-charcoal-500">
                      {items.length} başlık
                    </div>
                  </div>
                  <div className="grid gap-px bg-charcoal-100 border border-charcoal-100 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((service, i) => (
                      <Reveal key={service.slug} delay={i * 0.03}>
                        <Link
                          href={`/hizmetler/${service.slug}`}
                          className="group flex bg-white p-8 h-full transition-colors hover:bg-offwhite"
                        >
                          <div className="flex flex-col gap-6 w-full">
                            <div className="flex items-start justify-between">
                              <div className="flex h-12 w-12 items-center justify-center border border-charcoal-200 text-ocean-700 group-hover:bg-ocean-700 group-hover:text-white transition-colors">
                                <ServiceIcon icon={service.icon} className="h-5 w-5" />
                              </div>
                              <ArrowUpRight className="h-4 w-4 text-charcoal-300 group-hover:text-ocean-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" strokeWidth={1.6} />
                            </div>
                            <div>
                              <h3 className="text-xl text-charcoal-950">{service.title}</h3>
                              <p className="mt-3 text-sm text-charcoal-600 line-clamp-3">{service.intro}</p>
                            </div>
                          </div>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Hizmetler" title="Aradığınız Hizmete Emin Değil misiniz?" />
    </>
  );
}
