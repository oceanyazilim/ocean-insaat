import { SectionHeader } from '@/components/shared/SectionHeader';
import { Reveal } from '@/components/shared/Reveal';
import { HardHat, ShieldCheck, ClipboardCheck, Eye, ScrollText, Leaf, Wrench, FileCheck2 } from 'lucide-react';

const items = [
  { icon: HardHat, title: 'İş Sağlığı ve Güvenliği', description: 'Şantiye giriş eğitimleri, KKD kullanımı ve saha denetimi ile sıfır ciddi kaza hedefi.' },
  { icon: ShieldCheck, title: 'Yapı Denetimi', description: 'Bağımsız yapı denetim firmaları ile her aşamada kontrol.' },
  { icon: ClipboardCheck, title: 'Malzeme Kalite Kontrolü', description: 'Beton, demir ve yalıtım için partide numune ve karot testleri.' },
  { icon: Eye, title: 'Teknik Ekip Denetimi', description: 'Şantiye şefleri ve merkez ekiplerinin çift kontrolü.' },
  { icon: ScrollText, title: 'Deprem Yönetmeliği', description: 'TBDY 2018 kapsamında projelendirme ve uygulama.' },
  { icon: Leaf, title: 'Çevreye Duyarlı Çalışma', description: 'Şantiyede toz, gürültü ve atık yönetimi yönetmeliklere uygun.' },
  { icon: Wrench, title: 'Şantiye Düzeni', description: 'Malzeme depolama, ekipman rotasyonu ve saha güvenliği planlaması.' },
  { icon: FileCheck2, title: 'Proje Raporlaması', description: 'Haftalık ilerleme, fotoğraf ve maliyet raporu.' },
];

export function QualitySafety() {
  return (
    <section className="section bg-offwhite">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Kalite ve İş Güvenliği"
          title="Standartların Üzerinde, Yönetmeliklere Sadık"
          description="İnşaat sürecinin görünmeyen ama en kritik başlıklarında sıkı standartlar uyguluyor, gerçek sertifikalar ve denetim raporları ile şeffaflığı güvence altına alıyoruz."
        />

        <div className="mt-14 grid gap-px bg-charcoal-100 border border-charcoal-100 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.03}>
              <div className="bg-white p-8 h-full flex flex-col items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center border border-charcoal-200 text-ocean-700">
                  <Icon className="h-5 w-5" strokeWidth={1.4} />
                </div>
                <div>
                  <h3 className="text-lg text-charcoal-950">{title}</h3>
                  <p className="mt-3 text-sm text-charcoal-600">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 max-w-3xl text-sm text-charcoal-500 border-l-2 border-ocean-700 pl-4">
          Bu alan, firmaya ait güncel sertifikalar, denetim raporları ve teknik belgeler eklenebilecek şekilde
          düzenlenmiştir. Sadece gerçek ve doğrulanabilir belgeler paylaşılmalıdır.
        </Reveal>
      </div>
    </section>
  );
}
