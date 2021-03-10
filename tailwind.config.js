module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      black: "#1B2437",
      white: '#FFFFFF',
      pink: "#EDA3B5",

      grey100: "#EDA3B5",
      grey200: "#EFEFF4",
      grey300: "#E5E5EA",
      grey400: "#D1D1D6",
      grey500: "#C7C7CC",
      grey600: "#8E8E93",
      grey700: "#48484A",
    },

    borderRadius: {
      sm: "2px",
      md: "8px",
      lg: "16px",
    },

    fontSize: {
      base: "14px",

      "4xl": "48px",
      "3xl": "34px",
      "2xl": "24px",
      "xl": "20px",
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
