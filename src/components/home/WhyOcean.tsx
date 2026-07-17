import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { advantages } from '@/data/advantages';
import { AdvantageIcon } from '@/components/shared/AdvantageIcon';

export function WhyOcean() {
  return (
    <section className="section bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Neden Ocean İnşaat?"
          title="Yatırımınızı Güvence Altına Alan On Temel Prensip"
          description="Ocean İnşaat, sözleşmenin ilk gününden teslim sonrasına kadar aynı prensiplerle çalışır. Bu tutarlılık, sizin için öngörülebilir bütçe, süre ve kalite anlamına gelir."
        />

        <div className="mt-16 grid gap-px bg-charcoal-100 border border-charcoal-100 sm:grid-cols-2 lg:grid-cols-5">
          {advantages.map((advantage, i) => (
            <Reveal key={advantage.title} delay={i * 0.03}>
              <div className="bg-offwhite p-6 md:p-8 h-full">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-ultra-wide text-charcoal-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center border border-charcoal-200 text-ocean-700">
                    <AdvantageIcon icon={advantage.icon} className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg md:text-xl text-charcoal-950">{advantage.title}</h3>
                <p className="mt-3 text-sm text-charcoal-600">{advantage.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
