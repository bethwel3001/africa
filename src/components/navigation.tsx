
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
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Program", href: "/#program" },
  { name: "Speakers", href: "/#speakers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/#contact" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {logo && (
            <div className="relative h-12 w-32 md:h-16 md:w-48 overflow-hidden">
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-secondary transition-colors",
                scrolled ? "text-foreground" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-border mx-2" />
          <LanguageSwitcher />
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild className={cn(
              scrolled ? "border-primary text-primary" : "border-white text-white hover:bg-white/10"
            )}>
              <Link href="/register">Register</Link>
            </Button>
            <Button size="sm" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/register">Buy Ticket</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 rounded-md",
              scrolled ? "text-primary" : "text-white"
            )}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6">
          <div className="flex flex-col gap-6 items-center text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="w-full h-px bg-border my-4" />
            <Button size="lg" className="w-full bg-primary text-white" asChild onClick={() => setIsOpen(false)}>
              <Link href="/register">Register Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full border-secondary text-secondary" asChild onClick={() => setIsOpen(false)}>
              <Link href="/register">Buy Ticket</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
