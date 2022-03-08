import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Accueil,Contact,Menu, Footer } from './container';
import { Navbar, ContactComponent } from './components';
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
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
    );
  }



export default App;
