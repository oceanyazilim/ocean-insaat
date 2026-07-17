import Link from 'next/link';
import { Instagram, Linkedin, Youtube, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/lib/site';
import { services } from '@/data/services';
import { getFeaturedProjects } from '@/data/projects';
import { Logo } from './Logo';

const socialIcons = [
  { key: 'instagram', href: siteConfig.social.instagram, Icon: Instagram, label: 'Instagram' },
  { key: 'linkedin', href: siteConfig.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
  { key: 'youtube', href: siteConfig.social.youtube, Icon: Youtube, label: 'YouTube' },
  { key: 'facebook', href: siteConfig.social.facebook, Icon: Facebook, label: 'Facebook' },
  { key: 'x', href: siteConfig.social.x, Icon: Twitter, label: 'X' },
];

export function Footer() {
  const featuredServices = services.slice(0, 6);
  const featuredProjects = getFeaturedProjects().slice(0, 4);

  return (
    <footer className="bg-charcoal-950 text-white">
      <div className="container-wide pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="light" />
            <p className="text-sm text-white/70 max-w-md">
              Ocean İnşaat; konut, ticari yapı, dış cephe, renovasyon, güçlendirme ve anahtar teslim projelerde
              planlamadan uygulamaya kadar profesyonel çözümler sunan bir müteahhitlik firmasıdır.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="h-4 w-4 mt-0.5 text-ocean-300" strokeWidth={1.6} />
                <a href={siteConfig.contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {siteConfig.contact.address}
                </a>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <Phone className="h-4 w-4 mt-0.5 text-ocean-300" strokeWidth={1.6} />
                <a href={siteConfig.contact.phoneHref} className="hover:text-white">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <Mail className="h-4 w-4 mt-0.5 text-ocean-300" strokeWidth={1.6} />
                <a href={siteConfig.contact.emailHref} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <Clock className="h-4 w-4 mt-0.5 text-ocean-300" strokeWidth={1.6} />
                <div>
                  {siteConfig.contact.workingHours.map((h) => (
                    <div key={h.label} className="text-white/70">
                      <span className="text-white/50">{h.label}:</span> {h.value}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 px-4 py-2.5 text-sm hover:bg-white/10 transition-colors"
            >
              WhatsApp ile İletişim
            </a>
          </div>

          <FooterColumn title="Kurumsal">
            <FooterLink href="/kurumsal">Hakkımızda</FooterLink>
            <FooterLink href="/surec">Çalışma Süreci</FooterLink>
            <FooterLink href="/kat-karsiligi">Kat Karşılığı</FooterLink>
            <FooterLink href="/projeler">Projelerimiz</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/iletisim">İletişim</FooterLink>
          </FooterColumn>

          <FooterColumn title="Hizmetler">
            {featuredServices.map((service) => (
              <FooterLink key={service.slug} href={`/hizmetler/${service.slug}`}>
                {service.shortTitle}
              </FooterLink>
            ))}
            <FooterLink href="/hizmetler" className="text-ocean-300">
              Tüm Hizmetler →
            </FooterLink>
          </FooterColumn>

          <FooterColumn title="Referanslar">
            {featuredProjects.map((project) => (
              <FooterLink key={project.slug} href={`/projeler/${project.slug}`}>
                {project.title}
              </FooterLink>
            ))}
            <FooterLink href="/projeler" className="text-ocean-300">
              Tüm Projeler →
            </FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/60">
              {siteConfig.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              {socialIcons.map(({ key, href, Icon, label }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center border border-white/20 hover:bg-white/10 transition-colors"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between text-xs text-white/50 gap-2">
            <p>© {new Date().getFullYear()} Ocean İnşaat. Tüm hakları saklıdır.</p>
            <p>
              Web sitesi Ocean İnşaat teknik ekibi tarafından geliştirilmiştir.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="lg:col-span-2 xl:col-span-2 space-y-4">
      <div className="text-xs uppercase tracking-ultra-wide text-white/50">{title}</div>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li>
      <Link href={href} className={`text-white/70 hover:text-white transition-colors ${className ?? ''}`}>
        {children}
      </Link>
    </li>
  );
}
