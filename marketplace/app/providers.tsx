"use client"

import { AlchemyProvider } from "components/providers/AlchemyProvider"
import { QueryProvider } from "components/RootLayout/QueryProvider"
import { ThemeProvider } from "next-themes"

export function Providers({ initialState }) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AlchemyProvider initialState={initialState}>
          <div>Hello</div>
        </AlchemyProvider>
      </QueryProvider>
    </ThemeProvider>
  )
}
