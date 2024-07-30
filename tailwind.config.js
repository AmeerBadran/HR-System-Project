/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '320px',
        '2xmobile': '520px',
        'md': '640px',
        'lg': '1024px',
        'xl': '1280px',
      },
      textShadow: {
        default: "0 2px 4px rgba(0, 0, 0, 0.10)",
        md: "0 2px 4px rgba(0, 0, 0, 0.15)",
        lg: "0 2px 4px rgba(0, 0, 0, 0.25)",
        xl: "0 2px 4px rgba(0, 0, 0, 0.35)",
        "2xl": "0 2px 4px rgba(0, 0, 0, 0.50)",
        none: "none",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.10)",
        },
        ".text-shadow-md": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
        },
        ".text-shadow-lg": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow-xl": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.35)",
        },
        ".text-shadow-2xl": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.50)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
