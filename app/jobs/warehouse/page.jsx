// components/WarehousePage.js
import React from 'react';
import Link from 'next/link';
const WarehouseHelper = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-6 font-roboto">
        <h1 className="text-3xl  font-semibold mb-6">
          Lagermitarbeiter (m/w/d)
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Lagermitarbeiter (Pick by Voice) auf verschiedenen Standorten je
            nach Bedarf des Kunden. Hier gilt zu beachten, dass die Arbeiter die
            Zahlen in Deutsch kennen und geimpft sein müssen. Stundenlohn
            zwischen € 9,60 und € 11,72. Unterkunft zwischen € 210-230 pro
            Person/Monat.
          </p>

          <h2 className="text-xl font-semibold mb-2">Standorte:</h2>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Wünnenberg</li>
            <li>Kerpen</li>
            <li>Bottrop</li>
            <li>Hamm</li>
            <li>Rosbach</li>
            <li>Ganderkesee</li>
            <li>Eching</li>
            <li>Trostberg</li>
            <li>Langenbach</li>
          </ul>
        </div>
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
  );
};

export default WarehouseHelper;
