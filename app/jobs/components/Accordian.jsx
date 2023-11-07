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
                Ein B Führerschein ist erforderlich, um für diese Position in
                Betracht gezogen zu werden.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>LKW Fahrer:</AccordionTrigger>
              <AccordionContent>
                Ein entsprechender Führerschein für schwere Lastwagen (z. B. C
                oder CE) ist erforderlich.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Produktionshelfer:</AccordionTrigger>
              <AccordionContent>
                Keine speziellen Qualifikationen sind erforderlich, aber
                handwerkliche Fähigkeiten und die Bereitschaft, körperliche
                Arbeit zu leisten, sind von Vorteil.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Lagerhelfer:</AccordionTrigger>
              <AccordionContent>
                Erfahrung im Lagerbetrieb ist von Vorteil, aber nicht unbedingt
                erforderlich.
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
