import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { JsonLd } from './JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export interface Crumb {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Kırıntı navigasyon" className="text-xs uppercase tracking-ultra-wide text-charcoal-500">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="h-3 w-3 text-charcoal-300" strokeWidth={1.6} />}
              {i === items.length - 1 ? (
                <span className="text-charcoal-800">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-ocean-700 transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
