import type { Config } from "tailwindcss";

// Brand colors come from the SMILE Social Media Branding Guide (logo HEX codes
// plus the cream background). "soft" shades are the pastel variants the guide
// recommends; "ink" shades are darker variants for small text that needs to
// clear WCAG AA on light backgrounds.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#1B3676", soft: "#E3E9F7" },
        green: { DEFAULT: "#436F39", soft: "#E4EDDA" },
        red: { DEFAULT: "#E11B1B", ink: "#C21616", soft: "#FDE3E0" },
        yellow: { DEFAULT: "#FDCE03", soft: "#FFF3B0" },
        cream: "#F9FBE7",
        muted: "#4A5578",
      },
      fontFamily: {
        sans: ["var(--font-body)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      boxShadow: {
        sticker: "5px 5px 0 0 #1B3676",
        "sticker-sm": "3px 3px 0 0 #1B3676",
      },
    },
  },
  plugins: [],
};

export default config;
