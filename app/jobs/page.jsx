import React from 'react';
import JobListing from '@/components/JobListing';
import { jobData } from '@/constants';
const Jobs = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobData.map((job, index) => (
          <JobListing key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
