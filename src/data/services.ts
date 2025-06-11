import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'basic-wash',
    name: 'Basic Wash',
    description: 'Exterior wash, wheel cleaning, and basic interior cleaning',
    price: 49.99,
    duration: '1 hour',
    image: '/images/services/basic-wash.jpg'
  },
  {
    id: 'premium-detail',
    name: 'Premium Detail',
    description: 'Full exterior and interior detailing, including paint correction and leather treatment',
    price: 149.99,
    duration: '3-4 hours',
    image: '/images/services/premium-detail.jpg'
  },
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating',
    description: 'Long-lasting paint protection with ceramic coating application',
    price: 499.99,
    duration: '1 day',
    image: '/images/services/ceramic-coating.jpg'
  },
  {
    id: 'paint-correction',
    name: 'Paint Correction',
    description: 'Professional paint correction to remove scratches and swirl marks',
    price: 299.99,
    duration: '4-6 hours',
    image: '/images/services/paint-correction.jpg'
  },
  {
    id: 'ppf-installation',
    name: 'Paint Protection Film',
    description: 'Installation of premium paint protection film for maximum protection',
    price: 799.99,
    duration: '1-2 days',
    image: '/images/services/ppf.jpg'
  },
  {
    id: 'engine-detailing',
    name: 'Engine Detailing',
    description: 'Complete engine bay cleaning and detailing',
    price: 89.99,
    duration: '2 hours',
    image: '/images/services/engine-detail.jpg'
  }
]; 