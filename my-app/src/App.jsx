import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About";
import Product from "./components/Product";
import Footer from "./components/Footer";
import "./index.css";
import Career from "./components/Career";
import Internship from "./components/Internship";
import Foundation from "./components/Foundation";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import PrivacyPolicy from "./components/Privacypolicy";

function AppContent() {
  const location = useLocation();
  const isTermsPage = location.pathname === "/terms";
  const isPrivacyPage = location.pathname === "/privacy-policy";
  const hideNavFooter = isTermsPage || isPrivacyPage;

  return (
    <>
      {!hideNavFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/career" element={<Career/>}/>
        <Route path="/internship" element={<Internship/>}/>
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      </Routes>
      {!hideNavFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
