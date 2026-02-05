"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { Moon, Sun, FileText, Activity, Shield, Zap, CheckCircle, ArrowRight, Send } from "lucide-react"

export default function PokantLanding() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const savedTheme = prefersDark ? "dark" : "light"
    setTheme(savedTheme)
    document.body.setAttribute("data-theme", savedTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.body.setAttribute("data-theme", newTheme)
  }, [theme])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav-fixed">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2 14h4l2-6 3 12 3-8 2 4h4l2-4 2 4h2" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xl font-semibold tracking-tight">Pokant</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-sm hover:opacity-100 opacity-70 transition-opacity">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm hover:opacity-100 opacity-70 transition-opacity">
              Pricing
            </Link>
            <Link href="#docs" className="text-sm hover:opacity-100 opacity-70 transition-opacity">
              Docs
            </Link>
            <Link href="#login" className="text-sm hover:opacity-100 opacity-70 transition-opacity">
              Login
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle p-2 rounded-lg hover:bg-[var(--surface)] transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link href="#get-api-key" className="btn-primary hidden sm:inline-flex items-center gap-2">
              Get API Key
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 min-h-[90vh] flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-4xl md:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-6 text-balance">
                  Test Voice AI in Real-World Conditions
                </h1>
                <p className="text-lg leading-relaxed mb-8 opacity-60 max-w-lg">
                  Synthetic tests miss production failures in 80-105dB industrial environments. 
                  Pokant&apos;s hybrid testing reveals the truth before your users do.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link href="#get-api-key" className="btn-primary inline-flex items-center gap-2">
                    Get API Key
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="#docs" className="btn-secondary inline-flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    View Docs
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-60">
                  <span className="w-2 h-2 bg-[var(--success)] rounded-full pulse-dot" />
                  <span>Live Robustness Test Running</span>
                </div>
              </div>
              <DashboardMockup />
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-20 px-6 border-t border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
              The Problem with Synthetic Testing
            </h2>
            <p className="text-center opacity-60 mb-16 max-w-2xl mx-auto">
              Lab conditions don&apos;t reflect reality. See the difference.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <ComparisonCard
                title="Synthetic Testing"
                subtitle="What you think you have"
                waveformType="clean"
                score={95}
                scoreLabel="False Confidence"
                variant="warning"
              />
              <ComparisonCard
                title="Pokant Hybrid Testing"
                subtitle="What you actually have"
                waveformType="noisy"
                score={78}
                scoreLabel="Real Accuracy"
                variant="success"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-6 border-t border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
            <p className="text-center opacity-60 mb-16 max-w-2xl mx-auto">
              Four simple steps to production-grade voice AI confidence
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StepCard
                step={1}
                icon={<Send className="w-5 h-5" />}
                title="Send Audio + Scenario"
                description="Upload your audio samples with environment metadata"
                delay={0}
              />
              <StepCard
                step={2}
                icon={<Activity className="w-5 h-5" />}
                title="We Simulate Real Conditions"
                description="Industrial noise, accents, and edge cases applied"
                delay={100}
              />
              <StepCard
                step={3}
                icon={<Shield className="w-5 h-5" />}
                title="Get Robustness Score"
                description="Detailed breakdown of failure modes and causes"
                delay={200}
              />
              <StepCard
                step={4}
                icon={<Zap className="w-5 h-5" />}
                title="Ship with Confidence"
                description="Deploy knowing exactly where your limits are"
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-20 px-6 border-t border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple API Integration</h2>
            <p className="text-center opacity-60 mb-12 max-w-2xl mx-auto">
              One endpoint. Complete robustness analysis.
            </p>
            <CodeBlock />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 border-t border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Trusted by Voice AI Teams</h2>
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
        <section id="pricing" className="py-20 px-6 border-t border-[var(--border-subtle)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
            <p className="text-center opacity-60 mb-16 max-w-2xl mx-auto">
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
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border-subtle)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2 14h4l2-6 3 12 3-8 2 4h4l2-4 2 4h2" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-semibold">Pokant</span>
            </Link>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#docs" className="opacity-60 hover:opacity-100 transition-opacity">Docs</Link>
              <Link href="#api" className="opacity-60 hover:opacity-100 transition-opacity">API Reference</Link>
              <Link href="#status" className="opacity-60 hover:opacity-100 transition-opacity">Status</Link>
              <Link href="#github" className="opacity-60 hover:opacity-100 transition-opacity">GitHub</Link>
              <Link href="#login" className="opacity-60 hover:opacity-100 transition-opacity">Login</Link>
            </nav>
            <div className="text-xs opacity-40">
              Built with Next.js + Tailwind
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* Dashboard Mockup Component */
function DashboardMockup() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [score, setScore] = useState(78)
  const [noiseLevel, setNoiseLevel] = useState<"low" | "high">("low")
  const [isVisible, setIsVisible] = useState(false)
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
      ctx.strokeStyle = "#32B8C6"
      ctx.lineWidth = 2
      ctx.beginPath()

      for (let x = 0; x < canvas.width; x++) {
        const baseNoise = noiseLevel === "high" 
          ? Math.sin((x + offset) * 0.05) * 20 + (Math.random() * 30 - 15)
          : Math.sin((x + offset) * 0.03) * 15 + (Math.random() * 5 - 2.5)
        const y = canvas.height / 2 + baseNoise
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

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [noiseLevel])

  // Intersection Observer for visibility
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

    const start = 78
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

  // Noise level toggle every 3 seconds
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setNoiseLevel((prev) => (prev === "low" ? "high" : "low"))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm opacity-60">Live Robustness Test</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[var(--success)] rounded-full pulse-dot" />
          <span className="text-xs text-[var(--success)]">Running</span>
        </span>
      </div>

      {/* Waveform */}
      <div className="card-inner p-4 mb-4">
        <canvas
          ref={canvasRef}
          width={400}
          height={80}
          className="w-full h-20"
          aria-label="Audio waveform visualization showing real-time analysis"
        />
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="metric-card">
          <span className="metric-label block mb-1">Noise Environment</span>
          <span
            className={`text-sm font-mono px-2 py-1 rounded inline-block transition-colors duration-300 ${
              noiseLevel === "high"
                ? "bg-[var(--error)]/20 text-[var(--error)]"
                : "bg-[var(--text-muted)]/20 text-[var(--text-secondary)]"
            }`}
          >
            {noiseLevel === "high" ? "95dB Construction" : "60dB Call Center"}
          </span>
        </div>
        <div className="metric-card">
          <span className="metric-label block mb-1">Robustness Score</span>
          <span className="metric-value text-[var(--primary)]">{score}%</span>
        </div>
      </div>
    </div>
  )
}

