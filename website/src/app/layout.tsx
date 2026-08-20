import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ryan Tran | CS + AI Developer",
  description: "Ryan Tran - CS + AI and Full-Stack Development",
  openGraph: {
    title: "Ryan Tran | CS + AI Developer",
    description: "Ryan Tran - CS + AI and Full-Stack Development",
    url: "https://ryantran.net",
    siteName: "Ryan Tran Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ryan Tran Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Tran | CS + AI Developer",
    description: "Ryan Tran - CS + AI and Full-Stack Development",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://ryantran.net"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
