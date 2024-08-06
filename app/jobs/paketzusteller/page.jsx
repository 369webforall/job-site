import React from "react";
import Link from "next/link";

const PaketzustellerMunich = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-6 font-roboto">
        <h1 className="text-3xl font-semibold mb-6">
          Stellenanzeige: Paketzusteller (m/w/d) bei dem größten Logistikdienstleister Deutschlands in München
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg my-2 font-semibold">Über uns:</h2>
          <p className="mb-4">
            Unser Partner ist weltweit führend im Logistikbereich und bekannt für seine zuverlässigen und schnellen Lieferdienste. Für unser Team in München suchen wir engagierte Paketzusteller (m/w/d) zur Direkteinstellung.
          </p>
          
          <h2 className="text-lg my-2 font-semibold">Deine Aufgaben:</h2>
          <ul className="space-y-2 ml-2">
            <li>Zustellung und Abholung von Paketen (Gewicht zwischen 0,1 kg und 33 kg)</li>
            <li>Sicheres und freundliches Auftreten gegenüber Kunden</li>
            <li>Sorgfältiger Umgang mit den anvertrauten Sendungen</li>
            <li>Nutzung moderner Scantechnologien zur Dokumentation der Zustellung</li>
          </ul>
          
          <h2 className="text-lg my-2 font-semibold">Dein Profil:</h2>
          <ul className="space-y-2 ml-2">
            <li>Grundkenntnisse in Deutsch oder gute Kenntnisse in Englisch</li>
            <li>Berufserfahrung als Paketzusteller von Vorteil, aber nicht zwingend erforderlich</li>
            <li>Gültiger Führerschein der Klasse B</li>
            <li>Bereitschaft, körperlich zu arbeiten</li>
            <li>Zuverlässigkeit und Pünktlichkeit</li>
            <li>Freundlicher und professioneller Umgang mit Kunden</li>
            <li>Bereitschaft zu Arbeitsbeginn zwischen 7:30 und 8:30 Uhr, Arbeitsende zwischen 16:30 und 17:30 Uhr</li>
          </ul>
          
          <h2 className="text-lg my-2 font-semibold">Wir bieten:</h2>
          <ul className="space-y-2 ml-2">
            <li>Stundenlohn von 17 € brutto plus viele weitere Zulagen</li>
            <li>Direkteinstellung bei dem größten Logistikdienstleister Deutschlands</li>
            <li>Probezeit von 6 Monaten, danach unbefristeter Vertrag</li>
            <li>Vermittlung von Unterkünften, ausländische Fahrer aus ganz Europa sind herzlich willkommen</li>
            <li>Unterstützung durch ein eingespieltes Team - du bist nie allein</li>
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

export default PaketzustellerMunich;
