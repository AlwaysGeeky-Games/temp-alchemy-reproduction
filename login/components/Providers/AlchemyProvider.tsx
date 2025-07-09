"use client"

import { ReactNode } from "react"
import { AlchemyAccountProvider } from "@account-kit/react"
import { config } from "components/Providers/alchemyConfig"
import { queryClient } from "components/Providers/Providers"

interface AlchemyProviderProps {
  children: ReactNode
  initialState: any
}

export const AlchemyProvider = ({
  children,
  initialState,
}: AlchemyProviderProps) => {
  return (
    <AlchemyAccountProvider
      config={config}
      queryClient={queryClient}
      initialState={initialState}
    >
      {children}
    </AlchemyAccountProvider>
  )
}
