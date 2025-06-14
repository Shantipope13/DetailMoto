import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HoverSlideshow from '../common/HoverSlideshow';

const PortfolioPreview: React.FC = () => {
  const portfolioItems = [
    {
      title: 'BMW M3 Ceramic Coating',
      category: 'Car Detailing',
      images: [
        'https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/473620310_491085417346337_2758994469969624442_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=66Ba2WZsDHAQ7kNvwFbh5Qt&_nc_oc=AdkYWgJ4AmVrlvr4_m68iq0Jw6B2PcJn-8O5PXnmAYs72jGrKv3B0uHLv5gm321YPZ8&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=REXbBbwTFzHvTJjzfC0Zzg&oh=00_AfO7o0b4DTlaRazauMxFXfWTaFHv9civuXrB6JMhnfdfkw&oe=68525805',
        'https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/474171657_491085444013001_128505834387460378_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MnbVvXAmBtMQ7kNvwHAk7CT&_nc_oc=Adkx65M67qGhS0Wx9ZPtR_3rZ_zrmO-O-sGVtyTfSoa5n1vMGhXKah6fhuvB-hRAXi4&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=DTAlfT360imODq0DdXBwag&oh=00_AfOZDup0SnzpUxFOCiIrsiHApFveVqih8L4dC7gj0cZBnw&oe=685270BC',
        'https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/474144988_491085214013024_6547198230086032504_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kKYfBEWoWB0Q7kNvwEv1g0k&_nc_oc=Adk0SWp1DyHGu8o1Dw3zXnuDNkUoaoLW3aNzn25_PW2L7vOWGGDDWbfh43YlITwoFbA&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=tswzOEEJLh3YKgjsFt7CIw&oh=00_AfNWyAwrGf-DzC95zJiR70xcCAZlWsfR7Lts2g4B3Dk2Tg&oe=68527762',
        'https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/473619760_491085044013041_2127470347314836496_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sduSwD2deE0Q7kNvwHwCcTW&_nc_oc=Adkm2lY1Ag_X0UZd5LnGlNSVCUagaK-c9jJzz6t_dZNLupiSrUJCvvCUZk8tj5sQ8GY&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=ALhFZ0PjHRiwjks9X-T4Tw&oh=00_AfPLvx8jvQM5UMqqqctGPSGmqaYZn9Rl2cOyoLi6AzI7Ag&oe=68526E76'
      ]
    },
    {
      title: 'Yamaha Aerox Ceramic Coated',
      category: 'Motorcycle',
      images: [
        'https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-6/473318268_487300987724780_6061142747322057253_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=CEQ_TkBV-zYQ7kNvwGuISgt&_nc_oc=AdneQU5r2aKB_sS6QB4Znk_NZH3J3OrIrvScJMKSrtI431srCqY8j_y66gMzy2gbhNo&_nc_zt=23&_nc_ht=scontent.fcai21-3.fna&_nc_gid=CnngcZR_m3kkewR8dgL_2A&oh=00_AfN2nWfAk2K4cIhQOBAq3_JxuiOVoHxJBXR9DQpQcqArlg&oe=685285FB',
        'https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-6/473053188_487300907724788_5744810996791822239_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=61CG--71lNIQ7kNvwHKDz-H&_nc_oc=AdnyloQar3SdgQ8bCvdAwqWh09P6OhVVzCOSnGD8ZEkVci67dz7poPN2me68HxV52yc&_nc_zt=23&_nc_ht=scontent.fcai21-3.fna&_nc_gid=CnngcZR_m3kkewR8dgL_2A&oh=00_AfOx_Edsdg63jiuqxXcKkMcMasB1AVJ5FA413o-315xO5A&oe=68528067',
        'https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-6/473248064_487300924391453_7186424736459821285_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YRnRXKDzQeEQ7kNvwH_577x&_nc_oc=AdniSBBZIG8pfGic8-us_9JLPISejyo7yPhF5cp8XR8GSLPUk1j31T8XKtrtCz9F104&_nc_zt=23&_nc_ht=scontent.fcai21-3.fna&_nc_gid=CnngcZR_m3kkewR8dgL_2A&oh=00_AfPw8ZQIRQLymzFe2Yeuv1lhi7_VoOaD6U0Rn2iqSR8w_w&oe=68526E03',
        'https://scontent.fcai21-4.fna.fbcdn.net/v/t39.30808-6/473599986_487300731058139_7007464141069242839_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dSLHxEwSFiIQ7kNvwGeUzS0&_nc_oc=AdmbcoyYGzHhOrRPVH30lep6CEMZX32UaywgbjjOvr4_3fZytv6FvsZY1olrKhoS_ps&_nc_zt=23&_nc_ht=scontent.fcai21-4.fna&_nc_gid=CnngcZR_m3kkewR8dgL_2A&oh=00_AfOzPTbb6OMWv-RbLwLB4LYmDTU1uChTHvk9dTeOpHZ3hw&oe=685279B0',
        'https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-6/473582019_487300914391454_7901050640132908118_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=CmKyNCrWnmUQ7kNvwEIA3pe&_nc_oc=Adms_u8H49-CEhtu1hlsgJgEW-RQ4Ct7oCXqEwB19UtlygH54w3VKp1wgFe1vkt1P2E&_nc_zt=23&_nc_ht=scontent.fcai21-3.fna&_nc_gid=CnngcZR_m3kkewR8dgL_2A&oh=00_AfOQjiYxualrng_GUYczJG-MGzccAcnWsR6L07iXq8OWHg&oe=68526463'
      ]
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