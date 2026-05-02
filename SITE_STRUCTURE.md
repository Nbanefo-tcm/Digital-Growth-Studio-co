# Site Structure & Route Architecture
## Digital Systems Consultant Website

🔒 **STATUS: FULLY LOCKED & APPROVED**  
**Locked Date:** January 26, 2026  
**Final Approval:** CONFIRMED - Do NOT modify without explicit user request  
**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS  

### FINAL LOCK NOTICE
This complete site structure document is now LOCKED and serves as the definitive source of truth for all implementation.

**LOCKED ELEMENTS:**
- ✅ All 9 required pages + bonus pages
- ✅ Complete page content specifications (hero, CTAs, form fields, messaging)
- ✅ Admin-ready backend structure
- ✅ Component hierarchy
- ✅ API endpoints
- ✅ Routing architecture
- ✅ Form validation requirements
- ✅ Success criteria & user journeys

**CHANGE POLICY:**
Any modifications require explicit written user approval.
No edits without permission.

---

## 📂 FOLDER & FILE STRUCTURE

```
digital-consultant-website/
│
├── public/
│   ├── images/
│   │   ├── hero-ngo.jpg
│   │   ├── hero-business.jpg
│   │   ├── logo.svg
│   │   ├── testimonials/
│   │   │   ├── org-1.png
│   │   │   ├── org-2.png
│   │   │   └── org-3.png
│   │   ├── case-studies/
│   │   │   ├── case-1.jpg
│   │   │   ├── case-2.jpg
│   │   │   └── case-3.jpg
│   │   └── icons/
│   │       ├── icon-website.svg
│   │       ├── icon-data-systems.svg
│   │       ├── icon-automation.svg
│   │       └── icon-support.svg
│   ├── videos/
│   │   └── placeholder.mp4
│   └── favicons/
│       ├── favicon.ico
│       └── favicon-192.png
│
├── src/
│   │
│   ├── app/
│   │   ├── layout.tsx (root layout, header, footer, nav)
│   │   ├── page.tsx (HOME /)
│   │   ├── globals.css (Tailwind + globals)
│   │   ├── error.tsx (error boundary)
│   │   ├── not-found.tsx (404 page)
│   │   │
│   │   ├── services/
│   │   │   ├── layout.tsx (services layout)
│   │   │   ├── page.tsx (SERVICES /services - directory)
│   │   │   └── [service-name]/
│   │   │       └── page.tsx (SERVICE DETAIL /services/[service-name])
│   │   │
│   │   ├── pricing/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx (PRICING /pricing)
│   │   │
│   │   ├── about/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx (ABOUT /about)
│   │   │
│   │   ├── portfolio/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx (PORTFOLIO /portfolio - case studies)
│   │   │   └── [case-slug]/
│   │   │       └── page.tsx (CASE DETAIL /portfolio/[case-slug])
│   │   │
│   │   ├── how-it-works/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx (HOW IT WORKS /how-it-works)
│   │   │
│   │   ├── contact/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx (CONTACT /contact)
│   │   │
│   │   ├── consultation/ (hidden: used for post-booking)
│   │   │   └── success/
│   │   │       └── page.tsx (/consultation/success - confirmation page)
│   │   │
│   │   └── api/
│   │       ├── contact/
│   │       │   └── route.ts (POST - contact form)
│   │       ├── consultation/
│   │       │   └── route.ts (POST - consultation request)
│   │       ├── service-request/
│   │       │   └── route.ts (POST - service request form)
│   │       └── health/
│   │           └── route.ts (GET - health check)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx (navbar, logo, nav menu)
│   │   │   ├── Navigation.tsx (menu items)
│   │   │   ├── Footer.tsx (footer with links, contact)
│   │   │   ├── MobileMenu.tsx (mobile hamburger)
│   │   │   └── Breadcrumb.tsx (optional nav aid)
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx (homepage hero - dual positioning)
│   │   │   ├── ValuePropositionSection.tsx (core positioning)
│   │   │   ├── ServicesPreviewSection.tsx (4 service cards on home)
│   │   │   ├── DualPathSection.tsx (NGOs vs Businesses split view)
│   │   │   ├── HowItWorksSection.tsx (process flow - 4 steps)
│   │   │   ├── TestimonialsSection.tsx (3-4 testimonials + org logos)
│   │   │   ├── CaseStudiesPreviewSection.tsx (3 featured case studies)
│   │   │   ├── CTASection.tsx (primary: book consultation)
│   │   │   ├── FAQSection.tsx (5-7 common questions)
│   │   │   └── TrustBadgesSection.tsx (security, compliance badges)
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx (simple: name, email, message)
│   │   │   ├── ConsultationForm.tsx (discovery: name, email, org, challenge, timeline)
│   │   │   ├── ServiceRequestForm.tsx (complex multi-step form)
│   │   │   │   ├── Step1_ServiceSelection.tsx
│   │   │   │   ├── Step2_PackageSelection.tsx
│   │   │   │   ├── Step3_ProjectDetails.tsx
│   │   │   │   ├── Step4_Budget.tsx
│   │   │   │   └── Step5_Confirmation.tsx
│   │   │   ├── FormInput.tsx (reusable input component)
│   │   │   ├── FormTextarea.tsx (reusable textarea)
│   │   │   ├── FormSelect.tsx (reusable dropdown)
│   │   │   ├── FormCheckbox.tsx (reusable checkbox)
│   │   │   └── FormValidationError.tsx (error display)
│   │   │
│   │   ├── cards/
│   │   │   ├── ServiceCard.tsx (service category card)
│   │   │   ├── PackageCard.tsx (pricing/package option)
│   │   │   ├── TestimonialCard.tsx (quote + org)
│   │   │   ├── CaseStudyCard.tsx (image + title + results)
│   │   │   ├── FeatureCard.tsx (icon + text)
│   │   │   └── StepCard.tsx (process step)
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx (primary, secondary, tertiary variants)
│   │   │   ├── Badge.tsx (security, certification badges)
│   │   │   ├── Modal.tsx (modal dialog)
│   │   │   ├── Alert.tsx (success, error, info alerts)
│   │   │   ├── Spinner.tsx (loading indicator)
│   │   │   ├── Container.tsx (max-width wrapper)
│   │   │   ├── Section.tsx (padded section wrapper)
│   │   │   └── Tabs.tsx (tabbed content)
│   │   │
│   │   └── common/
│   │       ├── Logo.tsx (brand logo)
│   │       ├── CTAButton.tsx (primary CTA - book consultation)
│   │       └── SocialProof.tsx (testimonial/logo display)
│   │
│   ├── lib/
│   │   ├── constants.ts
│   │   │   ├── POSITIONING (core messaging from SYSTEM_BRAIN)
│   │   │   ├── SERVICES (service definitions & metadata)
│   │   │   ├── PACKAGES (pricing tiers)
│   │   │   ├── CASE_STUDIES (case study data)
│   │   │   ├── FAQ (frequently asked questions)
│   │   │   └── NAVIGATION (menu structure)
│   │   │
│   │   ├── validation.ts
│   │   │   ├── validateContactForm()
│   │   │   ├── validateConsultationForm()
│   │   │   ├── validateServiceRequest()
│   │   │   ├── validateEmail()
│   │   │   └── sanitizeInput()
│   │   │
│   │   ├── email.ts
│   │   │   ├── sendContactConfirmation()
│   │   │   ├── sendConsultationNotification()
│   │   │   ├── sendServiceRequestNotification()
│   │   │   └── EMAIL_CONFIG
│   │   │
│   │   ├── api-client.ts (client-side API utilities)
│   │   │   ├── submitContactForm()
│   │   │   ├── submitConsultation()
│   │   │   ├── submitServiceRequest()
│   │   │   └── API error handling
│   │   │
│   │   ├── types.ts
│   │   │   ├── Service interface
│   │   │   ├── Package interface
│   │   │   ├── ContactRequest interface
│   │   │   ├── ConsultationRequest interface
│   │   │   ├── ServiceRequest interface
│   │   │   ├── CaseStudy interface
│   │   │   └── APIResponse interface
│   │   │
│   │   ├── seo.ts (SEO metadata helpers)
│   │   │   ├── generateMetadata()
│   │   │   ├── generateOpenGraph()
│   │   │   ├── generateSchema()
│   │   │   └── SEO_CONFIG
│   │   │
│   │   ├── utils.ts (general utilities)
│   │   │   ├── cn() (className merger)
│   │   │   ├── formatDate()
│   │   │   ├── formatPrice()
│   │   │   └── slugify()
│   │   │
│   │   └── rate-limit.ts (optional: rate limiting)
│   │       └── rateLimit()
│   │
│   ├── hooks/
│   │   ├── useForm.ts (form submission state)
│   │   ├── useFetch.ts (API calls)
│   │   ├── useScrollPosition.ts (scroll detection)
│   │   ├── useMediaQuery.ts (responsive queries)
│   │   └── useMultiStepForm.ts (multi-step form state)
│   │
│   ├── styles/
│   │   ├── globals.css (Tailwind imports + global styles)
│   │   ├── variables.css (CSS variables for colors, spacing)
│   │   └── animations.css (custom animations)
│   │
│   └── middleware.ts (optional: auth, redirects, security headers)
│
├── config/
│   ├── next.config.js (Next.js configuration)
│   ├── tailwind.config.js (Tailwind CSS configuration)
│   ├── tsconfig.json (TypeScript configuration)
│   └── .env.local (environment variables)
│
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
│
└── docs/
    ├── SYSTEM_BRAIN.md (locked foundation)
    ├── SITE_STRUCTURE.md (this file)
    ├── CONTENT_OUTLINE.md (page content outline - TBD)
    └── DEPLOYMENT.md (hosting & deployment guide - TBD)
```

