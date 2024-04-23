/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xxsm": { max: "350px" },
      "xsm": { min: "0px", max: "500px" },
      "min-xsm": { min: "501px" },
      "sm": { min: "501px", max: "768px" },
      "max-sm": { max: "768px" },
      "min-sm": { min: "768px" },
      "md": { min: "769px", max: "940px" },
      "min-md": { min: "940px" },
      "max-md": { max: "940px" },
      "lg": { min: "941px", max: "1279px" },
      "min-lg" : {min : "941px"},
      "max-xl": { max: "1279px" },
      "xl": { min: "1280px" },
      "2xl": { min: "1536px" }
    },
    fontFamily: {
      DINProLight: ["DINPro-Light", "sans-serif"],
      DINProMedium: ["DINPro-Medium", "sans-serif"],
      DINMedium: ["DINMedium", "sans-serif"],
      DINProBold: ["DINPro-Bold", "sans-serif"],
      DINProBlack: ["DINPro-Black", "sans-serif"],
      NexaLight: ["NexaLight", "sans-serif"],
      InkNut: ["Inknut", "sans-serif"],
      Nunito: ["Nunito", "sans-serif"],
      DMSans: ["DM-Sans", "sans-serif"],
      Gotham: ["Gotham", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "creme": "var(--creme-color)",
        "littleGrey": "var(--littleGrey-color)",
        "underline-color": "var(--underline-color)",
        "primary-color-light": "var(--primary-color-light)"
      },
    },
  },
  plugins: [],
}