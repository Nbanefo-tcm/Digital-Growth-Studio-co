import { Metadata } from 'next';
import Link from 'next/link';
import {
  POSITIONING,
  SERVICES,
  TESTIMONIALS,
  FAQ,
  WHY_CHOOSE_ME,
  TARGET_USERS,
} from '@/lib/constants';
import SectionHeader from '@/components/sections/SectionHeader';
import CTABlock from '@/components/sections/CTABlock';
import ServiceCard from '@/components/cards/ServiceCard';
import { Globe, Database, Zap, Headphones, Heart, Briefcase, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Growth Studio ',
  description:
    'I build secure, efficient, and easy-To-Use digital systems that save lives, protect communities, attract funding, and scale impact—without technical stress.',
  keywords: [
    'NGO digital systems',
    'nonprofit website',
    'data management NGO',
    'impact organization tech',
    'nonprofit consultant',
    'Small businesses',
    'NGOs',
    'Churches',
    'Startups',
  ],
};

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-8 h-8 text-primary-500" />,
  Database: <Database className="w-8 h-8 text-primary-500" />,
  Zap: <Zap className="w-8 h-8 text-primary-500" />,
  Headphones: <Headphones className="w-8 h-8 text-primary-500" />,
  Heart: <Heart className="w-8 h-8 text-accent-500" />,
  Briefcase: <Briefcase className="w-8 h-8 text-accent-500" />,
  Building2: <Building2 className="w-8 h-8 text-accent-500" />,
  Target: <Globe className="w-8 h-8 text-primary-500" />,
  Shield: <Globe className="w-8 h-8 text-primary-500" />,
  DollarSign: <Globe className="w-8 h-8 text-primary-500" />,
  BookOpen: <Globe className="w-8 h-8 text-primary-500" />,
  TrendingUp: <Globe className="w-8 h-8 text-primary-500" />,
};

export default function Home() {
  return (
    <main>
      {/* ========================================
          HERO SECTION - Authority Positioning
          ======================================== */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-primary-600 uppercase tracking-wide mb-4">
            Digital Systems for Impact Organizations
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            {POSITIONING.primary}
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            {POSITIONING.supporting}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=consultation"
              className="px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border-2 border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3 border-2 border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200"
            >
              View My Works
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          WHY THIS MATTERS - Impact Section
          ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            subtitle="Why This Matters"
            title="Your Systems Shape Your Impact"
            description="Too many organizations fail not because their mission isn't worthy, but because their digital systems are broken. Poor data management, security risks, and manual chaos drain resources that should go to impact work."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-accent-50 rounded-lg border border-accent-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Save Costs Without Sacrificing Quality</h3>
              <p className="text-neutral-700">
                Custom-built systems that scale with you, not expensive off-the-shelf software that forces you into a box.
              </p>
            </div>
            <div className="p-6 bg-accent-50 rounded-lg border border-accent-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Prove Impact to Funders</h3>
              <p className="text-neutral-700">
                Real data systems that demonstrate results. Audit-ready infrastructure. Credibility that opens funding doors.
              </p>
            </div>
            <div className="p-6 bg-accent-50 rounded-lg border border-accent-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">Run Like a Serious Institution</h3>
              <p className="text-neutral-700">
                Systems that support your team, protect your data, and build the confidence your stakeholders need to trust you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          WHO THIS IS FOR - 3 Column Section
          ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            subtitle="Target Users"
            title="Who This Is For"
            description="Whether you're a nonprofit, foundation, or professional organization, we build digital systems that fit your reality."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {TARGET_USERS.map((user, idx) => {
              const IconComponent = iconMap[user.icon] || <Heart className="w-8 h-8 text-accent-500" />;
              return (
                <div key={idx} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="mb-4">{IconComponent}</div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-1">{user.title}</h3>
                  <p className="text-sm text-primary-600 font-semibold mb-4 uppercase">{user.subtitle}</p>
                  <p className="text-neutral-700 mb-6">{user.description}</p>
                  <div className="space-y-2">
                    {user.examples.map((example, i) => (
                      <p key={i} className="text-sm text-neutral-600">
                        • {example}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================
          SERVICES OVERVIEW - Cards
          ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            subtitle="What We Do"
            title="Our Services"
            description="Four core service areas designed to build digital systems that scale with your impact."
            align="center"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon] || <Globe className="w-8 h-8 text-primary-500" />;
              return (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  shortDescription={service.shortDescription}
                  description={service.description}
                  icon={IconComponent}
                  href={`/services/${service.slug}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================
          WHY CHOOSE ME - Trust Section
          ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            subtitle="Why Choose Me"
            title="What Makes This Different"
            description="Not every digital consultant understands NGO reality. Here's what sets this work apart."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {WHY_CHOOSE_ME.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          TESTIMONIALS PREVIEW
          ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            subtitle="Results"
            title="What Organizations Say"
            description="Real feedback from organizations we've helped."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="bg-primary-50 rounded-lg p-8 border border-primary-200">
                <p className="text-neutral-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-primary-200 pt-4">
                  <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  <p className="text-sm text-primary-600 font-medium">{testimonial.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FAQ PREVIEW
          ======================================== */}
      <section className="py-16 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            subtitle="Common Questions"
            title="FAQs"
            description="Questions organizations typically ask when considering this work."
            align="center"
          />

          <div className="mt-12 space-y-4">
            {FAQ.slice(0, 4).map((item, idx) => (
              <details key={idx} className="bg-white rounded-lg p-6 shadow-sm">
                <summary className="cursor-pointer font-semibold text-neutral-900 hover:text-primary-600 transition-colors">
                  {item.question}
                </summary>
                <p className="mt-4 text-neutral-700 leading-relaxed">{item.answer}</p>
              </details>
            ))}
            <div className="text-center mt-8">
              <Link href="/contact" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                View all FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA - Conversion
          ======================================== */}
      <CTABlock
        headline="Ready to Build Systems That Support Your Impact?"
        subheadline="Let's talk about your specific challenges and what's possible for your organization."
        primaryButtonLabel="Book a Free Consultation"
        primaryButtonHref="/contact?type=consultation"
        secondaryButtonLabel="View Case Studies"
        secondaryButtonHref="/portfolio"
        variant="dark"
        centered
      />
    </main>
  );
}
