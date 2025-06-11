import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingBookButton from './components/FloatingBookButton';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const MotorcycleDetailingPage = lazy(() => import('./pages/services/MotorcycleDetailingPage'));
const CeramicCoatingPage = lazy(() => import('./pages/services/CeramicCoatingPage'));
const PaintProtectionFilmPage = lazy(() => import('./pages/services/PaintProtectionFilmPage'));

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-orange"></div>
  </div>
);

// Structured data for the business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  "name": "DetailMoto",
  "image": "/image.png",
  "description": "Professional motorcycle detailing, ceramic coating, and paint protection film services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "Your Postal Code",
    "addressCountry": "Your Country"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "Your Latitude",
    "longitude": "Your Longitude"
  },
  "url": "https://detailmoto.com",
  "telephone": "Your Phone Number",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/detailmoto",
    "https://www.instagram.com/detailmoto"
  ]
};

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-white font-montserrat">
          <Helmet>
            <title>DetailMoto - Professional Motorcycle Detailing Services</title>
            <meta name="description" content="Professional motorcycle detailing, ceramic coating, and paint protection film services. Book your appointment today!" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            {/* Primary Meta Tags */}
            <meta name="title" content="DetailMoto - Professional Motorcycle Detailing Services" />
            <meta name="description" content="Expert motorcycle detailing, ceramic coating, and paint protection film services. Transform your ride with our premium care solutions." />
            <meta name="keywords" content="motorcycle detailing, ceramic coating, paint protection film, bike detailing, motorcycle care, premium detailing" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://detailmoto.com/" />
            <meta property="og:title" content="DetailMoto - Professional Motorcycle Detailing Services" />
            <meta property="og:description" content="Expert motorcycle detailing, ceramic coating, and paint protection film services. Transform your ride with our premium care solutions." />
            <meta property="og:image" content="/image.png" />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://detailmoto.com/" />
            <meta property="twitter:title" content="DetailMoto - Professional Motorcycle Detailing Services" />
            <meta property="twitter:description" content="Expert motorcycle detailing, ceramic coating, and paint protection film services. Transform your ride with our premium care solutions." />
            <meta property="twitter:image" content="/image.png" />
            
            {/* Favicon */}
            <link rel="icon" type="image/png" href="/favicon.png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            
            {/* Structured Data */}
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          </Helmet>
          <Header />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
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
            </Suspense>
          </main>
          <Footer />
          <FloatingBookButton />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;