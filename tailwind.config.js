/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["DM Serif Text", "serif"]

      },
      colors: {
        white: {
          100: "#FAFAFA",
          200: "#F6F6F6",
          300: "#F1F1F1",
          400: "#E9E9E9",
          500: "#E4E4E4",
          600: "#BEBEBE",
          700: "#989898",
          800: "#727272",
          900: "#4C4C4C",
          1000: "#2E2E2E"
        },
        pink: {
          100: "#FFEBF4",
          200: "#FFDDED",
          300: "#FFBBDA",
          400: "#FF99C8",
          500: "#AA6685",
          600: "#553343",
          700: "#331F28"
        },
        yellow: {
          100: "#FEFDF2",
          200: "#FEFCE9",
          300: "#FDF9D3",
          400: "#FCF6BD",
          500: "#DCD165",
          600: "#9C9341",
          700: "#323126"
        },
        green: {
          100: "#F6FDF8",
          200: "#EFFBF4",
          300: "#E0F8E9",
          400: "#D0F4DE",
          500: "#8BA394",
          600: "#45514A",
          700: "#21312C"
        },
        blue: {
          100: "#EEF8FE",
          200: "#E2F4FD",
          300: "#D4EEFC",
          400: "#C6E9FB",
          500: "#A9DEF9",
          600: "#8DB9CF",
          700: "#7194A6",
          800: "#546F7C",
          900: "#384A53",
          1000: "#222C32"
        },
        purple: {
          100: "#FAF3FE",
          200: "#F6EAFD",
          300: "#EDD6FB",
          400: "#E4C1F9",
          500: "#9881A6",
          600: "#4C4053",
          700: "#1E1E1E"
        },
      }

    },
  },
  plugins: [],
};
