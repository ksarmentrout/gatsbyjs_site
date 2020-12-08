// https://theme-ui.com/theming/
export default {
  initialColorModeName: 'dark',
  colors: {
    text: '#f9f8f0',
    background: '#050505',
    primary: '#f9f8f2',
    modes: {
      dark: {
        text: '#f9f8f0',  // black-ish
        background: '#050505', // off-white-ish
        primary: '#d1567f',  // wine red
        accent: '#d1567f',  // wine red
      },
      light: {
        text: '#050505',
        background: '#f9f8f0',
        primary: '#050505',
      },
    },
  },
  styles: {
    a: {
      color: 'primary',
    },
  }
}
