/** @type {import("next").NextConfig} */

const domains = [
  "voxies-data-final.s3.us-east-2.amazonaws.com",
  "voxies-data-final-2.s3.us-east-2.amazonaws.com",
  "voxies-data-final-pets.s3.us-east-2.amazonaws.com",
  "voxie-tactics-items.s3.us-east-2.amazonaws.com",
  "voxies-images-webp.s3.us-east-2.amazonaws.com",
  "voxie-videos-webm.s3.us-east-2.amazonaws.com",
  "alwaysgeeky-games.directus.app",
]

const nextConfig = {
  productionBrowserSourceMaps: true,
  transpilePackages: ["three", "ramda"],
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.externals.push("pino-pretty", "lokijs", "encoding")

    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
  images: {
    remotePatterns: domains.map(item => ({
      protocol: "https",
      hostname: item,
      pathname: "**",
    })),
    minimumCacheTTL: 604800, // 1 week
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/sale/:bundleId",
        destination: "/shop/:bundleId",
        permanent: true,
      },
      {
        source: "/loan/:bundleId",
        destination: "/rent/:bundleId",
        permanent: true,
      },
    ]
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
