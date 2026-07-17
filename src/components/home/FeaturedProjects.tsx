'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { getFeaturedProjects, projectCategories, type ProjectCategory } from '@/data/projects';
import { cn } from '@/lib/utils';

type Filter = 'Tümü' | ProjectCategory;

const filters: Filter[] = ['Tümü', ...projectCategories];

export function FeaturedProjects() {
  const [active, setActive] = useState<Filter>('Tümü');
  const featured = useMemo(() => getFeaturedProjects(), []);

  const visible = useMemo(() => {
    if (active === 'Tümü') return featured;
    return featured.filter((p) => p.categories.includes(active));
  }, [active, featured]);

  return (
    <section className="section bg-offwhite">
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeader
              eyebrow="Öne Çıkan Projelerimiz"
              title="Türkiye'nin Farklı Bölgelerinde Tamamlanan Projeler"
              description="Konut, villa, endüstriyel yapı, enerji ve ticari projelerimizden seçilmiş referanslar. Tüm portföy için proje sayfasını inceleyebilirsiniz."
            />
          </div>
          <Reveal className="md:col-span-4 flex md:justify-end" delay={0.15}>
            <Link href="/projeler" className="btn-outline">
              <span>Tüm Projeleri İnceleyin</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                'text-sm px-3 py-1.5 border transition-colors',
                active === filter
                  ? 'bg-charcoal-950 text-white border-charcoal-950'
                  : 'border-charcoal-200 text-charcoal-700 hover:border-charcoal-950'
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              >
                <Link
                  href={`/projeler/${project.slug}`}
                  className="group block relative overflow-hidden bg-white"
                  aria-label={`${project.title} projesini incele`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.coverAlt}
                      fill
                      sizes="(min-width: 768px) 45vw, 90vw"
                      className="object-cover transition-transform duration-[1200ms] ease-quart-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/10 to-transparent" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-ultra-wide">
                      {project.categories.slice(0, 2).map((c) => (
                        <span key={c} className="bg-white/95 text-charcoal-900 px-2 py-1">
                          {c}
                        </span>
                      ))}
                      {project.status && (
                        <span className="bg-ocean-700 text-white px-2 py-1">{project.status}</span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl text-charcoal-950">{project.title}</h3>
                        <div className="mt-2 text-sm text-charcoal-500 uppercase tracking-ultra-wide">
                          {project.location}
                        </div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-charcoal-400 group-hover:text-ocean-700 transition-colors" strokeWidth={1.6} />
                    </div>
                    <p className="mt-4 text-charcoal-600 line-clamp-2 text-sm md:text-base">{project.shortDescription}</p>
                    <div className="mt-4 text-xs uppercase tracking-ultra-wide text-ocean-700 group-hover:text-ocean-800">
                      Projeyi İncele →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visible.length === 0 && (
          <div className="mt-14 border border-dashed border-charcoal-200 p-10 text-center text-charcoal-500">
            Seçilen kategoride öne çıkan proje bulunmuyor.
          </div>
        )}
      </div>
    </section>
  );
}
