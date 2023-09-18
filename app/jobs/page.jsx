import React from 'react';
import Hero from './components/Hero';
import JobListing from '@/components/JobListing';
import Category from './components/Category';
import Accordian from './components/Accordian';
import Faq from './components/Faq';
import { jobData } from '@/constants';
const Jobs = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Accordian />
      <Faq />
    </div>
  );
};

export default Jobs;
