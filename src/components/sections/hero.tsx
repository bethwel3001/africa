"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Countdown } from "@/components/countdown"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with optimized overlay for text contrast */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background" />
        </>
      )}

      <div className="container relative z-10 px-4 pt-32 pb-20 text-center text-white">
        <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full bg-secondary text-secondary-foreground font-bold text-xs tracking-widest uppercase shadow-lg animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
          </span>
          21st – 23rd October 2026
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 tracking-tight text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000">
          REIMAGINING <br className="hidden md:block" />
          <span className="text-secondary italic">AFRICA'S</span> FUTURE
        </h1>
        
        <p className="text-lg md:text-2xl font-medium mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          "Pan-African Youth for a Just, Inclusive & Sustainable Africa" — An initiative uniting power through potential.
        </p>

        <div className="animate-in fade-in zoom-in duration-1000 delay-400">
          <Countdown />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-10 py-8 text-xl rounded-full font-black shadow-xl transition-all hover:scale-105 active:scale-95" asChild>
            <Link href="/register">Register Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-primary px-10 py-8 text-xl rounded-full font-black transition-all backdrop-blur-sm" asChild>
            <Link href="/register">Tickets & Plans</Link>
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <Link href="#about" className="text-white/40 hover:text-white transition-colors">
            <ChevronDown size={32} />
          </Link>
        </div>
      </div>
    </section>
  )
}