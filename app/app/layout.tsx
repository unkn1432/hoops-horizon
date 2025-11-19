import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hoops Horizon",
  description: "Global NIL + Eligibility Oracle for College Basketball",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-b from-blue-900 to-black text-white">
        {children}
      </body>
    </html>
  )
}
