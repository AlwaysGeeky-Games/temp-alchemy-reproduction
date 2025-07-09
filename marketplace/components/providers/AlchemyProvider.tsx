import { ReactNode } from "react"
import { AlchemyAccountProvider } from "@account-kit/react"
import { config } from "components/providers/alchemyConfig"
import { queryClient } from "components/RootLayout/QueryProvider"
import { AlchemyClientProvider } from "components/providers/AlchemyClientProvider"

interface AlchemyProviderProps {
  children: ReactNode
  initialState: any
}

export const AlchemyProvider = ({
  children,
  initialState,
}: AlchemyProviderProps) => {
  console.log("---- AlchemyProvider")
  return (
    <AlchemyAccountProvider
      config={config}
      queryClient={queryClient}
      initialState={initialState}
    >
      <AlchemyClientProvider>{children}</AlchemyClientProvider>
    </AlchemyAccountProvider>
  )
}
