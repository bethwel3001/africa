
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Pillars", href: "/#pillars" },
  { name: "Program", href: "/#program" },
  { name: "Gallery", href: "/gallery" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [showNav, setShowNav] = React.useState(true)
  const lastScroll = React.useRef(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      if (current > lastScroll.current && current > 60) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
      lastScroll.current = current
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        "relative z-[100] transition-all duration-300 bg-white/95 backdrop-blur-md py-3 shadow-sm border-b rounded-b-2xl",
        showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative h-16 w-40 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/LOGO/logo.jpeg"
              alt="Conference Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold tracking-tight transition-colors hover:text-primary uppercase text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-6 border-l pl-6 border-primary/10">
            <LanguageSwitcher light={showNav && !isOpen} />
            <Link 
              href="/register"
              className="bg-primary text-white hover:bg-primary/90 font-bold px-8 py-2 text-xs rounded-full transition-all shadow-md uppercase tracking-wider"
            >
              Register
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher light={showNav && !isOpen} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 rounded-full transition-all",
              showNav || isOpen ? "text-primary bg-primary/5" : "text-white bg-white/10 backdrop-blur-sm"
            )}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Navigation - No Register Button */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-[110] transition-all duration-300 flex flex-col md:hidden transform overscroll-none",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex justify-between items-center p-6 border-b border-black/5 bg-white">
          <div className="relative h-16 w-40">
            <Image src="/LOGO/logo.jpeg" alt="Logo" fill className="object-contain" />
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 text-primary bg-primary/5 rounded-full">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center gap-6 p-6 bg-white w-full h-full">
          <nav className="w-full flex flex-col items-center gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-primary hover:text-secondary transition-all uppercase tracking-wide py-4 px-6 rounded-2xl w-11/12 text-center bg-primary/5 shadow-sm border border-primary/10"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
