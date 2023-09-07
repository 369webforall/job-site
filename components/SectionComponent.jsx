import React from 'react';

const SectionComponent = () => {
  return (
    <section className="p-8 sm:py-32">
      <div className="container mx-auto font-roboto flex flex-col gap-4 text-black">
        <h2 className="text-lg md:xl mb-6 text-center">
          Neue berufliche Perspektiven mit LD-Personalvermittlung
        </h2>
        <p className="text-2xl md:text-3xl uppercase font-roboto font-thin text-center mb-6">
          Viele Chancen und Möglichkeiten
        </p>
        <p className="text-lg max-w-5xl mx-auto  text-justify">
          Arbeit ist ein wichtiger Bestandteil unseres Lebens. Deshalb legen wir
          unseren Fokus auf sinnvolle und nachhaltige Beschäftigung sowie auf
          Chancen für alle. Wir glauben an Innovationskraft und
          Veränderungsbereitschaft und unseren Plan: Arbeiten, um die Welt zu
          verändern. Wir schauen auf die Arbeitskräfte, unsere Bewerber und
          Mitarbeiter. Auf der anderen Seite haben wir die Bedürfnisse und
          Herausforderungen unserer Kunden im Blick. Unsere Vision ist es,
          führend in der Entwicklung und Bereitstellung innovativer Lösungen und
          Dienstleistungen für Arbeitskräfte zu sein, die es unseren Kunden
          ermöglichen, in der sich verändernden Arbeitswelt erfolgreich zu sein.
        </p>
      </div>
    </section>
  );
};

export default SectionComponent;
