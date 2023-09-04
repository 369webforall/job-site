import React from 'react';
import Image from 'next/image';
import poster from '@/public/assets/images/poster.jpg';

const AboutSection = () => {
  return (
    <section className="relative text-gray-600 md:py-20 font-textFont">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center ">
        <div className="relative lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 h-[400px] py-2 flex items-center justify-center">
          <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 bg-orange-600 h-[400px] py-2 flex items-center justify-center">
            <Image
              className="object-cover object-center rounded absolute"
              alt="hero"
              src={poster}
            />
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="text-lg sm:font-thin sm:text-5xl mb-6  text-gray-900 text-center ">
            Finde Deinen neuen Job!
          </h2>
          <p className="mb-8 leading-relaxed text-sm sm:2xl">
            Lernen Sie unser umfassendes Angebot, innovative Lösungen und
            moderne Services kennen. Begeben Sie sich mit uns auf einen
            erfolgreichen Weg bei der Job- oder der Mitarbeitersuche.Diversität,
            Integration, Inklusion sowie der Förderung von Frauen und jungen
            Talenten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
