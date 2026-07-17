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
      className="fixed bottom-5 right-5 z-40 block h-14 w-14 md:h-16 md:w-16 transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
    >
      <Image
        src="/assets/icon/whatsapp.webp"
        alt="WhatsApp ile iletişime geç"
        width={128}
        height={128}
        className="h-full w-full"
        priority
      />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
