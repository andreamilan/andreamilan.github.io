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
        coral: "var(--coral)",
        gold: "var(--gold)",
        mint: "var(--mint)",
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
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(255, 163, 122, 0.32), transparent 42%), radial-gradient(circle at 82% 15%, rgba(124, 92, 255, 0.18), transparent 34%), linear-gradient(135deg, rgba(255,255,255,0.96), rgba(248,242,234,0.82))"
      }
    }
  },
  plugins: []
};

export default config;
