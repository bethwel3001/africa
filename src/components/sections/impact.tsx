
"use client"

import * as React from "react"
import { Globe2, Accessibility } from "lucide-react"

export function ImpactSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Why This Conference? */}
          <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border border-primary/5 space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Globe2 size={150} />
            </div>
            <h3 className="text-sm font-bold tracking-widest text-primary uppercase">Global Impact</h3>
            <h2 className="text-3xl md:text-5xl font-bold">Reframing the <span className="text-secondary">Narrative</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This isn't just an event; it's a movement. We are strengthening multilateralism by exporting African models of innovation and sustainable growth. Our focus is on reframing the global narrative of Africa from a continent of potential to one of realized power.
            </p>
          </div>

          {/* Inclusion & Accessibility */}
          <div className="bg-primary p-10 md:p-16 rounded-[2.5rem] shadow-xl text-white space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Accessibility size={150} />
            </div>
            <h3 className="text-sm font-bold tracking-widest text-secondary uppercase">Accessibility</h3>
            <h2 className="text-3xl md:text-5xl font-bold">Inclusive by <span className="text-secondary">Design</span></h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Ensuring no youth is left behind. The conference features multi-language support (Arabic, English, French, Portuguese, Spanish, Swahili), sign language interpretation, and data-friendly streaming to ensure reach across rural and urban Africa alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
