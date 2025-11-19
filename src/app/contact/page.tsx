import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-decos-clean py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-decos-charcoal mb-8">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-decos-slate mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-decos-gold mr-3 mt-1" />
                <div>
                  <p className="font-semibold text-decos-charcoal">Address</p>
                  <p className="text-decos-gray">
                    123 Industrial Avenue<br />
                    Manufacturing District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-decos-gold mr-3 mt-1" />
                <div>
                  <p className="font-semibold text-decos-charcoal">Phone</p>
                  <p className="text-decos-gray">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-decos-gold mr-3 mt-1" />
                <div>
                  <p className="font-semibold text-decos-charcoal">Email</p>
                  <p className="text-decos-gray">info@decos.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-decos-slate mb-6">
              Send us a Message
            </h2>
            <p className="text-decos-gray mb-4">
              Contact form coming soon. For now, please reach out via phone or email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
