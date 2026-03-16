"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ArrowUpRight } from "lucide-react"

const pillars = [
  {
    id: "pillar-1",
    title: "Pan-Africanism Reawakened",
    desc: "Actionable modern Pan-Africanism, digital narratives, and diaspora engagement.",
    imgKey: "pillar-1"
  },
  {
    id: "pillar-2",
    title: "Ethical Leadership",
    desc: "Transparency, anti-corruption, and tech for civic engagement across the continent.",
    imgKey: "pillar-2"
  },
  {
    id: "pillar-3",
    title: "Peace & Security",
    desc: "Youth as peacemakers, conflict prevention, and addressing community dialogue.",
    imgKey: "pillar-3"
  },
  {
    id: "pillar-4",
    title: "Inclusive Growth",
    desc: "Addressing youth unemployment and empowerment of women and PWDs.",
    imgKey: "pillar-4"
  },
  {
    id: "pillar-5",
    title: "Digitalization & Trade",
    desc: "AfCFTA, AgriTech, FinTech, and the Fourth Industrial Revolution.",
    imgKey: "pillar-5"
  }
]

export function PillarsSection() {
  return (
    <section id="pillars" className="py-32 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-primary font-black tracking-widest uppercase text-sm">Themes</span>
          <h2 className="text-4xl md:text-6xl font-black">Five Pillars of <span className="text-secondary italic">Transformation</span></h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Focusing on the critical sectors that will define the trajectory of the African continent toward 2063.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const pillarImage = PlaceHolderImages.find((img) => img.id === pillar.imgKey)
            return (
              <Card 
                key={pillar.id} 
                className="group relative overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  {pillarImage && (
                    <Image
                      src={pillarImage.imageUrl}
                      alt={pillar.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={pillarImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                <CardHeader className="relative -mt-12 mx-6 p-6 bg-white rounded-3xl shadow-lg group-hover:-translate-y-4 transition-transform duration-500">
                  <CardTitle className="text-2xl font-black text-primary leading-tight group-hover:text-secondary transition-colors">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-12 pb-10">
                  <p className="text-muted-foreground font-medium leading-relaxed">{pillar.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}