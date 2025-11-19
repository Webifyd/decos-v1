import React from 'react';

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-decos-clean py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-decos-charcoal mb-8">
          Request a Quote
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-decos-gray mb-4">
            Quote request form coming soon. Please contact us directly for pricing information.
          </p>
          <a
            href="mailto:info@decos.com"
            className="text-decos-blue hover:text-decos-gold font-semibold"
          >
            Email us at info@decos.com
          </a>
        </div>
      </div>
    </div>
  );
}
