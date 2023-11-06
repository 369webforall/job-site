import React from 'react';
import Link from 'next/link';
const Production = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6">Produktionshelfer:</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Als Produktionshelfer sind Sie in unserer Fertigungsabteilung tätig
            und unterstützen bei verschiedenen Aufgaben im Produktionsprozess.
            Dazu gehören das Zusammenbauen von Teilen, das Bedienen von
            Maschinen, das Überwachen der Produktqualität und die Behebung von
            kleineren Störungen. Sie arbeiten eng mit anderen Teammitgliedern
            zusammen, um einen effizienten Produktionsablauf sicherzustellen.
            Keine speziellen Qualifikationen sind erforderlich, aber
            handwerkliche Fähigkeiten und die Bereitschaft, körperliche Arbeit
            zu leisten, sind von Vorteil.
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

export default Production;
