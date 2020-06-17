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
    fill: theme => ({
      marigold: theme("colors.yellow.600"),
      cream: theme("colors.yellow.100"),
      teal: theme("colors.teal.600"),
      sky: theme("colors.blue.200"),
    }),
    fontFamily: {
      heading: ["LaNord", "sans-serif"],
      sans: ["PlainRegular", "sans-serif"],
    },
  },
  variants: {
    boxShadow: ["hover"],
    borderColor: ["hover"],
  },
  plugins: [],
}
