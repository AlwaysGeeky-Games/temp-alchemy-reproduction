import { z } from "zod"
import {
  AlchemyAccountsUIConfig,
  cookieStorage,
  createConfig,
} from "@account-kit/react"
import { alchemy, polygon, sepolia } from "@account-kit/infra"
import { SmartAccountClientOptsSchema } from "@aa-sdk/core"

export const chain =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ||
  process.env.NEXT_PUBLIC_ENV === "development"
    ? sepolia
    : polygon

const uiConfig: AlchemyAccountsUIConfig = {
  illustrationStyle: "outline",
  auth: {
    sections: [
      [
        {
          type: "external_wallets",
          walletConnect: { projectId: "1ccb34ad36d5e2a17e4ab707d78432db" },
        },
      ],
    ],
    addPasskeyOnSignup: false,
  },
}

export const config = createConfig(
  {
    transport: alchemy({ rpcUrl: "/api/rpc/chain/" + chain.id }),
    signerConnection: {
      rpcUrl: "/api/rpc",
    },
    chain,
    ssr: true,
    storage: cookieStorage,
    sessionConfig: {
      expirationTimeMs: 2 * 60 * 60 * 1000,
      // domain: !process.env.NEXT_PUBLIC_VERCEL_ENV
      //   ? "localhost" // local development
      //   : ".voxies.io",
    },
    policyId: process.env.NEXT_PUBLIC_ALCHEMY_GAS_MANAGER_POLICY_ID,
  },
  uiConfig
)

export const accountType = "MultiOwnerModularAccount"

type SmartAccountClienOptions = z.infer<typeof SmartAccountClientOptsSchema>
export const accountClientOptions: Partial<SmartAccountClienOptions> = {
  txMaxRetries: 20,
}
