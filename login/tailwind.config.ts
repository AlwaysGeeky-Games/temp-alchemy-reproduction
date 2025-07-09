import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"
import { withAccountKitUi } from "@account-kit/react/tailwind"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@alwaysgeeky-games/shared-ui-components/LoadingSpinner/LoadingSpinner.js",
    "./node_modules/@alwaysgeeky-games/shared-ui-components/Tooltip/Tooltip.js",
    "./node_modules/@alwaysgeeky-games/shared-ui-components/Modal/Modal.js",
    "./node_modules/@alwaysgeeky-games/shared-ui-components/Button/Button.js",
  ],
  safelist: [
    "ml-auto",
    "stroke-neutral-content",
    "!bg-transparent",
    "!fill-neutral-content",
    "rounded-xl",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "2000px",
      "4k": "3600px",
    },
    colors: {
      ...colors,
      yellow: "#fccc04",
      yellowDark: "#ffae2b",
      yellowDarkContent: "#3b392a",
      yellowNews: "#F5C344",
      "primary-focus": "#005ADA",
    },
  },
  daisyui: {
    base: true,
    styled: true,
    themes: [
      {
        light: {
          primary: "#1274FF",
          "primary-focus": "#005ADA",
          "primary-content": "#ffffff",
          secondary: "#F5C600",
          "base-100": "#ffffff",
          "base-200": "#e6e6e6",
          "base-300": "#cccccc",
          "base-content": "#2F2F2F",
          "neutral-content": "#848484",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

export default withAccountKitUi(config)
