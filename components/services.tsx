import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Users, Monitor, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      title: "Bireysel Terapi",
      description:
        "Kişisel gelişim, duygusal zorluklar ve yaşam sorunları için birebir terapi seansları. Güvenli bir ortamda kendinizi keşfetme fırsatı.",
      icon: User,
      features: ["50 dakika seans", "Dinamik terapi yaklaşımı", "Kişiye özel tedavi planı", "Güvenli terapi ortamı"],
      color: "from-[#A8C09A] to-[#8B7355]",
    },
    {
      title: "Çift Terapisi",
      description:
        "İlişki sorunları, iletişim problemleri ve çift dinamikleri üzerine çalışma. Birlikte büyüme ve iyileşme süreci.",
      icon: Users,
      features: ["60 dakika seans", "İlişki dinamikleri", "İletişim becerileri", "Çatışma çözümü"],
      color: "from-[#B8C5D1] to-[#A8C09A]",
    },
    {
      title: "Online Terapi",
      description:
        "Güvenli video konferans platformu üzerinden terapi hizmeti. Evinizin rahatlığında profesyonel destek.",
      icon: Monitor,
      features: ["Esnek saatler", "Güvenli platform", "Aynı kalitede hizmet", "Kolay erişim"],
      color: "from-[#8B7355] to-[#B8C5D1]",
    },
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-[#F8F6F0] to-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">Hizmetlerim</h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Size en uygun terapi türünü seçerek, kişisel ihtiyaçlarınıza odaklanan bir süreç yaşayabilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-hover border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-serif text-[#2D3748] text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-[#4A5568] text-center leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-[#6B7280]">
                      <div className="w-1.5 h-1.5 bg-[#A8C09A] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/randevu" className="block pt-2">
                  <Button
                    className={`bg-gradient-to-r ${service.color} text-white hover:shadow-lg transition-all duration-300 w-full rounded-full`}
                  >
                    Randevu Al
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-[#A8C09A]/10 to-[#B8C5D1]/10 rounded-3xl p-8 text-center animate-slide-up">
          <h3 className="font-serif text-2xl font-semibold text-[#2D3748] mb-4">İlk Görüşme Ücretsiz</h3>
          <p className="text-[#4A5568] mb-6 max-w-2xl mx-auto">
            Size en uygun terapi yaklaşımını belirlemek için 20 dakikalık ücretsiz ön görüşme yapıyoruz. Bu süreçte
            sorularınızı yanıtlıyor ve beklentilerinizi değerlendiriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-[#6B7280]">
              <MapPin className="w-5 h-5 mr-2 text-[#A8C09A]" />
              İstanbul - Yüz Yüze
            </div>
            <div className="flex items-center text-[#6B7280]">
              <Monitor className="w-5 h-5 mr-2 text-[#A8C09A]" />
              Online Seçeneği Mevcut
            </div>
            <div className="flex items-center text-[#6B7280]">
              <Clock className="w-5 h-5 mr-2 text-[#A8C09A]" />
              Esnek Saatler
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
