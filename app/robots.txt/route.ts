import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"

  const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
