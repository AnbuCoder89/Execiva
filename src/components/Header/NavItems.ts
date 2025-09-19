export interface NavItem {
  name: string;
  href?: string;
  submenu?: SubMenuItem[];
  megaMenu?: MegaMenuCategory[];
  dynamicMegaMenu?: boolean;
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
  icon?: string;
  items: {
    title: string;
    href: string;
    description?: string;
    featured?: boolean;
    category?: string;
    tags?: string[];
  }[];
}

// Dynamic service data structure
export interface DynamicService {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  tags: string[];
  featured?: boolean;
  scope?: string;
  technology?: string[];
  industry?: string[];
  useCase?: string[];
  stage?: string;
}

// Filter categories for the mega menu sidebar
export interface MegaMenuFilter {
  id: string;
  name: string;
  icon: string;
  options: string[];
}

// Dynamic mega menu filters based on the image
export const megaMenuFilters: MegaMenuFilter[] = [
  {
    id: 'scope',
    name: 'Scope',
    icon: '🎯',
    options: ['Website Redesigns', 'Website Migrations', 'Ongoing Website Services', 'E-commerce Development']
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: '⚙️',
    options: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AI/ML', 'Cloud Services']
  },
  {
    id: 'industry',
    name: 'Industry',
    icon: '🏢',
    options: ['Healthcare', 'Finance', 'E-commerce', 'Education', 'Manufacturing', 'Technology']
  },
  {
    id: 'useCase',
    name: 'Use Case',
    icon: '💡',
    options: ['Digital Transformation', 'Process Automation', 'Data Analytics', 'Customer Experience']
  },
  {
    id: 'stage',
    name: 'Stage',
    icon: '📊',
    options: ['Planning', 'Development', 'Implementation', 'Optimization', 'Maintenance']
  }
];

// Function to fetch dynamic services (would typically come from an API)
export const fetchDynamicServices = async (): Promise<DynamicService[]> => {
  // This would typically be an API call
  // For now, returning mock data that matches your existing services
  return [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom websites and web applications built for performance and scalability',
      href: '/services/web-development',
      category: 'Development',
      scope: 'Website Redesigns',
      technology: ['React', 'Next.js', 'TypeScript'],
      industry: ['Technology', 'E-commerce'],
      useCase: ['Digital Transformation'],
      stage: 'Development',
      tags: ['responsive', 'modern', 'scalable'],
      featured: true
    },
    {
      id: 'artificial-intelligence',
      title: 'Artificial Intelligence',
      description: 'AI-powered solutions that automate processes and provide intelligent insights',
      href: '/services/artificial-intelligence',
      category: 'AI & Automation',
      scope: 'Ongoing Website Services',
      technology: ['Python', 'AI/ML', 'Cloud Services'],
      industry: ['Healthcare', 'Finance'],
      useCase: ['Process Automation', 'Data Analytics'],
      stage: 'Implementation',
      tags: ['automation', 'intelligent', 'insights'],
      featured: true
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve search rankings and drive organic traffic',
      href: '/services/seo',
      category: 'Digital Marketing',
      scope: 'Ongoing Website Services',
      technology: ['Analytics', 'Content Management'],
      industry: ['E-commerce', 'Technology'],
      useCase: ['Customer Experience'],
      stage: 'Optimization',
      tags: ['search', 'organic', 'rankings']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization',
      href: '/services/data-analytics',
      category: 'Analytics',
      scope: 'Website Migrations',
      technology: ['Python', 'Cloud Services'],
      industry: ['Finance', 'Healthcare'],
      useCase: ['Data Analytics'],
      stage: 'Planning',
      tags: ['insights', 'visualization', 'intelligence']
    }
  ];
};

// Function to filter services based on selected criteria
export const filterServices = (
  services: DynamicService[],
  filters: { [key: string]: string }
): DynamicService[] => {
  return services.filter(service => {
    return Object.entries(filters).every(([filterType, filterValue]) => {
      if (!filterValue) return true;
      
      switch (filterType) {
        case 'scope':
          return service.scope === filterValue;
        case 'technology':
          return service.technology?.includes(filterValue);
        case 'industry':
          return service.industry?.includes(filterValue);
        case 'useCase':
          return service.useCase?.includes(filterValue);
        case 'stage':
          return service.stage === filterValue;
        default:
          return true;
      }
    });
  });
};

// Function to convert dynamic services to mega menu format
export const convertServicesToCategories = (services: DynamicService[]): MegaMenuCategory[] => {
  const categories: { [key: string]: MegaMenuCategory } = {};
  
  services.forEach(service => {
    if (!categories[service.category]) {
      categories[service.category] = {
        id: service.category.toLowerCase().replace(/\s+/g, '-'),
        name: service.category,
        items: []
      };
    }
    
    categories[service.category].items.push({
      title: service.title,
      href: service.href,
      description: service.description,
      featured: service.featured,
      category: service.category,
      tags: service.tags
    });
  });
  
  return Object.values(categories);
};

export const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    dynamicMegaMenu: true,
    // Static fallback for when dynamic loading fails
    megaMenu: [
      {
        id: 'development',
        name: 'Development',
        items: [
          {
            title: 'Web Development',
            href: '/services/web-development',
            description: 'Custom websites and applications',
            featured: true
          },
          {
            title: 'E-commerce Development',
            href: '/services/ecommerce',
            description: 'Online store solutions'
          }
        ]
      },
      {
        id: 'ai-automation',
        name: 'AI & Automation',
        items: [
          {
            title: 'Artificial Intelligence',
            href: '/services/artificial-intelligence',
            description: 'AI-powered solutions',
            featured: true
          }
        ]
      }
    ]
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