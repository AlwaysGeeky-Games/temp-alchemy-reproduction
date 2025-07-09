import type { Config } from "tailwindcss"
import { withAccountKitUi } from "@account-kit/react/tailwind"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.stories.{js,ts,jsx,tsx}",
    "./features/**/*.stories.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    "./node_modules/@alwaysgeeky-games/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  safelist: [
    "-mt-12",
    "bg-base-content",
    "bg-green-light",
    "bg-info",
    "bg-opacity-40",
    "border-b-8",
    "border-t-4",
    "border-t-primary",
    "fill-[#00ffff]",
    "fill-[#009e21]",
    "fill-[#568eff]",
    "fill-[#808080]",
    "fill-[#848484]",
    "fill-[#fb3591]",
    "fill-[#ff6900]",
    "fill-[#FFBE20]",
    "list-disc",
    "md:-mt-12",
    "md:mt-0",
    "md:order-1",
    "md:px-5",
    "modal-box",
    "opacity-45",
    "primary-focus",
    "sm:overflow-hidden",
    "sm:overflow-y-auto",
    "bg-base-content",
    "stroke-neutral-content",
    "bg-accent",
  ],
  theme: {
    extend: {
      borderWidth: {},
      fontSize: {
        "body-2xl": "18px",
        body: "16px",
      },
    },
    colors: {
      primary: "#1274FF",
      secondary: "#F5C600",
      error: "#FF0000",
      "error-red": "#EE3E36",
      black: "#2F2F2F",
      trueBlack: "#000000",
      white: "#FFFFFF",
      green: "#009E21",
      "green-light": "#94d26c",
      "gray-x-light": "#FAFAFA",
      "gray-light": "#F2F2F2",
      gray: "#E3E3E3",
      "gray-paler": "#CCCCCC",
      "gray-pale": "#B2B2B2",
      "gray-dark": "#848484",
      "gray-darker": "#4F4F4F",
      date: "#374251",
      "icon-red": "#E85757",
      "icon-yellow": "#F5C344",
      "icon-light-blue": "#0074FF",
      "icon-dark-blue": "#0028ba",
      "icon-green": "#72BA42",
      "icon-orange": "#FA6107",
      "icon-light-orange": "#ECA414",
      "icon-purple": "#9600C9",
      yellow: "#F5C600",
      "yellow-icon": "#fdd90f",
      silver: "#C0C0C0",
      bronze: "#CD7F32",
      accent: "#F4F3FF",
    },
    fontFamily: {
      sans: ["var(--font-poppins)", "sans-serif"],
    },
    fontSize: {
      xxs: ["0.625rem", "0.875rem"], // ["10px", "14px"]
      xs: ["0.75rem", "1rem"], // ["12px", "16px"]
      sm: ["0.875rem", "1.25rem"], // ["14px", "20px"]
      base: ["1rem", "1.5rem"], // ["16px", "24px"]
      lg: ["1.25rem", "1.75rem"], // ["20px", "28px"]
      xl: ["1.5rem", "2rem"], // ["24px", "32px"]
      h1: ["2rem", "2.5rem"], // ["32px", "40px"]
      xxl: ["2.125rem", "2.625rem"], // ["34px", "42px"]
      "4xl": ["2.75rem", "3.75rem"], // ["44px", "60px"]
      "6xl": ["4rem", "4.375rem"], // ["64px", "70px"]
    },
    screens: {
      xs: "520px",
      // => @media (min-width: 520) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      xsmax: { max: "519px" },
      // => @media (min-width: 520px) { ... }

      smmax: { max: "639px" },
      // => @media (min-width: 640px) { ... }

      mdmax: { max: "767px" },
      // => @media (min-width: 768px) { ... }

      lgmax: { max: "1023px" },
      // => @media (min-width: 1024px) { ... }

      xlmax: { max: "1279px" },
      // => @media (min-width: 1280px) { ... }

      "2xlmax": { max: "1535px" },
      // => @media (min-width: 1536px) { ... }
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "2.5xl": "1.25rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    dark: "dark",
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
          accent: "#F4F3FF",
        },
      },
      {
        dark: {
          primary: "#59F3FD",
          "primary-focus": "#45CCD4",
          "primary-content": "#2F2F2F",
          secondary: "#F5C600",
          "base-100": "#1A1A1A",
          "base-200": "#2C2C2C",
          "base-300": "#3D3D3D",
          "base-content": "#ffffff",
          "neutral-content": "#a6adba",
          accent: "#000000",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-default": {
          /* IE and Edge */
          "-ms-overflow-style": "auto",
          /* Firefox */
          "scrollbar-width": "auto",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "block",
          },
        },
      })
    },
  ],
}

export default withAccountKitUi(config)
