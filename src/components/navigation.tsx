"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Pillars", href: "/#pillars" },
  { name: "Program", href: "/#program" },
  { name: "Gallery", href: "/gallery" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const logo = PlaceHolderImages.find((img) => img.id === "logo")

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          {logo && (
            <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-full border-2 border-white/20 shadow-lg transition-transform duration-300 group-hover:scale-105">
              <Image
                src={logo.imageUrl}
                alt="Conference Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-bold transition-all hover:text-secondary",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="h-4 w-px bg-border/40 mx-2" />
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher light={!scrolled} />
            <Button 
              size="sm" 
              asChild 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-black px-6 rounded-full shadow-lg"
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Trigger - Removed Register button from here per user request */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher light={!scrolled} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 rounded-xl transition-all active:scale-95",
              scrolled ? "bg-primary/10 text-primary" : "bg-white/10 text-white"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-[60] transition-all duration-500 flex flex-col md:hidden transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-6 border-b border-border/10">
           {logo && (
            <div className="relative h-12 w-12 rounded-full overflow-hidden border border-primary/10">
              <Image src={logo.imageUrl} alt="Logo" fill className="object-cover" />
            </div>
          )}
          <button onClick={() => setIsOpen(false)} className="p-2 text-primary active:scale-90 transition-transform">
            <X size={28} />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col justify-center gap-6 p-8 overflow-y-auto">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black text-primary hover:text-secondary transition-all"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-border/10 my-4" />
          <Button 
            size="lg" 
            className="w-full bg-secondary text-secondary-foreground text-lg py-8 rounded-2xl font-black shadow-xl" 
            asChild 
            onClick={() => setIsOpen(false)}
          >
            <Link href="/register">Register Now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}