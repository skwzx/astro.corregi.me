module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#005045",
        secondaryGreen: "#006B5E",
        complementaryGreen: "#D04074",
      },
      fontFamily: {
        sans: [
          "Noto Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
