"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ScrollAnimation from "@/components/ScrollAnimation"

const faqData = [
  {
    id: "1",
    q: "Seanslar ne kadar sürüyor?",
    a: "Bireysel seanslar ortalama 50 dakika, çift terapisi seansları ise 60 dakika sürmektedir. Bu süre, terapinin güvenli bir çerçeve içinde ilerlemesini sağlar.",
  },
  {
    id: "2",
    q: "Online seanslar yüz yüze kadar etkili mi?",
    a: "Evet. Online seanslar, yüz yüze seanslar kadar etkili olabilir. Güvenli, kesintisiz bir internet bağlantısıyla yapılan online görüşmelerde terapötik ilişki aynı derinlikle kurulabilir. Yurtdışında yaşayan, şehir dışında bulunan veya kliniğe gelemeyen birçok danışan için bu büyük bir avantaj sağlar.",
  },
  {
    id: "3",
    q: "Seansı iptal etmem gerekirse ne yapmalıyım?",
    a: "Randevunuzu en az 24 saat önceden haber vererek iptal edebilir ya da erteleyebilirsiniz. Son dakikada yapılan iptallerde seans ücreti tahsil edilmektedir, çünkü bu süre başka bir danışana ayrılabilecekken boş kalmış olur. Bu, hem zaman hem de sınır koruması açısından önemli bir etik ilkemizdir.",
  },
  {
    id: "4",
    q: "Terapi ne kadar sürer?",
    a: "Bu tamamen kişisel bir süreçtir. Bazı danışanlar belirli bir konu üzerine kısa süreli çalışmayı tercih ederken, bazıları daha uzun soluklu bir içsel dönüşüm sürecine ihtiyaç duyar. İlk birkaç görüşmede birlikte hedefler belirlenir ve sürecin ne kadar devam edeceğine birlikte karar verilir.",
  },
  {
    id: "5",
    q: "Her seans aynı şekilde mi ilerler?",
    a: "Hayır. Her seans, o günkü ruh haliniz, gündeminiz ve duygusal ihtiyaçlarınıza göre şekillenir. Bazen yoğun duygular üzerine çalışılırken, bazen farkındalık kazanımına odaklanılır. Terapötik süreç esnektir; ama aynı zamanda güvenli bir çerçevede ilerler.",
  },
  {
    id: "6",
    q: "Kişisel bilgilerim güvende mi?",
    a: "Kesinlikle evet. Terapide konuşulan her şey gizlilik ilkesi kapsamında korunur. Hiçbir bilgi üçüncü kişilerle paylaşılmaz. Yalnızca çok nadir durumlarda (kişinin kendine veya başkasına zarar verme riski, yasal yükümlülükler gibi) etik ve hukuki yükümlülükler doğrultusunda istisnalar uygulanır.",
  },
  {
    id: "7",
    q: "İlk görüşmede ne konuşacağız?",
    a: "İlk görüşme, sizi daha yakından tanımak ve nasıl bir terapi süreci oluşturacağımızı birlikte belirlemek içindir. Gündelik sorunlarınız, terapiye başvurma nedenleriniz, geçmiş deneyimleriniz ve beklentileriniz üzerine konuşuruz. Ayrıca, hangi terapi yaklaşımıyla çalışacağımızı da birlikte netleştiririz.",
  },
  {
    id: "8",
    q: "Seans ücretleri ne kadar?",
    a: "Seans ücretleri, güncel koşullara ve seans süresine göre belirlenmektedir. Güncel ücret bilgisi ve ödeme seçenekleri için bizimle iletişime geçebilirsiniz.",
  },
  {
    id: "9",
    q: "Kliniğiniz nerede?",
    a: "Kliniğimiz Ankara’da, merkezi bir konumda yer almaktadır. Detaylı adres bilgisi ve ulaşım yönlendirmeleri için [iletişim sayfamızı] ziyaret edebilirsiniz.",
  },
  {
    id: "10",
    q: "Terapi Kimler İçin Uygundur?",
    a: `Terapiye başlamak için “çok kötü” hissetmek gerekmez. Her birey, kendi iyilik halini güçlendirmek ve içsel kaynaklarını harekete geçirmek için terapiye başlayabilir. Özellikle:
    <ul class="list-disc list-inside mt-2 space-y-1">
      <li>Sürekli tekrarlayan ilişkisel döngüler yaşayanlar</li>
      <li>Duygularını bastıran ya da kontrol etmekte zorlananlar</li>
      <li>Kendine yabancılaşmış hissedenler</li>
      <li>Kaygı, depresyon, özgüven problemleri yaşayanlar</li>
      <li>Geçmiş travmalarla yüzleşmek isteyenler</li>
      <li>Duygusal farkındalığını artırmak isteyenler</li>
    </ul>
    için terapi derinleştirici ve dönüştürücü bir yol olabilir.`,
  },
]

export default function SSSPage() {
  const [mounted, setMounted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null) // Başlangıçta hiçbirini açık tutma

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="container mx-auto py-12 px-4 md:px-6 min-h-screen">
      <ScrollAnimation className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#2B4E31] mb-4">Sıkça Sorulan Sorular</h1>
        <p className="text-lg text-[#49724B] max-w-2xl mx-auto font-body">
          Terapi süreci hakkında merak ettiklerinizin yanıtlarını burada bulabilirsiniz.
        </p>
      </ScrollAnimation>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <ScrollAnimation key={faq.id} delay={index * 50}>
            <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#D5DFCF]/50 transition-colors duration-200 rounded-lg"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-heading font-semibold text-[#2B4E31] pr-4">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#74966F] flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    {/* Use div instead of p for content that might contain block-level elements like ul */}
                    <div
                      className="text-[#49724B] leading-relaxed font-body"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </ScrollAnimation>
        ))}
      </div>
    </main>
  )
}
