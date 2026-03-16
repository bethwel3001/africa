
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
    <div className="flex gap-2 sm:gap-4 justify-center items-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="w-full aspect-square flex items-center justify-center">
        <span className="text-2xl sm:text-5xl font-black text-white drop-shadow-lg">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] font-black mt-1 uppercase tracking-widest text-secondary shadow-black/20 drop-shadow-sm">
        {label}
      </span>
    </div>
  )
}
