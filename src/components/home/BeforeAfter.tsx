'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';

const items = [
  {
    key: 'facade',
    label: 'Dış Cephe Yenileme',
    before:
      'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?auto=format&fit=crop&w=1600&q=85',
    after:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
    caption: 'Pendik Site Cephe Yenileme',
  },
  {
    key: 'interior',
    label: 'İç Mekân Renovasyon',
    before:
      'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1600&q=85',
    after:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    caption: 'Beşiktaş Butik Otel Renovasyonu',
  },
  {
    key: 'entrance',
    label: 'Apartman Girişi',
    before:
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=1600&q=85',
    after:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    caption: 'Şişli Kurumsal Ofis Tadilatı',
  },
];

export function BeforeAfter() {
  const [active, setActive] = useState(items[0]);

  return (
    <section className="section bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Öncesi & Sonrası"
          title="Dönüşümü Kendiniz Karşılaştırın"
          description="Cephe yenilemesinden iç mekân renovasyonuna kadar tamamladığımız projelerin öncesi ve sonrası karelerini karşılaştırın."
        />

        <Reveal className="mt-12 flex flex-wrap gap-3">
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setActive(item)}
              className={`text-sm px-4 py-2 border transition-colors ${
                active.key === item.key
                  ? 'bg-charcoal-950 text-white border-charcoal-950'
                  : 'border-charcoal-200 text-charcoal-700 hover:border-charcoal-950'
              }`}
            >
              {item.label}
            </button>
          ))}
        </Reveal>

        <Reveal className="mt-10">
          <BeforeAfterSlider before={active.before} after={active.after} caption={active.caption} />
        </Reveal>
      </div>
    </section>
  );
}

function BeforeAfterSlider({ before, after, caption }: { before: string; after: string; caption: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(55);
  const dragging = useRef(false);

  const onMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const rel = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(5, Math.min(95, rel)));
  }, []);

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      onMove(e.clientX);
    };
    const onPointerUp = () => {
      dragging.current = false;
    };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [onMove]);

  return (
    <figure>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] overflow-hidden select-none touch-none"
      >
        <Image src={after} alt={`${caption} — sonrası`} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image src={before} alt={`${caption} — öncesi`} fill sizes="100vw" className="object-cover" />
        </div>

        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs uppercase tracking-ultra-wide">
          Öncesi
        </div>
        <div className="absolute top-4 right-4 bg-charcoal-950/90 text-white px-3 py-1 text-xs uppercase tracking-ultra-wide">
          Sonrası
        </div>

        <div
          className="absolute top-0 bottom-0 w-px bg-white pointer-events-none"
          style={{ left: `${position}%` }}
        />
        <button
          type="button"
          role="slider"
          aria-valuemin={5}
          aria-valuemax={95}
          aria-valuenow={Math.round(position)}
          aria-label="Öncesi ve sonrası karşılaştırma"
          onPointerDown={(e) => {
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            dragging.current = true;
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setPosition((p) => Math.max(5, p - 3));
            if (e.key === 'ArrowRight') setPosition((p) => Math.min(95, p + 3));
          }}
          className="absolute top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white border border-charcoal-200 shadow-lg -translate-x-1/2 cursor-ew-resize flex items-center justify-center"
          style={{ left: `${position}%` }}
        >
          <span className="text-charcoal-800">⇆</span>
        </button>
      </div>
      <figcaption className="mt-3 text-sm text-charcoal-500 uppercase tracking-ultra-wide">{caption}</figcaption>
    </figure>
  );
}
