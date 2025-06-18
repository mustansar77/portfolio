/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonTextColor: "#FFFFFF",
        mainHeadingColor: "#132238",
        subHeadingColor: "#556070",
        buttonColors: "#A53DFF",
        textColor: "#333333",
        boxesBackgroundColor: "#EDD8FF80"
      }
    },
  },
  plugins: [],
}