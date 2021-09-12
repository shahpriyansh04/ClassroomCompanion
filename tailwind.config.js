module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: { serif: "Reem Kufi" },

    extend: {
      colors: {
        "light-primary": "#084a83",
        "light-secondary": "#415F9D",
        "light-accessory": "#D3D6DB",
        "light-text": "#EFF0F4",
        "dark-primary": "#171717",
        "dark-secondary": "#444444",
        "dark-accessory": "#DA0037",
        "dark-text": "#EDEDED",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
