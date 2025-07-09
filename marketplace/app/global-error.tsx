"use client"

import "styles/globals.css"
import "animate.css"
import { Poppins } from "next/font/google"
import { ErrorComponent } from "components/ErrorComponent/ErrorComponent"

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body>
        <div className="container mx-auto">
          <ErrorComponent onReset={reset} />
        </div>
      </body>
    </html>
  )
}
