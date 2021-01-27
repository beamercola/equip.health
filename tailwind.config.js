module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    container: { center: true },
    extend: {
      borderRadius: {
        xl: "1rem",
      },
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
      container: {
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      fontSize: {
        "7xl": "5rem",
      },
      height: {
        "screen-50": "50vh",
        "screen-60": "60vh",
        "screen-75": "75vh",
        "screen-90": "90vh",
      },
      scale: {
        "101": "1.01",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.navy.400"),
            a: { color: theme("colors.navy.400") },
            strong: { color: theme("colors.navy.400"), fontWeight: 800 },
            h1: { color: theme("colors.navy.400"), fontWeight: "medium" },
            h2: { color: theme("colors.navy.400"), fontWeight: "medium" },
            h3: { color: theme("colors.navy.400"), fontWeight: "medium" },
            h4: { color: theme("colors.navy.400"), fontWeight: "medium" },
            h5: { color: theme("colors.navy.400"), fontWeight: "medium" },
            h6: { color: theme("colors.navy.400"), fontWeight: "medium" },
          },
        },
      }),
    },
    fill: theme => ({
      sky: theme("colors.sky.300"),
      navy: theme("colors.navy.300"),
      teal: theme("colors.teal.300"),
      white: theme("colors.white"),
    }),
    fontFamily: {
      heading: ["LaNord", "sans-serif"],
      sans: ["PlainRegular", "sans-serif"],
    },
  },
  variants: {
    backgroundColor: ["even", "odd", "hover"],
    boxShadow: ["hover", "focus"],
    borderColor: ["hover"],
    borderWidth: ["first", "last", "responsive"],
    fill: ["hover"],
    scale: ["hover"],
    visibility: ["hover"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
}
