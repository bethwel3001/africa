
"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, Calendar, ExternalLink, Mail, Phone, Users } from "lucide-react"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/context/LanguageContext"

export default function AwardsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        <Button asChild variant="ghost" className="mb-8 hover:bg-white">
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> {t('backToHome')}
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              <Award className="h-4 w-4" /> {t('awardsTitle')}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              {t('awardsHeadline')}
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              {t('awardsSubtitle')}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-primary/10 leading-relaxed space-y-8 text-gray-700">
            <section className="space-y-4">
              <p className="text-lg">
                {t('awardsIntro1')}
              </p>
              <p>
                {t('awardsIntro2')}
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" /> {t('nominationPeriod')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">20th April – 5th May 2026</p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-secondary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary-foreground">
                    <Users className="h-5 w-5" /> {t('whoApply')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{t('whoApplyDesc')}</p>
                </CardContent>
              </Card>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">{t('whyNominate')}</h2>
              <ul className="grid gap-4">
                {[
                  t('whyNominate1'),
                  t('whyNominate2'),
                  t('whyNominate3')
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-muted/30 p-4 rounded-xl">
                    <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">{i+1}</div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full md:w-auto bg-primary hover:bg-primary/90 text-lg py-6 px-8 rounded-2xl">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5i39rem5HsjfQNPJAyB_0jyszLmlVcEmH6SyIZl7zcJvqiw/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  {t('submitNomination')} <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </section>

            <hr className="border-primary/10" />

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">{t('attendDelegate')}</h2>
              <p>
                {t('attendDelegateDesc')}
              </p>
              
              <div className="bg-muted/30 p-6 rounded-2xl space-y-4">
                <h3 className="font-bold text-lg">{t('delegateBenefits')}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{t('benefit1')}</li>
                  <li>{t('benefit2')}</li>
                  <li>{t('benefit3')}</li>
                  <li>{t('benefit4')}</li>
                </ul>
              </div>

              <Button asChild variant="outline" className="w-full md:w-auto border-primary text-primary hover:bg-primary/5 text-lg py-6 px-8 rounded-2xl">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_kIvlvoe0DgBryXR5WssL3ngxyFfop9eq6UYbUmCPBuvpSw/viewform" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  {t('registerDelegate')} <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </section>

            <hr className="border-primary/10" />

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">{t('enquiries')}</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold">{t('callUs')}</p>
                    <p>+254 793 975 426 | +254 728 148 930</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold">{t('emailUs')}</p>
                    <p>events@scholarmedia.africa | smegafrica@gmail.com</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
