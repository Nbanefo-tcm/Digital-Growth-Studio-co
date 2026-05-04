import { Metadata } from 'next';
import { CASE_STUDIES, TESTIMONIALS } from '@/lib/constants';
import SectionHeader from '@/components/sections/SectionHeader';
import CTABlock from '@/components/sections/CTABlock';
import { 
  Globe, 
  Database, 
  Zap, 
  TrendingUp, 
  Award, 
  Quote
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio | Digital Growth Studio Case Studies',
  description: 'See our work: websites that tripled inquiries, data systems that proved impact, and automation that freed 20+ hours per week. Real results for real organizations.',
  keywords: [
    'portfolio',
    'case studies',
    'website examples',
    'data system examples',
    'automation examples',
    'NGO success stories',
  ],
};

export default function PortfolioPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-8 leading-relaxed">
              Real Results for Real Organizations
            </p>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From websites that tripled donor inquiries to data systems that proved impact to funders, see how we've helped organizations like yours achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="Impact at a Glance"
            subtitle="MEASURABLE RESULTS"
            description="Numbers that matter to funders, boards, and stakeholders."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">3x</div>
              <p className="text-neutral-600 font-medium">Increase in inquiry rates</p>
              <p className="text-sm text-neutral-500 mt-1">Website redesign results</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">20+</div>
              <p className="text-neutral-600 font-medium">Hours saved per month</p>
              <p className="text-sm text-neutral-500 mt-1">Automation impact</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">100%</div>
              <p className="text-neutral-600 font-medium">Funder audit success</p>
              <p className="text-sm text-neutral-500 mt-1">Data system compliance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">40%</div>
              <p className="text-neutral-600 font-medium">Reduction in proposal rejections</p>
              <p className="text-sm text-neutral-500 mt-1">Professional credibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="Featured Case Studies"
            subtitle="SUCCESS STORIES"
            description="Deep dives into our most impactful projects and the results they delivered."
            align="center"
          />
          
          <div className="space-y-16 mt-12">
            {CASE_STUDIES.map((caseStudy, index) => (
              <div key={caseStudy.id} className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary-500" />
                      </div>
                      <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                        Case Study {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                      {caseStudy.title}
                    </h3>
                    <p className="text-lg text-neutral-600 mb-6">
                      <strong>{caseStudy.organization}</strong>
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">The Challenge</h4>
                        <p className="text-neutral-600 leading-relaxed">{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Our Solution</h4>
                        <p className="text-neutral-600 leading-relaxed">{caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Results Achieved</h4>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start gap-2">
                              <TrendingUp className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                              <span className="text-neutral-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {caseStudy.testimonial && (
                        <div className="bg-neutral-50 rounded-lg p-4 border-l-4 border-primary-500">
                          <Quote className="w-5 h-5 text-primary-500 mb-2" />
                          <p className="text-neutral-700 italic">"{caseStudy.testimonial}"</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="relative h-64 md:h-auto bg-neutral-100">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="What Clients Say"
            subtitle="CLIENT FEEDBACK"
            description="Hear directly from the organizations we've helped transform."
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                <Quote className="w-8 h-8 text-primary-500 mb-4" />
                <p className="text-neutral-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                    <p className="text-sm text-primary-600">{testimonial.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="Services We've Delivered"
            subtitle="OUR EXPERTISE"
            description="Across all our core service areas, we've consistently delivered measurable results."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-primary-500" />
                <h3 className="font-semibold text-neutral-900">Website Development</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                Professional websites that build credibility and convert visitors into supporters.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• 3x inquiry rate increase</li>
                <li>• 88+ Lighthouse scores</li>
                <li>• Mobile-responsive design</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-primary-500" />
                <h3 className="font-semibold text-neutral-900">Data Systems</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                Secure, compliant systems that prove impact to funders and stakeholders.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• 100% audit success rate</li>
                <li>• Automated reporting</li>
                <li>• GDPR-compliant infrastructure</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-primary-500" />
                <h3 className="font-semibold text-neutral-900">Automation</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                Workflow automation that frees up valuable time for mission-critical work.
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• 20+ hours/month saved</li>
                <li>• 100% deadline compliance</li>
                <li>• $3,000+ monthly savings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABlock
        headline="Ready to Achieve Similar Results?"
        subheadline="Let's discuss how we can help your organization achieve measurable impact with professional digital systems."
        primaryButtonLabel="Start Your Project"
        primaryButtonHref="/contact?type=consultation"
        secondaryButtonLabel="View Our Process"
        secondaryButtonHref="/how-it-works"
        variant="light"
      />
    </main>
  );
}
