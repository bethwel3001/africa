
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/">← Back to Home</Link>
      </Button>
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
      <div className="space-y-4">
        <p>This is a placeholder for the Terms of Use. Replace this with your actual terms of use.</p>
        <h2 className="text-2xl font-bold mt-8">1. Acceptance of Terms</h2>
        <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
        <h2 className="text-2xl font-bold mt-8">2. Content</h2>
        <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.</p>
      </div>
    </div>
  )
}
