import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pokant - Industrial Voice AI Robustness Evaluation",
  description:
    "Test your voice AI in real-world conditions. Pokant evaluates voice models against 80-105dB industrial environments where synthetic tests miss production failures.",
  keywords: [
    "voice AI",
    "speech recognition",
    "industrial",
    "noise testing",
    "robustness evaluation",
    "voice bot testing",
    "API",
  ],
  authors: [{ name: "Pokant" }],
  openGraph: {
    title: "Pokant - Industrial Voice AI Robustness Evaluation",
    description:
      "Test your voice AI in real-world conditions. Evaluate voice models against 80-105dB industrial environments.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FCFCF9" },
    { media: "(prefers-color-scheme: dark)", color: "#1F2121" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
