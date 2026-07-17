'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { faqs } from '@/data/faq';
import { faqJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/shared/JsonLd';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-offwhite">
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="Sık Sorulan Sorular"
              title="Süreç Öncesi Merak Ettikleriniz"
              description="Farklı proje türleri için en çok sorulan sorulara net cevaplar. Aradığınızı bulamazsanız iletişim formundan bize ulaşabilirsiniz."
            />
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-charcoal-200 border-y border-charcoal-200">
              {faqs.map((item, index) => {
                const open = openIndex === index;
                return (
                  <Reveal as="li" key={item.q} delay={index * 0.02}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="w-full flex items-start justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-base md:text-lg text-charcoal-950 flex gap-4">
                        <span className="text-charcoal-400 text-sm mt-0.5 tabular-nums w-6">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{item.q}</span>
                      </span>
                      <span className="flex h-8 w-8 flex-none items-center justify-center border border-charcoal-300 mt-0.5">
                        {open ? <Minus className="h-3.5 w-3.5" strokeWidth={1.6} /> : <Plus className="h-3.5 w-3.5" strokeWidth={1.6} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pl-10 pr-16"
                        >
                          <p className="pb-6 text-charcoal-600 text-pretty">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
