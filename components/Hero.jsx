'use client';
import React from 'react';

import heroImage from '@/public/assets/images/bg-image.png';
import Link from 'next/link';
const HeroSection = () => {
  const backgroundStyles = {
    backgroundImage: `url(${heroImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh', // Set the desired height
  };
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={backgroundStyles}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:flex lg:h-[80vh] lg:items-center lg:px-8">
        <div className="mt-20 py-4 max-w-xl  ltr:sm:text-left rtl:sm:text-right text-gray-900 ">
          <h1 className="text-4xl font-thin sm:text-6xl">
            Sie suchen - wir vermitteln
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Ihre Vorteile durch unsere Vermittlung
          </p>
          <div className="my-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/jobs"
              className="block w-full rounded bg-orange-500 px-12 py-3 text-lg font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Find Jobs
            </Link>
          </div>
          <p className="mt-20 max-w-lg sm:text-xl/relaxed">
            Sie möchten die Vorteile einer Personalvermittlung nutzen oder haben
            Fragen? Wir freuen uns und sind gern für Sie da.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
