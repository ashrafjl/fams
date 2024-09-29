/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#172a39',
        'secondary':'#f79125',
        'light-border':'#EAECF2',
        'text-color':'#7A7A7A',
      },
      boxShadow:{
        'card':'0px 0px 15px rgba(0, 0, 0, 0.05)',
        'icon':'0px 13px 26px rgba(20, 18, 33, 0.07)',
      }
    },
  },
  plugins: [],
};
