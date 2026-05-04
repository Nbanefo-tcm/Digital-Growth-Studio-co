import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-neutral-900">404</h1>
          <h2 className="text-2xl font-semibold text-neutral-800">Page Not Found</h2>
          <p className="text-lg text-neutral-600">
            Sorry, we couldn't find the page you're looking for. The page might have been removed, renamed, or is temporarily unavailable.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" className="inline-flex items-center gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Go to Homepage
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            className="inline-flex items-center gap-2"
            onClick={() => window.history.back()}
          >
            <button>
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </Button>
        </div>
        
        <div className="pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500">
            If you believe this is an error, please contact our support team at{' '}
            <a 
              href="mailto:DigitalGrowthStudio@outlook.com" 
              className="text-primary-600 hover:text-primary-700 underline"
            >
              DigitalGrowthStudio@outlook.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
