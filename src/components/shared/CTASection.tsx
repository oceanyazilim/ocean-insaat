import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';
import { whatsappUrl } from '@/lib/site';

interface Props {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export function CTASection({
  eyebrow = 'İletişim',
  title = 'Projenizi Birlikte Hayata Geçirelim',
  description = 'İnşaat, renovasyon, dış cephe veya kat karşılığı projeniz için bizimle iletişime geçin. Teknik ekibimiz ihtiyaçlarınızı değerlendirerek size özel bir çalışma planı oluştursun.',
  primaryHref = '/iletisim?form=teklif',
  primaryLabel = 'Ücretsiz Keşif Talep Et',
  secondaryLabel = 'WhatsApp\'tan İletişime Geç',
}: Props) {
  return (
    <section className="section bg-charcoal-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-30" aria-hidden />
      <div className="container-wide relative">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal>
              <div className="eyebrow text-ocean-300">{eyebrow}</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance">{title}</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-white/70 text-pretty md:text-lg">{description}</p>
            </Reveal>
          </div>
          <Reveal delay={0.18} className="md:col-span-4 flex flex-col gap-3">
            <Link href={primaryHref} className="btn bg-white text-charcoal-900 hover:bg-ocean-50 justify-between w-full">
              <span>{primaryLabel}</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-white/30 text-white hover:bg-white/10 justify-between w-full"
            >
              <span>{secondaryLabel}</span>
              <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
