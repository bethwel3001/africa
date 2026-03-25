
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const team = [
  {
    name: "Leon Ambale",
    role: "Fundraising Lead for IPAYC & Director for Languages at African Union Students Platform",
    image: "/team/4.png",
    description: "With over seven years of experience in fundraising and resource mobilization, I support NGOs and community-based organizations in securing funding, strengthening donor relationships, and developing sustainable financing strategies. I currently serve as an Outreach and Partnerships Manager in an Agri-Tech company, where I build strategic collaborations and expand networks to drive impact. Previously, I worked as a Project Manager at the National Council of Churches of Kenya, overseeing program implementation and stakeholder coordination. I have also contributed to resource mobilization efforts with Upcoming Africa Youth Organization, the Children and Youth Major Group to UNEP, and Humanitarian Global. I serve as Fundraising Lead for IPAYC, where I lead resource mobilization for the conference, and as Director for Languages at the African Union Students Platform.",
    socials: {
      linkedin: "https://www.linkedin.com/in/leon-ambale-380940336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  },
  {
    name: "Noela Gaunya",
    role: "Fundraising and Partnerships Specialist",
    image: "/team/1.png",
    description: "Noella Gaunya is a Fundraising and partnerships specialist with over five years of experience securing funding and building strategic collaborations for social Impact organisations in Africa and beyond. Her expertise includes institutional fundraising, donor relations, partnership development and program coordination across sectors such as Tech and innovation, economic empowerment, gender justice, youth and women's empowerment, climate, health, and community development. Based in Nairobi, Kenya, Noella is committed to equitable resource mobilisation that centres community voices and drives sustainable change and long-term impact.",
    socials: {
      linkedin: "https://www.linkedin.com/in/noella-gaunya/"
    }
  },
  {
    name: "Ronney Ochieng",
    role: "Logistics and Operations Team Lead at IPAYC",
    image: "/team/2.png",
    description: "Ronney Ochieng is a Geospatial Engineering student and student leader at the Technical University of Kenya, and Chairperson of the KUZA-TUK Chapter, where he leads strategy, coordinates initiatives, and represents student interests. With a growing professional focus on geospatial technology, Space science data-driven solutions, and innovation, he is also a member of the space Generation advisory council (SGAC) under the united Nations Office for outer space Affairs (UNOOSA) applying technical skills to real-world challenges. He also serves as the Logistics and Operations Team Lead at IPAYC, overseeing planning, coordination and execution of activities to ensure efficient and impactful program delivery.",
    socials: {
      linkedin: "https://www.linkedin.com/in/ronney-ochieng-a7b312270"
    }
  },
  {
    name: "Carlos Paul Nidza",
    role: "Vice Chair, International Pan African Youth Conference",
    image: "/team/3.png",
    description: "Carlos Paul Nidza serves as the Vice Chair for the International Pan African Youth Conference, where he plays a pivotal role in shaping the strategic direction and fostering continental collaboration among youth. His leadership is focused on empowering the next generation of African visionaries to drive sustainable change and unity across the continent.",
    socials: {
      linkedin: "#"
    }
  }
]

export function TeamSection() {
  const { t } = useLanguage()

  return (
    <section id="team" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">
            {t('teamTitle') || "Our Team"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground uppercase">
            {t('teamHeadline') || "Meet the Visionaries"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            {t('teamSubtitle') || "The dedicated individuals working tirelessly to shape the future of African youth leadership."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
          {team.map((member, i) => (
            <div key={i} className="group space-y-6 flex flex-col items-center text-center bg-white p-6 rounded-3xl shadow-sm border border-primary/5 hover:shadow-md transition-all">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/10 transition-colors duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-4 flex-1 flex flex-col items-center">
                <div>
                  <h3 className="text-xl font-bold text-foreground leading-tight">{member.name}</h3>
                  <p className="text-primary font-semibold text-[10px] md:text-xs uppercase tracking-wider mt-1">{member.role}</p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {member.description}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="rounded-full text-[10px] uppercase font-bold tracking-wider hover:bg-primary hover:text-white transition-colors">
                        Read Bio
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] rounded-3xl">
                      <DialogHeader className="flex flex-col items-center text-center space-y-4">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/10">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <DialogTitle className="text-2xl font-bold">{member.name}</DialogTitle>
                          <p className="text-primary font-bold text-xs uppercase tracking-widest">{member.role}</p>
                        </div>
                      </DialogHeader>
                      <div className="mt-4">
                        <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">
                          {member.description}
                        </p>
                      </div>
                      <div className="mt-6 flex justify-center">
                        {member.socials.linkedin && (
                          <Link 
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                          >
                            <Linkedin size={18} />
                          </Link>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>

                  {member.socials.linkedin && (
                    <Link 
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                      <Linkedin size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
