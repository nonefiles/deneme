"use client"

import { siteData } from "@/data/siteData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${siteData.contact.social.whatsapp}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover-scale animate-float"
      aria-label="WhatsApp ile iletişime geç"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
    </button>
  )
}
