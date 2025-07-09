import { useSmartAccountClient } from "@account-kit/react"
import { accountType } from "components/providers/alchemyConfig"
import { createContext, ReactNode, useContext } from "react"

interface AlchemyClientContextValues {
  isLoadingClient: boolean
  client: any
}

const AlchemyClientContext = createContext({} as AlchemyClientContextValues)

export const useAlchemyClient = () => {
  const context = useContext<any>(AlchemyClientContext)

  if (context === undefined) {
    throw new Error(
      "useAlchemyClient must be used within AlchemyClientProvider"
    )
  }

  return context
}

interface AlchemyClientProviderProps {
  children: ReactNode
}

export const AlchemyClientProvider = ({
  children,
}: AlchemyClientProviderProps) => {
  console.log("---- AlchemyClientProvider")
  const { isLoadingClient, client } = useSmartAccountClient({
    type: accountType,
    opts: {
      txMaxRetries: 10,
    },
  })

  console.log("---- AlchemyClientProvider", { isLoadingClient, client })

  return (
    <AlchemyClientContext.Provider
      value={{
        isLoadingClient,
        client,
      }}
    >
      {children}
    </AlchemyClientContext.Provider>
  )
}
