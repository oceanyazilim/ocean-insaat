import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { CTASection } from '@/components/shared/CTASection';
import { JsonLd } from '@/components/shared/JsonLd';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { articleJsonLd, buildMetadata } from '@/lib/seo';
import { formatDateTr } from '@/lib/utils';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.cover,
    keywords: post.keywords,
    type: 'article',
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />

      <PageHero
        eyebrow={post.categoryLabel}
        title={post.title}
        description={`${formatDateTr(post.publishedAt)} · ${post.readingMinutes} dakika okuma`}
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
        image={post.cover}
      />

      <article className="section bg-offwhite">
        <div className="container-tight max-w-3xl">
          <Reveal>
            <div className="text-sm text-charcoal-500 uppercase tracking-ultra-wide">
              <span className="text-ocean-700">{post.categoryLabel}</span> · {formatDateTr(post.publishedAt)}
            </div>
          </Reveal>

          <div className="mt-10 space-y-6">
            {post.content.map((block, i) => {
              if (block.type === 'p') {
                return (
                  <Reveal key={i}>
                    <p className="text-lg text-charcoal-800 text-pretty leading-relaxed">{block.text}</p>
                  </Reveal>
                );
              }
              if (block.type === 'h2') {
                return (
                  <Reveal key={i}>
                    <h2 className="text-3xl text-charcoal-950 mt-10">{block.text}</h2>
                  </Reveal>
                );
              }
              if (block.type === 'h3') {
                return (
                  <Reveal key={i}>
                    <h3 className="text-2xl text-charcoal-950 mt-8">{block.text}</h3>
                  </Reveal>
                );
              }
              if (block.type === 'ul') {
                return (
                  <Reveal key={i}>
                    <ul className="space-y-3">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-charcoal-800">
                          <span className="mt-3 h-1.5 w-1.5 flex-none bg-ocean-700 rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                );
              }
              if (block.type === 'quote') {
                return (
                  <Reveal key={i}>
                    <blockquote className="border-l-2 border-ocean-700 pl-6 italic text-xl text-charcoal-900 font-display">
                      {block.text}
                    </blockquote>
                  </Reveal>
                );
              }
              return null;
            })}
          </div>

          <Reveal>
            <div className="mt-14 border-t border-charcoal-200 pt-8 flex flex-wrap gap-2">
              {post.keywords.map((k) => (
                <span key={k} className="text-xs uppercase tracking-ultra-wide border border-charcoal-200 px-3 py-1.5 text-charcoal-600">
                  {k}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section bg-white">
          <div className="container-wide">
            <SectionHeader eyebrow="İlgili Yazılar" title="Bu Kategoride Diğer İçerikler" />
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {related.map((p) => (
                <Reveal key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={p.cover} alt={p.title} fill sizes="30vw" className="object-cover group-hover:scale-[1.05] transition-transform duration-[1200ms]" />
                    </div>
                    <div className="mt-5">
                      <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500">
                        {p.categoryLabel} · {formatDateTr(p.publishedAt)}
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

      <CTASection eyebrow="Yardım" title="Yazıdaki konu hakkında sorularınız mı var?" />
    </>
  );
}
