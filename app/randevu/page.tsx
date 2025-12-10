"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CustomCalendar } from "@/components/ui/custom-calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, ChevronRight, Loader2, Calendar as CalendarIcon, Clock, ArrowLeft, Info } from "lucide-react"
import { format } from "date-fns"
import { tr } from "date-fns/locale"
import ScrollAnimation from "@/components/ScrollAnimation"
import { siteData } from "@/data/siteData"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

// Not: Veritabanı olmadığı için BookedSlot tipini ve state'ini kaldırıyoruz veya sadece simülasyon için tutuyoruz.
type BookedSlot = {
  date: string;
  time: string;
}

export default function RandevuPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  
  // Veritabanı olmadığı için burası şimdilik boş kalacak veya manuel eklediğiniz dolulukları tutacak.
  // Gerçek zamanlı çakışma kontrolü bu versiyonda yoktur.
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([
    // Örnek: { date: "2025-05-15", time: "10:00" } gibi manuel girişler yapabilirsiniz.
  ])

  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    note: ""
  })

  // Handlers
  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setStep(2)
  }

  const handleDateSelect = (newDate: Date) => {
    setDate(newDate)
    setSelectedTime(null)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Manuel olarak engellenmiş saatleri kontrol eder
  const isSlotBooked = (checkDate: Date, checkTime: string) => {
    const dateString = format(checkDate, "yyyy-MM-dd")
    return bookedSlots.some(slot => slot.date === dateString && slot.time === checkTime)
  }

  const getAvailableSlots = (): string[] => {
    if (!date) return []
    const day = date.getDay()
    let slots: string[] = []
    if (day === 0) {
        slots = [] 
    } else if (day === 6) {
        slots = siteData.booking.timeSlots.saturday
    } else {
        slots = siteData.booking.timeSlots.weekdays
    }
    return slots
  }

  const isDateDisabled = (day: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return day < today || day.getDay() === 0
  }

  const nextStep = () => {
    if (step === 2 && (!date || !selectedTime)) {
        toast({ title: "Tarih ve Saat Seçiniz", description: "Lütfen devam etmek için bir tarih ve saat belirleyin.", variant: "destructive" })
        return
    }
    setStep(s => s + 1)
  }

  const prevStep = () => setStep(s => s - 1)

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.email) {
      toast({ title: "Eksik Bilgi", description: "Lütfen zorunlu alanları doldurunuz.", variant: "destructive" })
      return
    }
    
    if (!date || !selectedTime) return;

    setLoading(true)
    
    try {
      // Veritabanı olmadığı için doğrudan mail gönderimine geçiyoruz.
      const response = await fetch('/api/appointments', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'appointment',
          service: selectedService,
          time: selectedTime,
          ...formData,
          date: date.toISOString(),
        })
      })

      if (response.ok) {
        setSuccess(true)
      } else {
        throw new Error('Mail gönderim hatası')
      }
    } catch (error) {
      console.error("Randevu hatası:", error);
      toast({ title: "Hata", description: "Bir sorun oluştu, lütfen tekrar deneyin.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="text-center space-y-6 max-w-md w-full animate-fade-in-up">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-[#2B4E31]" />
          </div>
          <div>
            {/* Metinleri "Talep" olarak güncelledik */}
            <h2 className="text-3xl font-heading font-bold text-[#2B4E31] mb-2">Talep Oluşturuldu</h2>
            <p className="text-gray-500 font-body">Sayın {formData.name}, randevu talebiniz bize ulaştı. Müsaitlik durumunu kontrol edip size en kısa sürede <strong>onay için dönüş yapacağız.</strong></p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl text-left space-y-3 border border-gray-100">
             <div className="flex justify-between text-sm font-body">
                <span className="text-gray-500">Talep Edilen Hizmet</span>
                <span className="font-medium text-[#2B4E31]">{siteData.booking.services.find(s => s.id === selectedService)?.name}</span>
             </div>
             <div className="flex justify-between text-sm font-body">
                <span className="text-gray-500">Tarih</span>
                <span className="font-medium text-[#2B4E31]">{date && format(date, "d MMMM yyyy", { locale: tr })}</span>
             </div>
             <div className="flex justify-between text-sm font-body">
                <span className="text-gray-500">Saat</span>
                <span className="font-medium text-[#2B4E31]">{selectedTime}</span>
             </div>
          </div>
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline" 
            className="w-full border-[#74966F] text-[#74966F] hover:bg-[#74966F] hover:text-white rounded-xl py-6 font-body"
          >
            Ana Sayfaya Dön
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Minimal Progress Indicator */}
        <div className="mb-12 flex justify-center space-x-3">
            {[1, 2, 3].map(i => (
                <div key={i} className={cn(
                    "h-1.5 w-12 rounded-full transition-colors duration-500",
                    step >= i ? "bg-[#74966F]" : "bg-gray-100"
                )} />
            ))}
        </div>

        <ScrollAnimation>
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#2B4E31] mb-3">
                    {step === 1 && "Hizmet Seçimi"}
                    {step === 2 && "Tarih ve Saat"}
                    {step === 3 && "Bilgileriniz"}
                </h1>
                <p className="text-gray-400 font-body text-lg font-light">
                    {step === 1 && "Size uygun terapi türünü seçerek başlayın."}
                    {step === 2 && "Talep oluşturmak istediğiniz zamanı belirleyin."}
                    {step === 3 && "Randevu talebi için bilgilerinizi girin."}
                </p>
            </div>

            {/* Bilgilendirme Kutusu (Talep Modeli Uyarısı) */}
            {step === 2 && (
               <div className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800 font-body">
                     Seçtiğiniz tarih ve saat için <strong>ön talep</strong> oluşturulacaktır. Kesin randevu onayı, kontroller yapıldıktan sonra tarafınıza iletilecektir.
                  </p>
               </div>
            )}

            {/* Adım 1: Hizmetler */}
            {step === 1 && (
                <div className="grid gap-4 animate-fade-in-up">
                    {siteData.booking.services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => handleServiceSelect(service.id)}
                            className="group relative cursor-pointer border border-gray-100 rounded-2xl p-6 hover:border-[#74966F]/30 hover:bg-[#F9FAFB] transition-all duration-300 bg-white"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#2B4E31] mb-1 font-heading">{service.name}</h3>
                                    <p className="text-sm text-gray-400 font-body">{service.duration} • {service.description}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#74966F] transition-colors duration-300">
                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Adım 2: Tarih & Saat */}
            {step === 2 && (
                <div className="space-y-8 animate-fade-in-up">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Custom Calendar Kullanımı */}
                        <div className="w-full md:w-1/2">
                            <CustomCalendar
                                selected={date}
                                onSelect={handleDateSelect}
                                disabled={isDateDisabled}
                                className="border-0 shadow-none p-0 w-full"
                            />
                        </div>

                        {/* Saat Seçimi */}
                        <div className="w-full md:w-1/2">
                            <div className="bg-gray-50 rounded-3xl p-6 h-full border border-gray-100">
                                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest font-body mb-4 flex items-center">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {date ? format(date, "d MMMM", { locale: tr }) : "Tarih Seçiniz"}
                                </h3>
                                
                                {date ? (
                                    <div className="grid grid-cols-3 gap-3">
                                        {getAvailableSlots().length > 0 ? (
                                            getAvailableSlots().map((slot) => {
                                                const isBooked = isSlotBooked(date, slot);
                                                return (
                                                    <button
                                                        key={slot}
                                                        disabled={isBooked}
                                                        onClick={() => !isBooked && handleTimeSelect(slot)}
                                                        className={cn(
                                                            "py-3 px-2 text-sm font-medium rounded-xl border transition-all duration-200 font-body relative",
                                                            isBooked 
                                                                ? "bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed decoration-slice" 
                                                                : selectedTime === slot
                                                                    ? "bg-[#2B4E31] text-white border-[#2B4E31] shadow-md transform scale-[1.02]"
                                                                    : "bg-white text-gray-600 border-gray-200 hover:border-[#74966F] hover:text-[#74966F]"
                                                        )}
                                                    >
                                                        {slot}
                                                        {isBooked && (
                                                            <span className="absolute inset-0 flex items-center justify-center">
                                                                <span className="w-[80%] h-[1px] bg-gray-300 transform -rotate-12"></span>
                                                            </span>
                                                        )}
                                                    </button>
                                                )
                                            })
                                        ) : (
                                            <div className="col-span-3 text-center py-8 text-gray-400 text-sm">
                                                Bu tarihte uygun saat bulunmamaktadır.
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="h-40 flex flex-col items-center justify-center text-gray-400">
                                        <CalendarIcon className="w-8 h-8 mb-2 opacity-20" />
                                        <span className="text-sm opacity-60">Lütfen takvimden bir gün seçin</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between pt-4">
                        <Button variant="ghost" onClick={prevStep} className="text-gray-400 hover:text-[#2B4E31] hover:bg-transparent font-body pl-0">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Geri
                        </Button>
                        <Button 
                            onClick={nextStep} 
                            disabled={!selectedTime}
                            className="bg-[#2B4E31] text-white hover:bg-[#1a301d] rounded-full px-8 py-6 font-medium shadow-lg shadow-[#2B4E31]/20 transition-all hover:-translate-y-1 font-body"
                        >
                            Devam Et <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            )}

            {/* Adım 3: Form */}
            {step === 3 && (
                <div className="space-y-8 animate-fade-in-up">
                    {/* Özet Kartı */}
                    <div className="bg-[#F9FAFB] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between border border-gray-100 gap-4">
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-1 font-body">SEÇİLEN RANDEVU</p>
                            <p className="text-[#2B4E31] font-semibold font-heading text-lg">
                                {siteData.booking.services.find(s => s.id === selectedService)?.name}
                            </p>
                            <p className="text-sm text-gray-500 font-body mt-1 flex items-center">
                                <CalendarIcon className="w-3 h-3 mr-1" />
                                {date && format(date, "d MMMM yyyy", { locale: tr })} 
                                <Clock className="w-3 h-3 mx-1 ml-3" />
                                {selectedTime}
                            </p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => setStep(2)} className="text-[#74966F] hover:text-[#2B4E31] hover:bg-white font-body border border-transparent hover:border-gray-200">
                            Değiştir
                        </Button>
                    </div>

                    <div className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <Label className="text-gray-500 font-normal pl-1 font-body">Ad Soyad</Label>
                                <Input 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleInputChange} 
                                    className="bg-gray-50 border-transparent h-14 rounded-xl focus:bg-white focus:border-[#74966F] focus:ring-0 transition-all font-body text-base text-gray-900 placeholder:text-gray-400" 
                                    placeholder="Adınız Soyadınız"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-gray-500 font-normal pl-1 font-body">Telefon</Label>
                                <Input 
                                    name="phone" 
                                    value={formData.phone} 
                                    onChange={handleInputChange} 
                                    className="bg-gray-50 border-transparent h-14 rounded-xl focus:bg-white focus:border-[#74966F] focus:ring-0 transition-all font-body text-base text-gray-900 placeholder:text-gray-400" 
                                    placeholder="05XX XXX XX XX"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-500 font-normal pl-1 font-body">E-posta</Label>
                            <Input 
                                name="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                className="bg-gray-50 border-transparent h-14 rounded-xl focus:bg-white focus:border-[#74966F] focus:ring-0 transition-all font-body text-base text-gray-900 placeholder:text-gray-400" 
                                placeholder="ornek@email.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-gray-500 font-normal pl-1 font-body">Notunuz (Opsiyonel)</Label>
                            <Textarea 
                                name="note" 
                                value={formData.note} 
                                onChange={handleInputChange} 
                                className="bg-gray-50 border-transparent min-h-[120px] rounded-xl resize-none focus:bg-white focus:border-[#74966F] focus:ring-0 transition-all font-body text-base p-4 text-gray-900 placeholder:text-gray-400" 
                                placeholder="Belirtmek istediğiniz bir durum var mı?"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between pt-10">
                        <Button variant="ghost" onClick={prevStep} className="text-gray-400 hover:text-[#2B4E31] hover:bg-transparent font-body pl-0">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Geri
                        </Button>
                        <Button 
                            onClick={handleSubmit} 
                            disabled={loading}
                            className="bg-[#2B4E31] text-white hover:bg-[#1a301d] rounded-full px-12 py-6 font-medium shadow-lg shadow-[#2B4E31]/20 transition-all hover:-translate-y-1 min-w-[160px] font-body"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Talep Oluştur"}
                        </Button>
                    </div>
                </div>
            )}
        </ScrollAnimation>
      </div>
    </div>
  )
}