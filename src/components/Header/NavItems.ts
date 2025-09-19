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
  icon?: string;
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
    name: 'Services',
    submenu: [
      { name: 'Web Development', href: '/capabilities/web-development' },
      { name: 'AI Solutions', href: '/capabilities/ai-solutions' },
      { name: 'Data Analytics', href: '/capabilities/data-analytics' },
      { name: 'Digital Strategy', href: '/capabilities/digital-strategy' },
    ],
  },
  {
    name: 'Solutions',
    megaMenu: [
      {
        id: 'ai',
        name: 'AI',
        items: [
          {
            title: 'Machine Learning Models',
            href: '/solutions/machine-learning',
            description: 'Custom AI models for your business needs',
          },
          {
            title: 'Natural Language Processing',
            href: '/solutions/nlp',
            description: 'Advanced text analysis and understanding',
          },
          {
            title: 'Computer Vision',
            href: '/solutions/computer-vision',
            description: 'Image and video analysis solutions',
          },
          {
            title: 'AI Automation',
            href: '/solutions/ai-automation',
            description: 'Intelligent process automation',
          }
        ]
      },
      {
        id: 'seo',
        name: 'SEO',
        icon: '🔍',
        items: [
          {
            title: 'Technical SEO Audits',
            href: '/solutions/technical-seo',
            description: 'Comprehensive technical optimization',
          },
          {
            title: 'Content Strategy',
            href: '/solutions/content-strategy',
            description: 'SEO-driven content planning',
          },
          {
            title: 'Link Building',
            href: '/solutions/link-building',
            description: 'High-quality backlink acquisition',
          },
          {
            title: 'Local SEO',
            href: '/solutions/local-seo',
            description: 'Location-based search optimization',
          }
        ]
      },
      {
        id: 'web-development',
        name: 'Web Development',
        icon: '💻',
        items: [
          {
            title: 'Website Redesigns',
            href: '/solutions/website-redesigns',
            description: 'Modern and responsive website redesigns',
          },
          {
            title: 'Website Migrations',
            href: '/solutions/website-migrations',
            description: 'Seamless platform transitions',
          },
          {
            title: 'Ongoing Website Services',
            href: '/solutions/website-services',
            description: 'Continuous website maintenance and updates',
          },
          {
            title: 'E-commerce Development',
            href: '/solutions/ecommerce',
            description: 'Custom online store solutions',
          }
        ]
      },
      {
        id: 'data-analytics',
        name: 'Data Analytics',
        icon: '📊',
        items: [
          {
            title: 'Business Intelligence',
            href: '/solutions/business-intelligence',
            description: 'Data-driven decision making tools',
          },
          {
            title: 'Data Visualization',
            href: '/solutions/data-visualization',
            description: 'Interactive dashboards and reports',
          },
          {
            title: 'Predictive Analytics',
            href: '/solutions/predictive-analytics',
            description: 'Future trend analysis and forecasting',
          },
          {
            title: 'Data Integration',
            href: '/solutions/data-integration',
            description: 'Unified data pipeline solutions',
          }
        ]
      }
    ],
  },
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