---

## 🌐 ROUTES & PAGES MAPPING

| Route | Page | Component | Purpose | CTA |
|-------|------|-----------|---------|-----|
| `/` | Home | `page.tsx` + sections | Authority + dual pathways | "Book Consultation" + "View Services" |
| `/services` | Services Directory | `services/page.tsx` | All 4 service categories | Browse/select service |
| `/services/[service-name]` | Service Detail | `services/[service-name]/page.tsx` | Deep-dive on service + packages | "Select Package" or "Consult" |
| `/pricing` | Pricing & Packages | `pricing/page.tsx` | Package tiers, comparison | "Choose Package" + "Book Call" |
| `/about` | About | `about/page.tsx` | Credibility, mission, expertise | "View Services" + "Get in Touch" |
| `/portfolio` | Portfolio/Case Studies | `portfolio/page.tsx` | Case study directory | Browse case details |
| `/portfolio/[case-slug]` | Case Study Detail | `portfolio/[case-slug]/page.tsx` | Full case study + results | "Get Similar Results" → Consultation |
| `/how-it-works` | Process | `how-it-works/page.tsx` | How we work, process, timeline | "Start Your Journey" |
| `/contact` | Contact Form | `contact/page.tsx` | Simple contact + inquiry | Submit inquiry |
| `/consultation/success` | Success Page | `consultation/success/page.tsx` | Booking confirmation | Next steps |

