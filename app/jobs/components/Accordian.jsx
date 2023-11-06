import React from 'react';
import { jobData } from '@/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import CardPage from './Card';
const Accordian = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="text-center mb-32">
        <h2 className="sm:text-3xl text-2xl font-sans text-gray-900 mb-4">
          Aktuellen Stellenangebote
        </h2>

        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
        </div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-12 gap-4">
        <div className="md:col-start-1 md:col-span-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Fahrer/Zusteller mit B Führerschein:
              </AccordionTrigger>
              <AccordionContent>
                Als Fahrer/Zusteller mit einem B Führerschein sind Sie ein
                wichtiger Teil unseres Liefer- und Zustellteams. Ihre
                Hauptaufgabe besteht darin, Waren und Produkte sicher und
                termingerecht an unsere Kunden auszuliefern. Sie sind
                verantwortlich für die richtige Verladung der Lieferungen, die
                Einhaltung der Verkehrsregeln und die Gewährleistung der
                Kundenzufriedenheit. Darüber hinaus kann die Pflege und Wartung
                des Zustellfahrzeugs zu Ihren Aufgaben gehören. Ein B
                Führerschein ist erforderlich, um für diese Position in Betracht
                gezogen zu werden.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>LKW Fahrer:</AccordionTrigger>
              <AccordionContent>
                Als LKW-Fahrer spielen Sie eine Schlüsselrolle in unserem
                Logistikteam. Sie sind dafür verantwortlich, schwere Lastwagen
                sicher zu führen und Frachtgüter zu transportieren. Dies umfasst
                das Be- und Entladen von Waren, das Überprüfen der
                Ladungssicherung und das Einhalten der gesetzlichen Vorschriften
                für den Straßenverkehr. Zu Ihren Aufgaben gehört auch die
                Wartung und Pflege des LKW. Ein entsprechender Führerschein für
                schwere Lastwagen (z. B. C oder CE) ist erforderlich.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Produktionshelfer:</AccordionTrigger>
              <AccordionContent>
                Als Produktionshelfer sind Sie in unserer Fertigungsabteilung
                tätig und unterstützen bei verschiedenen Aufgaben im
                Produktionsprozess. Dazu gehören das Zusammenbauen von Teilen,
                das Bedienen von Maschinen, das Überwachen der Produktqualität
                und die Behebung von kleineren Störungen. Sie arbeiten eng mit
                anderen Teammitgliedern zusammen, um einen effizienten
                Produktionsablauf sicherzustellen. Keine speziellen
                Qualifikationen sind erforderlich, aber handwerkliche
                Fähigkeiten und die Bereitschaft, körperliche Arbeit zu leisten,
                sind von Vorteil.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Lagerhelfer:</AccordionTrigger>
              <AccordionContent>
                Als Lagerhelfer sind Sie für die Organisation und Verwaltung
                unseres Lagers verantwortlich. Zu Ihren Aufgaben gehören das
                Entgegennehmen und Kommissionieren von Waren, die Überwachung
                des Lagerbestands, das Verpacken von Produkten und das
                Vorbereiten von Sendungen für den Versand. Sie sorgen für
                Ordnung und Sauberkeit im Lager und arbeiten eng mit anderen
                Lagermitarbeitern zusammen. Erfahrung im Lagerbetrieb ist von
                Vorteil, aber nicht unbedingt erforderlich.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="md:col-start-6 md:col-span-8">
          <div className="grid grid-col-1 md:grid-cols-2 gap-10 items-start justify-end">
            {jobData.map((job) => (
              <CardPage job={job} key={job.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
