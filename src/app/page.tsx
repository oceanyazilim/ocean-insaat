import { Hero } from '@/components/home/Hero';
import { Intro } from '@/components/home/Intro';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { WhyOcean } from '@/components/home/WhyOcean';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { KatKarsiligi } from '@/components/home/KatKarsiligi';
import { BeforeAfter } from '@/components/home/BeforeAfter';
import { QualitySafety } from '@/components/home/QualitySafety';
import { Testimonials } from '@/components/home/Testimonials';
import { FAQ } from '@/components/home/FAQ';
import { BlogPreview } from '@/components/home/BlogPreview';
import { CTASection } from '@/components/shared/CTASection';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: '/',
  keywords: [
    'inşaat firması',
    'anahtar teslim inşaat',
    'kat karşılığı inşaat',
    'müteahhitlik firması',
    'dış cephe firması',
    'İstanbul inşaat firması',
    'Kocaeli inşaat firması',
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyOcean />
      <ProcessTimeline />
      <KatKarsiligi />
      <BeforeAfter />
      <QualitySafety />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <CTASection />
    </>
  );
}
