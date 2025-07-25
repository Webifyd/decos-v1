import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { ContactForm } from '../components/forms/ContactForm';
import { leadService } from '../services/leadService';
import { ContactForm as ContactFormType } from '../types';

export const Contact: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleContactSubmit = async (data: ContactFormType) => {
    try {
      setSubmitStatus('idle');
      await leadService.createLead({
        ...data,
        source: 'contact_page',
      });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Industrial Avenue', 'Manufacturing District', 'City, State 12345'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@decos.com', 'sales@decos.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <div className="min-h-screen bg-decos-clean py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-decos-charcoal mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-decos-gray max-w-2xl mx-auto">
            Get in touch with our team of experts. We're here to help you find the perfect PVC solutions for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-decos-charcoal mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-decos-gold rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-decos-charcoal" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-decos-charcoal mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-decos-gray">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-decos-clean">
                <h3 className="text-lg font-semibold text-decos-charcoal mb-4">
                  Why Choose Decos?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-decos-gray">
                    <CheckCircle className="h-4 w-4 text-decos-green mr-2" />
                    25+ Years of Experience
                  </li>
                  <li className="flex items-center text-sm text-decos-gray">
                    <CheckCircle className="h-4 w-4 text-decos-green mr-2" />
                    Certified Quality Products
                  </li>
                  <li className="flex items-center text-sm text-decos-gray">
                    <CheckCircle className="h-4 w-4 text-decos-green mr-2" />
                    Expert Technical Support
                  </li>
                  <li className="flex items-center text-sm text-decos-gray">
                    <CheckCircle className="h-4 w-4 text-decos-green mr-2" />
                    Fast Delivery Worldwide
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-decos-charcoal mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-decos-green bg-opacity-10 border border-decos-green rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-decos-green mr-2" />
                    <p className="text-decos-green font-medium">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-decos-red bg-opacity-10 border border-decos-red rounded-lg">
                  <p className="text-decos-red">{errorMessage}</p>
                </div>
              )}

              <ContactForm onSubmit={handleContactSubmit} />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video bg-decos-slate flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-decos-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Our Facility</h3>
                <p className="text-decos-clean">
                  Interactive map would be integrated here with actual location coordinates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};