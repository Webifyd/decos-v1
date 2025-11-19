import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardFooter, CardHeader } from '@/components/ui/Card';
import { CheckCircle } from 'lucide-react';
import categoriesData from '@/data/categories.json';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-industrial-slate text-neutral-clean overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Abstract pattern or background image could go here */}
          <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <Container className="relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              Connecting Solutions, <br />
              <span className="text-decos-gold">Building Tomorrow</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-light mb-10 max-w-2xl leading-relaxed">
              Decos delivers innovative PVC pipe solutions that connect communities and build sustainable infrastructure with industrial precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/categories">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Categories
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-industrial-slate">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        {/* Decorative flow line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-decos-gold via-industrial-red to-technical-blue"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-clean">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for Excellence</h2>
            <p className="text-lg text-neutral-steel">
              Our commitment to quality and innovation ensures that every Decos product meets the highest standards of performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industrial Precision',
                description: 'Manufactured with exacting tolerances for leak-proof connections and superior durability.',
                icon: '⚙️',
              },
              {
                title: 'Sustainable Materials',
                description: 'Eco-friendly PVC formulations that reduce environmental impact without compromising strength.',
                icon: '🌱',
              },
              {
                title: 'Global Standards',
                description: 'Certified to meet international quality and safety standards for all applications.',
                icon: '🌍',
              },
            ].map((feature, index) => (
              <Card key={index} hover className="h-full border-t-4 border-t-decos-gold">
                <CardBody className="flex flex-col items-center text-center h-full">
                  <div className="text-4xl mb-6 bg-decos-gold/10 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-neutral-steel">{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Categories</h2>
              <p className="text-lg text-neutral-steel">
                Comprehensive PPR and UPVC piping solutions for every application, from residential plumbing to industrial infrastructure.
              </p>
            </div>
            <Link href="/categories" className="hidden md:block">
              <Button variant="ghost" rightIcon={<span>→</span>}>View All Categories</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(() => {
              // Feature 3 specific categories: PPR Pipes, UPVC Pipes, UPVC Pressure Pipes
              const featuredIds = ['ppr-pipes', 'upvc-pipes', 'upvc-pressure-pipes'];
              const data = categoriesData as Record<string, any>;

              return featuredIds.map((id) => {
                const category = data[id];
                const name = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

                return (
                  <Link key={id} href={`/categories/${id}`} className="group">
                    <Card hover className="overflow-hidden h-full">
                      {/* Image Placeholder */}
                      <div className="h-48 bg-gradient-to-br from-decos-gold/10 to-technical-blue/10 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl font-bold text-neutral-charcoal/20">{name[0]}</div>
                            <p className="text-xs text-neutral-steel mt-2">Image Coming Soon</p>
                          </div>
                        </div>
                      </div>

                      <CardHeader>
                        <h3 className="text-xl font-bold group-hover:text-decos-gold transition-colors">
                          {name}
                        </h3>
                      </CardHeader>

                      <CardBody className="pt-0 flex-grow">
                        <p className="text-neutral-steel mb-4 line-clamp-3">
                          {category.enhancedDescription}
                        </p>

                        {/* Key Stats */}
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-neutral-steel">
                            <CheckCircle className="h-4 w-4 text-solution-green mr-2 flex-shrink-0" />
                            <span>{category.keyFeatures?.length || 0} key features</span>
                          </div>
                          <div className="flex items-center text-sm text-neutral-steel">
                            <CheckCircle className="h-4 w-4 text-technical-blue mr-2 flex-shrink-0" />
                            <span>{Object.keys(category.applications || {}).length} application types</span>
                          </div>
                        </div>
                      </CardBody>

                      <CardFooter className="bg-transparent border-t-0 pt-0 pb-6">
                        <span className="text-decos-gold font-semibold text-sm group-hover:underline inline-flex items-center">
                          View Details
                          <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </CardFooter>
                    </Card>
                  </Link>
                );
              });
            })()}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/categories">
              <Button variant="outline" className="w-full">View All Categories</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industrial-slate text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-decos-gold opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-technical-blue opacity-10 rounded-full blur-3xl"></div>

        <Container className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-neutral-light mb-10 max-w-2xl mx-auto">
            Get in touch with our team of experts to find the perfect piping solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Request a Quote
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-industrial-slate">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
