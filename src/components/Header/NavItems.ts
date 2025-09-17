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
    name: 'Solutions',
    megaMenu: [
      {
        id: 'scope',
        name: 'Scope',
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
            href: '/solutions/website-product-teams',
            description: 'Continuous website maintenance and updates',
          }
        ]
      },
      {
        id: 'technology',
        name: 'Technology',
        items: [
          {
            title: 'React',
            href: '/technologies/react',
            description: 'Modern frontend development',
          },
          {
            title: 'Node.js',
            href: '/technologies/nodejs',
            description: 'Scalable backend solutions',
          },
          {
            title: 'Shopify',
            href: '/technologies/shopify',
            description: 'E-commerce solutions',
          }
        ]
      },
      {
        id: 'industry',
        name: 'Industry',
        items: [
          {
            title: 'E-commerce',
            href: '/industries/ecommerce',
            description: 'Online retail solutions',
          },
          {
            title: 'Healthcare',
            href: '/industries/healthcare',
            description: 'Healthcare technology',
          },
          {
            title: 'Finance',
            href: '/industries/finance',
            description: 'Financial services',
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