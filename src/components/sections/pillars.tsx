
"use client"

import * as React from "react"
import Link from "next/link"
import { Landmark, Shield, TrendingUp, Cpu, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

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

const PillarCard = ({ pillar }) => (
  <div
    className="group p-8 rounded-2xl bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-green-600 h-full"
  >
    <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      <pillar.icon className="h-8 w-8" />
    </div>
    <h3 className="text-lg font-bold text-foreground mb-3">
      {pillar.title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
  </div>
);


export function PillarsSection() {
  return (
    <section id="pillars" className="py-24 bg-muted/5 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Focus Areas</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Pillars of Transformation</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Critical sectors defining the trajectory of Africa toward 2063, fostering a unified, prosperous, and globally influential continent.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
                {pillars.slice(0,3).map((pillar, i) => (
                    <PillarCard key={i} pillar={pillar} />
                ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
                {pillars.slice(3,5).map((pillar, i) => (
                    <PillarCard key={i} pillar={pillar} />
                ))}
            </div>
        </div>

        <div className="text-center mt-20">
          <Button asChild size="lg" className="font-bold text-lg py-8 px-10 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/30 transition-all">
            <Link href="/register">Register Your Interest</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
