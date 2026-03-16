
"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const pillars = [
  {
    id: "pillar-1",
    title: "Pan-Africanism Reawakened",
    desc: "Actionable modern Pan-Africanism, digital narratives, diaspora engagement, and the Blue Economy.",
    imgKey: "pillar-1"
  },
  {
    id: "pillar-2",
    title: "Ethical Leadership & Active Citizenship",
    desc: "Transparency, anti-corruption, tech for civic engagement, and electoral integrity across the continent.",
    imgKey: "pillar-2"
  },
  {
    id: "pillar-3",
    title: "Peace, Security & Social Cohesion",
    desc: "Youth as peacemakers, conflict prevention, and addressing extremism through community dialogue.",
    imgKey: "pillar-3"
  },
  {
    id: "pillar-4",
    title: "Inclusive Growth & Social Impact",
    desc: "Structural inequalities, youth unemployment, GBV, and empowerment of women, youth, and PWDs.",
    imgKey: "pillar-4"
  },
  {
    id: "pillar-5",
    title: "Industry, Trade & Digitalization",
    desc: "AfCFTA, Fourth Industrial Revolution, AgriTech, FinTech, BlueTech, and HealthTech.",
    imgKey: "pillar-5"
  }
]

export function PillarsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Thematic Pillars</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-6">Five Pillars of <span className="text-secondary">Transformation</span></h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Delving into the core areas that will define the future of the African continent.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const pillarImage = PlaceHolderImages.find((img) => img.id === pillar.imgKey)
            return (
              <Card key={pillar.id} className="group hover:shadow-xl transition-all duration-300 border-none bg-white overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  {pillarImage && (
                    <Image
                      src={pillarImage.imageUrl}
                      alt={pillarImage.description}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      data-ai-hint={pillarImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
