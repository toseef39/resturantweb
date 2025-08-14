// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
           primary:"#CB3A1A",
           Secondary: "#111111",
           Paragraph: "#74787C",
           White: "#ffffff",
      },
        fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
};