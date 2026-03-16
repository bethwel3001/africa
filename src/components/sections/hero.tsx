
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-20">
      {/* Sliding Background */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentImageIndex ? "opacity-60" : "opacity-0"
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
        {/* Subtle dark overlay for text contrast instead of white */}
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
              <Button size="lg" className="bg-black text-white hover:bg-black/80 px-6 sm:px-8 h-12 rounded-full font-bold shadow-lg transition-transform hover:scale-105 whitespace-nowrap text-xs border border-white/20" asChild>
                <Link href="/register">
                  Tickets & Plans
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Countdown (Desktop) */}
          <div className="hidden lg:block">
            <div className="p-8 space-y-6 bg-black/20 backdrop-blur-md rounded-[2rem] border border-white/10">
               <h3 className="text-center font-black uppercase tracking-[0.3em] text-[10px] text-secondary">Countdown to Nairobi</h3>
               <Countdown />
            </div>
          </div>

          {/* Small Screen Countdown */}
          <div className="lg:hidden w-full mt-8 pt-8 border-t border-white/10">
            <p className="text-center font-bold text-[10px] uppercase tracking-widest text-secondary mb-6">Starts In</p>
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/5">
              <Countdown />
            </div>
          </div>

        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block opacity-50">
          <Link href="#about" className="text-white hover:text-secondary transition-colors">
            <ChevronDown size={32} />
          </Link>
        </div>
      </div>
    </section>
  )
}
