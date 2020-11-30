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
          'Regular',
          'Semi-bold',
          'Bold',
      ],
    },
    {
      name: 'Expletus Sans',
      styles: [
        'Regular',
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        'Regular',
        // 'Light',
      ],
    },
    {
      name: 'Montserrat',
      styles: [
        'Regular',
        // 'Light',
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
    'Montserrat',
    'Open Sans',
    'Raleway',
    'Georgia',
    'sans-serif',
  ],
})
export default typography