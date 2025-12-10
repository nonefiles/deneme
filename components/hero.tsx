"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F0] via-[#F0F4F1] to-[#E8F0E8]"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#A8C09A]/20 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-[#B8C5D1]/20 rounded-full animate-float"
          style={{ animationDelay: "-2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#8B7355]/10 rounded-full animate-float"
          style={{ animationDelay: "-4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-28 h-28 bg-[#A8C09A]/15 rounded-full animate-float"
          style={{ animationDelay: "-1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto container-padding text-center animate-fade-in">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#2D3748] leading-tight">
              <span className="block">Kendinizi keşfetmeye ve</span>
              <span className="block gradient-text">iyileşmeye hazır mısınız?</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A5568] max-w-4xl mx-auto leading-relaxed font-light">
              Klinik Psikolog Busenaz Otlu ile güvenli, samimi ve bilimsel temelli bir terapi sürecine adım atın.
              Kendinizi anlamak ve içsel dönüşümünüzü desteklemek için buradayım.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/randevu">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#A8C09A] to-[#8B7355] text-white hover:from-[#8B7355] hover:to-[#A8C09A] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg px-8 py-4 rounded-full"
              >
                <Calendar className="w-5 h-5 mr-2" />📅 Randevu Al
              </Button>
            </Link>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-[#A8C09A] text-[#8B7355] hover:bg-[#A8C09A] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl rounded-full bg-white/80 backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5 mr-2" />📩 İletişime Geç
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#6B7280]">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#A8C09A] rounded-full"></div>
              <span>ODTÜ Psikoloji Mezunu</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#A8C09A] rounded-full"></div>
              <span>Klinik Psikoloji Yüksek Lisans</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#A8C09A] rounded-full"></div>
              <span>Dinamik Terapi Yaklaşımı</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#A8C09A]" />
      </div>
    </section>
  )
}
