/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",   // primary
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          DEFAULT: "#6366f1",
        },
        accent: {
          500: "#06b6d4",   // cyan
          600: "#0891b2",
        }
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(2,6,23,0.15)",
        ring: "0 0 0 4px rgba(99,102,241,0.2)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
};
