"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  MapPin,
  Award,
  Heart
} from "lucide-react"
import ScrollAnimation from "@/components/ScrollAnimation"

// Resim veri tipi tanımlaması
interface GalleryImage {
  id: number
  category: string
  imageUrl: string
  title: string
  description: string
  alt: string
  src: string
}

// Galeri verileri - gerçek projede bu veri bir API'den gelecek
const galleryData = {
  categories: [
    {
      id: "office",
      name: "Ofis",
      description: "Terapi odalarım ve çalışma alanlarım",
      icon: MapPin,
      count: 1
    },
    {
      id: "certificates",
      name: "Sertifikalar",
      description: "Eğitim ve sertifikalarım",
      icon: Award,
      count: 33 // Güncellendi: 32 + 1 yeni png
    }
  ],
  images: [
    // Ofis kategorisi
    {
      id: 1,
      category: "office",
      imageUrl: "/Ofis.jpg",
      title: "Ofisim",
      description: "Çalışma ofisim",
      alt: "Çalışma ofisim",
      src: "/Ofis.jpg"
    },
    
    // Sertifikalar kategorisi (Otomatik oluşturulan 1-32 arası .jpg dosyaları)
    ...Array.from({ length: 32 }, (_, i) => ({
      id: i + 2, // 1 ofis olduğu için 2'den başlıyor (ID 2 - 33 arası)
      category: "certificates",
      imageUrl: `/sertifika (${i + 1}).jpg`,
      title: `Sertifika ${i + 1}`,
      description: `Eğitim ve sertifikalarımdan örnek ${i + 1}`,
      alt: `Sertifika ${i + 1}`,
      src: `/sertifika (${i + 1}).jpg`
    })),

    // Manuel olarak eklenen 33. Sertifika (.png uzantılı)
    {
      id: 34, // Önceki döngü ID 33'te bittiği için ID 34
      category: "certificates",
      imageUrl: "/sertifika(33).png",
      title: "Sertifika 33",
      description: "Eğitim ve sertifikalarımdan örnek 33",
      alt: "Sertifika 33",
      src: "/sertifika(33).png"
    }
  ]
}

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Filtrelenmiş resimler
  const filteredImages = activeCategory === "all" 
    ? galleryData.images 
    : galleryData.images.filter(img => img.category === activeCategory)

  // Lightbox fonksiyonları
  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setLightboxIndex(0)
  }

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredImages.length
    setLightboxIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1
    setLightboxIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-[#D5DFCF] to-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#2B4E31] mb-4">Galeri</h1>
          <p className="text-lg text-[#49724B] max-w-2xl mx-auto font-body">
            Terapi alanlarım, sertifikalarım ve mesleki gelişim sürecimden görüntüler.
          </p>
        </ScrollAnimation>

        {/* Kategori İstatistikleri */}
        <ScrollAnimation className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryData.categories.map((category) => (
              <Card key={category.id} className="shadow-lg border-0 bg-white/90 backdrop-blur-sm hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#74966F] to-[#49724B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#2B4E31] mb-2">{category.name}</h3>
                  <p className="text-[#49724B] text-sm mb-3 font-body">{category.description}</p>
                  <Badge className="bg-[#74966F]/20 text-[#74966F] font-body">
                    {category.count} Fotoğraf
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* Filtre Butonları */}
        <ScrollAnimation className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-body ${
                activeCategory === "all" 
                  ? "bg-[#74966F] text-white shadow-lg" 
                  : "bg-white/80 text-[#49724B] hover:bg-[#74966F]/10 border border-[#A3BA9C]"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Tümü ({galleryData.images.length})</span>
            </button>
            {galleryData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 font-body ${
                  activeCategory === category.id 
                    ? "bg-[#74966F] text-white shadow-lg" 
                    : "bg-white/80 text-[#49724B] hover:bg-[#74966F]/10 border border-[#A3BA9C]"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name} ({category.count})</span>
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Galeri Grid */}
        <ScrollAnimation className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group overflow-hidden shadow-lg border-0 bg-white/90 backdrop-blur-sm hover-lift cursor-pointer"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-heading font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90 font-body">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Kapatma Butonu */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigasyon Butonları */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/30 rounded-full p-2 backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/30 rounded-full p-2 backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Resim */}
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={800}
                  height={600}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                
                {/* Resim Bilgileri */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="font-body text-lg opacity-90">{selectedImage.description}</p>
                  <p className="text-sm opacity-70 mt-2 font-body">
                    {lightboxIndex + 1} / {filteredImages.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* İletişim CTA */}
        <ScrollAnimation className="text-center">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-[#74966F] to-[#49724B] text-white max-w-2xl mx-auto">
            <CardContent className="p-12">
              <Heart className="w-12 h-12 mx-auto mb-6 opacity-90" />
              <h3 className="font-heading text-2xl font-bold mb-4">Birlikte Çalışmaya Hazır mısınız?</h3>
              <p className="text-lg mb-8 opacity-90 font-body">
                Sizin için hazırladığım güvenli ve profesyonel ortamda, terapi yolculuğunuza başlayalım.
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