'use client';
import React from 'react';
import Image from 'next/image';

import heroImage from '@/public/assets/images/bg-image.jpg';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <section className="relative">
      <div className="relative h-[100vh] sm:h-[90vh] lg:h-[80vh]">
        <Image
          src={heroImage}
          alt="hero section"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          className="object-cover block"
        />
      </div>

      <div className="absolute inset-0 bg-white/75 md:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="absolute z-10 top-0 left-0 md:left-10 lg:left-20  mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:flex sm:h-[90vh] lg:h-[80vh] sm:items-start lg:items-center lg:px-8">
        <div className="mt-5 md:mt-15 py-4 max-w-xl  ltr:sm:text-left rtl:sm:text-right text-gray-900 font-roboto ">
          <h1 className="text-4xl md:text-6xl font-thin font-sans">
            Sie suchen - wir vermitteln
          </h1>

          <p className="mt-4 max-w-lg md:text-xl/relaxed">
            Ihre Vorteile durch unsere Vermittlung
          </p>
          <div className="my-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/jobs"
              className="block w-full rounded bg-orange-500 px-12 py-3 text-lg font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Book a metting
            </Link>
          </div>
          <p className="mt-20 max-w-lg md:text-xl/relaxed">
            Sie möchten die Vorteile einer Personalvermittlung nutzen oder haben
            Fragen? Wir freuen uns und sind gern für Sie da.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
