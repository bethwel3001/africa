
import * as React from "react"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { PillarsSection } from "@/components/sections/pillars"
import { InitiativesSection } from "@/components/sections/initiatives"
import { ImpactSection } from "@/components/sections/impact"
import { SpeakersProgramSection } from "@/components/sections/speakers-program"
import { TeamSection } from "@/components/sections/team"
import { PastEventsSection } from "@/components/sections/past-events"
import { PartnersSection } from "@/components/sections/partners"
import { ContactFAQSection } from "@/components/sections/contact-faq"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <InitiativesSection />
      <ImpactSection />
      <SpeakersProgramSection />
      <TeamSection />
      <PastEventsSection />
      <PartnersSection />
      <ContactFAQSection />
      <Footer />
    </main>
  )
}