/* Comparison Card with SVG Waveform */
function ComparisonCard({
  title,
  subtitle,
  waveformType,
  score,
  scoreLabel,
  variant,
}: {
  title: string
  subtitle: string
  waveformType: "clean" | "noisy"
  score: number
  scoreLabel: string
  variant: "warning" | "success"
}) {
  // Generate SVG path points
  const generatePath = () => {
    const points: string[] = []
    const width = 300
    const height = 60
    const midY = height / 2

    for (let x = 0; x <= width; x += 3) {
      let y: number
      if (waveformType === "noisy") {
        // Jagged, irregular waveform
        y = midY + Math.sin(x * 0.05) * 15 + (Math.random() * 20 - 10)
      } else {
        // Smooth, clean waveform
        y = midY + Math.sin(x * 0.03) * 18
      }
      points.push(`${x === 0 ? "M" : "L"} ${x} ${Math.max(10, Math.min(50, y))}`)
    }
    return points.join(" ")
  }

  const strokeColor = variant === "warning" ? "#E68161" : "#32B8C6"

  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm opacity-60 mb-4">{subtitle}</p>

      <div className="card-inner p-4 mb-4">
        <svg
          width="300"
          height="60"
          viewBox="0 0 300 60"
          className="w-full h-[60px]"
          aria-label={`${waveformType} audio waveform`}
        >
          <path
            d={generatePath()}
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="waveform-path"
          />
        </svg>
      </div>

      <div className="flex items-center justify-between">
        <span className={`text-sm px-3 py-1 rounded-full ${variant === "warning" ? "badge-warning" : "badge-success"}`}>
          {scoreLabel}
        </span>
        <span className={`text-2xl font-bold ${variant === "warning" ? "text-[#E68161]" : "text-[var(--accent)]"}`}>
          {score}%
        </span>
      </div>
    </div>
  )
}

