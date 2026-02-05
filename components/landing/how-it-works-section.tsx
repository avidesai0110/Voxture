"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { Upload, Cpu, BarChart3, Rocket } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Send Audio + Scenario",
    description:
      "Upload your audio samples with the environment context. Define the noise profile and conditions.",
  },
  {
    icon: Cpu,
    title: "We Simulate Real Conditions",
    description:
      "Our engine applies industrial noise patterns, accents, and interference to your test cases.",
  },
  {
    icon: BarChart3,
    title: "Get Robustness Score",
    description:
      "Receive detailed metrics on transcription accuracy, latency, and failure modes under stress.",
  },
  {
    icon: Rocket,
    title: "Ship with Confidence",
    description:
      "Deploy knowing exactly how your voice AI performs in the conditions your users face.",
  },
]

export function HowItWorksSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection reducedMotion={reducedMotion}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Four simple steps to evaluate your voice AI under real industrial
              conditions.
            </p>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <FadeInSection
              key={step.title}
              delay={index * 100}
              reducedMotion={reducedMotion}
            >
              <div className="rounded-xl border border-border bg-card p-6 h-full hover:border-pokant-teal/50 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pokant-teal/10 mb-4">
                  <step.icon className="h-6 w-6 text-pokant-teal" />
                </div>
                <div className="text-sm font-medium text-pokant-teal mb-2">
                  Step {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
