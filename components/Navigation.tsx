"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Calendar } from "lucide-react" // HelpCircle removed
import { Button } from "@/components/ui/button"
import { siteData } from "@/data/siteData"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
       <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="/Logo.png" alt="Busenaz Otlu Logo" className="h-10 w-auto" />
            </div>
            <span className="font-heading font-semibold text-[#2B4E31] text-lg">Busenaz Otlu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {siteData.navigation
              .filter((item) => item.href !== "/randevu")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[#49724B] hover:text-[#74966F] transition-colors duration-200 font-medium text-sm font-body ${
                    pathname === item.href ? "text-[#74966F] font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            <Link href="/randevu">
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#74966F] to-[#49724B] text-white hover:from-[#49724B] hover:to-[#74966F] transition-all duration-300 shadow-md hover-scale font-body"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Randevu Al
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-[#49724B]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t animate-slide-in-left">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {siteData.navigation
              .filter((item) => item.href !== "/randevu")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-[#49724B] hover:text-[#74966F] transition-colors duration-200 font-body ${
                    pathname === item.href ? "text-[#74966F] font-semibold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            <Link href="/randevu">
              <Button
                className="bg-gradient-to-r from-[#74966F] to-[#49724B] text-white hover:from-[#49724B] hover:to-[#74966F] transition-all duration-300 w-full font-body"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Randevu Al
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
