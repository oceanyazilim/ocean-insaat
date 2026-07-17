import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { processSteps } from '@/data/process';

export function ProcessTimeline() {
  return (
    <section className="section bg-charcoal-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-30" aria-hidden />
      <div className="container-wide relative">
        <SectionHeader
          eyebrow="Çalışma Sürecimiz"
          title="Görüşmeden Teslime Kadar Adım Adım"
          description="Her proje aynı ölçüde planlanır: keşif, projelendirme, sözleşme, uygulama, kontrol ve destek. Her adımda net çıktı ve raporlama sizin için hazır."
          invert
        />

        <div className="mt-16 hidden lg:block">
          <div className="grid grid-cols-9 relative">
            <div className="absolute left-0 right-0 top-8 h-px bg-white/15" />
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05}>
                <div className="relative pt-2 pr-4">
                  <div className="flex items-center gap-3 relative">
                    <span className="relative z-10 flex h-16 w-16 items-center justify-center border border-white/25 bg-charcoal-950 font-display text-2xl">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-white/60">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:hidden space-y-8">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.04}>
              <div className="grid grid-cols-[auto,1fr] gap-6">
                <div className="flex flex-col items-center">
                  <span className="flex h-14 w-14 items-center justify-center border border-white/25 font-display text-xl">
                    {step.number}
                  </span>
                  {i < processSteps.length - 1 && <span className="flex-1 w-px bg-white/15 mt-2" />}
                </div>
                <div className="pb-6">
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="mt-3 text-white/70 text-sm">{step.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {step.outcomes.map((o) => (
                      <li
                        key={o}
                        className="text-[10px] uppercase tracking-ultra-wide border border-white/20 px-2 py-1 text-white/70"
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
