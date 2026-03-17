
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/">← Back to Home</Link>
      </Button>
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-4">
        <p>This is a placeholder for the Privacy Policy. Replace this with your actual privacy policy.</p>
        <h2 className="text-2xl font-bold mt-8">Information We Collect</h2>
        <p>We collect information you provide directly to us. For example, we collect information when you create an account, subscribe, participate in any interactive features of our services, fill out a form, request customer support or otherwise communicate with us.</p>
        <h2 className="text-2xl font-bold mt-8">How We Use Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, such as to administer your use of our services, to provide you with the services you request, and to personalize your experience with us.</p>
      </div>
    </div>
  )
}
