import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        "orange-text": "#ee6657", // Add a custom color named orange-text
        "gray-text": "#2c3e50",
        vanilla: "#F3E5AB",
        "halo-green": "#16a085",
        "halo-blue": "rgb(224, 247, 250)",
        "halo-light-green": "rgb(178, 223, 219)",
        "halo-light-orange": "rgb(255, 204, 188)",
      },
    },
  },
  plugins: [],
};
export default config;
