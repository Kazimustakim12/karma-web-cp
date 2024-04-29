/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      blinker: ["Inter", "sans-serif"],
      soria: ["soria", "sans-serif"],
      bronova: ["bronova", "sans-serif"],
    },
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: "15px",
    },
    extend: {
      screens: {
        "2xl": "1400px",
        xl: "1200px",
        lg: "992px",
        md: "768px",
        sm: "576px",
        xs: "475px",
      },
      colors: {
        "primary-300": "#FFF7EA",
        "primary-400": "#FFEACB",
        "primary-500": "#FDDBBC",
        "text-black": "#181513",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }),
        },
        { values: theme("translate") }
      );
    }),
  ],
});
