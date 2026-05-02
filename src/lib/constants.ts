// Constants & Mock Data for Digital Systems Consultant Website
// Based on locked SYSTEM_BRAIN, SITE_STRUCTURE, and DESIGN_SYSTEM

import { Service, CaseStudy, TestimonialCard } from './types';

// ============================================================================
// POSITIONING & BRAND MESSAGING (From SYSTEM_BRAIN - LOCKED)
// ============================================================================

export const POSITIONING = {
  primary:
    'I build secure, efficient, and easy-To-Use digital systems, that help scale impact—without technical stress.',
  supporting:
    'Professional websites, data systems, automation, and technical support for organizations that need reliability, credibility, and results.',
  taglines: [
    'Clean data. Trusted systems. Measurable impact.',
    'Technology that protects people and proves impact.',
    'Run your organization like a serious, funder-ready institution.',
  ],
  forNGOs:
    'Your organization\'s digital systems shouldn\'t be a distraction. They should be a competitive advantage. We build secure, efficient digital infrastructure that helps you run like a serious, funder-ready institution—so you can focus on what you do best: saving lives and creating impact.',
  forBusinesses:
    'Professional organizations need reliable systems that work for them, not against them. We design and build digital systems that scale with your business, protect your data, and prove your results.',
};

// ============================================================================
// SERVICES (5 Core Offerings - Based on SYSTEM_BRAIN Framework)
// ============================================================================

