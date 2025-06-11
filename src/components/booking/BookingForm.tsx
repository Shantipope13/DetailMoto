import React from 'react';
import { useForm } from '../../hooks/useForm';
import Button from '../common/Button';
import { useToast } from '../../context/ToastContext';
import { Service } from '../../types';

interface BookingFormProps {
  services: Service[];
  onSubmit: (bookingData: any) => Promise<void>;
}

const BookingForm: React.FC<BookingFormProps> = ({ services, onSubmit }) => {
  const { showToast } = useToast();
  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm({
    serviceId: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  }, {
    serviceId: (value) => !value ? 'Please select a service' : undefined,
    date: (value) => !value ? 'Please select a date' : undefined,
    time: (value) => !value ? 'Please select a time' : undefined,
    name: (value) => !value ? 'Name is required' : undefined,
    email: (value) => !value.includes('@') ? 'Invalid email' : undefined,
    phone: (value) => !value ? 'Phone number is required' : undefined
  });

  const handleFormSubmit = async (formData: any) => {
    try {
      await onSubmit(formData);
      showToast('Booking submitted successfully!', 'success');
    } catch (error) {
      showToast('Failed to submit booking. Please try again.', 'error');
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, handleFormSubmit)} className="space-y-6">
      <div>
        <label htmlFor="serviceId" className="block text-sm font-medium text-gray-700">
          Select Service
        </label>
        <select
          id="serviceId"
          name="serviceId"
          value={values.serviceId}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-orange focus:ring-primary-orange"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name} - ${service.price} ({service.duration})
            </option>
          ))}
        </select>
        {errors.serviceId && (
          <p className="mt-1 text-sm text-red-600">{errors.serviceId}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-orange focus:ring-primary-orange"
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date}</p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={values.time}
            onChange={handleChange}
            min="09:00"
            max="17:00"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-orange focus:ring-primary-orange"
          />
          {errors.time && (
            <p className="mt-1 text-sm text-red-600">{errors.time}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-orange focus:ring-primary-orange"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-orange focus:ring-primary-orange"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-orange focus:ring-primary-orange"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={values.notes}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-orange focus:ring-primary-orange"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={isSubmitting}
      >
        Book Appointment
      </Button>
    </form>
  );
};

export default BookingForm; 