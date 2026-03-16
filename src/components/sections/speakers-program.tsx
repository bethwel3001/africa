
"use client"

import * as React from "react"
import { CalendarDays, UserPlus, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SpeakersProgramSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Speakers Section */}
          <div id="speakers" className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Speakers</h2>
              <h3 className="text-3xl md:text-5xl font-bold">World-Class <span className="text-secondary">Voices</span></h3>
              <p className="text-muted-foreground text-lg">
                Stay tuned for our lineup of global leaders, innovators, and youth activists.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative aspect-[3/4] bg-muted/50 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 border border-dashed border-primary/20">
                  <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-4">
                    <UserPlus className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <span className="text-lg font-bold text-muted-foreground">Coming Soon</span>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl border border-primary/10 bg-primary/5">
              <p className="font-medium mb-4">Know someone who should be on stage?</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                 <Link href="/#contact">Nominate a Speaker</Link>
              </Button>
            </div>
          </div>

          {/* Program Section */}
          <div id="program" className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Program</h2>
              <h3 className="text-3xl md:text-5xl font-bold">The <span className="text-secondary">Agenda</span></h3>
              <p className="text-muted-foreground text-lg">
                A meticulously crafted 3-day experience designed for impact.
              </p>
            </div>

            <div className="space-y-6">
               <div className="p-8 rounded-3xl bg-muted/30 border border-muted flex items-start gap-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm border shrink-0">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Program in Development</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Our detailed program is being finalized with our partners across the continent. It will feature:
                    </p>
                    <ul className="mt-4 space-y-2 text-sm">
                       <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" /> High-level Plenary Sessions
                       </li>
                       <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" /> Technical Workshops & Hackathons
                       </li>
                       <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" /> The Youth Solutions Challenge Finals
                       </li>
                       <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" /> Inter-generational Networking Nights
                       </li>
                    </ul>
                  </div>
               </div>
               
               <div className="relative h-64 rounded-3xl overflow-hidden bg-primary flex items-center justify-center group">
                  <Image 
                    src="https://picsum.photos/seed/timeline/800/400" 
                    alt="Timeline Graphic" 
                    fill 
                    className="object-cover opacity-20"
                    data-ai-hint="abstract timeline"
                  />
                  <p className="relative z-10 text-white font-bold text-2xl">Coming Soon: Interactive Timeline</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
