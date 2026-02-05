"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const requestCode = `POST /eval/robustness HTTP/1.1
Host: api.pokant.io
Content-Type: application/json
Authorization: Bearer pk_live_...

{
  "audio_url": "https://storage.example.com/sample.wav",
  "scenario": "construction_site",
  "noise_level_db": 95,
  "expected_transcript": "Stop the crane immediately"
}`

const responseCode = `{
  "id": "eval_abc123",
  "robustness_score": 0.78,
  "transcription": "Stop the crane immediately",
  "accuracy": 1.0,
  "latency_ms": 234,
  "noise_impact": {
    "snr_db": -12,
    "degradation_factor": 0.22
  },
  "recommendations": [
    "Consider noise-cancellation preprocessing",
    "Train on construction site audio samples"
  ]
}`

export function CodeExampleSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection reducedMotion={reducedMotion}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Simple API Integration
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get started with a single API call. No complex setup required.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100} reducedMotion={reducedMotion}>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Request */}
            <div className="rounded-xl border border-border bg-pokant-charcoal overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-pokant-cream/60 ml-2">
                  Request
                </span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="font-mono text-pokant-cream/90">
                  {requestCode.split("\n").map((line, i) => (
                    <div key={i} className="whitespace-pre">
                      {highlightLine(line)}
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            {/* Response */}
            <div className="rounded-xl border border-border bg-pokant-charcoal overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-pokant-cream/60 ml-2">
                  Response
                </span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="font-mono text-pokant-cream/90">
                  {responseCode.split("\n").map((line, i) => (
                    <div key={i} className="whitespace-pre">
                      {highlightLine(line)}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

function highlightLine(line: string): React.ReactNode {
  // Match JSON keys
  const keyMatch = line.match(/^(\s*)"([^"]+)"(:)/)
  if (keyMatch) {
    const [, indent, key, colon] = keyMatch
    const rest = line.slice(keyMatch[0].length)
    return (
      <>
        {indent}
        <span className="syntax-key">{`"${key}"`}</span>
        {colon}
        {highlightValue(rest)}
      </>
    )
  }

  // Match HTTP headers
  if (line.includes(": ") && !line.startsWith("{") && !line.startsWith(" ")) {
    const [header, ...valueParts] = line.split(": ")
    return (
      <>
        <span className="text-pokant-cream/60">{header}: </span>
        <span className="syntax-string">{valueParts.join(": ")}</span>
      </>
    )
  }

  // Match POST line
  if (line.startsWith("POST ")) {
    return <span className="text-pokant-teal">{line}</span>
  }

  return line
}

function highlightValue(value: string): React.ReactNode {
  const trimmed = value.trim()

  // String value
  if (trimmed.startsWith('"')) {
    return <span className="syntax-string">{value}</span>
  }

  // Number value
  if (/^\s*[\d.]+[,]?\s*$/.test(trimmed)) {
    return <span className="syntax-number">{value}</span>
  }

  // Array or object start
  if (trimmed === "[" || trimmed === "{") {
    return value
  }

  return value
}
