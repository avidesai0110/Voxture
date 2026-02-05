import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ComparisonSection } from "@/components/landing/comparison-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { CodeExampleSection } from "@/components/landing/code-example-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ComparisonSection />
        <HowItWorksSection />
        <CodeExampleSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  )
}
