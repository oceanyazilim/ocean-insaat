'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const desktopVideo = '/videos/ocean-header.mp4';
const mobileVideo = '/videos/ocean-header-mobile.mp4';
const posterImage = '/images/projects/bodrum-gumusluk-vernus-villalari/bodrum-gumusluk-vernus-villalari-01.jpeg';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.load();
  }, [isMobile]);

  const videoSrc = isMobile ? mobileVideo : desktopVideo;
  const showVideo = !shouldReduceMotion && isMobile !== null;

  return (
    <section className="relative w-full text-white overflow-hidden" style={{ minHeight: '100svh' }}>
      <div className="absolute inset-0">
        <Image
          src={posterImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />

        {showVideo && (
          <video
            ref={videoRef}
            key={videoSrc}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              videoReady ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterImage}
            aria-hidden="true"
            onCanPlay={() => setVideoReady(true)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/55 via-charcoal-950/45 to-charcoal-950/75" />
        <div className="absolute inset-0 blueprint-bg opacity-25" aria-hidden />
      </div>

      <div className="relative container-wide flex flex-col pt-32 md:pt-40 pb-16" style={{ minHeight: '100svh' }}>
        <motion.div
          className="eyebrow text-white/80"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
        >
          <span>Ocean İnşaat</span>
        </motion.div>

        <motion.h1
          className="mt-6 max-w-5xl text-white text-balance"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={1}
        >
          Güvenle İnşa Ediyor, <br className="hidden md:block" />
          <span className="italic text-ocean-100">Geleceği</span> Şekillendiriyoruz
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-lg md:text-xl text-white/85 text-pretty"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={2}
        >
          Ocean İnşaat; konut, ticari yapı, endüstriyel tesis, enerji, renovasyon ve anahtar teslim projelerde
          planlamadan uygulamaya kadar profesyonel çözümler sunar.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={3}
        >
          <Link
            href="/projeler"
            className="btn bg-white text-charcoal-900 hover:bg-ocean-50 justify-center sm:justify-between min-w-[220px]"
          >
            <span>Projelerimizi İnceleyin</span>
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </Link>
          <Link
            href="/iletisim?form=teklif"
            className="btn border border-white/40 text-white hover:bg-white/10 justify-center sm:justify-between min-w-[220px]"
          >
            <span>Teklif Talep Edin</span>
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </Link>
        </motion.div>

        <motion.div
          className="mt-auto flex items-center justify-between border-t border-white/15 pt-8 gap-8"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={4}
        >
          <div className="hidden md:grid grid-cols-3 gap-10 text-white/80">
            <HeroStat value="10+" label="Yıllık Deneyim" />
            <HeroStat value="50+" label="Tamamlanan Proje" />
            <HeroStat value="100+" label="Mutlu Müşteri" />
          </div>

          <a
            href="#kurumsal-giris"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-ultra-wide text-white/80"
          >
            <span>Keşfetmek için kaydırın</span>
            <span className="flex h-9 w-9 items-center justify-center border border-white/30 group-hover:bg-white/10 transition">
              <ArrowDown className="h-4 w-4" strokeWidth={1.6} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl">{value}</div>
      <div className="text-xs uppercase tracking-ultra-wide mt-1 text-white/60">{label}</div>
    </div>
  );
}
