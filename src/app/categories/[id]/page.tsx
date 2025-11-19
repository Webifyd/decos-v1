import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import categoriesData from '@/data/categories.json';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const categoryData = (categoriesData as any)[id];
  const categoryName = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  if (!categoryData) {
    return {
      title: 'Category Not Found - Decos',
    };
  }

  return {
    title: `${categoryName} - Decos PVC Solutions`,
    description: categoryData.enhancedDescription || `Professional-grade ${categoryName} for residential, commercial, and industrial applications.`,
  };
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { id } = await params;
  const categoryData = (categoriesData as any)[id];

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-neutral-clean py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-neutral-charcoal mb-4">
            Category Not Found
          </h1>
          <Link
            href="/categories"
            className="text-technical-blue hover:text-decos-gold inline-flex items-center min-h-[44px]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  const categoryName = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-neutral-clean">
      {/* Hero Image Placeholder */}
      <section className="bg-gradient-to-br from-decos-gold/20 via-technical-blue/20 to-industrial-slate/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="text-8xl font-bold text-neutral-charcoal/10 mb-4">
              {categoryName[0]}
            </div>
            <p className="text-neutral-steel text-lg">
              {/* Image placeholder - category image will be provided later */}
              Category Image Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* Header */}
      <div className="bg-gradient-to-r from-industrial-slate to-neutral-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/categories"
            className="text-decos-gold hover:text-decos-gold-light inline-flex items-center mb-6 min-h-[44px]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryName}</h1>
          <p className="text-xl text-neutral-light max-w-3xl">
            {categoryData.enhancedDescription}
          </p>
        </div>
      </div>

      {/* Technical Specs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-charcoal mb-8">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categoryData.technicalSpecs).map(([key, value]) => (
              <div key={key} className="bg-neutral-clean p-4 rounded-lg">
                <h3 className="font-semibold text-industrial-slate mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-neutral-steel">
                  {Array.isArray(value) ? value.join(', ') : String(value)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-neutral-clean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-charcoal mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryData.keyFeatures.map((feature: string, index: number) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-solution-green mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-steel">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-charcoal mb-8">
            Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(categoryData.applications).map(([type, apps]) => (
              <div key={type} className="bg-neutral-clean p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-industrial-slate mb-4 capitalize">
                  {type}
                </h3>
                <ul className="space-y-2">
                  {(apps as string[]).map((app: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-technical-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-steel text-sm">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-decos-gold to-decos-gold-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-charcoal mb-4">
            Interested in {categoryName}?
          </h2>
          <p className="text-lg text-industrial-slate mb-8">
            Contact us for more information or request a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-industrial-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-industrial-red-dark transition-colors min-h-[44px] inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
            <Link
              href="/quote"
              className="border-2 border-neutral-charcoal text-neutral-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-neutral-charcoal hover:text-white transition-colors min-h-[44px] inline-flex items-center justify-center"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
