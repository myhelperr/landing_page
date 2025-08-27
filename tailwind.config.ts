import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor1: "#6666FF",
        primaryColor2: "#000066",
        primaryColor3: "#0D0D0D",
        secondaryColor1: "#20DBFE",
        secondaryColor2: "#BE85FE",
        secondaryColor3: "#676D81",
      },
    },
  },
} satisfies Config;
