
"use client"

import * as React from "react"
import { Globe2, Accessibility, ShieldCheck, Zap } from "lucide-react"

export function ImpactSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Why This Conference? */}
          <div className="bg-primary p-12 md:p-16 rounded-[3.5rem] shadow-2xl text-white space-y-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-700">
              <Globe2 size={200} />
            </div>
            <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
              <Zap className="text-secondary" size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest text-secondary uppercase">Global Movement</h3>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Reframing the <br /> <span className="text-secondary italic">Narrative</span></h2>
            </div>
            <p className="text-xl text-white/80 leading-relaxed font-medium">
              We are strengthening multilateralism by exporting African models of innovation. This is about moving from "potential" to "power" on the global stage.
            </p>
          </div>

          {/* Inclusion & Accessibility */}
          <div className="bg-white p-12 md:p-16 rounded-[3.5rem] shadow-xl border-2 border-green-600 text-foreground space-y-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 group-hover:-rotate-12 transition-all duration-700">
              <Accessibility size={200} />
            </div>
            <div className="h-14 w-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4">
              <ShieldCheck className="text-primary" size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest text-primary uppercase">Accessibility</h3>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Inclusive <br /> <span className="text-secondary italic">By Design</span></h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Multi-language support, sign language interpretation, and data-friendly streaming ensure reach across urban and rural Africa alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
