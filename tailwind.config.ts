import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "var(--font-roboto)",
        lora: "var(--font-lora)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bluemain: "#306fdb",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
