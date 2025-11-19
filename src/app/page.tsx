import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardFooter, CardHeader } from '@/components/ui/Card';

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
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Products
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

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Range</h2>
              <p className="text-lg text-neutral-steel">
                Comprehensive piping solutions for every application, from residential plumbing to industrial infrastructure.
              </p>
            </div>
            <Link href="/products" className="hidden md:block">
              <Button variant="ghost" rightIcon={<span>→</span>}>View All Products</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Pressure Pipes',
                image: '/assets/pressure-pipes.jpg', // Placeholder path
                desc: 'High-performance pipes for water supply and distribution networks.',
              },
              {
                title: 'Drainage Systems',
                image: '/assets/drainage.jpg', // Placeholder path
                desc: 'Efficient waste water management solutions for modern buildings.',
              },
              {
                title: 'Electrical Conduits',
                image: '/assets/conduit.jpg', // Placeholder path
                desc: 'Safe and durable protection for electrical wiring and cables.',
              },
            ].map((category, index) => (
              <Card key={index} hover className="overflow-hidden group cursor-pointer">
                <div className="h-48 bg-neutral-soft relative">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-light text-4xl font-bold bg-neutral-100">
                    {category.title[0]}
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold group-hover:text-technical-blue transition-colors">{category.title}</h3>
                </CardHeader>
                <CardBody className="pt-0">
                  <p className="text-neutral-steel mb-4">{category.desc}</p>
                </CardBody>
                <CardFooter className="bg-transparent border-t-0 pt-0 pb-6">
                  <span className="text-decos-gold font-semibold text-sm group-hover:underline">Learn more →</span>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/products">
              <Button variant="outline" className="w-full">View All Products</Button>
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
