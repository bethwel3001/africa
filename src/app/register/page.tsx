
"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, Check, Ticket, Users, Monitor, User } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/context/LanguageContext"

export default function RegisterPage() {
  const { t } = useLanguage();

  const ticketTypes = [
    { id: "virtual", name: t('virtualDelegate'), price: "$25", icon: Monitor, perks: [t('perkStream'), t('perkWorkbook'), t('perkECert')] },
    { id: "student", name: t('studentDelegate'), price: "$50", icon: Users, perks: [t('perkSessions'), t('perkBag'), t('perkCert')] },
    { id: "adult", name: t('adultAdmission'), price: "$75", icon: User, perks: [t('perkSessions'), t('perkBag'), t('perkCert')] },
    { id: "general", name: t('generalAdmission'), price: "$100", icon: Ticket, perks: [t('perkFullAccess'), t('perkDinner'), t('perkLunch'), t('perkCert')] },
  ]

  return (
    <main className="min-h-screen bg-muted/20">
      
      <div className="container mx-auto px-4 pt-12 pb-24">
        <Link href="/" className="inline-flex items-center text-primary font-medium hover:underline gap-2 mb-8">
          <ArrowLeft className="h-4 w-4" /> {t('backToHome')}
        </Link>
        
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">{t('secureSeat').split(' ')[0]} {t('secureSeat').split(' ')[1]} <span className="text-secondary">{t('secureSeat').split(' ')[2]}</span></h1>
            <p className="text-muted-foreground text-lg">{t('secureSeatSubtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ticketTypes.map((ticket) => (
              <Link 
                key={ticket.id} 
                href={`/payment?ticket=${ticket.id}`}
                className="relative border-2 border-border transition-all cursor-pointer rounded-2xl flex flex-col bg-white hover:border-primary hover:shadow-xl group"
              >
                <CardHeader className="pb-4">
                  <div className="p-2.5 bg-muted w-fit rounded-xl mb-3 group-hover:bg-primary/10 transition-colors">
                    <ticket.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold leading-tight">{ticket.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 flex-grow">
                  <div className="text-3xl font-bold text-primary">{ticket.price}</div>
                  <ul className="space-y-2.5">
                    {ticket.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Check className="h-3.5 w-3.5 text-secondary flex-shrink-0 mt-0.5" /> 
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
