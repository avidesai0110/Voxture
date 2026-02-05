"use client"

import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Developer",
    price: "$99",
    period: "/mo",
    description: "For individual developers and small projects",
    features: [
      "1,000 evaluations/month",
      "5 noise scenarios",
      "Basic robustness reports",
      "API access",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Team",
    price: "$299",
    period: "/mo",
    description: "For teams shipping production voice AI",
    features: [
      "10,000 evaluations/month",
      "All noise scenarios",
      "Advanced analytics",
      "CI/CD integrations",
      "Priority support",
      "Custom scenarios",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced requirements",
    features: [
      "Unlimited evaluations",
      "Custom noise profiles",
      "Dedicated infrastructure",
      "SLA guarantees",
      "24/7 support",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function PricingSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection reducedMotion={reducedMotion}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Start free, scale as you grow. No hidden fees.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <FadeInSection
              key={plan.name}
              delay={index * 100}
              reducedMotion={reducedMotion}
            >
              <div
                className={`rounded-xl border bg-card p-6 lg:p-8 h-full flex flex-col relative ${
                  plan.highlighted
                    ? "border-2 border-pokant-teal"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-pokant-teal text-white text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-pokant-teal shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-150 hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? "bg-pokant-teal text-white hover:shadow-lg hover:shadow-pokant-teal/20"
                      : "border border-border bg-card text-foreground hover:bg-accent"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
