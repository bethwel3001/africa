
"use client"

import * as React from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const faqs = [
  {
    q: "Who can attend the conference?",
    a: "The conference is open to African youth, students from across the continent and the diaspora, young professionals, entrepreneurs, and policymakers under the age of 35."
  },
  {
    q: "What is the registration fee?",
    a: "Registration fees vary based on participation type (Student, Professional, Virtual). Early bird tickets will be announced shortly. Stay tuned to our 'Register' page."
  },
  {
    q: "Will there be virtual participation options?",
    a: "Yes, PAYC 2026 is a hybrid event. We offer a comprehensive virtual experience with access to all plenary sessions and digital workshops."
  },
  {
    q: "How can I submit a project for the Youth Solutions Challenge?",
    a: "Once registration opens, you will find a dedicated 'Solutions Challenge' tab in your attendee dashboard where you can submit your proposal."
  },
  {
    q: "Are there scholarships or travel grants available?",
    a: "TBD. We are working with partners to provide travel grants for outstanding student leaders. Announcements will be made on our social channels."
  },
  {
    q: "What languages will be used during the conference?",
    a: "Official languages are Arabic, English, French, Portuguese, Spanish, and Swahili. Sign language interpretation will also be provided for all major sessions."
  }
]

export function ContactFAQSection() {
  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* FAQ Section */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Support</h2>
              <h3 className="text-3xl md:text-5xl font-bold">Frequently Asked <span className="text-secondary">Questions</span></h3>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-primary/10">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-primary/5 space-y-10 flex flex-col h-full">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get In <span className="text-primary">Touch</span></h3>
              <p className="text-muted-foreground">Have a question or interested in partnering? Reach out to our team.</p>
            </div>

            <form className="space-y-6 flex-grow flex flex-col">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Partnership Inquiry" />
              </div>
              <div className="space-y-2 flex-grow flex flex-col">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell us more..." className="flex-grow" />
              </div>
              <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 font-bold py-6 rounded-full">
                <Send className="h-4 w-4 mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="text-center mt-24 pt-16 border-t border-primary/10">
           <h3 className="font-bold text-2xl mb-8">Our Contact Details</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-muted-foreground">
              <a href="mailto:events@ausp.africa" className="flex items-center gap-3 hover:text-primary transition-colors text-lg">
                <Mail className="h-6 w-6 text-secondary" />
                <span className="font-medium">events@ausp.africa</span>
              </a>
              <a href="tel:+254728762971" className="flex items-center gap-3 hover:text-primary transition-colors text-lg">
                <Phone className="h-6 w-6 text-secondary" />
                <span className="font-medium">+254 728 762 971</span>
              </a>
              <div className="flex items-center gap-3 text-lg">
                <MapPin className="h-6 w-6 text-secondary" />
                <span className="font-medium">Nairobi, Kenya & Online</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
