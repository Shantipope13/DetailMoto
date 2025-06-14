import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { MotionProvider } from './components/MotionProvider';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <MotionProvider>
        <App />
      </MotionProvider>
    </HelmetProvider>
  </StrictMode>
);