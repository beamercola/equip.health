module.exports = {
  corePlugins: {
    container: false,
  },
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        "teal-xl":
          "0 20px 25px -5px rgba(64, 94, 98, 1), 0 10px 10px -5px rgba(64, 94, 98, 1)",
        "teal-2xl": "0 25px 50px -12px rgba(64, 94, 98, 1)",
      },
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
      white: theme("colors.white"),
    }),
    fontFamily: {
      heading: ["LaNord", "sans-serif"],
      sans: ["PlainRegular", "sans-serif"],
    },
  },
  variants: {
    boxShadow: ["hover", "focus"],
    borderColor: ["hover"],
    borderWidth: ["last"],
    scale: ["hover"],
  },
  plugins: [],
}
