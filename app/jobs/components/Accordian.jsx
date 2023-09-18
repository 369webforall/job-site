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
    <div className="container mx-auto my-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-1 col-span-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Zusteller helfer</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>LKW Fahrer</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Produktionshelfer</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Lagerhelfer</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-start-5 col-span-8 px-4">
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