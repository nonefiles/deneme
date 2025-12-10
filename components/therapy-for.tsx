import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Users, Lightbulb, Shield, Smile } from "lucide-react"

export default function TherapyFor() {
  const benefits = [
    {
      icon: Heart,
      title: "Kaygı ve Stres",
      description: "Günlük yaşamda karşılaştığınız kaygı ve stres durumlarıyla başa çıkma",
    },
    {
      icon: Brain,
      title: "Depresyon",
      description: "Depresif duygu durumları ve motivasyon eksikliği ile mücadele",
    },
    {
      icon: Users,
      title: "İlişki Sorunları",
      description: "Aile, arkadaş ve romantik ilişkilerdeki zorlukları aşma",
    },
    {
      icon: Shield,
      title: "Travma ve Kayıp",
      description: "Geçmiş travmatik deneyimler ve kayıp yaşantılarını işleme",
    },
    {
      icon: Lightbulb,
      title: "Duygusal Farkındalık",
      description: "Kendinizi daha iyi tanıma ve duygusal zeka geliştirme",
    },
    {
      icon: Smile,
      title: "Kişisel Gelişim",
      description: "Yaşam kalitesini artırma ve potansiyelinizi keşfetme",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-[#F8F6F0]">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">Terapi Kimler İçin?</h2>
          <p className="text-lg text-[#4A5568] max-w-3xl mx-auto">
            Terapi, yaşamınızda pozitif değişimler yaratmak isteyen herkes için uygundur. Aşağıdaki durumlardan herhangi
            birini yaşıyorsanız, terapi size yardımcı olabilir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="card-hover border-0 shadow-md bg-white/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#A8C09A] to-[#8B7355] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#2D3748] mb-3">{benefit.title}</h3>
                <p className="text-[#4A5568] leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-[#A8C09A]/10 to-[#B8C5D1]/10 rounded-3xl p-8 text-center animate-slide-up">
          <h3 className="font-serif text-2xl font-semibold text-[#2D3748] mb-4">Terapi Bir Güçlülük İşaretidir</h3>
          <p className="text-[#4A5568] max-w-3xl mx-auto leading-relaxed">
            Yardım almak, zayıflık değil güçlülük işaretidir. Kendinize yatırım yaparak, daha sağlıklı ve mutlu bir
            yaşam için adım atıyorsunuz. Her insan yaşamının bir döneminde profesyonel desteğe ihtiyaç duyabilir ve bu
            tamamen normaldir.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["Güvenli Ortam", "Yargısız Yaklaşım", "Kişiye Özel Çözümler", "Bilimsel Temelli"].map(
              (feature, index) => (
                <span
                  key={index}
                  className="bg-white/80 text-[#8B7355] px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {feature}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
