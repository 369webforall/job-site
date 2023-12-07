import React from 'react';
import Image from 'next/image';
import blog1 from '../../public/assets/images/blog1.jpg';
import blog2 from '../../public/assets/images/blog2.jpg';
import blog3 from '../../public/assets/images/blog3.jpg';

export async function generateMetadata() {
  const siteURL = 'https://www.ldpersonalvermittlung.com';

  return {
    title: 'Informative Artikel - LD Personalvermittlung Blog',
    description:
      'Entdecken LD Personalvermittlung Blog für informative Artikel rund um Karriere, Personalmanagement und berufliche Entwicklung. Erfahren Sie wertvolle Tipps.',
    alternates: {
      canonical: `${siteURL}/blogs`,
    },
  };
}
const Blogs = () => {
  return (
    <>
      <section className="text-gray-600 font-roboto">
        <div className="mx-auto flex px-1 pb-5 md:flex-row flex-col items-center">
          <div className="relative lg:max-w-2xl  md:w-1/2 mb-10 md:mb-0 ">
            <Image
              className="object-cover object-center rounded"
              alt="meeting"
              src={blog1}
              placeholder="blur"
              loading="eager"
              sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              title="Was macht eine Personalvermittlung"
            />
          </div>
          <div className="lg:flex-grow  lg:pl-40 md:pl-16 flex items-center text-center ">
            <h1 className="text-4xl md:text-6xl  mb-4 font-sans font-thin text-gray-900">
              Was macht eine
              <br className="hidden lg:inline-block" />
              Personalvermittlung?
            </h1>
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-2  flex-col gap-4">
          <p class=" leading-relaxed text-lg text-justify font-roboto">
            Die Firma <b>LD Personalvermittlung</b> hat sich darauf
            spezialisiert, Menschen mit Unternehmen zu verbinden, die auf der
            Suche nach qualifizierten Mitarbeitern sind. In diesem Blogartikel
            erfahren Sie mehr über die Dienstleistungen der LD
            Personalvermittlung und wie sie bei Ihrer Karriere oder Ihrem
            Unternehmen unterstützt werden
          </p>
          <h2 className="sm:text-3xl text-2xl mt-8 mb-10 font-roboto text-gray-900">
            Die Kosten für Personalvermittlung
          </h2>
          <p class=" leading-relaxed text-lg font-roboto">
            Die Kosten für eine Personalvermittlung variieren je nach Branche,
            den spezifischen Anforderungen, der Position und der Erfahrung des
            Bewerbers ab. Es ist jedoch wichtig zu bedenken, dass die
            Investition in die richtige Person langfristig von großem Nutzen für
            Ihr Unternehmen ist.
          </p>
        </div>
      </section>
      <section className="text-gray-600 font-roboto lg:my-6">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col">
          <div className="lg:flex-1 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-14 mb-16 md:mb-0 items-start">
            <h2 className="md:text-3xl text-2xl mb-10 mt-4 font-roboto text-gray-900 p-1">
              Unterschied zwischen Personalberatung und Personalvermittlung
            </h2>
            <p className="leading-relaxed text-lg text-justify font-roboto max-w-3xl p-1">
              Oft werden die Begriffe Personalberatung und Personalvermittlung
              als Synonyme verwendet. Tatsächlich gibt es aber einen wichtigen
              Unterschied. Bei der Personalberatung konzentriert man sich auf
              die Beratung von Unternehmen hinsichtlich ihrer Personalstrategie,
              während es bei der Personalvermittlung um die direkte Vermittlung
              von Mitarbeitern an das Unternehmen geht.
            </p>
          </div>

          <div className="relative lg:max-w-lg lg:w-full md:w-1/2 flex-1">
            <Image
              className="object-cover object-center rounded"
              alt="interview"
              src={blog2}
              placeholder="blur"
              loading="eager"
              sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              title="Unterschied zwischen Personalberatung und Personalvermittlung"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 font-roboto lg:my-10">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div className="relative lg:max-w-lg lg:w-full md:w-1/2 flex-1">
            <Image
              className="object-cover object-center rounded"
              alt="Personalberater"
              src={blog3}
              placeholder="blur"
              loading="eager"
              sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              title="Diese 10 stellt die Personalberaterin"
            />
          </div>
          <div className="px-2 py-1 lg:flex-1 md:w-1/2 lg:pl-24 md:pl-16 md:py-8 flex flex-col md:items-start md:text-left items-center">
            <h2 className="sm:text-3xl text-xl mb-8 mt-6  text-gray-900">
              <b>FRAGEN:</b>Diese 10 stellt die Personalberaterin
            </h2>
            <ol className="list-decimal flex flex-col gap-4 text-lg px-2 lg:px-4">
              <li>
                Welche Qualifikationen und Erfahrungen sind für die Position
                erforderlich?
              </li>
              <li>Gibt es spezifische Anforderungen an Soft Skills?</li>
              <li>Wie gestaltet sich der Auswahlprozess?</li>

              <li>Wie lange dauert der Vermittlungsprozess im Durchschnitt?</li>
              <li>
                Welche Unterstützung bieten Sie während des Bewerbungsprozesses?
              </li>
              <li>
                Sind Weiterbildungsmöglichkeiten oder Schulungen verfügbar?
              </li>
              <li>
                Welche Vergütungspakete bieten die potenziellen Arbeitgeber?
              </li>
              <li>Gibt es Möglichkeiten für berufliche Weiterentwicklung?</li>
              <li>Wie wird die Vertraulichkeit meiner Bewerbung gewahrt?</li>
            </ol>
          </div>
        </div>
        <div className="container mx-auto flex px-2 py-2  flex-col gap-4 my-10">
          <p class="text-xl font-roboto font-medium leading-relaxed">
            LD Personalvermittlung beantwortet all diese Fragen und bietet eine
            individuelle Betreuung, um sicherzustellen, dass sowohl Unternehmen
            als auch Bewerber die bestmögliche Passform finden. Verlassen Sie
            sich auf LD Personalvermittlung, um Ihre Karriere
          </p>
        </div>
      </section>
    </>
  );
};

export default Blogs;
