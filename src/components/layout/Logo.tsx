import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Logo({ variant = 'dark', className }: { variant?: 'dark' | 'light'; className?: string }) {
  const src = variant === 'dark' ? siteConfig.logo.dark : siteConfig.logo.light;
  return (
    <Link href="/" aria-label="Ocean İnşaat ana sayfa" className={className}>
      <Image
        src={src}
        alt="Ocean İnşaat"
        width={168}
        height={40}
        priority
        className="h-8 w-auto md:h-10"
      />
    </Link>
  );
}
