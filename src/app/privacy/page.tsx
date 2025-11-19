import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Card, CardBody } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Decos PVC Solutions',
  description: 'Learn about how Decos protects your privacy and handles your personal information.',
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-neutral-light max-w-2xl">
            Your privacy and data protection are important to us.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card className="border-l-4 border-l-technical-blue">
              <CardBody className="p-8 text-center">
                <div className="text-6xl mb-6">🔒</div>
                <h2 className="text-2xl font-bold text-neutral-charcoal mb-4">
                  Coming Soon
                </h2>
                <p className="text-lg text-neutral-steel mb-8">
                  We're preparing our comprehensive privacy policy. Your data security and privacy are our top priorities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-decos-gold text-neutral-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-decos-gold-dark transition-colors min-h-[44px] inline-flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/"
                    className="border-2 border-neutral-charcoal text-neutral-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-neutral-charcoal hover:text-white transition-colors min-h-[44px] inline-flex items-center justify-center"
                  >
                    Back to Home
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
