# Digital Systems Consultant Website

Professional, scalable web platform for NGOs & impact organizations.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm run start
```

### Linting & Type Checking

```bash
npm run lint
npm run type-check
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navbar/Footer
│   ├── page.tsx           # Homepage
│   ├── styles/            # Global CSS
│   └── api/               # API routes
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Page sections (Hero, CTA, etc)
│   ├── cards/             # Reusable cards (Service, Case Study, etc)
│   ├── forms/             # Form components
│   └── ui/                # Basic UI components (Button, Badge, etc)
├── lib/
│   ├── types.ts           # TypeScript interfaces
│   ├── utils.ts           # Utility functions
│   └── constants.ts       # Data & configuration
└── styles/                # Global CSS files
```

---

## 🎨 Design System

- **Colors**: Primary Blue (#0B84F3), Accent Green (#22C55E), Neutral Grays
- **Typography**: Inter sans-serif, 6-level scale
- **Spacing**: 4px base grid
- **Components**: Buttons (5 variants), Forms, Cards, Sections
- **Responsive**: Mobile-first, Tailwind breakpoints

See `DESIGN_SYSTEM.md` for full reference.

---

## 📄 Pages & Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage - Authority + services overview |
| `/services` | Services directory |
| `/services/[slug]` | Service detail + packages |
| `/pricing` | Pricing & packages comparison |
| `/about` | About + credentials |
| `/portfolio` | Case studies directory |
| `/portfolio/[slug]` | Case study detail |
| `/how-it-works` | Process explanation |
| `/contact` | Contact form |

---

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EMAIL_API_KEY=your_key_here
EMAIL_FROM=noreply@domain.com
EMAIL_TO=contact@domain.com
```

### Tailwind CSS

Custom tokens configured in `tailwind.config.js`:
- All design system colors
- Typography scale
- Spacing grid
- Component patterns

---

## 📦 Dependencies

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Lucide React** - Icons
- **clsx** - className utilities

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Hosts

Build and deploy the `/out` directory:

```bash
npm run build
```

---

## 📚 Documentation

- `SYSTEM_BRAIN.md` - Business positioning & strategy (LOCKED)
- `SITE_STRUCTURE.md` - Pages, routes, content specs (LOCKED)
- `DESIGN_SYSTEM.md` - Design tokens, components (LOCKED)

---

## 🔒 Security

- CSRF protection (Next.js built-in)
- Server-side form validation
- Input sanitization
- Environment variables for secrets
- Security headers configured

---

## 📞 Support

For questions or issues, refer to the documentation files or create an issue.

---

**Built with expertise for organizations that matter.**
