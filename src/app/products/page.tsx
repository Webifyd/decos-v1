import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Card, CardBody, CardFooter, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ProductsPage() {
  const categories = [
    {
      id: 'pressure-pipes',
      title: 'Pressure Pipes',
      description: 'High-performance uPVC pipes for potable water supply and distribution networks.',
      items: ['Class 1 to 5 Pipes', 'Blue Casing Pipes', 'Column Pipes']
    },
    {
      id: 'drainage-systems',
      title: 'Drainage Systems',
      description: 'SWR pipes and fittings for efficient waste water and rainwater management.',
      items: ['SWR Pipes', 'SWR Fittings', 'Underground Drainage']
    },
    {
      id: 'electrical',
      title: 'Electrical Conduits',
      description: 'Flame retardant conduit pipes for safe electrical wiring protection.',
      items: ['FRLS Conduits', 'Bend & Junction Boxes', 'Casing & Capping']
    },
    {
      id: 'fittings',
      title: 'Plumbing Fittings',
      description: 'Comprehensive range of durable fittings for all piping applications.',
      items: ['Elbows & Tees', 'Couplers & Reducers', 'End Caps & Plugs']
    },
    {
      id: 'industrial',
      title: 'Industrial Series',
      description: 'Heavy-duty piping solutions for chemical and industrial processing plants.',
      items: ['CPVC Pipes', 'Industrial Valves', 'High Pressure Fittings']
    },
    {
      id: 'agriculture',
      title: 'Agriculture',
      description: 'Reliable irrigation and borewell solutions for agricultural needs.',
      items: ['Agri Pipes', 'Suction Hoses', 'Drip Irrigation']
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-clean">
      {/* Header */}
      <section className="bg-industrial-slate text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-neutral-light max-w-2xl">
            Engineered for durability and performance, our comprehensive range of PVC solutions meets the highest international standards.
          </p>
        </Container>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} hover className="flex flex-col h-full">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-neutral-charcoal">{category.title}</h2>
                </CardHeader>
                <CardBody className="flex-grow">
                  <p className="text-neutral-steel mb-6">{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-neutral-charcoal">
                        <span className="w-1.5 h-1.5 bg-decos-gold rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardBody>
                <CardFooter>
                  <Link href={`/products/${category.id}`} className="w-full">
                    <Button variant="outline" className="w-full">View Catalog</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-neutral-soft">
        <Container className="text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-neutral-steel mb-8 max-w-2xl mx-auto">
            Our engineering team can help design and manufacture custom piping solutions for specialized industrial applications.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">Contact Engineering Team</Button>
          </Link>
        </Container>
      </section>
    </div>
  );
}
