
"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-24 right-8 z-50 p-3 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 transition-opacity",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      aria-label="Go to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  )
}
