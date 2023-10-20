'use client';
import React from 'react';
import Image from 'next/image';

import heroImage from '@/public/assets/images/hero.jpg';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <section className="font-roboto">
      <div className=" flex flex-col-reverse gap-5 lg:flex-row items-center  mb-10  space-y-0 md:space-y-0">
        <div className="flex flex-col mb-16 space-y-12 lg:w-1/2 lg:pl-44">
          <h1 className="max-w-xl font-sans text-4xl font-thin text-center lg:text-5xl lg:text-left">
            Sie suchen - wir vermitteln
          </h1>
          <p className="max-w-lg text-center text-slate-500 lg:text-left">
            Ihre Vorteile durch unsere Vermittlung
          </p>
          <p className="max-w-md text-center text-slate-500 lg:text-left mt-8 mb-8">
            Sie möchten die Vorteile einer Personalvermittlung nutzen oder haben
            Fragen? Wir freuen uns und sind gern für Sie da.
          </p>
          <div className="flex items-center lg:items-start">
            <Link
              href="/contact"
              role="link"
              aria-label="Ein Meeting Buchen"
              className="block mx-auto lg:mx-0 rounded bg-orange-600 px-6 py-3 text-lg font-medium text-white shadow hover:bg-orange-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto transition-colors"
            >
              Ein Meeting Buchen
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
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
