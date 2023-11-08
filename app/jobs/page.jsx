import React from 'react';
import Hero from './components/Hero';
import Category from './components/Category';
import Accordian from './components/Accordian';
import Faq from './components/Faq';

export async function generateMetadata() {
  const siteURL = 'https://www.ldpersonalvermittlung.com';

  return {
    title: 'Bewerben jetzt auf unsere Stellenangebote | LD Personalvermittlung',
    description:
      'Entdecken Sie spannende Karrieremöglichkeiten bei LD Personalvermittlung. Wir bieten vielfältige Jobangebote . Bewerben jetzt auf unsere Stelleangeboote.',

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
