
"use client"

import * as React from "react"

const TARGET_DATE = new Date("2026-10-21T09:00:00")

export function Countdown() {
  const [mounted, setMounted] = React.useState(false)
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  React.useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      const now = new Date()
      const difference = TARGET_DATE.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex gap-4 sm:gap-8 justify-center items-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center">
        <span className="text-4xl sm:text-7xl font-bold text-secondary tabular-nums tracking-tighter drop-shadow-xl">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] font-bold mt-2 uppercase tracking-[0.2em] text-foreground drop-shadow-sm">
        {label}
      </span>
    </div>
  )
}
