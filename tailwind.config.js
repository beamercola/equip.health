module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        default: "2rem",
        md: "4rem",
      },
    },
    extend: {
      fontSize: {
        "7xl": "5rem",
      },
    },
    fontFamily: {
      heading: ["LaNord", "sans-serif"],
      sans: ["PlainRegular", "sans-serif"],
    },
  },
  variants: {
    boxShadow: ["hover"],
  },
  plugins: [],
}
