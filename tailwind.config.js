module.exports = {
  content: ["./pages/**/*.{tsx,js}", "./components/**/*.{tsx,js}"],
  theme: {
    fontFamily: {
      sans: ["TT Commons", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        primary: {
          lighter: "#EDEAE3",
          light: "#D3CAB9",
          DEFAULT: "#A69472",
          dark: "#534A39",
          darker: "#211E17",
        },
        secondary: {
          light: "#ABB9C6",
          DEFAULT: "#56738C",
          dark: "#2B3A46",
        },
        ash: {
          light: "#F2F2F2",
          DEFAULT: "#BCBCBC",
          dark: "#262626",
        },
        white: "#FAFAFA",
        black: "#020202",
      },
    },
  },
  plugins: [],
};
