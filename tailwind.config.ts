import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        plum: "var(--plum)",
        line: "var(--line)",
        surface: {
          DEFAULT: "var(--surface)",
          elevated: "var(--surface-elevated)",
          soft: "var(--surface-soft)"
        }
      },
      borderRadius: {
        xl2: "1.75rem",
        xl3: "2.25rem"
      },
      boxShadow: {
        halo: "0 18px 80px rgba(19, 12, 35, 0.24)",
        card: "0 16px 48px rgba(8, 10, 27, 0.12)"
      },
      fontFamily: {
        sans: ["Manrope Variable", "Avenir Next", "Segoe UI", "sans-serif"],
        display: ["Fraunces", "Iowan Old Style", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
