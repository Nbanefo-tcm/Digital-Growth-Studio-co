# Reusable Components - LOCKED
## Digital Systems Consultant Website

🔒 **STATUS: FULLY LOCKED & APPROVED**  
**Locked Date:** January 26, 2026  
**Final Approval:** CONFIRMED - Do NOT modify without explicit user request  
**Status:** All core reusable components built, tested, and ready for use

### FINAL LOCK NOTICE
All reusable UI components are now LOCKED and serve as the definitive, production-ready components for all page implementation.

**LOCKED COMPONENTS (9 Total):**

---

## 🎯 LAYOUT COMPONENTS (2)

### 1. **Navbar** (`src/components/layout/Navbar.tsx`)
✅ LOCKED - Production Ready

**Features:**
- Fixed, z-50 positioning
- Logo/brand text support
- Desktop navigation menu (hidden on mobile)
- Mobile hamburger menu
- Primary CTA button (Book Consultation)
- Fully responsive
- Accessibility compliant

**Props:**
```typescript
interface NavbarProps {
  logo?: string;
  logoText?: string;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}
```

**Default Navigation:**
- Services
- Portfolio
- How It Works
- About
- Contact

**Usage:**
```tsx
<Navbar 
  logoText="Digital Systems"
  ctaLabel="Book Free Consultation"
  ctaHref="/consultation"
/>
```

---

### 2. **Footer** (`src/components/layout/Footer.tsx`)
✅ LOCKED - Production Ready

**Features:**
- Company info & tagline
- Quick links section
- Contact info (email, phone, WhatsApp)
- Trust badges
- Legal links (Privacy, Terms)
- Copyright & year auto-update
- Dark background (neutral-900)
- Fully responsive

**Props:**
```typescript
interface FooterProps {
  companyName?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  footerLinks?: FooterLink[];
  legalLinks?: FooterLink[];
  showSocialLinks?: boolean;
}
```

**Usage:**
```tsx
<Footer 
  companyName="Digital Systems Consultant"
  email="hello@domain.com"
  phone="+1 (XXX) XXX-XXXX"
  whatsapp="12345678900"
/>
```

---

## 📋 SECTION COMPONENTS (2)

### 3. **CTABlock** (`src/components/sections/CTABlock.tsx`)
✅ LOCKED - Production Ready

**Features:**
- Headline (h2) + optional subheadline
- Dual button layout (primary + secondary)
- Light (primary-50 background) or dark (neutral-900) variants
- Centered or left-aligned text
- Responsive button stacking
- Maximum width constraint for readability

**Props:**
```typescript
interface CTABlockProps {
  headline: string;
  subheadline?: string;
  primaryButtonLabel?: string;
  primaryButtonHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  variant?: 'light' | 'dark';
  centered?: boolean;
}
```

**Usage:**
```tsx
<CTABlock 
  headline="Remove tech stress from your impact work."
  subheadline="Let's discuss your digital needs."
  primaryButtonLabel="Book a Free Consultation"
  primaryButtonHref="/consultation"
  secondaryButtonLabel="View Services"
  secondaryButtonHref="/services"
  variant="light"
  centered
/>
```

---

### 4. **SectionHeader** (`src/components/sections/SectionHeader.tsx`)
✅ LOCKED - Production Ready

**Features:**
- Subtitle/overline (uppercase, colored)
- Title (h2, bold)
- Optional description text
- Alignment options (left, center, right)
- Dark/default variants
- Maximum width for centered layouts

**Props:**
```typescript
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'default' | 'dark';
}
```

**Usage:**
```tsx
<SectionHeader 
  subtitle="Services"
  title="What We Do"
  description="Professional digital solutions tailored for your organization."
  align="center"
/>
```

---

## 🎴 CARD COMPONENTS (1)

### 5. **ServiceCard** (`src/components/cards/ServiceCard.tsx`)
✅ LOCKED - Production Ready

**Features:**
- Optional icon support
- Title (h3), description, short description
- "Learn More" link with arrow
- Hover shadow effect
- Flex layout for consistent height
- Responsive padding

**Props:**
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
  shortDescription?: string;
}
```

**Usage:**
```tsx
<ServiceCard 
  title="Professional Websites"
  shortDescription="Credibility-building online presence"
  description="We build secure, fast, SEO-optimized websites that instantly establish trust and convert visitors into clients."
  icon={<WebIcon />}
  href="/services/websites"
/>
```

---

## 📝 FORM COMPONENTS (4)

### 6. **FormInput** (`src/components/forms/FormInput.tsx`)
✅ LOCKED - Production Ready

**Features:**
- Supports all HTML input types
- Label with required indicator
- Error message display
- Helper text (when no error)
- Validation styling (error state)
- Focus ring (primary color)
- Disabled state styling
- Placeholder support

**Props:**
```typescript
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | undefined;
  helperText?: string;
  required?: boolean;
}
```

**Usage:**
```tsx
<FormInput 
  label="Email Address"
  type="email"
  placeholder="hello@domain.com"
  required
  error={errors.email}
  {...register('email')}
