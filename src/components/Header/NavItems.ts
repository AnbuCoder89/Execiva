export interface NavItem {
  name: string;
  href?: string;
  submenu?: SubMenuItem[];
  megaMenu?: MegaMenuCategory[];
}

export interface SubMenuItem {
  name: string;
  href: string;
  description?: string;
  items?: SubMenuItem[];
}

export interface MegaMenuCategory {
  id: string;
  name: string;
  description?: string;
  items: {
    title: string;
    href: string;
    description?: string;
    featured?: boolean;
  }[];
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Capabilities',
    submenu: [
      { name: 'Web Development', href: '/capabilities/web-development' },
      { name: 'AI Solutions', href: '/capabilities/ai-solutions' },
      { name: 'Data Analytics', href: '/capabilities/data-analytics' },
      { name: 'Digital Strategy', href: '/capabilities/digital-strategy' },
    ],
  },
  {
    name: 'Services',
    megaMenu: [
      {
        id: 'scope',
        name: 'Scope',
        icon: '📊',
        items: [
          {
            title: 'Website Redesigns',
            href: '/services/website-redesigns',
            description: 'Complete website overhauls with modern design',
          },
          {
            title: 'Website Migrations',
            href: '/services/website-migrations',
            description: 'Seamless platform and hosting transitions',
          },
          {
            title: 'Ongoing Website Services',
            href: '/services/ongoing-services',
            description: 'Continuous maintenance and optimization',
          },
          {
            title: 'E-commerce Development',
            href: '/services/ecommerce',
            description: 'Custom online store solutions',
          }
        ]
      },
      {
        id: 'technology',
        name: 'Technology',
        icon: '⚙️',
        items: [
          {
            title: 'React Development',
            href: '/services/react-development',
            description: 'Modern React applications and components',
          },
          {
            title: 'Next.js Solutions',
            href: '/services/nextjs-solutions',
            description: 'Full-stack Next.js applications',
          },
          {
            title: 'Node.js Backend',
            href: '/services/nodejs-backend',
            description: 'Scalable server-side solutions',
          },
          {
            title: 'Cloud Infrastructure',
            href: '/services/cloud-infrastructure',
            description: 'AWS, Azure, and GCP deployments',
          }
        ]
      },
      {
        id: 'industry',
        name: 'Industry',
        icon: '🏢',
        items: [
          {
            title: 'Healthcare',
            href: '/services/healthcare',
            description: 'HIPAA-compliant healthcare solutions',
          },
          {
            title: 'Finance',
            href: '/services/finance',
            description: 'Secure financial technology platforms',
          },
          {
            title: 'E-commerce',
            href: '/services/ecommerce-industry',
            description: 'Retail and marketplace solutions',
          },
          {
            title: 'Education',
            href: '/services/education',
            description: 'Learning management systems',
          }
        ]
      },
      {
        id: 'use-case',
        name: 'Use Case',
        icon: '🎯',
        items: [
          {
            title: 'Digital Transformation',
            href: '/services/digital-transformation',
            description: 'Complete business digitalization',
          },
          {
            title: 'Process Automation',
            href: '/services/process-automation',
            description: 'Workflow optimization and automation',
          },
          {
            title: 'Data Analytics',
            href: '/services/data-analytics',
            description: 'Business intelligence and insights',
          },
          {
            title: 'Performance Optimization',
            href: '/services/performance-optimization',
            description: 'Speed and efficiency improvements',
          }
        ]
      },
      {
        id: 'stage',
        name: 'Stage',
        icon: '📈',
        items: [
          {
            title: 'Planning & Strategy',
            href: '/services/planning-strategy',
            description: 'Project planning and technical strategy',
          },
          {
            title: 'Development',
            href: '/services/development',
            description: 'Custom software development',
          },
          {
            title: 'Implementation',
            href: '/services/implementation',
            description: 'Deployment and go-live support',
          },
          {
            title: 'Optimization',
            href: '/services/optimization',
            description: 'Performance tuning and improvements',
          }
        ]
      }
    ],
  },
  { name: 'Client Stories', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
  {
    name: 'Company',
    submenu: [
      { name: 'About Us', href: '/company/about-us' },
      { name: 'Team', href: '/company/team' },
      { name: 'Careers', href: '/company/careers' },
      { name: 'Contact', href: '/company/contact' },
    ],
  },
  { name: 'Blog', href: '/blog' },
];