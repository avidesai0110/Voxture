"use client"

import { useEffect, useRef, useState } from "react"

interface RobustnessScoreProps {
  startValue?: number
  endValue?: number
  duration?: number
  reducedMotion?: boolean
}

export function RobustnessScore({
  startValue = 78,
  endValue = 95,
  duration = 1000,
  reducedMotion = false,
}: RobustnessScoreProps) {
  const [value, setValue] = useState(startValue)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reducedMotion) {
      setValue(endValue)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const startTime = Date.now()

            const animate = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)
              // Ease out
              const easeOut = 1 - Math.pow(1 - progress, 3)
              const current = Math.round(
                startValue + (endValue - startValue) * easeOut
              )
              setValue(current)

              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }

            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [startValue, endValue, duration, hasAnimated, reducedMotion])

  return (
    <div ref={ref} className="flex items-baseline gap-1">
      <span className="text-4xl font-bold text-pokant-teal tabular-nums">
        {value}%
      </span>
      <span className="text-sm text-muted-foreground">robustness</span>
    </div>
  )
}
