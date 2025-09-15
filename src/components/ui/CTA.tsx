import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

/**
 * CTA Component Props Interface
 */
export interface CTAProps {
  /** The text displayed on the CTA button */
  text: string;
  /** URL for navigation (makes component render as link) */
  href?: string;
  /** Click handler function */
  onClick?: () => void;
  /** Style variant */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Target for links */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** Rel attribute for links */
  rel?: string;
}

/**
 * Reusable Call-to-Action Component
 * 
 * @example
 * // Basic button usage
 * <CTA text="Get Started" onClick={() => console.log('clicked')} />
 * 
 * @example
 * // Link usage
 * <CTA text="Learn More" href="/about" variant="secondary" />
 * 
 * @example
 * // With loading state
 * <CTA text="Submit" loading={isSubmitting} variant="primary" size="large" />
 */
const CTA: React.FC<CTAProps> = ({
  text,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  className = '',
  target,
  rel,
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-sf-pro-text rounded-full';

  // Variant styles
  const variantStyles = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 shadow-md hover:shadow-lg',
    outline: 'border-2 border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white focus:ring-gray-500 shadow-md hover:shadow-lg'
  };

  // Size styles
  const sizeStyles = {
    small: 'px-4 py-2 text-sm gap-1',
    medium: 'px-6 py-3 text-base gap-2',
    large: 'px-8 py-4 text-lg gap-2'
  };

  // Combine all styles
  const combinedStyles = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  ].filter(Boolean).join(' ');

  // Loading spinner size based on button size
  const spinnerSize = {
    small: 14,
    medium: 16,
    large: 18
  };

  // Common content
  const content = (
    <>
      {loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Loader2 size={spinnerSize[size]} className="animate-spin" />
        </motion.div>
      )}
      <span className={loading ? 'opacity-70' : ''}>
        {loading ? 'Loading...' : text}
      </span>
    </>
  );

  // Motion variants
  const motionProps = {
    whileHover: disabled || loading ? {} : { 
      scale: 1.02, 
      y: -1,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    whileTap: disabled || loading ? {} : { 
      scale: 0.98,
      transition: { duration: 0.1, ease: 'easeOut' }
    }
  };

  // Render as link if href is provided
  if (href) {
    return (
      <motion.a
        href={disabled ? undefined : href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedStyles}
        onClick={disabled || loading ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled || loading}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  // Render as button
  return (
    <motion.button
      type="button"
      className={combinedStyles}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default CTA;