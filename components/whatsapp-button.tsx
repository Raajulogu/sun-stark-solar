'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const whatsappLink = 'https://wa.me/919360260195?text=Hello%20Sunstark%20Solar,%20I%20would%20like%20to%20know%20more%20about%20your%20solar%20solutions%20for%20my%20home/business.%20Please%20assist%20me'

  return (
   <div className="fixed bottom-6 right-6 z-40">
  <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>

  <Link
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition"
  >
    <MessageCircle className="h-6 w-6" />
  </Link>
</div>
  )
}
