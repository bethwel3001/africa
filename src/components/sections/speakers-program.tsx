"use client"

import * as React from "react"
import { CalendarDays, UserPlus, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SpeakersProgramSection() {
  return (
    <section className="py-24 bg-background scroll-mt-20" id="program">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-wider uppercase text-xs">Speakers</span>
              <h3 className="text-3xl md:text-4xl font-bold">World-Class Voices</h3>
              <p className="text-muted-foreground">
                Lineup of global leaders, innovators, and youth activists being finalized.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-dashed border-primary/20 bg-primary/5 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <UserPlus className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">Nominate a Speaker</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Know someone who should be on stage? Help us build an inclusive lineup.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full" asChild>
                 <Link href="/#contact">Send Nomination</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-wider uppercase text-xs">Agenda</span>
              <h3 className="text-3xl md:text-4xl font-bold">3-Day Experience</h3>
              <p className="text-muted-foreground">
                A meticulously crafted program designed for continental impact.
              </p>
            </div>

            <div className="space-y-4">
               <div className="p-6 rounded-2xl bg-white border shadow-sm flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <CalendarDays className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Interactive Sessions</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                       <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" /> High-level Plenary Sessions
                       </li>
                       <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" /> Technical Workshops
                       </li>
                       <li className="flex items-center gap-2">
                          <Clock className="h-3 w-3" /> Youth Solutions Challenge
                       </li>
                    </ul>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}