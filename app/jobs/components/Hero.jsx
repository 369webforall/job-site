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

      <div className="absolute inset-0 bg-white/75 md:bg-transparent md:from-white/95 md:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="absolute z-10 top-0 right-0 2xl:right-40">
        <div className=" text-gray-900 font-roboto h-full">
          <div className="flex flex-col items-center justify-center h-[550px] 2xl:h-[750px]  p-2 ">
            <h1 className="text-xl md:text-2xl xl:text-4xl font-thin  font-sans text-center">
              Hier finden Sie unsere aktuellen <br /> Stellenangebote
            </h1>

            <div className="my-8 flex items-center justify-center">
              <Link
                href="/contact"
                className="  rounded bg-orange-500 px-12 py-3 text-lg font-medium text-white shadow hover:bg-orange-600 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto "
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
