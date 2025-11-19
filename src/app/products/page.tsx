import React from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-decos-clean py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-decos-charcoal mb-8">
          Our Products
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-decos-gray mb-4">
            Products page coming soon. Browse our categories to learn more about our PVC solutions.
          </p>
          <Link
            href="/"
            className="text-decos-blue hover:text-decos-gold font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
