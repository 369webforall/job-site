import React from 'react';
import Image from 'next/image';
import poster from '@/public/assets/images/poster.jpg';
import { HiArrowLongRight } from 'react-icons/hi2';
import Link from 'next/link';
const AboutSection = () => {
  return (
    <section className="relative text-gray-800 lg:py-12">
      <div className="w-full lg:container mx-auto  px-1 py-10 flex flex-col  lg:flex-row items-center justify-between gap-10">
        <div className="relative py-4 flex items-center justify-center w-full md:w-1/2">
          <div className="relative">
            <Image
              a
              alt="picture of jobsearch"
              src={poster}
              priority={true}
              quality={100}
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              decoding="async"
              className="w-full h-full rounded-sm"
              loading="eager"
              title="Finde Deinen neuen Job"
              placeholder="blur"
            />
          </div>
          <div className="absolute top-0 mx-auto w-1/2 h-5 bg-orange-500"></div>
          <div className="absolute bottom-0 mx-auto w-1/2 h-5 bg-orange-500"></div>
        </div>
        <div className="lg:flex-grow lg:w-1/2 lg:pl-12 md:pl-6 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="text-2xl md:text-5xl font-thin font-sans mb-6  text-gray-900 text-center ">
            Finde Deinen neuen Job!
          </h2>
          <p className="mb-8 max-w-2xl text-center text-slate-500 lg:text-left">
            Lernen Sie unser umfassendes Angebot, innovative Lösungen und
            modernen Services kennen. Begeben Sie sich mit uns auf einen
            erfolgreichen Weg bei der Job-oder Mitarbeitersuche.
          </p>
          <p className="mb-8 max-w-2xl text-center text-slate-500 lg:text-left">
            Arbeit ist ein wichtiger Bestandteil unseres Lebens. Deshalb legen
            wir unseren Fokus auf sinnvolle und nachhaltige Beschäftigung sowie
            auf Chancen für alle. Wir glauben an Innovationskraft und
            Veränderungsbereitschaft und unseren Plan: Arbeiten, um die Welt zu
            verändern. Wir schauen auf die Arbeitskräfte, unsere Bewerber und
            Mitarbeiter.
          </p>

          <Link
            href="/jobs"
            role="link"
            aria-label="Hier Jobs Finden"
            className="text-orange-700 p-2"
          >
            <span className="flex gap-2 items-center text-lg">
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
