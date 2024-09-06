/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "320px",
      "2xmobile": "520px",
      md: "640px",
      "2md": "820px",
      lg: "1024px",
      xl: "1280px",
    },
    textShadow: {
      sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
      md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
      xl: "4px 4px 8px rgba(0, 0, 0, 0.5)",
      none: "none",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-xl": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
