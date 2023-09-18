'use client';
import React from 'react';
import Image from 'next/image';

import heroImage from '@/public/assets/images/hero-job.jpg';
import Link from 'next/link';
const HeroJob = () => {
  return (
    <section className="relative bg-red-600">
      <div className="relative h-[80vh] sm:h-[80vh]">
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

      <div className="absolute z-10 top-0 right-0 md:right-5 lg:right-20  mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:flex sm:h-[90vh] lg:h-[80vh] sm:items-start lg:items-center lg:px-8">
        <div className="mt-5 md:mt-15 py-4 max-w-xl  ltr:sm:text-left rtl:sm:text-right text-gray-900 font-roboto ">
          <div className="flex flex-col sm:items-center sm:justify-center h-[100%]">
            <h1 className="text-2xl md:text-4xl font-thin font-roboto text-center">
              Hier finden Sie unsere aktuellen
            </h1>
            <h1 className="text-2xl md:text-4xl font-thin font-roboto text-center">
              Stellenangebote
            </h1>

            <div className="my-8 flex items-center justify-center">
              <Link
                href="/jobs"
                className="block w-full rounded bg-orange-500 px-12 py-3 text-lg font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Book a metting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroJob;
