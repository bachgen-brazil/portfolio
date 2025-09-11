import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#003366",
        brandAlt: "#00D1FF",
      },
    },
  },
  plugins: [],
};

export default config;
