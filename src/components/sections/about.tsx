
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Globe, Users, Award, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { icon: Globe, label: t('statsCountries'), value: "46+" },
    { icon: Users, label: t('statsDelegates'), value: "1,500+" },
    { icon: Award, label: t('statsImpact'), value: "High" },
  ]

  return (
    <section id="about" className="py-24 bg-background overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* The Vision Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 animate-fade-in-up">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">{t('visionTitle')}</span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground uppercase">
                {t('visionHeadline')}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('visionDescription')}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <stat.icon className="h-5 w-5 text-secondary mb-1" />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/about-vision.jpeg"
              alt="The Vision - Quality Education"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </div>
        </div>

        {/* Our Role Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl bg-white order-2 lg:order-1">
            <Image
              src="/about-role.jpeg"
              alt="Our Role - Gender Equality"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">{t('roleTitle')}</span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground uppercase">
                {t('roleHeadline')}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('roleDescription')}
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

            <Button asChild size="lg" className="rounded-full px-8 bg-primary text-white hover:bg-secondary hover:text-secondary-foreground font-bold uppercase tracking-wider transition-colors">
              <Link href="/#about">About AUSP</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
