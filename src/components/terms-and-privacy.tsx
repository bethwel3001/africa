
"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ShieldCheck } from "lucide-react"

export function TermsAndPrivacy() {
  const [accepted, setAccepted] = React.useState(false)
  const [form, setForm] = React.useState({
    name: "",
    category: "",
    organization: "",
  })
  const [checks, setChecks] = React.useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
  })
  const [acceptanceDate, setAcceptanceDate] = React.useState("")
  const [reference, setReference] = React.useState("")

  const allChecked = Object.values(checks).every(Boolean)

  const handleAccept = () => {
    if (!form.name || !form.category) {
      alert("Please enter your full name and select your participant category.")
      return
    }
    const now = new Date()
    const ds = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }) + ' at ' + now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
    setAcceptanceDate(ds)
    setReference("IPAYC2026-TC-" + Math.random().toString(36).substr(2, 8).toUpperCase())
    setAccepted(true)
  }

  if (accepted) {
    return (
      <Card className="border-green-200 bg-green-50 mt-8">
        <CardContent className="pt-6 text-center space-y-4">
          <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <Check className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-green-900">Terms Accepted</h3>
            <div className="text-green-800 text-sm leading-relaxed">
              <p>{form.name} · {form.category} {form.organization ? ` · ${form.organization}` : ''}</p>
              <p>Accepted on: {acceptanceDate}</p>
              <p>Reference: {reference}</p>
            </div>
            <p className="text-xs text-green-600 pt-4">
              A confirmation record will be included in your registration email from AUSP.Africa.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8">
      {/* Header */}
      <div className="bg-[#1a5c2a] text-white rounded-2xl p-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase border border-white/20">
          Version 1.0 · April 2026
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">Terms, Privacy & Conditions of Participation</h1>
        <p className="text-white/70 text-sm max-w-2xl mx-auto">
          International Pan-African Youth Conference (IPAYC) 2026 · Nairobi, Kenya · October 2026
          <br />Issued by AUSP.Africa — African Union Students' Platform
        </p>
      </div>

      {/* Meta */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-muted/30 border-none">
          <CardContent className="p-4 text-center">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Governing body</p>
            <p className="text-sm font-semibold text-primary">AUSP.Africa</p>
          </CardContent>
        </Card>
        <Card className="bg-muted/30 border-none">
          <CardContent className="p-4 text-center">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Effective date</p>
            <p className="text-sm font-semibold">April 2026</p>
          </CardContent>
        </Card>
        <Card className="bg-muted/30 border-none">
          <CardContent className="p-4 text-center">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Jurisdiction</p>
            <p className="text-sm font-semibold">Republic of Kenya</p>
          </CardContent>
        </Card>
      </div>

      {/* Intro */}
      <div className="bg-green-50 border-l-4 border-[#1a5c2a] p-6 text-sm text-green-900 leading-relaxed rounded-r-xl">
        These Terms & Conditions ("T&C") constitute a legally binding agreement between AUSP.Africa ("the Organiser") and any individual or entity ("the Participant") who registers for, attends, sponsors, partners with, or otherwise participates in the International Pan-African Youth Conference 2026 ("the Conference"). By completing registration or signing any agreement with the Organiser, you confirm that you have read, understood, and accepted these terms in full.
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {/* Section 1 */}
        <div id="s1" className="bg-white border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6">
            <div className="flex items-center gap-4 pb-4 border-b mb-4">
              <div className="h-8 w-8 rounded-full bg-[#1a5c2a] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
              <h2 className="text-lg font-bold">Definitions & scope</h2>
              <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800 hover:bg-green-200 border-none">All participants</Badge>
            </div>
            
            <div className="space-y-6 text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-foreground mb-1">1.1 Definitions</h3>
                <p className="text-muted-foreground">In these T&C: "Conference" means IPAYC 2026, to be held in Nairobi, Kenya in October 2026. "Organiser" means AUSP.Africa and its authorised representatives. "Participant" means any person or entity engaging with the Conference in any capacity, including but not limited to delegates, speakers, panellists, sponsors, partners, VIPs, observers, media, volunteers, and facilitators. "Agreement" means these T&C together with any supplementary agreements, letters of intent, or Memoranda of Understanding (MoUs) entered into with the Organiser.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">1.2 Scope</h3>
                <p className="text-muted-foreground">These T&C apply to all Conference-related activities, including in-person attendance in Nairobi, virtual participation, pre-conference engagements, side events, social functions, media coverage, and any digital platforms operated by the Organiser in connection with IPAYC 2026.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">1.3 Amendments</h3>
                <p className="text-muted-foreground">The Organiser reserves the right to amend these T&C at any time. Participants will be notified of material changes via their registered email. Continued participation constitutes acceptance of amended terms.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Categories */}
        <div id="s2" className="bg-white border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6">
            <div className="flex items-center gap-4 pb-4 border-b mb-4">
              <div className="h-8 w-8 rounded-full bg-[#1a5c2a] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
              <h2 className="text-lg font-bold">Participant categories & specific terms</h2>
              <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800 hover:bg-green-200 border-none">All participants</Badge>
            </div>

            <p className="text-xs text-muted-foreground mb-6 italic">Select a participant category to view specific terms that apply to that group.</p>

            <Tabs defaultValue="delegate" className="w-full">
              <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-6">
                {["delegate", "speaker", "sponsor", "partner", "vip", "observer", "media", "volunteer", "virtual"].map((cat) => (
                  <TabsTrigger 
                    key={cat}
                    value={cat} 
                    className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full border text-xs px-4 py-2 capitalize transition-all"
                  >
                    {cat === 'vip' ? 'VIPs' : cat + 's'}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="delegate" className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 text-xs text-blue-900 rounded-r-lg">
                  Applies to: local, national, regional, continental, and diaspora delegates attending in person in Nairobi.
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Registration confirmation</p>
                    <p className="text-muted-foreground">A delegate's place is confirmed only upon receipt of full payment of the applicable registration fee ($50 standard / $70 for delegates aged 36+) and written confirmation from the Organiser. Submission of a registration form does not constitute a guaranteed place.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Age bracket & fee accuracy</p>
                    <p className="text-muted-foreground">Delegates must accurately declare their age bracket. Misrepresentation of age to obtain a lower fee tier will result in immediate cancellation of registration without refund and may be reported to the delegate's parent institution.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Position paper — delegates aged 36+</p>
                    <p className="text-muted-foreground">Senior delegates (36+) are required to submit a position paper on behalf of their declared country or organisation prior to the Conference. The paper must: (a) be submitted no later than 30 days before the Conference; (b) be original work; (c) address at least one thematic pillar of IPAYC 2026. Failure to submit a position paper will not entitle the delegate to a refund but may restrict access to the UN-model plenary debate.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Delegate conduct</p>
                    <p className="text-muted-foreground">Delegates agree to participate respectfully in all sessions, uphold the Pan-African values of the Conference, and comply with all instructions from the Organiser and venue management. Disruptive behaviour will result in removal without refund.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Goodie bag & t-shirt</p>
                    <p className="text-muted-foreground">Delegate materials including the goodie bag and branded t-shirt are distributed once at the registration desk on the first day of the Conference. Uncollected items are not replaceable and no cash equivalent will be offered.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="speaker" className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 text-xs text-blue-900 rounded-r-lg">
                  Applies to: keynote speakers, panellists, workshop facilitators, and rapporteurs.
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Engagement agreement</p>
                    <p className="text-muted-foreground">Speakers and panellists must sign a Speaker Engagement Letter with the Organiser no later than 60 days before the Conference. This letter will specify session details, travel and accommodation arrangements (if applicable), and content guidelines.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Content standards</p>
                    <p className="text-muted-foreground">All presentations, speeches, and workshop materials must: (a) be original or properly attributed; (b) align with the Conference's thematic pillars and Pan-African values; (c) be free from hate speech, political propaganda, or content that discriminates on the basis of race, gender, religion, nationality, sexual orientation, or disability. The Organiser reserves the right to withdraw a speaker invitation if submitted materials do not meet these standards.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Intellectual property</p>
                    <p className="text-muted-foreground">Speakers grant AUSP.Africa a non-exclusive, royalty-free licence to record, reproduce, and distribute their presentation for Conference documentation and promotional purposes, unless a prior written exception is agreed.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Cancellation by speaker</p>
                    <p className="text-muted-foreground">Speakers who cancel within 30 days of the Conference without a documented emergency may forfeit any agreed honorarium and may be excluded from future AUSP.Africa events.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sponsor" className="space-y-4">
                <div className="bg-amber-50 border-l-4 border-amber-600 p-4 text-xs text-amber-900 rounded-r-lg">
                  Applies to: all financial sponsors at any tier (Title, Platinum, Gold, Silver, Bronze, Community, etc.).
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Sponsorship agreement</p>
                    <p className="text-muted-foreground">All sponsorship commitments must be formalised through a signed Sponsorship Agreement and accompanying invoice. No sponsorship benefits will be activated until at least 50% of the agreed sponsorship fee has been received. Full payment is required no later than 30 days before the Conference.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Benefits & visibility</p>
                    <p className="text-muted-foreground">Sponsor benefits are tier-dependent and outlined in the IPAYC 2026 Sponsorship Packages document. The Organiser will make all reasonable efforts to deliver agreed benefits. Benefits that cannot be delivered due to circumstances beyond the Organiser's control will be substituted with equivalents of similar value.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Brand usage</p>
                    <p className="text-muted-foreground">Sponsors grant AUSP.Africa permission to use their logo and brand name across Conference materials. The Organiser will not alter sponsor logos without consent.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Editorial independence</p>
                    <p className="text-muted-foreground">Sponsorship does not confer editorial control over Conference content, speakers, or programming. The Organiser maintains full editorial independence. Sponsors may not direct the Organiser to exclude or favour any participant, speaker, or topic.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Refunds</p>
                    <p className="text-muted-foreground">Sponsorship fees are non-refundable once the Sponsorship Agreement is signed. In the event of Conference cancellation by the Organiser (not due to force majeure), a credit equivalent to 75% of the sponsorship fee will be applied toward a future AUSP.Africa event within 24 months.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="partner" className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 text-xs text-blue-900 rounded-r-lg">
                  Applies to: institutional partners, co-organisers, implementing partners, academic partners, and MoU signatories.
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Partnership formalisation</p>
                    <p className="text-muted-foreground">All partnerships must be documented through a signed Memorandum of Understanding (MoU) or Partnership Agreement, specifying roles, deliverables, timelines, and mutual obligations. Verbal agreements do not constitute binding partnerships.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Co-branding</p>
                    <p className="text-muted-foreground">Partners will be credited on all Conference materials as agreed in the MoU. Co-branding guidelines will be shared upon agreement signing. Partners may not represent the partnership as an endorsement of their broader activities beyond the scope of the Conference.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Deliverables</p>
                    <p className="text-muted-foreground">Each partner is responsible for fulfilling their agreed deliverables by the dates specified in the MoU. Failure to deliver without adequate notice may result in removal of partner recognition from Conference materials.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="vip" className="space-y-4">
                <div className="bg-amber-50 border-l-4 border-amber-600 p-4 text-xs text-amber-900 rounded-r-lg">
                  Applies to: government officials, ambassadors, AU Commission representatives, heads of institutions, and all formally designated VIP guests.
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">VIP designation</p>
                    <p className="text-muted-foreground">VIP status is extended by invitation only and must be confirmed in writing by the Organiser's Protocol Office. VIP access includes reserved seating, dedicated liaison officers, access to VIP lounges, and protocol-compliant hosting arrangements.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Protocol obligations</p>
                    <p className="text-muted-foreground">VIP guests are expected to honour confirmed attendance commitments. Where a VIP is unable to attend, the Organiser requests no less than 72 hours' written notice to make appropriate adjustments to programme and protocol arrangements.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Security</p>
                    <p className="text-muted-foreground">VIP guests requiring security detail must notify the Organiser's Protocol Office at least 14 days before the Conference. The Organiser will liaise with the venue and relevant authorities but cannot guarantee armed escort services.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="observer" className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 text-xs text-blue-900 rounded-r-lg">
                  Applies to: representatives of civil society organisations, diplomatic missions, think tanks, and others attending in a non-participating observer capacity.
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Observer access</p>
                    <p className="text-muted-foreground">Observers are granted access to open plenary sessions and designated side events. Access to closed workshops, working group sessions, and VIP areas is not included unless specifically authorised by the Organiser.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Non-participation</p>
                    <p className="text-muted-foreground">Observers may not participate in debates, vote on resolutions, or present position papers unless formally upgraded to delegate status and the applicable registration fee is paid.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="media" className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 text-xs text-blue-900 rounded-r-lg">
                  Applies to: accredited journalists, photographers, videographers, social media correspondents, and broadcast crews.
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Accreditation</p>
                    <p className="text-muted-foreground">Media personnel must apply for accreditation through the Organiser's Media Team no later than 21 days before the Conference. Accreditation grants access to designated media areas, press conferences, and open sessions.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Photography & filming</p>
                    <p className="text-muted-foreground">Photography and filming are permitted in open sessions and designated media zones. Flash photography during keynote addresses requires prior approval. Filming of minors requires signed parental/guardian consent.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="volunteer" className="space-y-4">
                <div className="bg-green-50 border-l-4 border-primary p-4 text-xs text-primary rounded-r-lg">
                  Applies to: all Conference volunteers, logistics staff, registration team members, and session support personnel.
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Volunteer agreement</p>
                    <p className="text-muted-foreground">Volunteers must sign a Volunteer Agreement prior to commencement of duties. This agreement outlines responsibilities, hours, code of conduct, and entitlements (meals, transport stipends, and a volunteer certificate).</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Confidentiality</p>
                    <p className="text-muted-foreground">Volunteers may have access to participant personal data, logistical information, and VIP arrangements. All such information is strictly confidential and must not be shared with any third party during or after the Conference.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="virtual" className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 text-xs text-blue-900 rounded-r-lg">
                  Applies to: registered delegates attending IPAYC 2026 online via the virtual platform.
                </div>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Virtual access</p>
                    <p className="text-muted-foreground">Virtual delegates will receive access credentials to the Conference's live-streaming platform upon payment confirmation. Credentials are personal and non-transferable. Sharing access links or credentials with unregistered individuals is a breach of these terms.</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl">
                    <p className="font-bold text-foreground mb-1">Technical requirements</p>
                    <p className="text-muted-foreground">Virtual delegates are responsible for ensuring they have a stable internet connection, compatible device, and any required software. The Organiser will provide technical guidance but cannot be held responsible for connectivity issues on the delegate's end.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Section 3: Fees */}
        <div id="s3" className="bg-white border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6">
            <div className="flex items-center gap-4 pb-4 border-b mb-4">
              <div className="h-8 w-8 rounded-full bg-[#1a5c2a] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
              <h2 className="text-lg font-bold">Registration, fees & payments</h2>
              <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800 hover:bg-green-200 border-none">All participants</Badge>
            </div>
            <div className="space-y-4 text-sm leading-relaxed">
              <p><span className="font-bold text-foreground">3.1 Fee structure:</span> Registration fees are as follows: Standard delegate (ages 15–35): $50 USD. Senior delegate (age 36+): $70 USD, inclusive of position paper and UN-model plenary debate seat. VIPs, accredited media, and invited speakers may attend at no registration cost as determined by the Organiser.</p>
              <p><span className="font-bold text-foreground">3.2 Payment methods:</span> Accepted payment methods will be communicated via confirmation email. The Organiser accepts mobile money (M-Pesa), bank transfer, and approved digital payment platforms. All fees are stated in USD. Bank charges or conversion fees are the responsibility of the payer.</p>
              <p><span className="font-bold text-foreground">3.3 Payment deadline:</span> Full payment must be received no later than 30 days before the Conference. Registrations unpaid by this date will be automatically cancelled.</p>
            </div>
          </div>
        </div>

        {/* Section 4: Cancellation */}
        <div id="s4" className="bg-white border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6">
            <div className="flex items-center gap-4 pb-4 border-b mb-4">
              <div className="h-8 w-8 rounded-full bg-[#1a5c2a] text-white flex items-center justify-center text-xs font-bold shrink-0">4</div>
              <h2 className="text-lg font-bold">Cancellation, transfers & refunds</h2>
              <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800 hover:bg-green-200 border-none">All participants</Badge>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p><span className="font-bold text-foreground">4.1 Cancellation by participant:</span> Cancellations must be submitted in writing. Refund schedule: 60+ days (75%), 30-59 days (50%), less than 30 days (No refund). No-show without prior notice: no refund.</p>
              <p><span className="font-bold text-foreground">4.2 Transfer of registration:</span> Delegates may transfer their registration to another eligible person at the same or higher fee tier with written notice no later than 14 days before the Conference. A transfer fee of $10 USD applies.</p>
              <p><span className="font-bold text-foreground">4.3 Cancellation by Organiser:</span> If the Organiser cancels the Conference for reasons other than force majeure, all paid delegates will receive a full refund within 30 working days.</p>
            </div>
          </div>
        </div>

        {/* Section 5: Code of Conduct */}
        <div id="s5" className="bg-white border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6">
            <div className="flex items-center gap-4 pb-4 border-b mb-4">
              <div className="h-8 w-8 rounded-full bg-destructive text-white flex items-center justify-center text-xs font-bold shrink-0">5</div>
              <h2 className="text-lg font-bold">Code of conduct</h2>
              <Badge variant="destructive" className="ml-auto">Strictly Enforced</Badge>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 text-xs text-red-900 leading-relaxed rounded-r-lg mb-6">
              Violation of the code of conduct may result in immediate removal from the Conference without refund, and may be reported to the participant's parent institution, government, or relevant professional body.
            </div>
            <div className="space-y-6 text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-foreground mb-1">5.1 Respect & inclusion</h3>
                <p className="text-muted-foreground">All participants are expected to treat every individual at the Conference with dignity and respect, regardless of gender, age, nationality, ethnicity, religion, disability, sexual orientation, or socioeconomic background. IPAYC 2026 is a safe and inclusive space for all.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">5.2 Prohibited conduct</h3>
                <p className="text-muted-foreground italic mb-2">The following are strictly prohibited at all Conference venues and events:</p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Harassment, intimidation, or threatening behaviour of any kind</li>
                  <li>Hate speech, discrimination, or derogatory language</li>
                  <li>Physical violence or threatening of violence</li>
                  <li>Unauthorised recording or photography of individuals</li>
                  <li>Possession or use of illegal substances</li>
                  <li>Theft or damage of Conference or venue property</li>
                  <li>Misrepresentation of one's identity, credentials, or organisation</li>
                  <li>Disruption of sessions, debates, or official proceedings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 9: Privacy */}
        <div id="s9" className="bg-white border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6">
            <div className="flex items-center gap-4 pb-4 border-b mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">9</div>
              <h2 className="text-lg font-bold">Privacy & data protection</h2>
              <Badge className="ml-auto bg-blue-100 text-blue-800 border-none hover:bg-blue-100">Data Secure</Badge>
            </div>
            <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h3 className="font-bold text-foreground mb-1">9.1 Data collected</h3>
                <p>The Organiser collects personal data including name, email, phone number, country, age bracket, dietary requirements, health and accessibility information, professional background, and in some cases passport or national ID details for visa support.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">9.2 Data usage</h3>
                <p>Personal data will be used solely for Conference-related purposes and will not be sold to any third party. Data may be shared with the Conference venue, government authorities as required by Kenyan law, and partner organisations with explicit consent.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">9.3 Data retention</h3>
                <p>Personal data will be retained for a maximum of 24 months after the Conference for reporting and follow-up purposes, after which it will be securely deleted.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 13: Governing Law */}
        <div id="s13" className="bg-white border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6">
            <div className="flex items-center gap-4 pb-4 border-b mb-4">
              <div className="h-8 w-8 rounded-full bg-[#1a5c2a] text-white flex items-center justify-center text-xs font-bold shrink-0">13</div>
              <h2 className="text-lg font-bold">Governing law & dispute resolution</h2>
              <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800 hover:bg-green-200 border-none">Legal</Badge>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p><span className="font-bold text-foreground">13.1 Governing law:</span> These T&C are governed by the laws of the Republic of Kenya. Any disputes arising from or in connection with participation in IPAYC 2026 shall be subject to the exclusive jurisdiction of the Kenyan courts.</p>
              <p><span className="font-bold text-foreground">13.2 Dispute resolution:</span> The parties agree to first attempt to resolve any dispute through good-faith negotiation within 30 days of a written notice of dispute.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Acceptance Box */}
      <Card id="s14" className="border-2 border-primary/20 shadow-xl overflow-hidden rounded-[2rem]">
        <div className="bg-primary/5 p-8 border-b border-primary/10">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold">Acceptance Record</h2>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Confirm your understanding of all 14 sections of the IPAYC 2026 Terms & Conditions.
          </p>
        </div>
        <CardContent className="p-8 space-y-8">
          <div className="grid gap-4">
            {[
              { id: 'c1', label: 'I have read and understood the full Terms & Conditions document.' },
              { id: 'c2', label: 'I consent to Section 9: Privacy & Data Protection policies.' },
              { id: 'c3', label: 'I agree to the Section 5: Code of Conduct and its enforcement.' },
              { id: 'c4', label: 'I acknowledge the Section 4: Cancellation and Refund policy.' },
              { id: 'c5', label: 'I confirm all provided registration information is accurate.' }
            ].map((check) => (
              <div key={check.id} className="flex items-start space-x-3 p-3 hover:bg-muted/30 rounded-lg transition-colors cursor-pointer" onClick={() => setChecks(prev => ({ ...prev, [check.id]: !prev[check.id as keyof typeof checks] }))}>
                <Checkbox id={check.id} checked={checks[check.id as keyof typeof checks]} onCheckedChange={(v) => setChecks({ ...checks, [check.id]: !!v })} />
                <Label htmlFor={check.id} className="text-sm font-medium leading-relaxed cursor-pointer select-none">
                  {check.label}
                </Label>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-6 border-t">
            <div className="space-y-2">
              <Label htmlFor="sig-name" className="text-xs uppercase tracking-widest text-muted-foreground">Full name</Label>
              <Input 
                id="sig-name" 
                placeholder="Jane Doe" 
                className="rounded-xl h-12"
                value={form.name} 
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sig-cat" className="text-xs uppercase tracking-widest text-muted-foreground">Category</Label>
              <Select onValueChange={(v) => setForm({ ...form, category: v })}>
                <SelectTrigger id="sig-cat" className="rounded-xl h-12">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {["Delegate", "Speaker", "Sponsor", "Partner", "VIP", "Observer", "Media", "Volunteer", "Virtual Delegate"].map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="sig-org" className="text-xs uppercase tracking-widest text-muted-foreground">Institution / Organisation</Label>
              <Input 
                id="sig-org" 
                placeholder="African Union Students' Platform" 
                className="rounded-xl h-12"
                value={form.organization} 
                onChange={(e) => setForm({ ...form, organization: e.target.value })} 
              />
            </div>
          </div>

          <Button 
            className="w-full bg-[#1a5c2a] hover:bg-[#174e24] text-white py-8 text-xl font-bold rounded-2xl shadow-lg transition-all active:scale-[0.98]" 
            disabled={!allChecked}
            onClick={handleAccept}
          >
            Accept & Sign Terms
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
