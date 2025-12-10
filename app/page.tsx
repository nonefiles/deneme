"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronRight } from "lucide-react"
import ScrollAnimation from "@/components/ScrollAnimation"
import IconRenderer from "@/components/IconRenderer"
import { siteData } from "@/data/siteData"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Hizmetler listesine Grup Terapisi ekleniyor
  const servicesWithGroup = [
    ...siteData.services,
    {
      id: siteData.services.length + 1,
      title: "Grup Terapisi",
      icon: "Users",
      description: "Grup ortamında paylaşım ve destek ile kişisel gelişim",
      duration: "90 dakika"
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-bg">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D5DFCF] via-white to-[#A3BA9C]/20"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#74966F]/20 rounded-full animate-float"></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-[#A3BA9C]/20 rounded-full animate-float"
            style={{ animationDelay: "-2s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#D5DFCF]/30 rounded-full animate-float"
            style={{ animationDelay: "-4s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-28 h-28 bg-[#74966F]/15 rounded-full animate-float"
            style={{ animationDelay: "-1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto container-padding text-center animate-fade-in-up">
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-[#2B4E31] leading-tight">
                <span className="block">{siteData.hero.title}</span>
              </h1>
              <p className="text-lg md:text-xl text-[#49724B] max-w-4xl mx-auto leading-relaxed font-body">
                {siteData.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              {siteData.hero.buttons.map((button, index) => (
                <Link key={index} href={button.link}>
                  <Button
                    size="lg"
                    className={`text-lg px-8 py-4 rounded-full transition-all duration-300 hover-scale font-body ${
                      button.type === "primary"
                        ? "bg-gradient-to-r from-[#74966F] to-[#49724B] text-white hover:from-[#49724B] hover:to-[#74966F] shadow-lg"
                        : "border-2 border-[#74966F] text-[#74966F] hover:bg-[#74966F] hover:text-white bg-white/80 backdrop-blur-sm"
                    }`}
                    variant={button.type === "primary" ? "default" : "outline"}
                  >
                    {button.type === "primary" ? "Randevu Al" : "İletişime Geç"}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#74966F]" />
        </div>
      </section>

     {/* About Me Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <ScrollAnimation className="animate-slide-in-left">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#74966F] to-[#49724B] rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-3 transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl overflow-hidden">
                  <Image
                    src="/Hakkımda.jpg"
                    alt="Klinik Psikolog Busenaz Otlu"
                    width={400}
                    height={500}
                    className="rounded-2xl w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* About Content */}
            <ScrollAnimation className="space-y-6 animate-slide-in-right" delay={200}>
              <div className="space-y-4">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2B4E31]">Hakkımda</h2>
                <p className="text-[#49724B] leading-relaxed text-lg font-body">{siteData.about.bio}</p>
                <div className="space-y-2">
                  <h3 className="font-heading font-semibold text-[#2B4E31]">Eğitim:</h3>
                  {siteData.about.education.map((edu, index) => (
                    <p key={index} className="text-[#49724B] font-body">
                      • {edu}
                    </p>
                  ))}
                </div>
              </div>

              <Link href="/hakkimda">
                <Button
                  variant="outline"
                  className="border-[#74966F] text-[#74966F] hover:bg-[#74966F] hover:text-white transition-all duration-300 bg-transparent hover-scale font-body"
                >
                  Daha Fazla Bilgi
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gradient-to-b from-[#D5DFCF] to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2B4E31] mb-4">Hizmetlerim</h2>
            <p className="text-lg text-[#49724B] max-w-2xl mx-auto font-body">
              Size en uygun terapi türünü seçerek, kişisel ihtiyaçlarınıza odaklanan bir süreç yaşayabilirsiniz.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {servicesWithGroup.map((service, index) => (
              <ScrollAnimation key={service.id} delay={index * 100}>
                <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#74966F] to-[#49724B] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconRenderer iconName={service.icon} className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#2B4E31] mb-3">{service.title}</h3>
                    <p className="text-[#49724B] leading-relaxed mb-4 font-body">{service.description}</p>
                    <div className="text-sm text-[#74966F] font-medium font-body">{service.duration}</div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy For Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2B4E31] mb-4">Terapi Kimler İçin?</h2>
            <p className="text-lg text-[#49724B] max-w-3xl mx-auto font-body">
              Terapi, yaşamınızda pozitif değişimler yaratmak isteyen herkes için uygundur. Aşağıdaki durumlardan
              herhangi birini yaşıyorsanız, terapi size yardımcı olabilir.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {siteData.therapyFor.map((benefit, index) => (
              <ScrollAnimation key={benefit.id} delay={index * 100}>
                <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#74966F] to-[#49724B] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <IconRenderer iconName={benefit.icon} className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-semibold text-[#2B4E31] mb-3 leading-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-[#49724B] leading-relaxed font-body">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="section-padding bg-gradient-to-r from-[#74966F]/10 to-[#49724B]/10">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <ScrollAnimation>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2B4E31] mb-4">
                Değişime İlk Adımı Atın.
              </h2>
              <p className="text-lg text-[#49724B] mb-8 max-w-2xl mx-auto font-body">
                  Yaşamınızda pozitif değişimler yaratmak için ilk adımı atın. Size en uygun iletişim yöntemini seçin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={`https://wa.me/${siteData.contact.social.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 px-8 py-4 rounded-full hover-scale font-body"
                  >
                    WhatsApp
                  </Button>
                </a>
                <Link href="/iletisim">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#74966F] text-[#74966F] hover:bg-[#74966F] hover:text-white px-8 py-4 bg-white rounded-full hover-scale font-body"
                  >
                    İletişim Formu
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
