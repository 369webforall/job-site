'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import heroImage from '@/public/assets/images/recruitment.jpg';

const JobDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className=" mb-10 p-5 font-roboto">
      <div className="container flex flex-col gap-14 lg:flex-row lg:gap-32 items-center justify-between px-6 mx-auto mt-10 space-y-0 lg:space-y-0">
        <div className="w-full lg:w-1/2 ">
          <Image
            src={heroImage}
            className="object-cover object-center rounded"
            alt="hero"
            as="image"
            loading="eager"
            placeholder="blur"
            quality={100}
            priority={true}
          />
        </div>
        <div className="flex flex-col  space-y-4 lg:w-1/2">
          <h2 className="text-2xl font-sans font-thin text-center lg:text-3xl lg:text-left">
            Wir Verbinden Arbeitgeber und Arbeitnehmer - Effiziente
            Personalvermittlung für Ihren Erfolg
          </h2>
          <p className="max-w-2xl text-center text-slate-500 lg:text-left">
            Suchen Sie qualifizierte Mitarbeiter? Wir sind hier, um Ihnen zu
            helfen! Unsere Personalvermittlung ist darauf spezialisiert, die
            perfekte Verbindung zwischen Arbeitgebern und Arbeitnehmern
            herzustellen.
          </p>
          {isExpanded ? (
            <>
              <h2 className="text-2xl font-sans font-thin text-center lg:text-3xl lg:text-left">
                Warum Unsere Personalvermittlung Wählen?
              </h2>
              <p className="max-w-2xl text-center text-slate-500 lg:text-left">
                Fachkenntnisse: Unsere Experten kennen den Arbeitsmarkt und
                finden die besten Talente für Ihr Unternehmen.
              </p>
              <p className="max-w-2xl text-center text-slate-500 lg:text-left">
                Schnelligkeit: Wir beschleunigen den Auswahlprozess und bringen
                Sie schnell mit geeigneten Kandidaten in Kontakt.
              </p>
              <p className="max-w-2xl text-center text-slate-500 lg:text-left">
                Zuverlässigkeit: Verlassen Sie sich auf unsere Erfahrung und
                Professionalität - wir stehen für zuverlässige Vermittlungen.
              </p>
              <p className="max-w-2xl text-center text-slate-500 lg:text-left">
                Kundenzufriedenheit: Ihre Zufriedenheit ist unsere Priorität.
                Wir streben nach langfristigen Partnerschaften und erfolgreichen
                Einstellungen.
              </p>
              <h2 className="text-2xl font-sans font-thin text-center lg:text-3xl lg:text-left">
                Ihre Vorteile Mit Unserer Vermittlung:
              </h2>
              <p className="max-w-2xl text-center text-slate-500 lg:text-left">
                Effizienz: Sparen Sie Zeit und Ressourcen, indem Sie sich auf
                uns verlassen, um die richtigen Mitarbeiter zu finden.
              </p>
              <p className="max-w-2xl text-center text-slate-500 lg:text-left">
                Qualität: Wir prüfen sorgfältig die Qualifikationen und
                Erfahrungen der Kandidaten, um Ihnen nur die besten Profile
                vorzustellen.
              </p>
              <p className="max-w-2xl text-center text-slate-500 lg:text-left">
                Unterstützung: Unser engagiertes Team unterstützt Sie während
                des gesamten Auswahlprozesses und darüber hinaus.
              </p>
              <p className="max-w-2xl text-center text-slate-500 lg:text-left">
                Kontaktieren Sie Uns Jetzt!
              </p>
              <p className="max-w-2xl text-center text-slate-500 lg:text-left">
                Haben Sie Fragen oder möchten Sie mehr über unsere
                Dienstleistungen erfahren? Wir sind hier, um Ihnen zu helfen.
                Kontaktieren Sie uns noch heute und lassen Sie uns gemeinsam die
                passenden Mitarbeiter für Ihr Unternehmen finden.
              </p>
            </>
          ) : null}

          <button
            onClick={toggleReadMore}
            className="text-orange-600 hover:underline mt-4 text-left"
          >
            {isExpanded ? 'Hide Text' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
