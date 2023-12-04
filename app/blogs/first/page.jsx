import Link from 'next/link';

import Image from 'next/image';
import career1 from '../../../public/career1.jpg';
import interview from '../../../public/interview.jpg';

import interview2 from '../../../public/interview2.jpg';
import interview3 from '../../../public/interview3.jpg';

export async function generateMetadata() {
  const siteURL = 'https://www.ldpersonalvermittlung.com';

  return {
    title: ' Meistern Sie Ihr Recruiting - LD Personalvermittlung Blog',
    description:
      'Meistern Sie Ihr Recruiting Blog für informative Artikel rund um Karriere, Personalmanagement und berufliche Entwicklung. Erfahren Sie wertvolle Tipps.',
    alternates: {
      canonical: `${siteURL}/blogs/first`,
    },
  };
}
const Blogs = () => {
  return (
    <>
      <section className="text-gray-600 font-roboto my-6 md:my-16 md:px-6 px-3">
        <div className="mx-auto flex px-1 pb-5 md:flex-row flex-col items-center">
          <div className="relative lg:max-w-2xl  md:w-1/2 mb-10 md:mb-0 ">
            <Image
              className="object-cover object-center rounded"
              alt="meeting"
              src={career1}
              placeholder="blur"
              loading="eager"
              width={1200}
              height={1000}
              sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              title="Was macht eine Personalvermittlung"
            />
          </div>
          <div className="lg:flex-grow  md:pl-16 flex items-center text-center ">
            <h1 className="text-2xl md:text-6xl  mb-4 font-sans font-thin text-gray-900">
              Meistern Sie Ihr Recruiting
              <br className="hidden lg:inline-block" />
              Meisterstück im Jahr 2024!
            </h1>
          </div>
        </div>
        <div className="relative my-10 w-fill h-60">
          <Image
            className="object-cover object-center rounded"
            alt="interview"
            fill
            src={interview}
            placeholder="blur"
            loading="eager"
            title="Unterschied zwischen Personalberatung und Personalvermittlung"
          />
        </div>
      </section>
      <section className="text-gray-600 font-roboto my-6 md:my-16 md:px-6 px-3">
        <div className="flex flex-col space-y-6">
          <div>
            <h2 className="md:text-3xl text-2xl text-center mb-10 mt-4 font-sans text-gray-900 p-1">
              Optimierung der Effizienz im Recruiting: Ansätze für nachhaltigen
              Erfolg
            </h2>
            <p className="leading-relaxed text-lg font-roboto p-1 mb-3">
              In der heutigen Geschäftswelt ist Recruiting mehr als nur ein
              standardisierter Prozess - es ist der Schlüssel, der über den
              Erfolg oder Misserfolg Ihres Unternehmens entscheiden kann. Viele
              Unternehmen sehen sich jedoch mit Herausforderungen konfrontiert,
              die ihre Rekrutierungsbemühungen bremsen:
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-between items-center ">
            <div className="md:w-[40%]">
              <Image
                className="object-cover object-center rounded"
                alt="interview two"
                src={interview2}
                placeholder="blur"
                loading="eager"
                sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                title="Unterschied zwischen Personalberatung und Personalvermittlung"
              />
            </div>
            <div className="md:w-[60%] md:pl-20">
              <h3 className="text-lg md:text-2xl">Zeitdruck:</h3>
              <p className="leading-relaxed text-lg text-justify font-roboto max-w-3xl p-1 mb-3">
                Die Vakanzzeiten nehmen zu, während der Wettbewerb um
                Top-Talente intensiver wird.
              </p>
              <h3 className="text-lg md:text-2xl">Zeitdruck:</h3>
              <p className="leading-relaxed text-lg text-justify font-roboto max-w-3xl p-1 mb-3">
                Die Vakanzzeiten nehmen zu, während der Wettbewerb um
                Top-Talente intensiver wird.
              </p>
              <h3 className="text-lg md:text-2xl">Qualität:</h3>
              <p className="leading-relaxed text-lg text-justify font-roboto max-w-3xl p-1 mb-3">
                Die Suche nach den richtigen Kandidaten, die nicht nur über die
                erforderlichen Fähigkeiten verfügen, sondern auch zur
                Unternehmenskultur passen, bleibt eine kontinuierliche
                Herausforderung.
              </p>
              <h3 className="text-lg md:text-2xl">Effizienz:</h3>
              <p className="leading-relaxed text-lg text-justify font-roboto max-w-3xl p-1 mb-3">
                Veraltete Prozesse und Technologien verlangsamen den
                Einstellungsprozess und setzen das Budget unter Druck. Diese
                Hindernisse können frustrierend sein und die Fähigkeit
                beeinträchtigen, erstklassige Talente für Ihr Team zu gewinnen.
                Doch es gibt eine Lösung.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 font-roboto my-6 md:my-16 md:px-6 px-3">
        <div className="flex flex-col space-y-6">
          <h2 className="md:text-3xl text-2xl text-center mb-10 mt-4 font-sans text-gray-900">
            Mit{' '}
            <Link href="/" className="border-b border-orange-600">
              Ldpersonalvermittlung.com
            </Link>{' '}
            können Sie:
          </h2>
          <div className="flex flex-col md:flex-row space-x-6 justify-center items-center">
            <div className="md:w-[60%]">
              <h3 className="text-lg md:text-2xl mb-4">
                1. Einstellungsprozesse optimieren:
              </h3>
              <p className="leading-relaxed text-lg text-justify font-roboto max-w-3xl p-1 mb-3">
                Wir minimieren die Time-to-Hire und maximieren die Effizienz
                Ihrer Einstellungsprozesse. Zeitdruck wird damit zur
                Vergangenheit.
              </p>
              <h3 className="text-lg md:text-2xl mb-4">
                2. Die perfekten Talente finden:
              </h3>
              <p className="leading-relaxed text-lg text-justify font-roboto max-w-3xl p-1 mb-3">
                Mit innovativen Strategien erreichen wir qualifizierte
                Kandidaten, die nicht nur die benötigten Fähigkeiten besitzen,
                sondern auch nahtlos in Ihre Unternehmenskultur passen.
              </p>
              <h3 className="text-lg md:text-2xl mb-4">
                3. Ihr Budget im Griff behalten:
              </h3>
              <p className="leading-relaxed text-lg text-justify font-roboto max-w-3xl p-1 mb-3">
                Unsere maßgeschneiderten Lösungen respektieren Ihre finanziellen
                Grenzen und ermöglichen es Ihnen, Ihre Rekrutierungsziele ohne
                übermäßigen Budgetaufwand zu erreichen.
              </p>
              <h3 className="text-lg md:text-2xl mb-4">
                4. Eine zukunftsweisende Recruiting-Strategie entwickeln:
              </h3>
            </div>
            <div className="md:w-[40%]">
              <Image
                className="object-cover object-center rounded"
                alt="interview"
                src={interview3}
                placeholder="blur"
                loading="eager"
                sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                title="Unterschied zwischen Personalberatung und Personalvermittlung"
              />
            </div>
          </div>
          <p className="leading-relaxed text-lg text-justify font-roboto  p-1 mb-3">
            Wir gestalten Ihre Prozesse so, dass sie nicht nur den aktuellen,
            sondern auch den zukünftigen Anforderungen gerecht werden. Mit{' '}
            <Link href="/" className="border-b border-orange-600">
              Ldpersonalvermittlung.com
            </Link>{' '}
            sind Sie gerüstet für die Herausforderungen von morgen. Beginnen Sie
            noch heute Ihren Weg zum maximalen Recruiting-Erfolg mit{' '}
            <Link href="/" className="border-b border-orange-600">
              Ldpersonalvermittlung.com
            </Link>{' '}
            - Ihre Lösung für eine effiziente und erfolgreiche
            Personalbeschaffung.
          </p>
        </div>
      </section>
    </>
  );
};

export default Blogs;
