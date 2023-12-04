// components/WarehousePage.js
import React from 'react';
import Link from 'next/link';
const WarehouseHelper = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-6 font-roboto">
        <h1 className="text-3xl  font-semibold mb-6">Lagerhelfer:</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Als Lagerhelfer sind Sie für die Organisation und Verwaltung unseres
            Lagers verantwortlich. Zu Ihren Aufgaben gehören das Entgegennehmen
            und Kommissionieren von Waren, die Überwachung des Lagerbestands,
            das Verpacken von Produkten und das Vorbereiten von Sendungen für
            den Versand. Sie sorgen für Ordnung und Sauberkeit im Lager und
            arbeiten eng mit anderen Lagermitarbeitern zusammen. Erfahrung im
            Lagerbetrieb ist von Vorteil, aber nicht unbedingt erforderlich.
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

export default WarehouseHelper;
