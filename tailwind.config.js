/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '320px',
      '2xmobile': '520px',
      'md': '640px',
      '2md': '820px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}