'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const testimonial = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Müşteri Yorumları"
          title="Sürecin Sonunda Kalıcı Bir Güven"
          description="Bireysel müşterilerden site yönetimlerine, arsa sahiplerinden kurumsal yatırımcılara farklı taraflarla çalıştık. Onların anlatımıyla Ocean İnşaat deneyimi."
        />

        <div className="mt-12 relative border border-charcoal-100 p-6 md:p-14 min-h-[280px]">
          <Quote className="absolute top-6 right-6 h-16 w-16 text-ocean-100" strokeWidth={1} />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <p className="font-display text-2xl md:text-3xl text-charcoal-950 text-balance">
                &ldquo;{testimonial.comment}&rdquo;
              </p>
              <footer className="mt-8">
                <div className="text-sm font-medium text-charcoal-900">{testimonial.name}</div>
                <div className="text-sm text-charcoal-500">
                  {testimonial.role} · {testimonial.location}
                </div>
                {testimonial.projectSlug && (
                  <Link
                    href={`/projeler/${testimonial.projectSlug}`}
                    className="mt-3 inline-block text-xs uppercase tracking-ultra-wide text-ocean-700 hover:text-ocean-800 link-underline"
                  >
                    İlgili projeyi incele
                  </Link>
                )}
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between">
            <div className="tabular-nums text-sm text-charcoal-500">
              {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Önceki yorum"
                onClick={() => go(-1)}
                className="h-10 w-10 border border-charcoal-200 flex items-center justify-center hover:bg-charcoal-950 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
              </button>
              <button
                type="button"
                aria-label="Sonraki yorum"
                onClick={() => go(1)}
                className="h-10 w-10 border border-charcoal-200 flex items-center justify-center hover:bg-charcoal-950 hover:text-white transition-colors"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
