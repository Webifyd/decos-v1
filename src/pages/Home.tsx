import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFeaturedProducts } from '../hooks/useProducts';
import { useFeaturedCategories } from '../hooks/useCategories';
import { ProductGrid } from '../components/products/ProductGrid';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  const { products: featuredProducts, loading: productsLoading, error: productsError } = useFeaturedProducts();
  const { categories: featuredCategories, loading: categoriesLoading } = useFeaturedCategories();

  const heroFeatures = [
    'Industrial Grade Quality',
    'Certified & Tested',
    'Fast Delivery',
    'Expert Support',
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'All Decos products meet the highest industry standards and certifications.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times to keep your projects on schedule.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our technical team provides comprehensive support and guidance.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-decos-slate to-decos-charcoal text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional{' '}
                <span className="text-decos-gold">PVC Solutions</span>{' '}
                for Industry
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Decos delivers premium PVC pipes, fittings, and accessories engineered for demanding industrial applications. Trusted by professionals worldwide.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {heroFeatures.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-decos-green mr-2" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    View Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/quote">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-decos-charcoal">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold text-decos-gold mb-4">Why Choose Decos?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <benefit.icon className="h-6 w-6 text-decos-gold mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-gray-200 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-decos-clean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-decos-charcoal mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-decos-gray max-w-2xl mx-auto">
              Explore our comprehensive range of PVC solutions designed for various industrial applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {!categoriesLoading && featuredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-decos-blue to-decos-slate"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-decos-charcoal mb-2 group-hover:text-decos-gold transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-decos-gray mb-4">
                    {category.description || `Explore our ${category.name.toLowerCase()} collection`}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-decos-slate">
                      {category.productCount || 0} Products
                    </span>
                    <Link to={`/products?category=${category.id}`}>
                      <Button variant="outline" size="sm">
                        View Products
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-decos-charcoal mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-decos-gray max-w-2xl mx-auto">
              Discover our most popular PVC products, trusted by professionals across various industries.
            </p>
          </motion.div>

          <ProductGrid 
            products={featuredProducts} 
            loading={productsLoading}
            error={productsError}
          />

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="primary" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-decos-slate text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-decos-gold mb-2">25+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-decos-gold mb-2">500+</div>
              <div className="text-sm text-gray-300">Products</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-decos-gold mb-2">10K+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-decos-gold mb-2">50+</div>
              <div className="text-sm text-gray-300">Countries</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-decos-gold to-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-decos-charcoal mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-decos-slate mb-8 max-w-2xl mx-auto">
              Contact our team of experts to discuss your PVC pipe and fitting requirements. We're here to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link to="/quote">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-decos-charcoal text-decos-charcoal hover:bg-decos-charcoal hover:text-white"
                >
                  Request Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};