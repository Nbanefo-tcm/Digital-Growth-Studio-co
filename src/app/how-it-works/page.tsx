import { Metadata } from 'next';
import Link from 'next/link';
import { FAQ, SERVICES } from '@/lib/constants';
import SectionHeader from '@/components/sections/SectionHeader';
import CTABlock from '@/components/sections/CTABlock';
import { 
  Search,
  Shield,
  Code,
  TestTube,
  Rocket,
  Headphones,
  Clock,
  DollarSign,
  CheckCircle,
  Users,
  FileText,
  Award,
  Database,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works | Digital Growth Studio Process',
  description: 'Learn our systematic approach to building secure, efficient digital systems. From discovery to launch, we ensure your project succeeds on time and on budget.',
  keywords: [
    'how it works',
    'development process',
    'project methodology',
    'web development workflow',
    'data system implementation',
  ],
};

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              How It Works
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-8 leading-relaxed">
              A systematic, transparent process that ensures your project succeeds
            </p>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From discovery to launch and beyond, we guide you through every step with clear timelines, fixed pricing, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="Our 4-Step Process"
            subtitle="SYSTEMATIC APPROACH"
            description="Every project follows our proven methodology to ensure quality, security, and success."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-6">
                1
              </div>
              <div className="bg-primary-50 rounded-lg p-6 h-full">
                <Search className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="font-semibold text-neutral-900 mb-3">Discovery & Planning</h3>
                <p className="text-neutral-600 mb-4">
                  We listen first. Understanding your challenges, constraints, and goals before writing a single line of code.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Requirements gathering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Technical assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Timeline & budget planning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-6">
                2
              </div>
              <div className="bg-primary-50 rounded-lg p-6 h-full">
                <Shield className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="font-semibold text-neutral-900 mb-3">Security-First Development</h3>
                <p className="text-neutral-600 mb-4">
                  Building with security, compliance, and scalability from the ground up. No afterthoughts.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Secure architecture design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Compliance considerations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Regular security reviews</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-6">
                3
              </div>
              <div className="bg-primary-50 rounded-lg p-6 h-full">
                <TestTube className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="font-semibold text-neutral-900 mb-3">Testing & Training</h3>
                <p className="text-neutral-600 mb-4">
                  Rigorous testing plus comprehensive team training. You'll be confident using what we build.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Quality assurance testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Staff training sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Documentation creation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-6">
                4
              </div>
              <div className="bg-primary-50 rounded-lg p-6 h-full">
                <Rocket className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="font-semibold text-neutral-900 mb-3">Launch & Support</h3>
                <p className="text-neutral-600 mb-4">
                  Smooth deployment with ongoing support options. We're here when you need us.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Production deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Performance monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span>Ongoing maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="Typical Project Timelines"
            subtitle="REALISTIC EXPECTATIONS"
            description="Based on our experience with similar projects. We'll provide specific timelines after understanding your needs."
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary-500" />
                <h3 className="font-semibold text-neutral-900">Website Development</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Starter Package</span>
                  <span className="font-semibold text-primary-600">4-6 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Standard Package</span>
                  <span className="font-semibold text-primary-600">6-8 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Premium Package</span>
                  <span className="font-semibold text-primary-600">8-12 weeks</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-primary-500" />
                <h3 className="font-semibold text-neutral-900">Data Systems</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Basic Setup</span>
                  <span className="font-semibold text-primary-600">2-4 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Advanced System</span>
                  <span className="font-semibold text-primary-600">4-6 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Full Infrastructure</span>
                  <span className="font-semibold text-primary-600">6-10 weeks</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-primary-500" />
                <h3 className="font-semibold text-neutral-900">Automation</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Simple Workflows</span>
                  <span className="font-semibold text-primary-600">1-2 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Complex Systems</span>
                  <span className="font-semibold text-primary-600">2-4 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Enterprise Integration</span>
                  <span className="font-semibold text-primary-600">4-6 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="What's Included in Every Project"
            subtitle="COMPREHENSIVE DELIVERY"
            description="Every project includes these essential components to ensure your success."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-neutral-900 mb-2">Security & Compliance</h4>
                <p className="text-neutral-600 text-sm">GDPR-ready, audit trails, data protection built-in</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-neutral-900 mb-2">Full Documentation</h4>
                <p className="text-neutral-600 text-sm">User guides, technical docs, process documentation</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-neutral-900 mb-2">Team Training</h4>
                <p className="text-neutral-600 text-sm">Hands-on training sessions for your staff</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <DollarSign className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-neutral-900 mb-2">Fixed Pricing</h4>
                <p className="text-neutral-600 text-sm">No hidden fees, clear deliverables, transparent costs</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Headphones className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-neutral-900 mb-2">Support Options</h4>
                <p className="text-neutral-600 text-sm">Ongoing maintenance and technical support available</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-neutral-900 mb-2">Quality Guarantee</h4>
                <p className="text-neutral-600 text-sm">Performance optimization and bug fixes included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="COMMON QUESTIONS"
            description="Answers to questions we commonly hear about our process and approach."
            align="center"
          />
          
          <div className="space-y-6 mt-12">
            {FAQ.map((item, index) => (
              <details key={index} className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
                <summary className="font-semibold text-neutral-900 cursor-pointer hover:text-primary-600 transition-colors">
                  {item.question}
                </summary>
                <p className="text-neutral-600 mt-4 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABlock
        headline="Ready to Start Your Project?"
        subheadline="Let's discuss your specific needs and create a plan that works for your organization."
        primaryButtonLabel="Book a Free Consultation"
        primaryButtonHref="/contact?type=consultation"
        secondaryButtonLabel="View Our Services"
        secondaryButtonHref="/services"
        variant="light"
      />
    </main>
  );
}
