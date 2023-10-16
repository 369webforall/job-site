import React from 'react';
import Hero from './components/Hero';
import Category from './components/Category';
import Accordian from './components/Accordian';
import Faq from './components/Faq';

export async function generateMetadata() {
  const siteURL = 'https://www.ldpersonalvermittlung.com';

  return {
    title: 'LD Personalvermittlung - jobs',
    description:
      'vermittlungsprovision personalvermittlung buchen,job über personalvermittlung erfahrung,job suchen,produktionsmitarbeiter,produktionshelfer,produktionshelfer gehalt,produktionshelfer stellenangebote, produktionshelfer tätigkeit',
    alternates: {
      canonical: `${siteURL}/jobs`,
    },
  };
}

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
