import React, { useEffect } from 'react';
import Portfolio from '../components/Portfolio';

const Index: React.FC = () => {
  // Create an array of directories we need to ensure exist
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Smooth scroll to sections when clicking on nav links
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle direct navigation to a hash
    if (window.location.hash) {
      handleHashChange();
    }

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-950 text-gray-900 dark:text-gray-100 min-h-screen">
      <Portfolio />
    </div>
  );
};

export default Index;