import { useEffect, useRef, useState } from 'react';
import { InfoProvider } from './context/InfoContext';

import { createTheme, responsiveFontSizes, ThemeProvider, CssBaseline, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import PoppinsRegularTTF from './assets/fonts/poppins/PoppinsRegular.ttf';

import AppBarComponent from './components/AppBarComponent';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';
import Skills from './components/Skills';

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
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

let theme = createTheme({
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
    },
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
    MuiCard: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          backgroundColor: '#2c2c2c',
          borderRadius: 10,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: '#2c2c2c',
          borderRadius: 5,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const useStyle = makeStyles({
  root: {
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  container: {
    maxWidth: '99%',
  }
});

function App() {
  const [visibleSection, setVisibleSection] = useState('');

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  const scrollToa = (ele) => {
    const { offsetTop } = getDimensions(ele);
    window.scrollTo({
      top: offsetTop - 70,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const sectionRefs = [
      { section: "home", ref: homeRef },
      { section: "about", ref: aboutRef },
      { section: "resume", ref: resumeRef },
      { section: "skills", ref: skillsRef },
      { section: "contact", ref: contactRef },
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 350;

      const selected = sectionRefs.find(({ ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return false;
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  const classes = useStyle();

  return (
    <InfoProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <Container className={classes.container} >
            <AppBarComponent
              visibleSection={visibleSection}
              scrollTo={scrollToa}
              homeRef={homeRef}
              aboutRef={aboutRef}
              resumeRef={resumeRef}
              skillsRef={skillsRef}
              contactRef={contactRef}
            />
            <Header homeRef={homeRef} />
            <About aboutRef={aboutRef} />
            <Resume resumeRef={resumeRef} />
            <Skills skillsRef={skillsRef} />
            <Contact contactRef={contactRef} />
            <Footer
              scrollTo={scrollToa}
              homeRef={homeRef}
              aboutRef={aboutRef}
              resumeRef={resumeRef}
              skillsRef={skillsRef}
              contactRef={contactRef}
            />
          </Container>
        </div>
      </ThemeProvider>
    </InfoProvider>
  );
}

export default App;
