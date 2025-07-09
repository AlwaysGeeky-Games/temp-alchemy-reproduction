/** @type {import("next").NextConfig} */

const nextConfig = {
  productionBrowserSourceMaps: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    const headers = []
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
        source: "/:path*",
      })
    }
    return headers
  },
}

export default nextConfig
