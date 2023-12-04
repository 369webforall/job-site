// components/SalesPage.js
import React from 'react';
import Link from 'next/link';
const TruckDriver = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6">LKW Fahrer:</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Als LKW-Fahrer spielen Sie eine Schlüsselrolle in unserem
            Logistikteam. Sie sind dafür verantwortlich, schwere Lastwagen
            sicher zu führen und Frachtgüter zu transportieren. Dies umfasst das
            Be- und Entladen von Waren, das Überprüfen der Ladungssicherung und
            das Einhalten der gesetzlichen Vorschriften für den Straßenverkehr.
            Zu Ihren Aufgaben gehört auch die Wartung und Pflege des LKW. Ein
            entsprechender Führerschein für schwere Lastwagen (z. B. C oder CE)
            ist erforderlich.
          </p>

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

export default TruckDriver;