---

## 🔌 API ENDPOINTS

| Method | Endpoint | Purpose | Input | Response |
|--------|----------|---------|-------|----------|
| `POST` | `/api/contact` | Contact form submission | name, email, message | `{ success: bool, message: string }` |
| `POST` | `/api/consultation` | Consultation request | name, email, org, challenge, timeline | `{ success: bool, bookingId: string }` |
| `POST` | `/api/service-request` | Detailed service request | name, email, service, package, details, budget | `{ success: bool, requestId: string }` |
| `GET` | `/api/health` | Health check | - | `{ status: "ok" }` |

---

## 📦 COMPONENT TREE HIERARCHY

```
RootLayout (layout.tsx)
├── Header
│   ├── Logo
│   ├── Navigation
│   │   ├── Services
│   │   ├── About
│   │   ├── Portfolio
│   │   ├── How It Works
│   │   └── Contact
│   ├── CTAButton (Book Consultation)
│   └── MobileMenu
├── [Page Content]
│   ├── Various sections per page
│   └── Forms (Contact, Consultation, Service Request)
└── Footer
    ├── Links (Privacy, Terms, etc.)
    ├── Contact Info
    ├── Social Links
    └── Trust Badges

HomePage (/)
├── HeroSection (dual positioning: NGO + Business)
├── ValuePropositionSection
├── ServicesPreviewSection (4 cards)
├── DualPathSection (NGO-specific benefits + Business benefits)
├── HowItWorksSection (4 steps)
├── TestimonialsSection (3-4 quotes)
├── CaseStudiesPreviewSection (featured 3)
├── FAQSection (5-7 questions)
├── CTASection (final push)
└── TrustBadgesSection

ServicesPage (/services)
└── ServiceCard Grid (4 categories)
    └── Links to /services/[service-name]

ServiceDetailPage (/services/[service-name])
├── Service Hero
├── Service Description
├── Deliverables List
├── PackageCard (multiple: starter, professional, enterprise)
├── RelatedServices
├── Testimonials (service-specific)
└── CTAs (Select Package, Consult)

PricingPage (/pricing)
├── Package Comparison Table
├── PackageCard (3+ tiers)
├── FAQ (pricing-specific)
└── CTAs

AboutPage (/about)
├── Mission Statement
├── Expertise/Background
├── Team (if applicable)
├── Values
├── Credentials/Trust Markers
└── CTA

PortfolioPage (/portfolio)
└── CaseStudyCard Grid (3+ case studies)
    └── Links to /portfolio/[case-slug]

CaseStudyDetailPage (/portfolio/[case-slug])
├── Case Study Hero
├── Challenge
├── Solution
├── Results/Metrics
├── Implementation Timeline
├── Related Services
└── CTA (Get Similar Results → Consultation Form)

HowItWorksPage (/how-it-works)
├── Process Overview
├── Step 1-4 Cards
├── Timeline
├── FAQ
└── CTA

ContactPage (/contact)
├── Contact Form
├── Contact Info (email, phone)
├── FAQ (contact-related)
└── Map/Location (optional)

SuccessPage (/consultation/success)
├── Confirmation Message
├── Next Steps
├── Email Confirmation Display
└── CTA (Return to Home, View Services)
```

