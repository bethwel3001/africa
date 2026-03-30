
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

const partnerCategories = [
  {
    title: "Strategic & Institutional Partners",
    subtitle: "Top-tier credibility – governments, global orgs, major institutions",
    icon: Globe,
    partners: [
      { name: "Mastercard Foundation", domain: "mastercardfdn.org" },
      { name: "Commonwealth Secretariat", domain: "thecommonwealth.org" },
      { name: "The Royal Society (UK)", domain: "royalsociety.org" },
      { name: "KOICA Rwanda", domain: "koica.go.kr" },
      { name: "Ministry of Youth Rwanda", domain: "miniyouth.gov.rw" },
      { name: "National Youth Council Rwanda", domain: "nyc.gov.rw" },
      { name: "Pan African Movement", domain: "panafricanmovement.rw" },
      { name: "China-Africa Forum", domain: "focac.org" }
    ]
  },
  {
    title: "Academic & University Partners",
    icon: GraduationCap,
    partners: [
      { name: "Makerere University", domain: "mak.ac.ug" },
      { name: "University of Nairobi", domain: "uonbi.ac.ke" },
      { name: "Strathmore University", domain: "strathmore.edu" },
      { name: "USIU Africa", domain: "usiu.ac.ke" },
      { name: "Amref International University", domain: "amref.ac.ke" },
      { name: "Kepler College Rwanda", domain: "kepler.org" },
      { name: "Rwanda Polytechnic", domain: "rp.ac.rw" },
      { name: "East African University Rwanda", domain: "eaur.ac.rw" },
      { name: "UTB", domain: "utb.ac.rw" }
    ]
  },
  {
    title: "Corporate & Private Sector Partners",
    icon: Briefcase,
    partners: [
      { name: "Ecobank", domain: "ecobank.com" },
      { name: "Airtel Rwanda", domain: "airtel.co.rw" },
      { name: "MTN Rwanda", domain: "mtn.co.rw" },
      { name: "Cogebanque", domain: "cogebanque.co.rw" },
      { name: "Azam Rwanda", domain: "azam.com" },
      { name: "Oracle", domain: "oracle.com" },
      { name: "Simplilearn", domain: "simplilearn.com" }
    ]
  },
  {
    title: "NGOs & Development Organizations",
    icon: Leaf,
    partners: [
      { name: "African Wildlife Foundation", domain: "awf.org" },
      { name: "CBM Rwanda", domain: "cbm.org" },
      { name: "WomenTech Network", domain: "womentech.net" },
      { name: "Africa Asia Youth Foundation", domain: "aayf.org" },
      { name: "Embrace East Africa", domain: "embraceeastafrica.org" },
      { name: "Mwananchi Youth Development Foundation", domain: "mwananchiyouth.org" },
      { name: "Fabius Mulongo Foundation", domain: "fabiusmulongo.org" },
      { name: "Treach Tolerantia Org", domain: "treachtolerantia.org" }
    ]
  },
  {
    title: "Innovation & Youth Platforms",
    icon: Rocket,
    partners: [
      { name: "Dot Rwanda", domain: "dotrust.org" },
      { name: "Hack Makers", domain: "hackmakers.com" },
      { name: "AIMS Rwanda", domain: "aims.ac.rw" },
      { name: "Julius Nyerere Leadership Centre", domain: "jnlc.mak.ac.ug" }
    ]
  }
]

export function PartnersSection() {
  const { t } = useLanguage()

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
                      <Image
                        src={`https://logo.clearbit.com/${partner.domain}`}
                        alt={`${partner.name} logo`}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all"
                        onError={(e) => {
                          // Fallback logic if image fails is handled by transparency or CSS
                          (e.target as any).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary/20 group-hover:text-primary/0 transition-colors uppercase">
                        {partner.name.substring(0, 2)}
                      </div>
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
