
"use client"

import * as React from "react"
import Image from "next/image"
import { 
  Globe, 
  GraduationCap, 
  Briefcase, 
  Leaf, 
  Rocket 
} from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

interface Partner {
  name: string;
  logo?: string;
}

interface PartnerCategory {
  title: string;
  subtitle?: string;
  icon: any;
  partners: Partner[];
}

const partnerCategories: PartnerCategory[] = [
  {
    title: "Strategic & Institutional Partners",
    subtitle: "Top-tier credibility – governments, global orgs, major institutions",
    icon: Globe,
    partners: [
      { name: "Mastercard Foundation", logo: "/partners/m.png" },
      { name: "Commonwealth Secretariat", logo: "/partners/cs.png" },
      { name: "The Royal Society (UK)", logo: "/partners/royal-society.png" },
      { name: "KOICA Rwanda", logo: "/partners/rwanda.png" },
      { name: "Ministry of Youth Rwanda", logo: "/partners/youth-rwanda.png" },
      { name: "National Youth Council Rwanda", logo: "/partners/nyc-rwanda.png" },
      { name: "Pan African Movement", logo: "/partners/pan-african.png" },
      { name: "China-Africa Forum", logo: "/partners/china-africa.png" }
    ]
  },
  {
    title: "Academic & University Partners",
    icon: GraduationCap,
    partners: [
      { name: "Makerere University", logo: "/partners/makerere.png" },
      { name: "University of Nairobi", logo: "/partners/uon.png" },
      { name: "Strathmore University", logo: "/partners/strath.png" },
      { name: "USIU Africa", logo: "/partners/usiu.png" },
      { name: "Amref International University", logo: "/partners/amref.png" },
      { name: "Kepler College Rwanda", logo: "/partners/kpler.png" },
      { name: "Rwanda Polytechnic", logo: "/partners/rp.png" },
      { name: "East African University Rwanda", logo: "/partners/eaur.png" }
    ]
  },
  {
    title: "Corporate & Private Sector Partners",
    icon: Briefcase,
    partners: [
      { name: "Ecobank", logo: "/partners/ecobank.png" },
      { name: "Airtel Rwanda", logo: "/partners/airtel.png" },
      { name: "MTN Rwanda", logo: "/partners/mtn.png" },
      { name: "Cogebanque", logo: "/partners/coge.png" },
      { name: "Azam Rwanda", logo: "/partners/azam.png" },
      { name: "Oracle", logo: "/partners/oracle.png" },
      { name: "Simplilearn", logo: "/partners/simlilearn.png" }
    ]
  },
  {
    title: "NGOs & Development Organizations",
    icon: Leaf,
    partners: [
      { name: "African Wildlife Foundation", logo: "/partners/awf.png" },
      { name: "CBM Rwanda", logo: "/partners/cbm.png" },
      { name: "WomenTech Network", logo: "/partners/women.png" },
      { name: "Africa Asia Youth Foundation", logo: "/partners/aayf.png" },
      { name: "Embrace East Africa", logo: "/partners/ea.png" },
      { name: "Mwananchi Youth Development Foundation" },
      { name: "Fabius Mulongo Foundation" },
      { name: "Treach Tolerantia Org" }
    ]
  },
  {
    title: "Innovation & Youth Platforms",
    icon: Rocket,
    partners: [
      { name: "Dot Rwanda" },
      { name: "Hack Makers" },
      { name: "AIMS Rwanda" },
      { name: "Julius Nyerere Leadership Centre" }
    ]
  }
]

export function PartnersSection() {
  const { t } = useLanguage()

  // Helper to get initials and a consistent color
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  const getColorClass = (name: string) => {
    const colors = [
      'bg-blue-100 text-blue-600',
      'bg-green-100 text-green-600',
      'bg-purple-100 text-purple-600',
      'bg-orange-100 text-orange-600',
      'bg-pink-100 text-pink-600',
      'bg-cyan-100 text-cyan-600',
    ]
    const index = name.length % colors.length
    return colors[index]
  }

  return (
    <section id="partners" className="py-24 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-6">
            <div className="relative h-20 w-48">
              <Image
                src="/logo.png"
                alt="Conference Logo"
                fill
                className="object-contain opacity-80"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground uppercase">
            {t('partnersTitle') || "Our Trusted Partners & Sponsors"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base italic">
            "Partnering across Africa and globally to empower youth, innovation, and leadership."
          </p>
        </div>

        <div className="space-y-16">
          {partnerCategories.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <div className="text-center md:text-left border-b border-primary/10 pb-4">
                <h3 className="text-xl md:text-2xl font-bold text-primary flex items-center justify-center md:justify-start gap-3">
                  <category.icon className="w-6 h-6 md:w-8 md:h-8" />
                  {category.title}
                </h3>
                {category.subtitle && (
                  <p className="text-muted-foreground text-sm mt-1 ml-0 md:ml-11">{category.subtitle}</p>
                )}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {category.partners.map((partner, pIdx) => (
                  <div 
                    key={pIdx} 
                    className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-primary/5 flex flex-col items-center justify-center text-center min-h-[140px] hover:shadow-md transition-all hover:-translate-y-1 group"
                  >
                    <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                      {partner.logo ? (
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-contain transition-all"
                        />
                      ) : (
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold shadow-inner ${getColorClass(partner.name)}`}>
                          {getInitials(partner.name)}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
