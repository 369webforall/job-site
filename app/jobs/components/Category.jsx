import React from 'react';
import Image from 'next/image';
import { speed, exclusivity, advise } from '@/public/assets/icons';
const Category = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-36">
          <h2 className="sm:text-3xl text-2xl font-sans text-gray-900 mb-4">
            Ihre Vorteile durch die LD Personalvermittlung
          </h2>

          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center   hover:bg-gray-200">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-yellow-500 mb-5 flex-shrink-0">
              <Image
                src={exclusivity}
                width={40}
                height={40}
                alt="exclusivity"
                className="object-cover"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-gray-900 text-lg title-font font-medium mb-3">
                Exklusivität
              </h3>
              <p className="leading-relaxed text-base">
                Zugang zu Stellenangeboten, die sonst nirgendwo ausgeschrieben
                sind.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center   hover:bg-gray-200">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-yellow-500 mb-5 flex-shrink-0">
              <Image
                src={speed}
                width={40}
                height={40}
                alt="speed"
                className="object-cover"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-gray-900 text-lg title-font font-medium mb-3">
                Schnelligkeit
              </h3>
              <p className="leading-relaxed text-base">
                Die Vermittlung in einen Job erfolgt schnell, unkompliziert und
                kostenfrei.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center   hover:bg-gray-200">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-yellow-500 mb-5 flex-shrink-0">
              <Image
                src={advise}
                width={40}
                height={40}
                alt="advise"
                className="object-cover"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-gray-900 text-lg title-font font-medium mb-3">
                Inklusive Beratung
              </h3>
              <p className="leading-relaxed text-base">
                Unterstützung von der Bewerbung übers Vorstellungsgespräch bis
                zur Vertragsunterzeichnung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
