import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Digital Systems Consultant | NGOs & Impact Organizations',
  description:
    'I help NGOs and impact organizations build secure, efficient, funder-ready digital systems that protect beneficiaries, strengthen programs, and prove real impact.',
  keywords: [
    'NGO websites',
    'nonprofit digital systems',
    'impact organizations',
    'digital transformation',
  ],
  authors: [{ name: 'Digital Systems Consultant' }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Digital Systems Consultant | NGOs & Impact Organizations',
    description:
      'Professional digital solutions for organizations that need reliability, credibility, and results.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
