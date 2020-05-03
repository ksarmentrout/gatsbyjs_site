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
          'Semi-bold',
          'Bold',
      ],
    },
    {
      name: 'Expletus Sans',
      styles: [
        'Regular',
        // 'Medium',
      ],
    }
  ],
  headerFontFamily: [
    'Expletus Sans',
    'Raleway',
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Raleway',
    'Georgia',
    'serif',
  ],
})
export default typography