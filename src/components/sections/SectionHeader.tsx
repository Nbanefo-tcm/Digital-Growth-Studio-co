'use client';

import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'default' | 'dark';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  align = 'center',
  variant = 'default',
}) => {
  const alignClass =
    align === 'center'
      ? 'text-center'
      : align === 'right'
        ? 'text-right'
        : 'text-left';

  const maxWidthClass = align === 'center' ? 'max-w-2xl mx-auto' : '';

  const titleColor =
    variant === 'dark' ? 'text-neutral-900' : 'text-neutral-800';
  const subtitleColor =
    variant === 'dark' ? 'text-primary-600' : 'text-primary-500';
  const descriptionColor =
    variant === 'dark' ? 'text-neutral-700' : 'text-neutral-600';

  return (
    <div className={`${maxWidthClass} ${alignClass}`}>
      {/* Subtitle/Overline */}
      {subtitle && (
        <p className={`text-sm font-semibold uppercase tracking-wider ${subtitleColor} mb-3`}>
          {subtitle}
        </p>
      )}

      {/* Title */}
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className={`text-lg ${descriptionColor} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
