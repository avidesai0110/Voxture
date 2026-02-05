import Link from "next/link"
import { Mic } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Docs", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  resources: [
    { label: "Status", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Support", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pokant-teal">
                <Mic className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Pokant</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Industrial voice AI robustness evaluation. Test in real-world
              conditions before you ship.
            </p>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-xs text-muted-foreground">
              Built with Next.js + Tailwind
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Pokant. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
    </footer>
  )
}
