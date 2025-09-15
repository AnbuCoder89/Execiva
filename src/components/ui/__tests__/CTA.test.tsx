import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CTA from '../CTA';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Loader2: ({ className }: { className?: string }) => (
    <div data-testid="loader" className={className}>Loading...</div>
  ),
}));

describe('CTA Component', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with required text prop', () => {
      render(<CTA text="Click me" />);
      expect(screen.getByRole('button')).toHaveTextContent('Click me');
    });

    it('renders as button by default', () => {
      render(<CTA text="Button" />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders as link when href is provided', () => {
      render(<CTA text="Link" href="/test" />);
      expect(screen.getByRole('link')).toBeInTheDocument();
      expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
    });
  });

  // Click handling tests
  describe('Click Handling', () => {
    it('calls onClick when button is clicked', () => {
      const handleClick = jest.fn();
      render(<CTA text="Click me" onClick={handleClick} />);
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const handleClick = jest.fn();
      render(<CTA text="Click me" onClick={handleClick} disabled />);
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not call onClick when loading', () => {
      const handleClick = jest.fn();
      render(<CTA text="Click me" onClick={handleClick} loading />);
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // Variant tests
  describe('Variants', () => {
    it('applies primary variant styles by default', () => {
      render(<CTA text="Primary" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-gray-900', 'text-white');
    });

    it('applies secondary variant styles', () => {
      render(<CTA text="Secondary" variant="secondary" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-gray-100', 'text-gray-900');
    });

    it('applies outline variant styles', () => {
      render(<CTA text="Outline" variant="outline" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('border-2', 'border-gray-900', 'bg-transparent');
    });
  });

  // Size tests
  describe('Sizes', () => {
    it('applies medium size by default', () => {
      render(<CTA text="Medium" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-6', 'py-3', 'text-base');
    });

    it('applies small size styles', () => {
      render(<CTA text="Small" size="small" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-4', 'py-2', 'text-sm');
    });

    it('applies large size styles', () => {
      render(<CTA text="Large" size="large" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-8', 'py-4', 'text-lg');
    });
  });

  // State tests
  describe('States', () => {
    it('shows loading state with spinner', () => {
      render(<CTA text="Submit" loading />);
      expect(screen.getByTestId('loader')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Loading...');
    });

    it('applies disabled attribute when disabled', () => {
      render(<CTA text="Disabled" disabled />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('applies disabled attribute when loading', () => {
      render(<CTA text="Loading" loading />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });
  });

  // Link-specific tests
  describe('Link Functionality', () => {
    it('sets target and rel attributes for external links', () => {
      render(
        <CTA 
          text="External Link" 
          href="https://example.com" 
          target="_blank"
          rel="noopener"
        />
      );
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener');
    });

    it('automatically sets rel for _blank target', () => {
      render(<CTA text="External" href="https://example.com" target="_blank" />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('prevents navigation when disabled', () => {
      render(<CTA text="Disabled Link" href="/test" disabled />);
      const link = screen.getByRole('link');
      expect(link).not.toHaveAttribute('href');
      expect(link).toHaveAttribute('aria-disabled', 'true');
    });
  });

  // Custom styling tests
  describe('Custom Styling', () => {
    it('applies custom className', () => {
      render(<CTA text="Custom" className="custom-class" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('maintains base styles with custom className', () => {
      render(<CTA text="Custom" className="custom-class" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('inline-flex', 'items-center', 'custom-class');
    });
  });
});