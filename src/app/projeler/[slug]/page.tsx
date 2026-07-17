import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { CTASection } from '@/components/shared/CTASection';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { JsonLd } from '@/components/shared/JsonLd';
import {
  getProjectBySlug,
  getRelatedProjects,
  isPlaceholder,
  projects,
  type Project,
} from '@/data/projects';
import { siteConfig, whatsappUrl } from '@/lib/site';
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return buildMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/projeler/${project.slug}`,
    image: project.coverImage,
    keywords: [
      project.title,
      `${project.city} inşaat firması`,
      ...project.categories.map((c) => `${c} projesi`),
    ],
  });
}

const inspectPrompt =
  'Merhaba Ocean İnşaat, incelediğim projeye benzer bir çalışma hakkında bilgi ve teklif almak istiyorum.';

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  const related = getRelatedProjects(project, 3);

  const crumbs = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Projeler', href: '/projeler' },
    { name: project.title, href: `/projeler/${project.slug}` },
  ];

  const summaryRows = [
    { label: 'Konum', value: project.location },
    { label: 'Proje Türü', value: project.categories.join(', ') },
    { label: 'Durum', value: project.status },
    { label: 'Başlangıç Yılı', value: project.startYear },
    { label: 'Tamamlanma Yılı', value: project.completionYear },
    { label: 'İnşaat Alanı', value: project.constructionArea },
    { label: 'Kat Sayısı', value: project.floors },
    { label: 'Bağımsız Bölüm', value: project.units },
    { label: 'Müşteri Tipi', value: project.clientType },
  ].filter((row) => !isPlaceholder(row.value) || row.label === 'Konum' || row.label === 'Proje Türü');

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow={project.categories.join(' · ')}
        title={project.title}
        description={project.shortDescription}
        crumbs={crumbs}
        image={project.coverImage}
        imageAlt={project.coverAlt}
      />

      <section className="bg-offwhite">
        <div className="container-wide -mt-24 md:-mt-32 relative z-10">
          <div className="bg-white shadow-lg shadow-black/5">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-charcoal-100">
              <InfoCell label="Konum" value={project.location} />
              <InfoCell label="Kategori" value={project.categories.join(', ')} />
              <InfoCell label="Durum" value={project.status ?? 'Bilgi güncellenecektir'} muted={!project.status} />
              <InfoCell
                label="Şehir"
                value={project.city}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container-wide grid gap-14 md:grid-cols-12">
          <div className="md:col-span-8 space-y-10">
            <Reveal>
              <div className="eyebrow">Proje Hakkında</div>
              <p className="mt-4 text-lg text-charcoal-800 text-pretty">{project.description}</p>
            </Reveal>

            {project.scopeNote && project.scopeNote.trim().length > 0 && (
              <Reveal>
                <div className="border-l-2 border-ocean-700 pl-4">
                  <div className="eyebrow">Ocean İnşaat Kapsamı</div>
                  <p className="mt-3 text-charcoal-700 text-pretty">{project.scopeNote}</p>
                </div>
              </Reveal>
            )}

            {project.services && project.services.length > 0 && (
              <Reveal>
                <div>
                  <div className="eyebrow mb-4">Uygulanabilir Hizmetler</div>
                  <ul className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <li
                        key={service}
                        className="border border-charcoal-200 bg-white px-3 py-1.5 text-sm text-charcoal-700"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-charcoal-500">
                    Bu proje için Ocean İnşaat kapsamına ait detaylı bilgi güncellenecektir.
                  </p>
                </div>
              </Reveal>
            )}
          </div>

          <aside className="md:col-span-4 space-y-8">
            <Reveal>
              <div className="border border-charcoal-100 bg-white p-6 sticky top-28">
                <div className="eyebrow">Proje Özeti</div>
                <ul className="mt-4 divide-y divide-charcoal-100">
                  {summaryRows.map((row) => (
                    <li key={row.label} className="py-3 flex justify-between gap-4 text-sm">
                      <span className="text-charcoal-500 shrink-0">{row.label}</span>
                      <span
                        className={
                          isPlaceholder(row.value)
                            ? 'text-charcoal-400 text-right italic'
                            : 'text-charcoal-900 font-medium text-right'
                        }
                      >
                        {row.value || 'Bilgi güncellenecektir'}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-2">
                  <Link href="/iletisim?form=teklif" className="btn-primary w-full justify-between">
                    <span>Benzer Bir Proje İçin Teklif Alın</span>
                    <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                  </Link>
                  <a
                    href={whatsappUrl(inspectPrompt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn border border-charcoal-200 text-charcoal-900 hover:bg-charcoal-950 hover:text-white w-full justify-between"
                  >
                    <span>WhatsApp&apos;tan Yaz</span>
                    <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-charcoal-100 space-y-2 text-sm text-charcoal-700">
                  <a href={siteConfig.contact.phoneHref} className="flex items-center gap-2 hover:text-ocean-700">
                    <Phone className="h-4 w-4" strokeWidth={1.6} />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                  <a href={siteConfig.contact.emailHref} className="flex items-center gap-2 hover:text-ocean-700">
                    <Mail className="h-4 w-4" strokeWidth={1.6} />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Galeri"
            title="Proje Karelerinden"
            description={`${project.gallery.length} görsel · Her görseli büyütmek için tıklayın.`}
          />
          <div className="mt-10">
            <ProjectGallery images={project.gallery} title={project.title} />
          </div>
        </div>
      </section>

      {related.length > 0 && <RelatedProjects related={related} />}

      <CTASection
        eyebrow="Teklif"
        title="Benzer Bir Proje İçin Teklif Alın"
        description="İncelediğiniz projeye benzer bir çalışma planlıyorsanız Ocean İnşaat teknik ekibi ihtiyaç analizinizi ücretsiz yapar."
        primaryLabel="Ücretsiz Keşif Talep Et"
        primaryHref="/iletisim?form=teklif"
        secondaryLabel="WhatsApp'tan İletişime Geç"
      />
    </>
  );
}

function InfoCell({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="p-6 md:p-8">
      <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500">{label}</div>
      <div className={`mt-2 text-sm md:text-base font-medium ${muted ? 'text-charcoal-400 italic' : 'text-charcoal-900'}`}>
        {value}
      </div>
    </div>
  );
}

function RelatedProjects({ related }: { related: Project[] }) {
  return (
    <section className="section bg-offwhite">
      <div className="container-wide">
        <SectionHeader eyebrow="İlgili Projeler" title="Portföyümüzden Diğer Örnekler" />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {related.map((p) => (
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
  );
}
