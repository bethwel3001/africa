"use client"

import * as React from "react"
import { CalendarDays, Mic } from "lucide-react"

export function SpeakersProgramSection() {
  return (
    <section className="py-24 bg-background scroll-mt-20 overflow-hidden" id="program">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Program</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Speakers & Agenda</h2>
          <p className="text-lg text-muted-foreground mt-4">
            We are curating an unforgettable experience with world-class speakers and an agenda packed with impactful sessions. The full lineup will be revealed soon.
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 blur-sm pointer-events-none select-none">
            <div className="h-[400px] bg-muted/50 rounded-[2rem] flex flex-col items-center justify-center text-center p-8">
              <Mic className="h-12 w-12 text-primary/30 mb-4" />
              <h3 className="text-2xl font-bold text-muted-foreground/50">Speakers</h3>
            </div>
            <div className="h-[400px] bg-muted/50 rounded-[2rem] flex flex-col items-center justify-center text-center p-8">
              <CalendarDays className="h-12 w-12 text-primary/30 mb-4" />
              <h3 className="text-2xl font-bold text-muted-foreground/50">Agenda</h3>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary bg-background/80 px-8 py-4 rounded-2xl shadow-lg">Coming Soon</p>
                <p className="text-muted-foreground mt-4 font-medium">Full details will be announced shortly. Stay tuned!</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
