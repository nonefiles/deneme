import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// API Key doğrudan eklendi (Normalde .env dosyasında saklanması önerilir)
const resend = new Resend("re_ZsgyWve1_CM2PHFLu63W8u3Dzn2wisoqF")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type } = body

    // ----------------------------------------------------------------------
    // 1. RANDEVU İŞLEMİ (type: "appointment")
    // ----------------------------------------------------------------------
    if (type === "appointment") {
      const { name, email, phone, service, date, time, note } = body

      // Validasyon
      if (!name || !email || !phone || !service || !date || !time) {
        return NextResponse.json({ error: "Eksik alanlar var." }, { status: 400 })
      }

      // Hizmet İsimlerini Türkçeleştirme Haritası
      const serviceNames: Record<string, string> = {
        "individual": "Bireysel Terapi",
        "couples": "Çift Terapisi",
        "adolescent": "Ergen Terapisi",
        "online": "Online Terapi",
        // Varsayılan olarak eğer listede yoksa gelen değeri (ID'yi) gösteririz, 
        // ancak buraya diğer hizmet ID'lerinizi de ekleyebilirsiniz.
      }

      const displayService = serviceNames[service] || service

      // Tarih formatlama
      const formattedDate = new Date(date).toLocaleDateString("tr-TR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })

      // Mail Gönderimi
      if (resend) {
        try {
          await resend.emails.send({
            from: "Randevu Sistemi <onboarding@resend.dev>",
            to: ["cumcum565@gmail.com"],
            subject: `🗓️ Yeni Randevu Talebi: ${name}`,
            html: `
              <div style="font-family: sans-serif; color: #333;">
                <h2 style="color: #2B4E31;">Yeni Randevu Talebi</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px; border: 1px solid #ddd;">
                  <tr style="background-color: #f8f9fa;">
                    <td style="padding: 12px; border: 1px solid #ddd; width: 30%;"><strong>Ad Soyad:</strong></td>
                    <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;"><strong>Hizmet:</strong></td>
                    <td style="padding: 12px; border: 1px solid #ddd;">${displayService}</td>
                  </tr>
                  <tr style="background-color: #f8f9fa;">
                    <td style="padding: 12px; border: 1px solid #ddd;"><strong>Tarih:</strong></td>
                    <td style="padding: 12px; border: 1px solid #ddd;">${formattedDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;"><strong>Saat:</strong></td>
                    <td style="padding: 12px; border: 1px solid #ddd;">${time}</td>
                  </tr>
                  <tr style="background-color: #f8f9fa;">
                    <td style="padding: 12px; border: 1px solid #ddd;"><strong>Telefon:</strong></td>
                    <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;"><strong>E-posta:</strong></td>
                    <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
                  </tr>
                  ${note ? `
                  <tr style="background-color: #f8f9fa;">
                    <td style="padding: 12px; border: 1px solid #ddd;"><strong>Not:</strong></td>
                    <td style="padding: 12px; border: 1px solid #ddd;">${note}</td>
                  </tr>` : ''}
                </table>
              </div>
            `,
          })
        } catch (mailError) {
          console.error("Randevu mail hatası:", mailError)
        }
      }

      return NextResponse.json({ success: true, message: "Randevu başarıyla alındı." })
    }

    // ----------------------------------------------------------------------
    // 2. İLETİŞİM İŞLEMİ (type: "contact")
    // ----------------------------------------------------------------------
    else if (type === "contact") {
      const { name, email, phone, subject, message } = body

      // Validasyon
      if (!name || !email || !message) {
        return NextResponse.json({ error: "Eksik alanlar var." }, { status: 400 })
      }

      // Mail Gönderimi
      if (resend) {
        try {
          await resend.emails.send({
            from: "İletişim Formu <onboarding@resend.dev>",
            to: ["cumcum565@gmail.com"],
            subject: `📩 Yeni İletişim Mesajı: ${subject || 'Konusuz'}`,
            html: `
              <div style="font-family: sans-serif; color: #333;">
                <h2 style="color: #2B4E31;">Web Sitesinden Yeni Mesaj</h2>
                
                <div style="background-color: #f0f4f1; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #74966F;">
                  <p style="margin: 5px 0;"><strong>Gönderen:</strong> ${name}</p>
                  <p style="margin: 5px 0;"><strong>E-posta:</strong> ${email}</p>
                  <p style="margin: 5px 0;"><strong>Telefon:</strong> ${phone || '-'}</p>
                  <p style="margin: 5px 0;"><strong>Konu:</strong> ${subject || '-'}</p>
                </div>

                <h3>Mesaj İçeriği:</h3>
                <div style="padding: 15px; border: 1px solid #ddd; border-radius: 8px; background-color: #fff; line-height: 1.6;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            `,
          })
        } catch (mailError) {
          console.error("İletişim mail hatası:", mailError)
        }
      }

      return NextResponse.json({ success: true, message: "Mesajınız iletildi." })
    }

    // ----------------------------------------------------------------------
    // GEÇERSİZ TÜR
    // ----------------------------------------------------------------------
    else {
      return NextResponse.json({ error: "Geçersiz işlem türü." }, { status: 400 })
    }

  } catch (error) {
    console.error("API Genel Hatası:", error)
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 })
  }
}