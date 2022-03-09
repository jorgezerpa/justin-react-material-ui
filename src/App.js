import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { Accueil,Contact,Menu, Footer } from './container';
import { Navbar, ContactComponent } from './components';

import theme from './assests/theme';
import { ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";

import './app.css';





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
