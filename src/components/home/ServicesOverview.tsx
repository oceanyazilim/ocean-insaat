import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ServiceIcon } from '@/components/shared/ServiceIcon';
import { Reveal } from '@/components/shared/Reveal';
import { services } from '@/data/services';

export function ServicesOverview() {
  const featured = services.slice(0, 12);

  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeader
              eyebrow="Hizmetlerimiz"
              title="Yapının Her Detayı İçin Tek Bir Muhatap"
              description="Kaba yapıdan ince işlere, dış cepheden altyapıya kadar 24 farklı hizmet başlığı Ocean İnşaat çatısı altında yönetilir. Her hizmet için detaylı SEO uyumlu sayfa oluşturulmuştur."
            />
          </div>
          <Reveal className="md:col-span-4 flex md:justify-end" delay={0.15}>
            <Link href="/hizmetler" className="btn-outline">
              <span>Tüm Hizmetleri Görüntüle</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px bg-charcoal-100 border border-charcoal-100 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featured.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.03}>
              <Link
                href={`/hizmetler/${service.slug}`}
                className="group block bg-white p-8 h-full transition-all duration-500 hover:bg-offwhite hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-charcoal-200 text-ocean-700 group-hover:bg-ocean-700 group-hover:text-white transition-colors">
                    <ServiceIcon icon={service.icon} className="h-5 w-5" />
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 text-charcoal-300 group-hover:text-ocean-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    strokeWidth={1.6}
                  />
                </div>
                <div className="mt-8">
                  <div className="text-xs uppercase tracking-ultra-wide text-charcoal-400">0{i < 9 ? i + 1 : i + 1}</div>
                  <h3 className="mt-3 text-xl md:text-2xl text-charcoal-950">{service.shortTitle}</h3>
                  <p className="mt-3 text-sm text-charcoal-600 line-clamp-3">{service.intro}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-10 text-sm text-charcoal-500 text-center">
          <p>
            Ayrıca alçı, sıva, boya, seramik, parke, elektrik, mekanik, sıhhi tesisat, hafriyat, altyapı, peyzaj,
            restorasyon, mimari ve statik projelendirme başlıklarında da hizmet vermekteyiz.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
