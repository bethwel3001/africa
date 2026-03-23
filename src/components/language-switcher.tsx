
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
import { useLanguage } from "@/context/LanguageContext"

const languages = [
  { name: "English", code: "EN" },
  { name: "French", code: "FR" },
  { name: "Arabic", code: "AR" },
  { name: "Swahili", code: "SW" },
  { name: "Portuguese", code: "PT" },
] as const

export function LanguageSwitcher({ light }: { light?: boolean }) {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "flex items-center gap-2 font-bold px-3 opacity-0",
          light ? "text-white" : "text-foreground"
        )}
      >
        <Globe className="h-4 w-4" />
        <span className="text-xs">EN</span>
      </Button>
    )
  }

  const currentLang = languages.find(l => l.code === language) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn(
            "flex items-center gap-2 font-bold px-3 rounded-full transition-all",
            light ? "text-white hover:bg-white/10" : "text-foreground hover:bg-black/5"
          )}
        >
          <Globe className="h-4 w-4" />
          <span className="text-xs tracking-wider">{currentLang.code}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 p-1.5 rounded-2xl shadow-xl border-black/5">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn(
              "cursor-pointer rounded-xl font-bold py-2.5 px-4 focus:bg-primary focus:text-white mb-0.5 last:mb-0",
              language === lang.code ? "bg-primary/5 text-primary" : "text-muted-foreground"
            )}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}