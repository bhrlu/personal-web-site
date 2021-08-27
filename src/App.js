import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

import PoppinsRegularTTF from './assets/fonts/poppins/PoppinsRegular.ttf';
import About from './components/About';

import AppBarComponent from './components/AppBarComponent';
import Footer from './components/Footer';
import Header from './components/Header';

const poppinsRegular = {
  fontFamily: 'PoppinsRegular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
      local('PoppinsRegular'),
      local('PoppinsRegular'),
      url(${PoppinsRegularTTF}) format('truetype');
    `,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#2c2c2c',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffbd39',
      light: '#ffef6c',
      dark: '#c78d00',
      contrastText: '#000000',
    }
  },
  typography: {
    fontFamily: 'PoppinsRegular'
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          cursor: 'pointer',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#000000',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [poppinsRegular],
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent />
      <Header />
      <About />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
