
"use client"

import { useEffect, useMemo, useState, Suspense } from "react"
import { ArrowLeft, CreditCard, Landmark, CheckCircle2, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import {
  PayPalButtons,
  PayPalScriptProvider,
  type ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js"
import type { CreateOrderActions, CreateOrderData, OnApproveData } from "@paypal/paypal-js"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type PaymentMethod = "card" | "mpesa" | "bank" | "paypal"
type TicketType = "student" | "adult" | "general" | "virtual"

const ticketPrices: Record<TicketType, string> = {
  student: "50.00",
  adult: "75.00",
  general: "100.00",
  virtual: "25.00",
}

function PaymentPageContent() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const ticketFromQuery = searchParams.get("ticket")
  const paypalState = searchParams.get("paypal")
  const paypalOrderId = searchParams.get("token")
  
  const initialTicket: TicketType =
    (ticketFromQuery === "student" || ticketFromQuery === "adult" || ticketFromQuery === "general" || ticketFromQuery === "virtual")
      ? ticketFromQuery as TicketType
      : "student"

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null)
  const [selectedTicket, setSelectedTicket] = useState<TicketType>(initialTicket)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [isCapturing, setIsCapturing] = useState(false)
  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID

  const amountToPay = useMemo(() => ticketPrices[selectedTicket], [selectedTicket])
  
  const paypalScriptOptions: ReactPayPalScriptOptions | null = paypalClientId
    ? {
        clientId: paypalClientId,
        currency: "USD",
        intent: "capture",
      }
    : null

  async function createPaypalOrder(_data: CreateOrderData, _actions: CreateOrderActions) {
    setErrorMessage(null)
    setSuccessMessage(null)

    const response = await fetch("/api/paypal/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ticketType: selectedTicket,
        currency: "USD",
      }),
    })

    const data = (await response.json()) as {
      orderId?: string
      error?: string
    }

    if (!response.ok || !data.orderId) {
      throw new Error(data.error || "Unable to start PayPal checkout.")
    }

    return data.orderId
  }

  async function onPaypalApprove(data: OnApproveData) {
    setIsCapturing(true)
    setErrorMessage(null)
    setSuccessMessage(null)

    try {
      if (!data.orderID) {
        throw new Error("Missing PayPal order ID.")
      }

      const response = await fetch("/api/paypal/capture-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId: data.orderID }),
      })

      const captureResult = (await response.json()) as { success?: boolean; error?: string }

      if (!response.ok || !captureResult.success) {
        throw new Error(captureResult.error || "Payment was approved but capture failed.")
      }

      setSuccessMessage("Payment completed successfully with PayPal.")
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to capture PayPal payment.")
    } finally {
      setIsCapturing(false)
    }
  }

  useEffect(() => {
    async function captureApprovedOrder(orderId: string) {
      setIsCapturing(true)
      setErrorMessage(null)
      setSuccessMessage(null)

      try {
        const response = await fetch("/api/paypal/capture-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderId }),
        })

        const data = (await response.json()) as { success?: boolean; error?: string }

        if (!response.ok || !data.success) {
          throw new Error(data.error || "Payment was approved but capture failed.")
        }

        setSuccessMessage("Payment completed successfully with PayPal.")
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : "Failed to capture PayPal payment.")
      } finally {
        setIsCapturing(false)
      }
    }

    if (paypalState === "success" && paypalOrderId) {
      void captureApprovedOrder(paypalOrderId)
      return
    }

    if (paypalState === "cancelled") {
      setErrorMessage("PayPal payment was cancelled.")
    }
  }, [paypalState, paypalOrderId])

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 py-8 md:py-12">
      <div className="w-full max-w-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center">
          <Link 
            href="/register" 
            className="group flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium"
          >
            <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </div>
            <span>Back</span>
          </Link>
        </div>

        {/* Step 1: Registration Form */}
        <Card className="border-primary/20 bg-white shadow-sm overflow-hidden">
          <CardHeader className="text-center pb-2 pt-4">
            <CardTitle className="text-xl text-slate-900">Complete Your Registration</CardTitle>
            <CardDescription className="text-sm text-slate-600 max-w-xl mx-auto">
              Please complete the official delegate registration form to capture your details correctly.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-6">
            <Button 
              className="w-full max-w-sm bg-primary hover:bg-primary/90 text-white font-bold h-11 rounded-lg shadow transition-all hover:scale-[1.01]" 
              asChild
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSegVepG6rWH8rPo2dz5t4W1-070AJ4xq-m4GVcQK1oiyR-NWA/viewform?usp=dialog" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2"
              >
                Open Registration Form <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Step 2: Payment Method */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200"></div>
            <h2 className="text-sm font-semibold text-black">Choose payment method</h2>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <PaymentOptionCard
              id="card"
              icon={<CreditCard className="h-5 w-5" />}
              name={t("creditCard")}
              description="Secure processing via Stripe"
              isSelected={selectedMethod === "card"}
              onClick={() => setSelectedMethod("card")}
            />
            <PaymentOptionCard
              id="mpesa"
              logo="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg"
              name={t("mpesa")}
              description="Lipa na M-Pesa Paybill"
              isSelected={selectedMethod === "mpesa"}
              onClick={() => setSelectedMethod("mpesa")}
            />
            <PaymentOptionCard
              id="bank"
              icon={<Landmark className="h-5 w-5" />}
              name={t("bankTransfer")}
              description="Direct bank deposit"
              isSelected={selectedMethod === "bank"}
              onClick={() => setSelectedMethod("bank")}
            />
            <PaymentOptionCard
              id="paypal"
              logo="https://www.paypalobjects.com/webstatic/icon/pp258.png"
              name={t("paypal")}
              description="Fast and secure global payment"
              isSelected={selectedMethod === "paypal"}
              onClick={() => setSelectedMethod("paypal")}
            />
          </div>

          {/* Conditional Content based on Selection */}
          <div className="min-h-[50px] transition-all duration-300">
            {selectedMethod === "mpesa" && (
              <Card className="border-primary/30 bg-primary/5 shadow-inner animate-in fade-in slide-in-from-top-4 duration-500">
                <CardContent className="p-4 md:p-6 flex flex-col items-center">
                  <div className="w-full flex items-center justify-between mb-4">
                     <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                      <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg" 
                        alt="M-Pesa" 
                        width={40} 
                        height={40} 
                        className="object-contain"
                      />
                      {t("paybillDetails")}
                    </h4>
                    <div className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px] font-bold">
                      Step-by-Step
                    </div>
                  </div>
                  
                  <div className="w-full grid md:grid-cols-2 gap-6 items-center">
                    <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden border-2 border-white shadow-md bg-white">
                      <Image
                        src="/payment/paybill.png"
                        alt="M-Pesa Paybill Details"
                        fill
                        className="object-contain p-2"
                        priority
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <InstructionStep number="1" text="Go to M-PESA menu and select 'Lipa na M-PESA'" />
                        <InstructionStep number="2" text="Select 'Paybill' option" />
                        <InstructionStep number="3" text="Enter Business No: [Insert Business Number]" />
                        <InstructionStep number="4" text="Enter Account Name: IPAYC" />
                        <InstructionStep number="5" text={`Enter Amount: ${amountToPay} USD (~KES 6,500)`} />
                        <InstructionStep number="6" text="Enter your M-PESA PIN and Send" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedMethod === "paypal" && (
              <Card className="border-blue-200 bg-blue-50/30 animate-in fade-in slide-in-from-top-4 duration-500">
                <CardContent className="p-6">
                  <div className="max-w-xs mx-auto">
                    {paypalScriptOptions ? (
                      <PayPalScriptProvider options={paypalScriptOptions}>
                        <PayPalButtons
                          style={{ layout: "vertical", shape: "pill", label: "paypal" }}
                          forceReRender={[selectedTicket, amountToPay]}
                          createOrder={createPaypalOrder}
                          onApprove={onPaypalApprove}
                          onError={(error) => {
                            const msg =
                              error instanceof Error ? error.message : "PayPal popup failed to load."
                            setErrorMessage(msg)
                          }}
                        />
                      </PayPalScriptProvider>
                    ) : (
                      <p className="text-xs text-red-600 font-semibold text-center p-2 bg-red-50 rounded">
                        PayPal checkout is currently unavailable.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedMethod && selectedMethod !== "paypal" && selectedMethod !== "mpesa" && (
              <Card className="border-slate-200 bg-slate-50 animate-in fade-in slide-in-from-top-4 duration-500">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-1 text-primary">
                    {selectedMethod === "card" ? <CreditCard className="h-6 w-6" /> : <Landmark className="h-6 w-6" />}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {selectedMethod === "card" ? "Pay with Credit/Debit Card" : "Bank Transfer Instructions"}
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {selectedMethod === "card" 
                      ? "You will be redirected to our secure payment gateway to complete your transaction." 
                      : "Please use the details provided below to make a direct bank deposit to our official account."}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Action Button */}
          <div className="space-y-4">
            {selectedMethod !== "paypal" && (
              <Button 
                onClick={() => {
                  if (selectedMethod === "card") {
                    setErrorMessage("Stripe redirect logic will be implemented here.")
                  } else if (selectedMethod === "bank") {
                    setSuccessMessage("Bank transfer initiated. Please follow instructions above.")
                  } else if (selectedMethod === "mpesa") {
                    setSuccessMessage("Please use the M-Pesa instructions above to complete payment.")
                  }
                }}
                disabled={!selectedMethod || isCapturing} 
                className={cn(
                  "w-full h-14 text-lg font-bold shadow transition-all rounded-xl",
                  selectedMethod ? "bg-primary hover:bg-primary/90 scale-100" : "bg-slate-300 cursor-not-allowed scale-95"
                )}
              >
                {isCapturing ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </span>
                ) : (
                  `${t("payNow")} ($${amountToPay})`
                )}
              </Button>
            )}

            {successMessage && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800 animate-in zoom-in duration-300">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <p className="text-sm font-semibold">{successMessage}</p>
              </div>
            )}
            
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800 animate-in zoom-in duration-300">
                <div className="h-5 w-5 bg-red-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold font-mono">!</div>
                <p className="text-sm font-semibold">{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function PaymentOptionCard({ 
  id, 
  icon, 
  logo, 
  name, 
  description, 
  isSelected, 
  onClick 
}: { 
  id: string
  icon?: React.ReactNode
  logo?: string
  name: string
  description: string
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-start p-3.5 rounded-xl border text-left transition-all duration-300 outline-none",
        isSelected 
          ? "border-primary bg-primary/[0.03] ring-2 ring-primary/10 shadow-sm" 
          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
      )}
    >
      <div className="flex items-center justify-between w-full mb-2">
        <div className={cn(
          "p-2 rounded-lg transition-colors",
          isSelected ? "bg-primary text-white" : "bg-slate-50 text-slate-400"
        )}>
          {logo ? (
            <div className="relative h-5 w-5">
              <Image src={logo} alt={name} fill className={cn("object-contain", isSelected && "brightness-0 invert")} />
            </div>
          ) : icon}
        </div>
        <div className={cn(
          "h-4 w-4 rounded-full border flex items-center justify-center transition-all",
          isSelected ? "border-primary bg-primary" : "border-slate-200 bg-white"
        )}>
          {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white"></div>}
        </div>
      </div>
      <div className="space-y-0.5">
        <p className={cn("font-bold text-base", isSelected ? "text-slate-900" : "text-slate-700")}>{name}</p>
        <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">{description}</p>
      </div>
    </button>
  )
}

function InstructionStep({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-[10px] border border-primary/20">
        {number}
      </div>
      <p className="text-slate-700 font-medium text-xs pt-1">{text}</p>
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/20 border-t-primary"></div>
          <p className="text-slate-500 font-medium animate-pulse text-sm">Loading payment...</p>
        </div>
      </div>
    }>
      <PaymentPageContent />
    </Suspense>
  )
}
