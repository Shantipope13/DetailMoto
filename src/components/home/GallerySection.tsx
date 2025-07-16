import React from 'react';
import BeforeAfterSlider from '../gallery/BeforeAfterSlider';
import { MessageSquare } from 'lucide-react';

const GallerySection: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      before: 'https://images.pexels.com/photos/2611691/pexels-photo-2611691.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: '2021 Harley Davidson Restoration',
      service: 'Ultimate Motorcycle Detailing',
      description: 'Complete paint correction, chrome polishing, and ceramic coating'
    },
    {
      id: 2,
      before: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'BMW M3 Ceramic Coating',
      service: 'Artdeshine Graphene Pro',
      description: '5-year protection with ultimate gloss enhancement'
    },
    {
      id: 3,
      before: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sport Bike Complete Detail',
      service: 'Premium Motorcycle Package',
      description: 'Engine cleaning, paint correction, and protective coating'
    },
    {
      id: 4,
      before: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury SUV Paint Protection',
      service: 'Paint Protection Film',
      description: 'Full front-end PPF installation for ultimate protection'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
            See the DetailMoto Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Drag the slider to see the dramatic transformations we achieve with our professional detailing services
          </p>
        </div>

        <BeforeAfterSlider images={galleryImages} />

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your vehicle?
          </p>
          <a
            href="https://m.me/DetailMotoPh?ref=gallery_view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center space-x-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Book via Messenger</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
