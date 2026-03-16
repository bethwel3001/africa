"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Footer() {
  const logo = PlaceHolderImages.find((img) => img.id === "logo")

  return (
    <footer className="bg-[#121212] text-white pt-32 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            {logo && (
              <div className="relative h-12 w-44 brightness-200 contrast-200">
                <Image src={logo.imageUrl} alt="Logo" fill className="object-contain object-left" />
              </div>
            )}
            <p className="text-white/60 leading-relaxed text-lg font-medium">
              Uniting African youth to drive sustainable development and global innovation.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-secondary transition-all hover:-translate-y-1 text-white hover:text-secondary-foreground"
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 text-secondary tracking-widest uppercase text-xs">Navigation</h3>
            <ul className="space-y-4 text-white/60 font-bold">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-secondary transition-colors">About Conference</Link></li>
              <li><Link href="/#pillars" className="hover:text-secondary transition-colors">Thematic Pillars</Link></li>
              <li><Link href="/gallery" className="hover:text-secondary transition-colors">Event Gallery</Link></li>
              <li><Link href="/#contact" className="hover:text-secondary transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 text-secondary tracking-widest uppercase text-xs">Resources</h3>
            <ul className="space-y-4 text-white/60 font-bold">
              <li><Link href="/register" className="hover:text-secondary transition-colors">Registration Hub</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Partner Kit</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Speaker Nominees</Link></li>
              <li><Link href="/admin/generator" className="hover:text-secondary transition-colors">Organizer Tools</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-black mb-8 text-secondary tracking-widest uppercase text-xs">Newsletter</h3>
            <p className="text-white/60 font-medium">Get the latest speaker updates and announcements.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 w-full focus:outline-none focus:border-secondary transition-colors text-white font-medium"
              />
              <button className="absolute right-2 top-2 h-10 w-10 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/30 text-sm font-medium">
          <p>© 2026 INTERNATIONAL PAN-AFRICAN YOUTH CONFERENCE. An Initiative of AUSP.africa.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}