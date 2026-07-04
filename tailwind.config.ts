import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#18213D",
        indigo: {
          50: "#F2F3FF",
          100: "#E4E7FF",
          200: "#CDD2FB",
          300: "#AAB1F4",
          400: "#828BEE",
          500: "#6269E8",
          600: "#494FB8",
          700: "#3D428F",
          900: "#232A6B"
        },
        canvas: "#FAFBFC"
      },
      fontFamily: {
        sans: [
          "var(--font-noto-sans-jp)",
          "Hiragino Sans",
          "Yu Gothic UI",
          "Yu Gothic",
          "Meiryo",
          "system-ui",
          "sans-serif"
        ],
        display: [
          "var(--font-manrope)",
          "var(--font-noto-sans-jp)",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        sm: "0 1px 2px rgba(24, 33, 61, 0.05)"
      }
    },
  },
  plugins: [],
} satisfies Config;
