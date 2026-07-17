'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt: string;
}

export function ProjectGallery({ images, title }: { images: GalleryImage[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const openAt = useCallback((i: number) => setActive(i), []);
  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, close, next, prev]);

  useEffect(() => {
    if (active === null) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      <div className="grid gap-3 md:grid-cols-4">
        {images.map((image, i) => (
          <button
            key={image.src + i}
            type="button"
            className={`relative overflow-hidden group ${i === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-[4/3]'}`}
            onClick={() => openAt(i)}
            aria-label={`Galeri görselini büyüt: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={i === 0 ? '(min-width: 768px) 50vw, 90vw' : '(min-width: 768px) 25vw, 90vw'}
              loading={i < 2 ? 'eager' : 'lazy'}
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
            />
            <span
              className="absolute bottom-3 left-3 bg-white/90 text-charcoal-900 px-2 py-1 text-[10px] uppercase tracking-ultra-wide opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden
            >
              Büyüt
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-charcoal-950/95 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} galeri görüntüleyici`}
            onClick={close}
            onTouchStart={(e) => (touchStartX.current = e.touches[0]?.clientX ?? null)}
            onTouchEnd={(e) => {
              const start = touchStartX.current;
              const end = e.changedTouches[0]?.clientX ?? null;
              if (start === null || end === null) return;
              const delta = end - start;
              if (Math.abs(delta) > 50) {
                if (delta < 0) next();
                else prev();
              }
              touchStartX.current = null;
            }}
          >
            <button
              type="button"
              aria-label="Görüntüleyiciyi kapat"
              className="absolute top-4 right-4 md:top-6 md:right-6 h-11 w-11 border border-white/30 text-white flex items-center justify-center hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              <X className="h-5 w-5" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              aria-label="Önceki görsel"
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 h-11 w-11 border border-white/30 text-white flex items-center justify-center hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              aria-label="Sonraki görsel"
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 h-11 w-11 border border-white/30 text-white flex items-center justify-center hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <ArrowRight className="h-5 w-5" strokeWidth={1.6} />
            </button>
            <div
              className="relative w-full max-w-6xl aspect-[3/2]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active].src}
                alt={images[active].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 text-xs uppercase tracking-ultra-wide">
              <span className="max-w-xs md:max-w-md text-center normal-case tracking-normal text-white/70">
                {images[active].alt}
              </span>
              <span className="tabular-nums">
                {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
