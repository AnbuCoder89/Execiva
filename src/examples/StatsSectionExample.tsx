import React from 'react';
import StatsSection from '../components/ui/StatsSection';

// Example usage of the StatsSection component
const StatsSectionExample: React.FC = () => {
  const exampleStats = [
    {
      number: "500+",
      label: "Experts supporting our clients"
    },
    {
      number: "2.1B",
      label: "Websites made composable"
    },
    {
      number: "98%",
      label: "Client Retention Rate"
    },
    {
      number: "50M+",
      label: "Dollars raised by our clients"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Example 1: Basic usage */}
      <StatsSection stats={exampleStats} />
      
      {/* Example 2: With custom className */}
      <StatsSection 
        stats={exampleStats} 
        className="bg-gray-100" 
      />
      
      {/* Example 3: Different stats */}
      <StatsSection 
        stats={[
          { number: 1000, label: "Happy Customers" },
          { number: "24/7", label: "Support Available" },
          { number: "99.9%", label: "Uptime Guarantee" },
          { number: 150, label: "Countries Served" }
        ]} 
      />
    </div>
  );
};

export default StatsSectionExample;