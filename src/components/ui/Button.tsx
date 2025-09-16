import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'vision';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'vision',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  fullWidth = false,
  rounded = 'full',
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-[#f4f3ee] focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed font-sf-pro-text';


  const variantStyles = {
    ghost: 'text-white border border-transparent hover:border-white hover:backdrop-blur-xl',
    vision:
      ''
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-1',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2',
    xl: 'px-10 py-5 text-xl gap-3'
  };

  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
  };

  const combinedStyles = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    roundedStyles[rounded],
    widthStyles,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.button
      className={combinedStyles}
      disabled={disabled || loading}
      whileHover={{
        scale: 1.02,
        y: -1,
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.15, ease: 'easeOut' }
      }}
      {...props}
    >
      {loading ? (
        <>
          <motion.svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </motion.svg>
          Loading...
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon size={iconSizes[size]} className="mr-2" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon size={iconSizes[size]} className="ml-2" />}
        </>
      )}
    </motion.button>
  );
};

export default Button;
