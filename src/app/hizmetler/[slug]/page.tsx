import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { ServiceIcon } from '@/components/shared/ServiceIcon';
import { CTASection } from '@/components/shared/CTASection';
import { JsonLd } from '@/components/shared/JsonLd';
import { getServiceBySlug, services } from '@/data/services';
import { projects } from '@/data/projects';
import { buildMetadata, faqJsonLd, serviceJsonLd } from '@/lib/seo';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: `${service.tagline} ${service.intro}`,
    path: `/hizmetler/${service.slug}`,
    keywords: service.keywords,
  });
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  const related = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean)
    .slice(0, 3);

  const relatedProjects = projects
    .filter((p) =>
      (p.services ?? []).some((s) =>
        s.toLocaleLowerCase('tr').includes(service.shortTitle.toLocaleLowerCase('tr'))
      )
    )
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ title: service.title, description: service.intro, slug: service.slug }),
          faqJsonLd(service.faq),
        ]}
      />

      <PageHero
        eyebrow="Hizmet"
        title={service.title}
        description={service.tagline}
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Hizmetler', href: '/hizmetler' },
          { name: service.shortTitle, href: `/hizmetler/${service.slug}` },
        ]}
      />

      <section className="section bg-offwhite">
        <div className="container-wide grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="flex h-16 w-16 items-center justify-center border border-charcoal-200 text-ocean-700 bg-white">
                <ServiceIcon icon={service.icon} className="h-6 w-6" />
              </div>
              <div className="eyebrow">Genel Bakış</div>
              <p className="text-charcoal-600 text-pretty">{service.intro}</p>
              <Link href="/iletisim?form=teklif" className="btn-primary w-full justify-between">
                <span>Bu Hizmet İçin Teklif Al</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </Link>
            </div>
          </div>
          <div className="md:col-span-8 space-y-10">
            <Reveal>
              <p className="text-lg text-charcoal-800 text-pretty">{service.description}</p>
            </Reveal>

            <DetailBlock title="Kapsam">
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.scope.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-charcoal-700">
                    <Check className="h-4 w-4 mt-1 text-ocean-700" strokeWidth={2} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="Uygulama Aşamaları">
              <ol className="space-y-4">
                {service.stages.map((stage, i) => (
                  <li key={stage.title} className="border-l-2 border-ocean-700 pl-4">
                    <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500">
                      Aşama {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="mt-1 text-lg text-charcoal-950">{stage.title}</div>
                    <p className="mt-1 text-charcoal-600 text-sm">{stage.description}</p>
                  </li>
                ))}
              </ol>
            </DetailBlock>

            <DetailBlock title="Kullanılan Malzeme ve Yöntemler">
              <ul className="flex flex-wrap gap-2">
                {service.materials.map((m) => (
                  <li
                    key={m}
                    className="border border-charcoal-200 px-3 py-1.5 text-sm text-charcoal-700 bg-white"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="Avantajlar">
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.advantages.map((adv) => (
                  <li key={adv} className="flex items-start gap-3 text-charcoal-700">
                    <Check className="h-4 w-4 mt-1 text-ocean-700" strokeWidth={2} />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="Uygun Proje Türleri">
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.suitableFor.map((s) => (
                  <li key={s} className="text-charcoal-700 border-t border-charcoal-200 pt-3">
                    · {s}
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="Sık Sorulan Sorular">
              <ul className="divide-y divide-charcoal-200 border-y border-charcoal-200">
                {service.faq.map((item) => (
                  <li key={item.q} className="py-4">
                    <div className="font-medium text-charcoal-950">{item.q}</div>
                    <p className="mt-2 text-charcoal-600">{item.a}</p>
                  </li>
                ))}
              </ul>
            </DetailBlock>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-white">
          <div className="container-wide">
            <SectionHeader eyebrow="İlgili Hizmetler" title="Beraberinde Değerlendirebileceğiniz Diğer Hizmetler" />
            <div className="mt-12 grid gap-px bg-charcoal-100 border border-charcoal-100 md:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r!.slug} delay={i * 0.05}>
                  <Link
                    href={`/hizmetler/${r!.slug}`}
                    className="block bg-offwhite p-8 h-full hover:bg-white transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center border border-charcoal-200 text-ocean-700">
                      <ServiceIcon icon={r!.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-xl text-charcoal-950">{r!.title}</h3>
                    <p className="mt-3 text-sm text-charcoal-600 line-clamp-3">{r!.intro}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="section bg-offwhite">
          <div className="container-wide">
            <SectionHeader eyebrow="Referans Projeler" title={`${service.shortTitle} Kapsamında Tamamlanan Projeler`} />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {relatedProjects.map((p) => (
                <Reveal key={p.slug}>
                  <Link href={`/projeler/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={p.coverImage}
                        alt={p.coverAlt}
                        fill
                        sizes="(min-width: 768px) 30vw, 90vw"
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="mt-5">
                      <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500">
                        {p.location}
                      </div>
                      <div className="mt-2 text-lg text-charcoal-950">{p.title}</div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection eyebrow="Teklif Al" title={`${service.shortTitle} için hemen teklif alın.`} />
    </>
  );
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div>
        <div className="eyebrow mb-6">{title}</div>
        {children}
      </div>
    </Reveal>
  );
}
