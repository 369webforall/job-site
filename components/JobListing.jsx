'use client';
import React from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';

const JobListing = ({ job }) => {
  const route = useRouter();
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-700 mt-2">{job.description}</p>

      <Button
        onClick={() => route.push('/jobs/apply')}
        variant="solid"
        color="blue"
        className="mt-4"
      >
        Apply
      </Button>

      <Button
        onClick={() => route.push('/jobs/slug')}
        variant="solid"
        color="gray"
        className="mt-4 ml-2"
      >
        Job Details
      </Button>
    </div>
  );
};

export default JobListing;
