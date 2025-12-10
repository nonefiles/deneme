"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from "lucide-react"
import ScrollAnimation from "@/components/ScrollAnimation"
import { siteData } from "@/data/siteData"
import { toast } from "@/components/ui/use-toast"

export default function IletisimPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'contact'
        })
      })

      if (response.ok) {
        setSubmitted(true)
        toast({
          title: "Mesajınız Gönderildi",
          description: "En kısa sürede sizinle iletişime geçeceğim.",
          duration: 5000,
        })
      } else {
        throw new Error('Gönderim hatası')
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-[#D5DFCF] to-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#2B4E31] mb-4">İletişim</h1>
          <p className="text-lg text-[#49724B] max-w-3xl mx-auto font-body">
            Sorularınız, randevu talepleriniz veya işbirliği önerileriniz için benimle iletişime geçebilirsiniz.
          </p>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div className="space-y-6">
            <ScrollAnimation className="space-y-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover-lift transition-all">
                <CardContent className="p-8 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#74966F] to-[#49724B] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#2B4E31] mb-2">Adres</h3>
                    <p className="text-[#49724B] leading-relaxed font-body">{siteData.contact.address}</p>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteData.contact.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#74966F] mt-2 font-medium hover:underline inline-block"
                    >
                      Haritada Göster →
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover-lift transition-all">
                <CardContent className="p-8 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#74966F] to-[#49724B] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#2B4E31] mb-2">Telefon & WhatsApp</h3>
                    <p className="text-[#49724B] font-body text-lg font-medium">{siteData.contact.phone}</p>
                    <p className="text-sm text-[#74966F] mt-1">Hafta içi 09:00 - 18:00 arası ulaşabilirsiniz.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover-lift transition-all">
                <CardContent className="p-8 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#74966F] to-[#49724B] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#2B4E31] mb-2">E-posta</h3>
                    <p className="text-[#49724B] font-body text-lg">{siteData.contact.email}</p>
                    <p className="text-sm text-[#74966F] mt-1">24 saat içinde dönüş yapılır.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover-lift transition-all">
                <CardContent className="p-8 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#74966F] to-[#49724B] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#2B4E31] mb-2">Çalışma Saatleri</h3>
                    <div className="space-y-1 font-body text-[#49724B]">
                      <div className="flex justify-between w-full md:w-64">
                        <span>Hafta İçi:</span>
                        <span className="font-medium">{siteData.contact.workingHours.weekdays}</span>
                      </div>
                      <div className="flex justify-between w-full md:w-64">
                        <span>Cumartesi:</span>
                        <span className="font-medium">{siteData.contact.workingHours.saturday}</span>
                      </div>
                      <div className="flex justify-between w-full md:w-64">
                        <span>Pazar:</span>
                        <span className="font-medium text-[#74966F]">{siteData.contact.workingHours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* İletişim Formu */}
          <ScrollAnimation delay={200} className="relative">
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#74966F] to-[#49724B]"></div>
              
              {!submitted ? (
                <>
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-2xl font-heading text-[#2B4E31]">Mesaj Gönderin</CardTitle>
                    <CardDescription className="text-[#49724B] font-body">
                      Formu doldurarak bana ulaşabilirsiniz. En kısa sürede size geri dönüş yapacağım.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-4">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-[#2B4E31] font-medium">Ad Soyad</Label>
                          <Input 
                            id="name" 
                            name="name"
                            placeholder="Adınız Soyadınız" 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                            className="h-11 border-[#E5E7EB] focus:border-[#74966F] focus:ring-[#74966F]/20 rounded-lg bg-[#F8F6F0]/30 text-gray-900 placeholder:text-gray-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-[#2B4E31] font-medium">Telefon</Label>
                          <Input 
                            id="phone" 
                            name="phone"
                            placeholder="05XX XXX XX XX" 
                            type="tel"
                            required 
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-11 border-[#E5E7EB] focus:border-[#74966F] focus:ring-[#74966F]/20 rounded-lg bg-[#F8F6F0]/30 text-gray-900 placeholder:text-gray-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#2B4E31] font-medium">E-posta</Label>
                        <Input 
                          id="email" 
                          name="email"
                          placeholder="ornek@email.com" 
                          type="email" 
                          required 
                          value={formData.email}
                          onChange={handleChange}
                          className="h-11 border-[#E5E7EB] focus:border-[#74966F] focus:ring-[#74966F]/20 rounded-lg bg-[#F8F6F0]/30 text-gray-900 placeholder:text-gray-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-[#2B4E31] font-medium">Konu</Label>
                        <Input 
                          id="subject" 
                          name="subject"
                          placeholder="Mesajınızın konusu" 
                          required 
                          value={formData.subject}
                          onChange={handleChange}
                          className="h-11 border-[#E5E7EB] focus:border-[#74966F] focus:ring-[#74966F]/20 rounded-lg bg-[#F8F6F0]/30 text-gray-900 placeholder:text-gray-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-[#2B4E31] font-medium">Mesajınız</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          placeholder="Size nasıl yardımcı olabilirim?" 
                          className="min-h-[150px] border-[#E5E7EB] focus:border-[#74966F] focus:ring-[#74966F]/20 rounded-lg bg-[#F8F6F0]/30 resize-none text-gray-900 placeholder:text-gray-400"
                          required 
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full h-12 bg-gradient-to-r from-[#74966F] to-[#49724B] hover:from-[#49724B] hover:to-[#74966F] text-white font-medium rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        {loading ? (
                          <span className="flex items-center">
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Gönderiliyor...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-5 w-5" /> Mesajı Gönder
                          </span>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </>
              ) : (
                <CardContent className="h-full flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-float">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B4E31] mb-2 font-heading">Mesajınız Alındı!</h3>
                  <p className="text-[#49724B] mb-8 font-body max-w-xs mx-auto">
                    İletişime geçtiğiniz için teşekkürler. Mesajınızı aldım ve en kısa sürede size dönüş yapacağım.
                  </p>
                  <Button 
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
                    }}
                    variant="outline"
                    className="border-[#74966F] text-[#74966F] hover:bg-[#74966F] hover:text-white"
                  >
                    Yeni Mesaj Gönder
                  </Button>
                </CardContent>
              )}
            </Card>
          </ScrollAnimation>
        </div>

        {/* Harita */}
        <ScrollAnimation delay={300} className="mt-12">
          <Card className="overflow-hidden shadow-lg border-0 rounded-2xl">
            <div className="h-96 relative w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.0234567890123!2d32.8597!3d39.9334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0x9b0b0b0b0b0b0b0b!2sMustafa%20Kemal%20Mahallesi%2C%202143.%20Cd.%20No%3A2%2F3%2C%2006520%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                title="Klinik Psikolog Busenaz Otlu Konum"
              />
            </div>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  )
}