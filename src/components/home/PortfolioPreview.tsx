import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PortfolioPreview: React.FC = () => {
  const portfolioItems = [
    {
      title: 'Cherry Tiggo 8 Pro Graphen Coating',
      category: 'Car Detailing',
      image: 'https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/474081436_491085034013042_6623246810883504987_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LsXHbzU648sQ7kNvwGbMlF7&_nc_oc=AdlwjMXA66Ye_oVgibJyO1HDLv95uy5PqpgH7RFLvLKDaAjwa2ukfBJZamjRQg5jHw0&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=ySWD9_CyTKuUBfh9GWl98w&oh=00_AfNGJgK0i008vLP1Wv1HBup1Y1T7JizgCbW91IrB6PjFiA&oe=6852677C'
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
    <section className="py-24 bg-gray-light">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            {/* Main Title - 36px+ for section titles */}
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">
              Featured Work
            </h2>
            
            {/* Subtitle - 20-24px for subheadings */}
            <p className="text-xl md:text-2xl text-gray-600">
              See the transformation we've achieved for our clients
            </p>
          </div>
          <Link
            to="/gallery"
            className="hidden md:flex items-center space-x-3 text-primary-orange font-semibold text-lg hover:text-orange-600 transition-colors"
          >
            <span>View All Work</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-sm text-primary-orange mb-2">{item.category}</div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-12 md:hidden">
          <Link
            to="/gallery"
            className="bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center space-x-3"
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