
"use client"

import * as React from "react"
import { Rocket, BarChart3, Users, Lightbulb } from "lucide-react"

export function InitiativesSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* AUSP Youth Solutions Challenge */}
          <div className="space-y-8 animate-fade-in-up flex flex-col">
            
            <h2 className="text-3xl md:text-5xl font-bold">AUSP Youth Solutions <span className="text-primary">Challenge</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A flagship competition aimed at surfacing and scaling high-impact, youth-led solutions to Africa's most pressing challenges.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 flex-grow">
              <div className="bg-white p-6 rounded-2xl border border-green-500 shadow-sm h-full">
                <h4 className="font-bold mb-2">Categories</h4>
                <p className="text-sm text-muted-foreground">Environment, Education, Health, Agriculture, and Digital Economy.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-green-500 shadow-sm h-full">
                <h4 className="font-bold mb-2">Seed Funding</h4>
                <p className="text-sm text-muted-foreground">$2,500 seed funding per winner to kickstart implementation.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-green-500 shadow-sm h-full">
                <h4 className="font-bold mb-2">Incubation</h4>
                <p className="text-sm text-muted-foreground">6 months of mentorship and technical support for winners.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-green-500 shadow-sm h-full">
                <h4 className="font-bold mb-2">Networking</h4>
                <p className="text-sm text-muted-foreground">Direct access to partners and venture capital groups.</p>
              </div>
            </div>
          </div>

          {/* Accountability Mechanisms */}
          <div className="space-y-8 bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="p-3 bg-primary/10 w-fit rounded-xl">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Implementation & Accountability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We move beyond dialogue. The conference ensures long-term impact through robust mechanisms:
            </p>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/20 text-primary">
                   <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Digital Progress Dashboard</h4>
                  <p className="text-sm text-muted-foreground">A real-time platform to track the implementation of conference outcomes and resolutions.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/20 text-primary">
                   <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Annual Virtual Impact Forum</h4>
                  <p className="text-sm text-muted-foreground">Connecting delegates yearly to review progress and recalibrate strategies for the next summit.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/20 text-primary">
                   <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Mentorship Calendar</h4>
                  <p className="text-sm text-muted-foreground">A structured peer-to-peer and expert mentorship program spanning the entire year.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
