
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { TermsAndPrivacy } from "@/components/terms-and-privacy"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 pt-12 pb-24">
        <Button asChild variant="ghost" className="mb-8 hover:bg-white">
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </Button>
        <TermsAndPrivacy />
      </div>
      <Footer />
    </main>
  )
}
