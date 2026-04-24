
"use client"

import { ArrowLeft, Banknote, CreditCard, Landmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"

export default function PaymentPage() {
  const { t } = useLanguage();

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
            <PaymentOption icon={CreditCard} name={t('creditCard')} />
            <div className="border rounded-lg overflow-hidden">
              <PaymentOption icon={Banknote} name={t('mpesa')} />
              <div className="p-4 bg-muted/10 border-t">
                <p className="text-xs font-semibold mb-2 text-primary">{t('paybillDetails')}</p>
                <div className="relative aspect-[16/9] w-full">
                  <Image 
                    src="/payment/paybill.png" 
                    alt="M-Pesa Paybill Details" 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <PaymentOption icon={Landmark} name={t('bankTransfer')} />
            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 text-primary flex items-center justify-center font-bold text-xl italic">
                  PP
                </div>
                <span className="font-semibold">{t('paypal')}</span>
              </div>
              <div className="h-5 w-5 rounded-full border border-gray-300"></div>
            </div>
          </div>

          <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
            {t('payNow')}
          </Button>
        </div>
      </div>
       <p className="text-xs text-center text-gray-500 mt-4">{t('allTransactionsSecure')}</p>
    </div>
  )
}

function PaymentOption({ icon: Icon, name }: { icon: React.ElementType, name: string }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
      <div className="flex items-center gap-4">
        <Icon className="h-8 w-8 text-primary" />
        <span className="font-semibold">{name}</span>
      </div>
      <div className="h-5 w-5 rounded-full border border-gray-300"></div>
    </div>
  )
}
