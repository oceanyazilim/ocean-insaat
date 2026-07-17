'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/site';

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    const duration = 900;
    const tick = (t: number) => {
      if (start === null) start = t;
      const elapsed = t - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setVisible(false), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[80] bg-offwhite flex flex-col items-center justify-center"
          aria-hidden="true"
        >
          <Image
            src={siteConfig.logo.dark}
            alt=""
            width={160}
            height={40}
            priority
            className="h-8 w-auto"
          />
          <div className="mt-10 h-px w-64 max-w-[70vw] overflow-hidden bg-charcoal-200">
            <motion.div
              className="h-full bg-ocean-700"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ ease: 'linear' }}
              style={{ transformOrigin: '0% 50%' }}
            />
          </div>
          <div className="mt-4 tabular-nums text-xs tracking-ultra-wide text-charcoal-500">
            %{progress.toString().padStart(3, '0')}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
