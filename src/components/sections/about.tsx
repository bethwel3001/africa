
"use client"

import * as React from "react"
import Image from "next/image"
import { CheckCircle2, Award, Users, Globe } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Globe, label: "Countries", value: "46+" },
  { icon: Users, label: "Delegates", value: "1,500+" },
  { icon: Award, label: "Winners", value: "10+" },
]

export function AboutSection() {
  const auspImage = PlaceHolderImages.find((img) => img.id === "about-ausp")

  return (
    <section id="about" className="py-32 bg-background overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="space-y-4">
              <span className="text-primary font-black tracking-widest uppercase text-xs px-4 py-1 rounded-full bg-primary/5">Background</span>
              <h2 className="text-4xl md:text-6xl font-black leading-tight text-foreground">
                Translating Potential <br />
                Into <span className="text-secondary italic underline decoration-primary/20">Actionable Power</span>
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              The African Union Students' Platform (AUSP) is a continental community spanning over 46 African countries. With 70% of the continent under 30, this conference is the catalyst to translate youth energy into systemic change.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <stat.icon className="h-6 w-6 text-secondary mb-2" />
                  <div className="text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] md:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000">
            <Image
              src="https://picsum.photos/seed/about-youth/800/1200"
              alt="Youth Leaders"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              data-ai-hint="african delegates"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 p-8 glass-nav rounded-3xl border-white/10">
              <p className="text-foreground font-bold text-lg leading-tight">
                "Uniting student voices to build the Africa we want."
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl order-2 lg:order-1 group">
            {auspImage && (
              <Image
                src={auspImage.imageUrl}
                alt="AUSP Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="african leadership"
              />
            )}
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
               <span className="text-primary font-black tracking-widest uppercase text-xs px-4 py-1 rounded-full bg-primary/5">Initiator</span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
                Empowering the <br />
                <span className="text-secondary italic">Continental Voice</span>
              </h2>
            </div>
            
            <div className="space-y-6">
               <p className="text-lg text-muted-foreground leading-relaxed">
                AUSP represents over 100 million students. Our mission is built on three unbreakable pillars: **Education, Connection, and Empowerment**.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Policy Advocacy at AU Level",
                  "Cross-border Student Exchange",
                  "Youth-led Innovation Incubation",
                  "Continental Leadership Training"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground font-bold">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="rounded-full px-8 py-6 font-bold bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
              Learn more about AUSP
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
