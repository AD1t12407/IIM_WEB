module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 500: "#999999", "900_02": "#24272c" },
        white: { A700: "#ffffff", A700_7f: "#ffffff7f" },
        blue_gray: { "900_01": "#232732" },
        red: { 700: "#d32d20" },
        black: { 900: "#000000" },
        deep_purple: { A200: "#9747ff" },
        yellow: { 800: "#f7a21e" },
      },
      boxShadow: {
        xs: "6px 6px  12px 0px #0000003f",
        sm: "18px 18px  36px 0px #0000003f",
        md: "10px 10px  20px 0px #0000003f",
        lg: "-1px -1px  2px 0px #1a1c257f",
        xl: "25px 25px  60px 0px #0000003f",
        "2xl": "10px 10px  12px 0px #0000003f",
        "3xl": "5px 5px  10px 0px #0000003f",
      },
      fontFamily: { poppins: "Poppins" },
      backgroundImage: { gradient: "linear-gradient(320deg, #2f3239,#15171b)" },
      textShadow: { ts: "10px 10px  12px #0000003f", ts1: "5px 5px  10px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
