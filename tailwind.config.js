module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      black: "#1B2437",
      white: '#FFFFFF',
      pink: "#EDA3B5",
      
      "grey-100": "#f6f6f6",
      "grey-200": "#EFEFF4",
      "grey-300": "#E5E5EA",
      "grey-400": "#D1D1D6",
      "grey-500": "#C7C7CC",
      "grey-600": "#8E8E93",
      "grey-700": "#48484A",
    },

    backgroundColor: {
      "grey-100": "#f6f6f6",
      "grey-200": "#EFEFF4",
      "grey-300": "#E5E5EA",
      "grey-400": "#D1D1D6",
      "grey-500": "#C7C7CC",
      "grey-600": "#8E8E93",
      "grey-700": "#48484A",
      "white": "#ffffff",
      "pink": "#EDA3B5",

      "transparent-white": "rgba(255, 255, 255, .2)",
    },

    borderRadius: {
      sm: "2px",
      md: "8px",
      lg: "16px",
    },

    fontSize: {
      sm: "14px",
      base: "16px",

      "4xl": "48px",
      "3xl": "34px",
      "2xl": "24px",
      "xl": "20px",
    },

    borderColor: {
      pink: "#EDA3B5",
      "grey-100": "#f6f6f6",
      "grey-200": "#EFEFF4",
      "grey-300": "#E5E5EA",
      "grey-400": "#D1D1D6",
      "grey-500": "#C7C7CC",
      "grey-600": "#8E8E93",
      "grey-700": "#48484A",
    },

    extend: {
      maxWidth: {
        content: "1140px"
      },

      height: {
        navbar: "64px",
        "20px": "20px",
        icon: "24px",
        "102": "27.5rem"
      },

      minHeight: {
        section: "540px"
      },

      margin: {
        "12px": "12px",
        "16px": "16px",
        "20px": "20px",
        "24px": "24px",
        "30px": "30px",
        "32px": "32px",
      },

      padding: {
        "8px": "8px",
        "11px": "11px",
        "16px": "16px",
        "22px": "22px",
        "26px": "26px",
        "32px": "32px",
        "36px": "36px",
        "48px": "48px",
      },

      backgroundColor: {
        brown: "#beb0ad"
      },

      fontFamily: {
        playfair: ["Playfair", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
