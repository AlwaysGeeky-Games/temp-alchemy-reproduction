import "styles/globals.css"
import "animate.css"

import { Providers } from "app/providers"
import { Poppins } from "next/font/google"
import { ReactNode } from "react"
import { cookieToInitialState } from "@account-kit/core"
import { config } from "components/providers/alchemyConfig"
import { headers } from "next/headers"
import { Viewport } from "next"
import Script from "next/script"

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const initialState = cookieToInitialState(
    config,
    headers().get("cookie") ?? undefined
  )

  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      {process.env.NEXT_PUBLIC_ENV === "development" && (
        <head>
          <Script
            src="https://cdn.jsdelivr.net/npm/eruda"
            strategy="beforeInteractive"
          />
          <Script
            src="https://cdn.jsdelivr.net/npm/eruda"
            strategy="beforeInteractive"
            id="eruda-script"
          >
            {"eruda.init();"}
          </Script>
        </head>
      )}
      <body>
        <Providers initialState={initialState} />
      </body>
    </html>
  )
}
