import { Reveal } from './Reveal';

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  invert?: boolean;
}

export function SectionHeader({ eyebrow, title, description, align = 'left', invert }: Props) {
  return (
    <div
      className={`flex flex-col ${align === 'center' ? 'items-center text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}
    >
      <Reveal>
        <div className={invert ? 'text-white/70 eyebrow' : 'eyebrow'}>{eyebrow}</div>
      </Reveal>
      <Reveal delay={0.05} className="mt-4">
        <h2 className={invert ? 'text-white text-balance' : 'text-charcoal-950 text-balance'}>{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12} className="mt-5">
          <p className={`text-pretty ${invert ? 'text-white/70' : 'text-charcoal-600'} md:text-lg`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
