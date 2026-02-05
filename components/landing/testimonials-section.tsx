"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { Building2 } from "lucide-react"

const testimonials = [
  {
    quote:
      "Pokant caught critical failures our synthetic tests missed. We avoided a major production incident in our construction safety system.",
    author: "Sarah Chen",
    role: "ML Engineering Lead",
    company: "BuildTech AI",
  },
  {
    quote:
      "The robustness scores gave us confidence to ship. We went from 60% field accuracy to 92% after addressing the issues Pokant identified.",
    author: "Marcus Rodriguez",
    role: "CTO",
    company: "VoiceOps Industrial",
  },
  {
    quote:
      "Finally, testing that reflects reality. Our warehouse voice bots now work reliably in 90dB environments thanks to Pokant's insights.",
    author: "Aisha Patel",
    role: "Product Manager",
    company: "LogiVoice",
  },
]

export function TestimonialsSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection reducedMotion={reducedMotion}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Trusted by Voice AI Teams
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Engineering teams shipping voice AI to industrial environments
              rely on Pokant.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeInSection
              key={testimonial.author}
              delay={index * 100}
              reducedMotion={reducedMotion}
            >
              <div className="rounded-xl border border-border bg-card p-6 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {testimonial.company}
                  </span>
                </div>

                <blockquote className="flex-1 text-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="border-t border-border pt-4">
                  <div className="font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
