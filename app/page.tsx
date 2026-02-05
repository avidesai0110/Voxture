"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { Moon, Sun, Send, FileText, Activity, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react"

export default function PokantLanding() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(prefersDark)
    document.documentElement.classList.toggle("light", !prefersDark)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("light", isDark)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-[var(--pokant-charcoal)] text-[var(--pokant-cream)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--pokant-charcoal)]/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-[var(--pokant-teal)]" />
            <span className="text-xl font-semibold tracking-tight">Pokant</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-sm text-[var(--pokant-cream)]/70 hover:text-[var(--pokant-cream)] transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm text-[var(--pokant-cream)]/70 hover:text-[var(--pokant-cream)] transition-colors">
              Pricing
            </Link>
            <Link href="#docs" className="text-sm text-[var(--pokant-cream)]/70 hover:text-[var(--pokant-cream)] transition-colors">
              Docs
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link
              href="#login"
              className="text-sm text-[var(--pokant-cream)]/70 hover:text-[var(--pokant-cream)] transition-colors"
            >
              Login
            </Link>
            <Link
              href="#get-api-key"
              className="btn-hover px-4 py-2 bg-[var(--pokant-teal)] text-[var(--pokant-cream)] text-sm font-medium rounded-lg"
            >
              Get API Key
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                Test Voice AI in Real-World Conditions
              </h1>
              <p className="text-lg text-[var(--pokant-cream)]/60 mb-8 leading-relaxed">
                Synthetic tests miss production failures in 80-105dB industrial environments. 
                Pokant&apos;s hybrid testing reveals the truth before your users do.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#get-api-key"
                  className="btn-hover inline-flex items-center gap-2 px-6 py-3 bg-[var(--pokant-teal)] text-[var(--pokant-cream)] font-medium rounded-lg"
                >
                  Get API Key
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#docs"
                  className="btn-hover inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-[var(--pokant-cream)] font-medium rounded-lg hover:bg-white/5"
                >
                  <FileText className="w-4 h-4" />
                  View Docs
                </Link>
              </div>
            </div>
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">The Problem with Synthetic Testing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ComparisonCard
              title="Synthetic Testing"
              subtitle="What you think you have"
              waveformType="clean"
              score={95}
              scoreLabel="False Confidence"
              status="warning"
            />
            <ComparisonCard
              title="Pokant Hybrid Testing"
              subtitle="What you actually have"
              waveformType="noisy"
              score={78}
              scoreLabel="Real Accuracy"
              status="success"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-[var(--pokant-cream)]/60 mb-16 max-w-2xl mx-auto">
            Four simple steps to production-grade voice AI confidence
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Send className="w-6 h-6" />}
              title="Send Audio + Scenario"
              description="Upload your audio samples with environment metadata"
              delay={0}
            />
            <FeatureCard
              icon={<Activity className="w-6 h-6" />}
              title="We Simulate Real Conditions"
              description="Industrial noise, accents, and edge cases applied"
              delay={100}
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Get Robustness Score"
              description="Detailed breakdown of failure modes and causes"
              delay={200}
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Ship with Confidence"
              description="Deploy knowing exactly where your limits are"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple API Integration</h2>
          <p className="text-center text-[var(--pokant-cream)]/60 mb-12 max-w-2xl mx-auto">
            One endpoint. Complete robustness analysis.
          </p>
          <CodeBlock />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Pokant caught 23 critical failures our internal QA missed. Worth every penny."
              author="Sarah Chen"
              role="ML Lead, VoiceTech Inc"
            />
            <TestimonialCard
              quote="Finally, a testing platform that understands industrial environments. Game changer."
              author="Marcus Rodriguez"
              role="CTO, ConstructAI"
            />
            <TestimonialCard
              quote="Reduced our production incidents by 67% in the first quarter of use."
              author="Emma Williams"
              role="Head of QA, LogiVoice"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-[var(--pokant-cream)]/60 mb-16 max-w-2xl mx-auto">
            Start testing in minutes. Scale as you grow.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard
              tier="Developer"
              price="$999"
              period="/mo"
              features={[
                "10,000 evaluations/mo",
                "5 noise environments",
                "Email support",
                "API access",
                "Basic analytics",
              ]}
            />
            <PricingCard
              tier="Team"
              price="$1,999"
              period="/mo"
              featured
              features={[
                "50,000 evaluations/mo",
                "15 noise environments",
                "Priority support",
                "Team collaboration",
                "Advanced analytics",
                "Custom scenarios",
              ]}
            />
            <PricingCard
              tier="Enterprise"
              price="Custom"
              period=""
              features={[
                "Unlimited evaluations",
                "All environments",
                "Dedicated support",
                "SLA guarantee",
                "On-premise option",
                "Custom integrations",
              ]}
              ctaText="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-[var(--pokant-teal)]" />
              <span className="font-semibold">Pokant</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--pokant-cream)]/60">
              <Link href="#docs" className="hover:text-[var(--pokant-cream)] transition-colors">Docs</Link>
              <Link href="#api" className="hover:text-[var(--pokant-cream)] transition-colors">API Reference</Link>
              <Link href="#status" className="hover:text-[var(--pokant-cream)] transition-colors">Status</Link>
              <Link href="#github" className="hover:text-[var(--pokant-cream)] transition-colors">GitHub</Link>
              <Link href="#login" className="hover:text-[var(--pokant-cream)] transition-colors">Login</Link>
            </div>
            <div className="text-xs text-[var(--pokant-cream)]/40">
              Built with Next.js + Tailwind
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function DashboardMockup() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState(78)
  const [noiseLevel, setNoiseLevel] = useState<"low" | "high">("low")
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)

  // Waveform animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let offset = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = "#21808D"
      ctx.lineWidth = 2
      ctx.beginPath()

      for (let x = 0; x < canvas.width; x++) {
        const noise = noiseLevel === "high" 
          ? Math.sin((x + offset) * 0.05) * 20 + Math.random() * 30 - 15
          : Math.sin((x + offset) * 0.03) * 15 + Math.random() * 5 - 2.5
        const y = canvas.height / 2 + noise
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      if (!prefersReducedMotion) {
        offset += 2
        animationRef.current = requestAnimationFrame(draw)
      }
    }

    draw()
    setIsLoaded(true)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [noiseLevel])

  // Intersection Observer for score animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Score counter animation
  useEffect(() => {
    if (!isVisible) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setScore(95)
      return
    }

    let start = 78
    const end = 95
    const duration = 1000
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setScore(Math.round(start + (end - start) * easeOut))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible])

  // Noise level toggle
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setNoiseLevel((prev) => (prev === "low" ? "high" : "low"))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative bg-[var(--pokant-dark-card)] rounded-xl border border-white/10 p-6 transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[var(--pokant-dark-card)] rounded-xl animate-pulse" />
      )}

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-[var(--pokant-cream)]/60">Live Robustness Test</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-green-500">Running</span>
        </span>
      </div>

      {/* Waveform */}
      <div className="bg-[var(--pokant-charcoal)] rounded-lg p-4 mb-4">
        <canvas
          ref={canvasRef}
          width={400}
          height={80}
          className="w-full h-20"
          aria-label="Audio waveform visualization"
        />
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[var(--pokant-charcoal)] rounded-lg p-4">
          <span className="text-xs text-[var(--pokant-cream)]/60 block mb-1">Noise Environment</span>
          <span
            className={`noise-meter text-sm font-mono px-2 py-1 rounded ${
              noiseLevel === "high"
                ? "bg-red-500/20 text-red-400"
                : "bg-gray-500/20 text-gray-400"
            }`}
          >
            {noiseLevel === "high" ? "95dB Construction" : "60dB Call Center"}
          </span>
        </div>
        <div className="bg-[var(--pokant-charcoal)] rounded-lg p-4">
          <span className="text-xs text-[var(--pokant-cream)]/60 block mb-1">Robustness Score</span>
          <span className="text-2xl font-bold text-[var(--pokant-teal)]">{score}%</span>
        </div>
      </div>
    </div>
  )
}

