
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
// No Navigation bar on gallery page
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"
import { DownloadCloud, Maximize2, Minimize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function GalleryPage() {
  // List of all images in public/
  const galleryImages = [
    "10.webp", "14.webp", "26.webp", "3.webp", "32.webp", "34.webp", "38.webp", "39.webp", "4.webp", "43.webp", "45.webp", "5.webp", "58.webp", "59.webp", "66.webp", "79.webp", "8.webp", "82.webp", "83.webp", "92.webp"
  ].map(filename => ({
    imageUrl: `/${filename}`,
    description: filename,
    imageHint: filename
  }))

  const [modalImg, setModalImg] = useState<null | { imageUrl: string, description: string }>(null)
  const [modalSize, setModalSize] = useState<'full' | 'half'>('full')

  useEffect(() => {
    if (modalImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [modalImg]);


  return (
    <main className="min-h-screen bg-background">
      
      <section className="pt-8 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div className="space-y-2">
              <Link href="/" className="inline-flex items-center text-primary font-medium hover:underline gap-2 mb-2">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold">Conference <span className="text-secondary">Gallery</span></h1>
              <p className="text-muted-foreground text-base max-w-xl">
                Moments from past events, African landscapes, and youth empowerment in action.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-full">Past Events</Button>
              <Button variant="outline" className="rounded-full">Africa 2026</Button>
              <Button variant="outline" className="rounded-full">Youth Leaders</Button>
            </div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <div 
                key={img.imageUrl}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer transition-transform hover:-translate-y-1 duration-300"
              >
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint={img.imageHint}
                  onClick={() => setModalImg(img)}
                  style={{ cursor: 'zoom-in' }}
                />
                <div className="absolute top-2 right-2 flex gap-2 z-10">
                  <a
                    href={img.imageUrl}
                    download
                    className="inline-flex items-center justify-center p-2 bg-white/80 rounded-full shadow hover:bg-secondary transition-colors"
                    title="Download image"
                  >
                    <DownloadCloud className="h-5 w-5 text-primary" />
                  </a>
                  <button
                    className="inline-flex items-center justify-center p-2 bg-white/80 rounded-full shadow hover:bg-secondary transition-colors"
                    title="View fullscreen"
                    onClick={() => { setModalImg(img); setModalSize('full') }}
                  >
                    <Maximize2 className="h-5 w-5 text-primary" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform flex flex-col gap-2">
                  <p className="text-white text-sm font-medium">{img.description}</p>
                </div>
              </div>
            ))}
          </div>
      {/* Modal for fullscreen/half-screen image view */}
      {modalImg && (
        <div className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center transition-all">
          <div className={modalSize === 'full' ? 'w-full h-full max-w-full max-h-full flex items-center justify-center' : 'w-1/2 h-1/2 max-w-3xl max-h-[80vh] flex items-center justify-center'}>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={modalImg.imageUrl}
                alt={modalImg.description}
                fill
                className="object-contain rounded-xl shadow-2xl"
                style={{ background: '#fff' }}
              />
              <button
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow hover:bg-secondary transition-colors z-10"
                onClick={() => setModalImg(null)}
                title="Close"
              >
                <X className="h-6 w-6 text-primary" />
              </button>
              <button
                className="absolute top-4 left-4 p-2 bg-white/90 rounded-full shadow hover:bg-secondary transition-colors z-10"
                onClick={() => setModalSize(modalSize === 'full' ? 'half' : 'full')}
                title={modalSize === 'full' ? 'View half screen' : 'View fullscreen'}
              >
                {modalSize === 'full' ? <Minimize2 className="h-6 w-6 text-primary" /> : <Maximize2 className="h-6 w-6 text-primary" />}
              </button>
              <a
                href={modalImg.imageUrl}
                download
                className="absolute bottom-4 right-4 p-2 bg-white/90 rounded-full shadow hover:bg-secondary transition-colors z-10"
                title="Download image"
              >
                <DownloadCloud className="h-6 w-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      )}

          {/* All images are shown, no pagination needed */}
        </div>
      </section>

      <Footer />
    </main>
  )
}
