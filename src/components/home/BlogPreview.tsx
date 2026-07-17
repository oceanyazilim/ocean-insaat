import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { blogPosts } from '@/data/blog';
import { formatDateTr } from '@/lib/utils';

export function BlogPreview() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeader
              eyebrow="Blog"
              title="İnşaat, Mimari ve Süreç Rehberleri"
              description="Kentsel dönüşümden kat karşılığı sözleşmelerine, mantolamadan bina güçlendirmeye kadar sizi bilgilendiren güncel içerikler."
            />
          </div>
          <Reveal className="md:col-span-4 flex md:justify-end" delay={0.15}>
            <Link href="/blog" className="btn-outline">
              <span>Tüm Yazılar</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {featured.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover transition-transform duration-[1200ms] ease-quart-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-ultra-wide text-charcoal-500">
                    <span className="text-ocean-700">{post.categoryLabel}</span>
                    <span>·</span>
                    <span>{formatDateTr(post.publishedAt)}</span>
                    <span>·</span>
                    <span>{post.readingMinutes} dk okuma</span>
                  </div>
                  <h3 className="mt-4 text-2xl text-charcoal-950 group-hover:text-ocean-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-charcoal-600 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
