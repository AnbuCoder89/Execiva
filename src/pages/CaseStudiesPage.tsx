import React, { useState } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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

  const caseStudies: CaseStudy[] = [
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
      image: '/assets/images/case-studies/case-1.jpeg',
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
      image: '/assets/images/case-studies/case-2.jpeg',
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
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg',
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
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpg',
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
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpg',
      description: 'Sky Deutschland utilized our data insights platform to significantly improve viewer engagement and content strategy.'
    }
  ];

  const filterOptions = {
    topics: ['Identity', 'Platform', 'Connected TV', 'Analytics', 'AI/ML', 'Data Analytics'],
    industry: ['Technology', 'Media', 'Healthcare', 'AdTech', 'Hospitality', 'Broadcasting'],
    region: ['Global', 'North America', 'Europe', 'Asia Pacific'],
    channels: ['Digital', 'Programmatic', 'CTV', 'Mobile', 'OTT'],
    products: ['Data Platform', 'OpenPath', 'Video Platform', 'Analytics Suite', 'AI Platform']
  };

  const toggleFilter = (filterType: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const toggleFilterExpansion = (filterType: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesTopics = selectedFilters.topics.length === 0 || selectedFilters.topics.includes(study.topic);
    const matchesIndustry = selectedFilters.industry.length === 0 || selectedFilters.industry.includes(study.industry);
    const matchesRegion = selectedFilters.region.length === 0 || selectedFilters.region.includes(study.region);
    const matchesChannels = selectedFilters.channels.length === 0 || selectedFilters.channels.includes(study.channel);
    const matchesProducts = selectedFilters.products.length === 0 || selectedFilters.products.includes(study.product);

    return matchesTopics && matchesIndustry && matchesRegion && matchesChannels && matchesProducts;
  });

  const FilterSection: React.FC<{
    title: string;
    filterKey: keyof typeof selectedFilters;
    options: string[];
  }> = ({ title, filterKey, options }) => (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <button
        onClick={() => toggleFilterExpansion(filterKey)}
        className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-gray-700 transition-colors"
      >
        <span className="font-sf-pro-display">{title}</span>
        <ChevronDown
          size={16}
          className={`transform transition-transform ${
            expandedFilters[filterKey] ? 'rotate-180' : ''
          }`}
        />
      </button>
      {expandedFilters[filterKey] && (
        <div className="mt-3 space-y-2">
          {options.map(option => (
            <label key={option} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters[filterKey].includes(option)}
                onChange={() => toggleFilter(filterKey, option)}
                className="w-4 h-4 text-gray-600 bg-white border-gray-300 rounded focus:ring-gray-400 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-700 font-sf-pro-text">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 pt-20">
      {/* Case Studies Content */}
      <div className="flex min-h-screen">
        {/* Left Panel - Scrollable Filters (30%) */}
        <div className="w-[30%] bg-gray-50">
          <div className="p-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {/* Case Studies Header in Left Panel */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={ArrowLeft}
                    iconPosition="left"
                    onClick={() => navigate('/')}
                  >
                    Back
                  </Button>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 font-sf-pro-display mb-2">
                  Case Studies
                </h1>
                <div className="text-sm text-gray-600 font-sf-pro-text mb-6">
                  Showing {filteredCaseStudies.length} of {caseStudies.length} results
                </div>
              </div>

              <div className="space-y-4">
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
              </div>

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

        {/* Right Panel - Case Studies Content (70%) */}
        <div className="w-[70%] bg-gray-50">
          <div className="py-4 px-6 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCaseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide font-sf-pro-text">
                        {study.subtitle}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight font-sf-pro-display">
                      {study.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredCaseStudies.length === 0 && (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;