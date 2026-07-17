import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { CTASection } from '@/components/shared/CTASection';
import { processSteps } from '@/data/process';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Çalışma Süreci',
  description:
    'Ocean İnşaat çalışma süreci: keşif, projelendirme, sözleşme, uygulama, kalite kontrol ve satış sonrası destek başlıklarında adım adım rehber.',
  path: '/surec',
  keywords: ['inşaat süreç', 'çalışma süreci', 'anahtar teslim süreci', 'proje yönetim süreci'],
});

const image =
  'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=2400&q=85';

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Süreç"
        title="Her Projede Aynı Disiplin"
        description="Görüşmeden teslime kadar sürecin her aşaması net tanımlı çıktılara ve raporlamalara sahiptir."
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Süreç', href: '/surec' },
        ]}
        image={image}
      />

      <section className="section bg-offwhite">
        <div className="container-wide">
          <SectionHeader
            eyebrow="9 Adımda Ocean İnşaat"
            title="Doğru Süreç, Öngörülebilir Sonuç"
            description="Her fazın öncesinde ne olacağı ve sonucunda hangi çıktının teslim edileceği bellidir. Bu Ocean İnşaat kültürünün özüdür."
          />

          <ol className="mt-14 space-y-10">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 0.02}>
                <div className="grid gap-8 md:grid-cols-12 border-t border-charcoal-200 pt-10">
                  <div className="md:col-span-3">
                    <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500">Adım {step.number}</div>
                    <div className="mt-3 font-display text-5xl md:text-6xl text-charcoal-950">{step.number}</div>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="text-2xl md:text-3xl text-charcoal-950">{step.title}</h3>
                    <p className="mt-4 text-charcoal-600 md:text-lg text-pretty">{step.description}</p>
                  </div>
                  <div className="md:col-span-3">
                    <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500 mb-3">Çıktılar</div>
                    <ul className="space-y-2">
                      {step.outcomes.map((o) => (
                        <li
                          key={o}
                          className="text-sm text-charcoal-800 border-l border-ocean-700 pl-3"
                        >
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection eyebrow="Süreç" title="Projenizin Süreç Planını Birlikte Oluşturalım" />
    </>
  );
}
