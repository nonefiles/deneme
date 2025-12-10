"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Heart, Calendar, Quote, BookOpen, Award } from "lucide-react"
import ScrollAnimation from "@/components/ScrollAnimation"
import { siteData } from "@/data/siteData"

export default function HakkimdaPage() {
  const [activeTab, setActiveTab] = useState("bio")

  const tabs = [
    { id: "bio", label: "Hakkımda", icon: Heart },
    { id: "education", label: "Eğitim", icon: GraduationCap },
    { id: "trainings", label: "Sertifikalar", icon: BookOpen },
    { id: "approach", label: "Yaklaşımım", icon: Award },
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-[#D5DFCF] to-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#2B4E31] mb-4">Hakkımda</h1>
          <p className="text-lg text-[#49724B] max-w-2xl mx-auto font-body">
            Psikoloji alanındaki eğitimim ve deneyimlerimle, sizlere en iyi hizmeti sunmak için buradayım.
          </p>
        </ScrollAnimation>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <ScrollAnimation>
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm sticky top-24">
                <CardContent className="p-8 text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#74966F] to-[#49724B] rounded-full"></div>
                    <div className="relative bg-white rounded-full p-2 m-2">
                      <Image
                        src="/Hakkımda.jpg"
                        alt="Kln. Psk. Busenaz OTLU"
                        width={200}
                        height={200}
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-[#2B4E31] mb-2">Kln. Psk. Busenaz OTLU</h2>
                  <p className="text-[#74966F] font-medium mb-4 font-body">Klinik Psikolog</p>
                  <div className="space-y-2 mb-6">
                    <Badge variant="secondary" className="bg-[#74966F]/20 text-[#74966F] font-body">
                      {siteData.about.approach}
                    </Badge>
                    <div className="flex justify-center space-x-2">
                      {siteData.about.clients.map((client, index) => (
                        <Badge key={index} variant="outline" className="border-[#74966F] text-[#74966F] font-body">
                          {client}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link href="/randevu">
                    <Button className="bg-gradient-to-r from-[#74966F] to-[#49724B] text-white hover:from-[#49724B] hover:to-[#74966F] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full hover-scale font-body">
                      <Calendar className="w-4 h-4 mr-2" />
                      Randevu Al
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tab Navigation */}
            <ScrollAnimation>
              <div className="flex flex-wrap gap-2 border-b border-[#A3BA9C] pb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-body ${
                      activeTab === tab.id ? "bg-[#74966F] text-white" : "text-[#49724B] hover:bg-[#74966F]/10"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </ScrollAnimation>

            {/* Tab Content */}
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                {activeTab === "bio" && (
                  <ScrollAnimation className="space-y-6">
                    <h3 className="font-heading text-2xl font-semibold text-[#2B4E31]">Psikoloji Yolculuğum</h3>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-[#49724B] leading-relaxed mb-4 font-body text-lg">{siteData.about.bio}</p>
                      <p className="text-[#49724B] leading-relaxed mb-4 font-body">
                        Psikoloji alanına olan ilgim, insanların iç dünyalarını anlamak ve onlara yardım etmek istememle
                        başladı. Üniversite yıllarımdan itibaren bu alanda kendimi geliştirmeye odaklandım.
                      </p>
                      <p className="text-[#49724B] leading-relaxed font-body">
                        Dinamik terapi yaklaşımını benimser, yetişkin bireyler ve çiftlerle çalışmaktayım. Her
                        danışanımın benzersiz hikayesine saygı duyarak, güvenli ve destekleyici bir terapi ortamı
                        sunuyorum.
                      </p>
                    </div>
                  </ScrollAnimation>
                )}

                {activeTab === "education" && (
                  <ScrollAnimation className="space-y-6">
                    <h3 className="font-heading text-2xl font-semibold text-[#2B4E31]">Eğitim Geçmişim</h3>
                    <div className="space-y-6">
                      {siteData.about.education.map((edu, index) => (
                        <div key={index} className="border-l-4 border-[#74966F] pl-6">
                          <div className="flex items-center space-x-2 mb-2">
                            <GraduationCap className="w-5 h-5 text-[#74966F]" />
                            <span className="text-sm font-medium text-[#74966F] bg-[#74966F]/10 px-2 py-1 rounded font-body">
                              {index === 0 ? "Yüksek Lisans" : "Lisans"}
                            </span>
                          </div>
                          <h4 className="font-heading text-xl font-semibold text-[#2B4E31] mb-1">{edu}</h4>
                          <p className="text-[#49724B] text-sm font-body">
                            {index === 0
                              ? "Tez: 'Beden algısı ve bağlanma stillerinin premenstrüel dönem üzerindeki etkisi'"
                              : "Psikoloji alanında temel eğitim"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ScrollAnimation>
                )}

                {activeTab === "trainings" && (
                  <ScrollAnimation className="space-y-6">
                    <h3 className="font-heading text-2xl font-semibold text-[#2B4E31]">Sertifikalar ve Eğitimler</h3>
                    <div className="grid gap-4">
                      {siteData.about.trainings.map((training, index) => (
                        <div
                          key={training.id}
                          className="flex items-center space-x-4 p-4 bg-[#D5DFCF]/30 rounded-lg hover-lift"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-[#74966F] to-[#49724B] rounded-full flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-heading font-semibold text-[#2B4E31]">{training.title}</h4>
                            <p className="text-[#49724B] text-sm font-body">{training.institution}</p>
                          </div>
                          <span className="text-[#74966F] font-bold font-heading">{training.year}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollAnimation>
                )}

                {activeTab === "approach" && (
                  <ScrollAnimation className="space-y-6">
                    <h3 className="font-heading text-2xl font-semibold text-[#2B4E31]">Terapi Yaklaşımım</h3>
                    <div className="space-y-6">
                      <div className="bg-[#74966F]/10 rounded-2xl p-6">
                        <h4 className="font-heading text-xl font-semibold text-[#2B4E31] mb-4 flex items-center">
                          <Heart className="w-5 h-5 mr-2 text-[#74966F]" />
                          Dinamik Terapi
                        </h4>
                        <p className="text-[#49724B] leading-relaxed font-body">
                          Dinamik terapi yaklaşımında, bilinçdışı süreçlerin davranışlarımız üzerindeki etkisini
                          keşfederiz. Geçmiş deneyimlerinizin bugünkü yaşamınıza nasıl yansıdığını anlayarak, daha
                          sağlıklı ilişki kalıpları geliştirmenize yardımcı olurum.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#A3BA9C]/10 rounded-xl p-6">
                          <h5 className="font-heading font-semibold text-[#2B4E31] mb-3">Çalıştığım Alanlar</h5>
                          <ul className="space-y-2 text-[#49724B] font-body">
                            <li>• Kaygı ve depresyon</li>
                            <li>• İlişki sorunları</li>
                            <li>• Özgüven problemleri</li>
                            <li>• Travma ve kayıp</li>
                          </ul>
                        </div>

                        <div className="bg-[#D5DFCF]/50 rounded-xl p-6">
                          <h5 className="font-heading font-semibold text-[#2B4E31] mb-3">Terapi Sürecim</h5>
                          <ul className="space-y-2 text-[#49724B] font-body">
                            <li>• Güvenli terapi ortamı</li>
                            <li>• Kişiye özel yaklaşım</li>
                            <li>• Yargısız kabul</li>
                            <li>• İşbirlikçi süreç</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quote Section */}
        <ScrollAnimation className="bg-gradient-to-r from-[#74966F]/10 to-[#49724B]/10 rounded-3xl p-12 text-center mb-16">
          <Quote className="w-12 h-12 text-[#74966F] mx-auto mb-6" />
          <blockquote className="font-heading text-2xl md:text-3xl font-medium text-[#2B4E31] mb-6 leading-relaxed">
            "{siteData.about.quote}"
          </blockquote>
          <p className="text-[#49724B] font-medium font-body">- Busenaz Otlu</p>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation className="text-center">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-[#74966F] to-[#49724B] text-white max-w-2xl mx-auto">
            <CardContent className="p-12">
              <h3 className="font-heading text-2xl font-bold mb-4">Değişime İlk Adımı Atın.</h3>
              <p className="text-lg mb-8 opacity-90 font-body">
                Kendinize bir iyilik yapın ve daha iyi hissetmek için ilk adımı atın. İhtiyaçlarınıza en uygun iletişim yöntemini seçerek süreci başlatın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/randevu">
                  <Button
                    size="lg"
                    className="bg-white text-[#74966F] hover:bg-gray-100 transition-all duration-300 px-8 py-4 rounded-full hover-scale font-body"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Randevu Al
                  </Button>
                </Link>
                <Link href="/iletisim">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#74966F] px-8 py-4 bg-transparent rounded-full hover-scale font-body"
                  >
                    İletişime Geç
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  )
}
