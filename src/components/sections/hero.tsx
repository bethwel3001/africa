"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ChevronDown, ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg")

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {heroImage && (
        <>
          <Image
            src={heroImage.imageUrl}
            alt="Hero Background"
            fill
            className="object-cover animate-slow-zoom"
            priority
            data-ai-hint="african delegates"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
        </>
      )}

      <div className="container relative z-10 px-4 flex flex-col items-center text-center h-full justify-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full bg-secondary/90 text-secondary-foreground font-black text-[11px] tracking-[0.2em] uppercase shadow-2xl backdrop-blur-sm">
            21st – 23rd October 2026 • Nairobi
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white leading-[1.1] text-balance max-w-4xl">
            REIMAGINING <br className="hidden md:block" />
            <span className="text-secondary">AFRICA'S</span> FUTURE
          </h1>
          
          <p className="text-base md:text-xl font-medium mb-12 max-w-2xl mx-auto text-white/80 leading-relaxed text-balance">
            Uniting Pan-African youth for a just, inclusive, and sustainable continent. Together towards 2063.
          </p>

          <div className="flex flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-md mx-auto">
            <Button size="lg" className="flex-1 bg-primary text-white hover:bg-primary/90 px-4 md:px-10 py-7 text-sm md:text-base rounded-full font-bold shadow-2xl transition-all hover:scale-105" asChild>
              <Link href="/register">
                Register Now <ArrowRight className="ml-2 h-4 w-4 hidden sm:inline" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="flex-1 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-4 md:px-10 py-7 text-sm md:text-base rounded-full font-bold shadow-2xl transition-all hover:scale-105" asChild>
              <Link href="/register">
                Tickets & Plans
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <Link href="#about" className="text-white/40 hover:text-secondary transition-colors">
            <ChevronDown size={32} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}