/>
```

---

### 7. **FormTextarea** (`src/components/forms/FormTextarea.tsx`)
✅ LOCKED - Production Ready

**Features:**
- Multi-line text input
- Same validation as FormInput
- No resize (fixed height)
- Label with required indicator
- Error message display
- Helper text support
- Focus ring styling

**Props:**
```typescript
interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: FieldError | undefined;
  helperText?: string;
  required?: boolean;
}
```

**Usage:**
```tsx
<FormTextarea 
  label="Project Description"
  placeholder="Tell us about your project..."
  required
  error={errors.description}
  {...register('description')}
/>
```

---

### 8. **FormSelect** (`src/components/forms/FormSelect.tsx`)
✅ LOCKED - Production Ready

**Features:**
- Dropdown select component
- Options array with value/label pairs
- Optional placeholder option
- Label with required indicator
- Error message display
- Helper text support
- Focus ring styling
- Native appearance maintained

**Props:**
```typescript
interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: FieldError | undefined;
  helperText?: string;
  required?: boolean;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
}
```

**Usage:**
```tsx
<FormSelect 
  label="Service Type"
  placeholder="Select a service..."
  required
  options={[
    { value: 'website', label: 'Website Development' },
    { value: 'automation', label: 'Forms & Automation' },
    { value: 'support', label: 'Tech Support' }
  ]}
  error={errors.service}
  {...register('service')}
/>
```

---

### 9. **FormCheckbox** (`src/components/forms/FormCheckbox.tsx`)
✅ LOCKED - Production Ready

**Features:**
- Checkbox input with label
- Label clickable (better UX)
- Error message display
- Helper text support
- Accent color highlight on check
- Disabled state styling
- Small icon (size 5)

**Props:**
```typescript
interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | undefined;
  helperText?: string;
}
```

**Usage:**
```tsx
<FormCheckbox 
  label="I agree to terms & privacy policy"
  error={errors.agree}
  {...register('agree')}
/>
```

---

## 🛠️ UTILITY & TYPE FILES (2)

### 10. **Utils** (`src/lib/utils.ts`)
✅ LOCKED - Production Ready

**Functions:**
- `cn()` - Merge Tailwind classNames
- `formatDate()` - Format dates to readable string
- `formatPrice()` - Format prices (USD/NGN)
- `slugify()` - Convert text to URL slugs
- `isValidEmail()` - Email validation
- `isValidPhone()` - Phone validation
- `truncate()` - Truncate text to length
- `debounce()` - Debounce function execution

---

### 11. **Types** (`src/lib/types.ts`)
✅ LOCKED - Production Ready

**Interfaces:**
- `Service` - Service definition with packages
- `ServicePackage` - Package tier (Starter, Standard, Premium)
- `ContactRequest` - Contact form submission
- `ConsultationRequest` - Consultation booking
- `ServiceRequest` - Service project request
- `CaseStudy` - Case study with results
- `TestimonialCard` - Testimonial data
- `APIResponse<T>` - Generic API response

---

## 🎨 DESIGN SYSTEM INTEGRATION

All components use locked design tokens from `DESIGN_SYSTEM.md`:

✅ **Colors:** Primary Blue (#0B84F3), Accent Green (#22C55E), Neutral Grays  
✅ **Typography:** Inter sans-serif, 6-level scale  
✅ **Spacing:** 4px base grid  
✅ **Borders:** 4px, 8px, 12px, 16px, 9999px radius  
✅ **Shadows:** sm, md, lg, xl  
✅ **Transitions:** 75ms, 100ms, 150ms, 200ms, 300ms  

---

## 🔒 COMPONENT CHANGE POLICY

**NO MODIFICATIONS** to locked components without explicit written user approval.

Locked aspects:
- Component interface/props
- Styling (Tailwind classes)
- Behavior & logic
- Accessibility features
- Error handling

**Allowed without approval:**
- Using components in pages
- Passing different prop values
- Composing components together
- Creating new pages with components

---

## ✅ LOCKED FOUNDATION STATUS

**All Three Locked Documents:**
1. ✅ **SYSTEM_BRAIN.md** - Positioning, brand, objectives (LOCKED)
2. ✅ **SITE_STRUCTURE.md** - Pages, routes, content specs (LOCKED)
3. ✅ **DESIGN_SYSTEM.md** - Design tokens, global styles (LOCKED)
4. ✅ **COMPONENTS_LOCKED.md** - This file - All reusable components (LOCKED)

---

**READY FOR PAGE IMPLEMENTATION**

All components are production-ready. Pages can now be built using these components.

No component edits required unless explicitly approved.
