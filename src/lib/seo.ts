import type { Metadata } from 'next';
import { siteConfig } from './site';

interface BuildMetaOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = '/',
  image,
  keywords,
  type = 'website',
  noIndex,
}: BuildMetaOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const socialImage = image ?? `${siteConfig.url}/opengraph-image.jpg`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [{ url: socialImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [socialImage],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo.dark}`,
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    telephone: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.email,
    areaServed: ['İstanbul', 'Kocaeli', 'Marmara Bölgesi'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'İstanbul',
      addressCountry: 'TR',
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.href, siteConfig.url).toString(),
    })),
  };
}

export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function serviceJsonLd(service: { title: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'GeneralContractor',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'TR',
    url: `${siteConfig.url}/hizmetler/${service.slug}`,
  };
}

export function articleJsonLd(post: {
  title: string;
  excerpt: string;
  publishedAt: string;
  slug: string;
  cover: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}${siteConfig.logo.dark}` },
    },
    image: post.cover,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };
}

export function localBusinessJsonLd(city: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: `${siteConfig.name} - ${city}`,
    description: `${city} bölgesinde inşaat, tadilat ve dış cephe hizmetleri.`,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressCountry: 'TR',
    },
    areaServed: city,
  };
}
