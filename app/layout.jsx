import './globals.css';
import { Inter, Roboto } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
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
    'LD-Personalvermittlungs GmbH: Zuverlässiger Partner für die Personalvermittlung. Erfahrung in der Direktbeschaffung und maßgeschneiderten Lösungen. Finden Sie jetzt Ihre ideale Arbeitskraft!',
  keywords: [
    'personalvermittlung provision probezeit',
    'personalvermittlungsvertrag',
    'personalvermittlungsvertrag mit arbeitgeber muster',
    'personalvermittlung kosten arbeitgeber',
    'Personalvermittlung',
    'stellenvermittlung',
    'personalvermittlung vorteile nachteile',
    'job über personalvermittlung erfahrung',
    'bewerbung über personalvermittlung oder direct',
    'personalvermittlung provision umgehen',
    'vermittlungsprovision zeitarbeit',
    'personalvermittlung provision probezeit',
    'vermittlungsprovision personalvermittlung buchen',
    'job über personalvermittlung erfahrung',
    'job suchen',
    'produktionsmitarbeiter',
    'produktionshelfer',
    'produktionshelfer gehalt',
    'produktionshelfer stellenangebote',
    'produktionshelfer tätigkeit',
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
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="google-site-verification"
          content="XyaDqdZhB9E4ROQlin1d9i3OZijzkB0M6zTT2mOgoxk"
        />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
