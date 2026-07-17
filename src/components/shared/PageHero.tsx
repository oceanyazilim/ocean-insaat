import Image from 'next/image';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';
import { Reveal } from './Reveal';

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
  image?: string;
  imageAlt?: string;
}

const defaultImage =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=85';

export function PageHero({ eyebrow, title, description, crumbs, image, imageAlt }: Props) {
  return (
    <section className="relative overflow-hidden pt-40 md:pt-52 pb-16 md:pb-24 text-white">
      <div className="absolute inset-0">
        <Image
          src={image ?? defaultImage}
          alt={imageAlt ?? ''}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/85 via-charcoal-950/70 to-charcoal-950/85" />
        <div className="absolute inset-0 blueprint-bg opacity-20" aria-hidden />
      </div>

      <div className="container-wide relative">
        <Reveal>
          <Breadcrumbs items={crumbs} />
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <div className="eyebrow text-white/80">{eyebrow}</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-balance">{title}</h1>
            </Reveal>
          </div>
          {description && (
            <Reveal delay={0.16} className="md:col-span-4">
              <p className="text-white/75 text-pretty md:text-lg">{description}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
