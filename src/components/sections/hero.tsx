
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
  "/GALLERY/29.jpeg", // Substituted 3rd image
  "/GALLERY/92.jpeg",
  "/GALLERY/14.jpeg", // Substituted 5th image
  "/GALLERY/38.jpeg"  // Substituted last image
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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Infinite Sliding Background */}
      <div className="absolute inset-0 z-0 bg-white">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentImageIndex ? "opacity-100" : "opacity-0",
              failedImages.has(index) ? "hidden" : "block"
            )}
          >
            <Image
              src={src}
              alt={`Conference Atmosphere ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              onError={() => handleImageError(index)}
            />
          </div>
        ))}
        {/* Dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary font-bold text-[10px] tracking-widest uppercase backdrop-blur-sm">
              21st – 23rd October 2026 • Nairobi
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight uppercase">
                REIMAGINING <br />
                <span className="text-secondary">AFRICA'S</span> FUTURE
              </h1>
              
              <p className="text-sm md:text-lg font-medium text-white/90 max-w-xl leading-relaxed">
                Uniting Pan-African youth for a just, inclusive, and sustainable continent. Together towards 2063.
              </p>
            </div>

            <div className="flex flex-row items-center gap-3 pt-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-6 sm:px-8 h-12 rounded-full font-bold shadow-lg transition-transform hover:scale-105 whitespace-nowrap text-xs" asChild>
                <Link href="/register">
                  Register Now <ArrowRight className="ml-2 h-3 w-3 hidden sm:inline" />
                </Link>
              </Button>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 px-6 sm:px-8 h-12 rounded-full font-bold shadow-lg transition-transform hover:scale-105 whitespace-nowrap text-xs" asChild>
                <Link href="/register">
                  Tickets & Plans
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Countdown (Desktop) */}
          <div className="hidden lg:block">
            <div className="p-8 space-y-6 bg-black/10 backdrop-blur-md rounded-[2rem]">
               <h3 className="text-center font-black uppercase tracking-[0.3em] text-[10px] text-secondary">Countdown to Nairobi</h3>
               <Countdown />
            </div>
          </div>

          {/* Small Screen Countdown */}
          <div className="lg:hidden w-full mt-8 pt-8 border-t border-white/10">
            <p className="text-center font-bold text-[10px] uppercase tracking-widest text-secondary mb-6">Starts In</p>
            <div className="bg-black/10 backdrop-blur-md rounded-2xl p-4">
              <Countdown />
            </div>
          </div>

        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              "h-1 transition-all duration-300 rounded-full",
              index === currentImageIndex ? "w-8 bg-secondary" : "w-2 bg-white/40"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
