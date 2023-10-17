'use client';
import React from 'react';
import Image from 'next/image';

import heroImage from '@/public/assets/images/hero-job.jpg';
import Link from 'next/link';
const HeroJob = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            placeholder="blur"
            quality={100}
            loading="eager"
            src={heroImage}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="font-roboto sm:text-4xl text-3xl mb-4 font-medium text-gray-700">
            Hier finden Sie unsere aktuellen <br /> Stellenangebote
          </h1>
          <p className="mb-8 leading-relaxed"></p>
          <div className="flex justify-center">
            <Link
              href="/jobs"
              className="  rounded bg-orange-500 px-12 py-3 text-lg font-medium text-white shadow hover:bg-orange-600 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto "
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
