"use client"

import * as React from "react"
import Image from "next/image"
import { 
  CheckCircle2, 
  Globe, 
  Users, 
  Megaphone, 
  Target, 
  Award,
  Zap,
  Handshake,
  Calendar,
  MapPin,
  ArrowRight,
  Mail,
  MessageSquare
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
  {
    name: "Strategic Partner",
    slots: "2 Slots",
    price: "KSh 1,500,000",
    totalPotential: "KSh 3,000,000",
    color: "bg-primary text-primary-foreground",
    benefits: [
      "Official designation as Strategic Partner of IPAYC 2026",
      "Logo on main stage backdrop",
      "Prominent branding across conference materials",
      "Opportunity to deliver Opening Address",
      "Participation in High-Level Leadership Panel",
      "Premium exhibition booth",
      "Brand presence across digital promotions",
      "10 conference passes & VIP networking dinner access"
    ]
  },
  {
    name: "Official Partners",
    slots: "6 Slots",
    price: "KSh 1,000,000",
    totalPotential: "KSh 6,000,000",
    color: "bg-secondary text-secondary-foreground",
    titles: ["Banking", "Telecommunications", "Technology", "Development", "Youth Empowerment", "Innovation"],
    benefits: [
      "Brand recognition as Official Conference Partner",
      "Panel participation opportunity",
      "Logo on banners and conference website",
      "Exhibition space",
      "8 conference passes"
    ]
  },
  {
    name: "Programme Partners",
    slots: "8 Slots",
    price: "KSh 700,000",
    totalPotential: "KSh 5,600,000",
    color: "bg-accent text-accent-foreground",
    titles: ["Policy Dialogue", "Entrepreneurship", "Climate Action", "Education & Skills", "Gender Equality", "Digital Transformation", "Youth Leadership", "Research & Innovation"],
    benefits: [
      "Logo placement in programme materials",
      "Opportunity to introduce a session",
      "Brand visibility during conference discussions",
      "6 conference passes"
    ]
  },
  {
    name: "Supporting Partners",
    slots: "12 Slots",
    price: "KSh 400,000",
    totalPotential: "KSh 4,800,000",
    color: "bg-muted text-muted-foreground",
    benefits: [
      "Supporting partner recognition",
      "Logo in conference programme",
      "Branding across select event materials",
      "4 conference passes"
    ]
  }
]

const specialSponsorships = [
  { name: "Opening Ceremony", price: "KSh 800,000", slots: "1 Slot" },
  { name: "Youth Innovation Challenge", price: "KSh 700,000", slots: "1 Slot" },
  { name: "Media & Livestream Partner", price: "KSh 500,000", slots: "2 Slots" },
  { name: "Conference Kit Sponsor", price: "KSh 450,000", slots: "2 Slots" },
  { name: "Cultural Night Sponsor", price: "KSh 700,000", slots: "1 Slot" }
]

export default function SponsorshipPage() {
  return (
    <main className="min-h-screen pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-primary text-white overflow-hidden -mt-20">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/gallery/82.jpeg" 
            alt="Background" 
            fill 
            className="object-cover animate-pulse"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase drop-shadow-2xl">
            Sponsorship <br />
            <span className="text-secondary">Package 2026</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95 font-medium leading-relaxed drop-shadow-lg px-4">
            Partner with us to empower African youth through <br className="hidden md:block" />
            <span className="text-secondary font-bold underline decoration-secondary/30">Innovation</span>, 
            <span className="text-secondary font-bold underline decoration-secondary/30 ml-2">Inclusion</span>, and 
            <span className="text-secondary font-bold underline decoration-secondary/30 ml-2">Action</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" rounded="full" className="px-8 py-6 text-base font-bold shadow-xl transition-all hover:scale-105 active:scale-95 bg-secondary text-secondary-foreground" asChild>
              <a href="mailto:partnerships@ausp.africa">Become a Partner</a>
            </Button>
            <Button size="lg" variant="outline" rounded="full" className="px-8 py-6 text-base font-bold bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all hover:scale-105 active:scale-95 backdrop-blur-md" asChild>
              <a href="mailto:partnerships@ausp.africa?subject=Request for Sponsorship Package - IPAYC 2026&body=Hello Team,%0D%0A%0D%0AI am interested in partnering with you for IPAYC 2026. Please send me the sponsorship package.%0D%0A%0D%0ARegards,">Request PDF Package</a>
            </Button>
          </div>
        </div>
        {/* Decorative elements for full screen hero */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-1 h-12 rounded-full bg-white/30" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About the Conference</h2>
              <ul className="space-y-4">
                {[
                  "Youth-led Pan-African gathering",
                  "Focus: Innovation, Health, Climate, Leadership",
                  "Delegates from across Africa",
                  "Hosted in Nairobi, Kenya | 21st - 23rd Oct 2026"
                ].map((text, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/gallery/32.jpeg" 
                alt="Conference Crowd" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Sponsor Us</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Globe, title: "Continental Visibility", desc: "Showcase your brand across the African continent." },
              { icon: Users, title: "Youth Market Access", desc: "Engage directly with Africa's emerging youth leaders." },
              { icon: Megaphone, title: "Media Exposure", desc: "Gain coverage through regional and continental media." },
              { icon: Target, title: "Brand Positioning", desc: "Establish yourself as a supporter of Pan-African youth." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-3xl shadow-sm space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Sponsorship Tiers</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {tiers.map((tier, i) => (
              <Card key={i} className="overflow-hidden flex flex-col rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardHeader className={`${tier.color} p-8`}>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <span className="text-xs font-bold uppercase tracking-wider bg-black/20 px-3 py-1 rounded-full">
                      {tier.slots}
                    </span>
                  </div>
                  <div className="text-4xl font-extrabold">{tier.price}</div>
                  <CardDescription className="text-white/80 font-medium">Total Potential: {tier.totalPotential}</CardDescription>
                </CardHeader>
                <CardContent className="p-8 flex-grow">
                  {tier.titles && (
                    <div className="mb-8">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Available Titles:</p>
                      <div className="flex flex-wrap gap-2">
                        {tier.titles.map((t, j) => (
                          <span key={j} className="text-[10px] font-bold bg-muted px-3 py-1.5 rounded-full border border-primary/10">Official {t} Partner</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Core Benefits:</p>
                  <ul className="space-y-4">
                    {tier.benefits.map((benefit, j) => (
                      <li key={j} className="flex gap-4 text-sm leading-relaxed">
                        <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Sponsorships */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Special Event Sponsorships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialSponsorships.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-bold text-lg mb-3">{s.name}</h3>
                <div className="text-primary font-black text-2xl mb-1">{s.price}</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{s.slots}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Ready to Partner With Us?</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
            {[
              { icon: Mail, text: "partnerships@ausp.africa", href: "mailto:partnerships@ausp.africa" },
              { icon: MessageSquare, text: "+254 728 762 971", href: "https://wa.me/254728762971" },
              { icon: Globe, text: "ausp.africa", href: "https://ausp.africa" }
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300 transform group-hover:rotate-12">
                  <item.icon className="w-8 h-8" />
                </div>
                <p className="text-lg font-bold tracking-wide">{item.text}</p>
              </a>
            ))}
          </div>
          <Button size="lg" variant="secondary" rounded="full" className="px-16 py-8 text-xl font-black shadow-2xl hover:scale-110 transition-transform duration-300" asChild>
            <a href="mailto:partnerships@ausp.africa">Get In Touch Now</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
