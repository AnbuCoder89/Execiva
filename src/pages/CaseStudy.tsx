import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowLeft, Filter } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import allCaseStudies from '../../data/caseStudies.json';

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

interface StatCounterProps {
  value: string;
  delay?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState('0');
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      // Extract numeric part and suffix
      const numericMatch = value.match(/^(\d+(?:\.\d+)?)/);
      const suffix = value.replace(/^(\d+(?:\.\d+)?)/, '');
      
      if (numericMatch) {
        const targetNumber = parseFloat(numericMatch[1]);
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetNumber / steps;
        let current = 0;
        let step = 0;

        const counter = setInterval(() => {
          step++;
          current = Math.min(current + increment, targetNumber);
          
          // Format the number based on target
          let formattedNumber;
          if (targetNumber >= 1000) {
            formattedNumber = Math.floor(current).toLocaleString();
          } else if (targetNumber % 1 !== 0) {
            formattedNumber = current.toFixed(1);
          } else {
            formattedNumber = Math.floor(current).toString();
          }
          
          setDisplayValue(formattedNumber + suffix);
          
          if (step >= steps || current >= targetNumber) {
            setDisplayValue(value);
            clearInterval(counter);
          }
        }, duration / steps);

        return () => clearInterval(counter);
      } else {
        setDisplayValue(value);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <span
      ref={counterRef}
    >
      {displayValue}
    </span>
  );
};

const CaseStudy: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const [isLeftPanelFixed, setIsLeftPanelFixed] = useState(true);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    topic: [] as string[],
    industry: [] as string[],
    region: [] as string[],
    channel: [] as string[],
    product: [] as string[]
  });

  const [expandedFilters, setExpandedFilters] = useState({
    topic: false,
    industry: false,
    region: false,
    channel: false,
    product: false
  });

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const statsData = [
    { value: '500+', label: 'Successful Projects Delivered', delay: 0 },
    { value: '2.1B', label: 'Revenue Generated for Clients', delay: 200 },
    { value: '98%', label: 'Client Satisfaction Rate', delay: 400 },
    { value: '50M+', label: 'Users Impacted Globally', delay: 600 }
  ];


  const filterOptions = {
    topic: ['AI/ML', 'Automation', 'Data Analytics', 'Platform'],
    industry: ['Music & Entertainment', 'Music Technology', 'Digital Rights Management', 'Artist Relations', 'Cloud Infrastructure', 'Content Management'],
    region: ['Global', 'North America', 'Europe', 'Asia Pacific'],
    channel: ['Digital'],
    product: ['AI Platform', 'Automation Platform', 'Analytics Suite', 'Rights Management Platform', 'Cloud Platform', 'Data Platform']
  };

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(allCaseStudies.length / itemsPerPage);

  // Filter case studies first, then paginate
  const filteredCaseStudies = allCaseStudies.filter(study => {
    const matchesTopic = selectedFilters.topic.length === 0 || selectedFilters.topic.includes(study.topic);
    const matchesIndustry = selectedFilters.industry.length === 0 || selectedFilters.industry.includes(study.industry);
    const matchesRegion = selectedFilters.region.length === 0 || selectedFilters.region.includes(study.region);
    const matchesChannel = selectedFilters.channel.length === 0 || selectedFilters.channel.includes(study.channel);
    const matchesProduct = selectedFilters.product.length === 0 || selectedFilters.product.includes(study.product);

    return matchesTopic && matchesIndustry && matchesRegion && matchesChannel && matchesProduct;
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

      {/* Stats Counter Section */}
      <section className="relative bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-2 gap-px bg-gray-200 lg:grid-cols-4">
            {statsData.map((stat, index) => (
              <div 
                key={index}
                className="flex w-full flex-col items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 bg-white min-h-[160px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[280px] xl:min-h-[320px] 2xl:min-h-[360px]"
              >
                <div className={`flex mb-4 transition-all duration-1000 ${
                  isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: `${stat.delay + 200}ms` }}>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-gray-900 font-sf-pro-display leading-none">
                    <StatCounter value={stat.value} delay={stat.delay} />
                  </div>
                </div>
                <div className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center text-gray-600 font-sf-pro-text transition-all duration-1000 leading-relaxed px-2 ${
                  isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`} style={{ transitionDelay: `${stat.delay + 400}ms` }}>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intersection Observer for Stats */}
      <div 
        ref={(el) => {
          if (el) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setIsStatsVisible(true);
                }
              },
              { threshold: 0.3 }
            );
            observer.observe(el);
            return () => observer.disconnect();
          }
        }}
        className="absolute top-0 left-0 w-full h-1 pointer-events-none"
      />

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
                  title="Topic"
                  filterKey="topic"
                  options={filterOptions.topic}
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
                  title="Channel"
                  filterKey="channel"
                  options={filterOptions.channel}
                />
                <FilterSection
                  title="Product"
                  filterKey="product"
                  options={filterOptions.product}
                />
              </ul>

              {/* Clear Filters Button */}
              {Object.values(selectedFilters).some(filters => filters.length > 0) && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedFilters({
                      topic: [],
                      industry: [],
                      region: [],
                      channel: [],
                      product: []
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
                      title="Topic"
                      filterKey="topic"
                      options={filterOptions.topic}
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
                      title="Channel"
                      filterKey="channel"
                      options={filterOptions.channel}
                    />
                    <FilterSection
                      title="Product"
                      filterKey="product"
                      options={filterOptions.product}
                    />
                  </ul>

                  {/* Clear Filters Button */}
                  {Object.values(selectedFilters).some(filters => filters.length > 0) && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedFilters({
                          topic: [],
                          industry: [],
                          region: [],
                          channel: [],
                          product: []
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
                  <p className="text-gray-600">Featured Case Studies</p>
                </div>
              </div>

              {/* Case Studies Grid */}
              <div id="list" className="grid gap-6 sm:grid-cols-2 lg:gap-10 lg:grid-cols-3">
                {paginatedCaseStudies.map((study) => (
                  <article key={study.id} className="group cursor-pointer" onClick={() => navigate(`/case-studies/${study.id}`)}>
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
            <article key={study.id} className="group cursor-pointer" onClick={() => navigate(`/case-studies/${study.id}`)}>
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

export default CaseStudy;