'use client';
import React from 'react';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
const JobDetails = () => {
  const route = useRouter();
  return (
    <div className="max-w-container mx-auto my-4 font-roboto">
      <h1 className="mb-2">Job Details</h1>
      <p className="max-w-2xl mb-4">
        Lagermitarbeiter (Pick by Voice) auf verschiedenen Standorten je nach
        Bedarf des Kunden. Hier gilt zu beachten, dass die Arbeiter die Zahlen
        in Deutsch kennen und geimpft sein müssen. Stundenlohn zw. € 9,60 und €
        11,72. Unterkunft zw. € 210-230 pro Person/Monat.
      </p>
      <ul>
        <li>Wünnenberg</li>
        <li>Kerpen</li>
        <li>Bottrop</li>
        <li>Hamm</li>
        <li>Rosbach</li>
        <li>Ganderkesee</li>
        <li>Eching</li>
        <li>Trostberg</li>
        <li>Langenbach</li>
      </ul>
      <Button
        onClick={() => route.push('/jobs/apply')}
        variant="solid"
        color="blue"
        className="mt-4"
      >
        Apply
      </Button>
    </div>
  );
};

export default JobDetails;
