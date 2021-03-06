module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      xl: "1200px"
    },

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
      black: "#1B2437",

      "transparent-white": "rgba(255, 255, 255, .2)",
      transparent: "transparent"
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
      "transparent-white": "rgba(255, 255, 255, .4)",
      'transparent': 'transparent'
    },

    extend: {
      borderOpacity: {
        "20": '0.2'
      },

      borderWidth: {
        "3": "3px"
      },

      maxWidth: {
        content: "1165px",
        'intro-content': "1300px",
      },

      width: {
        "42": "10.5rem",
        "2xfull": "200%",
        "88": "22rem",
      },

      height: {
        navbar: "64px",
        "20px": "20px",
        icon: "24px",
        "102": "27.5rem",
        "58": "14.5rem",
        "70": "17.5rem",
        "48px": "48px",
        '180px': '180px',
        '433px': '433px'
      },

      minHeight: {
        section: "544px"
      },

      margin: {
        '30': "7.5rem"
      },

      backgroundColor: {
        brown: "#beb0ad"
      },

      fontFamily: {
        playfair: ["Playfair", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },

      screens: {
        'xs': "480px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
