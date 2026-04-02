
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
    name: "Kevin Andere",
    role: "President, International Pan African Youth Conference (IPAYC) & Chair, International Organizing Committee",
    image: "/team/8.png",
    description: "Kevin Andere is a distinguished African youth leader, communications strategist, and Pan-African advocate, serving as the President of the International Pan African Youth Conference (IPAYC) and Chair of its International Organizing Committee. In this capacity, he provides visionary leadership to a premier continental platform that convenes young leaders, policymakers, innovators, and development partners to shape Africa’s future through dialogue, policy influence, and strategic collaboration.\n\nWith a strong foundation in strategic communications and development practice, Kevin serves as the Communications and Campaign Manager at Scholar Media Group Africa, where he leads transformative campaigns that elevate youth voices and drive action across governance, public health, and sustainable development landscapes.\n\nHis leadership footprint spans across Africa and the global stage. He actively contributes to Pan-African youth diplomacy through engagement with the African Union Students’ Platform (AUSP). Internationally, he is a Partner at Lead Equator (India), advancing global youth leadership and collaboration, and the incoming Continental Head for Africa (Signal Architecture) at Right Signal (India), where he will oversee a network of Signal Directors across African nations—strengthening coordinated communication systems and continental representation.\n\nKevin’s global engagement further includes serving as a Scholarship Selection Committee Member with Wichita Foundation (USA) and as a Judge with the Solutions Journalism Network (New York City & California, USA), where he contributes to advancing excellence in storytelling, media integrity, and impact-driven journalism. He also serves as a Public Relations Associate with Thalith Voices, supporting strategic communication efforts that amplify transformative narratives.\n\nAt the intersection of global influence and community impact, Kevin is a Newsletter Manager at the Rosemond Amah Yeboah Foundation (New York City, USA & Ghana), shaping thought leadership and editorial direction, and a Communications Strategist with Kabila La Vijana – Kisumu County Chapter, where he drives grassroots engagement and youth-centered advocacy.\n\nPreviously, he served as a Project Coordinator at Club17, leading initiatives under SDG 3: Good Health and Well-being, including the development of an innovative, sustainable menstrual health solution addressing period poverty—an award-winning intervention recognized for its scalability and social impact.\n\nKevin Andere’s leadership is defined by a commitment to advancing youth empowerment, health equity, climate resilience, and inclusive development. He is widely recognized for his ability to convene stakeholders, mobilize resources, and translate bold ideas into transformative, scalable initiatives.\n\nWith a clear vision for Africa’s future, he continues to champion a generation of young leaders equipped to influence policy, drive innovation, and position Africa as a global force in sustainable development and inclusive growth.",
    socials: {
      linkedin: "https://www.linkedin.com/in/kevin-andere-1b56b1260?utm_source=share_via&utm_content=profile&utm_medium=member_android"
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
  },
  {
    name: "Felix Odhiambo",
    role: "Secretary General of the AUSP Pan African Youth Conference",
    image: "/team/7.png",
    description: "Felix Odhiambo is a third-year Architecture student at JKUAT with a strong passion for designing spaces that are both functional and socially impactful. He is deeply committed to creating architecture that is culturally grounded, translating concepts into meaningful environments through refined design thinking, spatial planning, and visualization skills.\n\nIn his role as Secretary General of the AUSP Pan African Youth Conference, Felix oversees coordination, communication, and organizational strategy, ensuring seamless collaboration and the successful execution of conference initiatives. This experience has strengthened his leadership capacity, attention to structure, and ability to work effectively within diverse, multidisciplinary teams.\n\nFelix is particularly interested in sustainable, community-driven, and culturally responsive architecture. He remains open to opportunities that allow him to contribute to projects with tangible social impact while continuing to grow as a thoughtful and innovative designer.",
    socials: {
      linkedin: "https://www.linkedin.com/in/felix-odhiambo-b78799356?trk=contact-info"
    }
  },
  {
    name: "Reagan Anyango Odhiambo",
    role: "Communications and Media Committee Lead for the International Pan African Youth Conference (IPAYC)",
    image: "/team/5.png",
    description: "I am the Communications and Media Committee Lead for the International Pan African Youth Conference (IPAYC), where I lead a team of graphic designers, PR, social media, and content creators. I coordinate communications before, during, and after the conference, driving awareness campaigns, managing live event coverage, and shaping post-event storytelling and reporting. I am a marketing, public relations, and communications professional with over 9 years’ experience across healthcare, public sector, media, and social impact.\n\nCurrently, I serve as the Marketing, Business Development, and Communications Executive at AAR Healthcare Kenya, delivering campaigns that grow visibility, uptake, and stakeholder engagement. I also serve at AWR Radio Nairobi as Radio Host/Producer.\n\nPreviously, I served at Equity Afia, MMUST FM as a Radio Host/Presenter, and the Head of Marketing and Public Relations at Optex Opticians Ltd.",
    socials: {
      linkedin: ""
    }
  },
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
    name: "Ronney Ochieng",
    role: "Logistics and Operations Team Lead at IPAYC",
    image: "/team/2.png",
    description: "Ronney Ochieng is a Geospatial Engineering student and student leader at the Technical University of Kenya, and Chairperson of the KUZA-TUK Chapter, where he leads strategy, coordinates initiatives, and represents student interests. With a growing professional focus on geospatial technology, Space science data-driven solutions, and innovation, he is also a member of the space Generation advisory council (SGAC) under the united Nations Office for outer space Affairs (UNOOSA) applying technical skills to real-world challenges. He also serves as the Logistics and Operations Team Lead at IPAYC, overseeing planning, coordination and execution of activities to ensure efficient and impactful program delivery.",
    socials: {
      linkedin: "https://www.linkedin.com/in/ronney-ochieng-a7b312270"
    }
  },
  {
    name: "Qs. Ndung’u",
    role: "Registered Quantity Surveyor and Project Manager serving as the ME&I Committee Lead for AUSP Kenya 2026.",
    image: "/team/6.png",
    description: "A member of the Finance Committee, he leverages his expertise in technical cost management to oversee the conference budget, sponsorship packages, and impact evaluation.",
    socials: {
      linkedin: "https://www.linkedin.com/in/samuel-ndungu-4b168819b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
