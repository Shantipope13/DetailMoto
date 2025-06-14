import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ToastProvider } from './context/ToastContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingBookButton from './components/FloatingBookButton';
import FloatingMessengerButton from './components/FloatingMessengerButton';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
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
    "streetAddress": "T.S. Cruz subd, Gladiola St, corner Sampaguita St",
    "addressLocality": "Almanza, Las Pinas City",
    "addressRegion": "Metro Manila",
    "postalCode": "1750",
    "addressCountry": "PH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "14.4378",
    "longitude": "120.9947"
  },
  "url": "https://detailmoto.com",
  "telephone": "0956 357 9715",
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
    "https://www.facebook.com/DetailMotoPh",
    "https://m.me/DetailMotoPh"
  ]
};

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <ToastProvider>
          <div className="min-h-screen bg-white font-montserrat">
            <Helmet>
              <title>DetailMoto - Professional Auto Detailing & Ceramic Coating in Metro Manila</title>
              <meta name="description" content="Professional auto detailing and Artdeshine ceramic coating services for motorcycles and cars in Las Piñas City, Metro Manila. Expert paint protection, PPF installation, and helmet coating services." />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              
              {/* Primary Meta Tags */}
              <meta name="title" content="DetailMoto - Professional Auto Detailing & Ceramic Coating in Metro Manila" />
              <meta name="description" content="Professional auto detailing and Artdeshine ceramic coating services for motorcycles and cars in Las Piñas City, Metro Manila. Expert paint protection, PPF installation, and helmet coating services." />
              <meta name="keywords" content="auto detailing, ceramic coating, paint protection film, motorcycle detailing, car detailing, Las Piñas, Metro Manila, Artdeshine, PPF, helmet coating" />
              
              {/* Open Graph / Facebook */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://detailmoto.com/" />
              <meta property="og:title" content="DetailMoto - Premium Auto Detailing & Ceramic Coating" />
              <meta property="og:description" content="Professional auto detailing and ceramic coating services for motorcycles and cars in Metro Manila." />
              <meta property="og:image" content="/image.png" />
              
              {/* Twitter */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://detailmoto.com/" />
              <meta property="twitter:title" content="DetailMoto - Premium Auto Detailing & Ceramic Coating" />
              <meta property="twitter:description" content="Professional auto detailing and ceramic coating services for motorcycles and cars in Metro Manila." />
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
                  <Route path="/booking" element={<BookingPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <FloatingBookButton />
            <FloatingMessengerButton />
          </div>
        </ToastProvider>
      </ErrorBoundary>
    </Router>
  );
};

export default App;