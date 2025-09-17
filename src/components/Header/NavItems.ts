export interface NavItem {
  name: string;
  href?: string;
  submenu?: SubMenuItem[];
  megaMenu?: MegaMenuCategory[];
  icon?: string;
}

export interface SubMenuItem {
  name: string;
  href: string;
  description?: string;
  icon?: string;
  items?: SubMenuItem[];
}

export interface MegaMenuCategory {
  id: string;
  name: string;
  icon: string;
  description?: string;
  items: {
    title: string;
    href: string;
    description?: string;
    icon?: string;
    featured?: boolean;
  }[];
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Solutions',
    icon: 'lightbulb',
    megaMenu: [
      {
        id: 'scope',
        name: 'Scope',
        icon: 'flag-01',
        items: [
          {
            title: 'Website Redesigns',
            href: '/solutions/website-redesigns',
            description: 'Modern and responsive website redesigns',
            icon: 'layout-grid-01'
          },
          {
            title: 'Website Migrations',
            href: '/solutions/website-migrations',
            description: 'Seamless platform transitions',
            icon: 'repeat-03'
          },
          {
            title: 'Ongoing Website Services',
            href: '/solutions/website-product-teams',
            description: 'Continuous website maintenance and updates',
            icon: 'refresh-cw-01'
          }
        ]
      },
      {
        id: 'technology',
        name: 'Technology',
        icon: 'settings-02',
        items: [
          {
            title: 'React',
            href: '/technologies/react',
            description: 'Modern frontend development',
            icon: 'code-01'
          },
          {
            title: 'Node.js',
            href: '/technologies/nodejs',
            description: 'Scalable backend solutions',
            icon: 'server-01'
          },
          {
            title: 'Shopify',
            href: '/technologies/shopify',
            description: 'E-commerce solutions',
            icon: 'shopping-bag-01'
          }
        ]
      },
      {
        id: 'industry',
        name: 'Industry',
        icon: 'grid-01',
        items: [
          {
            title: 'E-commerce',
            href: '/industries/ecommerce',
            description: 'Online retail solutions',
            icon: 'shopping-cart-01'
          },
          {
            title: 'Healthcare',
            href: '/industries/healthcare',
            description: 'Healthcare technology',
            icon: 'heart-pulse'
          },
          {
            title: 'Finance',
            href: '/industries/finance',
            description: 'Financial services',
            icon: 'dollar-sign-01'
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