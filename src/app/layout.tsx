import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import { buildMetadata, organizationJsonLd } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { JsonLd } from '@/components/shared/JsonLd';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { PageLoader } from '@/components/layout/PageLoader';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: [
      'inşaat firması',
      'müteahhitlik firması',
      'anahtar teslim inşaat',
      'kat karşılığı inşaat',
      'dış cephe firması',
      'bina güçlendirme',
      'kentsel dönüşüm',
      'villa inşaatı',
      'konut inşaatı',
      'İstanbul inşaat firması',
      'Kocaeli inşaat firması',
    ],
  }),
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  formatDetection: { telephone: true, address: true, email: true },
  icons: {
    icon: [
      { url: siteConfig.logo.dark, type: 'image/svg+xml' },
    ],
    apple: siteConfig.logo.dark,
  },
};

export const viewport: Viewport = {
  themeColor: '#1a4d72',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${instrument.variable}`}>
      <body className="min-h-screen bg-offwhite text-charcoal-900 antialiased">
        <JsonLd data={organizationJsonLd()} />
        <PageLoader />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
