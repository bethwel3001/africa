"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

export function SplashPopup() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    setIsOpen(true)
  }, [])

  if (!mounted) return null

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay 
          className="fixed inset-0 z-[9998] bg-black/90 backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" 
        />
        <DialogPrimitive.Content
          className="fixed left-[50%] top-[50%] z-[9999] w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[700px] translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 focus:outline-none"
        >
          <DialogPrimitive.Title className="sr-only">
            IPAYC 2026 Splash
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            International Pan African Youth Conference 2026
          </DialogPrimitive.Description>

          <div className="relative w-full flex flex-col items-center justify-center">
            <img
              src="/LOGO/splash.png"
              alt="IPAYC 2026 Splash"
              className="w-full h-auto block"
              onLoad={() => console.log("Splash image loaded successfully")}
              onError={(e) => console.error("Splash image failed to load", e)}
            />
            
            <DialogPrimitive.Close className="absolute -top-4 -right-4 md:-top-8 md:-right-8 rounded-full bg-white p-2 text-black shadow-xl hover:bg-gray-200 transition-all hover:scale-110 focus:outline-none z-[10000]">
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
