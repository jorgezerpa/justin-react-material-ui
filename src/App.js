import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { Accueil,Contact,Menu, Footer } from './container';
import { Navbar, ContactComponent } from './components';

import { createTheme, ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";

import './app.css';

const theme = createTheme({
      palette: {
        primary:{
          main: '#D2483D'
        },
        secondary:{
          main: '#000'
        }
      },

      typography: {
        subtitle1: {
          fontSize: 12,
        },
        h5: {
          fontSize: '2.6rem',
          letterSpacing: '.5px',
          fontFamily: 'Bebas Neue, cursive',
          transform: 'scaleY(1.2)'
        },
        h6: {
          fontSize: '1.6rem',
          letterSpacing: '.5px',
          fontFamily: 'Bebas Neue, cursive',
          borderBottom: '2px solid #f00'
        },
        body1: {
          fontSize: '.8rem',
          fontWeight: 900,
          fontFamily: 'Montserrat, sans-serif',
        },
        body2: {
          fontFamily: 'Montserrat, sans-serif',
        },
        
      },

      
})



function App() {
  return (
      <div className="container">

        <ThemeProvider theme={theme} >
          <Router>
              <CssBaseline />
              <Navbar />
    
              <Routes>
                  <Route exact path="/" element={<Accueil />}  />
                  <Route exact path="/accueil" element={<Accueil />}  />
                  <Route exact path="/menu" element={<Menu />}  />        
                  <Route exact path="/contact" element={<Contact />}  />
              </Routes>
    
            <ContactComponent />
            <Footer />
          </Router>
        </ThemeProvider>
      </div>
        );

  }



export default App;
