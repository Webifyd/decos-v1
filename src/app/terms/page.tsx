import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Card, CardBody } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Decos PVC Solutions',
  description: 'Terms and conditions for using Decos services and products.',
};

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-neutral-light max-w-2xl">
            Terms and conditions for using our services and products.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg text-neutral-charcoal">
            <p className="lead">
              Welcome to Decos PVC Solutions. These Terms of Service ("Terms") govern your use of our website https://decos.ae and the purchase of our products and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our website.
            </p>

            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing this website, you confirm that you are at least 18 years old or accessing the site under the supervision of a parent or guardian. You agree to comply with all applicable laws and regulations of the United Arab Emirates.
            </p>

            <h3>2. Use of the Website</h3>
            <p>You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.</p>

            <h3>3. Intellectual Property</h3>
            <p>
              All content included on this website, such as text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Decos PVC Solutions or its content suppliers and is protected by UAE and international copyright laws. The compilation of all content on this website is the exclusive property of Decos PVC Solutions.
            </p>

            <h3>4. Product Information and Availability</h3>
            <p>
              We strive to ensure that the information on our website is accurate, complete, and up-to-date. However, we do not warrant that product descriptions or other content is error-free. Prices and availability of products are subject to change without notice.
            </p>

            <h3>5. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by applicable law, Decos PVC Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the website; (b) any conduct or content of any third party on the website; or (c) unauthorized access, use, or alteration of your transmissions or content.
            </p>

            <h3>6. Governing Law and Dispute Resolution</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any dispute arising out of or in connection with these Terms, including any question regarding their existence, validity, or termination, shall be subject to the exclusive jurisdiction of the courts of the UAE.
            </p>

            <h3>7. Changes to Terms</h3>
            <p>
              We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the website. Your continued use of the website after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h3>8. Contact Information</h3>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>{COMPANY_INFO.fullName}</strong><br />
              {COMPANY_INFO.location}<br />
              Email: {COMPANY_INFO.email}<br />
              Phone: {COMPANY_INFO.phone}
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
