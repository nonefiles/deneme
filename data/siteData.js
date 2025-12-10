export const siteData = {
  hero: {
    title: "Kendinizi keşfetmeye ve iyileşmeye hazır mısınız?",
    subtitle: "Klinik Psikolog Busenaz Otlu ile güvenli, samimi ve bilimsel temelli bir terapi sürecine adım atın.",
    buttons: [
      { text: "📅 Randevu Al", link: "/randevu", type: "primary" },
      { text: "✉ İletişime Geç", link: "/iletisim", type: "secondary" },
    ],
  },
  about: {
    bio: "Busenaz Otlu, ODTÜ Psikoloji lisans (İngilizce) mezunu, Okan Üniversitesi Klinik Psikoloji (tezli) yüksek lisans mezunu. Tezi: 'Beden algısı ve bağlanma stillerinin premenstrüel dönem üzerindeki etkisi'.",
    education: ["ODTÜ – Psikoloji Lisans (İngilizce)", "Okan Üniversitesi – Klinik Psikoloji (Tezli)"],
    approach: "Dinamik Terapi",
    clients: ["Yetişkin", "Çift"],
    quote: "Her birey kendi iyileşme yolculuğunun rehberidir.",
    trainings: [
      {
        id: 1,
        title: "Cinsel Terapi Uygulayıcı Eğitimi",
        institution: "Arel Üniversitesi",
        year: "2023",
      },
      {
        id: 2,
        title: "Cinsel Terapi Eğitimi",
        institution: "Gedik Üniversitesi",
        year: "2023",
      },
      {
        id: 3,
        title: "Konsantrasyon Eğitimi",
        institution: "İstanbul İşletme Enstitüsü",
        year: "2022",
      },
      {
        id: 4,
        title: "Afet Destek Programı",
        institution: "Ev Okulu Derneği",
        year: "2022",
      },
      {
        id: 5,
        title: "Zirve Psikoloji",
        institution: "Seminer",
        year: "2022",
      },
    ],
  },
  services: [
    {
      id: 1,
      title: "Bireysel Terapi",
      description: "Kaygı, depresyon, stres yönetimi, özgüven sorunları üzerine çalışılır.",
      icon: "user",
      duration: "50 dakika",
      features: ["Kişiye özel tedavi planı", "Güvenli terapi ortamı", "Dinamik terapi yaklaşımı"],
    },
    {
      id: 2,
      title: "Çift Terapisi",
      description: "İlişkisel çatışmalar, iletişim sorunları üzerine destek.",
      icon: "users",
      duration: "60 dakika",
      features: ["İlişki dinamikleri analizi", "İletişim becerileri", "Çatışma çözümü teknikleri"],
    },
    {
      id: 3,
      title: "Online Terapi",
      description: "Yüz yüze kadar etkili, esnek randevu seçenekleri sunar.",
      icon: "monitor",
      duration: "50 dakika",
      features: ["Esnek saatler", "Güvenli platform", "Aynı kalitede hizmet"],
    },
  ],
  faq: [
    {
      id: 1,
      q: "Seanslar ne kadar sürüyor?",
      a: "Bireysel seanslar 50 dakika, çift terapisi 60 dakika sürer.",
    },
    {
      id: 2,
      q: "Online seanslar etkili mi?",
      a: "Evet, güvenli internet bağlantısıyla yüz yüze kadar etkili olabilir.",
    },
    {
      id: 3,
      q: "Seans iptali veya erteleme koşulları nelerdir?",
      a: "En az 24 saat önce bildirim yapılmalıdır, aksi halde ücret tahsil edilir.",
    },
    {
      id: 4,
      q: "Terapi ne kadar sürer?",
      a: "Kişiye ve hedeflere göre değişir.",
    },
    {
      id: 5,
      q: "Kişisel bilgilerim güvende mi?",
      a: "Tüm görüşmeler gizlilik ilkesi çerçevesinde korunur.",
    },
    {
      id: 6,
      q: "İlk görüşme ücretli mi?",
      a: "İlk 20 dakikalık tanışma görüşmesi ücretsizdir.",
    },
  ],
  therapyFor: [
    {
      id: 1,
      title: "Tekrarlayan İlişki Döngüleri Yaşayanlar",
      description: "Aynı sorunları farklı ilişkilerde yaşıyor, benzer kalıpları tekrarlıyorsanız.",
      icon: "refresh-cw",
    },
    {
      id: 2,
      title: "Kaygı, Depresyon, Özgüven Problemleri Yaşayanlar",
      description: "Sürekli kaygı, depresif duygu durumları veya özgüven eksikliği yaşıyorsanız.",
      icon: "heart",
    },
    {
      id: 3,
      title: "Geçmiş Travmalarla Yüzleşmek İsteyenler",
      description: "Geçmişte yaşadığınız travmatik deneyimlerin etkilerini azaltmak istiyorsanız.",
      icon: "shield",
    },
    {
      id: 4,
      title: "Duygusal Farkındalık Geliştirmek İsteyenler",
      description: "Duygularınızı daha iyi anlamak, yönetmek ve ifade etmek istiyorsanız.",
      icon: "lightbulb",
    },
  ],
  contact: {
    address: "2143. Cadde No:2/3 Mustafa Kemal Mah. Çankaya/Ankara",
    phone: "0535 622 15 11",
    email: "psk.busenazotlu@gmail.com",
    workingHours: {
      weekdays: "09:00 - 18:00",
      saturday: "10:00 - 16:00",
      sunday: "Kapalı",
    },
    social: {
      whatsapp: "905356221511",
      instagram: "#",
      linkedin: "#",
    },
  },
  navigation: [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımda", href: "/hakkimda" },
    { name: "Randevu", href: "/randevu" },
    { name: "Galeri", href: "/galeri" },
    { name: "SSS", href: "/sss" },
    { name: "İletişim", href: "/iletisim" },
  ],
  booking: {
    services: [
      {
        id: "individual",
        name: "Bireysel Terapi",
        duration: "50 dakika",
        description: "Kişisel gelişim, kaygı, depresyon ve stres yönetimi için birebir terapi seansları.",
        features: ["Kişiye özel tedavi planı", "Güvenli terapi ortamı", "Dinamik terapi yaklaşımı"],
      },
      {
        id: "couple",
        name: "Çift Terapisi",
        duration: "60 dakika",
        description: "İlişki sorunları, iletişim problemleri ve çift dinamikleri üzerine çalışma.",
        features: ["İlişki dinamikleri analizi", "İletişim becerileri", "Çatışma çözümü teknikleri"],
      },
      {
        id: "online",
        name: "Online Terapi",
        duration: "50 dakika",
        description: "Güvenli video konferans platformu üzerinden terapi hizmeti.",
        features: ["Esnek saatler", "Güvenli platform", "Aynı kalitede hizmet"],
      },
    ],
    timeSlots: {
      weekdays: ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
      saturday: ["10:00", "11:00", "13:00", "14:00", "15:00", "16:00"],
    },
    unavailableDates: [],
    bookingSteps: [
      { id: 1, title: "Hizmet Seçimi", icon: "user" },
      { id: 2, title: "Tarih Seçimi", icon: "calendar" },
      { id: 3, title: "Saat Seçimi", icon: "clock" },
      { id: 4, title: "Bilgileriniz", icon: "message-circle" },
    ],
  },
}
