/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-color': '#3A9E1E',
      },
      fontFamily: {
        'andika': ["Andika", "sans-serif"],
      },

    },
  },
  daisyui: {
    themes: ["cupcack"],
  },
  plugins: [require("daisyui")],
}

