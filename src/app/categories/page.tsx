import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Card, CardBody } from '@/components/ui/Card';
import { CheckCircle } from 'lucide-react';
import categoriesData from '@/data/categories.json';

export default function CategoriesPage() {
  // Transform categories.json object into array
  const categories = Object.entries(categoriesData).map(([id, data]: [string, any]) => ({
    id,
    name: id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: data.enhancedDescription,
    featureCount: data.keyFeatures?.length || 0,
    applicationTypes: Object.keys(data.applications || {}).length,
  }));

  return (
    <div className="min-h-screen bg-neutral-clean">
      {/* Hero Section */}
      <section className="bg-industrial-slate text-white py-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Product Categories
            </h1>
            <p className="text-xl text-neutral-light">
              Professional-grade PPR and UPVC piping solutions engineered for superior performance across residential, commercial, and industrial applications.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group"
              >
                <Card hover className="h-full border-t-4 border-t-decos-gold transition-all duration-300 group-hover:shadow-xl">
                  <CardBody className="p-6 flex flex-col h-full">
                    {/* Category Name */}
                    <h2 className="text-2xl font-bold text-neutral-charcoal mb-4 group-hover:text-decos-gold transition-colors">
                      {category.name}
                    </h2>

                    {/* Description */}
                    <p className="text-neutral-steel mb-6 flex-grow line-clamp-3">
                      {category.description}
                    </p>

                    {/* Stats */}
                    <div className="space-y-2 pt-4 border-t border-neutral-soft">
                      <div className="flex items-center text-sm text-neutral-steel">
                        <CheckCircle className="h-4 w-4 text-solution-green mr-2 flex-shrink-0" />
                        <span>{category.featureCount} key features</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-steel">
                        <CheckCircle className="h-4 w-4 text-technical-blue mr-2 flex-shrink-0" />
                        <span>{category.applicationTypes} application types</span>
                      </div>
                    </div>

                    {/* View Details Link */}
                    <div className="mt-6 flex items-center text-technical-blue font-semibold group-hover:text-decos-gold transition-colors">
                      <span>View Details</span>
                      <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-decos-gold to-decos-gold-light">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-charcoal mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-industrial-slate mb-8">
              Our team can help you select the perfect piping solution for your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-industrial-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-industrial-red-dark transition-colors min-h-[44px] inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="border-2 border-neutral-charcoal text-neutral-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-neutral-charcoal hover:text-white transition-colors min-h-[44px] inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
