import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-decos-charcoal text-decos-clean">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-decos-gold p-2 rounded-lg mr-3">
                <div className="w-8 h-8 bg-decos-charcoal rounded flex items-center justify-center">
                  <span className="text-decos-gold font-bold text-lg">D</span>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-decos-gold">DECOS</h2>
                <p className="text-xs text-decos-gray">PVC Solutions</p>
              </div>
            </div>
            <p className="text-decos-gray">
              Leading manufacturer of high-quality PVC pipes and fittings for industrial and commercial applications. Trusted by professionals worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-decos-gray hover:text-decos-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-decos-gray hover:text-decos-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-decos-gray hover:text-decos-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-decos-gray hover:text-decos-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-decos-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-decos-gray hover:text-decos-gold transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-decos-gray hover:text-decos-gold transition-colors">Products</Link></li>
              <li><Link to="/categories" className="text-decos-gray hover:text-decos-gold transition-colors">Categories</Link></li>
              <li><Link to="/about" className="text-decos-gray hover:text-decos-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-decos-gray hover:text-decos-gold transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="text-decos-gray hover:text-decos-gold transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-decos-gold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=pipes" className="text-decos-gray hover:text-decos-gold transition-colors">PVC Pipes</Link></li>
              <li><Link to="/products?category=fittings" className="text-decos-gray hover:text-decos-gold transition-colors">Pipe Fittings</Link></li>
              <li><Link to="/products?category=valves" className="text-decos-gray hover:text-decos-gold transition-colors">Valves</Link></li>
              <li><Link to="/products?category=accessories" className="text-decos-gray hover:text-decos-gold transition-colors">Accessories</Link></li>
              <li><Link to="/products?category=tools" className="text-decos-gray hover:text-decos-gold transition-colors">Tools</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-decos-gold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-decos-gray mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-decos-gray">
                  123 Industrial Avenue<br />
                  Manufacturing District<br />
                  City, State 12345
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-decos-gray mr-3" />
                <p className="text-decos-gray">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-decos-gray mr-3" />
                <p className="text-decos-gray">info@decos.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-decos-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-decos-gray text-sm">
              © {currentYear} Decos PVC Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-decos-gray hover:text-decos-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-decos-gray hover:text-decos-gold text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-decos-gray hover:text-decos-gold text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};