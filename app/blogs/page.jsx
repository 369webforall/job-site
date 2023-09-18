import React from 'react';
import Image from 'next/image';
import blog1 from '@/public/assets/images/blog1.jpg';
import blog2 from '@/public/assets/images/blog2.jpg';
import blog3 from '@/public/assets/images/blog3.jpg';
const Blogs = () => {
  return (
    <>
      <section className="text-gray-600 font-roboto">
        <div className="container mx-auto flex px-5 pb-5 md:flex-row flex-col items-center">
          <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="blog main"
              src={blog1}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className=" sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Was macht eine
              <br className="hidden lg:inline-block" />
              Personalvermittlung?
            </h1>
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-2  flex-col gap-4">
          <p class=" leading-relaxed text-lg">
            <b>Personalvermittlung</b> ist ein wichtiger Schritt in der
            Karriereplanung für viele Menschen. Die Firma LD Personalvermittlung
            hat sich darauf spezialisiert, Menschen mit Unternehmen zu
            verbinden, die auf der Suche nach qualifizierten Mitarbeitern sind.
            In diesem Blogartikel erfahren Sie mehr über die Dienstleistungen
            von LD Personalvermittlung und wie sie Ihnen bei Ihrer Karriere oder
            Ihrem Unternehmen helfen können.
          </p>
          <h2 className="sm:text-3xl text-2xl font-medium text-gray-900">
            Die Kosten für Personalvermittlung
          </h2>
          <p class=" leading-relaxed text-lg">
            Die Kosten für Personalvermittlung variieren je nach Unternehmen und
            den spezifischen Anforderungen. LD Personalvermittlung bietet
            transparente und wettbewerbsfähige Preise. Die Gebühren hängen oft
            von der Schwierigkeit der Position, der Branche und der Erfahrung
            des Bewerbers ab. Es ist jedoch wichtig zu bedenken, dass die
            Investition in die richtige Person langfristig von großem Nutzen für
            Ihr Unternehmen sein kann.
          </p>
        </div>
      </section>
      <section className="text-gray-600 font-roboto">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <h2 className="sm:text-3xl text-2xl my-2 font-medium text-gray-900">
            Unterschied zwischen Personalberatung und Personalvermittlung
          </h2>
        </div>
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="mb-8 leading-relaxed text-lg">
              Oft werden die Begriffe Personalberatung und Personalvermittlung
              synonym verwendet, aber es gibt einen wichtigen Unterschied.
              Personalberatung konzentriert sich auf die Beratung von
              Unternehmen hinsichtlich ihrer Personalstrategie, während
              Personalvermittlung sich auf die tatsächliche Vermittlung von
              Mitarbeitern an Unternehmen konzentriert. LD Personalvermittlung
              bietet beide Dienstleistungen an, um sicherzustellen, dass Ihre
              Personalanforderungen vollständig abgedeckt sind.
            </p>
          </div>

          <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero image2"
              src={blog2}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 font-roboto lg:mb-8">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <h2 className="sm:text-3xl text-2xl my-2 font-medium text-gray-900">
            <b>FRAGEN:</b>Diese 10 stellt die Personalberaterin
          </h2>
        </div>
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="section 3"
              src={blog3}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <ol className="list-decimal flex flex-col gap-2 text-lg">
              <li>
                Welche Qualifikationen und Erfahrungen sind für die Position
                erforderlich?
              </li>
              <li>Gibt es spezifische Anforderungen an Soft Skills?</li>
              <li>Wie gestaltet sich der Auswahlprozess?</li>
              <li>
                Welche Unternehmen haben Interesse an Kandidaten mit meinen
                Qualifikationen?
              </li>
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
        <div className="container mx-auto flex px-5 py-2  flex-col gap-4">
          <p class="text-xl font-roboto font-semibold leading-relaxed">
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
