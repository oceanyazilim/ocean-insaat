import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { CTASection } from '@/components/shared/CTASection';
import { blogPosts, blogCategoryLabels } from '@/data/blog';
import { buildMetadata } from '@/lib/seo';
import { formatDateTr } from '@/lib/utils';

export const metadata = buildMetadata({
  title: 'Blog',
  description:
    'İnşaat rehberleri, kat karşılığı süreçleri, kentsel dönüşüm, dış cephe ve yalıtım konularında güncel içerikler.',
  path: '/blog',
  keywords: ['inşaat blog', 'kat karşılığı rehber', 'kentsel dönüşüm rehber'],
});

const image =
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=85';

export default function BlogIndexPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="İnşaat, Mimari ve Süreç Rehberleri"
        description="Ocean İnşaat teknik ekibi tarafından hazırlanan içerikler ile projelerinizi daha iyi planlayın."
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Blog', href: '/blog' },
        ]}
        image={image}
      />

      <section className="section bg-offwhite">
        <div className="container-wide">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-white border border-charcoal-100"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={featured.cover}
                    alt={featured.title}
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500">
                    <span className="text-ocean-700">{featured.categoryLabel}</span> · {formatDateTr(featured.publishedAt)}
                  </div>
                  <h2 className="mt-4 text-3xl text-charcoal-950 text-balance">{featured.title}</h2>
                  <p className="mt-4 text-charcoal-600 text-pretty">{featured.excerpt}</p>
                  <div className="mt-6 text-sm text-ocean-700">Yazıyı oku →</div>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="mt-14 flex flex-wrap gap-3">
            {Object.entries(blogCategoryLabels).map(([key, label]) => (
              <span
                key={key}
                className="text-xs uppercase tracking-ultra-wide border border-charcoal-200 px-3 py-1.5 text-charcoal-700"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.03}>
                <Link href={`/blog/${post.slug}`} className="group block bg-white border border-charcoal-100 h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 30vw, 90vw"
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500">
                      <span className="text-ocean-700">{post.categoryLabel}</span> · {post.readingMinutes} dk
                    </div>
                    <h3 className="mt-3 text-xl text-charcoal-950 group-hover:text-ocean-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-charcoal-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Blog" title="Blogumuzu Takipte Kalın" description="Yeni içerikler ve rehberler için Ocean İnşaat'ı takip edin." />
    </>
  );
}
