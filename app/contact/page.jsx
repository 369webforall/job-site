import React from 'react';
import dynamic from 'next/dynamic';
import ContactForm from './ContactForm';

import Address from './Address';

import Map from './Map';

const Calendly = dynamic(() => import('./Calendly'), { ssr: false });

export async function generateMetadata() {
  const siteURL = 'https://www.ldpersonalvermittlung.com';

  return {
    title: 'Kontaktieren Sie Uns - LD Personalvermittlung | Fragen, Anfragen',
    description:
      'Haben Sie Fragen oder Anfrage möchten Sie mit uns zusammenarbeiten? Kontaktieren Sie LD Personalvermittlung für professionelle Personalberatung.',
    alternates: {
      canonical: `${siteURL}/contact`,
    },
  };
}
const Contact = () => {
  return (
    <div className="max-w-[95%] mx-auto px-10 py-10 md:my-20">
      <div className="flex flex-col gap-16 lg:flex-row">
        <div className="flex-1">
          <Address />
        </div>
        <div className="max-w-lg">
          <ContactForm />
        </div>

        <div className="flex items-center flex-col flex-1  ">
          <h2 className="text-3xl font-sans   mb-2 text-orange-600">
            Ein Meeting Planen
          </h2>

          <Calendly />
        </div>
      </div>
      <div className="my-4">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
