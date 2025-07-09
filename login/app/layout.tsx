import "styles/globals.css"
import { PageWrapper } from "components/PageWrapper/PageWrapper"
import { ToastManager } from "components/ToastManager/ToastManager"
import type { Metadata, Viewport } from "next"
import { ReactNode } from "react"
import { cookieToInitialState } from "@account-kit/core"
import { config } from "components/Providers/alchemyConfig"
import { headers } from "next/headers"
import { Providers } from "components/Providers/Providers"

import dynamic from "next/dynamic"

const ReactQueryDevtools = dynamic(
  () =>
    import("@tanstack/react-query-devtools").then(
      mod => mod.ReactQueryDevtools
    ),
  { ssr: false }
)

export const metadata: Metadata = {
  title: "Voxies User Authentication",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const initialState = cookieToInitialState(
    config,
    headers().get("cookie") ?? undefined
  )

  return (
    <html lang="en">
      <body>
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  )
}
