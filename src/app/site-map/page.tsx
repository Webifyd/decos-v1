import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Card, CardBody } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap - Decos PVC Solutions',
  description: 'Navigate through all pages on the Decos website.',
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-neutral-clean">
      <section className="bg-industrial-slate text-white py-16">
        <Container>
          <Link
            href="/"
            className="text-decos-gold hover:text-decos-gold-light inline-flex items-center mb-6 min-h-[44px]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
          <p className="text-xl text-neutral-light max-w-2xl">
            Navigate through all pages on our website.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardBody className="p-8">
                  <h2 className="text-2xl font-bold text-neutral-charcoal mb-6 border-b border-neutral-steel pb-2">
                    Main Pages
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/" className="text-lg text-decos-gold hover:text-decos-gold-dark font-semibold">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-lg text-neutral-charcoal hover:text-decos-gold transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories" className="text-lg text-neutral-charcoal hover:text-decos-gold transition-colors">
                        Product Categories
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-lg text-neutral-charcoal hover:text-decos-gold transition-colors">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/quote" className="text-lg text-neutral-charcoal hover:text-decos-gold transition-colors">
                        Get a Quote
                      </Link>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-8">
                  <h2 className="text-2xl font-bold text-neutral-charcoal mb-6 border-b border-neutral-steel pb-2">
                    Legal & Support
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/privacy" className="text-lg text-neutral-charcoal hover:text-decos-gold transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="text-lg text-neutral-charcoal hover:text-decos-gold transition-colors">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/site-map" className="text-lg text-neutral-charcoal hover:text-decos-gold transition-colors">
                        Sitemap
                      </Link>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
