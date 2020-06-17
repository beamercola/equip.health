module.exports = {
  corePlugins: {
    container: false,
  },
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        "7xl": "5rem",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
    },
    fill: theme => ({
      marigold: theme("colors.yellow.600"),
      cream: theme("colors.yellow.100"),
      teal: theme("colors.teal.600"),
      sky: theme("colors.blue.200"),
      navy: theme("colors.blue.900"),
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
