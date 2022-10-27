const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
const animations = require("tailwindcss-animatecss");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    animatedSettings: {
      animatedSpeed: 2000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 700,
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "slide-top": "slide-top 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      fontFamily: {
        sans: "Glory",
        mono: "RedHatMono",
        head: "Calibre Super Condensed",
      },
    },
    colors: {
      // https://coolors.co/palette/ff6d00-ff7900-ff8500-ff9100-ff9e00-240046-3c096c-5a189a-7b2cbf-9d4edd
      transparent: "transparent",
      black: colors.black,
      gray: "#44475a",
      foreground: "#F8F8F2",
      background: "#282A36",
      pink: "#FF79C6",
      green: "#50FA7B",
      purple: "#BD93F9",
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
    animations,
  ],
};
