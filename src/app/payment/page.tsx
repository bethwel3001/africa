
"use client"

import { ArrowLeft, Banknote, CreditCard, Landmark } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/register" className="text-gray-500 hover:text-gray-800">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold text-center text-gray-800">Secure Payment</h1>
          <div className="w-6"></div> {/* Spacer */}
        </div>

        <div className="space-y-6">
          <p className="text-center text-gray-600">
            Choose your preferred payment method to complete the registration.
          </p>

          <div className="grid gap-4">
            <PaymentOption icon={CreditCard} name="Credit/Debit Card" />
            <PaymentOption icon={Banknote} name="M-Pesa" />
            <PaymentOption icon={Landmark} name="Bank Transfer" />
          </div>

          <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
            Pay Now
          </Button>
        </div>
      </div>
       <p className="text-xs text-center text-gray-500 mt-4">All transactions are secure and encrypted.</p>
    </div>
  )
}

function PaymentOption({ icon: Icon, name }: { icon: React.ElementType, name: string }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center gap-4">
        <Icon className="h-8 w-8 text-primary" />
        <span className="font-semibold">{name}</span>
      </div>
      <div className="h-5 w-5 rounded-full border border-gray-300"></div>
    </div>
  )
}
