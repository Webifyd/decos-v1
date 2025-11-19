import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Award, Zap, Users } from 'lucide-react';
import categoriesData from '@/data/categories.json';

export default function Home() {
  const heroFeatures = [
    'Industrial Grade Quality',
    'Certified & Tested',
    'Fast Delivery',
    'Expert Support',
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'All Decos products meet the highest industry standards and certifications.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times to keep your projects on schedule.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our technical team provides comprehensive support and guidance.',
    },
  ];

  // Convert categories object to array
  const categories = Object.entries(categoriesData).map(([id, data]: [string, any]) => ({
    id,
    name: id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: data.enhancedDescription,
    ...data,
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-decos-slate to-decos-charcoal text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional{' '}
                <span className="text-decos-gold">PVC Solutions</span> for
                Industry
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Decos delivers premium PVC pipes, fittings, and accessories
                engineered for demanding industrial applications. Trusted by
                professionals worldwide.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {heroFeatures.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-decos-green mr-2" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-decos-gold text-decos-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center"
                >
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/quote"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-decos-charcoal transition-colors inline-flex items-center justify-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold text-decos-gold mb-4">
                  Why Choose Decos?
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <IconComponent className="h-6 w-6 text-decos-gold mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">{benefit.title}</h4>
                          <p className="text-gray-200 text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-decos-clean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-decos-charcoal mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-decos-gray max-w-2xl mx-auto">
              Explore our comprehensive range of PVC solutions designed for
              various industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-decos-blue to-decos-slate"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-decos-charcoal mb-2 group-hover:text-decos-gold transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-decos-gray mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-decos-slate">
                      View Details
                    </span>
                    <Link href={`/categories/${category.id}`}>
                      <button className="border border-decos-blue text-decos-blue px-4 py-2 rounded hover:bg-decos-blue hover:text-white transition-colors inline-flex items-center text-sm">
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-decos-slate text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-decos-gold mb-2">
                25+
              </div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-decos-gold mb-2">
                500+
              </div>
              <div className="text-sm text-gray-300">Products</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-decos-gold mb-2">
                10K+
              </div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-decos-gold mb-2">
                50+
              </div>
              <div className="text-sm text-gray-300">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-decos-gold to-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-decos-charcoal mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-decos-slate mb-8 max-w-2xl mx-auto">
              Contact our team of experts to discuss your PVC pipe and fitting
              requirements. We're here to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-decos-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/quote"
                className="border-2 border-decos-charcoal text-decos-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-decos-charcoal hover:text-white transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