export const SERVICES: Service[] = [
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    description:
      'Professional websites that build credibility, establish trust, and convert visitors into supporters or clients. Mobile-responsive, SEO-optimized, and security-hardened.',
    shortDescription: 'Credibility-building online presence',
    icon: 'Globe',
    packages: [
      {
        name: 'Starter',
        price: 2500,
        currency: 'USD',
        features: ['5-page website', 'Mobile responsive', 'SSL security', 'Basic SEO'],
        timeline: '4-6 weeks',
        type: 'fixed',
      },
      {
        name: 'Standard',
        price: 5000,
        currency: 'USD',
        features: [
          '10-page website',
          'Mobile & desktop optimized',
          'Advanced SEO',
          'Contact forms',
          'SSL + security headers',
        ],
        timeline: '6-8 weeks',
        type: 'fixed',
      },
      {
        name: 'Premium',
        price: 8500,
        currency: 'USD',
        features: [
          'Unlimited pages',
          'Custom design',
          'Advanced SEO',
          'CMS integration',
          'Blog system',
          'Analytics setup',
          '3 months support',
        ],
        timeline: '8-12 weeks',
        type: 'fixed',
      },
    ],
    deliverables: [
      'Responsive website design',
      'SSL certificate & security configuration',
      'Performance optimization (Lighthouse 90+)',
      'SEO implementation (metadata, schema markup)',
      'Mobile-first design',
      'Contact forms & inquiry handling',
      'Email integration',
      'Launch & initial training',
    ],
  },
  {
    id: 'online-forms-automation',
    slug: 'online-forms-automation',
    title: 'Online Forms & Automation',
    description:
      'Eliminate manual work with automated forms, workflows, and integrations. Automate data collection, reporting, notifications, and tool connections. Frees up your team to focus on impact.',
    shortDescription: 'Streamline operations with automation',
    icon: 'Zap',
    packages: [
      {
        name: 'Starter',
        price: 2000,
        currency: 'USD',
        features: [
          '1-2 automated workflows',
          'Form automation',
          'Email notifications',
        ],
        timeline: '1-2 weeks',
        type: 'fixed',
      },
      {
        name: 'Standard',
        price: 4500,
        currency: 'USD',
        features: [
          '3-5 automated workflows',
          'Tool integrations',
          'Reporting automation',
          'Error handling & monitoring',
        ],
        timeline: '2-4 weeks',
        type: 'fixed',
      },
      {
        name: 'Premium',
        price: 8000,
        currency: 'USD',
        features: [
          'Full automation audit & redesign',
          '10+ custom workflows',
          'Multi-system integration',
          'Custom reporting dashboards',
          'Ongoing optimization',
          '3 months support',
        ],
        timeline: '4-8 weeks',
        type: 'fixed',
      },
    ],
    deliverables: [
      'Workflow analysis & optimization',
      'Custom form & automation setup',
      'Tool integrations (Zapier, Make, APIs)',
      'Error handling & monitoring',
      'Documentation & training',
      'Ongoing support & adjustments',
    ],
  },
  {
    id: 'website-fixes-support',
    slug: 'website-fixes-support',
    title: 'Website Fixes & Technical Support',
    description:
      'Keep your website running smoothly with ongoing support, security updates, troubleshooting, and optimization. No technical stress—just reliability.',
    shortDescription: 'Reliable technical support & maintenance',
    icon: 'Headphones',
    packages: [
      {
        name: 'Starter',
        price: 500,
        currency: 'USD',
        features: ['Monthly support', 'Bug fixes & updates', 'Email support'],
        timeline: 'Month-to-month',
        type: 'retainer',
      },
      {
        name: 'Standard',
        price: 1200,
        currency: 'USD',
        features: [
          'Biweekly check-ins',
          'Priority support (24-48hr response)',
          'Security updates & patches',
          'Performance monitoring',
        ],
        timeline: 'Month-to-month',
        type: 'retainer',
      },
      {
        name: 'Premium',
        price: 2500,
        currency: 'USD',
        features: [
          'Weekly proactive monitoring',
          'Priority support (same-day)',
          'Security & performance optimization',
          'Quarterly reviews & planning',
          'Training & documentation',
          'Unlimited consultations',
        ],
        timeline: 'Month-to-month',
        type: 'retainer',
      },
    ],
    deliverables: [
      'Proactive monitoring & alerts',
      'Security patches & updates',
      'Performance optimization',
      'Bug fixes & troubleshooting',
      'Staff training & documentation',
      'Regular health check reviews',
      'Quarterly strategy planning',
    ],
  },
  {
    id: 'ngo-nonprofit-websites',
    slug: 'ngo-nonprofit-websites',
    title: 'NGO & Nonprofit Websites',
    description:
      'Specialized websites for organizations that matter. Built to showcase impact, build donor trust, secure funding, and run like a serious, funder-ready institution.',
    shortDescription: 'Impact-ready websites for nonprofits',
    icon: 'Heart',
    packages: [
      {
        name: 'Starter',
        price: 3000,
        currency: 'USD',
        features: [
          'Impact-focused design',
          'Donation-ready setup',
          'Impact metrics display',
          'Mobile responsive',
        ],
        timeline: '4-6 weeks',
        type: 'fixed',
      },
      {
        name: 'Standard',
        price: 6000,
        currency: 'USD',
        features: [
          'Custom impact branding',
          'Case studies showcase',
          'Donor testimonials',
          'Results/impact dashboard',
          'Email integration',
          'SEO for mission keywords',
        ],
        timeline: '6-8 weeks',
        type: 'fixed',
      },
      {
        name: 'Premium',
        price: 10000,
        currency: 'USD',
        features: [
          'Full impact storytelling',
          'Interactive impact map',
          'Donor portal (optional)',
          'Advanced analytics',
          'Blog & knowledge base',
          'Impact report generator',
          'Ongoing support (6 months)',
        ],
        timeline: '8-12 weeks',
        type: 'fixed',
      },
    ],
    deliverables: [
      'Impact-focused website design',
      'Donor trust-building messaging',
      'Impact metrics & data visualization',
      'Case study & testimonial showcase',
      'Security & compliance (funder-ready)',
      'Mobile optimization',
      'SEO for mission discovery',
      'Training & documentation',
    ],
  },
  {
    id: 'research-reporting',
    slug: 'research-reporting',
    title: 'Online Research & Reporting',
    description:
      'Secure systems to collect, store, and report on research data. Built for organizations handling sensitive information. Create audit-ready reports that prove impact to funders.',
    shortDescription: 'Data collection & impact reporting',
    icon: 'Database',
    packages: [
      {
        name: 'Starter',
        price: 3500,
        currency: 'USD',
        features: [
          'Secure data collection forms',
          'Basic database setup',
          'Data access controls',
          'Simple reporting',
        ],
        timeline: '2-4 weeks',
        type: 'fixed',
      },
      {
        name: 'Standard',
        price: 6500,
        currency: 'USD',
        features: [
          'Custom data collection',
          'Secure database infrastructure',
          'User roles & permissions',
          'Automated reporting',
          'Compliance setup (GDPR-ready)',
          'Backup & recovery',
        ],
        timeline: '4-6 weeks',
        type: 'fixed',
      },
      {
        name: 'Premium',
        price: 12000,
        currency: 'USD',
        features: [
          'Full research infrastructure',
          'Advanced data analytics',
          'Custom report builder',
          'Funder-ready dashboards',
          'Data security & audit logs',
          'API integrations',
          'Staff training (3 sessions)',
          '6 months ongoing support',
        ],
        timeline: '6-10 weeks',
        type: 'fixed',
      },
    ],
    deliverables: [
      'Secure data collection system',
      'Database design & setup',
      'Data security & compliance',
      'Automated reporting system',
      'Funder-ready dashboards',
      'Data migration (if needed)',
      'Staff training & documentation',
      'Ongoing technical support',
    ],
  },
];

