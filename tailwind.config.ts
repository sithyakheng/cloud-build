import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bp: {
          deep: "#0E2238",   // darkest background
          base: "#15314F",   // primary blueprint blue
          line: "#3E6E96",   // grid / rule lines
          mist: "#7FA6C4",   // soft secondary text on dark
          paper: "#F3F5F1",  // pinned card paper
          ink: "#102233",    // text on paper
        },
        signal: {
          DEFAULT: "#FF6B35", // marker-orange accent
          soft: "#FFD9C4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "blueprint-grid-major":
          "linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
        "grid-major": "160px 160px",
      },
      keyframes: {
        draw: {
          to: { strokeDashoffset: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        draw: "draw 1.4s ease-out forwards",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