/* Step Card with numbered circle */
function StepCard({
  step,
  icon,
  title,
  description,
  delay,
}: {
  step: number
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (prefersReducedMotion) {
            setIsVisible(true)
          } else {
            setTimeout(() => setIsVisible(true), delay)
          }
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
      className={`fade-in-up ${isVisible ? "visible" : ""} card p-6`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-sm font-semibold">
          {step}
        </div>
        <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center text-[var(--primary)]">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-60 leading-relaxed">{description}</p>
    </div>
  )
}

/* Code Block with syntax highlighting */
function CodeBlock() {
  return (
    <div className="card overflow-hidden max-w-3xl mx-auto">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
        <span className="w-3 h-3 rounded-full bg-[var(--error)]/60" />
        <span className="w-3 h-3 rounded-full bg-[var(--warning)]/60" />
        <span className="w-3 h-3 rounded-full bg-[var(--success)]/60" />
        <span className="ml-4 text-xs opacity-40 font-mono">POST /eval/robustness</span>
      </div>
      <div className="code-block p-6 overflow-x-auto">
        <pre className="leading-relaxed">
          <code>
            <span className="code-comment">{"// Request"}</span>{"\n"}
            {"{"}{"\n"}
            {"  "}<span className="code-key">&quot;audio_url&quot;</span>: <span className="code-string">&quot;https://storage.example.com/sample.wav&quot;</span>,{"\n"}
            {"  "}<span className="code-key">&quot;scenario&quot;</span>: <span className="code-string">&quot;construction_site&quot;</span>,{"\n"}
            {"  "}<span className="code-key">&quot;noise_level_db&quot;</span>: <span className="code-number">95</span>{"\n"}
            {"}"}{"\n\n"}
            <span className="code-comment">{"// Response"}</span>{"\n"}
            {"{"}{"\n"}
            {"  "}<span className="code-key">&quot;robustness_score&quot;</span>: <span className="code-number">78.4</span>,{"\n"}
            {"  "}<span className="code-key">&quot;failures&quot;</span>: [{"\n"}
            {"    "}{"{"} <span className="code-key">&quot;type&quot;</span>: <span className="code-string">&quot;misrecognition&quot;</span>, <span className="code-key">&quot;severity&quot;</span>: <span className="code-string">&quot;critical&quot;</span> {"}"}{"\n"}
            {"  "}],{"\n"}
            {"  "}<span className="code-key">&quot;recommendations&quot;</span>: [<span className="code-string">&quot;Add noise cancellation preprocessing&quot;</span>]{"\n"}
            {"}"}
          </code>
        </pre>
      </div>
    </div>
  )
}

/* Testimonial Card */
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
    <div className="card p-6">
      <svg className="w-8 h-8 opacity-20 mb-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
      <p className="mb-4 leading-relaxed opacity-80">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm opacity-60">{role}</p>
      </div>
    </div>
  )
}

/* Pricing Card */
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
      className={`card p-6 ${
        featured ? "ring-2 ring-[var(--primary)] relative" : ""
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium bg-[var(--primary)] text-white px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2">{tier}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="opacity-60">{period}</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5 flex-shrink-0" />
            <span className="opacity-80">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-3 rounded-lg font-medium transition-all duration-150 ${
          featured
            ? "btn-primary"
            : "btn-secondary"
        }`}
      >
        {ctaText}
      </button>
    </div>
  )
}
