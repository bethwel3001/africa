
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Countdown } from "@/components/countdown"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"

const heroImages = [
  "/66.webp",
  "/83.webp",
  "/14.webp"
]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [failedImages, setFailedImages] = React.useState<Set<number>>(new Set())
  const { t } = useLanguage()

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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-4">
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
        {/* Stronger dark overlay for legibility against photos */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />
      </div>

      <div className="container relative z-10 px-2 sm:px-4 mx-auto pt-24 pb-12 lg:py-2 flex flex-col lg:flex-row items-center justify-between min-h-[60vh] gap-8 lg:gap-0">
        {/* Left Content */}
        <div className="flex-1 w-full max-w-2xl animate-fade-in-up flex flex-col justify-center items-center text-center lg:items-start lg:text-left gap-4">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-bold text-[8px] sm:text-[9px] md:text-[10px] tracking-widest uppercase backdrop-blur-sm shadow">
            21st – 23rd October 2026 • Nairobi
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight uppercase drop-shadow-lg">
            {t('reimagining')} <br />
            <span className="text-secondary">{t('africas')}</span> {t('future')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white max-w-lg leading-relaxed drop-shadow">
            {t('heroSubtitle')}
          </p>
          {/* Buttons row for small screens, centered */}
        <div className="flex flex-row gap-2 pt-2 w-full justify-center lg:justify-start">
            <Button size="lg" className="bg-primary text-white hover:bg-secondary hover:text-secondary-foreground px-4 sm:px-8 h-11 sm:h-14 rounded-full font-bold shadow-lg transition-all hover:scale-105 whitespace-nowrap text-xs sm:text-sm uppercase tracking-wider w-full max-w-[180px]" asChild>
              <Link href="/register">
                {t('registerNow')} <ArrowRight className="ml-2 h-4 w-4 hidden sm:inline" />
              </Link>
            </Button>
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-4 sm:px-8 h-11 sm:h-14 rounded-full font-bold shadow-lg transition-all hover:scale-105 whitespace-nowrap text-xs sm:text-sm border-none uppercase tracking-wider w-full max-w-[180px]" asChild>
              <Link href="/NOTE/concept_note.pdf" target="_blank">
                Concept Note
              </Link>
            </Button>
          </div>
        </div>
        {/* Right Content - Countdown (Desktop) */}
        <div className="hidden lg:flex flex-col items-end justify-end flex-1 min-w-[340px] max-w-md">
          <div className="p-10 space-y-8 bg-white rounded-3xl shadow-2xl border border-primary/10 w-full flex flex-col items-center">
            <h3 className="text-center font-bold uppercase tracking-[0.4em] text-[20px] text-primary mb-4 whitespace-pre-line">Countdown to Nairobi</h3>
            <div className="w-full flex justify-center">
              <Countdown />
            </div>
          </div>
        </div>
        {/* Small Screen Countdown */}
        <div className="lg:hidden w-full mt-4 flex justify-center">
          <div className="bg-white rounded-2xl shadow-2xl border border-primary/10 p-4 w-full max-w-xs flex flex-col items-center">
            <p className="text-center font-bold text-[16px] uppercase tracking-[0.3em] text-primary mb-2">Starts In</p>
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
  );
}
