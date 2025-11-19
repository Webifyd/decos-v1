import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-decos-clean py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-decos-charcoal mb-8">
          About Decos
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-decos-gray mb-4">
            Decos is a leading manufacturer of high-quality PVC pipes and fittings for industrial and commercial applications.
            With over 25 years of experience, we've been trusted by professionals worldwide.
          </p>
          <p className="text-decos-gray">
            Our commitment to quality, innovation, and customer service has made us a preferred choice for
            construction, manufacturing, and industrial sectors across 50+ countries.
          </p>
        </div>
      </div>
    </div>
  );
}
