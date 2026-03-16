
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

const languages = [
  { name: "English", code: "en" },
  { name: "Arabic", code: "ar" },
  { name: "French", code: "fr" },
  { name: "Portuguese", code: "pt" },
  { name: "Spanish", code: "es" },
  { name: "Swahili", code: "sw" },
]

export function LanguageSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const [currentLang, setCurrentLang] = React.useState(languages[0])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // If not mounted, render a visual placeholder that matches the server-side structure
  // without the Radix DropdownMenu trigger logic that generates dynamic IDs.
  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="flex items-center gap-2">
        <Globe className="h-4 w-4" />
        <span className="hidden md:inline">{currentLang.name}</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline">{currentLang.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setCurrentLang(lang)}
            className="cursor-pointer"
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
