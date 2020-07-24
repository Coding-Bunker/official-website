import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Raleway Regular 400", "sans-serif"],
  bodyFontFamily: ["Raleway Regular 400", "sans-serif"]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;