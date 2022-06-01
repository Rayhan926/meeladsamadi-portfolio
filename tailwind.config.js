module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0099FF",
        "primary-hover": "#0087E1",
        "gray-soft": "#5F5F5F",
        "dark-soft": "#242424",
      },
      fontFamily: {
        sans: ["Segoe-UI-Regular", "sans-serif"],
        "segoe-bold": ["Segoe-UI-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
