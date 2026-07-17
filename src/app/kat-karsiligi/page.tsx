import Link from 'next/link';
import { ArrowRight, Check, ScrollText, FileSignature, Ruler, Building2, KeyRound, Handshake } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { CTASection } from '@/components/shared/CTASection';
import { services } from '@/data/services';
import { buildMetadata, faqJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/shared/JsonLd';

export const metadata = buildMetadata({
  title: 'Kat Karşılığı İnşaat',
  description:
    'Arsanızı Ocean İnşaat ile kat karşılığı modelinde değerlendirin. Şeffaf pay dağılımı, noter onaylı sözleşme ve anahtar teslim güvencesi.',
  path: '/kat-karsiligi',
  keywords: ['kat karşılığı inşaat', 'kat karşılığı müteahhit', 'arsa payı karşılığı inşaat', 'kentsel dönüşüm'],
});

const service = services.find((s) => s.slug === 'kat-karsiligi-insaat');

const image =
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=85';

const highlights = [
  { icon: ScrollText, title: 'Arsa ve İmar Analizi', description: 'İmar durumu, çekme mesafeleri ve TAKS/KAKS analizleri.' },
  { icon: Ruler, title: 'Fizibilite Çalışması', description: 'Pay dağılım simülasyonu ve maliyet-değer karşılaştırması.' },
  { icon: FileSignature, title: 'Noter Onaylı Sözleşme', description: 'Tüm süreç hukuki güvence altında ilerler.' },
  { icon: Building2, title: 'Kaba Yapı ve İnce İşler', description: 'Deprem yönetmeliğine uygun kaliteli uygulama.' },
  { icon: KeyRound, title: 'Anahtar Teslim', description: 'İskân ve tapu süreçleri dahil eksiksiz teslim.' },
  { icon: Handshake, title: 'Satış Sonrası Destek', description: 'Garanti kapsamında teknik ve idari destek.' },
];

export default function KatKarsiligiPage() {
  return (
    <>
      <PageHero
        eyebrow="Kat Karşılığı İnşaat"
        title="Arsanızı Güvenli ve Değerli Bir Yatırıma Dönüştürün"
        description="Şeffaf pay dağılımı, noter onaylı sözleşme ve anahtar teslim güvencesi ile kat karşılığı süreci Ocean İnşaat çatısı altında."
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Kat Karşılığı', href: '/kat-karsiligi' },
        ]}
        image={image}
      />

      {service && <JsonLd data={faqJsonLd(service.faq)} />}

      <section className="section bg-offwhite">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Kat Karşılığı Süreci"
            title="Doğru Ortakla Riski Azaltın, Değeri Artırın"
            description="Ocean İnşaat, arsanızın maksimum değerine ulaşması için imar hakkını en verimli şekilde kullanır. Sürecin her aşaması sizin için tanımlı, izlenebilir ve yazılıdır."
          />
          <div className="mt-14 grid gap-px bg-charcoal-100 border border-charcoal-100 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.03}>
                <div className="bg-white p-8 h-full flex flex-col gap-6">
                  <div className="flex h-12 w-12 items-center justify-center border border-charcoal-200 text-ocean-700">
                    <item.icon className="h-5 w-5" strokeWidth={1.4} />
                  </div>
                  <div>
                    <h3 className="text-xl text-charcoal-950">{item.title}</h3>
                    <p className="mt-3 text-charcoal-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="Süreç Adımları"
              title="Görüşmeden Tapu Devrine"
            />
          </div>
          <div className="md:col-span-7">
            {service && (
              <ol className="space-y-6">
                {service.stages.map((stage, i) => (
                  <Reveal key={stage.title} as="li" delay={i * 0.03}>
                    <div className="grid grid-cols-[64px,1fr] gap-6 items-start border-t border-charcoal-200 pt-6">
                      <div className="font-display text-3xl text-ocean-700 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <div className="text-lg text-charcoal-950">{stage.title}</div>
                        <p className="mt-2 text-charcoal-600">{stage.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            )}
          </div>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container-wide grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Neden Ocean İnşaat?"
              title="Arsanız İçin En İyi Çözüm Ortağı"
            />
            <ul className="mt-10 space-y-4">
              {service?.advantages.map((adv) => (
                <li key={adv} className="flex items-start gap-3 text-charcoal-800">
                  <span className="flex h-6 w-6 flex-none items-center justify-center border border-ocean-700 text-ocean-700 mt-0.5">
                    <Check className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="Uygun Arsalar" title="Kat Karşılığı İçin Doğru Parseller" />
            <ul className="mt-10 space-y-4">
              {service?.suitableFor.map((s) => (
                <li key={s} className="flex items-start gap-3 text-charcoal-800">
                  <span className="flex h-6 w-6 flex-none items-center justify-center border border-charcoal-300 text-charcoal-600 mt-0.5">
                    ·
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link href="/iletisim?form=kat-karsiligi" className="btn-primary">
                <span>Arsanızı Değerlendirelim</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection eyebrow="Kat Karşılığı" title="Arsanızın Değerini Birlikte Ortaya Çıkaralım" />
    </>
  );
}
