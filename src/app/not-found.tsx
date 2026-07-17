import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[100svh] flex items-center bg-offwhite pt-32 pb-16">
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <div className="eyebrow">Hata 404</div>
            <h1 className="mt-6 text-balance">
              Aradığınız Sayfaya <span className="italic text-ocean-700">Ulaşılamadı</span>
            </h1>
            <p className="mt-6 text-charcoal-600 md:text-lg max-w-2xl text-pretty">
              Sayfa taşınmış, silinmiş veya adres yanlış yazılmış olabilir. Aşağıdaki bağlantılardan Ocean İnşaat sitesinde
              gezinmeye devam edebilirsiniz.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/" className="btn-primary">
                <span>Ana Sayfaya Dön</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </Link>
              <Link href="/projeler" className="btn-outline">
                <span>Projeleri İncele</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </Link>
              <Link href="/iletisim" className="btn-ghost">
                <span>İletişime Geç</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-square border border-charcoal-200 blueprint-bg flex items-center justify-center">
              <span className="font-display text-[10rem] md:text-[14rem] leading-none text-charcoal-950">404</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
