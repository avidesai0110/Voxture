import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pokant - Industrial Voice AI Robustness Testing",
  description: "Test Voice AI in Real-World Conditions. Synthetic tests miss production failures in 80-105dB industrial environments. Pokant's hybrid testing reveals the truth.",
  keywords: ["voice AI", "robustness testing", "industrial AI", "speech recognition", "noise testing"],
  openGraph: {
    title: "Pokant - Industrial Voice AI Robustness Testing",
    description: "Test Voice AI in Real-World Conditions",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FCFCF9" },
    { media: "(prefers-color-scheme: dark)", color: "#1F2121" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
