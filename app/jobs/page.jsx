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
      {/* <div className="col-start-2 col-span-11">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobData.map((job, index) => (
            <JobListing key={index} job={job} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Jobs;