---

## 🎯 SERVICE PAGE DESIGN PRINCIPLES

### Progressive Problem-Solving Model

**Core Concept:** Users understand value by seeing **more problems disappear** as they explore higher package tiers, not by comparing features or prices.

**Implementation:**

1. **Service Cards (Directory Page)**
   - Problem statement (outcome-focused)
   - No pricing, no duration, no package names
   - Single "Explore Packages" CTA

2. **Service Detail Page (Packages Section)**
   - Problem-solving hierarchy:
     - Starter: Solves CORE problems
     - Standard: Solves core + ADDITIONAL problems
     - Premium: Solves everything above + ADVANCED problems
   - Dynamic "Problems Solved" section updates when user clicks package
   - Zero mention of cost, time, features, or deliverables
   - Pure focus: What problems disappear at each tier?

3. **Copy Guidelines for Problems Solved**
   - Use action verbs: "Fixes", "Eliminates", "Prevents", "Automates", "Secures", "Removes", "Simplifies"
   - Be specific to the organization's pain: "Prevents data loss", "Stops manual data entry errors", "Eliminates compliance risks"
   - Compare tiers by scope of impact, not feature count
   - Example format:
     ```
     STARTER: Fixes manual data entry errors
     STANDARD: Fixes manual entry errors + automates reporting
     PREMIUM: Fixes all above + integrates with existing systems + provides advanced analytics
     ```

**Why This Works:**
- Price is less important to impact orgs than scope of problems solved
- Creates natural progression (user self-selects based on problem depth)
- Outcome-focused language builds trust (we understand their real problems)
- Removes sales pressure (pricing/deadline anxiety)
- Emphasizes organizational capability building, not transactional service delivery

---

## 📊 DATA STRUCTURES

### Constants File Structure (`lib/constants.ts`)

```typescript
export const POSITIONING = {
  primary: "I help NGOs and impact organizations...",
  supporting: "Professional websites, data systems...",
  taglines: ["Clean data. Trusted systems. Measurable impact.", ...],
}

export const SERVICES = [
  {
    id: "websites",
    slug: "professional-websites",
    title: "Professional Websites",
    description: "Credibility-building online presence",
    packages: [...],
    ...
  },
  {
    id: "data-systems",
    slug: "data-systems",
    title: "Data Systems & Infrastructure",
    ...
  },
  {
    id: "automation",
    slug: "automation",
    title: "Automation & Efficiency",
    ...
  },
  {
    id: "support",
    slug: "technical-support",
    title: "Technical Support & Maintenance",
    ...
  },
]

export const PACKAGES = [
  {
    id: "starter",
    name: "Starter",
    price: "$X",
    type: "fixed",
    deliverables: [...],
    ...
  },
  // ... more packages
]

export const CASE_STUDIES = [
  {
    id: "case-1",
    slug: "ngo-crisis-response-system",
    title: "NGO Crisis Response System",
    organization: "Example NGO",
    challenge: "...",
    solution: "...",
    results: { metric1: "...", metric2: "..." },
    ...
  },
  // ... more cases
]

export const FAQ = [
  { question: "...", answer: "..." },
  // ... more FAQs
]

export const NAVIGATION = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  // ...
]
```

