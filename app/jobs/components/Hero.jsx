'use client';
import React from 'react';
import Image from 'next/image';

import heroImage from '@/public/assets/images/hero-job.jpg';
import Link from 'next/link';
const HeroJob = () => {
  return (
    <section className="relative">
      <div className="relative h-[80vh] sm:h-[80vh]">
        <Image
          src={heroImage}
          alt="hero section"
          placeholder="blur"
          quality={100}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          fill
          loading="eager"
          className="object-cover block"
        />
      </div>

      <div className="absolute inset-0 bg-white/75 md:bg-transparent sm:from-white/95 sm:to-white/25 ltr:md:bg-gradient-to-r rtl:md:bg-gradient-to-l"></div>

      <div className="absolute z-10 top-0 left-0 h-[calc(100%)] w-[calc(100%)]">
        <div className="flex justify-center items-center h-full md:justify-end sm:pr-2 md:pr-5 lg:pr-20">
          <div className="flex flex-col items-center justify-center p-2 h-full w-full sm:w-[calc(80%)] md:w-[calc(40%)] lg:w-[calc(35%)] ">
            <h1 className="text-xl text-gray-950 sm:text-2xl md:3xl 2xl:text-4xl md:font-thin font-sans text-center">
              Hier finden Sie unsere aktuellen <br /> Stellenangebote
            </h1>

            <div className="my-8 flex items-center justify-center">
              <Link
                href="/contact"
                className="  rounded bg-orange-500 px-12 py-3 text-lg font-medium text-white shadow hover:bg-orange-600 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto "
              >
                Ein Meeting Buchen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroJob;
