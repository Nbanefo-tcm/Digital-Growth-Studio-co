'use client';

import React from 'react';
import { FieldError } from 'react-hook-form';
import { cn } from '@/lib/utils';

interface FormCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | string | undefined;
  helperText?: string;
  onValueChange?: (value: boolean) => void;
}

export const FormCheckbox = React.forwardRef<HTMLInputElement, FormCheckboxProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <input
            ref={ref}
            type="checkbox"
            className={cn(
              'w-5 h-5 mt-1 border-2 border-neutral-300 rounded accent-primary-500 transition-all duration-200 ease-in-out cursor-pointer focus:border-primary-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
              error && 'border-error',
              className
            )}
            onChange={(e) => {
              const customOnChange = props.onValueChange;
              if (customOnChange) {
                customOnChange(e.target.checked);
              }
            }}
            {...props}
          />

          {label && (
            <label className="text-sm font-medium text-neutral-700 cursor-pointer">
              {label}
            </label>
          )}
        </div>

        {error && (
          <span className="text-sm font-medium text-error ml-8">
            {typeof error === 'string' ? error : error.message}
          </span>
        )}

        {helperText && !error && (
          <span className="text-sm text-neutral-500 ml-8">{helperText}</span>
        )}
      </div>
    );
  }
);

FormCheckbox.displayName = 'FormCheckbox';

export default FormCheckbox;
