"use client"

import * as React from "react"
import Link from "next/link"
import { Calendar, MapPin, Hourglass, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InitiativesSection() {
  const details = [
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Central Bank of Kenya - Institute of Monetary Studies - Nairobi, Kenya",
      color: "text-blue-500"
    },
    { 
      icon: Calendar, 
      label: "Date", 
      value: "21st – 23rd October 2026",
      color: "text-green-500"
    },
    { 
      icon: Hourglass, 
      label: "Deadline", 
      value: "15th September 2026",
      color: "text-red-500"
    },
  ]

  const audiences = [
    "Students", "Young Professionals", "Entrepreneurs", "Youth Leaders", 
    "Innovators", "Activists", "Researchers", "Policymakers", 
    "Creatives", "Community Organizers", "Changemakers"
  ]

  return (
    <section id="initiatives" className="py-24 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Registration Open Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wider uppercase">
            Registration is officially OPEN
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            The wait is over — join the <span className="text-primary">3rd Annual</span> International Pan-African Youth Conference 2026.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We are calling on young minds from across Africa and beyond to be part of this transformative gathering.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {details.map((detail, i) => (
            <div key={i} className="flex items-start gap-4 p-8 bg-background rounded-3xl shadow-sm border border-muted hover:border-primary/20 transition-all">
              <div className={`p-3 rounded-2xl bg-muted/50 ${detail.color}`}>
                <detail.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{detail.label}</div>
                <div className="text-lg font-bold text-foreground">{detail.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-muted relative overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Who should attend?</h3>
              <p className="text-muted-foreground">
                Whether you are passionate about leadership, governance, climate action, innovation, entrepreneurship, education, media, health, advocacy, or sustainable development — this platform is designed for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {audiences.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right space-y-8">
              <div className="space-y-4">
                <p className="text-2xl font-bold leading-relaxed">
                  Join a growing movement of African youth shaping conversations, influencing change, and creating impact.
                </p>
                <p className="text-primary font-bold">Seats are limited. Secure your spot today!</p>
              </div>
              <Button asChild size="lg" className="rounded-full px-12 py-7 text-lg bg-primary text-white hover:bg-secondary hover:text-secondary-foreground font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/25">
                <Link href="https://lnkd.in/eMTQcaNV" target="_blank" className="flex items-center gap-2">
                  Register Now <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
