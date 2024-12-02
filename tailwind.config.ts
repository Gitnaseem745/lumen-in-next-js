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
        background: "var(--background)", // Dynamically set background color
        foreground: "var(--foreground)", // Dynamically set foreground color
      },
      animation: {
        shimmer: "shimmer 2s linear infinite", // Custom shimmer animation
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" }, // Start position for the shimmer
          to: { backgroundPosition: "-200% 0" }, // End position for the shimmer
        },
      },
    },
    fontFamily: {
      averta: ["averta cv w10", "sans-serif"], // Added sans-serif as fallback
    },
  },
  plugins: [],
} satisfies Config;
