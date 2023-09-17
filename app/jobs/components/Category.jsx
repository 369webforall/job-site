import React from 'react';

const Category = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Ihre Vorteile durch unsere Vermittlung
          </h2>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p> */}
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center   hover:bg-gray-200">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-yellow-500 mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
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
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
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
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
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
