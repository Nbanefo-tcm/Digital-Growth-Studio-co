/**
 * Type definitions for the application
 */

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  shortDescription: string;
  deliverables?: string[];
  packages: ServicePackage[];
}

export interface ServicePackage {
  name: 'Starter' | 'Standard' | 'Premium';
  price: number;
  currency: 'USD' | 'NGN';
  features: string[];
  timeline: string;
  type: 'fixed' | 'retainer' | 'hybrid';
}

export interface ContactRequest {
  id?: string;
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
}

export interface ConsultationRequest {
  id?: string;
  name: string;
  email: string;
  organization: string;
  organizationType?: 'ngo' | 'nonprofit' | 'health' | 'business' | 'other';
  challenge: string;
  timeline: string;
  createdAt?: Date;
  status?: 'new' | 'contacted' | 'scheduled' | 'completed';
}

export interface ServiceRequest {
  id?: string;
  clientName: string;
  clientEmail: string;
  organization?: string;
  serviceType: string;
  packageSelected: string;
  projectDescription: string;
  budgetRange: string;
  timeline: string;
  createdAt?: Date;
  status?: 'submitted' | 'reviewing' | 'approved' | 'rejected';
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  organization: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  testimonial?: string;
}

export interface TestimonialCard {
  quote: string;
  author: string;
  role: string;
  organization: string;
  logo?: string;
}

export interface APIResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string>;
}
