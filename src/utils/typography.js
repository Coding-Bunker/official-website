import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Raleway", "sans-serif"],
  bodyFontFamily: ["Raleway", "sans-serif"],
  googleFonts: [
    {
      name: "Raleway",
      styles: ["400", "700"],
    },
  ],
});

export default typography;