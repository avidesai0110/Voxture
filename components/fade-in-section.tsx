"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  reducedMotion?: boolean
}

export function FadeInSection({
  children,
  className,
  delay = 0,
  reducedMotion = false,
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, reducedMotion])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-[400ms] ease-out",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5",
        className
      )}
    >
      {children}
    </div>
  )
}