---

## 🔒 SECURITY & VALIDATION LAYERS

### Form Validation Pipeline
```
Client Input
  ↓
Client-side validation (React Hook Form) [UX only]
  ↓
Form submission to API
  ↓
Server-side validation (Zod schema)
  ↓
Input sanitization
  ↓
Rate limit check
  ↓
Business logic processing
  ↓
Email notification
  ↓
Response to client
```

### API Route Security
- ✅ CORS configuration (if needed)
- ✅ Rate limiting per IP
- ✅ Request logging
- ✅ Error handling (no sensitive info leaked)
- ✅ Environment variables for API keys
- ✅ POST-only endpoints (no GET for form submissions)

---

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile: < 640px (default)
Tablet: 640px - 1024px (sm)
Desktop: 1024px - 1280px (md/lg)
Large Desktop: > 1280px (xl)

Design: Mobile-first, progressive enhancement
```

---

## 🎯 CONVERSION FLOW ARCHITECTURE

```
VISITOR JOURNEY:

Entry Point → Landing Page
  ├→ CTA 1: "Book Free Consultation" (PRIMARY)
  ├→ CTA 2: "View Services" (SECONDARY)
  └→ CTA 3: "See Case Studies" (TERTIARY)

Services Exploration Path
  /services → Browse categories
    ↓
  /services/[name] → Deep-dive + packages
    ↓
  → CTA: "Select Package" or "Request Consultation"

Consultation Path
  Form Submission → Validation → Email Confirmation → Calendar/Next Steps

Service Request Path
  Multi-step Form → Validation → Confirmation → Follow-up Sequence

Case Study Path
  /portfolio → Browse cases
    ↓
  /portfolio/[slug] → Results + proof
    ↓
  → CTA: "Get Similar Results" → Consultation Form
```

---

## 🔄 SHARED COMPONENTS USAGE

| Component | Used On | Purpose |
|-----------|---------|---------|
| Button | All pages | CTA, form submission |
| Badge | Services, pricing, testimonials | Visual markers |
| ServiceCard | Home, /services | Service browsing |
| PackageCard | /pricing, /services/[detail] | Package selection |
| TestimonialCard | Home, service pages | Social proof |
| CaseStudyCard | Home, /portfolio | Results proof |
| FormInput | All forms | Consistent form UI |
| CTAButton | All pages | Book consultation |
| Container | All pages | Layout wrapping |
| Section | All pages | Padded sections |

---

## 📝 ENVIRONMENT VARIABLES REQUIRED

```
# .env.local

# Site Config
NEXT_PUBLIC_SITE_URL=https://domain.com
NEXT_PUBLIC_SITE_NAME=Digital Systems Consultant

# Email Service (Resend or SendGrid)
EMAIL_API_KEY=
EMAIL_FROM=noreply@domain.com
EMAIL_TO=contact@domain.com

