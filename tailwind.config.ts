// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6366F1", // indigo-500
          600: "#4F46E5",
        },
      },
      container: { center: true },
    },
  },
  plugins: [],
} satisfies Config;
