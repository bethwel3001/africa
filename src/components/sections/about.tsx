
"use client"

import * as React from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const objectives = [
  { title: "Analyze & Align", desc: "Evaluate existing frameworks and align them with youth needs." },
  { title: "Ideate & Innovate", desc: "Spark new solutions for sustainable development." },
  { title: "Connect & Empower", desc: "Build bridges between youth leaders across borders." },
  { title: "Amplify & Act", desc: "Turn discussions into measurable action and impact." },
]

export function AboutSection() {
  const auspImage = PlaceHolderImages.find((img) => img.id === "about-ausp")

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Part A: Conference Background */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Background & Rationale</h2>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">Translating Potential into <span className="text-secondary">Power</span></h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The African Union Students' Platform (AUSP) is a continental community with membership spanning over 46 African countries and the diaspora. With over 70% of sub-Saharan Africa under 30, this conference is AUSP’s flagship intervention to translate potential into power.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {objectives.map((obj) => (
                <div key={obj.title} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground">{obj.title}</h4>
                    <p className="text-sm text-muted-foreground">{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/about1/800/1000"
              alt="Youth Engagement"
              fill
              className="object-cover"
              data-ai-hint="african delegates"
            />
          </div>
        </div>

        {/* Part B: About AUSP */}
        <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            {auspImage && (
              <Image
                src={auspImage.imageUrl}
                alt={auspImage.description}
                fill
                className="object-cover"
                data-ai-hint={auspImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Initiated By AUSP</h2>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">Empowering the African <span className="text-secondary">Student Voice</span></h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AUSP is the voice of over 100 million African students. Our mission is built on three pillars: Education, Connection, and Empowerment. We believe that by uniting students across the continent, we can drive the transformative change needed for the Africa we want.
            </p>
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
              <p className="italic text-primary font-medium text-lg">
                "Be Part of the Reimagining. Our role as the initiator of this conference is to create a space where youth ideas are not just heard, but implemented."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
