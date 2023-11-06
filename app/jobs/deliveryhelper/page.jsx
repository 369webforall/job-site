// components/SalesPage.js
import React from 'react';
import Link from 'next/link';
const DeliveryHelper = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6">
          Fahrer/Zusteller mit B Führerschein:
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Die LD-Personalvermittlung braucht dringend Unterstützung!
          </p>

          <p className="mb-4">
            Als Fahrer/Zusteller mit einem B Führerschein sind Sie ein wichtiger
            Teil unseres Liefer- und Zustellteams. Ihre Hauptaufgabe besteht
            darin, Waren und Produkte sicher und termingerecht an unsere Kunden
            auszuliefern. Sie sind verantwortlich für die richtige Verladung der
            Lieferungen, die Einhaltung der Verkehrsregeln und die
            Gewährleistung der Kundenzufriedenheit. Darüber hinaus kann die
            Pflege und Wartung des Zustellfahrzeugs zu Ihren Aufgaben gehören.
            Ein B Führerschein ist erforderlich, um für diese Position in
            Betracht gezogen zu werden.
          </p>
          <h2 className="text-xl font-semibold mb-2">Wichtig ist uns:</h2>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Abgeschlossene kaufmännische Ausbildung</li>
            <li>
              Erfahrung im Vertrieb und Kundenbetreuung, vor allem in der
              Akquise
            </li>
            <li>Sorgfältige, verlässliche Arbeitsweise</li>
            <li>Starke und kommunikative Persönlichkeit</li>
          </ul>

          <p className="mb-4">Nice to have:</p>

          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Fremdsprachen (Rumänisch, Englisch, usw.)</li>
          </ul>

          <p className="mb-4">Das bekommst du dafür:</p>

          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Einen sicheren, abwechslungsreichen Arbeitsplatz</li>
            <li>Ansprechendes Vergütungspaket (Fix + Provision)</li>
            <li>Kommunikation auf Augenhöhe, DUZ Kultur</li>
            <li>
              Freie Zeiteinteilung auf Vertrauensbasis, wichtig ist uns, dass
              die Ergebnisse stimmen
            </li>
          </ul>

          <p className="mb-4">
            Wenn du dich angesprochen fühlst und unser Stern am Vertriebshimmel
            sein willst, dann melde dich bitte mit Lebenslauf und kurzem
            Motivationsschreiben per E-Mail an:{' '}
            <a
              href="mailto:bewerbung@ld-personalvermittlung.de"
              className="hover:border-b border-orange-500 transition-colors"
            >
              bewerbung@ld-personalvermittlung.de
            </a>
          </p>

          <p className="mb-4">oder</p>

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

export default DeliveryHelper;
