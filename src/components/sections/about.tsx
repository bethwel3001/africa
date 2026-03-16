
"use client"

import * as React from "react"
import Image from "next/image"
import { Globe, Users, Award, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Globe, label: "Countries", value: "46+" },
  { icon: Users, label: "Delegates", value: "1,500+" },
  { icon: Award, label: "Impact", value: "High" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* The Vision Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">The Vision</span>
              <h2 className="text-3xl md:text-5xl font-black leading-tight text-foreground uppercase">
                Translating Potential <br />
                Into Actionable Power
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The African Union Students' Platform (AUSP) is a continental community spanning over 46 African countries. With 70% of the continent under 30, this conference is the catalyst to translate youth energy into systemic change.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <stat.icon className="h-5 w-5 text-primary mb-1" />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl bg-muted">
            <Image
              src="/SDgs/4.jpeg"
              alt="The Vision - Quality Education"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>
        </div>

        {/* Our Role Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl bg-muted order-2 lg:order-1">
            <Image
              src="/SDgs/5.jpeg"
              alt="Our Role - Gender Equality"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Role</span>
              <h2 className="text-3xl md:text-5xl font-black leading-tight text-foreground uppercase">
                Empowering the Continental Voice
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              AUSP represents over 100 million students. Our mission is built on three unbreakable pillars: Education, Connection, and Empowerment.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Policy Advocacy",
                "Student Exchange",
                "Youth Innovation",
                "Leadership Training"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground font-bold text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <Button size="lg" className="rounded-full px-8 bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider">
              About AUSP
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
