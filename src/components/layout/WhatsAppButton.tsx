'use client';

import Image from 'next/image';
import { whatsappUrl } from '@/lib/site';

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full shadow-lg shadow-black/15 transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/60 animate-ping opacity-70 group-hover:opacity-100" aria-hidden />
      <Image
        src="/assets/icon/whatsapp.webp"
        alt=""
        width={64}
        height={64}
        className="relative h-full w-full object-contain drop-shadow"
        priority
      />
    </a>
  );
}
