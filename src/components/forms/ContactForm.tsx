import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, User, Building } from 'lucide-react';
import { Button } from '../ui/Button';
import { ContactForm as ContactFormType } from '../../types';

interface ContactFormProps {
  onSubmit: (data: ContactFormType) => Promise<void>;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, className = '' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormType>();

  const handleFormSubmit = async (data: ContactFormType) => {
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      // Error handling is done in the parent component
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-decos-charcoal mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-decos-gray h-5 w-5" />
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full pl-10 pr-4 py-3 border border-decos-gray rounded-lg focus:ring-2 focus:ring-decos-gold focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-decos-red">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-decos-charcoal mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-decos-gray h-5 w-5" />
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              className="w-full pl-10 pr-4 py-3 border border-decos-gray rounded-lg focus:ring-2 focus:ring-decos-gold focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-decos-red">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-decos-charcoal mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-decos-gray h-5 w-5" />
            <input
              type="tel"
              {...register('phone')}
              className="w-full pl-10 pr-4 py-3 border border-decos-gray rounded-lg focus:ring-2 focus:ring-decos-gold focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-decos-charcoal mb-2">
            Company
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-decos-gray h-5 w-5" />
            <input
              type="text"
              {...register('company')}
              className="w-full pl-10 pr-4 py-3 border border-decos-gray rounded-lg focus:ring-2 focus:ring-decos-gold focus:border-transparent"
              placeholder="Enter your company name"
            />
          </div>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-decos-charcoal mb-2">
          Subject *
        </label>
        <input
          type="text"
          {...register('subject', { required: 'Subject is required' })}
          className="w-full px-4 py-3 border border-decos-gray rounded-lg focus:ring-2 focus:ring-decos-gold focus:border-transparent"
          placeholder="Enter the subject of your inquiry"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-decos-red">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-decos-charcoal mb-2">
          Message *
        </label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          rows={5}
          className="w-full px-4 py-3 border border-decos-gray rounded-lg focus:ring-2 focus:ring-decos-gold focus:border-transparent resize-none"
          placeholder="Enter your message or inquiry details"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-decos-red">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        className="w-full"
      >
        Send Message
      </Button>
    </form>
  );
};