import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Award, Calendar } from "lucide-react"

export default function Trainings() {
  const trainings = [
    {
      title: "Dinamik Psikoterapi Eğitimi",
      organization: "İstanbul Psikanaliz Enstitüsü",
      year: "2023",
      type: "Sertifika Programı",
      duration: "120 saat",
    },
    {
      title: "Bağlanma Teorisi ve Klinik Uygulamaları",
      organization: "Türk Psikoloji Derneği",
      year: "2023",
      type: "Workshop",
      duration: "16 saat",
    },
    {
      title: "Travma Odaklı Bilişsel Davranışçı Terapi",
      organization: "Acıbadem Üniversitesi",
      year: "2022",
      type: "Sertifika Programı",
      duration: "80 saat",
    },
    {
      title: "Çift ve Aile Terapisi Temelleri",
      organization: "Boğaziçi Üniversitesi",
      year: "2022",
      type: "Eğitim Programı",
      duration: "60 saat",
    },
    {
      title: "Mindfulness Tabanlı Stres Azaltma",
      organization: "MBSR Türkiye",
      year: "2021",
      type: "Sertifika Programı",
      duration: "40 saat",
    },
    {
      title: "Klinik Görüşme Teknikleri",
      organization: "İstanbul Bilgi Üniversitesi",
      year: "2021",
      type: "Workshop",
      duration: "24 saat",
    },
  ]

  return (
    <section id="trainings" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">Aldığı Eğitimler</h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Sürekli öğrenme ve gelişim ilkesiyle, alanımda en güncel yaklaşımları öğrenmeye devam ediyorum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainings.map((training, index) => (
            <Card
              key={index}
              className="card-hover border-0 shadow-md bg-gradient-to-br from-white to-[#F8F6F0]/30 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#A8C09A] to-[#8B7355] rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="border-[#A8C09A] text-[#8B7355] text-xs">
                    {training.year}
                  </Badge>
                </div>

                <h3 className="font-serif text-lg font-semibold text-[#2D3748] mb-2 leading-tight">{training.title}</h3>

                <p className="text-[#6B7280] text-sm mb-3 font-medium">{training.organization}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-[#6B7280]">
                    <Award className="w-3 h-3 mr-1" />
                    {training.type}
                  </div>
                  <div className="flex items-center text-xs text-[#6B7280]">
                    <Calendar className="w-3 h-3 mr-1" />
                    {training.duration}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continuing Education Note */}
        <div className="mt-12 text-center animate-slide-up">
          <div className="bg-gradient-to-r from-[#A8C09A]/10 to-[#B8C5D1]/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <h4 className="font-serif text-xl font-semibold text-[#2D3748] mb-2">Sürekli Eğitim</h4>
            <p className="text-[#4A5568]">
              Psikoloji alanındaki gelişmeleri takip ederek, danışanlarıma en iyi hizmeti sunabilmek için eğitimlerime
              düzenli olarak devam etmekteyim.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
