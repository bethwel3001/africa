
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Countdown } from "@/components/countdown"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      {heroImage && (
        <>
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </>
      )}

      <div className="container relative z-10 px-4 pt-20 pb-12 text-center text-white">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary font-semibold text-sm tracking-widest uppercase animate-in fade-in slide-in-from-bottom-4 duration-700">
          21st – 23rd October 2026
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          INTERNATIONAL <span className="text-secondary">PAN-AFRICAN</span> <br />
          YOUTH CONFERENCE
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-3xl mx-auto text-white/90 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
          "Pan-African Youth for a Just, Inclusive & Sustainable Africa"
        </p>

        <Countdown />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg rounded-full font-bold transition-all hover:scale-105" asChild>
            <Link href="/register">Register Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg rounded-full font-bold transition-all" asChild>
            <Link href="/register">Buy Ticket</Link>
          </Button>
        </div>

        <div className="mt-12 animate-in fade-in duration-1000 delay-500">
          <Link href="/#contact" className="group text-white/70 hover:text-white flex items-center justify-center gap-2 transition-colors">
            Interested in Partnering? <span className="text-secondary group-hover:underline">Contact Us</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
