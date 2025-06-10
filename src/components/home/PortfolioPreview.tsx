import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PortfolioPreview: React.FC = () => {
  const portfolioItems = [
    {
      title: 'BMW M3 Ceramic Coating',
      category: 'Car Detailing',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Harley Davidson Full Detail',
      category: 'Motorcycle',
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Tesla Model S PPF Installation',
      category: 'Paint Protection',
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Custom Helmet Coating',
      category: 'Helmet Services',
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600">
              See the transformation we've achieved for our clients
            </p>
          </div>
          <Link
            to="/gallery"
            className="hidden md:flex items-center space-x-2 text-primary-orange font-semibold hover:text-orange-600 transition-colors"
          >
            <span>View All Work</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm text-primary-orange mb-1">{item.category}</div>
                  <h3 className="font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-8 md:hidden">
          <Link
            to="/gallery"
            className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center space-x-2"
          >
            <span>View All Work</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;