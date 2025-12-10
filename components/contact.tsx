"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">İletişim</h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Sorularınız için benimle iletişime geçin. Size en kısa sürede dönüş yapacağım.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <Card className="border-0 shadow-md bg-gradient-to-br from-white to-[#F8F6F0]/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#A8C09A] to-[#8B7355] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[#2D3748] mb-2">Adres</h3>
                      <p className="text-[#4A5568] leading-relaxed">
                        Levent Mahallesi
                        <br />
                        Büyükdere Caddesi No: 123
                        <br />
                        Şişli, İstanbul 34394
                      </p>
                      <p className="text-sm text-[#A8C09A] mt-2 font-medium">Metro: Levent İstasyonu (5 dk)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-gradient-to-br from-white to-[#F0F4F1]/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#A8C09A] to-[#8B7355] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[#2D3748] mb-2">Telefon</h3>
                      <p className="text-[#4A5568]">
                        <a
                          href="tel:+905551234567"
                          className="hover:text-[#A8C09A] transition-colors text-lg font-medium"
                        >
                          +90 555 123 45 67
                        </a>
                      </p>
                      <p className="text-sm text-[#A8C09A] mt-1 font-medium">WhatsApp mevcut</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-gradient-to-br from-white to-[#E8F0E8]/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#A8C09A] to-[#8B7355] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[#2D3748] mb-2">E-posta</h3>
                      <p className="text-[#4A5568]">
                        <a
                          href="mailto:info@busenazotlu.com"
                          className="hover:text-[#A8C09A] transition-colors text-lg font-medium"
                        >
                          info@busenazotlu.com
                        </a>
                      </p>
                      <p className="text-sm text-[#A8C09A] mt-1 font-medium">24 saat içinde yanıt</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-gradient-to-br from-white to-[#F8F6F0]/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#A8C09A] to-[#8B7355] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[#2D3748] mb-2">Çalışma Saatleri</h3>
                      <div className="text-[#4A5568] space-y-1">
                        <div className="flex justify-between">
                          <span>Pazartesi - Cuma:</span>
                          <span className="font-medium">09:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cumartesi:</span>
                          <span className="font-medium">10:00 - 16:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pazar:</span>
                          <span className="font-medium text-[#A8C09A]">Kapalı</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp Button */}
            <Card className="border-0 shadow-md bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">WhatsApp İletişim</h3>
                <p className="mb-4 opacity-90">Hızlı randevu ve sorularınız için</p>
                <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-green-600 hover:bg-gray-100 transition-all duration-300 rounded-full">
                    WhatsApp'tan Yazın
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm animate-slide-up">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#2D3748] mb-6">Mesaj Gönderin</h3>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-[#2D3748] mb-2">Mesajınız Gönderildi!</h4>
                  <p className="text-[#4A5568]">En kısa sürede size dönüş yapacağım.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#2D3748] font-medium">
                      Ad Soyad *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Adınız ve soyadınız"
                      className="border-[#E5E7EB] focus:border-[#A8C09A] focus:ring-[#A8C09A] rounded-xl"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#2D3748] font-medium">
                      E-posta *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="ornek@email.com"
                      className="border-[#E5E7EB] focus:border-[#A8C09A] focus:ring-[#A8C09A] rounded-xl"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#2D3748] font-medium">
                      Mesajınız *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Mesajınızı buraya yazın..."
                      className="border-[#E5E7EB] focus:border-[#A8C09A] focus:ring-[#A8C09A] rounded-xl min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#A8C09A] to-[#8B7355] text-white hover:from-[#8B7355] hover:to-[#A8C09A] transition-all duration-300 w-full rounded-full py-3 text-lg font-medium shadow-md"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Mesajı Gönder
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
