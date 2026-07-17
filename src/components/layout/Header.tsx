'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';
import { MegaMenu, type MegaId } from './MegaMenu';

interface NavItem {
  href: string;
  label: string;
  mega?: Exclude<MegaId, null>;
}

const navigation: NavItem[] = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/kurumsal', label: 'Kurumsal', mega: 'kurumsal' },
  { href: '/hizmetler', label: 'Hizmetler', mega: 'hizmetler' },
  { href: '/projeler', label: 'Projeler', mega: 'projeler' },
  { href: '/kat-karsiligi', label: 'Kat Karşılığı' },
  { href: '/surec', label: 'Süreç' },
  { href: '/blog', label: 'Blog', mega: 'blog' },
  { href: '/iletisim', label: 'İletişim' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [mega, setMega] = useState<MegaId>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const forceSolid = pathname !== '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(false);
    setMega(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = openMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [openMenu]);

  const solid = scrolled || forceSolid || mega !== null;

  const handleOpen = (id: Exclude<MegaId, null>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(id);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(null), 120);
  };

  const closeMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(null);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] bg-ocean-700 px-4 py-2 text-sm text-white"
      >
        İçeriğe atla
      </a>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
          solid ? 'bg-white/95 backdrop-blur-lg border-b border-charcoal-100' : 'bg-transparent'
        )}
        onMouseLeave={scheduleClose}
      >
        <div className="container-wide flex items-center justify-between h-20 md:h-24">
          <Logo variant={solid ? 'dark' : 'light'} />

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Ana menü"
            onMouseEnter={() => {
              if (closeTimer.current) clearTimeout(closeTimer.current);
            }}
          >
            {navigation.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              const isMegaOpen = mega === item.mega && item.mega != null;

              return (
                <div
                  key={item.href}
                  onMouseEnter={() => (item.mega ? handleOpen(item.mega) : setMega(null))}
                >
                  <Link
                    href={item.href}
                    aria-expanded={item.mega ? isMegaOpen : undefined}
                    className={cn(
                      'group relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors',
                      solid
                        ? isActive || isMegaOpen
                          ? 'text-ocean-700'
                          : 'text-charcoal-700 hover:text-charcoal-900'
                        : isActive || isMegaOpen
                          ? 'text-white'
                          : 'text-white/85 hover:text-white'
                    )}
                  >
                    <span>{item.label}</span>
                    {item.mega && (
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          isMegaOpen && 'rotate-180'
                        )}
                        strokeWidth={1.8}
                      />
                    )}
                    <span
                      className={cn(
                        'absolute left-4 right-4 -bottom-0.5 h-px transition-all',
                        solid ? 'bg-ocean-700' : 'bg-white',
                        isActive || isMegaOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                      )}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.contact.phoneHref}
              aria-label="Telefonla ara"
              className={cn(
                'hidden md:inline-flex items-center gap-2 text-sm font-medium transition-colors',
                solid ? 'text-charcoal-800 hover:text-ocean-700' : 'text-white hover:text-ocean-100'
              )}
            >
              <Phone className="h-4 w-4" strokeWidth={1.6} />
              {siteConfig.contact.phoneDisplay}
            </a>
            <Link
              href="/iletisim?form=teklif"
              className={cn(
                'hidden md:inline-flex btn text-sm px-5 py-3',
                solid
                  ? 'bg-ocean-700 text-white hover:bg-ocean-800'
                  : 'bg-white text-charcoal-900 hover:bg-ocean-50'
              )}
            >
              Teklif Al
            </Link>
            <button
              type="button"
              aria-label="Menüyü aç"
              onClick={() => setOpenMenu(true)}
              className={cn(
                'lg:hidden inline-flex items-center justify-center h-11 w-11 border transition-colors',
                solid
                  ? 'border-charcoal-200 text-charcoal-900 hover:bg-charcoal-100'
                  : 'border-white/40 text-white hover:bg-white/10'
              )}
            >
              <Menu className="h-5 w-5" strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <MegaMenu open={mega} solid={solid} onClose={closeMega} />
      </header>

      <AnimatePresence>
        {openMenu && <MobileMenu onClose={() => setOpenMenu(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] bg-charcoal-950 text-white lg:hidden"
    >
      <div className="container-wide flex items-center justify-between h-20">
        <Logo variant="light" />
        <button
          type="button"
          aria-label="Menüyü kapat"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center border border-white/30 hover:bg-white/10 transition-colors"
        >
          <X className="h-5 w-5" strokeWidth={1.6} />
        </button>
      </div>

      <div className="container-wide flex flex-col pt-8 pb-16 h-[calc(100dvh-5rem)] overflow-y-auto">
        <nav aria-label="Mobil menü" className="flex flex-col divide-y divide-white/10">
          {siteConfig.navigation.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={item.href} className="flex items-baseline justify-between py-5 group">
                <span className="font-display text-3xl md:text-4xl">{item.label}</span>
                <span className="text-white/40 text-sm">0{index + 1}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="mt-auto pt-10">
          <Link href="/iletisim?form=teklif" className="btn bg-white text-charcoal-900 hover:bg-ocean-50 w-full">
            Teklif Al
          </Link>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
            <a href={siteConfig.contact.phoneHref} className="hover:text-white">
              {siteConfig.contact.phoneDisplay}
            </a>
            <a href={siteConfig.contact.emailHref} className="hover:text-white text-right">
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
