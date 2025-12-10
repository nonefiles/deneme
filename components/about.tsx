"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Heart } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">Hakkımda</h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Psikoloji alanındaki eğitimim ve deneyimlerimle, sizlere en iyi hizmeti sunmak için buradayım.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative animate-slide-up">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A8C09A] to-[#8B7355] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-3 transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Busenaz+Otlu"
                  alt="Klinik Psikolog Busenaz Otlu"
                  width={400}
                  height={500}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-[#2D3748]">Busenaz Otlu</h3>
              <p className="text-[#4A5568] leading-relaxed text-lg">
                ODTÜ Psikoloji bölümünden mezun olduktan sonra, Okan Üniversitesi'nde Klinik Psikoloji alanında tezli
                yüksek lisans eğitimime devam etmekteyim. Tez konum "Beden algısı ve bağlanma stillerinin premenstrüel
                dönem üzerindeki etkisi" üzerine odaklanmaktadır.
              </p>
              <p className="text-[#4A5568] leading-relaxed">
                Dinamik terapi yaklaşımını benimser, yetişkin bireyler ve çiftlerle çalışmaktayım. Her danışanımın
                benzersiz hikayesine saygı duyarak, güvenli ve destekleyici bir terapi ortamı sunuyorum.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[#2D3748] flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-[#A8C09A]" />
                Eğitim
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#A8C09A] rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-[#2D3748]">ODTÜ Psikoloji (İngilizce)</p>
                    <p className="text-sm text-[#6B7280]">Lisans Derecesi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#A8C09A] rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-[#2D3748]">Okan Üniversitesi Klinik Psikoloji (Tezli)</p>
                    <p className="text-sm text-[#6B7280]">Yüksek Lisans - Devam Ediyor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach & Clients */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md bg-[#F8F6F0]/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Heart className="w-5 h-5 text-[#A8C09A] mr-2" />
                    <h5 className="font-semibold text-[#2D3748]">Terapi Yaklaşımı</h5>
                  </div>
                  <Badge variant="secondary" className="bg-[#A8C09A]/20 text-[#8B7355]">
                    Dinamik Terapi
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-[#F0F4F1]/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-[#A8C09A] mr-2" />
                    <h5 className="font-semibold text-[#2D3748]">Danışan Grupları</h5>
                  </div>
                  <div className="space-y-1">
                    <Badge variant="outline" className="border-[#A8C09A] text-[#8B7355] mr-2">
                      Yetişkin
                    </Badge>
                    <Badge variant="outline" className="border-[#A8C09A] text-[#8B7355]">
                      Çift
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
