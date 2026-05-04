import { Metadata } from 'next';
import { POSITIONING, WHY_CHOOSE_ME, TARGET_USERS } from '@/lib/constants';
import SectionHeader from '@/components/sections/SectionHeader';
import CTABlock from '@/components/sections/CTABlock';
import { 
  Globe, 
  Shield, 
  DollarSign, 
  BookOpen, 
  TrendingUp, 
  Headphones, 
  Target,
  Heart,
  Briefcase,
  Building2,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Digital Growth Studio | Professional Digital Systems',
  description: 'Learn about Digital Growth Studio - building secure, efficient digital systems for NGOs, nonprofits, and impact organizations. Security-first, transparent pricing, measurable results.',
  keywords: [
    'about digital growth studio',
    'NGO digital consultant',
    'nonprofit web developer',
    'impact organization technology',
    'digital systems expertise',
  ],
};

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-8 h-8 text-primary-500" />,
  Shield: <Shield className="w-8 h-8 text-primary-500" />,
  DollarSign: <DollarSign className="w-8 h-8 text-primary-500" />,
  BookOpen: <BookOpen className="w-8 h-8 text-primary-500" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-primary-500" />,
  Headphones: <Headphones className="w-8 h-8 text-primary-500" />,
  Heart: <Heart className="w-8 h-8 text-accent-500" />,
  Briefcase: <Briefcase className="w-8 h-8 text-accent-500" />,
  Building2: <Building2 className="w-8 h-8 text-accent-500" />,
  Globe: <Globe className="w-8 h-8 text-primary-500" />,
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              About Digital Growth Studio
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-8 leading-relaxed">
              {POSITIONING.primary}
            </p>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              {POSITIONING.supporting}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Our Mission"
                subtitle="DRIVING IMPACT"
                description="To transform how impact organizations use technology—making digital systems a competitive advantage rather than a distraction."
                align="left"
              />
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Security-First Approach</h4>
                    <p className="text-neutral-600">Every system built with data protection, compliance, and audit trails from day one.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Measurable Results</h4>
                    <p className="text-neutral-600">Systems that prove impact to funders, boards, and stakeholders with real data.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Technical Independence</h4>
                    <p className="text-neutral-600">Full training and documentation so your team can maintain what we build.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Vision</h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                A world where every impact organization has access to professional-grade digital systems that enable them to operate with the credibility, efficiency, and security of funded institutions.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-neutral-900">Core Values:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-700">Integrity in every line of code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-700">Transparency in pricing and process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-700">Excellence in security and performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-700">Partnership in client success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="Why Organizations Trust Us"
            subtitle="OUR DIFFERENTIATORS"
            description="We're not just developers—we're partners in your mission. Here's what makes us different:"
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {WHY_CHOOSE_ME.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="Who We Serve"
            subtitle="OUR CLIENTS"
            description="We specialize in organizations that need reliability, credibility, and measurable impact:"
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {TARGET_USERS.map((user, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {user.icon === 'Heart' && <Heart className="w-8 h-8 text-accent-500" />}
                  {user.icon === 'Briefcase' && <Briefcase className="w-8 h-8 text-accent-500" />}
                  {user.icon === 'Building2' && <Building2 className="w-8 h-8 text-accent-500" />}
                  {user.icon === 'Users' && <Users className="w-8 h-8 text-accent-500" />}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-3">{user.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{user.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Our Approach"
                subtitle="HOW WE WORK"
                description="A systematic, transparent process that ensures your project succeeds on time and on budget."
                align="left"
              />
              <div className="space-y-6 mt-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Discovery & Planning</h4>
                    <p className="text-neutral-600">We listen first. Understanding your challenges, constraints, and goals before writing a single line of code.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Security-First Development</h4>
                    <p className="text-neutral-600">Building with security, compliance, and scalability from the ground up. No afterthoughts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Testing & Training</h4>
                    <p className="text-neutral-600">Rigorous testing plus comprehensive team training. You'll be confident using what we build.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Launch & Support</h4>
                    <p className="text-neutral-600">Smooth deployment with ongoing support options. We're here when you need us.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg p-8 text-white">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="mb-6 leading-relaxed">
                We're committed to your success. Every project includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Fixed pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Clear timelines and deliverables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Full documentation and training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Security and compliance built-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Measurable results and reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABlock
        headline="Ready to Build Systems That Support Your Impact?"
        subheadline="Let's discuss your specific challenges and what's possible for your organization."
        primaryButtonLabel="Book a Free Consultation"
        primaryButtonHref="/contact?type=consultation"
        secondaryButtonLabel="View Our Services"
        secondaryButtonHref="/services"
        variant="light"
      />
    </main>
  );
}
