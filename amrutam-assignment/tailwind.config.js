/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      DINProLight: ["DINPro-Light", "sans-serif"],
      DINProMedium: ["DINPro-Medium", "sans-serif"],
      DINProBold: ["DINPro-Bold", "sans-serif"],
      DINProBlack: ["DINPro-Black", "sans-serif"],
      NexaLight: ["NexaLight", "sans-serif"]
    },
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "creme": "var(--creme-color)",
        "littleGrey": "var(--littleGrey-color)",
        "underline-color": "var(--underline-color)"
      },
    },
  },
  plugins: [],
}