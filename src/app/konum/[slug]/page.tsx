import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { CTASection } from '@/components/shared/CTASection';
import { JsonLd } from '@/components/shared/JsonLd';
import { getLocationBySlug, locations } from '@/data/locations';
import { getProjectBySlug } from '@/data/projects';
import { services } from '@/data/services';
import { buildMetadata, faqJsonLd, localBusinessJsonLd } from '@/lib/seo';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props) {
  const loc = getLocationBySlug(params.slug);
  if (!loc) return {};
  return buildMetadata({
    title: loc.title,
    description: loc.heroDescription,
    path: `/konum/${loc.slug}`,
    keywords: [loc.title, `${loc.city} inşaat firması`, `${loc.district} müteahhit`],
  });
}

const image =
  'https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=2400&q=85';

export default function LocationPage({ params }: Props) {
  const loc = getLocationBySlug(params.slug);
  if (!loc) return notFound();

  const featuredServices = services.filter((s) => loc.focusAreas.some((f) => f.toLocaleLowerCase('tr') === s.title.toLocaleLowerCase('tr')));

  const featuredProjects = loc.featuredProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <JsonLd data={[localBusinessJsonLd(loc.city), faqJsonLd(loc.faq)]} />

      <PageHero
        eyebrow={`${loc.city} · ${loc.district}`}
        title={loc.title}
        description={loc.heroDescription}
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Konum', href: `/konum/${loc.slug}` },
          { name: loc.title, href: `/konum/${loc.slug}` },
        ]}
        image={image}
      />

      <section className="section bg-offwhite">
        <div className="container-wide grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7 space-y-6">
            <Reveal>
              <div className="eyebrow">Bölge</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-balance">Ocean İnşaat {loc.city} {loc.district !== 'Genel' ? loc.district : ''}</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-charcoal-600 md:text-lg text-pretty">{loc.intro}</p>
            </Reveal>
          </div>
          <div className="md:col-span-5 space-y-6">
            <Reveal>
              <div className="border-l-2 border-ocean-700 pl-4">
                <div className="eyebrow">Bölgesel Odak</div>
                <ul className="mt-3 space-y-2 text-charcoal-800">
                  {loc.focusAreas.map((f) => (
                    <li key={f}>· {f}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Bölgesel Deneyim"
            title={`${loc.city} bölgesinde neden Ocean İnşaat?`}
          />
          <div className="mt-14 grid gap-px bg-charcoal-100 border border-charcoal-100 md:grid-cols-3">
            {loc.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.03}>
                <div className="bg-offwhite p-8 h-full">
                  <div className="text-xs uppercase tracking-ultra-wide text-charcoal-400">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-4 text-xl text-charcoal-950">{h.title}</h3>
                  <p className="mt-3 text-sm text-charcoal-600">{h.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {featuredServices.length > 0 && (
        <section className="section bg-offwhite">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Odaklandığımız Hizmetler"
              title={`${loc.city}'te Sunduğumuz Başlıklar`}
            />
            <div className="mt-14 grid gap-px bg-charcoal-100 border border-charcoal-100 md:grid-cols-2 lg:grid-cols-3">
              {featuredServices.slice(0, 6).map((s) => (
                <Reveal key={s.slug}>
                  <Link href={`/hizmetler/${s.slug}`} className="block bg-white p-8 h-full hover:bg-offwhite transition-colors">
                    <h3 className="text-xl text-charcoal-950">{s.title}</h3>
                    <p className="mt-3 text-sm text-charcoal-600 line-clamp-3">{s.intro}</p>
                    <div className="mt-4 text-xs uppercase tracking-ultra-wide text-ocean-700">Detay →</div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredProjects.length > 0 && (
        <section className="section bg-white">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Referans Projeler"
              title={`${loc.city} bölgesinde tamamladığımız projeler`}
            />
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {featuredProjects.map((p) => p && (
                <Reveal key={p.slug}>
                  <Link href={`/projeler/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={p.coverImage} alt={p.coverAlt} fill sizes="30vw" className="object-cover group-hover:scale-[1.05] transition-transform duration-[1200ms]" />
                    </div>
                    <div className="mt-5">
                      <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500">
                        {p.location}
                      </div>
                      <div className="mt-2 text-lg text-charcoal-950 group-hover:text-ocean-700 transition-colors">
                        {p.title}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-offwhite">
        <div className="container-wide grid gap-12 md:grid-cols-2">
          <SectionHeader eyebrow="Sık Sorulan" title={`${loc.city} bölgesinde sık sorulanlar`} />
          <div>
            <ul className="divide-y divide-charcoal-200 border-y border-charcoal-200">
              {loc.faq.map((item) => (
                <li key={item.q} className="py-5">
                  <div className="font-medium text-charcoal-950">{item.q}</div>
                  <p className="mt-2 text-charcoal-600">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection eyebrow="İletişim" title={`${loc.city} bölgesindeki projeniz için bize ulaşın.`} />
    </>
  );
}
