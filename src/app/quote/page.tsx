'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { getAllCategories } from '@/lib/static-categories';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>();

  const categories = getAllCategories();

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit quote');
      }

      setSubmitStatus('success');
      reset();
    } catch (error: any) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-clean py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-charcoal mb-4">
            Request a Quote
          </h1>
          <p className="text-lg text-neutral-steel">
            Tell us about your project and we'll get back to you with a customized quote.
          </p>
        </div>

        <Card className="p-8">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-functional-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-functional-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-charcoal mb-2">
                Quote Request Received!
              </h3>
              <p className="text-neutral-steel mb-8">
                Thank you for contacting us. Our team will review your requirements and get back to you shortly.
              </p>
              <Button
                onClick={() => setSubmitStatus('idle')}
                variant="outline"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  error={errors.name?.message}
                  {...register('name', { required: 'Name is required' })}
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  error={errors.email?.message}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  error={errors.phone?.message}
                  {...register('phone')}
                />
                <div className="w-full">
                  <label className="block text-sm font-medium text-neutral-charcoal mb-1.5">
                    Project Type
                  </label>
                  <select
                    className={`
                      block w-full px-4 py-3 rounded-md border-2 bg-neutral-pure text-neutral-charcoal
                      focus:outline-none focus:ring-2 focus:ring-opacity-20
                      disabled:opacity-50 disabled:cursor-not-allowed
                      transition-colors duration-200
                      ${errors.projectType
                        ? 'border-functional-error focus:border-functional-error focus:ring-functional-error'
                        : 'border-neutral-light focus:border-technical-blue focus:ring-technical-blue'
                      }
                    `}
                    {...register('projectType', { required: 'Please select a project type' })}
                  >
                    <option value="">Select a category...</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                  {errors.projectType && (
                    <p className="mt-1.5 text-sm text-functional-error">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-neutral-charcoal mb-1.5">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className={`
                    block w-full px-4 py-3 rounded-md border-2 bg-neutral-pure text-neutral-charcoal
                    placeholder:text-neutral-steel
                    focus:outline-none focus:ring-2 focus:ring-opacity-20
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-colors duration-200
                    ${errors.message
                      ? 'border-functional-error focus:border-functional-error focus:ring-functional-error'
                      : 'border-neutral-light focus:border-technical-blue focus:ring-technical-blue'
                    }
                  `}
                  placeholder="Please describe your project requirements..."
                  {...register('message')}
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-functional-error">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 bg-functional-error/10 text-functional-error rounded-md">
                  {errorMessage}
                </div>
              )}

              <div className="flex justify-end">
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Submit Request
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}
