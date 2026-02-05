"use client"

import { useEffect, useRef, useState } from "react"

interface WaveformCanvasProps {
  className?: string
  reducedMotion?: boolean
}

export function WaveformCanvas({ className, reducedMotion }: WaveformCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const width = rect.width
    const height = rect.height

    let offset = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw waveform
      ctx.beginPath()
      ctx.strokeStyle = "#21808D"
      ctx.lineWidth = 2

      const numPoints = 100
      const step = width / numPoints

      for (let i = 0; i <= numPoints; i++) {
        const x = i * step
        // Create irregular peaks simulating 80-95dB noise pattern
        const baseAmplitude = height * 0.3
        const noise1 = Math.sin((i + offset) * 0.15) * baseAmplitude
        const noise2 = Math.sin((i + offset) * 0.3) * baseAmplitude * 0.5
        const noise3 = Math.sin((i + offset) * 0.7) * baseAmplitude * 0.3
        const spike = Math.random() > 0.95 ? (Math.random() - 0.5) * height * 0.4 : 0
        const y = height / 2 + noise1 + noise2 + noise3 + spike

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()

      // Draw filled area
      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()
      ctx.fillStyle = "rgba(33, 128, 141, 0.1)"
      ctx.fill()

      if (!reducedMotion) {
        offset += 0.5
        animationRef.current = requestAnimationFrame(draw)
      }
    }

    // Initial delay for loading state
    const timer = setTimeout(() => {
      setIsLoaded(true)
      draw()
    }, 300)

    return () => {
      clearTimeout(timer)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [reducedMotion])

  return (
    <div className={className}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}
