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
          alt="hero image"
          placeholder="blur"
          quality={100}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          fill
          className="object-cover block"
          as="image"
        />
      </div>

      <div className="absolute inset-0 bg-white/60 md:bg-transparent sm:from-white/70 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="absolute z-10 top-0 left-0 md:left-10 lg:left-[136px]  mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:flex sm:h-[90vh] lg:h-[80vh] sm:items-start lg:items-center lg:px-8">
        <div className="mt-5 md:mt-15 py-4 max-w-xl  ltr:sm:text-left rtl:sm:text-right text-gray-950 font-roboto ">
          <h1 className="text-4xl md:text-6xl font-thin font-sans">
            Sie suchen - wir vermitteln
          </h1>

          <p className="mt-4 max-w-lg md:text-xl/relaxed">
            Ihre Vorteile durch unsere Vermittlung
          </p>
          <div className="my-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/jobs"
              role="link"
              aria-label="Hier Jobs Finden"
              className="block w-full rounded bg-orange-700 px-12 py-3 text-lg font-medium text-white shadow hover:bg-orange-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Hier Jobs Finden
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
