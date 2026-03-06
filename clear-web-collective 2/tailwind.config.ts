import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        "dark-gray": "#2d2d2d",
        "medium-gray": "#6b6b6b",
        "soft-gray": "#9a9a9a",
        "light-gray": "#e8e6e3",
        "off-white": "#f7f6f4",
        accent: "#c8a87c",
        "accent-hover": "#b8956a",
      },
      fontFamily: {
        display: ["DM Serif Display", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
