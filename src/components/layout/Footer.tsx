'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MessageSquare, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  companyName?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  footerLinks?: FooterLink[];
  legalLinks?: FooterLink[];
}

const defaultFooterLinks: FooterLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const defaultLegalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export const Footer: React.FC<FooterProps> = ({
  companyName = 'Digital Growth Studio',
  tagline = 'Professional digital solutions for NGOs & impact organizations',
  email = 'DigitalGrowthStudio@outlook.com',
  phone = '+1 (945) 391-1924',
  whatsapp ,
  footerLinks = defaultFooterLinks,
  legalLinks = defaultLegalLinks,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-2">{companyName}</h3>
            <p className="text-neutral-400 text-sm mb-6">{tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-500" />
                <a
                  href={`mailto:${email}`}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-500" />
                <a
                  href={`tel:${phone}`}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </div>
              {whatsapp && (
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-accent-500" />
                  <a
                    href={`https://wa.me/${whatsapp}`}
                    className="text-neutral-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://wa.me/19453911924"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com/company/digital-growth-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://facebook.com/digitalgrowthstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com/digitalgrowthstu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com/digitalgrowthstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>✓ NGO & Nonprofit Experts</li>
              <li>✓ Security-First Design</li>
              <li>✓ Results-Proven Platform</li>
              <li>✓ 24/7 Support Available</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 pt-8 mt-8">
          {/* Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex gap-6 flex-wrap justify-center md:justify-start">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-neutral-500">
            <p>
              © {currentYear} {companyName}. All rights reserved. | Built with
              expertise for organizations that matter.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
