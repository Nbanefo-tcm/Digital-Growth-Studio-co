import { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import SectionHeader from '@/components/sections/SectionHeader';
import CTABlock from '@/components/sections/CTABlock';
import { Globe, Zap, Headphones, Heart, Database, ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Digital Systems Consultant',
  description:
    'Professional digital solutions for NGOs & organizations: Website Development, Forms & Automation, Technical Support, NGO Websites, Research & Reporting.',
  keywords: [
    'website development',
    'nonprofit website',
    'automation services',
    'technical support',
    'research systems',
  ],
};

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-10 h-10 text-primary-500" />,
  Zap: <Zap className="w-10 h-10 text-primary-500" />,
  Headphones: <Headphones className="w-10 h-10 text-primary-500" />,
  Heart: <Heart className="w-10 h-10 text-accent-500" />,
  Database: <Database className="w-10 h-10 text-primary-500" />,
};

export default function ServicesPage() {
  return (
    <main>
      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            Services That Build Real Impact
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-4 max-w-2xl mx-auto leading-relaxed">
            Professional solutions designed specifically for organizations that matter. Choose the service that fits your needs and challenges.
          </p>
        </div>
      </section>

      {/* ========================================
          SERVICES GRID
          ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon] || <Globe className="w-10 h-10 text-primary-500" />;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-lg border border-neutral-200 shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col"
                >
                  {/* Header */}
                  <div className="p-8">
                    <div className="mb-4">{IconComponent}</div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h2>
                    <p className="text-neutral-700 leading-relaxed mb-6">{service.description}</p>

                    {/* Who it's for */}
                    <p className="text-sm text-neutral-600 mb-6">
                      <span className="font-semibold text-neutral-900">For:</span> Organizations needing {service.description.toLowerCase()}
                    </p>

                    {/* Explore Packages CTA */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
                    >
                      Explore Packages
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================
          SERVICE COMPARISON
          ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            subtitle="Comparison"
            title="How to Choose"
            description="Not sure which service is right for you? Here's how they fit together."
            align="center"
          />

          <div className="mt-12 space-y-6">
            <div className="bg-white rounded-lg p-6 border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">I need a professional website</h3>
              <p className="text-neutral-700">
                → <span className="font-semibold">Website Development</span> or{' '}
                <span className="font-semibold">NGO & Nonprofit Websites</span> (if you're a nonprofit)
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">My team spends too much time on manual tasks</h3>
              <p className="text-neutral-700">
                → <span className="font-semibold">Online Forms & Automation</span>
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">My website needs fixes or ongoing care</h3>
              <p className="text-neutral-700">
                → <span className="font-semibold">Website Fixes & Technical Support</span>
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">I need to collect and report on research data</h3>
              <p className="text-neutral-700">
                → <span className="font-semibold">Online Research & Reporting</span>
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">I'm not sure / I need something custom</h3>
              <p className="text-neutral-700">
                → Book a consultation below. We'll assess your needs and recommend the right solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          DETAILED SERVICE INFO
          ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            subtitle="Service Details"
            title="What Each Service Solves"
            description="Each service addresses specific challenges your organization faces. Explore the scope available at each package level."
            align="center"
          />

          <div className="mt-12 space-y-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="border-b border-neutral-200 pb-12 last:border-b-0">
                <h3 className="text-2xl font-bold text-neutral-900 mb-8">{service.title}</h3>

                <div className="space-y-8">
                  {/* Problems Clients Face */}
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-4 text-lg">Problems Organizations Face</h4>
                    <ul className="space-y-3">
                      {(service.deliverables || []).slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA for this service */}
                  <div className="pt-4 border-t border-neutral-200">
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
                    >
                      Explore Packages
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FAQ
          ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            subtitle="Questions"
            title="Service FAQs"
            description="Common questions about our services."
            align="center"
          />

          <div className="mt-12 space-y-4">
            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="cursor-pointer font-semibold text-neutral-900 hover:text-primary-600 transition-colors">
                Can I combine multiple services?
              </summary>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Yes! Many clients start with Website Development and add Forms & Automation or Technical Support later. We can create a custom package that combines services to meet your specific needs.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="cursor-pointer font-semibold text-neutral-900 hover:text-primary-600 transition-colors">
                What if my organization has a smaller budget?
              </summary>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Every service has a Starter package designed for organizations with limited budgets. We believe good work should be accessible to nonprofits and NGOs of all sizes. Let's talk about what's possible within your reality.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="cursor-pointer font-semibold text-neutral-900 hover:text-primary-600 transition-colors">
                How long does each service take?
              </summary>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Timeline varies by service complexity. Fixed-price projects typically take 1-12 weeks depending on scope. Retainer services are ongoing month-to-month. We'll give you a specific timeline during your consultation.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="cursor-pointer font-semibold text-neutral-900 hover:text-primary-600 transition-colors">
                Do you provide training and support?
              </summary>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Yes, training is included with all services. We document everything, conduct training sessions, and remain available to answer questions. You should feel confident managing what we build.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm">
              <summary className="cursor-pointer font-semibold text-neutral-900 hover:text-primary-600 transition-colors">
                What happens after my project is complete?
              </summary>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Your project is yours to maintain and operate independently. However, we offer Technical Support retainers for organizations that want ongoing monitoring, updates, and optimization. Many clients appreciate the peace of mind.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
          ======================================== */}
      <CTABlock
        headline="Ready to Get Started?"
        subheadline="Let's discuss your specific service needs and create a solution that works for you."
        primaryButtonLabel="Book a Consultation"
        primaryButtonHref="/contact?type=consultation"
        secondaryButtonLabel="Learn More"
        secondaryButtonHref="/#why-choose-me"
        variant="dark"
        centered
      />
    </main>
  );
}
