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
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {heroImage && (
        <>
          <Image
            src={heroImage.imageUrl}
            alt="Hero Background"
            fill
            className="object-cover scale-105 animate-slow-zoom"
            priority
            data-ai-hint="african delegates"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background/20" />
        </>
      )}

      <div className="container relative z-10 px-4 pt-16 flex flex-col items-center text-center text-white h-full justify-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-secondary text-secondary-foreground font-bold text-[10px] tracking-widest uppercase shadow-lg animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
          </span>
          21st – 23rd October 2026
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000">
          REIMAGINING <br className="hidden md:block" />
          <span className="text-secondary italic">AFRICA'S</span> FUTURE
        </h1>
        
        <p className="text-base md:text-xl font-medium mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          "Pan-African Youth for a Just, Inclusive & Sustainable Africa" — Uniting power through potential.
        </p>

        <div className="animate-in fade-in zoom-in duration-1000 delay-400 scale-90 md:scale-100">
          <Countdown />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-7 text-lg rounded-full font-black shadow-xl transition-all hover:scale-105 active:scale-95" asChild>
            <Link href="/register">Register Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-7 text-lg rounded-full font-black transition-all backdrop-blur-md" asChild>
            <Link href="/register">Tickets & Plans</Link>
          </Button>
        </div>

        <div className="mt-12 animate-bounce hidden lg:block opacity-50">
          <Link href="#about" className="text-white hover:text-secondary transition-colors">
            <ChevronDown size={32} />
          </Link>
        </div>
      </div>
    </section>
  )
}