# Optional (v2+)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_KEY=
DATABASE_URL=
```

---

## 🎨 PAGE CONTENT SPECIFICATIONS

### HOME PAGE (/) - HYBRID CONVERSION DESIGN

#### Hero Section (Authority First)
**Headline:**
> Digital Systems Consultant for NGOs & Impact Organizations

**Subheadline:**
> I help organizations build secure, efficient, funder-ready digital systems that protect beneficiaries, strengthen programs, and prove real impact.

**CTAs:**
- Primary: "Book a Free Consultation" (blue button, large)
- Secondary: "View Services" (outline button)

**Hero Layout:**
- Split or full-width with hero image/illustration
- Hero image: NGO/impact organization working
- Mobile-first responsive

---

#### Why This Matters (Impact Psychology Section)
**Purpose:** Emotional connection to problem-solution

**Key Messaging:**
- "When your data works, lives are protected."
- "Better digital systems mean faster response, better care, and stronger community outcomes."
- "Secure systems donors and auditors trust."

**Layout:** 3 short statements with supporting icon

---

#### Who This Is For (3-Column Section)
**Purpose:** Segment positioning, speak to each audience

**Columns:**
1. **NGOs & Nonprofits**
   - Pain: [specific pain point]
   - Solution: [how you solve it]

2. **Health & Impact Programs**
   - Pain: [specific pain point]
   - Solution: [how you solve it]

3. **Businesses & Organizations**
   - Pain: [specific pain point]
   - Solution: [how you solve it]

**Layout:** 3 column grid with icon, heading, description

---

#### Services Overview (Service Layer)
**Purpose:** Introduce 5 service categories

**Services (5 Cards):**
1. Website Development
2. Forms & Automation
3. Website Fixes & Tech Support
4. NGO & Nonprofit Websites
5. Research & Reporting Support

**Each Card Contains:**
- Icon (professional, minimal)
- Service name (h4)
- Short outcome-focused description (2-3 lines)
- "View Service" link/CTA

**Layout:** Responsive grid (1 col mobile, 2-3 cols tablet, 5 cols on large screens - or card layout)

---

#### Why Choose Me (Trust Section)
**Purpose:** Build credibility and differentiation

**Points to Highlight:**
- ✅ NGO & health systems understanding
- ✅ Security & ethics focus
- ✅ Clear, structured deliverables
- ✅ Tiered package pricing
- ✅ Long-term support included

**Layout:** 5 feature cards with checkmarks or bullet points

---

#### Testimonials Section
**Purpose:** Social proof

**Structure:**
- 3-4 testimonials (mock if real clients unavailable)
- Quote text
- Client name, organization, role
- Org logo (optional)

---

#### Featured Case Studies (Preview)
**Purpose:** Demonstrate results

**Structure:**
- 3 featured case studies
- Image + Title + Brief outcome
- Link to full case study

---

#### Final CTA Section
**Headline:**
> Remove tech stress from your impact work.

**CTA Button:** "Start Your Journey" → Contact page

**Secondary Text:** "Book a free 30-minute consultation to understand your needs"

---

### SERVICES PAGE (/services) - STRUCTURED SELLING

**Purpose:** Service category directory and discovery

**Page Structure:**
- Hero section (title, tagline)
- Service grid (all 5 services)
- Each service card shows:
  - Icon
  - Service name
  - Problem it solves (1-2 lines focused on outcomes)
  - Who it's for (1 line)
  - "Explore Packages" link → /services/[slug]

**⚠️ CRITICAL:** Service cards on directory page should NOT include:
- ❌ Pricing (no "Starting at" or cost mentions)
- ❌ Duration or timeline information
- ❌ Package names or tier indicators

**Services:**
1. Website Development
2. Online Forms & Automation
3. Website Fixes & Technical Support
4. NGO & Nonprofit Websites
5. Online Research & Reporting

---

### SERVICE DETAIL PAGE (/services/[service-name]) - REUSABLE TEMPLATE

**Page Structure (7 Sections):**

#### 1. Service Overview
- Hero section with service name (h1)
- Tagline/value prop (2-3 lines)
- Key benefit statement

#### 2. Problems Clients Face
- 3-4 pain points specific to this service
- Use: "Many organizations struggle with..."
- Format: Bullet list or cards

#### 3. Your Solution
- How your approach solves each problem
- Emphasize: Risk reduction, credibility, trust, impact
- Format: Paired with problem statements or separate section

#### 4. Package Comparison (PROGRESSIVE PROBLEM-SOLVING MODEL)
- **3 tiers: Starter, Standard, Premium**
- **⚠️ NO PRICING OR DURATION shown**
- Each package shows:
  - Package name (Starter/Standard/Premium)
  - **"Problems Solved" or "What This Fixes" section** (DYNAMIC)
  - "Select Package" button

**Package Structure (Progressive Depth):**

**Starter Package:**
- Solves core problem(s)
- Example: "Fixes critical website issues preventing data collection"
- Lists 3-4 primary problems eliminated

**Standard Package (Includes Starter + MORE):**
- Everything in Starter
- **PLUS** additional problems solved
- Example: "Solves core issues PLUS improves data accuracy and adds reporting automation"
- Lists all problems from Starter + 2-3 new ones

**Premium Package (Includes Standard + MORE):**
- Everything in Standard
- **PLUS** advanced/edge case problems
- Example: "Comprehensive solution addressing all Standard problems PLUS advanced security, multi-user workflows, and integration with external systems"
- Lists all previous problems + 2-3 advanced ones

**Key Rules:**
- ✅ Problems Solved section changes when user clicks/switches packages
- ✅ Each tier shows cumulative value (previous tier's solutions + new ones)
- ✅ Use outcome-focused language: "eliminates", "prevents", "removes", "automates", "secures"
- ❌ Do NOT mention price, cost, duration, timeline, or delivery time
- ❌ Do NOT focus on features ("includes", "comes with")
- ✅ DO focus on problems disappearing ("stops...", "fixes...", "prevents...")

#### 5. FAQs
- 5-7 common questions about this service
- Format: Accordion or expanded Q&A

#### 6. Final CTA
- Button: "Request This Service" → /contact?service=[name]
- Alternative: "Book Consultation" (primary CTA)

---

### PRICING PAGE (/pricing) - PACKAGE TIERS

**Page Structure:**

#### Header
- Title: "Simple, Transparent Pricing"
- Tagline: "Packages designed for different needs"

#### Pricing Tiers (3 Main Cards)

**Tier 1: Starter**
- Target: Quick tasks, single deliverables
- Fast delivery
- Price: $XXX (USD), ₦XXX (NGN)
- 4-5 features
- "Choose Starter" button

**Tier 2: Standard** (Mark as "Most Popular")
- Target: Most customers
- Balanced scope & support
- Price: $XXX (USD), ₦XXX (NGN)
- 6-8 features
- "Choose Standard" button

**Tier 3: Premium**
- Target: Full systems, priority support
- Comprehensive
- Price: $XXX (USD), ₦XXX (NGN)
- 8+ features + priority support
- "Choose Premium" button

#### Pricing Note
> Custom pricing available for complex or donor-funded projects. Contact us for consultation.

#### Comparison Table (Optional)
- All 3 tiers side-by-side
- Feature comparison
- Timeline comparison
- Support level comparison

#### FAQ Section
- Questions about pricing, billing, timelines

---

### ABOUT PAGE (/about) - AUTHORITY & TRUST

**Page Structure:**

#### Professional Bio
- Photo (professional headshot)
- Full name + title
- 2-3 paragraph biography
- Focus: Background, experience, why this work matters

#### Certifications & Qualifications
- **Community Health Planning & Implementation**
- **Web & Computer Programming**
- Other relevant credentials

#### Core Belief Statement
> Most people understand either tech or impact. I work at the intersection.

#### Mission Statement
> Helping organizations run better online through smart, secure systems.

#### Values/Approach
- Security & ethics first
- Transparency
- Long-term partnership mindset
- Respect for NGO constraints

#### Services List
- Links to /services

#### CTA
- "Let's Talk" button → /consultation or /contact

---

### PORTFOLIO PAGE (/portfolio) - CASE STUDIES DIRECTORY

**Page Structure:**

#### Header
- Title: "Results & Impact"
- Tagline: "See how we've helped organizations like yours"

#### Case Study Grid (3+ Case Studies)
- Each case study card:
  - Image or screenshot
  - Organization/Project name
  - Brief description (1-2 lines)
  - Result metric (e.g., "40% faster data processing")
  - "View Case Study" link → /portfolio/[slug]

#### Services Featured
- Show which services were used per case study

---

### CASE STUDY DETAIL PAGE (/portfolio/[case-slug]) - SOCIAL PROOF

**Page Structure:**

#### Case Study Header
- Organization name (h1)
- Industry/type (e.g., "Health NGO")
- Headline: Problem + outcome

#### Challenge Section
- What problem did organization face?
- Impact: What was at stake?
- Format: 2-3 paragraphs

#### Solution Section
- What did we build/implement?
- Approach and methodology
- Tools & technologies used
- Format: 2-3 paragraphs + optional images/screenshots

#### Results & Metrics
- Key outcomes (3-5 metrics)
- Format: Cards or highlighted boxes
- Example: "40% faster reporting", "60% data accuracy improvement"

#### Implementation Timeline
- How long did it take?
- Phases of work
- Format: Timeline visualization or text

#### Testimonial
- Quote from organization representative
- Name, title, organization

#### Related Services
- Links to related services used in this project

#### Final CTA
- "Get Similar Results" → /consultation
- "Explore Services" → /services

---

### HOW IT WORKS PAGE (/how-it-works) - PROCESS CLARITY

**Page Structure:**

#### Overview
- Title: "Our Process"
- Tagline: "How we work with you, step by step"

#### Process Steps (4-5 Steps)
**Step 1: Discovery**
- What: Initial consultation & needs assessment
- Timeline: 1 week
- Deliverable: Scope & proposal

**Step 2: Planning & Design**
- What: System design, user experience planning
- Timeline: 2-3 weeks
- Deliverable: Design mockups, technical specs

**Step 3: Implementation**
- What: Building, coding, deployment
- Timeline: 4-8 weeks (varies by scope)
- Deliverable: Live system

**Step 4: Training & Launch**
- What: Team training, documentation, launch
- Timeline: 1-2 weeks
- Deliverable: Trained team, live system

**Step 5: Support & Optimization** (Optional)
- What: Ongoing support and improvements
- Timeline: Ongoing
- Deliverable: Stable, optimized system

#### Timeline Visualization
- Visual timeline showing all steps
- Estimated durations

#### FAQ
- Common questions about timeline, process, deliverables

#### CTA
- "Start Your Journey" → /consultation
- "View Services" → /services

---

### CONTACT PAGE (/contact) - REQUEST & INQUIRY

**Page Structure:**

#### Header
- Title: "Get in Touch"
- Tagline: "Let's discuss your needs"

#### Contact Information
- Email address (with mailto: link)
- WhatsApp number (with WhatsApp link)
- Business hours / response time expectation

#### Contact Form
**Fields:**
1. Full Name (required)
2. Email (required, email validation)
3. Organization (required)
4. Organization Type (dropdown: NGO, Nonprofit, Health Program, Business, Other)
5. Service Needed (dropdown: Website, Forms & Automation, Tech Support, Other)
6. Project Description (textarea, required)
7. Budget Range (dropdown: <$500, $500-$2000, $2000-$5000, $5000+, Not sure)
8. Timeline (dropdown: ASAP, 1-3 months, 3-6 months, Not urgent)
9. Checkbox: "I agree to be contacted" (required)

**Form Behavior:**
- Client-side validation (React Hook Form)
- Server-side validation (Zod)
- Success message with next steps
- Error states with clear messages
- Send confirmation email to user

#### Alternative Contact Methods
- Email: direct.email@domain.com
- WhatsApp: +1 (XXX) XXX-XXXX
- Response time: "Typically within 24 hours"

---

### CONSULTATION SUCCESS PAGE (/consultation/success) - CONFIRMATION

**Page Structure:**

#### Confirmation Message
- Title: "Thank you! Your consultation request has been received."
- Message: "We'll be in touch within 24 hours to confirm your booking."

#### What Happens Next
- Step 1: We'll review your needs
- Step 2: We'll send you a calendar link
- Step 3: Schedule your 30-minute consultation
- Step 4: Discuss your project in detail

#### Email Confirmation
- Display: "We've sent a confirmation to: [email]"
- Message: "Check your inbox for details"

#### CTAs
- "Return to Home" → /
- "View Services" → /services
- "Browse Pricing" → /pricing

---

## 📋 PAGE CONTENT CHECKLIST

### All Pages Must Include:
✅ Clear headline (h1)  
✅ Tagline/subheading (value prop)  
✅ Primary CTA (blue button)  
✅ Secondary CTA (optional)  
✅ Professional imagery or icons  
✅ Mobile-responsive layout  
✅ Semantic HTML  
✅ Meta title & description (SEO)  
✅ Accessible (ARIA labels, color contrast)  

### All Forms Must Include:
✅ Clear field labels  
✅ Required field indicators  
✅ Placeholder text  
✅ Error messages (field-specific)  
✅ Success message  
✅ Email confirmation  
✅ Server-side validation  
✅ CSRF protection  
✅ Rate limiting  

---

## 🎯 SUCCESS CRITERIA FOR COMPLETE SITE

✅ **Look international and premium**  
✅ **Instantly build trust** (testimonials, credentials, security)  
✅ **Clearly explain value** (positioning, benefits, proof)  
✅ **Convert visitors into action** (multiple CTAs, clear funnels)  
✅ **Scale into advanced platforms** (admin-ready, extensible)  

---

## ✅ APPROVAL CHECKLIST

Before implementation, confirm:

- [ ] **Routes are correct** - All 8 required pages + 2 bonus pages (portfolio detail, success)
- [ ] **Folder structure is logical** - App router, components organized by type
- [ ] **Component hierarchy is clear** - Reusable, composable architecture
- [ ] **API endpoints are sufficient** - 4 routes cover all form submissions
- [ ] **Data flow is understood** - Constants → Components → Pages
- [ ] **Conversion paths are evident** - Multiple CTAs, clear funnels
- [ ] **Security approach is solid** - Server-side validation, sanitization
- [ ] **Responsive strategy is set** - Mobile-first, Tailwind breakpoints
- [ ] **This structure aligns with SYSTEM_BRAIN** - Hybrid system, NGO-focused, future-ready

---

**READY FOR APPROVAL?**

Any changes needed before implementation?
