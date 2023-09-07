import React from 'react';
import { helper, forklift, delivery, deliveryVan } from '@/public/assets/icons';
import Image from 'next/image';
const WorkSection = () => {
  return (
    <section className="text-gray-600 font-roboto bg-[#F1AF4B] ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-4xl text-base font-medium font-sans mb-4 text-gray-900">
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
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4  md:grid-cols-8 mt-12 text-center">
          <div className=" lg:col-start-1 col-span-2">
            <div className="max-w-xs bg-white rounded-lg border border-gray-300 p-4 col-start-4 col-end-6">
              <Image
                src={delivery}
                alt="technician"
                className="h-20 mx-auto object-contain "
              />

              <h4 className="text-base font-semibold mt-4 uppercase">
                Zusteller helfer
              </h4>
            </div>
          </div>

          <div className="lg:col-start-3 col-span-2">
            <div className="max-w-xs bg-white rounded-lg border border-gray-300 p-4">
              <Image
                src={deliveryVan}
                alt="technician"
                className="h-20 mx-auto"
              />

              <h4 className="text-base font-semibold mt-4 uppercase">
                LKW Fahrer
              </h4>
            </div>
          </div>

          <div className="lg:col-start-5 col-span-2">
            <div className="max-w-xs bg-white rounded-lg border border-gray-300 p-4">
              <Image
                src={helper}
                alt="technician"
                className="h-20 mx-auto object-contain"
              />

              <h4 className="text-base font-semibold mt-4 uppercase">
                Produktionshelfer
              </h4>
            </div>
          </div>

          <div className="md:col-start-7 col-span-2">
            <div className="max-w-xs bg-white rounded-lg border border-gray-300 p-4">
              <Image
                src={forklift}
                alt="technician"
                className="h-20 mx-auto object-contain"
              />
              <h4 className="text-base font-semibold mt-4 uppercase">
                Lagerhelfer
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
