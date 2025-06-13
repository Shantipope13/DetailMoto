import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HoverSlideshow from '../common/HoverSlideshow';

const PortfolioPreview: React.FC = () => {
  const portfolioItems = [
    {
      title: 'Cherry Tiggo 8 Pro Graphen Coating',
      category: 'Car Detailing',
      images: [
        'https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/473619254_491085324013013_2313542684006765424_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iyDEJmWq2LYQ7kNvwGvpJnq&_nc_oc=AdmoAbo0slrGFBSma4znMC3UnVmR5Ugf_rHfKT2CDO2pqDabTobrq0kG47wzhlWrXko&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=_6pJ0ukqz7541_NGIoUoyw&oh=00_AfN9taDfpaltFFSzcbbsWD6WLfqvRgOveGQrJjHWPKyfCw&oe=68527EA0',
        'https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/473619760_491085044013041_2127470347314836496_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sduSwD2deE0Q7kNvwHwCcTW&_nc_oc=Adkm2lY1Ag_X0UZd5LnGlNSVCUagaK-c9jJzz6t_dZNLupiSrUJCvvCUZk8tj5sQ8GY&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=WazbIBuA6a7so1Ayu4tYeA&oh=00_AfP5hvlUt5QBy1KmG4U75dOIlonRnTadEJLpsvT3DUhP0w&oe=68526E76',
        'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/473619637_491085120679700_386208669608973807_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mhqjKpL6InYQ7kNvwFu9m7j&_nc_oc=Admt5r_wi8suYK2TQjMlBvjO_vk2uTlYv7EYlLvxCDj9FD0irUj2HhJGBy6CfS78Mdw&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=-hAvAiCnKChrA97QIPooyw&oh=00_AfPFNCVFsJ39im3nipErjfdXEF47kYYoPwDaYsmc6zh_jA&oe=68526A68',
        'https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/474171657_491085444013001_128505834387460378_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MnbVvXAmBtMQ7kNvwHAk7CT&_nc_oc=Adkx65M67qGhS0Wx9ZPtR_3rZ_zrmO-O-sGVtyTfSoa5n1vMGhXKah6fhuvB-hRAXi4&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=Oi5cOLn8x4scu8e4D9vC5Q&oh=00_AfMa8DOrpGmd59j8FQs-nhnN4Z-I1uxuXlClefi-IX3bjA&oe=685270BC',
        'https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/473620310_491085417346337_2758994469969624442_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=66Ba2WZsDHAQ7kNvwFbh5Qt&_nc_oc=AdkYWgJ4AmVrlvr4_m68iq0Jw6B2PcJn-8O5PXnmAYs72jGrKv3B0uHLv5gm321YPZ8&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=47yJLhwYgYvrUXo1oG_qSw&oh=00_AfMrSIPL1RAmWaUQPlRAtQWA0GzDBOE8H5aZgnUiJ94EsA&oe=68525805'
      ]
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
                {item.images ? (
                  <HoverSlideshow
                    images={item.images}
                    title={item.title}
                    className="w-full h-full"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
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