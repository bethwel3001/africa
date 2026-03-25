
"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsMenuOpen(document.body.classList.contains('menu-open'))
        }
      })
    })

    observer.observe(document.body, { attributes: true })

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      observer.disconnect()
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-24 right-8 z-50 p-3 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 transition-all duration-300",
        isVisible && !isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Go to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  )
}

