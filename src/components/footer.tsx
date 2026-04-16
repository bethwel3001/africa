
"use client"

import * as React from "react"
import Link from "next/link"
import { Facebook, Instagram, Send, Mail, MapPin } from "lucide-react"

const socialLinks = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/ipayc2026?igsh=dml3dHFqa21ndzM2"
  },
  {
    Icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61587713274082"
  }
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter text-secondary">IPAYC 2026</h2>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              Uniting African youth to drive sustainable development and global innovation. An initiative of the African Union Students' Platform.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <Link 
                  key={i} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold mb-8 text-secondary tracking-[0.2em] uppercase">Quick Links</h3>
            <ul className="space-y-4 text-primary-foreground/70 font-medium text-sm">
              <li><Link href="/#about" className="hover:text-secondary transition-colors">The Vision</Link></li>
              <li><Link href="/#pillars" className="hover:text-secondary transition-colors">Core Pillars</Link></li>
              <li><Link href="/gallery" className="hover:text-secondary transition-colors">Event Gallery</Link></li>
              <li><Link href="/register" className="hover:text-secondary transition-colors">Delegate Registration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold mb-8 text-secondary tracking-[0.2em] uppercase">Contact Us</h3>
            <ul className="space-y-4 text-primary-foreground/70 font-medium text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span>events@ausp.africa</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-bold mb-8 text-secondary tracking-[0.2em] uppercase">Newsletter</h3>
            <p className="text-primary-foreground/80 text-sm font-medium">Get the latest speaker updates and announcements.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-primary-foreground/10 border-none rounded-full px-6 py-3 w-full focus:outline-none focus:ring-2 focus:ring-secondary text-sm font-medium text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <button className="absolute right-1 top-1 h-8 w-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-white transition-all shadow-lg">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6 text-primary-foreground/40 text-[10px] font-bold tracking-widest uppercase">
          <p>© 2026 International Pan African Youth Conference. ausp.africa</p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-secondary">Privacy policy</Link>
            <Link href="/terms-of-use" className="hover:text-secondary">Terms of use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
