
"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, Clock } from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/LanguageContext"

export default function AwardsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-muted/20 flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow flex flex-col items-center justify-center">
        <Button asChild variant="ghost" className="mb-8 hover:bg-white self-start">
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> {t('backToHome')}
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider">
            <Award className="h-5 w-5" /> {t('awardsTitle')}
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
              We are finalizing the details for the IPAYC 2026 Awards. Stay tuned for more information on how to nominate and participate!
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 text-primary animate-pulse">
            <Clock className="h-6 w-6" />
            <span className="font-bold tracking-widest uppercase">Launching Shortly</span>
          </div>

          <div className="pt-8">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
