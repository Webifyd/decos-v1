import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-charcoal text-neutral-light border-t border-neutral-steel/20">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Column */}
          <div className="space-y-4">
            <div className="relative h-8 w-24">
              <Image
                src="/assets/Decos_Logo.svg"
                alt="Decos Logo"
                fill
                className="object-contain object-left opacity-90"
              />
            </div>
            <p className="text-sm text-neutral-steel max-w-xs">
              Connecting solutions, building tomorrow. Leading manufacturer of high-quality PVC pipes and fittings for industrial applications.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-neutral-clean font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories/ppr-fittings" className="hover:text-decos-gold transition-colors">PPR Fittings</Link></li>
              <li><Link href="/categories/ppr-pipes" className="hover:text-decos-gold transition-colors">PPR Pipes</Link></li>
              <li><Link href="/categories/upvc-pipes" className="hover:text-decos-gold transition-colors">UPVC Pipes</Link></li>
              <li><Link href="/categories/upvc-fittings" className="hover:text-decos-gold transition-colors">UPVC Fittings</Link></li>
              <li><Link href="/categories/upvc-pressure-pipes" className="hover:text-decos-gold transition-colors">UPVC Pressure Pipes</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-neutral-clean font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-decos-gold transition-colors">About Us</Link></li>
              <li><Link href="/sustainability" className="hover:text-decos-gold transition-colors">Sustainability</Link></li>
              <li><Link href="/careers" className="hover:text-decos-gold transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-decos-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-neutral-clean font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-neutral-steel">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Industrial Park,<br />Manufacturing City, MC 12345</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+1234567890" className="hover:text-decos-gold transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@decos.com" className="hover:text-decos-gold transition-colors">info@decos.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-steel/20 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-steel">
          <p>&copy; {currentYear} Decos Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-decos-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-decos-gold transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-decos-gold transition-colors">Sitemap</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
