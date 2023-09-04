import React from 'react';
import { helper, forklift, delivery, deliveryVan } from '@/public/assets/icons';
import Image from 'next/image';
const WorkSection = () => {
  return (
    <section className="text-gray-600 font-textFont bg-[#F1AF4B] ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-4xl text-base font-medium title-font mb-4 text-gray-900">
            Ihr schneller Weg zum neuen Job.
          </h2>
          <h3 className="lg:w-2/3 mx-auto leading-relaxed text-3xl">
            Unsere spezialisierten Berufsfelder
          </h3>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Sie suchen einen neuen Job oder neues Personal und wollen das mit
            professioneller Hilfe tun? Wir sind gern für Sie da.
          </p>
        </div>
        {/* card to display work */}
        <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
          <div className="md:w-1/2 md:px-4 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <Image
                src={delivery}
                alt="technician"
                className="h-20 mx-auto object-contain "
              />

              <h4 className="text-xl font-bold mt-4 uppercase">Zusteller</h4>
            </div>
          </div>

          <div className="md:w-1/2 md:px-4 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <Image
                src={deliveryVan}
                alt="technician"
                className="h-20 mx-auto"
              />

              <h4 className="text-xl font-bold mt-4 uppercase">LKW Fahrer</h4>
            </div>
          </div>

          <div className="md:w-1/2 md:px-4 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <Image
                src={helper}
                alt="technician"
                className="h-20 mx-auto object-contain"
              />

              <h4 className="text-xl font-bold mt-4 uppercase">
                Produktionshelfer
              </h4>
            </div>
          </div>

          <div className="md:w-1/2 md:px-4 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 p-4">
              <Image
                src={forklift}
                alt="technician"
                className="h-20 mx-auto object-contain"
              />
              <h4 className="text-xl font-bold mt-4 uppercase">Lagerhelfer</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
