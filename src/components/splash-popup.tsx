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
          className="fixed left-[50%] top-[50%] z-[9999] w-[90vw] max-w-[320px] md:max-w-[360px] translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 focus:outline-none"
        >
          <DialogPrimitive.Title className="sr-only">
            IPAYC 2026 Splash
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            International Pan African Youth Conference 2026
          </DialogPrimitive.Description>

          <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-white shadow-2xl border border-muted">
            <img
              src="/LOGO/splash.png"
              alt="IPAYC 2026 Splash"
              className="w-full h-full object-cover block"
              onLoad={() => console.log("Splash image loaded successfully")}
              onError={(e) => console.error("Splash image failed to load", e)}
            />
            
            <DialogPrimitive.Close className="absolute top-3 right-3 rounded-full bg-black/60 hover:bg-black/80 p-1.5 text-white shadow-md transition-colors focus:outline-none z-[10000]">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
