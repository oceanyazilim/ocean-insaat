import { Reveal } from '@/components/shared/Reveal';

interface LegalSection {
  title: string;
  body: string;
}

export function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="section bg-offwhite">
      <div className="container-tight max-w-3xl space-y-10">
        {sections.map((section) => (
          <Reveal key={section.title}>
            <div>
              <h2 className="text-2xl md:text-3xl text-charcoal-950">{section.title}</h2>
              <p className="mt-4 text-charcoal-700 text-pretty leading-relaxed">{section.body}</p>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <p className="text-sm text-charcoal-500 border-t border-charcoal-200 pt-6">
            Bu metin genel bilgilendirme amaçlıdır. Yasal bağlayıcı bir metin için lütfen doğrudan Ocean İnşaat ile iletişime geçin.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
