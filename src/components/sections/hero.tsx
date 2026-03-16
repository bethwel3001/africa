"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ChevronDown, ArrowRight } from "lucide-react"
import { Countdown } from "@/components/countdown"

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg")

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
            priority
            data-ai-hint="african landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
      )}

      <div className="container relative z-10 px-4 mx-auto pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase">
              21st – 23rd October 2026 • Nairobi
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
                REIMAGINING <br />
                <span className="text-primary">AFRICA'S</span> FUTURE
              </h1>
              
              <p className="text-base md:text-lg font-medium text-muted-foreground max-w-xl leading-relaxed">
                Uniting Pan-African youth for a just, inclusive, and sustainable continent. Together towards 2063.
              </p>
            </div>

            <div className="flex flex-row items-center gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-6 sm:px-10 h-14 rounded-full font-bold shadow-lg transition-transform hover:scale-105" asChild>
                <Link href="/register">
                  Register Now <ArrowRight className="ml-2 h-4 w-4 hidden sm:inline" />
                </Link>
              </Button>
              <Button size="lg" className="bg-black text-white hover:bg-black/90 px-6 sm:px-10 h-14 rounded-full font-bold shadow-lg transition-transform hover:scale-105" asChild>
                <Link href="/register">
                  Tickets & Plans
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Countdown */}
          <div className="relative group lg:block hidden">
            <div className="p-8 rounded-[3rem] bg-white border shadow-2xl relative z-10">
               <h3 className="text-center font-black uppercase tracking-[0.3em] text-[10px] mb-6 text-primary">Countdown to Nairobi</h3>
               <Countdown />
            </div>
            {/* Decorative element */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] -z-10 animate-pulse" />
          </div>

          {/* Small Screen Countdown (Creative) */}
          <div className="lg:hidden w-full pb-8">
             <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                <p className="text-center font-bold text-[10px] uppercase tracking-widest text-primary mb-4">Starts In</p>
                <Countdown />
             </div>
          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 animate-bounce">
          <Link href="#about" className="text-primary/40 hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </Link>
        </div>
      </div>
    </section>
  )
}
