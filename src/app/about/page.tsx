import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Card, CardBody } from '@/components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Decos PVC Solutions',
  description: 'For over two decades, Decos has been at the forefront of PVC piping innovation, delivering reliable solutions that connect communities and industries worldwide.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-clean">
      {/* Hero */}
      <section className="bg-industrial-slate text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Building the Future of Infrastructure</h1>
            <p className="text-xl text-neutral-light leading-relaxed">
              For over two decades, Decos has been at the forefront of PVC piping innovation, delivering reliable solutions that connect communities and industries worldwide.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-charcoal">Our Mission</h2>
              <p className="text-lg text-neutral-steel mb-6">
                To manufacture high-quality, sustainable piping solutions that enhance the efficiency and safety of water distribution and industrial systems globally.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-neutral-charcoal">Our Vision</h2>
              <p className="text-lg text-neutral-steel">
                To be the global benchmark for quality and innovation in the polymer piping industry, driving sustainable development through engineering excellence.
              </p>
            </div>
            <div className="relative h-80 bg-neutral-soft rounded-lg overflow-hidden">
              {/* Placeholder for office/factory image */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral-light text-6xl font-bold bg-neutral-100">
                DECOS
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-neutral-clean">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Quality', desc: 'Uncompromising standards in every product we manufacture.' },
              { title: 'Innovation', desc: 'Continuously improving our technology and processes.' },
              { title: 'Integrity', desc: 'Honest and transparent relationships with all stakeholders.' },
              { title: 'Sustainability', desc: 'Committed to environmentally responsible manufacturing.' }
            ].map((value, idx) => (
              <Card key={idx} className="text-center">
                <CardBody>
                  <h3 className="text-xl font-bold mb-3 text-decos-gold">{value.title}</h3>
                  <p className="text-neutral-steel">{value.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 bg-industrial-slate text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Years Experience', value: '25+' },
              { label: 'Countries Served', value: '50+' },
              { label: 'Product Categories', value: '5' },
              { label: 'Team Members', value: '200+' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold text-decos-gold mb-2">{stat.value}</div>
                <div className="text-neutral-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
