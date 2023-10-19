import React from 'react';
import Hero from './components/Hero';
import Category from './components/Category';
import Accordian from './components/Accordian';
import Faq from './components/Faq';

export async function generateMetadata() {
  const siteURL = 'https://www.ldpersonalvermittlung.com';

  return {
    title:
      'Bewerben Sie sich jetzt auf unsere Stellenangebote | LD Personalvermittlung',
    description:
      'Entdecken Sie spannende Karrieremöglichkeiten bei LD Personalvermittlung. Wir bieten vielfältige Jobangebote in verschiedenen Branchen. Bewerben Sie sich noch heute und starten Sie Ihre berufliche Zukunft mit uns.',
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
