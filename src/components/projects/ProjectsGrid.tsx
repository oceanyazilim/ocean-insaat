'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/shared/Reveal';
import { projects, projectCategories, type ProjectCategory } from '@/data/projects';
import { cn } from '@/lib/utils';

type Filter = 'Tümü' | ProjectCategory;

const filters: Filter[] = ['Tümü', ...projectCategories];

export function ProjectsGrid() {
  const [active, setActive] = useState<Filter>('Tümü');

  const filtered = useMemo(() => {
    if (active === 'Tümü') return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((filter) => {
          const count =
            filter === 'Tümü'
              ? projects.length
              : projects.filter((p) => p.categories.includes(filter)).length;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={cn(
                'text-sm px-4 py-2 border transition-colors flex items-center gap-2',
                active === filter
                  ? 'bg-charcoal-950 text-white border-charcoal-950'
                  : 'border-charcoal-200 text-charcoal-700 hover:border-charcoal-950'
              )}
            >
              <span>{filter}</span>
              <span
                className={cn(
                  'text-[10px] tabular-nums',
                  active === filter ? 'text-white/70' : 'text-charcoal-400'
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
            >
              <Reveal delay={i * 0.02}>
                <Link
                  href={`/projeler/${project.slug}`}
                  className="group block relative overflow-hidden bg-white"
                  aria-label={`${project.title} projesini incele`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.coverAlt}
                      fill
                      sizes="(min-width: 768px) 45vw, 90vw"
                      className="object-cover transition-transform duration-[1200ms] ease-quart-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 to-transparent" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-ultra-wide">
                      {project.categories.map((c) => (
                        <span key={c} className="bg-white/95 text-charcoal-900 px-2 py-1">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h2 className="text-2xl text-charcoal-950">{project.title}</h2>
                        <div className="mt-2 text-sm text-charcoal-500 uppercase tracking-ultra-wide">
                          {project.location}
                        </div>
                      </div>
                      <ArrowUpRight
                        className="h-5 w-5 text-charcoal-300 group-hover:text-ocean-700 transition-colors"
                        strokeWidth={1.6}
                      />
                    </div>
                    <p className="mt-4 text-sm text-charcoal-600 line-clamp-2">{project.shortDescription}</p>
                    <div className="mt-4 text-xs uppercase tracking-ultra-wide text-ocean-700 group-hover:text-ocean-800">
                      Projeyi İncele →
                    </div>
                  </div>
                </Link>
              </Reveal>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="mt-14 border border-dashed border-charcoal-200 p-10 text-center text-charcoal-500">
          Seçilen kategoride proje bulunamadı.
        </div>
      )}
    </div>
  );
}
