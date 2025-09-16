export interface NavItem {
  name: string;
  href?: string;
  submenu?: SubMenuItem[];
  megaMenu?: MegaMenuCategory[];
}

export interface SubMenuItem {
  name: string;
  href: string;
}

export interface MegaMenuCategory {
  category: string;
  items: SubMenuItem[];
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    submenu: [
      { name: 'AI Solutions', href: '/services/artificial-intelligence' },
      { name: 'SEO & Content', href: '/services/seo' },
      { name: 'Web Design', href: '/services/web-development' },
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Data Analytics', href: '/services/data-analytics' },
    ],
  },
  {
    name: 'Capabilities',
    megaMenu: [
      {
        category: 'Services',
        items: [
          { name: 'AI Solutions', href: '/services/artificial-intelligence' },
          { name: 'SEO & Content', href: '/services/seo' },
          { name: 'Web Design', href: '/services/web-development' },
          { name: 'Web Development', href: '/services/web-development' },
          { name: 'Data Analytics', href: '/services/data-analytics' },
        ],
      },
      {
        category: 'Capabilities',
        items: [
          { name: 'Static Website Development', href: '/capabilities/static-website-development' },
          { name: 'Website Redesign', href: '/capabilities/website-redesign' },
          { name: 'Web Performance Optimization', href: '/capabilities/web-performance-optimization' },
          { name: 'E-commerce Development', href: '/capabilities/e-commerce-development' },
          { name: 'CMS Implementation', href: '/capabilities/cms-implementation' },
          { name: 'API Integrations', href: '/capabilities/api-integrations' },
          { name: 'Branding & Visual Identity', href: '/capabilities/branding' },
        ],
      },
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