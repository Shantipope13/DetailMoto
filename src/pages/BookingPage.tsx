import React from 'react';
import { Helmet } from 'react-helmet-async';
import BookingForm from '../components/booking/BookingForm';
import { services } from '../data/services';

const BookingPage: React.FC = () => {
  const handleBookingSubmit = async (bookingData: any) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Booking data:', bookingData);
      return Promise.resolve();
    } catch (error) {
      console.error('Booking failed:', error);
      return Promise.reject(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book Your Service - DetailMoto</title>
        <meta
          name="description"
          content="Book your motorcycle detailing service with DetailMoto. Choose from our range of professional services."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Service
          </h1>
          <p className="text-xl text-gray-600">
            Choose from our range of professional motorcycle detailing services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <BookingForm
              services={services}
              onSubmit={handleBookingSubmit}
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Services
            </h2>
            <div className="space-y-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-4 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{service.description}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-primary-orange font-semibold">
                      ${service.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {service.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage; 