
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Pillars", href: "/#pillars" },
  { name: "Program", href: "/#program" },
  { name: "Gallery", href: "/gallery" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent",
        isOpen && "bg-white"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
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
                className={cn(
                  "text-sm font-bold tracking-tight transition-colors hover:text-primary uppercase",
                  isScrolled || isOpen ? "text-foreground" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-6 border-l pl-6 border-primary/10">
            <LanguageSwitcher light={!isScrolled && !isOpen} />
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
          {!isOpen && <LanguageSwitcher light={!isScrolled} />}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 rounded-md transition-colors z-[60]",
              isScrolled || isOpen ? "text-primary" : "text-white"
            )}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-50 transition-transform duration-300 md:hidden",
          isOpen ? "transform-none" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center justify-center text-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