// ============================================================================
// TESTIMONIALS (Social Proof)
// ============================================================================

export const TESTIMONIALS: TestimonialCard[] = [
  {
    quote:
      "We needed a website that would make donors take us seriously. Within 6 weeks, we had a professional presence that increased inquiry inquiries by 40%. More importantly, we finally look like the credible organization we actually are.",
    author: 'Sarah Mwendwa',
    role: 'Executive Director',
    organization: 'Clean Water Initiative Kenya',
    logo: 'https://via.placeholder.com/80?text=CWI',
  },
  {
    quote:
      'Our data was a mess—reports took hours, we lost information, and funders were skeptical. The system they built fixed everything. Now we have real data that proves impact. This changed how we operate.',
    author: 'Dr. James Okonkwo',
    role: 'Program Manager',
    organization: 'Health Without Borders Nigeria',
    logo: 'https://via.placeholder.com/80?text=HWB',
  },
  {
    quote:
      'Automation freed up 20 hours per month for our team. Those are hours we now spend on actual program work, not data entry. The ROI was immediate. This is what professional support should look like.',
    author: 'Amara Diallo',
    role: 'Operations Lead',
    organization: 'Education for All Rwanda',
    logo: 'https://via.placeholder.com/80?text=EFA',
  },
];

// ============================================================================
// CASE STUDIES (Proof of Results)
// ============================================================================

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    slug: 'clean-water-nonprofit-website',
    title: 'From Invisible to Fundable: Website That Tripled Inquiries',
    organization: 'Clean Water Initiative Kenya',
    challenge:
      'Nonprofit was losing grant opportunities because they had no professional online presence. Donors couldn\'t find them, and when they did, the old website looked unprofessional.',
    solution:
      'Built a complete website redesign focused on donor credibility. Optimized messaging for funders, created impact case studies section, integrated donation system, added impact metrics visualization.',
    results: [
      '3x increase in inquiry rate (from 5 to 15 per month)',
      'Successfully funded 2 grants within 4 months (attributed to credible online presence)',
      '40% reduction in funding proposal rejection rate',
      '88 Lighthouse performance score',
    ],
    image: 'https://via.placeholder.com/400x300?text=Clean+Water+Case',
    testimonial:
      'We finally look like a serious organization. Donors now take us seriously, and our grant success rate speaks for itself.',
  },
  {
    id: 'case-2',
    slug: 'health-program-data-system',
    title: 'Data That Tells the Story: Proof of Impact System',
    organization: 'Health Without Borders Nigeria',
    challenge:
      'Program had patient data scattered across spreadsheets. They couldn\'t prove impact to funders, reports took days to generate, and they risked data loss or compliance issues.',
    solution:
      'Designed and built a centralized database with automated reporting, compliance features, and funder-ready dashboards. Trained staff on data entry and usage.',
    results: [
      'Reports now generate in minutes (was 2-3 days)',
      'Zero data loss incidents',
      'Successfully passed funder audit with clean data',
      '2 new grant awards (attributed to data confidence)',
      'Staff training completed, zero support issues',
    ],
    image: 'https://via.placeholder.com/400x300?text=Health+Data+System',
    testimonial:
      'Our funders now trust our numbers because they\'re real, auditable, and consistent. This system changed how we operate.',
  },
  {
    id: 'case-3',
    slug: 'education-automation-efficiency',
    title: 'Automation: 20 Hours Per Month Freed for Programs',
    organization: 'Education for All Rwanda',
    challenge:
      'Operations team spent 20+ hours each month on manual tasks: attendance reporting, email notifications, payment reminders. This took away from actual program work.',
    solution:
      'Audited workflows, built 8 automated systems, integrated tools, created monitoring dashboards. Trained team on the new processes.',
    results: [
      '20 hours/month freed for program work (4.8 hours/week)',
      '0 missed deadlines (automated reminders 100% effective)',
      'Better student engagement (instant parent notifications)',
      'Team satisfaction increased (less tedious work)',
      'Cost savings: ~$3,000/month in prevented staff hours',
    ],
    image: 'https://via.placeholder.com/400x300?text=Education+Automation',
    testimonial:
      'Our team now focuses on what actually matters. The automation handles the busy work. Best investment we made.',
  },
];

