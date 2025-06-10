import React, { useState } from 'react';
import { Eye, Filter } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'motorcycles', label: 'Motorcycles' },
    { id: 'cars', label: 'Cars' },
    { id: 'ceramic', label: 'Ceramic Coating' },
    { id: 'ppf', label: 'PPF Installation' },
    { id: 'helmets', label: 'Helmet Coating' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'BMW M3 Ceramic Coating',
      category: 'cars',
      type: 'ceramic',
      beforeImage: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete paint correction and ceramic coating application'
    },
    {
      id: 2,
      title: 'Harley Davidson Detail',
      category: 'motorcycles',
      type: 'detail',
      beforeImage: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Full motorcycle detailing with chrome polishing'
    },
    {
      id: 3,
      title: 'Tesla Model S PPF',
      category: 'cars',
      type: 'ppf',
      beforeImage: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Full front-end paint protection film installation'
    },
    {
      id: 4,
      title: 'Sport Bike Ceramic Detail',
      category: 'motorcycles',
      type: 'ceramic',
      beforeImage: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ceramic coating application on motorcycle fairings'
    },
    {
      id: 5,
      title: 'Premium Helmet Coating',
      category: 'helmets',
      type: 'ceramic',
      beforeImage: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ceramic coating on custom motorcycle helmet'
    },
    {
      id: 6,
      title: 'Porsche 911 Paint Correction',
      category: 'cars',
      type: 'ceramic',
      beforeImage: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-stage paint correction and ceramic coating'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter || item.type === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the incredible transformations we've achieved for our clients. 
            Every project showcases our commitment to excellence and attention to detail.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-primary-orange" />
            <span className="font-semibold text-primary-black">Filter by:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onImageClick={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery item"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-2xl hover:text-primary-orange"
          >
            ×
          </button>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl mb-8">
            Let us create the same stunning results for your vehicle
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/contact"
              className="bg-white text-primary-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Your Quote
            </a>
            <a
              href="tel:(555) 123-4567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-orange transition-colors"
            >
              Call: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

interface GalleryCardProps {
  item: {
    id: number;
    title: string;
    beforeImage: string;
    afterImage: string;
    description: string;
  };
  onImageClick: (image: string) => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, onImageClick }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={showAfter ? item.afterImage : item.beforeImage}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
        
        {/* Before/After Toggle */}
        <div className="absolute top-4 left-4 flex bg-black/50 rounded-lg overflow-hidden">
          <button
            onClick={() => setShowAfter(false)}
            className={`px-3 py-1 text-sm font-medium transition-colors ${
              !showAfter ? 'bg-primary-orange text-white' : 'text-white hover:bg-white/20'
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`px-3 py-1 text-sm font-medium transition-colors ${
              showAfter ? 'bg-primary-orange text-white' : 'text-white hover:bg-white/20'
            }`}
          >
            After
          </button>
        </div>

        {/* View Button */}
        <button
          onClick={() => onImageClick(showAfter ? item.afterImage : item.beforeImage)}
          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-lg hover:bg-primary-orange transition-colors"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-black mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default GalleryPage;