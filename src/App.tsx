import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingBookButton from './components/FloatingBookButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import MotorcycleDetailingPage from './pages/services/MotorcycleDetailingPage';
import CeramicCoatingPage from './pages/services/CeramicCoatingPage';
import PaintProtectionFilmPage from './pages/services/PaintProtectionFilmPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-montserrat">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/motorcycle-detailing" element={<MotorcycleDetailingPage />} />
            <Route path="/services/ceramic-coating" element={<CeramicCoatingPage />} />
            <Route path="/services/paint-protection-film" element={<PaintProtectionFilmPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingBookButton />
      </div>
    </Router>
  );
}

export default App;