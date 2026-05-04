'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import FormInput from '@/components/forms/FormInput';
import FormTextarea from '@/components/forms/FormTextarea';
import FormSelect from '@/components/forms/FormSelect';
import FormCheckbox from '@/components/forms/FormCheckbox';

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  service: string;
  message: string;
  budget: string;
  timeline: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

function ContactPageContent() {
  const searchParams = useSearchParams();
  const contactType = searchParams.get('type') || 'general';
  const isConsultation = contactType === 'consultation';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: '',
    budget: '',
    timeline: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'website-development', label: 'Website Development' },
    { value: 'online-forms-automation', label: 'Online Forms & Automation' },
    { value: 'website-fixes-support', label: 'Website Fixes & Technical Support' },
    { value: 'ngo-nonprofit-websites', label: 'NGO & Nonprofit Websites' },
    { value: 'research-reporting', label: 'Online Research & Reporting' },
  ];

  const budgetOptions = [
    { value: '', label: 'Select budget range' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-20000', label: '$10,000 - $20,000' },
    { value: '20000+', label: '$20,000+' },
    { value: 'retainer', label: 'Monthly retainer' },
    { value: 'discuss', label: 'Let\'s discuss' },
  ];

  const timelineOptions = [
    { value: '', label: 'Select timeline' },
    { value: 'asap', label: 'As soon as possible' },
    { value: '1-month', label: '1 month' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-months+', label: '6+ months' },
    { value: 'flexible', label: 'Flexible' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization name is required';
    }

    if (isConsultation && !formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details (minimum 10 characters)';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must consent to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        service: '',
        message: '',
        budget: '',
        timeline: '',
        consent: false,
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {isConsultation ? 'Book a Free Consultation' : 'Contact Us'}
            </h1>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              {isConsultation 
                ? 'Let\'s discuss your specific challenges and what\'s possible for your organization. No obligation, just expert advice.'
                : 'Get in touch with my team. We\'re here to help with your digital systems needs.'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-primary-500" />
              <h3 className="font-semibold text-neutral-900">Email</h3>
            </div>
            <p className="text-neutral-700 break-words">DigitalGrowthStudio@outlook.com</p>
            <p className="text-sm text-neutral-500 mt-1">We respond within 24 hours</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="w-5 h-5 text-primary-500" />
              <h3 className="font-semibold text-neutral-900">Phone</h3>
            </div>
            <p className="text-neutral-700">+1 (945) 391-1924</p>
            <p className="text-sm text-neutral-500 mt-1">Mon-Fri, 9AM-5PM WAT</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-5 h-5 text-primary-500" />
              <h3 className="font-semibold text-neutral-900">WhatsApp</h3>
            </div>
            <p className="text-neutral-700">+1 (945) 391-1924</p>
            <p className="text-sm text-neutral-500 mt-1">Quick responses available</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Thank you for reaching out!
              </h2>
              <p className="text-neutral-700 mb-6">
                {isConsultation 
                  ? 'We\'ve received your consultation request and will contact you within 24 hours to schedule your free consultation.'
                  : 'We\'ve received your message and will get back to you within 24 hours.'
                }
              </p>
              <Link 
                href="/" 
                className="inline-block px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onValueChange={(value) => handleChange('name', value)}
                    error={errors.name}
                    required
                  />
                  <FormInput
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onValueChange={(value) => handleChange('email', value)}
                    error={errors.email}
                    required
                  />
                  <FormInput
                    label="Phone Number *"
                    name="phone"
                    value={formData.phone}
                    onValueChange={(value) => handleChange('phone', value)}
                    error={errors.phone}
                    required
                  />
                  <FormInput
                    label="Organization Name *"
                    name="organization"
                    value={formData.organization}
                    onValueChange={(value) => handleChange('organization', value)}
                    error={errors.organization}
                    required
                  />
                </div>
              </div>

              {/* Service Selection (for consultations) */}
              {isConsultation && (
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Service Interest</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormSelect
                      label="Service of Interest *"
                      name="service"
                      value={formData.service}
                      onValueChange={(value) => handleChange('service', value)}
                      options={serviceOptions}
                      error={errors.service}
                    />
                    <FormSelect
                      label="Budget Range"
                      name="budget"
                      value={formData.budget}
                      onValueChange={(value) => handleChange('budget', value)}
                      options={budgetOptions}
                    />
                  </div>
                  <div className="mt-6">
                    <FormSelect
                      label="Timeline"
                      name="timeline"
                      value={formData.timeline}
                      onValueChange={(value) => handleChange('timeline', value)}
                      options={timelineOptions}
                    />
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  {isConsultation ? 'Tell us about your project' : 'Your Message'}
                </h3>
                <FormTextarea
                  label={isConsultation ? 'Describe your current challenges and what you\'re trying to achieve *' : 'How can we help you? *'}
                  name="message"
                  value={formData.message}
                  onValueChange={(value) => handleChange('message', value)}
                  error={errors.message}
                  rows={6}
                  required
                />
              </div>

              {/* Consent */}
              <div>
                <FormCheckbox
                  label="I consent to be contacted via email, phone, or WhatsApp regarding my inquiry."
                  name="consent"
                  checked={formData.consent}
                  onValueChange={(value) => handleChange('consent', value)}
                  error={errors.consent}
                />
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-700">
                    Something went wrong. Please try again or contact us directly at DigitalGrowthStudio@outlook.com
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg transition-all duration-200 ease-in-out hover:bg-primary-600 hover:shadow-lg active:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    isConsultation ? 'Book Free Consultation' : 'Send Message'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Alternative Contact */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="text-center bg-neutral-100 rounded-lg p-8">
          <h3 className="text-lg font-semibold text-neutral-900 mb-3">
            Prefer to talk directly?
          </h3>
          <p className="text-neutral-700 mb-4">
            Feel free to reach out via WhatsApp or call us directly for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/19453911924"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+19453911924"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
