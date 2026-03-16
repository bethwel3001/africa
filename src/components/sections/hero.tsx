
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Countdown } from "@/components/countdown"

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg")

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-background">
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt="Hero Background"
            fill
            className="object-cover opacity-10"
            priority
            data-ai-hint="african landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
      )}

      <div className="container relative z-10 px-4 mx-auto pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase">
              21st – 23rd October 2026 • Nairobi
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
                REIMAGINING <br />
                <span className="text-primary">AFRICA'S</span> FUTURE
              </h1>
              
              <p className="text-sm md:text-lg font-medium text-muted-foreground max-w-xl leading-relaxed">
                Uniting Pan-African youth for a just, inclusive, and sustainable continent. Together towards 2063.
              </p>
            </div>

            <div className="flex flex-row items-center gap-3 sm:gap-4 pt-2">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-4 sm:px-10 h-12 sm:h-14 rounded-full font-bold shadow-lg transition-transform hover:scale-105 whitespace-nowrap" asChild>
                <Link href="/register">
                  Register Now <ArrowRight className="ml-2 h-4 w-4 hidden sm:inline" />
                </Link>
              </Button>
              <Button size="lg" className="bg-black text-white hover:bg-black/90 px-4 sm:px-10 h-12 sm:h-14 rounded-full font-bold shadow-lg transition-transform hover:scale-105 whitespace-nowrap" asChild>
                <Link href="/register">
                  Tickets & Plans
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Countdown (No Card) */}
          <div className="relative group lg:block hidden">
            <div className="p-4 relative z-10">
               <h3 className="text-center font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-primary">Countdown to Nairobi</h3>
               <Countdown />
            </div>
          </div>

          {/* Small Screen Countdown */}
          <div className="lg:hidden w-full pt-8">
             <div className="py-8 border-t border-black/5">
                <p className="text-center font-bold text-[10px] uppercase tracking-widest text-primary mb-6">Starts In</p>
                <Countdown />
             </div>
          </div>

        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 animate-bounce hidden sm:block">
          <Link href="#about" className="text-primary/40 hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </Link>
        </div>
      </div>
    </section>
  )
}
