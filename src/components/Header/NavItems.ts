export interface NavItem {
  name: string;
  href?: string;
  submenu?: SubMenuItem[];
  megaMenu?: MegaMenuCategory[];
}

export interface SubMenuItem {
  name: string;
  href: string;
  icon: string;
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
      { name: 'AI Solutions', href: '/services/artificial-intelligence', icon: '🤖' },
      { name: 'SEO & Content', href: '/services/seo', icon: '📈' },
      { name: 'Web Design', href: '/services/web-development', icon: '💻' },
      { name: 'Web Development', href: '/services/web-development', icon: '⚡' },
      { name: 'Data Analytics', href: '/services/data-analytics', icon: '📊' },
    ],
  },
  {
    name: 'Capabilities',
    megaMenu: [
      {
        category: 'Services',
        items: [
          { name: 'AI Solutions', href: '/services/artificial-intelligence', icon: '🤖' },
          { name: 'SEO & Content', href: '/services/seo', icon: '📈' },
          { name: 'Web Design', href: '/services/web-development', icon: '💻' },
          { name: 'Web Development', href: '/services/web-development', icon: '⚡' },
          { name: 'Data Analytics', href: '/services/data-analytics', icon: '📊' },
        ],
      },
      {
        category: 'Capabilities',
        items: [
          { name: 'Static Website Development', href: '/capabilities/static-website-development', icon: '🏗️' },
          { name: 'Website Redesign', href: '/capabilities/website-redesign', icon: '🔄' },
          { name: 'Web Performance Optimization', href: '/capabilities/web-performance-optimization', icon: '⚡' },
          { name: 'E-commerce Development', href: '/capabilities/e-commerce-development', icon: '🛒' },
          { name: 'CMS Implementation', href: '/capabilities/cms-implementation', icon: '📝' },
          { name: 'API Integrations', href: '/capabilities/api-integrations', icon: '🔗' },
          { name: 'Branding & Visual Identity', href: '/capabilities/branding', icon: '🎨' },
        ],
      },
    ],
  },
  { name: 'Case Studies', href: '/case-studies' },
  {
    name: 'Company',
    submenu: [
      { name: 'About Us', href: '/company/about-us', icon: 'ℹ️' },
      { name: 'Team', href: '/company/team', icon: '👥' },
      { name: 'Careers', href: '/company/careers', icon: '💼' },
      { name: 'Contact', href: '/company/contact', icon: '📞' },
    ],
  },
  { name: 'Blog', href: '/blog' },
];