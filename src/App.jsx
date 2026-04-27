import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Services from './components/Services';

import { MessageSquare } from 'lucide-react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<div className="section-padding"><Services /></div>} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
      <Footer />
      
      <a 
        href="https://wa.me/910000000000" 
        className="whatsapp-widget" 
        target="_blank" 
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare size={32} fill="white" />
      </a>
    </Router>
  );
}

export default App;
