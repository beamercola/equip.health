export const themes = [
  {
    text: "text-navy-400",
    background: "bg-navy-100",
    overlay: "bg-navy-400",
    icon: {
      light: ["text-navy-400", "text-navy-300"],
      dark: ["text-navy-200", "text-navy-100"],
    },
  },
  {
    text: "text-teal-400",
    background: "bg-teal-100",
    overlay: "bg-teal-400",
    icon: {
      light: ["text-teal-400", "text-teal-300"],
      dark: ["text-teal-200", "text-teal-100"],
    },
  },
  {
    text: "text-gold-400",
    background: "bg-gold-100",
    overlay: "bg-gold-400",
    icon: {
      light: ["text-gold-400", "text-gold-300"],
      dark: ["text-gold-200", "text-gold-100"],
    },
  },
  {
    text: "text-navy-300",
    background: "bg-sky-100",
    overlay: "bg-sky-400",
    icon: {
      light: ["text-sky-400", "text-sky-300"],
      dark: ["text-sky-200", "text-sky-100"],
    },
  },
  {
    text: "text-navy-300",
    background: "bg-navy-100",
    overlay: "bg-navy-400",
    icon: {
      light: ["text-teal-400", "text-sky-400"],
      dark: ["text-teal-100", "text-sky-200"],
    },
  },
]

// console.log('testing push')

export const getTheme = uuid => {
  const id = parseInt(uuid.replace(/\D+/g, "") || 0)
  return themes[id % themes.length]
}
