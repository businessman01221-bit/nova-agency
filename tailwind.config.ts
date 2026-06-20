import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-heebo)", "system-ui", "sans-serif"],
        hebrew: ["var(--font-heebo)", "system-ui", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C96D",
          dark: "#A07830",
        },
        dark: {
          DEFAULT: "#080808",
          100: "#111111",
          200: "#1a1a1a",
          300: "#252525",
          400: "#333333",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "glow": "glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-shimmer": "linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.4) 50%, transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
