"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Landmark, Shield, TrendingUp, Cpu, Users } from "lucide-react"

const pillars = [
  {
    icon: Landmark,
    title: "Pan-Africanism",
    desc: "Actionable modern narratives and diaspora engagement."
  },
  {
    icon: Shield,
    title: "Ethical Leadership",
    desc: "Transparency and tech for civic engagement."
  },
  {
    icon: Users,
    title: "Peace & Security",
    desc: "Youth as peacemakers and conflict prevention."
  },
  {
    icon: TrendingUp,
    title: "Inclusive Growth",
    desc: "Empowerment of women, youth, and PWDs."
  },
  {
    icon: Cpu,
    title: "Digitalization",
    desc: "AfCFTA, AgriTech, FinTech, and 4IR."
  }
]

export function PillarsSection() {
  return (
    <section id="pillars" className="py-24 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Focus Areas</span>
          <h2 className="text-3xl md:text-5xl font-black">Pillars of Transformation</h2>
          <p className="text-lg text-muted-foreground">
            Critical sectors defining the trajectory of Africa toward 2063.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, i) => (
            <Card 
              key={i} 
              className="group border-none shadow-md hover:shadow-lg transition-all rounded-2xl bg-white"
            >
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                  <pillar.icon size={24} />
                </div>
                <CardTitle className="text-lg font-bold text-primary leading-tight">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}