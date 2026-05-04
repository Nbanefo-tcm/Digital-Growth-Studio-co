'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import SectionHeader from '@/components/sections/SectionHeader';
import CTABlock from '@/components/sections/CTABlock';
import { 
  Globe, 
  Zap, 
  Headphones, 
  Heart, 
  Database, 
  Check, 
  Clock, 
  Shield
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-8 h-8 text-primary-500" />,
  Zap: <Zap className="w-8 h-8 text-primary-500" />,
  Headphones: <Headphones className="w-8 h-8 text-primary-500" />,
  Heart: <Heart className="w-8 h-8 text-accent-500" />,
  Database: <Database className="w-8 h-8 text-primary-500" />,
};

function PackagesPageContent() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState<string>('');
  const [filteredPackages, setFilteredPackages] = useState(SERVICES);

  useEffect(() => {
    const serviceId = searchParams.get('service');
    if (serviceId) {
      setSelectedService(serviceId);
      const service = SERVICES.find(s => s.slug === serviceId);
      if (service) {
        setFilteredPackages([service]);
      }
    } else {
      setFilteredPackages(SERVICES);
    }
  }, [searchParams]);

  const handleServiceChange = (serviceId: string) => {
    if (serviceId === '') {
      setSelectedService('');
      setFilteredPackages(SERVICES);
      // Update URL without service parameter
      window.history.pushState({}, '', '/packages');
    } else {
      setSelectedService(serviceId);
      const service = SERVICES.find(s => s.slug === serviceId);
      if (service) {
        setFilteredPackages([service]);
        // Update URL with service parameter
        window.history.pushState({}, '', `/packages?service=${serviceId}`);
      }
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Service Packages
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-8 leading-relaxed">
              Transparent Pricing, Clear Deliverables
            </p>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Choose the perfect package for your needs. All packages include fixed pricing, clear timelines, and comprehensive support.
            </p>
          </div>
        </div>
      </section>

      {/* Service Filter */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">Filter by Service</h2>
              <p className="text-neutral-600">Show packages for specific services or view all</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleServiceChange('')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedService === ''
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                All Services
              </button>
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceChange(service.slug)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedService === service.slug
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Display */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {filteredPackages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-600">No packages found for the selected service.</p>
            </div>
          ) : (
            filteredPackages.map((service) => (
              <div key={service.id} className="mb-16">
                {/* Service Header */}
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    {iconMap[service.icon] || <Globe className="w-12 h-12 text-primary-500" />}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    {service.description}
                  </p>
                </div>

                {/* Packages Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {service.packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`bg-white rounded-lg border-2 ${
                        pkg.name === 'Standard' || pkg.name === 'Premium'
                          ? 'border-primary-500 shadow-lg'
                          : 'border-neutral-200'
                      } p-8 relative`}
                    >
                      {/* Popular Badge */}
                      {(pkg.name === 'Standard' || pkg.name === 'Premium') && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}

                      {/* Package Header */}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-2">{pkg.name}</h3>
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-primary-600">
                            ${pkg.price.toLocaleString()}
                          </span>
                          {pkg.type === 'fixed' && <span className="text-neutral-600 ml-2">USD</span>}
                          {pkg.type === 'retainer' && <span className="text-neutral-600 ml-2">/month</span>}
                        </div>
                        <div className="flex items-center justify-center gap-2 text-neutral-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{pkg.timeline}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-neutral-900 mb-4">What's Included:</h4>
                        <ul className="space-y-3">
                          {pkg.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                              <span className="text-neutral-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={`/contact?type=consultation&service=${service.slug}&package=${pkg.name.toLowerCase().replace(' ', '-')}`}
                        className="block w-full text-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
                      >
                        Get Started
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Service Deliverables */}
                {service.deliverables && (
                  <div className="mt-12 bg-white rounded-lg p-8 border border-neutral-200">
                    <h3 className="text-xl font-bold text-neutral-900 mb-6">All Packages Include:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-primary-500 flex-shrink-0" />
                          <span className="text-neutral-700">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="Pricing Questions?"
            subtitle="TRANSPARENT PRICING"
            description="Clear answers about our pricing structure and what you can expect."
            align="center"
          />
          
          <div className="space-y-6 mt-12">
            <details className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <summary className="font-semibold text-neutral-900 cursor-pointer hover:text-primary-600 transition-colors">
                Are there any hidden fees?
              </summary>
              <p className="text-neutral-600 mt-4 leading-relaxed">
                No. All prices are fixed and include everything listed in the package. The only additional costs would be for third-party services (like hosting or domains) that you choose to purchase separately.
              </p>
            </details>
            
            <details className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <summary className="font-semibold text-neutral-900 cursor-pointer hover:text-primary-600 transition-colors">
                Can I customize a package?
              </summary>
              <p className="text-neutral-600 mt-4 leading-relaxed">
                Yes! We can customize packages to fit your specific needs. Contact us for a custom quote based on your requirements.
              </p>
            </details>
            
            <details className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <summary className="font-semibold text-neutral-900 cursor-pointer hover:text-primary-600 transition-colors">
                What payment methods do you accept?
              </summary>
              <p className="text-neutral-600 mt-4 leading-relaxed">
                We accept bank transfers, credit cards, and payment plans for larger projects. Payment terms are typically 50% upfront and 50% on completion.
              </p>
            </details>
            
            <details className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <summary className="font-semibold text-neutral-900 cursor-pointer hover:text-primary-600 transition-colors">
                Do you offer ongoing support?
              </summary>
              <p className="text-neutral-600 mt-4 leading-relaxed">
                Yes, we offer ongoing support through monthly retainers. This includes security updates, performance monitoring, and technical assistance.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABlock
        headline="Ready to Get Started?"
        subheadline="Choose a package or contact us for a custom solution tailored to your needs."
        primaryButtonLabel="Book a Consultation"
        primaryButtonHref="/contact?type=consultation"
        secondaryButtonLabel="View Our Process"
        secondaryButtonHref="/how-it-works"
        variant="light"
      />
    </main>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PackagesPageContent />
    </Suspense>
  );
}
