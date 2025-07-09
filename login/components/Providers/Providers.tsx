"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { AlchemyProvider } from "components/Providers/AlchemyProvider"

export const queryClient = new QueryClient()

interface ProvidersProps {
  children: ReactNode
  initialState: any
}

export const Providers = ({ children, initialState }: ProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <AlchemyProvider initialState={initialState}>{children}</AlchemyProvider>
  </QueryClientProvider>
)
