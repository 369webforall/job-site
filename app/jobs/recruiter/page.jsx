import React from "react";
import Link from "next/link";

const RecruiterHomeOffice = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-6 font-roboto">
        <h1 className="text-3xl font-semibold mb-6">
          Stellenanzeige: Recruiter (m/w/d)- Europaweit im Homeoffice
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg my-2 font-semibold">Über uns:</h2>
          <p className="mb-4">
            Wir sind ein dynamisches und wachsendes Unternehmen in der Personalvermittlung, das sich auf die Vermittlung von Fachkräften spezialisiert hat. Unser Ziel ist es, Unternehmen mit qualifizierten Talenten zu verbinden und gleichzeitig unseren Kandidaten spannende berufliche Möglichkeiten zu bieten. Zur Verstärkung unseres Teams suchen wir ab sofort einen engagierten Recruiter (m/w/d).
          </p>
          
          <h2 className="text-lg my-2 font-semibold">Deine Aufgaben:</h2>
          <ul className="space-y-2 ml-2">
            <li>Aktive Suche und Ansprache von qualifizierten Kandidaten über verschiedene Kanäle (z.B. Online-Jobbörsen, soziale Netzwerke, Direktansprache)</li>
            <li>Durchführung von Bewerberinterviews und Vorauswahl geeigneter Kandidaten</li>
            <li>Betreuung und Beratung von Kandidaten während des gesamten Bewerbungsprozesses</li>
            <li>Aufbau und Pflege eines Netzwerks aus Kandidaten und Kunden</li>
            <li>Erstellung und Schaltung von Stellenanzeigen</li>
            <li>Zusammenarbeit mit unseren Kunden, um deren Bedürfnisse und Anforderungen zu verstehen und passende Lösungen zu entwickeln</li>
            <li>Teilnahme an Recruiting-Events</li>
          </ul>
          
          <h2 className="text-lg my-2 font-semibold">Dein Profil:</h2>
          <ul className="space-y-2 ml-2">
            <li>Keine spezifische Ausbildung notwendig; Berufserfahrung im Recruiting oder in der Personalberatung von Vorteil</li>
            <li>Ausgeprägte Kommunikationsfähigkeiten und ein sicheres Auftreten</li>
            <li>Hohe Eigenmotivation und eine selbstständige Arbeitsweise</li>
            <li>Fähigkeit, Prioritäten zu setzen und unter Druck zu arbeiten</li>
            <li>Gute Kenntnisse im Umgang mit MS Office</li>
            <li>Fließende Englisch- oder Deutschkenntnisse von Vorteil aber nicht zwingend. Hauptsache du bist in der EU ansässig</li>
          </ul>
          
          <h2 className="text-lg my-2 font-semibold">Wir bieten:</h2>
          <ul className="space-y-2 ml-2">
            <li>Eine abwechslungsreiche und verantwortungsvolle Tätigkeit in einem motivierten Team</li>
            <li>Flexible Arbeitszeiten und die Möglichkeit zum Home-Office</li>
            <li>Eine leistungsbezogene Vergütung auf Provisionsbasis</li>
            <li>Eine sehr gute Vergütung und attraktive Boni</li>
            <li>Eine offene und kollegiale Unternehmenskultur</li>
          </ul>
          
          <div className="my-8 flex items-center">
            <Link
              href="/jobs/apply"
              className="rounded bg-orange-500 px-12 py-3 text-lg font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Direkt bewerben
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterHomeOffice;

