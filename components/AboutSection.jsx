import React from 'react';
import Image from 'next/image';
import poster from '@/public/assets/images/poster.jpg';
import { HiArrowLongRight } from 'react-icons/hi2';
import Link from 'next/link';
const AboutSection = () => {
  return (
    <section className="relative text-gray-800 md:py-12">
      <div className="w-full md:container mx-auto  px-1 py-10 flex flex-col  md:flex-row items-center justify-between gap-10">
        <div className="relative py-4 flex items-center justify-center w-full md:w-1/2">
          <div className="relative h-[250px] w-[600px] md:h-[400px] md:w-[600px]">
            <Image
              alt="picture of jobsearch"
              src={poster}
              placeholder="blur"
              className="absolute h-full w-full inset-0"
              fill
            />
          </div>
          <div className="absolute top-0 mx-auto w-1/2 h-5 bg-orange-500"></div>
          <div className="absolute bottom-0 mx-auto w-1/2 h-5 bg-orange-500"></div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-6 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="text-3xl md:text-5xl font-thin font-sans mb-6  text-gray-900 text-center ">
            Finde Deinen neuen Job!
          </h2>
          <p className="mb-8 leading-relaxed  max-w-2xl md:text-xl/relaxed font-roboto">
            Lernen Sie unser umfassendes Angebot, innovative Lösungen und
            moderne Services kennen. Begeben Sie sich mit uns auf einen
            erfolgreichen Weg bei der Job- oder der Mitarbeitersuche.Diversität,
            Integration, Inklusion sowie der Förderung von Frauen und jungen
            Talenten.
          </p>

          <Link href="/jobs" className="text-orange-600  p-2">
            <span className="flex gap-2 items-center">
              Hier Jobs Finden
              <HiArrowLongRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
