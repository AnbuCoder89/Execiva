import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Button, { ButtonProps } from './Button';

export interface BackButtonProps extends Omit<ButtonProps, 'children' | 'icon' | 'iconPosition'> {
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  label = 'Back',
  variant = 'ghost',
  size = 'lg',
  className = '',
  ...props
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      icon={ArrowLeft}
      iconPosition="left"
      className={className}
      {...props}
    >
      {label}
    </Button>
  );
};

export default BackButton;