// ============================================================================
// FAQ (Trust Building)
// ============================================================================

export const FAQ = [
  {
    question: 'Do you work with organizations outside the NGO sector?',
    answer:
      'Yes. While we specialize in NGOs and nonprofits, we also work with businesses, teams, and organizations needing websites, data systems, or automation. Our expertise is specifically valuable to mission-driven organizations, but our services apply to any organization.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope. A website takes 4-8 weeks. A data system setup takes 2-6 weeks. Automation projects take 1-4 weeks. We\'ll give you a specific timeline after understanding your needs in a consultation.',
  },
  {
    question: 'Do you provide ongoing support or is it just one-time?',
    answer:
      'Both options are available. We offer fixed-price project work (one-time) or retainer-based support (monthly, ongoing). Most clients prefer retainers because systems need care, updates, and optimization. We recommend at least some level of ongoing support.',
  },
  {
    question: 'What if I don\'t have a big budget? Can you still help?',
    answer:
      'Yes. We build solutions that scale to your budget. We have starter packages for all services. We also believe in transparent, honest pricing—no surprise costs. Let\'s talk about what\'s possible within your reality.',
  },
  {
    question: 'Will you train my team or just hand everything off?',
    answer:
      'Training is included. We don\'t believe in solutions you can\'t maintain. We\'ll document everything, train your team, and be available to answer questions. You should feel confident managing what we build.',
  },
  {
    question: 'How do you handle data security and compliance?',
    answer:
      'Data security is non-negotiable. We build with compliance in mind (GDPR, data protection laws, funder audit requirements). All data is encrypted, backed up, and monitored. We\'ll explain our security approach clearly in a consultation.',
  },
];

// ============================================================================
// NAVIGATION
// ============================================================================

export const NAVIGATION = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ============================================================================
// FOOTER LINKS
// ============================================================================

export const FOOTER_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
];

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

// ============================================================================
// WHY CHOOSE ME SECTIONS
// ============================================================================

export const WHY_CHOOSE_ME = [
  {
    title: 'NGO-First Expertise',
    description:
      'We understand nonprofit constraints: limited budgets, complex compliance needs, mission-driven decisions. We build for your reality, not theory.',
    icon: 'Target',
  },
  {
    title: 'Security & Compliance Built In',
    description:
      'Data protection isn\'t an afterthought. Every system is built with security, backups, and audit trails. GDPR-ready, funder-audit ready, compliant.',
    icon: 'Shield',
  },
  {
    title: 'Transparent, Honest Pricing',
    description:
      'No surprises. Fixed-price projects with clear deliverables. Retainers that scale with value, not just time. You know what you\'re paying for.',
    icon: 'DollarSign',
  },
  {
    title: 'Training & Independence',
    description:
      'We teach your team. Full documentation, training sessions, and access. You\'ll feel confident maintaining what we build without depending on us.',
    icon: 'BookOpen',
  },
  {
    title: 'Results You Can Measure',
    description:
      'Better data. Faster reports. More funding. More impact. We build systems that prove results to your funders, board, and stakeholders.',
    icon: 'TrendingUp',
  },
  {
    title: 'Ongoing Support Available',
    description:
      'Systems need care. We offer retainer support: proactive monitoring, security updates, optimization. Peace of mind, not stress.',
    icon: 'Headphones',
  },
];

// ============================================================================
// TARGET USERS (WHO THIS IS FOR)
// ============================================================================

export const TARGET_USERS = [
  {
    title: 'NGOs & Nonprofits',
    subtitle: 'Primary',
    description:
      'Health programs, education initiatives, community organizations, humanitarian groups. Organizations doing real work protecting people and creating impact.',
    examples: ['Health & Humanitarian', 'Education & Youth', 'Community Development', 'Environmental'],
    icon: 'Heart',
  },
  {
    title: 'Foundations & Funders',
    subtitle: 'Secondary',
    description:
      'CSR teams, grantmaking foundations, impact investors. Organizations that need to monitor, report, and prove impact.',
    examples: ['CSR Programs', 'Grant Makers', 'Impact Investors', 'Family Offices'],
    icon: 'Briefcase',
  },
  {
    title: 'Professional Organizations',
    subtitle: 'Secondary',
    description:
      'Any organization that needs reliable, secure systems. Businesses, teams, professional services that require credibility and data integrity.',
    examples: ['Professional Services', 'Small Businesses', 'Teams & Startups', 'Training Organizations'],
    icon: 'Building2',
  },
];
