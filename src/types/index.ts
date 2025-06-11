export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
}

export interface Booking {
  id: string;
  serviceId: string;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
  category: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
} 