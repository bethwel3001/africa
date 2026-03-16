"use client"

import * as React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-foreground pt-24 pb-12 border-t border-black/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-primary tracking-tighter">PAYC 2026</h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Uniting African youth to drive sustainable development and global innovation. An initiative of AUSP.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-1 text-primary hover:text-secondary-foreground"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black mb-6 text-primary tracking-widest uppercase">Navigation</h3>
            <ul className="space-y-3 text-muted-foreground font-semibold text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Conference</Link></li>
              <li><Link href="/#pillars" className="hover:text-primary transition-colors">Thematic Pillars</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Event Gallery</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black mb-6 text-primary tracking-widest uppercase">Resources</h3>
            <ul className="space-y-3 text-muted-foreground font-semibold text-sm">
              <li><Link href="/register" className="hover:text-primary transition-colors">Registration Hub</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Partner Kit</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Speaker Nominees</Link></li>
              <li><Link href="/admin/generator" className="hover:text-primary transition-colors">Organizer Tools</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-black mb-6 text-primary tracking-widest uppercase">Newsletter</h3>
            <p className="text-muted-foreground text-sm font-medium">Get the latest speaker updates and announcements.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-primary transition-colors text-foreground font-medium text-sm"
              />
              <button className="absolute right-1.5 top-1.5 h-8 w-8 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground/60 text-xs font-medium">
          <p>© 2026 INTERNATIONAL PAN-AFRICAN YOUTH CONFERENCE. An Initiative of AUSP.africa.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}