"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Mic } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pokant-teal">
              <Mic className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Pokant</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="#"
              className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-pokant-teal px-4 py-2 text-sm font-medium text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pokant-teal/20 transition-all duration-150"
            >
              Get API Key
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
