/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{svg,png}",
  ],
  theme: {
    screens: {
      'xsm': "0px",
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px"
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        white: "#FBFBFB",
        black: "#0B1728",
        dark_blue: "#1D3557",
        dark_blue_25: "#DADDE2",
        blue: "#50ABE4",
        light_blue: "#A8DADC",
        light_blue_50: "rgba(168, 218, 220, 0.5)",
        light_blue_25: "rgba(168, 218, 220, 0.25)",
        pale_blue: "#F1FAEE",
        red: "#E63946",
        orange: "#F3BE00",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
