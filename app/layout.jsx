import './globals.css';
import { Inter, Roboto } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'LD Personalvermittlung - Ihr Partner für Erfolg',
  description:
    'LD-Personalvermittlungs GmbH: Ihr vertrauenswürdiger Partner für die Personalsuche. Wir verfügen über langjährige Erfahrung in der Direktvermittlung und bieten prompte und kostengünstige Personallösungen, die auf Ihre Bedürfnisse zugeschnitten sind. Entdecken Sie unsere umfangreiche Auswahl an qualifiziertem Personal, von Pflegekräften bis zu Elektrikern, Bauarbeitern bis zu Zustellfahrern. Finden Sie noch heute Ihre ideale Arbeitskraft!',
  keywords: [
    'Personalvermittlung',
    'Direktvermittlung',
    'Neue Mitarbeiter finden',
    'Pflegepersonal vermitteln',
    'Küchenhilfe Vermittlung',
    'Reinigungskräfte vermitteln',
    'Servicekräfte suchen',
    'Bauarbeiter Vermittlung',
    'Elektriker vermitteln',
    'Installateur suchen',
    'Mechaniker einstellen',
    'LKW-Fahrer Vermittlung',
    'Paketzusteller finden',
    'Fahrdienst Personal',
    'Lagerhelfer vermitteln ',
    'Kommissionierer einstellen',
    'Produktionsmitarbeiter suchen',
    'Erntehelfer vermitteln',
    'Landwirtschaftliche Mitarbeiter suchen',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
