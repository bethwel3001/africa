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
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass-nav py-2 shadow-md" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          {logo && (
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/50 shadow-lg transition-transform duration-300 group-hover:scale-110">
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
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-bold tracking-tight transition-all hover:text-secondary",
                  scrolled ? "text-foreground" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <LanguageSwitcher light={!scrolled} />
            <Button 
              size="sm" 
              asChild 
              className="bg-primary text-white hover:bg-primary/90 font-bold px-8 rounded-full shadow-lg"
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher light={!scrolled} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 rounded-full transition-all bg-white/10 backdrop-blur-sm",
              scrolled ? "text-primary border border-primary/10" : "text-white border border-white/20"
            )}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-[60] transition-all duration-500 flex flex-col md:hidden transform",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex justify-between items-center p-6 border-b border-black/5">
           {logo && (
            <div className="relative h-12 w-12 rounded-full overflow-hidden border border-primary/10">
              <Image src={logo.imageUrl} alt="Logo" fill className="object-cover" />
            </div>
          )}
          <button onClick={() => setIsOpen(false)} className="p-2 text-primary bg-primary/5 rounded-full">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center gap-8 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black text-primary hover:text-secondary transition-all"
            >
              {link.name}
            </Link>
          ))}
          <div className="w-24 h-1 bg-secondary rounded-full my-4" />
          <Button 
            size="lg" 
            className="w-full max-w-xs bg-primary text-white text-lg py-7 rounded-full font-bold shadow-xl" 
            asChild 
            onClick={() => setIsOpen(false)}
          >
            <Link href="/register">Join the Conference</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}