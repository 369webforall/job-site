'use client';
import React from 'react';
import Image from 'next/image';

import heroImage from '@/public/assets/images/hero-job.jpg';
import Link from 'next/link';
const HeroJob = () => {
  return (
    <section className="font-roboto">
      <div className="flex flex-col gap-14 lg:flex-row lg:gap-24 items-center justify-between   space-y-0 lg:space-y-0">
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
        <div className="flex flex-col mb-16 space-y-12 lg:w-1/2">
          <h1 className="text-3xl font-sans font-thin text-center lg:text-4xl lg:text-left">
            Hier finden Sie unsere aktuellen <br /> Stellenangebote
          </h1>
          {/* <p className="max-w-lg text-center text-slate-500 lg:text-left"></p> */}

          <div className="flex items-center lg:items-start">
            <Link
              href="/jobs"
              role="link"
              aria-label="Hier Jobs Finden"
              className="block mx-auto lg:mx-0 rounded bg-orange-600 px-6 py-3 text-lg font-medium text-white shadow hover:bg-orange-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto transition-colors"
            >
              Hier Jobs Finden
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroJob;
