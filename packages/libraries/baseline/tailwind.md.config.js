const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/**/*.{js,ts,jsx,tsx}",
    // "./tailwind/**/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)/,
      variants: ["hover", "focus", "md"],
    },
  ],

  plugins: [
    require("cssnano")({
      preset: "default",
    }),
  ],
};
