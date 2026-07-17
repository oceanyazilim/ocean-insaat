import { PageHero } from '@/components/shared/PageHero';
import { CTASection } from '@/components/shared/CTASection';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Projelerimiz',
  description:
    'Ocean İnşaat tarafından Türkiye genelinde tamamlanan konut, villa, ticari, endüstriyel, enerji, turizm ve kurumsal projelerin listesi.',
  path: '/projeler',
  keywords: [
    'inşaat projeleri',
    'ocean inşaat referansları',
    'konut projeleri',
    'endüstriyel projeler',
    'GES projesi',
    'villa projesi',
  ],
});

const heroImage =
  '/images/projects/bodrum-gumusluk-vernus-villalari/bodrum-gumusluk-vernus-villalari-01.jpeg';

export default function ProjectsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Projelerimiz"
        title="Türkiye'nin Dört Bir Yanında Yükselen Yapılar"
        description="Konut, villa, ticari yapı, endüstriyel tesis, enerji ve turizm başlıklarında Ocean İnşaat portföyünü keşfedin."
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Projeler', href: '/projeler' },
        ]}
        image={heroImage}
        imageAlt="Bodrum Gümüşlük Vernus Villaları projesinin havadan görünümü"
      />

      <section className="section bg-offwhite">
        <div className="container-wide">
          <ProjectsGrid />
        </div>
      </section>

      <CTASection eyebrow="Referans" title="Sıradaki Referans Sizin Projeniz Olsun" />
    </>
  );
}
