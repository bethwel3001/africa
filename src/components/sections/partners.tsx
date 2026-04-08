"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"

interface Partner {
  name: string;
  logo?: string;
}

interface PartnerCategory {
  title: string;
  subtitle?: string;
  partners: Partner[];
}

const partnerCategories: PartnerCategory[] = [
  {
    title: "Strategic & Institutional Partners",
    subtitle: "Top-tier credibility – governments, global orgs, major institutions",
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
    partners: [
      { name: "Dot Rwanda", logo: "/partners/dot.png" },
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
      'bg-blue-50 text-blue-600',
      'bg-green-50 text-green-600',
      'bg-purple-50 text-purple-600',
      'bg-orange-50 text-orange-600',
      'bg-pink-50 text-pink-600',
      'bg-cyan-50 text-cyan-600',
    ]
    const index = name.length % colors.length
    return colors[index]
  }

  return (
    <section id="partners" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <div className="flex justify-center mb-8">
            <div className="relative h-16 w-40">
              <Image
                src="/logo.png"
                alt="Conference Logo"
                fill
                sizes="(max-width: 768px) 160px, 160px"
                className="object-contain opacity-90"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
            {t('partnersTitle') || "Our Trusted Partners & Sponsors"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Building a collaborative ecosystem for the next generation of African leaders.
          </p>
        </div>

        <div className="space-y-24">
          {partnerCategories.map((category, idx) => (
            <div key={idx} className="space-y-10">
              <div className="text-center md:text-left border-l-4 border-primary pl-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {category.title}
                </h3>
                {category.subtitle && (
                  <p className="text-muted-foreground text-sm md:text-base mt-2">{category.subtitle}</p>
                )}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
                {category.partners.map((partner, pIdx) => (
                  <div 
                    key={pIdx} 
                    className="group relative bg-white p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[160px]"
                  >
                    <div className="relative w-20 h-20 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                      {partner.logo ? (
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          sizes="80px"
                          className="object-contain"
                        />
                      ) : (
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold ${getColorClass(partner.name)}`}>
                          {getInitials(partner.name)}
                        </div>
                      )}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center bg-muted/30 rounded-[3rem] p-8 md:p-16 border border-border">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Interested in Partnering?</h3>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            Join a prestigious network of organizations dedicated to empowering African youth. Reach out to our teams below to explore opportunities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto text-left">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border hover:border-primary/20 transition-colors">
              <h4 className="text-xl font-bold text-primary mb-3">Partnerships Team</h4>
              <p className="text-sm text-muted-foreground mb-6">For general partnership inquiries, institutional collaborations, and strategic alliances.</p>
              <Button variant="link" className="p-0 h-auto text-primary font-bold text-lg" asChild>
                <a href="mailto:partnerships@ausp.africa">partnerships@ausp.africa</a>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border hover:border-primary/20 transition-colors">
              <h4 className="text-xl font-bold text-primary mb-3">Resource Mobilization Team</h4>
              <p className="text-sm text-muted-foreground mb-6">For sponsorship packages, fundraising, and supporting conference activities.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-muted-foreground w-12">Call:</span>
                  <a href="tel:+254793971426" className="text-foreground font-bold hover:text-primary transition-colors">+254 793 971 426</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-muted-foreground w-12">Email:</span>
                  <a href="mailto:fundraising_payc@ausp.africa" className="text-foreground font-bold hover:text-primary transition-colors">fundraising_payc@ausp.africa</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" rounded="full" className="px-10 py-7 text-lg shadow-xl" asChild>
              <Link href="/sponsorship">View Sponsorship Packages</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
