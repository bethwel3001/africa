
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Countdown } from "@/components/countdown"
import { cn } from "@/lib/utils"

const heroImages = [
  "/GALLERY/66.jpeg",
  "/GALLERY/83.jpeg",
  "/GALLERY/33.jpeg",
  "/GALLERY/29.jpeg",
  "/GALLERY/14.jpeg",
  "/GALLERY/38.jpeg",
  "/GALLERY/91.jpeg",
  "/GALLERY/92.jpeg",
  "/GALLERY/93.jpeg",
  "/GALLERY/94.jpeg"
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [failedImages, setFailedImages] = React.useState<Set<number>>(new Set())

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index))
  }

  const isFallbackVisible = failedImages.has(currentImageIndex) || heroImages.length === 0

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Infinite Sliding Background */}
      <div className="absolute inset-0 z-0 bg-white">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentImageIndex && !failedImages.has(index) ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={src}
              alt={`Conference Atmosphere ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={100}
              sizes="100vw"
              onError={() => handleImageError(index)}
            />
          </div>
        ))}
        {/* Fallback Background */}
        {isFallbackVisible && (
          <div className="absolute inset-0 bg-white" />
        )}
        {/* Subtle dark overlay for legibility against photos */}
        <div className="absolute inset-0 bg-black/20 z-[1]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-bold text-[10px] tracking-widest uppercase backdrop-blur-sm">
              21st – 23rd October 2026 • Nairobi
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight uppercase">
                REIMAGINING <br />
                <span className="text-secondary">AFRICA'S</span> FUTURE
              </h1>
              
              <p className="text-sm md:text-lg font-medium text-white max-w-xl leading-relaxed">
                Uniting Pan-African youth for a just, inclusive, and sustainable continent. Together towards 2063.
              </p>
            </div>

            <div className="flex flex-row items-center gap-4 pt-4">
              <Button size="lg" className="bg-primary text-white hover:bg-secondary hover:text-secondary-foreground px-6 sm:px-10 h-14 rounded-full font-bold shadow-lg transition-all hover:scale-105 whitespace-nowrap text-xs sm:text-sm uppercase tracking-wider" asChild>
                <Link href="/register">
                  Register Now <ArrowRight className="ml-2 h-4 w-4 hidden sm:inline" />
                </Link>
              </Button>
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-6 sm:px-10 h-14 rounded-full font-bold shadow-lg transition-all hover:scale-105 whitespace-nowrap text-xs sm:text-sm border-none uppercase tracking-wider" asChild>
                <Link href="/register">
                  Tickets & Plans
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Countdown (Desktop) */}
          <div className="hidden lg:block">
            <div className="p-8 space-y-8">
               <h3 className="text-center font-bold uppercase tracking-[0.4em] text-[10px] text-secondary">Countdown to Nairobi</h3>
               <Countdown />
            </div>
          </div>

          {/* Small Screen Countdown */}
          <div className="lg:hidden w-full mt-12 pt-8 border-t border-white/20">
            <p className="text-center font-bold text-[10px] uppercase tracking-[0.3em] text-secondary mb-8">Starts In</p>
            <Countdown />
          </div>

        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              "h-1.5 transition-all duration-300 rounded-full",
              index === currentImageIndex ? "w-10 bg-secondary" : "w-3 bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
