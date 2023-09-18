import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
const Faq = () => {
  return (
    <div className="container mx-auto my-6">
      <div className="grid grid-cols-12 gap-4 py-10">
        <div className="col-start-3 col-span-10">
          <h1 className="bg-orange-400 text-white text-4xl font-roboto p-2 rounded-sm mb-4">
            FAQ
          </h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                Was ist der Unterschied zwischen Personalvermittlung und
                Zeitarbeit?
              </AccordionTrigger>
              <AccordionContent>
                Bei der Personalvermittlung wird ein Kandidat an ein Unternehmen
                vermittelt und nach einem erfolgreichen Bewerbungsprozess von
                diesem eingestellt. Bei der Zeitarbeit sind die Kandidaten bei
                LD Personalvermittlung fest angestellt und werden für eine
                bestimmte Zeit an andere Unternehmen verliehen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Was macht eine Personalvermittlung?
              </AccordionTrigger>
              <AccordionContent>
                Eine Personalvermittlung rekrutiert im Auftrag von Arbeitgebern
                neue Mitarbeitende, um ihre offenen Stellen zu besetzen. Sie
                übernimmt die Suche und schlägt dem Unternehmen passende
                Kandidat:innen vor. Bei Abschluss eines Arbeitsvertrags erhält
                die Personalvermittlung eine Vermittlungsprovision.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                Wie viel kostet eine Personalvermittlung?
              </AccordionTrigger>
              <AccordionContent>
                Die Kosten für eine Personalvermittlung variieren teilweise sehr
                stark. Oft wird eine Provision vereinbart, die sich am
                Bruttojahresgehalt der zu besetzenden Stelle orientiert. 20-30
                Prozent entsprechen etwa dem Durchschnitt, hochspezialisierte
                Headhunter bewegen sich auch gerne mal noch darüber.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                Was ist der Unterschied zwischen Personalberatung und
                Personalvermittlung?
              </AccordionTrigger>
              <AccordionContent>
                <b>PERSONALVERMITTLUNG:</b> DER UNTERSCHIED: Hier ist schon der
                Unterschied offengelegt: Wo eine Personalvermittlung reiner
                Dienstleister ist, steht die Personalberatung ihren Kunden
                beratend zur Seite, beantwortet Fragen im Bereich HR und kann
                anschließend die Lösungen aktiv umsetzen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg">
                Warum Personalvermittler?
              </AccordionTrigger>
              <AccordionContent>
                Ein Personalvermittler hat wesentlich bessere Möglichkeiten,
                passende Mitarbeiter zu finden, als die Firma selbst. Durch den
                Zugriff auf einen bestehenden Bewerberpool, besondere
                Erfahrungen im Recruiting und weitreichende Kontakte machen sich
                Personalvermittler nahezu unverzichtbar. Den perfekten
                Kandidaten finden
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;