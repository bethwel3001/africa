
"use client"

import * as React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">PAYC <span className="text-secondary">2026</span></h2>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Uniting African youth to drive sustainable development, innovation, and Pan-Africanism.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-secondary transition-colors">About the Conference</Link></li>
              <li><Link href="/#program" className="hover:text-secondary transition-colors">Program Schedule</Link></li>
              <li><Link href="/gallery" className="hover:text-secondary transition-colors">Event Gallery</Link></li>
              <li><Link href="/#contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/register" className="hover:text-secondary transition-colors">Registration</Link></li>
              <li><Link href="/register" className="hover:text-secondary transition-colors">Buy Ticket</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Speaker Nomination</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Partnership Kit</Link></li>
              <li><Link href="/admin/generator" className="hover:text-secondary transition-colors">Organizers Tool</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-white/60 text-sm">Subscribe for updates and speaker announcements.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-secondary transition-colors"
              />
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-bold hover:bg-secondary/90 transition-colors">
                Join
              </button>
            </div>
            <p className="text-xs text-white/40 italic">#AUSPReimagines2063 | #TheAfricaWeWant</p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 INTERNATIONAL PAN-AFRICAN YOUTH CONFERENCE. An Initiative of AUSP.africa.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
