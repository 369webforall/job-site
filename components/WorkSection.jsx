import React from 'react';
import {
  helper,
  forklift,
  delivery,
  deliveryVan,
} from '../public/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
const WorkSection = () => {
  return (
    <section className="text-gray-900 font-roboto bg-orange-400 ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-base font-medium font-sans mb-4 text-gray-900">
            Ihr schneller Weg zum neuen Job.
          </h2>
          <h3 className="lg:w-2/3 mx-auto leading-relaxed text-3xl font-sans">
            Unsere Spezialgebiete
          </h3>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Sie suchen einen neuen Job oder neues Personal und wollen das mit
            professioneller Hilfe tun? Wir sind gerne plus Ausrufezeichen für
            Sie da.
          </p>
        </div>
        {/* card to display work */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10  md:grid-cols-8 mt-12 text-center">
          <div className=" lg:col-start-1 col-span-2">
            <div className="max-w-xs bg-white rounded-lg border border-gray-300 p-4 col-start-4 col-end-6 h-40">
              <Link href="/jobs">
                <Image
                  src={delivery}
                  alt="technician"
                  width={60}
                  height={60}
                  loading="eager"
                  title="Fahrer/Zusteller mit B Führerschein"
                  className="mx-auto object-contain"
                />

                <h4 className="text-base font-semibold mt-4 uppercase">
                  Fahrer/Zusteller mit B Führerschein
                </h4>
              </Link>
            </div>
          </div>

          <div className="lg:col-start-3 col-span-2">
            <div className="max-w-xs bg-white rounded-lg border border-gray-300 p-4 h-40">
              <Link href="/jobs">
                <Image
                  src={deliveryVan}
                  alt="technician"
                  width={60}
                  height={60}
                  loading="eager"
                  className="mx-auto object-contain"
                  title="LKW Fahrer"
                />

                <h4 className="text-base font-semibold mt-4 uppercase">
                  LKW Fahrer
                </h4>
              </Link>
            </div>
          </div>

          <div className="lg:col-start-5 col-span-2">
            <div className="max-w-xs bg-white rounded-lg border border-gray-300 p-4 h-40">
              <Link href="/jobs">
                <Image
                  src={helper}
                  alt="technician"
                  width={60}
                  height={60}
                  loading="eager"
                  title="Produktionshelfer"
                  className="mx-auto object-contain"
                />

                <h4 className="text-base font-semibold mt-4 uppercase">
                  Produktionshelfer
                </h4>
              </Link>
            </div>
          </div>

          <div className="md:col-start-7 col-span-2">
            <Link href="/jobs">
              <div className="max-w-xs bg-white rounded-lg border border-gray-300 p-4 h-40">
                <Image
                  src={forklift}
                  alt="technician"
                  width={60}
                  height={60}
                  loading="eager"
                  title="Lagerhelfer"
                  className="mx-auto object-contain"
                />
                <h4 className="text-base font-semibold mt-4 uppercase">
                  Lagerhelfer
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
