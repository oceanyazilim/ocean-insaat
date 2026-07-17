import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { blogPosts } from '@/data/blog';
import { locations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url;
  const staticPaths = [
    '',
    '/kurumsal',
    '/hizmetler',
    '/projeler',
    '/blog',
    '/kat-karsiligi',
    '/surec',
    '/iletisim',
    '/teklif-formu',
    '/gizlilik-politikasi',
    '/cerez-politikasi',
    '/kvkk-aydinlatma-metni',
    '/kullanim-kosullari',
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/hizmetler/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...projects.map((p) => ({
      url: `${base}/projeler/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...locations.map((l) => ({
      url: `${base}/konum/${l.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
