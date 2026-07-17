import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Counter } from '@/components/shared/Counter';
import { Reveal } from '@/components/shared/Reveal';
import { statistics } from '@/data/statistics';

const introImage =
  'https://images.unsplash.com/photo-1590845947676-fa2f0c88e1c9?auto=format&fit=crop&w=1600&q=85';

export function Intro() {
  return (
    <section id="kurumsal-giris" className="section bg-offwhite relative">
      <div className="container-wide">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16 items-start">
          <div className="md:col-span-6 lg:col-span-7 space-y-8">
            <Reveal>
              <div className="eyebrow">Kurumsal</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-balance">
                Yapının Her Aşamasında <span className="italic text-ocean-700">Güvenilir Çözüm</span> Ortağınız
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-charcoal-600 md:text-lg text-pretty">
                Ocean İnşaat; arsa analizi ve teknik fizibiliteden başlayarak projelendirme, ruhsat, uygulama, teslim ve
                satış sonrası destek dahil yapının tüm ömrünü tek çatı altında yönetir. Her projede güvenli mühendislik,
                düzenli raporlama ve zamanında teslim şeklinde tanımladığımız üç prensipten ödün vermeyiz.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-charcoal-600 md:text-lg text-pretty">
                Konut ve villa projelerinden fabrika ve karma kullanımlı yapılara kadar geniş bir portföyde; şeffaf iş
                programı, bütçe disiplini ve yüksek uygulama standartlarıyla değer üretiriz.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <Link href="/kurumsal" className="btn-outline">
                <span>Kurumsal Kimliğimizi İnceleyin</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-6 lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={introImage}
                  alt="Ocean İnşaat şantiye görünümü"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-charcoal-950/10" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-6 text-xs uppercase tracking-ultra-wide text-charcoal-500">
                Şantiyeden görüntü — Ataşehir Blue Residence
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2} className="mt-20 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 border-t border-charcoal-200 pt-14">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-5xl md:text-6xl text-charcoal-950">
                  <Counter value={stat.value} suffix={stat.suffix ?? ''} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-ultra-wide text-charcoal-500">{stat.label}</div>
                {stat.description && (
                  <p className="mt-2 text-sm text-charcoal-500 max-w-[24ch]">{stat.description}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
