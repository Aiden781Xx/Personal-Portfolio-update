import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechStack from '../components/TechStack';

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
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStack />
      <WorkExperience />
      <Projects />
      <Achievements />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;