const { colors } = require("tailwindcss/defaultTheme")

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
      colors: {
        navy: {
          "100": "#C3D1DE",
          "200": "#86A4BC",
          "300": "#0E497A",
          "400": "#0A375C",
        },
        teal: {
          "100": "#BFDFDD",
          "200": "#7FBFBC",
          "300": "#007F7A",
          "400": "#00605B",
        },
        cream: {
          "100": "#FCFAF9",
          "200": "#FAF6F2",
          "300": "#F4EDE4",
          "400": "#B7B2AB",
        },
        gold: {
          "100": "#FBE8CE",
          "200": "#F7D29C",
          "300": "#EFA53A",
          "400": "#B37C2C",
        },
        sky: {
          "100": "#E2F1FA",
          "200": "#C5E5F5",
          "300": "#8ACAEA",
          "400": "#6898AF",
        },
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
