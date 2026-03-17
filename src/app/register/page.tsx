
"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, Check, Ticket, Users, Monitor } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const ticketTypes = [
  { id: "student", name: "Student Delegate", price: "$50", icon: Users, perks: ["Access to sessions", "Delegate bag", "Certificate"] },
  { id: "general", name: "General Admission", price: "$150", icon: Ticket, perks: ["Full session access", "Networking dinner", "Lunch & Snacks", "Certificate"] },
  { id: "virtual", name: "Virtual Delegate", price: "$25", icon: Monitor, perks: ["Streaming access", "Digital workbook", "E-Certificate"] },
]

export default function RegisterPage() {
  const [selectedTicket, setSelectedTicket] = React.useState(ticketTypes[1].id)

  return (
    <main className="min-h-screen bg-muted/20">
      {/* No Navigation bar on register page */}
      
      <div className="container mx-auto px-4 pt-16 pb-24">
        <Link href="/" className="inline-flex items-center text-primary font-medium hover:underline gap-2 mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Secure Your <span className="text-secondary">Seat</span></h1>
            <p className="text-muted-foreground text-lg">Be part of the reimagining. Choose your attendance path.</p>
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
             <h3 className="text-2xl font-bold mb-8">Registration Details</h3>
             <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Select Country" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="org">Organization / University</Label>
                    <Input id="org" placeholder="African University" />
                  </div>
                  <div className="space-y-2">
                    <Label>Dietary Requirements (Optional)</Label>
                    <Input placeholder="E.g. Vegetarian" />
                  </div>
                </div>
                <div className="md:col-span-2 pt-4">
                    <Link href="/payment">
                        <Button className="w-full bg-primary text-white font-bold py-6 text-lg">
                            Proceed to Payment
                        </Button>
                    </Link>
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    Payments are securely processed. Registration implies agreement to our Code of Conduct.
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
