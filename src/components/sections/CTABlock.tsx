'use client';

import React from 'react';
import Link from 'next/link';

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

export const CTABlock: React.FC<CTABlockProps> = ({
  headline,
  subheadline,
  primaryButtonLabel = 'Get Started',
  primaryButtonHref = '/consultation',
  secondaryButtonLabel,
  secondaryButtonHref,
  variant = 'light',
  centered = true,
}) => {
  const bgClass = variant === 'dark' ? 'bg-neutral-900 text-white' : 'bg-primary-50';
  const textColorClass =
    variant === 'dark' ? 'text-white' : 'text-neutral-800';
  const headlineColorClass =
    variant === 'dark' ? 'text-white' : 'text-neutral-900';

  return (
    <section className={`py-16 px-4 md:px-8 ${bgClass}`}>
      <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
        {/* Headline */}
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${headlineColorClass}`}>
          {headline}
        </h2>

        {/* Subheadline */}
        {subheadline && (
          <p className={`text-lg md:text-xl mb-8 ${textColorClass} opacity-90`}>
            {subheadline}
          </p>
        )}

        {/* Buttons */}
        <div
          className={`flex flex-col md:flex-row gap-4 ${
            centered ? 'md:justify-center' : ''
          }`}
        >
          {/* Primary Button */}
          <Link
            href={primaryButtonHref}
            className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg transition-all duration-200 ease-in-out hover:bg-primary-600 hover:shadow-lg active:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 text-center"
          >
            {primaryButtonLabel}
          </Link>

          {/* Secondary Button */}
          {secondaryButtonLabel && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className={`px-8 py-4 font-semibold rounded-lg transition-all duration-200 ease-in-out text-center ${
                variant === 'dark'
                  ? 'border-2 border-white text-white hover:bg-white hover:bg-opacity-10'
                  : 'border-2 border-primary-500 text-primary-600 hover:bg-primary-100'
              }`}
            >
              {secondaryButtonLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
