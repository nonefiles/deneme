import type React from "react"
import type { Metadata } from "next"
import { Poppins, Nunito } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
  preload: true,
})

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Klinik Psikolog Busenaz Otlu - Profesyonel Psikolojik Danışmanlık",
    template: "%s | Klinik Psikolog Busenaz Otlu",
  },
  description:
    "Kendinizi keşfetmeye ve iyileşmeye hazır mısınız? Klinik Psikolog Busenaz Otlu ile güvenli, samimi ve bilimsel temelli bir terapi sürecine adım atın.",
  keywords: [
    "klinik psikolog",
    "terapi",
    "psikolojik danışmanlık",
    "bireysel terapi",
    "çift terapisi",
    "online terapi",
    "Ankara",
    "Busenaz Otlu",
  ],
  authors: [{ name: "Busenaz Otlu" }],
  creator: "Busenaz Otlu",
  publisher: "Busenaz Otlu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/Logo.png', type: 'image/png', sizes: 'any' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: baseUrl,
    title: "Klinik Psikolog Busenaz Otlu",
    description:
      "Profesyonel psikolojik danışmanlık hizmetleri. Bireysel terapi, çift terapisi ve online terapi seçenekleri.",
    siteName: "Klinik Psikolog Busenaz Otlu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Psikolog Busenaz Otlu",
    description: "Profesyonel psikolojik danışmanlık hizmetleri",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
    generator: 'CumaKaradash'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#74966F" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${poppins.variable} ${nunito.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen bg-gradient-to-br from-[#D5DFCF] to-[#FFFFFF]">
            <Navigation />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
