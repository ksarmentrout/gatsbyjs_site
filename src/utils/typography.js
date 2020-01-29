// import Typography from 'typography'
// import moragaTheme from 'typography-theme-moraga'

// const typography = new Typography(moragaTheme)
// export default typography

import Typography from 'typography'
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Raleway',
      styles: [
        'Light',
      ],
    }
  ],
  headerFontFamily: [
    'Raleway',
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Georgia',
    'serif',
  ],
})
export default typography