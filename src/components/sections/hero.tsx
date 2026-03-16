"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Countdown } from "@/components/countdown"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg")

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background/10" />
        </>
      )}

      <div className="container relative z-10 px-4 flex flex-col items-center text-center text-white h-full justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-secondary text-secondary-foreground font-bold text-[10px] tracking-widest uppercase shadow-md">
          21st – 23rd October 2026
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tight text-balance">
          REIMAGINING <br className="hidden md:block" />
          <span className="text-secondary italic">AFRICA'S</span> FUTURE
        </h1>
        
        <p className="text-sm md:text-lg font-medium mb-6 max-w-xl mx-auto text-white/90 leading-relaxed">
          Pan-African Youth for a Just, Inclusive & Sustainable Africa.
        </p>

        <div className="scale-75 md:scale-90 mb-4">
          <Countdown />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-base rounded-full font-bold shadow-lg transition-transform hover:scale-105" asChild>
            <Link href="/register">Register Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-base rounded-full font-bold transition-transform hover:scale-105" asChild>
            <Link href="/register">Tickets & Plans</Link>
          </Button>
        </div>

        <div className="absolute bottom-8 animate-bounce opacity-50">
          <Link href="#about" className="text-white hover:text-secondary transition-colors">
            <ChevronDown size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}