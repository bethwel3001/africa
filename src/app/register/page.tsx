
"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, Check, Ticket, Users, Monitor } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/context/LanguageContext"

export default function RegisterPage() {
  const { t } = useLanguage();

  const ticketTypes = [
    { id: "student", name: t('studentDelegate'), price: "$50", icon: Users, perks: [t('perkSessions'), t('perkBag'), t('perkCert')] },
    { id: "general", name: t('generalAdmission'), price: "$150", icon: Ticket, perks: [t('perkFullAccess'), t('perkDinner'), t('perkLunch'), t('perkCert')] },
    { id: "virtual", name: t('virtualDelegate'), price: "$25", icon: Monitor, perks: [t('perkStream'), t('perkWorkbook'), t('perkECert')] },
  ]

  const [selectedTicket, setSelectedTicket] = React.useState(ticketTypes[1].id)

  return (
    <main className="min-h-screen bg-muted/20">
      
      <div className="container mx-auto px-4 pt-12 pb-24">
        <Link href="/" className="inline-flex items-center text-primary font-medium hover:underline gap-2 mb-8">
          <ArrowLeft className="h-4 w-4" /> {t('backToHome')}
        </Link>
        
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">{t('secureSeat').split(' ')[0]} {t('secureSeat').split(' ')[1]} <span className="text-secondary">{t('secureSeat').split(' ')[2]}</span></h1>
            <p className="text-muted-foreground text-lg">{t('secureSeatSubtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ticketTypes.map((ticket) => (
              <Card 
                key={ticket.id} 
                className={`relative border-2 transition-all cursor-pointer rounded-2xl ${selectedTicket === ticket.id ? 'border-primary shadow-xl ring-2 ring-primary/10' : 'border-border'}`}
                onClick={() => setSelectedTicket(ticket.id)}
              >
                {selectedTicket === ticket.id && (
                  <div className="absolute top-0 right-0 p-4">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                       <Check className="h-4 w-4" />
                    </div>
                  </div>
                )}
                <CardHeader>
                  <div className="p-3 bg-muted w-fit rounded-xl mb-4">
                    <ticket.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{ticket.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-4xl font-bold text-primary">{ticket.price}</div>
                  <ul className="space-y-3">
                    {ticket.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-secondary" /> {perk}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-primary/5">
             <h3 className="text-2xl font-bold mb-8">{t('regDetails')}</h3>
             <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('firstName')}</Label>
                    <Input id="firstName" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('lastName')}</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('emailAddress')}</Label>
                    <Input id="email" type="email" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">{t('country')}</Label>
                    <Input id="country" placeholder="Select Country" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="org">{t('organization')}</Label>
                    <Input id="org" placeholder="African University" />
                  </div>
                  <div className="space-y-2">
                    <Label>{t('dietary')}</Label>
                    <Input placeholder="E.g. Vegetarian" />
                  </div>
                </div>
                <div className="md:col-span-2 pt-4">
                    <Link href="/payment">
                        <Button className="w-full bg-primary text-white font-bold py-6 text-lg">
                            {t('proceedPayment')}
                        </Button>
                    </Link>
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    {t('regAgreement').split('. ')[0]}. {t('regAgreement').split('. ')[1].split('Terms of use')[0]} <Link href="/terms-of-use" className="text-primary hover:underline underline-offset-4">{t('terms-of-use') || 'Terms of use'}</Link> {t('regAgreement').split('Terms of use')[1].split('Code of Conduct')[0]} <Link href="/terms-of-use#s5" className="text-primary hover:underline underline-offset-4">{t('codeOfConduct') || 'Code of Conduct'}</Link>.
                  </p>
                </div>
             </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
