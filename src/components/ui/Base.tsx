import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-apple-blue text-white hover:bg-blue-600',
    secondary: 'bg-apple-secondary text-apple-text hover:bg-gray-200',
    ghost: 'bg-transparent text-apple-text hover:bg-apple-secondary',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        'rounded-full font-medium transition-all duration-200 active:scale-95 disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

export const Card = ({ 
  className, 
  children,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'apple-card p-6 overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
