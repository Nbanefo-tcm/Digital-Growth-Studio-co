'use client';

import React from 'react';
import { FieldError } from 'react-hook-form';
import { cn } from '@/lib/utils';

interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: FieldError | string | undefined;
  helperText?: string;
  required?: boolean;
  options: Array<{
    value: string;
    label: string;
  }>;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      options,
      placeholder,
      className,
      ...props
    },
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

        <select
          ref={ref}
          className={cn(
            'w-full px-4 py-3 border-2 border-neutral-300 rounded-md font-base text-neutral-800 transition-all duration-200 ease-in-out placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100 disabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 appearance-none',
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
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

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

FormSelect.displayName = 'FormSelect';

export default FormSelect;
