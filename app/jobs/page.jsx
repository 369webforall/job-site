import React from 'react';
import Hero from './components/Hero';
import Category from './components/Category';
import Accordian from './components/Accordian';
import Faq from './components/Faq';

import CanonicalURL from '@/components/CanonicalURL';
export const metadata = {
  title: 'LD Personalvermittlung - jobs',
  description:
    'vermittlungsprovision personalvermittlung buchen,job über personalvermittlung erfahrung,job suchen,produktionsmitarbeiter,produktionshelfer,produktionshelfer gehalt,produktionshelfer stellenangebote,produktionshelfer tätigkeit',
};
const Jobs = () => {
  return (
    <div>
      <CanonicalURL />

      <Hero />
      <Category />
      <Accordian />
      <Faq />
    </div>
  );
};

export default Jobs;
