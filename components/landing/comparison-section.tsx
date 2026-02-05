"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { AlertTriangle, CheckCircle2 } from "lucide-react"

export function ComparisonSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection reducedMotion={reducedMotion}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Synthetic vs. Real-World Testing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Most voice AI tests run in clean conditions. Production deployments
              face industrial noise, accents, and interference.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Synthetic Testing */}
          <FadeInSection delay={100} reducedMotion={reducedMotion}>
            <div className="rounded-xl border border-border bg-card p-6 lg:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Synthetic Testing
                </h3>
              </div>

              {/* Clean waveform visualization */}
              <div className="h-24 rounded-lg bg-background flex items-center justify-center mb-4 overflow-hidden">
                <svg viewBox="0 0 200 50" className="w-full h-16 px-4">
                  <path
                    d="M0,25 Q25,10 50,25 T100,25 T150,25 T200,25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted-foreground/50"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">
                  Clean audio, no noise
                </span>
                <span className="font-mono text-lg font-bold text-amber-500">
                  95%
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Tests pass in perfect lab conditions. High confidence scores
                mask real-world failures. Your voice bot ships, then breaks in
                production.
              </p>

              <div className="mt-4 px-3 py-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm">
                False confidence leads to production failures
              </div>
            </div>
          </FadeInSection>

          {/* Pokant Hybrid Testing */}
          <FadeInSection delay={200} reducedMotion={reducedMotion}>
            <div className="rounded-xl border-2 border-pokant-teal bg-card p-6 lg:p-8 h-full relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-pokant-teal text-white text-xs font-medium rounded-full">
                Recommended
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pokant-teal/10">
                  <CheckCircle2 className="h-5 w-5 text-pokant-teal" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Pokant Hybrid Testing
                </h3>
              </div>

              {/* Noisy waveform visualization */}
              <div className="h-24 rounded-lg bg-background flex items-center justify-center mb-4 overflow-hidden">
                <svg viewBox="0 0 200 50" className="w-full h-16 px-4">
                  <path
                    d="M0,25 L5,15 L10,35 L15,20 L20,30 L25,10 L30,40 L35,25 L40,15 L45,38 L50,22 L55,8 L60,42 L65,20 L70,32 L75,12 L80,38 L85,25 L90,18 L95,35 L100,22 L105,40 L110,15 L115,32 L120,8 L125,38 L130,25 L135,42 L140,18 L145,30 L150,12 L155,35 L160,22 L165,40 L170,15 L175,32 L180,25 L185,38 L190,18 L195,30 L200,25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-pokant-teal"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">
                  95dB industrial noise
                </span>
                <span className="font-mono text-lg font-bold text-pokant-teal">
                  78%
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Real-world accuracy reflects actual production performance.
                Identify weaknesses before your users do. Ship with confidence.
              </p>

              <div className="mt-4 px-3 py-2 rounded-lg bg-pokant-teal/10 text-pokant-teal text-sm">
                Real scores, real confidence, real production readiness
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
