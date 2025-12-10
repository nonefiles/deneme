/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@fortawesome/react-fontawesome']
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  // Vercel için optimize edilmiş ayarlar
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Static export için (eğer gerekirse)
  // output: 'export',
  // trailingSlash: true,
}

export default nextConfig
