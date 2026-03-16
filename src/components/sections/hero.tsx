
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Countdown } from "@/components/countdown"
import { cn } from "@/lib/utils"

const heroImages = [
  "/GALLERY/47.jpeg",
  "/GALLERY/66.jpeg",
  "/GALLERY/83.jpeg",
  "/GALLERY/91.jpeg",
  "/GALLERY/92.jpeg",
  "/GALLERY/93.jpeg",
  "/GALLERY/94.jpeg"
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-background">
      {/* Sliding Background */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentImageIndex ? "opacity-20" : "opacity-0"
            )}
          >
            <Image
              src={src}
              alt={`Hero Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 mx-auto pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase">
              21st – 23rd October 2026 • Nairobi
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1] uppercase">
                REIMAGINING <br />
                <span className="text-primary">AFRICA'S</span> FUTURE
              </h1>
              
              <p className="text-sm md:text-lg font-medium text-muted-foreground max-w-xl leading-relaxed">
                Uniting Pan-African youth for a just, inclusive, and sustainable continent. Together towards 2063.
              </p>
            </div>

            <div className="flex flex-row items-center gap-3 pt-2">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-6 sm:px-10 h-12 rounded-full font-bold shadow-lg transition-transform hover:scale-105 whitespace-nowrap" asChild>
                <Link href="/register">
                  Register Now <ArrowRight className="ml-2 h-4 w-4 hidden sm:inline" />
                </Link>
              </Button>
              <Button size="lg" className="bg-black text-white hover:bg-black/90 px-6 sm:px-10 h-12 rounded-full font-bold shadow-lg transition-transform hover:scale-105 whitespace-nowrap" asChild>
                <Link href="/register">
                  Tickets & Plans
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Countdown */}
          <div className="relative group lg:block hidden">
            <div className="p-8">
               <h3 className="text-center font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-primary">Countdown to Nairobi</h3>
               <Countdown />
            </div>
          </div>

          {/* Small Screen Countdown */}
          <div className="lg:hidden w-full mt-8 pt-8 border-t border-black/5">
            <p className="text-center font-bold text-[10px] uppercase tracking-widest text-primary mb-6">Starts In</p>
            <Countdown />
          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <Link href="#about" className="text-primary/40 hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </Link>
        </div>
      </div>
    </section>
  )
}
