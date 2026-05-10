
"use client"

import { useEffect, useMemo, useState, Suspense } from "react"
import { ArrowLeft, CreditCard, Landmark, User } from "lucide-react"
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

type PaymentMethod = "card" | "mpesa" | "bank" | "paypal"
type TicketType = "student" | "adult" | "general" | "virtual"

const ticketPrices: Record<TicketType, string> = {
  student: "50.00",
  adult: "70.00",
  general: "150.00",
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
      : "general"

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("paypal")
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/register" className="text-gray-500 hover:text-gray-800">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold text-center text-gray-800">{t('securePayment')}</h1>
          <div className="w-6"></div> {/* Spacer */}
        </div>

        <div className="space-y-6">
          <p className="text-center text-gray-600">
            {t('choosePayment')}
          </p>

          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-2">
              <TicketButton
                label={`${t("studentDelegate")} ($${ticketPrices.student})`}
                isActive={selectedTicket === "student"}
                onClick={() => setSelectedTicket("student")}
              />
              <TicketButton
                label={`${t("adultAdmission")} ($${ticketPrices.adult})`}
                isActive={selectedTicket === "adult"}
                onClick={() => setSelectedTicket("adult")}
              />
              <TicketButton
                label={`${t("generalAdmission")} ($${ticketPrices.general})`}
                isActive={selectedTicket === "general"}
                onClick={() => setSelectedTicket("general")}
              />
              <TicketButton
                label={`${t("virtualDelegate")} ($${ticketPrices.virtual})`}
                isActive={selectedTicket === "virtual"}
                onClick={() => setSelectedTicket("virtual")}
              />
            </div>

            <PaymentOption
              icon={CreditCard}
              name={t("creditCard")}
              isSelected={selectedMethod === "card"}
              onClick={() => setSelectedMethod("card")}
            />
            <div className="border rounded-lg overflow-hidden">
              <PaymentOption
                name={t("mpesa")}
                isSelected={selectedMethod === "mpesa"}
                onClick={() => setSelectedMethod("mpesa")}
                logoSrc="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg"
                logoAlt="M-Pesa"
              />
              {selectedMethod === "mpesa" && (
                <div className="p-4 bg-muted/10 border-t">
                  <p className="text-xs font-semibold mb-2 text-primary">{t("paybillDetails")}</p>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/payment/paybill.png"
                      alt="M-Pesa Paybill Details"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
            <PaymentOption
              icon={Landmark}
              name={t("bankTransfer")}
              isSelected={selectedMethod === "bank"}
              onClick={() => setSelectedMethod("bank")}
            />
            <div
              onClick={() => setSelectedMethod("paypal")}
              className={`border rounded-lg cursor-pointer transition-colors ${
                selectedMethod === "paypal" ? "border-primary bg-primary/5" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
                    alt="PayPal"
                    className="h-8 w-8 rounded-sm"
                  />
                  <span className="font-semibold">{t("paypal")}</span>
                </div>
                <div
                  className={`h-5 w-5 rounded-full border ${
                    selectedMethod === "paypal" ? "border-primary bg-primary" : "border-gray-300"
                  }`}
                ></div>
              </div>
              {selectedMethod === "paypal" && (
                <div className="border-t p-4 bg-white/70">
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
                    <p className="text-sm text-red-600">
                      Missing `NEXT_PUBLIC_PAYPAL_CLIENT_ID` in `.env.local`.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <Button disabled className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
            {selectedMethod === "paypal"
              ? `Use PayPal button above ($${amountToPay})`
              : `${t("payNow")} ($${amountToPay})`}
          </Button>
          {successMessage && <p className="text-sm text-green-700 text-center">{successMessage}</p>}
          {errorMessage && <p className="text-sm text-red-600 text-center">{errorMessage}</p>}
        </div>
      </div>
       <p className="text-xs text-center text-gray-500 mt-4">{t("allTransactionsSecure")}</p>
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    }>
      <PaymentPageContent />
    </Suspense>
  )
}

function PaymentOption({
  icon: Icon,
  logoSrc,
  logoAlt,
  name,
  isSelected,
  onClick,
}: {
  icon?: React.ElementType
  logoSrc?: string
  logoAlt?: string
  name: string
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${
        isSelected ? "border-primary bg-primary/5" : "hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-4">
        {logoSrc ? (
          <img src={logoSrc} alt={logoAlt || name} className="h-8 w-8 object-contain" />
        ) : Icon ? (
          <Icon className="h-8 w-8 text-primary" />
        ) : null}
        <span className="font-semibold">{name}</span>
      </div>
      <div className={`h-5 w-5 rounded-full border ${isSelected ? "border-primary bg-primary" : "border-gray-300"}`}></div>
    </div>
  )
}

function TicketButton({
  label,
  isActive,
  onClick,
}: {
  label: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md border px-2 py-2 text-[11px] font-medium leading-tight transition-colors ${
        isActive ? "border-primary bg-primary/5 text-primary" : "border-gray-200 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  )
}
