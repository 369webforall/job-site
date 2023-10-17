'use client';
import React from 'react';
import Image from 'next/image';

import heroImage from '@/public/assets/images/hero.jpg';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-roboto sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Sie suchen - wir vermitteln
          </h1>
          <p className="mt-4 max-w-lg md:text-xl/relaxed">
            Ihre Vorteile durch unsere Vermittlung
          </p>
          <p className="mb-8 mt-8 leading-relaxed">
            Sie möchten die Vorteile einer Personalvermittlung nutzen oder haben
            Fragen? Wir freuen uns und sind gern für Sie da.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              role="link"
              aria-label="Hier Jobs Finden"
              className="block w-full rounded bg-orange-700 px-12 py-3 text-lg font-medium text-white shadow hover:bg-orange-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Ein Meeting Buchen
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src={heroImage}
            className="object-cover object-center rounded"
            alt="hero"
            as="image"
            loading="eager"
            placeholder="blur"
            quality={100}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