function ComparisonCard({
  title,
  subtitle,
  waveformType,
  score,
  scoreLabel,
  status,
}: {
  title: string
  subtitle: string
  waveformType: "clean" | "noisy"
  score: number
  scoreLabel: string
  status: "warning" | "success"
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = status === "warning" ? "#f59e0b" : "#21808D"
    ctx.lineWidth = 2
    ctx.beginPath()

    for (let x = 0; x < canvas.width; x++) {
      const noise =
        waveformType === "noisy"
          ? Math.sin(x * 0.05) * 15 + (Math.random() * 20 - 10)
          : Math.sin(x * 0.03) * 20
      const y = canvas.height / 2 + noise
      if (x === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.stroke()
  }, [waveformType, status])

  return (
    <div className="bg-[var(--pokant-dark-card)] rounded-xl border border-white/10 p-6">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-[var(--pokant-cream)]/60 mb-4">{subtitle}</p>

      <div className="bg-[var(--pokant-charcoal)] rounded-lg p-4 mb-4">
        <canvas
          ref={canvasRef}
          width={300}
          height={60}
          className="w-full h-15"
          aria-label={`${waveformType} waveform`}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-[var(--pokant-cream)]/60">{scoreLabel}</span>
        <span
          className={`text-2xl font-bold ${
            status === "warning" ? "text-amber-500" : "text-[var(--pokant-teal)]"
          }`}
        >
          {score}%
        </span>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={cardRef}
      className={`fade-in-up ${isVisible ? "visible" : ""} bg-[var(--pokant-dark-card)] rounded-xl border border-white/10 p-6`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-[var(--pokant-teal)]/10 rounded-lg flex items-center justify-center text-[var(--pokant-teal)] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-[var(--pokant-cream)]/60 leading-relaxed">{description}</p>
    </div>
  )
}

function CodeBlock() {
  return (
    <div className="bg-[var(--pokant-dark-card)] rounded-xl border border-white/10 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-red-500/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <span className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="ml-4 text-xs text-[var(--pokant-cream)]/40 font-mono">POST /eval/robustness</span>
      </div>
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed">
          <code>
            <span className="code-comment">{"// Request"}</span>
            {"\n"}
            <span className="text-[var(--pokant-cream)]">{"{"}</span>
            {"\n"}
            {"  "}<span className="code-key">{'"audio_url"'}</span><span className="text-[var(--pokant-cream)]">:</span> <span className="code-string">{'"https://storage.example.com/sample.wav"'}</span><span className="text-[var(--pokant-cream)]">,</span>
            {"\n"}
            {"  "}<span className="code-key">{'"scenario"'}</span><span className="text-[var(--pokant-cream)]">:</span> <span className="code-string">{'"construction_site"'}</span><span className="text-[var(--pokant-cream)]">,</span>
            {"\n"}
            {"  "}<span className="code-key">{'"noise_level_db"'}</span><span className="text-[var(--pokant-cream)]">:</span> <span className="code-number">95</span>
            {"\n"}
            <span className="text-[var(--pokant-cream)]">{"}"}</span>
            {"\n\n"}
            <span className="code-comment">{"// Response"}</span>
            {"\n"}
            <span className="text-[var(--pokant-cream)]">{"{"}</span>
            {"\n"}
            {"  "}<span className="code-key">{'"robustness_score"'}</span><span className="text-[var(--pokant-cream)]">:</span> <span className="code-number">78.4</span><span className="text-[var(--pokant-cream)]">,</span>
            {"\n"}
            {"  "}<span className="code-key">{'"failures"'}</span><span className="text-[var(--pokant-cream)]">:</span> <span className="text-[var(--pokant-cream)]">[</span>
            {"\n"}
            {"    "}<span className="text-[var(--pokant-cream)]">{"{"}</span> <span className="code-key">{'"type"'}</span><span className="text-[var(--pokant-cream)]">:</span> <span className="code-string">{'"misrecognition"'}</span><span className="text-[var(--pokant-cream)]">,</span> <span className="code-key">{'"severity"'}</span><span className="text-[var(--pokant-cream)]">:</span> <span className="code-string">{'"critical"'}</span> <span className="text-[var(--pokant-cream)]">{"}"}</span>
            {"\n"}
            {"  "}<span className="text-[var(--pokant-cream)]">]</span><span className="text-[var(--pokant-cream)]">,</span>
            {"\n"}
            {"  "}<span className="code-key">{'"recommendations"'}</span><span className="text-[var(--pokant-cream)]">:</span> <span className="text-[var(--pokant-cream)]">[</span><span className="code-string">{'"Add noise cancellation preprocessing"'}</span><span className="text-[var(--pokant-cream)]">]</span>
            {"\n"}
            <span className="text-[var(--pokant-cream)]">{"}"}</span>
          </code>
        </pre>
      </div>
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string
  author: string
  role: string
}) {
  return (
    <div className="bg-[var(--pokant-dark-card)] rounded-xl border border-white/10 p-6">
      <div className="w-10 h-10 bg-white/5 rounded-lg mb-4" />
      <p className="text-[var(--pokant-cream)]/80 mb-4 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-[var(--pokant-cream)]/60">{role}</p>
      </div>
    </div>
  )
}

function PricingCard({
  tier,
  price,
  period,
  features,
  featured = false,
  ctaText = "Get Started",
}: {
  tier: string
  price: string
  period: string
  features: string[]
  featured?: boolean
  ctaText?: string
}) {
  return (
    <div
      className={`rounded-xl border p-6 ${
        featured
          ? "bg-[var(--pokant-teal)]/10 border-[var(--pokant-teal)]/30"
          : "bg-[var(--pokant-dark-card)] border-white/10"
      }`}
    >
      {featured && (
        <span className="inline-block text-xs font-medium text-[var(--pokant-teal)] bg-[var(--pokant-teal)]/20 px-2 py-1 rounded mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2">{tier}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-[var(--pokant-cream)]/60">{period}</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-[var(--pokant-teal)] mt-0.5 flex-shrink-0" />
            <span className="text-[var(--pokant-cream)]/80">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`btn-hover w-full py-3 rounded-lg font-medium ${
          featured
            ? "bg-[var(--pokant-teal)] text-[var(--pokant-cream)]"
            : "border border-white/10 text-[var(--pokant-cream)] hover:bg-white/5"
        }`}
      >
        {ctaText}
      </button>
    </div>
  )
}
