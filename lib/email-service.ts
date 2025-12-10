// Bu dosya gerçek email servisi entegrasyonu için hazırlanmıştır
// Resend, SendGrid, Nodemailer gibi servislerle kullanılabilir

export interface EmailData {
  to: string
  subject: string
  html: string
}

export interface AppointmentData {
  appointmentNumber: string
  service: string
  date: string
  time: string
  name: string
  email: string
  phone: string
  message?: string
}

// Gerçek email servisi entegrasyonu için bu fonksiyonları kullanın
export async function sendEmail(emailData: EmailData) {
  // Örnek: Resend ile email gönderme
  /*
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  return await resend.emails.send({
    from: 'noreply@busenazotlu.com',
    to: emailData.to,
    subject: emailData.subject,
    html: emailData.html,
  })
  */

  // Şimdilik console'a yazdırıyoruz
  console.log("Email gönderildi:", emailData)
  return { success: true }
}

export function generateOwnerNotificationEmail(data: AppointmentData): string {
  const formattedDate = new Date(data.date).toLocaleDateString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #0F2A1D;">🗓️ Yeni Randevu Talebi</h1>
      <div style="background: #E3EED4; padding: 20px; border-radius: 8px;">
        <h2>Randevu Detayları</h2>
        <p><strong>Randevu No:</strong> ${data.appointmentNumber}</p>
        <p><strong>Hizmet:</strong> ${data.service}</p>
        <p><strong>Tarih:</strong> ${formattedDate}</p>
        <p><strong>Saat:</strong> ${data.time}</p>
        
        <h3>Danışan Bilgileri</h3>
        <p><strong>Ad Soyad:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        
        ${data.message ? `<p><strong>Mesaj:</strong> ${data.message}</p>` : ""}
      </div>
    </div>
  `
}

export function generateClientConfirmationEmail(data: AppointmentData): string {
  const formattedDate = new Date(data.date).toLocaleDateString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #0F2A1D;">✅ Randevunuz Alındı</h1>
      <p>Merhaba ${data.name},</p>
      <p>Randevu talebiniz başarıyla alınmıştır.</p>
      
      <div style="background: #E3EED4; padding: 20px; border-radius: 8px;">
        <h3>Randevu Bilgileriniz</h3>
        <p><strong>Randevu No:</strong> ${data.appointmentNumber}</p>
        <p><strong>Hizmet:</strong> ${data.service}</p>
        <p><strong>Tarih:</strong> ${formattedDate}</p>
        <p><strong>Saat:</strong> ${data.time}</p>
      </div>
      
      <p>En kısa sürede sizinle iletişime geçeceğim.</p>
      <p>Saygılarımla,<br>Kln. Psk. Busenaz OTLU</p>
    </div>
  `
}
