'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-decos-slate shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-decos-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6 text-decos-clean">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@decos.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/quote"
                className="bg-decos-gold text-decos-charcoal px-4 py-1 rounded text-sm font-medium hover:bg-yellow-400 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-decos-gold p-2 rounded-lg mr-3">
              <div className="w-8 h-8 bg-decos-charcoal rounded flex items-center justify-center">
                <span className="text-decos-gold font-bold text-lg">D</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-decos-gold">DECOS</h1>
              <p className="text-xs text-decos-clean">PVC Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-decos-clean hover:text-decos-gold font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-decos-gold transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Search & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/search"
              className="p-2 text-decos-clean hover:text-decos-gold transition-colors"
            >
              <Search className="h-5 w-5" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-decos-clean hover:text-decos-gold transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-decos-charcoal border-t border-decos-gray"
          >
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-decos-clean hover:text-decos-gold hover:bg-decos-slate rounded-md font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/quote"
                className="block bg-decos-gold text-decos-charcoal px-3 py-2 rounded-md text-center font-medium hover:bg-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
