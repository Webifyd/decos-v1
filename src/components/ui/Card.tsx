import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

export const Card = ({ className = '', hover = false, children, ...props }: CardProps) => {
    return (
        <div
            className={`
        bg-neutral-pure rounded-lg shadow-sm border border-neutral-soft 
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg' : ''} 
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export const CardHeader = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`p-6 border-b border-neutral-soft ${className}`} {...props}>
        {children}
    </div>
);

export const CardBody = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`p-6 ${className}`} {...props}>
        {children}
    </div>
);

export const CardFooter = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`p-6 border-t border-neutral-soft bg-neutral-clean/50 rounded-b-lg ${className}`} {...props}>
        {children}
    </div>
);
