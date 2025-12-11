"use client"

import React, { useEffect, useRef, useState } from "react"
import { Star, CheckCircle, MessageSquare, ExternalLink, Quote } from "lucide-react"

// --- Inline UI Components (Bağımlılıkları kaldırmak için) ---

const Button = ({ className = "", variant = "default", children, ...props }: any) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50"
  const variants = {
    default: "bg-white text-[#2B4E31] hover:bg-gray-100 shadow-sm hover:shadow-lg",
    outline: "border border-white/30 text-white hover:bg-white/10",
  }
  const variantStyles = variants[variant as keyof typeof variants] || variants.default
  
  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Card = ({ className = "", children, ...props }: any) => (
  <div className={`rounded-xl border text-card-foreground ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ className = "", children, ...props }: any) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
)

// --- Inline ScrollAnimation Component ---
const ScrollAnimation = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting))
    })
    
    const currentRef = domRef.current
    if (currentRef) observer.observe(currentRef)
    
    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  )
}

// --- TrustIndex Widget Bileşeni ---
const TrustIndexWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scriptin daha önce eklenip eklenmediğini kontrol et (Duplicate önleme)
    const existingScript = containerRef.current.querySelector('script[src*="trustindex.io"]')
    if (existingScript) return

    const script = document.createElement("script")
    script.src = "https://cdn.trustindex.io/loader.js?0b7e77f6036e14691486cad46dd"
    script.async = true
    script.defer = true
    
    containerRef.current.appendChild(script)

    return () => {
      // Cleanup işlemi gerekirse buraya eklenebilir
    }
  }, [])

  return (
    <div className="w-full flex justify-center py-8">
      <div 
        ref={containerRef} 
        className="w-full min-h-[300px] flex flex-col items-center justify-center text-gray-400 text-sm font-light italic bg-white/50 rounded-xl"
      >
        {/* Script içeriği buraya yüklenecek */}
      </div>
    </div>
  )
}

export default function DanisanGorusleriPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-[#D5DFCF] to-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header Section --- */}
        <ScrollAnimation className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#74966F]/10 text-[#74966F] text-sm font-medium tracking-wide uppercase border border-[#74966F]/20">
              <Quote className="w-4 h-4 mr-2" />
              Danışan Deneyimleri
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#2B4E31] mb-6 leading-tight">
            Güven, inşa ettiğimiz <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74966F] to-[#49724B]">
              en değerli
            </span> yapıdır.
          </h1>
          <p className="text-lg md:text-xl text-[#49724B] max-w-2xl mx-auto leading-relaxed font-light">
            Sayıların ötesinde, gerçek insanların gerçek iyileşme hikayeleri. 
            Sürecin kalitesini, danışanlarımın kendi cümleleriyle dinleyin.
          </p>
        </ScrollAnimation>

        {/* --- Widget Section --- */}
        <ScrollAnimation className="mb-24">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-xl border border-white">
            <div className="flex flex-col items-center justify-center mb-10 relative">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2B4E31] relative z-10 px-6">
                Son Değerlendirmeler
              </h2>
              <div className="w-24 h-1 bg-[#74966F] rounded-full mt-4"></div>
            </div>
            
            {/* TrustIndex Widget */}
            <TrustIndexWidget />
            
            <div className="text-center mt-8 pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                <CheckCircle className="w-3 h-3 text-[#74966F]" />
                Google ve diğer platformlardan doğrulanmış gerçek yorumlardır.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* --- CTA Section --- */}
        <ScrollAnimation className="text-center">
          <Card className="shadow-2xl border-0 bg-gradient-to-r from-[#2B4E31] to-[#1a301d] text-white max-w-3xl mx-auto overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#74966F]/20 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3"></div>

            <CardContent className="p-12 relative z-10">
              <MessageSquare className="w-12 h-12 mx-auto mb-6 text-[#A8C09A]" />
              <h3 className="text-3xl font-bold mb-4">Deneyiminizi Paylaşın</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto font-light leading-relaxed">
                Sizin düşünceleriniz benim ve potansiyel danışanlarım için çok değerli. 
                Sürecimiz hakkındaki görüşlerinizi paylaşarak gelişimimize katkıda bulunabilirsiniz.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://search.google.com/local/writereview?placeid=ChIJTXtZmDgiXw4RvFBWi-AhPMk"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="px-8 py-6 text-base w-full sm:w-auto">
                    <Star className="w-4 h-4 mr-2 text-[#74966F] fill-current" />
                    Google'da Yorum Yap
                  </Button>
                </a>
                
                <a href="/iletisim">
                  <Button variant="outline" className="px-8 py-6 text-base w-full sm:w-auto">
                    Bize Ulaşın
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

      </div>
    </div>
  )
}
