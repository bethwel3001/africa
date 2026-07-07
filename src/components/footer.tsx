
"use client"

import * as React from "react"
import Link from "next/link"
import { Facebook, Instagram, Send, Mail, MapPin, Youtube, Linkedin, Music2, Phone, MessageSquare } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const socialLinks = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/ipayc2026?igsh=dml3dHFqa21ndzM2"
  },
  {
    Icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61587713274082"
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/posts/panafricanyouthconference-youthvoices-africadevelopment-share-7458775209697820672-8mVg?utm_source=share&utm_medium=member_android&rcm=ACoAAE9R6-ABgOwcPJUvPQpN1wg-vU29nHWCwzE"
  },
  {
    Icon: Youtube,
    href: "http://youtube.com/post/UgkxMJPlKg1eVUh5qxTdv7dq9oGENBknbIwG?si=FiG1KzrshpIwVB2D"
  },
  {
    Icon: Music2,
    href: "https://vt.tiktok.com/ZS9W2sWjo/"
  }
]

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tighter text-secondary">IPAYC 2026</h2>
            <p className="text-primary-foreground/80 text-xs leading-relaxed max-w-xs">
              {t('footerAbout')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href }, i) => (
                <Link 
                  key={i} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold mb-4 text-secondary tracking-[0.2em] uppercase">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-primary-foreground/70 font-medium text-xs">
              <li><Link href="/#about" className="hover:text-secondary transition-colors">{t('visionTitle')}</Link></li>
              <li><Link href="/#pillars" className="hover:text-secondary transition-colors">{t('pillars')}</Link></li>
              <li><Link href="/gallery" className="hover:text-secondary transition-colors">{t('gallery')}</Link></li>
              <li><Link href="/register" className="hover:text-secondary transition-colors">{t('register')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold mb-4 text-secondary tracking-[0.2em] uppercase">{t('contactUs')}</h3>
            <ul className="space-y-2 text-primary-foreground/70 font-medium text-xs">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-secondary" />
                <span>events@ausp.africa</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-3.5 w-3.5 text-secondary mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <a href="tel:+254793975426" className="hover:text-secondary transition-colors">+254 793 975 426 (Calls)</a>
                  <a href="tel:+254740963628" className="hover:text-secondary transition-colors">+254 740 963 628 (Mobilization)</a>
                  <a href="tel:+254117215772" className="hover:text-secondary transition-colors">+254 117 215 772 (Partnership)</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="h-3.5 w-3.5 text-secondary" />
                <a href="https://wa.me/message/R6T5PJFNADD7A1" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">WhatsApp Support</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-secondary mt-0.5" />
                <span>Central Bank of Kenya- Institute of Monetary Studies</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold mb-4 text-secondary tracking-[0.2em] uppercase">{t('newsletter')}</h3>
            <p className="text-primary-foreground/80 text-xs font-medium">{t('newsletterDesc')}</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder={t('emailPlaceholder')} 
                className="bg-primary-foreground/10 border-none rounded-full px-5 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-secondary text-xs font-medium text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <button className="absolute right-1 top-1 h-7 w-7 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-white transition-all shadow-lg">
                <Send size={12} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/40 text-[10px] font-bold tracking-widest uppercase">
          <p>© 2026 International Pan African Youth Conference. ausp.africa</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-secondary">{t('privacyPolicy')}</Link>
            <Link href="/terms-of-use" className="hover:text-secondary">{t('termsOfUse')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
