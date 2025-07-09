import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  if (process.env.REACT_APP_NODE_ENV === "production") {
    const baseUrl = process.env.NEXT_PUBLIC_MARKETPLACE_URL
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/profile", "/api/", "/*.json$"],
        },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  }

  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  }
}
