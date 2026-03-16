
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Maximize2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  // We'll generate a few more for visual effect if the json is small
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-') || img.id.startsWith('pillar-') || img.id === 'hero-bg')

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center text-primary font-medium hover:underline gap-2 mb-4">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold">Conference <span className="text-secondary">Gallery</span></h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                Moments from past events, African landscapes, and youth empowerment in action.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" className="rounded-full">Past Events</Button>
              <Button variant="outline" className="rounded-full">Africa 2026</Button>
              <Button variant="outline" className="rounded-full">Youth Leaders</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <div 
                key={`${img.id}-${i}`} 
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer transition-transform hover:-translate-y-1 duration-300"
              >
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint={img.imageHint}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-white h-8 w-8" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-sm font-medium">{img.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
               Load More Images
             </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
