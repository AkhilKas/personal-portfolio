import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export default function Analytics() {
  useEffect(() => {
    const MEASUREMENT_ID = 'G-JW5R3722K3';
    
    // Initialize Google Analytics
    ReactGA.initialize(MEASUREMENT_ID, {
      debug: false, // Set to true for debugging in development
    });

    // Send page view on component mount
    ReactGA.send({ 
      hitType: "pageview", 
      page: window.location.pathname + window.location.search 
    });

  }, []);

  return null; // This component doesn't render anything
}

// Custom hook for tracking events
export const useAnalytics = () => {
  const trackEvent = (action, category = 'User Interaction', label = '') => {
    ReactGA.event({
      action: action,
      category: category,
      label: label,
    });
  };

  const trackPageView = (page) => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: page 
    });
  };

  return { trackEvent, trackPageView };
};