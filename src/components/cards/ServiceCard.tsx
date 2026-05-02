'use client';

import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
  shortDescription?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  href,
  shortDescription,
}) => {
  return (
    <div className="bg-white rounded-md shadow-md p-6 transition-all duration-200 ease-in-out hover:shadow-lg h-full flex flex-col">
      {/* Icon */}
      {icon && <div className="mb-4 text-primary-500">{icon}</div>}

      {/* Title */}
      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">{title}</h3>

      {/* Short Description */}
      {shortDescription && (
        <p className="text-neutral-600 text-sm mb-2">{shortDescription}</p>
      )}

      {/* Description */}
      <p className="text-neutral-700 mb-6 flex-grow">{description}</p>

      {/* Link/CTA */}
      <Link
        href={href}
        className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 inline-flex items-center gap-2"
      >
        Learn More →
      </Link>
    </div>
  );
};

export default ServiceCard;
