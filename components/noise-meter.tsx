"use client"

import { useEffect, useState } from "react"

interface NoiseMeterProps {
  reducedMotion?: boolean
}

export function NoiseMeter({ reducedMotion = false }: NoiseMeterProps) {
  const [isHigh, setIsHigh] = useState(false)

  useEffect(() => {
    if (reducedMotion) return

    const interval = setInterval(() => {
      setIsHigh((prev) => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [reducedMotion])

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">
          Noise Level
        </span>
        <span
          className={`text-sm font-mono font-medium transition-colors duration-300 ${
            isHigh ? "text-red-500" : "text-muted-foreground"
          }`}
        >
          {isHigh ? "95dB Construction" : "60dB Call Center"}
        </span>
      </div>
      <div className="flex gap-0.5 items-end h-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-1.5 rounded-full transition-all duration-300 ${
              isHigh
                ? i <= 5
                  ? "bg-red-500"
                  : "bg-muted"
                : i <= 3
                  ? "bg-green-500"
                  : "bg-muted"
            }`}
            style={{
              height: `${(i / 5) * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
