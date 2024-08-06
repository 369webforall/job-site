import React from "react";
import Link from "next/link";
const Lagermitarbeiter = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-6 font-roboto">
        <h1 className="text-3xl  font-semibold mb-6">
          Stellenanzeige: Lagermitarbeiter/Staplerfahrer/Kommissionierer
          (m/w/d)- Deutschlandweit
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg my-2 font-semibold">Über uns:</h2>
          <p className="mb-4">
            Wir die LD Personalvermittlungs GmbH, sind ein führender
            Personalvermittler, spezialisiert auf die Vermittlung von
            qualifizierten Arbeitskräften in verschiedenen Branchen. Zur
            Verstärkung unserer Kunden in Deutschland suchen wir deutschlandweit
            engagierte Lagermitarbeiter, Staplerfahrer und Kommissionierer
            (m/w/d), besonders für die Städte Stavenhagen, Barleben, Rosbach,
            Raunheim und Wustermark.
          </p>

          <h2 className="text-lg my-2 font-semibold">Deine Aufgaben:</h2>
          <ul className="space-y-2 ml-2">
            <li>Kommissionieren und Verpacken von Waren</li>
            <li>
              Bedienen von Gabelstaplern (bei entsprechender Qualifikation)
            </li>
            <li>Ein- und Auslagern von Waren</li>
            <li>Durchführung von Bestandskontrollen</li>
            <li>Allgemeine Lagertätigkeiten</li>
          </ul>
          <h2 className="text-lg my-2 font-semibold">Dein Profil:</h2>
          <ul className="space-y-2 ml-2">
            <li>Keine spezifischen Sprachkenntnisse erforderlich</li>
            <li>Fähigkeit, Zahlenreihen bis 100 zu zählen</li>
            <li>
              Bereitschaft zur Arbeit im 2- oder 3-Schicht-System (je nach
              Vorlieben)
            </li>
            <li>Zuverlässigkeit und Teamfähigkeit</li>
            <li>
              Gültiger Staplerschein von Vorteil (für Staplerfahrer-Position)
            </li>
          </ul>

          <h2 className="text-lg my-2 font-semibold">Wir bieten:</h2>
          <ul className="space-y-2 ml-2">
            <li>
              Stundenlohn von 12,50€-16,00€ € brutto plus viele weitere Zulagen
            </li>
            <li>
              Arbeitsmöglichkeiten deutschlandweit, insbesondere in Stavenhagen,
              Barleben, Rosbach, Raunheim und Wustermark
            </li>
            <li>Möglichkeit, eine Unterkunft über uns zu erhalten</li>
            <li>
              Organisierter Transport von der Unterkunft zur Arbeitsstätte
            </li>
            <li>Flexible Schichtsysteme (2- oder 3-Schicht-System)</li>
            <li>Attraktive Vergütung</li>
            <li>Nach kurzer Probezeit unbefristeter Arbeitsvertrag</li>
            <li>Ein dynamisches und unterstützendes Arbeitsumfeld</li>
            <li>Arbeitnehmer aus ganz Europa sind herzlich willkommen</li>
          </ul>
          <div className="my-8 flex items-center">
            <Link
              href="/jobs/apply"
              className="  rounded bg-orange-500 px-12 py-3 text-lg font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto "
            >
              Direkt bewerben
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lagermitarbeiter;
