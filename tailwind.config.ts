import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        muted: "#64748b",
        line: "#d9e0ea",
        panel: "#ffffff",
        canvas: "#f5f7fa"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.04)"
      }
    }
  },
  plugins: []
};

export default config;
