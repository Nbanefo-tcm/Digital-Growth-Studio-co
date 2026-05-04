'use client';

import React from 'react';
import { FieldError } from 'react-hook-form';
import { cn } from '@/lib/utils';

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: FieldError | string | undefined;
  helperText?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}

export const FormTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FormTextareaProps
>(
  (
    { label, error, helperText, required, className, ...props },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-semibold text-neutral-700">
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          className={cn(
            'w-full px-4 py-3 border-2 border-neutral-300 rounded-md font-base text-neutral-800 transition-all duration-200 ease-in-out placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100 disabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 resize-none',
            error && 'border-error focus:border-error focus:ring-red-100',
            className
          )}
          onChange={(e) => {
            const customOnChange = props.onChange;
            if (customOnChange) {
              customOnChange(e.target.value);
            }
          }}
          {...props}
        />

        {error && (
          <span className="text-sm font-medium text-error">
            {typeof error === 'string' ? error : error.message}
          </span>
        )}

        {helperText && !error && (
          <span className="text-sm text-neutral-500">{helperText}</span>
        )}
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;
