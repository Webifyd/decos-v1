'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardBody } from '@/components/ui/Card';
import { COMPANY_INFO } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-clean">
      <section className="bg-industrial-slate text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-neutral-light max-w-2xl">
            Have a question or need a quote? Our team is ready to assist you with your project requirements.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardBody>
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="First Name" placeholder="John" />
                      <Input label="Last Name" placeholder="Doe" />
                    </div>
                    <Input label="Email Address" type="email" placeholder="john@example.com" />
                    <Input label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
                    <Input label="Subject" placeholder="Product Inquiry" />

                    <div>
                      <label className="block text-sm font-medium text-neutral-charcoal mb-2">Message</label>
                      <textarea
                        className="block w-full px-4 py-3 rounded-md border-2 border-neutral-light bg-neutral-pure text-neutral-charcoal focus:outline-none focus:border-technical-blue focus:ring-2 focus:ring-technical-blue/20 min-h-[144px]"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-neutral-steel mb-8">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-decos-gold">
                    <CardBody className="flex items-start">
                      <span className="text-2xl mr-4">📍</span>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Location</h3>
                        <p className="text-neutral-steel">
                          {COMPANY_INFO.address.street}, {COMPANY_INFO.address.area}<br />
                          {COMPANY_INFO.address.city}<br />
                          {COMPANY_INFO.address.country}
                        </p>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="border-l-4 border-l-decos-gold">
                    <CardBody className="flex items-start">
                      <span className="text-2xl mr-4">📞</span>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Phone</h3>
                        <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-neutral-steel hover:text-decos-gold transition-colors">
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="border-l-4 border-l-decos-gold">
                    <CardBody className="flex items-start">
                      <span className="text-2xl mr-4">✉️</span>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Email</h3>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-neutral-steel hover:text-decos-gold transition-colors">
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
