import React from 'react';
// import Hero from '@/components/Hero';
import HeroSection from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import SectionComponent from '@/components/SectionComponent';
const Home = () => {
  return (
    <div className="text-2xl text-primary">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SectionComponent />
    </div>
  );
};

export default Home;
