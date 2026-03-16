"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const languages = [
  { name: "English", code: "en" },
  { name: "Arabic", code: "ar" },
  { name: "French", code: "fr" },
  { name: "Portuguese", code: "pt" },
  { name: "Spanish", code: "es" },
  { name: "Swahili", code: "sw" },
]

export function LanguageSwitcher({ light }: { light?: boolean }) {
  const [mounted, setMounted] = React.useState(false)
  const [currentLang, setCurrentLang] = React.useState(languages[0])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn(
            "flex items-center gap-2 font-medium hover:bg-white/10 transition-colors",
            light ? "text-white" : "text-foreground"
          )}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden lg:inline">{currentLang.name}</span>
          <span className="lg:hidden uppercase text-xs font-bold">{currentLang.code}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 p-2 rounded-xl">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setCurrentLang(lang)}
            className="cursor-pointer rounded-lg font-medium py-2 px-3 focus:bg-primary/5 focus:text-primary"
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}