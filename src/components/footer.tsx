"use client"

import * as React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-foreground pt-16 pb-8 border-t border-black/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-primary tracking-tight">PAYC 2026</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Uniting African youth to drive sustainable development and global innovation. An initiative of AUSP.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="h-9 w-9 rounded-lg bg-primary/5 flex items-center justify-center hover:bg-secondary transition-all text-primary"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold mb-6 text-primary tracking-widest uppercase">Quick Links</h3>
            <ul className="space-y-3 text-muted-foreground font-medium text-sm">
              <li><Link href="/#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/#pillars" className="hover:text-primary transition-colors">Pillars</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/register" className="hover:text-primary transition-colors">Register</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold mb-6 text-primary tracking-widest uppercase">Newsletter</h3>
            <p className="text-muted-foreground text-sm">Get the latest speaker updates and announcements.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-primary/5 border border-primary/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary text-sm"
              />
              <button className="absolute right-1 top-1 h-8 w-8 rounded-md bg-primary text-white flex items-center justify-center hover:bg-primary/90">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground/60 text-xs">
          <p>© 2026 INTERNATIONAL PAN-AFRICAN YOUTH CONFERENCE. AUSP.africa</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">Privacy</Link>
            <Link href="#" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}