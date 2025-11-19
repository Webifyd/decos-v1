import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'fluid';
}

export const Container = ({
    className = '',
    size = 'xl',
    children,
    ...props
}: ContainerProps) => {

    const sizes = {
        xs: 'max-w-xs',
        sm: 'max-w-screen-sm',
        md: 'max-w-screen-md',
        lg: 'max-w-screen-lg',
        xl: 'max-w-screen-xl',
        '2xl': 'max-w-screen-2xl',
        fluid: 'max-w-full',
    };

    return (
        <div
            className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
