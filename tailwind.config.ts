import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgba(var(--body))",
        primary: "rgba(var(--primary))",
        text: "rgba(var(--text))",
        background: "rgba(var(--background))",
        accent: "rgba(var(--accent))",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        lusitana: ["var(--font-lusitana)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
