import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowLeft, Filter } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  topic: string;
  industry: string;
  region: string;
  channel: string;
  product: string;
  image: string;
  description: string;
}

const CaseStudiesPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const [isLeftPanelFixed, setIsLeftPanelFixed] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState({
    topics: [] as string[],
    industry: [] as string[],
    region: [] as string[],
    channels: [] as string[],
    products: [] as string[]
  });

  const [expandedFilters, setExpandedFilters] = useState({
    topics: false,
    industry: false,
    region: false,
    channels: false,
    products: false
  });

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const allCaseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'Samsung scales first-party data activation to reach 43% more customers',
      subtitle: 'CASE STUDIES | IDENTITY',
      category: 'CASE STUDIES',
      topic: 'Identity',
      industry: 'Technology',
      region: 'Global',
      channel: 'Digital',
      product: 'Data Platform',
      image: '/image/case-studies/case-1.jpeg',
      description: 'Samsung leveraged our advanced data activation platform to significantly expand their customer reach and improve targeting precision.'
    },
    {
      id: '2',
      title: 'Hearst Newspapers drives 4x higher fill-rate with OpenPath',
      subtitle: 'CASE STUDIES | OUR PLATFORM',
      category: 'CASE STUDIES',
      topic: 'Platform',
      industry: 'Media',
      region: 'North America',
      channel: 'Programmatic',
      product: 'OpenPath',
      image: '/image/case-studies/case-2.jpeg',
      description: 'Hearst Newspapers achieved remarkable improvements in ad fill rates through our innovative OpenPath technology solution.'
    },
    {
      id: '3',
      title: 'Bayer Rx activates live sports on CTV to reach a niche audience',
      subtitle: 'CASE STUDIES | CONNECTED TV',
      category: 'CASE STUDIES',
      topic: 'Connected TV',
      industry: 'Healthcare',
      region: 'Europe',
      channel: 'CTV',
      product: 'Video Platform',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Bayer successfully targeted niche healthcare audiences through strategic Connected TV advertising during live sports events.'
    },
    {
      id: '4',
      title: 'Freestar optimizes programmatic revenue with advanced analytics',
      subtitle: 'CASE STUDIES | ANALYTICS',
      category: 'CASE STUDIES',
      topic: 'Analytics',
      industry: 'AdTech',
      region: 'Global',
      channel: 'Programmatic',
      product: 'Analytics Suite',
      image: '/image/case-studies/case-2.jpeg',
      description: 'Freestar leveraged our advanced analytics platform to optimize their programmatic advertising revenue streams.'
    },
    {
      id: '5',
      title: 'World of Hyatt personalizes guest experiences with AI',
      subtitle: 'CASE STUDIES | PERSONALIZATION',
      category: 'CASE STUDIES',
      topic: 'AI/ML',
      industry: 'Hospitality',
      region: 'Global',
      channel: 'Mobile',
      product: 'AI Platform',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'World of Hyatt transformed guest experiences through AI-powered personalization across all touchpoints.'
    },
    {
      id: '6',
      title: 'Sky Deutschland enhances viewer engagement through data insights',
      subtitle: 'CASE STUDIES | DATA INSIGHTS',
      category: 'CASE STUDIES',
      topic: 'Data Analytics',
      industry: 'Broadcasting',
      region: 'Europe',
      channel: 'OTT',
      product: 'Data Platform',
      image: '/image/case-studies/case-1.jpeg',
      description: 'Sky Deutschland utilized our data insights platform to significantly improve viewer engagement and content strategy.'
    },
    {
      id: '7',
      title: 'Netflix optimizes content recommendations with machine learning',
      subtitle: 'CASE STUDIES | AI/ML',
      category: 'CASE STUDIES',
      topic: 'AI/ML',
      industry: 'Entertainment',
      region: 'Global',
      channel: 'Digital',
      product: 'AI Platform',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Netflix leveraged our AI platform to enhance content recommendation algorithms and improve user engagement.'
    },
    {
      id: '8',
      title: 'Spotify increases user retention through personalized playlists',
      subtitle: 'CASE STUDIES | PERSONALIZATION',
      category: 'CASE STUDIES',
      topic: 'AI/ML',
      industry: 'Entertainment',
      region: 'Global',
      channel: 'Mobile',
      product: 'AI Platform',
      image: '/image/case-studies/case-2.jpeg',
      description: 'Spotify used our personalization engine to create dynamic playlists that increased user engagement by 45%.'
    },
    {
      id: '9',
      title: 'Tesla accelerates autonomous driving with edge computing',
      subtitle: 'CASE STUDIES | EDGE COMPUTING',
      category: 'CASE STUDIES',
      topic: 'Platform',
      industry: 'Automotive',
      region: 'Global',
      channel: 'Edge',
      product: 'Edge Platform',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Tesla implemented our edge computing solutions to process real-time data for autonomous vehicle systems.'
    },
    {
      id: '10',
      title: 'Airbnb enhances booking experience with predictive analytics',
      subtitle: 'CASE STUDIES | ANALYTICS',
      category: 'CASE STUDIES',
      topic: 'Data Analytics',
      industry: 'Hospitality',
      region: 'Global',
      channel: 'Digital',
      product: 'Analytics Suite',
      image: '/image/case-studies/case-1.jpeg',
      description: 'Airbnb utilized our predictive analytics to optimize pricing and improve booking conversion rates.'
    },
    {
      id: '11',
      title: 'Walmart transforms supply chain with IoT integration',
      subtitle: 'CASE STUDIES | IOT',
      category: 'CASE STUDIES',
      topic: 'Platform',
      industry: 'Retail',
      region: 'North America',
      channel: 'Digital',
      product: 'IoT Platform',
      image: '/image/case-studies/case-2.jpeg',
      description: 'Walmart revolutionized their supply chain management using our IoT platform for real-time tracking.'
    },
    {
      id: '12',
      title: 'Microsoft Azure scales cloud infrastructure globally',
      subtitle: 'CASE STUDIES | CLOUD',
      category: 'CASE STUDIES',
      topic: 'Platform',
      industry: 'Technology',
      region: 'Global',
      channel: 'Digital',
      product: 'Cloud Platform',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Microsoft Azure leveraged our solutions to enhance global cloud infrastructure performance.'
    },
    {
      id: '13',
      title: 'Uber optimizes ride matching with real-time algorithms',
      subtitle: 'CASE STUDIES | ALGORITHMS',
      category: 'CASE STUDIES',
      topic: 'AI/ML',
      industry: 'Transportation',
      region: 'Global',
      channel: 'Mobile',
      product: 'AI Platform',
      image: '/image/case-studies/case-1.jpeg',
      description: 'Uber improved ride matching efficiency by 60% using our real-time algorithmic solutions.'
    },
    {
      id: '14',
      title: 'Amazon Prime Video enhances streaming quality with CDN',
      subtitle: 'CASE STUDIES | CDN',
      category: 'CASE STUDIES',
      topic: 'Platform',
      industry: 'Entertainment',
      region: 'Global',
      channel: 'OTT',
      product: 'CDN Platform',
      image: '/image/case-studies/case-2.jpeg',
      description: 'Amazon Prime Video achieved 99.9% uptime and reduced buffering by 80% with our CDN solutions.'
    },
    {
      id: '15',
      title: 'PayPal secures transactions with blockchain technology',
      subtitle: 'CASE STUDIES | BLOCKCHAIN',
      category: 'CASE STUDIES',
      topic: 'Security',
      industry: 'FinTech',
      region: 'Global',
      channel: 'Digital',
      product: 'Security Platform',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'PayPal enhanced transaction security and reduced fraud by 75% using our blockchain solutions.'
    },
    {
      id: '16',
      title: 'Shopify powers e-commerce growth with scalable architecture',
      subtitle: 'CASE STUDIES | E-COMMERCE',
      category: 'CASE STUDIES',
      topic: 'Platform',
      industry: 'E-commerce',
      region: 'Global',
      channel: 'Digital',
      product: 'E-commerce Platform',
      image: '/image/case-studies/case-1.jpeg',
      description: 'Shopify scaled to handle 10x traffic growth during peak seasons with our platform solutions.'
    },
    {
      id: '17',
      title: 'Zoom ensures seamless video conferencing at scale',
      subtitle: 'CASE STUDIES | VIDEO',
      category: 'CASE STUDIES',
      topic: 'Platform',
      industry: 'Technology',
      region: 'Global',
      channel: 'Digital',
      product: 'Video Platform',
      image: '/image/case-studies/case-2.jpeg',
      description: 'Zoom maintained high-quality video calls for millions of users with our scalable video platform.'
    },
    {
      id: '18',
      title: 'LinkedIn improves professional networking with AI matching',
      subtitle: 'CASE STUDIES | NETWORKING',
      category: 'CASE STUDIES',
      topic: 'AI/ML',
      industry: 'Social Media',
      region: 'Global',
      channel: 'Digital',
      product: 'AI Platform',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'LinkedIn enhanced professional connections by 40% using our AI-powered matching algorithms.'
    }
  ];

  const filterOptions = {
    topics: ['Identity', 'Platform', 'Connected TV', 'Analytics', 'AI/ML', 'Data Analytics'],
    industry: ['Technology', 'Media', 'Healthcare', 'AdTech', 'Hospitality', 'Broadcasting'],
    region: ['Global', 'North America', 'Europe', 'Asia Pacific'],
    channels: ['Digital', 'Programmatic', 'CTV', 'Mobile', 'OTT'],
    products: ['Data Platform', 'OpenPath', 'Video Platform', 'Analytics Suite', 'AI Platform']
  };

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(allCaseStudies.length / itemsPerPage);

  // Filter case studies first, then paginate
  const filteredCaseStudies = allCaseStudies.filter(study => {
    const matchesTopics = selectedFilters.topics.length === 0 || selectedFilters.topics.includes(study.topic);
    const matchesIndustry = selectedFilters.industry.length === 0 || selectedFilters.industry.includes(study.industry);
    const matchesRegion = selectedFilters.region.length === 0 || selectedFilters.region.includes(study.region);
    const matchesChannels = selectedFilters.channels.length === 0 || selectedFilters.channels.includes(study.channel);
    const matchesProducts = selectedFilters.products.length === 0 || selectedFilters.products.includes(study.product);

    return matchesTopics && matchesIndustry && matchesRegion && matchesChannels && matchesProducts;
  });

  // Apply pagination to filtered results
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCaseStudies = filteredCaseStudies.slice(startIndex, endIndex);
  const paginatedTotalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);

  // Updated scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (!rightPanelRef.current) return;

      const rightPanel = rightPanelRef.current;
      const rightPanelBottom = rightPanel.offsetTop + rightPanel.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY + windowHeight >= rightPanelBottom) {
        setIsLeftPanelFixed(false);
      } else {
        setIsLeftPanelFixed(true);
      }
    };

    // Reset to first page when filters change
    setCurrentPage(1);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredCaseStudies.length, selectedFilters]);

  const toggleFilter = (filterType: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFilterExpansion = (filterType: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };

  const FilterSection: React.FC<{
    title: string;
    filterKey: keyof typeof selectedFilters;
    options: string[];
  }> = ({ title, filterKey, options }) => (
    <li className="relative border-b border-gray-200">
      <h3>
        <button
          type="button"
          onClick={() => toggleFilterExpansion(filterKey)}
          className="flex w-full items-center justify-between py-5 text-left font-medium text-gray-900 hover:text-gray-700 transition-colors font-sf-pro-display"
        >
          <span>{title}</span>
          <ChevronDown
            size={14}
            className={`transform transition-transform ${
              expandedFilters[filterKey] ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </h3>
      
      {expandedFilters[filterKey] && (
        <div className="pb-5">
          <ul className="space-y-2">
            {options.map(option => (
              <li key={option}>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedFilters[filterKey].includes(option)}
                    onChange={() => toggleFilter(filterKey, option)}
                    className="rounded-sm w-3.5 h-3.5 text-gray-900 border-gray-300 focus:ring-gray-400 focus:ring-2"
                  />
                  <span className="text-sm text-gray-700 font-sf-pro-text">{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );

  return (
    <div className="bg-white pt-20 min-h-screen">
      {/* Header Section */}
      <section className="relative bg-white text-gray-900 pt-24 pb-16">
        <div className="container flex w-full flex-col gap-8 items-center justify-center text-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col gap-2 max-w-[970px] items-center">
            <h2 className="leading-tight text-gray-900 mb-0 text-3xl lg:text-4xl font-medium font-sf-pro-display">
              <p>See the Impact of Our Work in Action.</p>
            </h2>
          </div>
          <div className="flex w-full flex-col gap-8 justify-center items-center max-w-[970px]">
            <div className="flex flex-col gap-6 text-gray-600 items-center text-center text-base lg:text-xl">
              <p className="font-sf-pro-text">
                Discover how our tailored strategies and innovative solutions have helped clients overcome challenges, unlock growth, and achieve measurable success across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Header */}
      <div className="md:hidden w-full px-8 py-4 pt-0">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            icon={ArrowLeft}
            iconPosition="left"
            onClick={() => navigate('/')}
          >
            Back
          </Button>
          <Button
            variant="vision"
            size="sm"
            icon={Filter}
            iconPosition="left"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            Filter by
          </Button>
        </div>

        {/* Mobile Filters */}
        {isMobileFiltersOpen && (
          <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6 mx-0">
            <div className="overflow-y-auto max-h-screen">
              <ul className="divide-y border-b">
                <FilterSection
                  title="Topics"
                  filterKey="topics"
                  options={filterOptions.topics}
                />
                <FilterSection
                  title="Industry"
                  filterKey="industry"
                  options={filterOptions.industry}
                />
                <FilterSection
                  title="Region"
                  filterKey="region"
                  options={filterOptions.region}
                />
                <FilterSection
                  title="Channels"
                  filterKey="channels"
                  options={filterOptions.channels}
                />
                <FilterSection
                  title="Products"
                  filterKey="products"
                  options={filterOptions.products}
                />
              </ul>

              {/* Clear Filters Button */}
              {Object.values(selectedFilters).some(filters => filters.length > 0) && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedFilters({
                      topics: [],
                      industry: [],
                      region: [],
                      channels: [],
                      products: []
                    })}
                    className="w-full"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6 lg:gap-10 px-8">
          {/* Left Panel - Filters (3 columns) */}
          <aside className={`sticky z-40 self-start bg-white border-b md:z-0 md:col-span-3 md:border-b-0 md:max-w-[17.1875rem] ${
            isLeftPanelFixed ? 'top-[113px]' : ''
          }`}>
            <div className="md:px-0">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  icon={ArrowLeft}
                  iconPosition="left"
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent('setActiveSection', { detail: 'case-studies' }));
                      const element = document.getElementById('case-studies');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  Back
                </Button>
              </div>

              <div id="filters">
                <h3 className="hidden md:block text-sm font-medium text-gray-900 mb-4 font-sf-pro-display">
                  Filter by
                </h3>
                
                <div className="overflow-y-auto max-h-screen md:overflow-visible md:max-h-none">
                  <ul className="divide-y md:border-b">
                    <FilterSection
                      title="Topics"
                      filterKey="topics"
                      options={filterOptions.topics}
                    />
                    <FilterSection
                      title="Industry"
                      filterKey="industry"
                      options={filterOptions.industry}
                    />
                    <FilterSection
                      title="Region"
                      filterKey="region"
                      options={filterOptions.region}
                    />
                    <FilterSection
                      title="Channels"
                      filterKey="channels"
                      options={filterOptions.channels}
                    />
                    <FilterSection
                      title="Products"
                      filterKey="products"
                      options={filterOptions.products}
                    />
                  </ul>

                  {/* Clear Filters Button */}
                  {Object.values(selectedFilters).some(filters => filters.length > 0) && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedFilters({
                          topics: [],
                          industry: [],
                          region: [],
                          channels: [],
                          products: []
                        })}
                        className="w-full"
                      >
                        Clear All Filters
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Panel - Content (9 columns) */}
          <div className="space-y-8 md:col-span-9" ref={rightPanelRef}>
            <div id="grid" className="space-y-6 transition-opacity md:space-y-10">
              {/* Header Section */}
              <div className="border-b border-gray-200 pb-4">
                <div className="text-sm mb-2.5 font-sf-pro-text">
                  <p className="text-gray-600">The latest</p>
                </div>
              </div>

              {/* Case Studies Grid */}
              <div id="list" className="grid gap-6 sm:grid-cols-2 lg:gap-10 lg:grid-cols-3">
                {paginatedCaseStudies.map((study) => (
                  <article key={study.id} className="group">
                    <div className="flex flex-col h-full cursor-pointer">
                      <figure>
                        <img
                          className="w-full border-t border-x rounded-t md:rounded-t-xl object-cover"
                          src={study.image}
                          alt={study.title}
                          width="688"
                          height="384"
                          loading="lazy"
                        />
                      </figure>
                      
                      <div className="p-4 space-y-2 rounded-b border-b transition md:rounded-b-xl group-hover:bg-gray-100 grow border-x">
                        <p className="uppercase text-xs font-medium text-gray-600 font-sf-pro-text">
                          <span className="opacity-80 after:content-['|'] after:text-gray-600 after:mx-1.5">
                            {study.category}
                          </span>
                          <span className="opacity-80">{study.topic}</span>
                        </p>
                        <h3 className="text-gray-800 text-sm font-medium leading-tight font-sf-pro-display">
                          {study.title}
                        </h3>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* No Results State */}
              {paginatedCaseStudies.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 font-sf-pro-display">
                    No case studies found
                  </h3>
                  <p className="text-gray-600 font-sf-pro-text">
                    Try adjusting your filters to see more results.
                  </p>
                </div>
              )}

              {/* Pagination */}
              {filteredCaseStudies.length > 0 && paginatedTotalPages > 1 && (
                <div className="flex flex-col gap-4 items-center">
                  <nav className="flex gap-4 justify-center items-center w-full" aria-label="Pagination">
                    {/* Previous Button */}
                    <button
                      className={`flex items-center justify-center w-[25px] h-[25px] rounded-full transition ${
                        currentPage === 1 
                          ? 'pointer-events-none bg-gray-200/60' 
                          : 'bg-gray-200 hover:bg-gray-200/60 cursor-pointer'
                      }`}
                      aria-label="Go to previous page"
                      disabled={currentPage === 1}
                      onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    >
                      <ChevronDown className={`w-[9px] h-[11px] stroke-current rotate-90 ${
                        currentPage === 1 ? 'opacity-20' : 'opacity-100'
                      }`} />
                    </button>

                    {/* Page Numbers */}
                    <ul className="flex gap-4">
                      {/* First page */}
                      {currentPage > 2 && (
                        <li>
                          <button 
                            className="transition font-sf-pro-text hover:text-blue-600" 
                            onClick={() => handlePageChange(1)}
                            aria-label="Go to page 1"
                          >
                            1
                          </button>
                        </li>
                      )}
                      
                      {/* Ellipsis before current page */}
                      {currentPage > 3 && (
                        <li>
                          <span className="font-sf-pro-text">...</span>
                        </li>
                      )}
                      
                      {/* Previous page */}
                      {currentPage > 1 && (
                        <li>
                          <button 
                            className="transition font-sf-pro-text hover:text-blue-600" 
                            onClick={() => handlePageChange(currentPage - 1)}
                            aria-label={`Go to page ${currentPage - 1}`}
                          >
                            {currentPage - 1}
                          </button>
                        </li>
                      )}
                      
                      {/* Current page */}
                      <li>
                        <span className="text-blue-600 font-medium font-sf-pro-text" aria-current="page">
                          {currentPage}
                        </span>
                      </li>
                      
                      {/* Next page */}
                      {currentPage < paginatedTotalPages && (
                        <li>
                          <button 
                            className="transition font-sf-pro-text hover:text-blue-600" 
                            onClick={() => handlePageChange(currentPage + 1)}
                            aria-label={`Go to page ${currentPage + 1}`}
                          >
                            {currentPage + 1}
                          </button>
                        </li>
                      )}
                      
                      {/* Ellipsis after current page */}
                      {currentPage < paginatedTotalPages - 2 && (
                        <li>
                          <span className="font-sf-pro-text">...</span>
                        </li>
                      )}
                      
                      {/* Last page */}
                      {currentPage < paginatedTotalPages - 1 && (
                        <li>
                          <button 
                            className="transition font-sf-pro-text hover:text-blue-600" 
                            onClick={() => handlePageChange(paginatedTotalPages)}
                            aria-label={`Go to page ${paginatedTotalPages}`}
                          >
                            {paginatedTotalPages}
                          </button>
                        </li>
                      )}
                    </ul>

                    {/* Next Button */}
                    <button
                      className={`flex items-center justify-center w-[25px] h-[25px] rounded-full transition ${
                        currentPage === paginatedTotalPages 
                          ? 'pointer-events-none bg-gray-200/60' 
                          : 'bg-gray-200 hover:bg-gray-200/60 cursor-pointer'
                      }`}
                      aria-label="Go to next page"
                      disabled={currentPage === paginatedTotalPages}
                      onClick={() => currentPage < paginatedTotalPages && handlePageChange(currentPage + 1)}
                    >
                      <ChevronDown className={`w-[9px] h-[11px] stroke-current -rotate-90 ${
                        currentPage === paginatedTotalPages ? 'opacity-20' : 'opacity-100'
                      }`} />
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Cards Layout */}
      <div className="md:hidden w-full px-8 pb-8">
        <div className="grid grid-cols-1 gap-4">
          {paginatedCaseStudies.map((study) => (
            <article key={study.id} className="group">
              <div className="flex flex-col h-full cursor-pointer">
                <figure>
                  <img
                    className="w-full border-t border-x rounded-t object-cover"
                    src={study.image}
                    alt={study.title}
                    loading="lazy"
                  />
                </figure>
                
                <div className="p-4 space-y-2 rounded-b border-b transition group-hover:bg-gray-100 grow border-x">
                  <p className="uppercase text-xs font-medium text-gray-600 font-sf-pro-text">
                    <span className="opacity-80 after:content-['|'] after:text-gray-600 after:mx-1.5">
                      {study.category}
                    </span>
                    <span className="opacity-80">{study.topic}</span>
                  </p>
                  <h3 className="text-gray-800 text-sm font-medium leading-tight font-sf-pro-display">
                    {study.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {paginatedCaseStudies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 font-sf-pro-display">
              No case studies found
            </h3>
            <p className="text-gray-600 font-sf-pro-text">
              Try adjusting your filters to see more results.
            </p>
          </div>
        )}
        
        {/* Mobile Pagination */}
        {filteredCaseStudies.length > 0 && paginatedTotalPages > 1 && (
          <div className="flex flex-col gap-4 items-center mt-8">
            <nav className="flex gap-4 justify-center items-center w-full" aria-label="Pagination">
              {/* Previous Button */}
              <button
                className={`flex items-center justify-center w-[25px] h-[25px] rounded-full transition ${
                  currentPage === 1 
                    ? 'pointer-events-none bg-gray-200/60' 
                    : 'bg-gray-200 hover:bg-gray-200/60 cursor-pointer'
                }`}
                aria-label="Go to previous page"
                disabled={currentPage === 1}
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              >
                <ChevronDown className={`w-[9px] h-[11px] stroke-current rotate-90 ${
                  currentPage === 1 ? 'opacity-20' : 'opacity-100'
                }`} />
              </button>

              {/* Page Numbers - Simplified for mobile */}
              <span className="text-sm font-sf-pro-text text-gray-600">
                Page {currentPage} of {paginatedTotalPages}
              </span>

              {/* Next Button */}
              <button
                className={`flex items-center justify-center w-[25px] h-[25px] rounded-full transition ${
                  currentPage === paginatedTotalPages 
                    ? 'pointer-events-none bg-gray-200/60' 
                    : 'bg-gray-200 hover:bg-gray-200/60 cursor-pointer'
                }`}
                aria-label="Go to next page"
                disabled={currentPage === paginatedTotalPages}
                onClick={() => currentPage < paginatedTotalPages && handlePageChange(currentPage + 1)}
              >
                <ChevronDown className={`w-[9px] h-[11px] stroke-current -rotate-90 ${
                  currentPage === paginatedTotalPages ? 'opacity-20' : 'opacity-100'
                }`} />
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudiesPage;