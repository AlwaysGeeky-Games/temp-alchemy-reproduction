"use client" // Error components must be Client Components

import homepageImage from "public/images/homePage.webp"
import Image from "next/image"
// import { useEffect } from "react"
import { ErrorComponent } from "components/ErrorComponent/ErrorComponent"
// import { SentryLogger } from "utils/logs/SentryLogger"

export default function Error({
  // error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // useEffect(() => {
  //   if (error) {
  //     SentryLogger.logHomepageError(error)
  //   }
  // }, [error])

  return (
    <div className="relative">
      <div className="relative 2xlmax:container 2xlmax:mx-auto 2xl:mx-10 py-28 z-10 h-screen flex flex-col items-center smmax:items-start smmax:justify-center">
        <div className="bg-base-100 rounded-2xl p-4">
          <ErrorComponent
            onReset={() => {
              localStorage.clear()
              location.reload()
              reset()
            }}
          />
        </div>
      </div>
    </div>
  )
}
