"use client"

import Link from "next/link"
import { WaveformCanvas } from "@/components/waveform-canvas"
import { RobustnessScore } from "@/components/robustness-score"
import { NoiseMeter } from "@/components/noise-meter"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

export function HeroSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
              Test Voice AI in Real-World Conditions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Synthetic tests miss production failures. Pokant evaluates your
              voice models against 80-105dB industrial environments where
              real-world noise matters.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-pokant-teal px-6 py-3 text-base font-medium text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pokant-teal/20 transition-all duration-150"
              >
                Get API Key
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-base font-medium text-foreground hover:-translate-y-0.5 hover:bg-accent transition-all duration-150"
              >
                View Docs
              </Link>
            </div>
          </div>

          {/* Right column - Dashboard mockup */}
          <div className="relative">
            <div className="rounded-xl border border-border bg-card p-6 shadow-2xl shadow-black/5 dark:shadow-black/20">
              {/* Waveform */}
              <div className="relative h-32 rounded-lg bg-background overflow-hidden mb-4">
                <WaveformCanvas
                  className="absolute inset-0"
                  reducedMotion={reducedMotion}
                />
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <RobustnessScore reducedMotion={reducedMotion} />
                <NoiseMeter reducedMotion={reducedMotion} />
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -z-10 inset-0 blur-3xl opacity-20 bg-gradient-to-r from-pokant-teal to-emerald-500 rounded-full transform scale-150" />
          </div>
        </div>
      </div>
    </section>
  )
}
