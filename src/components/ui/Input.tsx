import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', label, error, helperText, id, ...props }, ref) => {
        const inputId = id || React.useId();

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-neutral-charcoal mb-1.5"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={`
            block w-full px-4 py-3 rounded-md border-2 bg-neutral-pure text-neutral-charcoal
            placeholder:text-neutral-steel
            focus:outline-none focus:ring-2 focus:ring-opacity-20
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors duration-200
            ${error
                            ? 'border-functional-error focus:border-functional-error focus:ring-functional-error'
                            : 'border-neutral-light focus:border-technical-blue focus:ring-technical-blue'
                        }
            ${className}
          `}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                    {...props}
                />
                {error && (
                    <p id={`${inputId}-error`} className="mt-1.5 text-sm text-functional-error">
                        {error}
                    </p>
                )}
                {!error && helperText && (
                    <p id={`${inputId}-helper`} className="mt-1.5 text-sm text-neutral-steel">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
