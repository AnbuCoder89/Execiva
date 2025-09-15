import type { Meta, StoryObj } from '@storybook/react';
import CTA from './CTA';

const meta: Meta<typeof CTA> = {
  title: 'UI/CTA',
  component: CTA,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile Call-to-Action component that can render as either a button or link with various styling options.',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text displayed on the CTA',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the CTA',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
    },
    href: {
      control: 'text',
      description: 'URL for link functionality',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CTA>;

// Default story
export const Default: Story = {
  args: {
    text: 'Get Started',
  },
};

// Variant stories
export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    text: 'Outline Button',
    variant: 'outline',
  },
};

// Size stories
export const Small: Story = {
  args: {
    text: 'Small CTA',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    text: 'Medium CTA',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    text: 'Large CTA',
    size: 'large',
  },
};

// State stories
export const Loading: Story = {
  args: {
    text: 'Submit Form',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    disabled: true,
  },
};

// Link stories
export const AsLink: Story = {
  args: {
    text: 'Learn More',
    href: '/about',
    variant: 'secondary',
  },
};

export const ExternalLink: Story = {
  args: {
    text: 'Visit Website',
    href: 'https://example.com',
    target: '_blank',
    variant: 'outline',
  },
};

// Combined examples
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-4">
        <CTA text="Primary" variant="primary" />
        <CTA text="Secondary" variant="secondary" />
        <CTA text="Outline" variant="outline" />
      </div>
      <div className="flex gap-4">
        <CTA text="Small" size="small" />
        <CTA text="Medium" size="medium" />
        <CTA text="Large" size="large" />
      </div>
      <div className="flex gap-4">
        <CTA text="Loading" loading />
        <CTA text="Disabled" disabled />
      </div>
    </div>
  ),
};