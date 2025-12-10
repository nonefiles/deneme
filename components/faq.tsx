"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Seans süresi ne kadar?",
      answer:
        "Bireysel terapi seansları 50 dakika, çift terapisi seansları ise 60 dakika sürmektedir. İlk görüşme ücretsiz olup 20 dakika sürer.",
    },
    {
      question: "Online terapi yüz yüze terapi kadar etkili mi?",
      answer:
        "Araştırmalar online terapinin yüz yüze terapi kadar etkili olduğunu göstermektedir. Güvenli video konferans platformu kullanarak, aynı kalitede hizmet sunuyorum.",
    },
    {
      question: "Randevu iptal koşulları nelerdir?",
      answer:
        "Randevunuzdan en az 24 saat önce haber vermeniz durumunda iptal ücreti alınmaz. 24 saatten az süre kala yapılan iptallerde seans ücreti tahsil edilir.",
    },
    {
      question: "Gizlilik nasıl sağlanır?",
      answer:
        "Tüm görüşmelerimiz tamamen gizlidir. Meslek etiği gereği, izniniz olmadan hiçbir bilginizi üçüncü şahıslarla paylaşmam. Bu kural sadece yasal zorunluluklar durumunda istisna teşkil eder.",
    },
    {
      question: "Terapi süreci ne kadar sürer?",
      answer:
        "Terapi süresi kişiye ve duruma göre değişiklik gösterir. Bazı konular birkaç seansta çözülürken, daha derin çalışma gerektiren durumlar daha uzun sürebilir. Bu konuyu birlikte değerlendiririz.",
    },
    {
      question: "Hangi yaş gruplarıyla çalışıyorsunuz?",
      answer:
        "Yetişkin bireyler (18 yaş ve üzeri) ve çiftlerle çalışmaktayım. Dinamik terapi yaklaşımını kullanarak, her yaş grubuna uygun terapi süreci planlıyorum.",
    },
    {
      question: "İlk seansa nasıl hazırlanmalıyım?",
      answer:
        "İlk seansa özel bir hazırlık yapmanıza gerek yoktur. Rahat kıyafetler giyerek, açık ve samimi olmaya hazır olmanız yeterlidir. Sorularınızı ve beklentilerinizi paylaşabilirsiniz.",
    },
    {
      question: "Ödeme nasıl yapılır?",
      answer:
        "Seans ücretleri nakit, kredi kartı veya havale ile ödenebilir. Online seanslar için ön ödeme gereklidir. Detaylı bilgi için iletişime geçebilirsiniz.",
    },
  ]

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-[#F8F6F0] to-white">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Terapi süreci hakkında merak ettiklerinizin yanıtlarını burada bulabilirsiniz.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-0 shadow-md bg-white/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#F8F6F0]/50 transition-colors duration-200 rounded-lg"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="font-semibold text-[#2D3748] pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#A8C09A] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#A8C09A] flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#4A5568] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-slide-up">
          <div className="bg-gradient-to-r from-[#A8C09A]/10 to-[#B8C5D1]/10 rounded-2xl p-6">
            <h4 className="font-serif text-xl font-semibold text-[#2D3748] mb-2">Başka sorularınız mı var?</h4>
            <p className="text-[#4A5568] mb-4">Merak ettikleriniz için benimle iletişime geçmekten çekinmeyin.</p>
            <a
              href="#contact"
              className="text-[#A8C09A] hover:text-[#8B7355] font-medium transition-colors duration-200"
            >
              İletişime Geç →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
