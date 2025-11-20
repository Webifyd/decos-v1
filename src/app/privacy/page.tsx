import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Card, CardBody } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
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
          <div className="max-w-4xl mx-auto prose prose-lg text-neutral-charcoal">
            <p className="lead">
              At Decos PVC Solutions ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website https://decos.ae and use our services, in compliance with the UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (PDPL).
            </p>

            <h3>1. Information We Collect</h3>
            <p>We may collect the following types of personal data:</p>
            <ul>
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and other contact details you provide when you fill out forms or contact us.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and browsing behavior collected through cookies and similar technologies.</li>
            </ul>

            <h3>2. Purpose of Collection</h3>
            <p>We collect and process your data for the following legitimate purposes:</p>
            <ul>
              <li>To provide and improve our services and website functionality.</li>
              <li>To communicate with you regarding your inquiries, quotes, or orders.</li>
              <li>To send you marketing communications (only with your explicit consent).</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>

            <h3>3. Consent</h3>
            <p>
              By using our website and providing your personal data, you consent to the processing of your information as described in this policy. You have the right to withdraw your consent at any time by contacting us.
            </p>

            <h3>4. Sharing of Information</h3>
            <p>
              We do not sell or rent your personal data to third parties. We may share your information with:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website and conducting our business, subject to confidentiality agreements.</li>
              <li><strong>Legal Authorities:</strong> If required by law or to protect our rights and safety.</li>
            </ul>
            <p>
              <strong>Cross-Border Transfers:</strong> If we transfer your data outside the UAE, we ensure adequate protection measures are in place in accordance with UAE laws.
            </p>

            <h3>5. Your Rights</h3>
            <p>Under the UAE PDPL, you have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("Right to be Forgotten").</li>
              <li><strong>Right to Restrict Processing:</strong> Request to limit how we use your data.</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data to another controller.</li>
              <li><strong>Right to Object:</strong> Object to the processing of your data for specific purposes.</li>
            </ul>
            <p>To exercise these rights, please contact us at {COMPANY_INFO.email}.</p>

            <h3>6. Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h3>7. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically.
            </p>

            <h3>8. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
