import Image from 'next/image';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { CTASection } from '@/components/shared/CTASection';
import { Counter } from '@/components/shared/Counter';
import { corporate, teamMembers } from '@/data/team';
import { statistics } from '@/data/statistics';
import { buildMetadata } from '@/lib/seo';
import { CheckCircle2 } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Kurumsal',
  description:
    'Ocean İnşaat kurumsal kimliği, misyon ve vizyonu, kalite politikası, teknik kapasitesi ve şirket tarihi hakkında bilgi alın.',
  path: '/kurumsal',
  keywords: ['ocean inşaat kurumsal', 'ocean inşaat hakkında', 'inşaat firması kurumsal'],
});

const coverImage =
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2400&q=85';

export default function CorporatePage() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        title="Sağlam Yapılara Adanmış Bir Ekip"
        description="Ocean İnşaat, mühendislik disiplinlerini teknik yetkinlikle birleştirerek her ölçekte projeyi güvenle üretir."
        crumbs={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Kurumsal', href: '/kurumsal' },
        ]}
        image={coverImage}
      />

      <section className="section bg-offwhite">
        <div className="container-wide grid gap-14 md:grid-cols-12 items-start">
          <div className="md:col-span-6 space-y-6">
            <Reveal>
              <div className="eyebrow">Hakkımızda</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-balance">
                Ocean İnşaat: Marmara Bölgesi&apos;nde <span className="italic text-ocean-700">güvenilir</span> yapı ortağı.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-charcoal-600 md:text-lg text-pretty">
                Ocean İnşaat, konut ve villa projelerinden fabrika ve karma kullanımlı yapılara kadar geniş bir portföyde
                projelendirme, uygulama ve teslim hizmetleri sunar. Merkez ekibimiz mühendis, mimar ve saha teknisyenlerinden
                oluşur; şantiye organizasyonları deneyimli inşaat mühendisleri tarafından yürütülür.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-charcoal-600 md:text-lg text-pretty">
                Yapıya, çevreye, çalışana ve mal sahibine karşı sorumluluğumuz her kararımızda ölçüttür. Şeffaf sözleşme,
                düzenli raporlama, zamanında teslim ve satış sonrası destek Ocean İnşaat kültürünün ayrılmaz parçalarıdır.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1590845947676-fa2f0c88e1c9?auto=format&fit=crop&w=1600&q=85"
                  alt="Ocean İnşaat ekibi şantiyede"
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide grid gap-12 md:grid-cols-3">
          <ValueBlock title="Misyonumuz" body={corporate.mission} />
          <ValueBlock title="Vizyonumuz" body={corporate.vision} />
          <ValueBlock
            title="Değerlerimiz"
            body={corporate.values.join(' · ')}
          />
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Yönetim İlkelerimiz"
            title="Kalite, Çevre ve İş Güvenliği Yaklaşımımız"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <PolicyBlock title="Kalite Politikası" body={corporate.qualityPolicy} />
            <PolicyBlock title="Çevresel Sorumluluk" body={corporate.environment} />
            <PolicyBlock title="İş Güvenliği" body={corporate.safety} />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Teknik Kapasitemiz"
            title="Modern Yazılımlar ve Deneyimli Ekipler"
            description="BIM tabanlı süreç, ERP entegre satın alma ve şantiye kamera altyapıları ile her aşamayı ölçülebilir kılıyoruz."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {corporate.capabilities.map((cap, i) => (
              <Reveal key={cap} delay={i * 0.05}>
                <div className="flex items-start gap-4 border border-charcoal-100 p-6">
                  <CheckCircle2 className="h-6 w-6 text-ocean-700 mt-0.5" strokeWidth={1.4} />
                  <div className="text-charcoal-800">{cap}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-charcoal-950 text-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Ekip Yapımız"
            title="Deneyimli Disiplinler Aynı Çatı Altında"
            invert
          />
          <div className="mt-14 grid gap-px bg-white/10 border border-white/10 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.03}>
                <div className="bg-charcoal-950 p-6">
                  <div className="text-xs uppercase tracking-ultra-wide text-white/60">{m.discipline}</div>
                  <div className="mt-4 font-display text-xl">{m.name}</div>
                  <div className="mt-2 text-sm text-white/70">{m.role}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-5xl text-white">
                  <Counter value={stat.value} suffix={stat.suffix ?? ''} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-ultra-wide text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Şirket Zaman Çizelgesi"
            title="Ocean İnşaat&apos;ın Yolculuğu"
          />
          <ol className="mt-14 space-y-6">
            {corporate.timeline.map((entry, i) => (
              <Reveal key={entry.year} as="li" delay={i * 0.03}>
                <div className="grid grid-cols-[80px,1fr] md:grid-cols-[120px,1fr] gap-6 border-l-2 border-ocean-700 pl-6 py-4">
                  <div className="font-display text-3xl md:text-4xl text-charcoal-950">{entry.year}</div>
                  <div>
                    <div className="text-lg md:text-xl text-charcoal-900">{entry.title}</div>
                    <p className="mt-2 text-charcoal-600 max-w-3xl">{entry.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection eyebrow="Kurumsal" title="Kurumsal İşbirlikleri İçin Bize Ulaşın" />
    </>
  );
}

function ValueBlock({ title, body }: { title: string; body: string }) {
  return (
    <Reveal>
      <div className="border-t border-charcoal-200 pt-6">
        <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500">{title}</div>
        <p className="mt-4 text-lg text-charcoal-900 text-pretty">{body}</p>
      </div>
    </Reveal>
  );
}

function PolicyBlock({ title, body }: { title: string; body: string }) {
  return (
    <Reveal>
      <div className="bg-white border border-charcoal-100 p-8 h-full">
        <div className="text-xs uppercase tracking-ultra-wide text-ocean-700">{title}</div>
        <p className="mt-4 text-charcoal-700 text-pretty">{body}</p>
      </div>
    </Reveal>
  );
}
