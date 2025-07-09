import { LocalAccountSigner } from "@aa-sdk/core"
import { createMultiOwnerModularAccountClient } from "@account-kit/smart-contracts"
import { alchemy, polygon, sepolia } from "@account-kit/infra"
import { createPublicClient } from "viem"
import { generatePrivateKey } from "viem/accounts"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  try {
    const chain =
      process.env.NEXT_PUBLIC_ENV === "development" ? sepolia : polygon
    const client = await createMultiOwnerModularAccountClient({
      chain,
      transport: alchemy({ apiKey: process.env.ALCHEMY_API_KEY as string }),
      // transport: http("https://rpc2.sepolia.org"),
      signer:
        LocalAccountSigner.privateKeyToAccountSigner(generatePrivateKey()),
    })

    // Verifying Signatures
    const publicClient = createPublicClient({
      chain,
      transport: alchemy({ apiKey: process.env.ALCHEMY_API_KEY as string }),
      // transport: http("https://rpc2.sepolia.org"),
    })

    const url = new URL(request.url)
    const searchParams = url.searchParams
    const message = searchParams.get("message") as string
    const signatureParam = searchParams.get("signature")
    const walletAddress = searchParams.get("walletAddress") // if SCA: account.address else if EOA user.address

    return Response.json({
      message,
      signatureParam,
      address: client.account.address,
      isValid: await publicClient.verifyMessage({
        address: walletAddress as any,
        message,
        signature: signatureParam as any,
      }),
    })
  } catch (error) {
    console.log(error)
    return new Response("Error", {
      status: 500,
    })
  }
}
