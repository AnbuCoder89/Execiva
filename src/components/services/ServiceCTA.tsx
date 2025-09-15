import React from 'react';
import CTA from '../ui/CTA';

interface ServiceCTAProps {
  serviceName: string;
  onGetStarted: () => void;
  onViewAllServices: () => void;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  serviceName,
  onGetStarted,
  onViewAllServices
}) => {
  return (
    <CTA
      title="Ready to Get Started?"
      description={`Let's discuss how our ${serviceName.toLowerCase()} solutions can transform your business and drive growth.`}
      primaryButtonText="Get Started"
      secondaryButtonText="View All Services"
      onPrimaryClick={onGetStarted}
      onSecondaryClick={onViewAllServices}
    />
  );
};

export default ServiceCTA;