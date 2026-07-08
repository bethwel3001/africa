"use client"

import * as React from "react"
import { CalendarDays, Mic } from "lucide-react"
import Image from "next/image"

export function SpeakersProgramSection() {
  return (
    <section className="py-24 bg-background scroll-mt-20 overflow-hidden" id="program">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Program</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Speakers & Agenda</h2>
          <p className="text-lg text-muted-foreground mt-4">
            We are curating an unforgettable experience with world-class speakers and an agenda packed with impactful sessions. The full lineup will be revealed soon.
          </p>
        </div>

        <div className="relative mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-start max-w-6xl mx-auto">
          <div className="bg-white dark:bg-card p-3 rounded-2xl border border-muted shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative overflow-hidden rounded-xl bg-slate-50/50 dark:bg-muted/10 h-[360px] flex items-center justify-center p-2">
              <Image
                src="/etc/exhibit.png"
                alt="Exhibit Opportunities"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-2"
                loading="lazy"
              />
            </div>
            <p className="text-center text-sm font-bold mt-3 text-foreground">Exhibit Opportunities</p>
          </div>

          <div className="bg-white dark:bg-card p-3 rounded-2xl border border-muted shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative overflow-hidden rounded-xl bg-slate-50/50 dark:bg-muted/10 h-[360px] flex items-center justify-center p-2">
              <Image
                src="/etc/payment.png"
                alt="Payment Guide"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-2"
                loading="lazy"
              />
            </div>
            <p className="text-center text-sm font-bold mt-3 text-foreground">Payment Guide</p>
          </div>

          <div className="bg-white dark:bg-card p-3 rounded-2xl border border-muted shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative overflow-hidden rounded-xl bg-slate-50/50 dark:bg-muted/10 h-[360px] flex items-center justify-center p-2">
              <Image
                src="/etc/sponser.png"
                alt="Sponsorship Details"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-2"
                loading="lazy"
              />
            </div>
            <p className="text-center text-sm font-bold mt-3 text-foreground">Sponsorship Details</p>
          </div>
        </div>
      </div>
  </section>
  )
}
