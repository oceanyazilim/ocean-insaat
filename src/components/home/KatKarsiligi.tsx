import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/shared/Reveal';

const image =
  'https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=1600&q=85';

const items = [
  'Arsa incelemesi ve imar durumu analizi',
  'Fizibilite çalışması ve pay dağılım modeli',
  'Mimari proje geliştirme',
  'Noter onaylı sözleşme',
  'Ruhsat ve yasal süreç yönetimi',
  'İnşaat uygulaması',
  'Anahtar teslim',
  'Tapu ve teslim süreci',
];

export function KatKarsiligi() {
  return (
    <section className="section bg-offwhite">
      <div className="container-wide">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <Reveal>
              <div className="eyebrow">Kat Karşılığı İnşaat</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-balance">
                Arsanızı <span className="italic text-ocean-700">Güvenli</span> ve Değerli Bir Yatırıma Dönüştürün
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-charcoal-600 text-pretty md:text-lg">
                Kat karşılığı inşaat modeliyle arsa sahipleriyle nakit talebi olmadan çalışıyoruz. Süreç noter onaylı
                sözleşme ile başlar; ruhsat, inşaat, iskân ve tapu devri firmamız tarafından tek çatı altında yönetilir.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal-700">
                    <span className="flex h-6 w-6 flex-none items-center justify-center border border-ocean-700 text-ocean-700 mt-0.5">
                      <Check className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link href="/iletisim?form=kat-karsiligi" className="btn-primary">
                  <span>Arsanızı Değerlendirelim</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                </Link>
                <Link href="/kat-karsiligi" className="btn-outline">
                  <span>Süreci İnceleyin</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6 order-1 md:order-2">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image}
                  alt="Kat karşılığı inşaat sürecinden bir görsel"
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal-950/85 to-transparent text-white">
                  <div className="text-xs uppercase tracking-ultra-wide text-white/70">Kat Karşılığı Süreci</div>
                  <div className="mt-2 font-display text-2xl">Noter onaylı sözleşme ile başlar.</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
