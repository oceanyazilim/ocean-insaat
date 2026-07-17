'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/services';
import { getFeaturedProjects, projectCategories, projects } from '@/data/projects';
import { blogPosts, blogCategoryLabels } from '@/data/blog';
import { locations } from '@/data/locations';
import { ServiceIcon } from '@/components/shared/ServiceIcon';
import { cn } from '@/lib/utils';

export type MegaId = 'kurumsal' | 'hizmetler' | 'projeler' | 'blog' | null;

const serviceCategories: Array<{ key: string; label: string }> = [
  { key: 'construction', label: 'İnşaat' },
  { key: 'facade', label: 'Cephe ve Yalıtım' },
  { key: 'interior', label: 'İç Mekân' },
  { key: 'infrastructure', label: 'Tesisat ve Altyapı' },
  { key: 'renewal', label: 'Yenileme ve Güçlendirme' },
  { key: 'consulting', label: 'Proje ve Danışmanlık' },
];

interface Props {
  open: MegaId;
  solid: boolean;
  onClose: () => void;
}

export function MegaMenu({ open, solid, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key={open}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'absolute left-0 right-0 top-full',
            solid ? 'bg-white' : 'bg-white/95 backdrop-blur-xl'
          )}
          onMouseLeave={onClose}
        >
          <div className="border-t border-charcoal-100 shadow-2xl shadow-black/10">
            <div className="container-wide py-10 md:py-14">
              {open === 'hizmetler' && <ServicesPanel onNavigate={onClose} />}
              {open === 'projeler' && <ProjectsPanel onNavigate={onClose} />}
              {open === 'kurumsal' && <CorporatePanel onNavigate={onClose} />}
              {open === 'blog' && <BlogPanel onNavigate={onClose} />}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PanelHeader({ eyebrow, title, description, cta }: {
  eyebrow: string;
  title: string;
  description: string;
  cta: { href: string; label: string };
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end mb-8">
      <div className="md:col-span-8">
        <div className="text-[10px] uppercase tracking-ultra-wide text-ocean-700">{eyebrow}</div>
        <h3 className="mt-3 font-display text-3xl md:text-4xl text-charcoal-950">{title}</h3>
        <p className="mt-3 text-sm text-charcoal-600 max-w-2xl">{description}</p>
      </div>
      <div className="md:col-span-4 md:text-right">
        <Link href={cta.href} className="btn-outline text-sm">
          <span>{cta.label}</span>
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
        </Link>
      </div>
    </div>
  );
}

function ServicesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div>
      <PanelHeader
        eyebrow="Hizmetler"
        title="Yapının Her Aşaması İçin Uzman Çözümler"
        description="Anahtar teslim inşaattan yalıtıma, iç mekân tadilatından proje danışmanlığına kadar 30'un üzerinde hizmet başlığı."
        cta={{ href: '/hizmetler', label: 'Tüm Hizmetleri Görüntüle' }}
      />
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6 border-t border-charcoal-100 pt-8">
        {serviceCategories.map((cat) => {
          const items = services.filter((s) => s.category === cat.key);
          return (
            <div key={cat.key}>
              <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500 pb-3 mb-3 border-b border-charcoal-100">
                {cat.label}
              </div>
              <ul className="space-y-2">
                {items.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/hizmetler/${service.slug}`}
                      onClick={onNavigate}
                      className="group inline-flex items-start gap-2 text-sm text-charcoal-700 hover:text-ocean-700 transition-colors"
                    >
                      <ServiceIcon icon={service.icon} className="h-4 w-4 mt-0.5 flex-none opacity-70 group-hover:opacity-100" />
                      <span>{service.shortTitle}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectsPanel({ onNavigate }: { onNavigate: () => void }) {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <div>
      <PanelHeader
        eyebrow="Projeler"
        title="Portföyümüzden Öne Çıkanlar"
        description="Konut, villa, ticari, endüstriyel, enerji ve turizm başlıklarında Ocean İnşaat portföyünü keşfedin."
        cta={{ href: '/projeler', label: 'Tüm Projeleri İnceleyin' }}
      />
      <div className="grid gap-10 md:grid-cols-12 border-t border-charcoal-100 pt-8">
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500 mb-4">Kategoriler</div>
          <ul className="space-y-2">
            <li>
              <Link
                href="/projeler"
                onClick={onNavigate}
                className="group flex items-center justify-between text-sm text-charcoal-800 hover:text-ocean-700 py-1"
              >
                <span>Tüm Projeler</span>
                <span className="text-xs text-charcoal-400 group-hover:text-ocean-700 tabular-nums">{projects.length}</span>
              </Link>
            </li>
            {projectCategories.map((cat) => {
              const count = projects.filter((p) => p.categories.includes(cat)).length;
              if (count === 0) return null;
              return (
                <li key={cat}>
                  <Link
                    href="/projeler"
                    onClick={onNavigate}
                    className="group flex items-center justify-between text-sm text-charcoal-800 hover:text-ocean-700 py-1"
                  >
                    <span>{cat}</span>
                    <span className="text-xs text-charcoal-400 group-hover:text-ocean-700 tabular-nums">{count}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:col-span-8">
          <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500 mb-4">Öne Çıkanlar</div>
          <div className="grid gap-4 sm:grid-cols-3">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/projeler/${project.slug}`}
                onClick={onNavigate}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
                  <Image
                    src={project.coverImage}
                    alt={project.coverAlt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 40vw"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="mt-3">
                  <div className="text-[10px] uppercase tracking-ultra-wide text-charcoal-500">
                    {project.categories[0]}
                  </div>
                  <div className="mt-1 text-sm text-charcoal-950 group-hover:text-ocean-700 transition-colors line-clamp-2">
                    {project.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CorporatePanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div>
      <PanelHeader
        eyebrow="Kurumsal"
        title="Ocean İnşaat Kimliği ve Yaklaşımı"
        description="Kim olduğumuzu, nasıl çalıştığımızı ve hangi bölgelerde faaliyet gösterdiğimizi keşfedin."
        cta={{ href: '/kurumsal', label: 'Kurumsal Sayfamıza Git' }}
      />
      <div className="grid gap-10 md:grid-cols-12 border-t border-charcoal-100 pt-8">
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500 mb-4">Şirket</div>
          <ul className="space-y-2 text-sm">
            <MegaLink href="/kurumsal" onClick={onNavigate} label="Hakkımızda" hint="Vizyon, misyon, değerler" />
            <MegaLink href="/kurumsal#kalite" onClick={onNavigate} label="Kalite Politikası" hint="Sertifikalar ve süreç" />
            <MegaLink href="/surec" onClick={onNavigate} label="Çalışma Süreci" hint="9 adımlık iş programı" />
            <MegaLink href="/kat-karsiligi" onClick={onNavigate} label="Kat Karşılığı" hint="Arsa sahipleri için" />
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500 mb-4">Bölgesel Sayfalar</div>
          <ul className="space-y-2 text-sm">
            {locations.slice(0, 6).map((loc) => (
              <MegaLink
                key={loc.slug}
                href={`/konum/${loc.slug}`}
                onClick={onNavigate}
                label={loc.title}
                hint={`${loc.city}${loc.district !== 'Genel' ? ' · ' + loc.district : ''}`}
              />
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500 mb-4">İletişim</div>
          <ul className="space-y-2 text-sm">
            <MegaLink href="/iletisim" onClick={onNavigate} label="İletişim Sayfası" hint="Adres ve harita" />
            <MegaLink href="/iletisim?form=teklif" onClick={onNavigate} label="Teklif Al" hint="Ücretsiz keşif talebi" />
            <MegaLink href="/teklif-formu" onClick={onNavigate} label="Teklif Formu" hint="Detaylı form" />
          </ul>
        </div>
      </div>
    </div>
  );
}

function BlogPanel({ onNavigate }: { onNavigate: () => void }) {
  const latest = blogPosts.slice(0, 3);

  return (
    <div>
      <PanelHeader
        eyebrow="Blog"
        title="İnşaat, Mimari ve Süreç Rehberleri"
        description="Yatırımınızı planlarken faydalanabileceğiniz güncel içerikler ve mevzuat rehberleri."
        cta={{ href: '/blog', label: 'Tüm Yazılar' }}
      />
      <div className="grid gap-10 md:grid-cols-12 border-t border-charcoal-100 pt-8">
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500 mb-4">Kategoriler</div>
          <ul className="space-y-2">
            {Object.entries(blogCategoryLabels).map(([, label]) => (
              <li key={label}>
                <Link
                  href="/blog"
                  onClick={onNavigate}
                  className="text-sm text-charcoal-800 hover:text-ocean-700 py-1 block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-8">
          <div className="text-xs uppercase tracking-ultra-wide text-charcoal-500 mb-4">Son Yazılar</div>
          <div className="grid gap-4 sm:grid-cols-3">
            {latest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                onClick={onNavigate}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 20vw, 40vw"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="mt-3">
                  <div className="text-[10px] uppercase tracking-ultra-wide text-ocean-700">{post.categoryLabel}</div>
                  <div className="mt-1 text-sm text-charcoal-950 group-hover:text-ocean-700 transition-colors line-clamp-2">
                    {post.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MegaLink({
  href,
  label,
  hint,
  onClick,
}: {
  href: string;
  label: string;
  hint?: string;
  onClick?: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="group flex items-start justify-between gap-3 py-1"
      >
        <span>
          <span className="block text-charcoal-900 group-hover:text-ocean-700 transition-colors">{label}</span>
          {hint && <span className="block text-xs text-charcoal-500">{hint}</span>}
        </span>
        <ArrowUpRight className="h-3.5 w-3.5 text-charcoal-300 group-hover:text-ocean-700 mt-1 transition-colors" strokeWidth={1.6} />
      </Link>
    </li>
  );
}
