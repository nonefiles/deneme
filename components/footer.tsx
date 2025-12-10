import Link from "next/link"
import { Heart, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { siteData } from "@/data/siteData"

export default function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white py-12">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#A8C09A] to-[#8B7355] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-serif font-semibold text-xl">Busenaz Otlu</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Klinik Psikolog - Güvenli, samimi ve bilimsel temelli terapi hizmetleri
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/hakkimda", label: "Hakkımda" },
                { href: "/hizmetler", label: "Hizmetler" },
                { href: "/sss", label: "SSS" },
                { href: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#A8C09A] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Hizmetlerim</h3>
            <ul className="space-y-2">
              {["Bireysel Terapi", "Çift Terapisi", "Online Terapi", "Grup Terapisi"].map(
                (service) => (
                  <li key={service}>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#A8C09A] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{siteData.contact.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#A8C09A]" />
                <span className="text-gray-300 text-sm">{siteData.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#A8C09A]" />
                <span className="text-gray-300 text-sm">{siteData.contact.email}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-4">
              <div className="flex space-x-3">
                {[
                  { 
                    icon: Instagram, 
                    href: "https://www.instagram.com/klinikpsikologbusenazotlu/", 
                    label: "Instagram" 
                  },
                  { 
                    icon: Linkedin, 
                    href: "https://tr.linkedin.com/in/busenaz-otlu-93a9871a6", 
                    label: "LinkedIn" 
                  },
                  { 
                    icon: Mail, 
                    href: `mailto:${siteData.contact.email}`, 
                    label: "Email" 
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.icon !== Mail ? "_blank" : undefined}
                    rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                    className="w-8 h-8 bg-[#4A5568] rounded-lg flex items-center justify-center text-gray-300 hover:bg-[#A8C09A] hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#4A5568] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Klinik Psikolog Busenaz Otlu. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center space-x-1 text-gray-300 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#A8C09A]" />
            <span>for mental health</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
