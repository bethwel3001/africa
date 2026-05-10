
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
    { id: "student", name: t('studentDelegate'), price: "$50", icon: Users, perks: [t('perkSessions'), t('perkBag'), t('perkCert')] },
    { id: "adult", name: t('adultAdmission'), price: "$70", icon: User, perks: [t('perkSessions'), t('perkBag'), t('perkCert')] },
    { id: "general", name: t('generalAdmission'), price: "$150", icon: Ticket, perks: [t('perkFullAccess'), t('perkDinner'), t('perkLunch'), t('perkCert')] },
    { id: "virtual", name: t('virtualDelegate'), price: "$25", icon: Monitor, perks: [t('perkStream'), t('perkWorkbook'), t('perkECert')] },
  ]

  const [selectedTicket, setSelectedTicket] = React.useState(ticketTypes[2].id)

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
              <Card 
                key={ticket.id} 
                className={`relative border-2 transition-all cursor-pointer rounded-2xl flex flex-col ${selectedTicket === ticket.id ? 'border-primary shadow-xl ring-2 ring-primary/10' : 'border-border hover:border-primary/20'}`}
                onClick={() => setSelectedTicket(ticket.id)}
              >
                {selectedTicket === ticket.id && (
                  <div className="absolute top-0 right-0 p-3">
                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-white">
                       <Check className="h-3 w-3" />
                    </div>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="p-2.5 bg-muted w-fit rounded-xl mb-3">
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
              </Card>
            ))}
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-primary/5 text-center">
             <h3 className="text-2xl font-bold mb-8">Complete Your Registration</h3>
             <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-sm md:text-base">
               To ensure we capture all your details correctly, please complete the registration via our official delegate registration form.
             </p>
             <div className="max-w-md mx-auto space-y-6">
                <Button className="w-full bg-primary text-white font-bold py-8 text-xl rounded-full shadow-lg hover:scale-105 transition-transform" asChild>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSegVepG6rWH8rPo2dz5t4W1-070AJ4xq-m4GVcQK1oiyR-NWA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    Open Registration Form
                  </a>
                </Button>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
                  {t('regAgreement').split('. ')[0]}. {t('regAgreement').split('. ')[1].split('Terms of use')[0]} <Link href="/privacy-policy" className="text-primary hover:underline underline-offset-4">{t('terms-of-use') || 'Terms of use'}</Link> {t('regAgreement').split('Terms of use')[1].split('Code of Conduct')[0]} <Link href="/terms-of-use#s5" className="text-primary hover:underline underline-offset-4">{t('codeOfConduct') || 'Code of Conduct'}</Link>.
                </p>
             </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
