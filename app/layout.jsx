import './globals.css';
import GoogleAnalytics from './GoogleAnalytics';
import { Inter, Roboto } from 'next/font/google';
import GoogleTagManager from './GoogleTagManager';
import Head from 'next/head';
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
  verification: {
    google: 'B4qegFqzbZRAvx9a80H2v_4Z3nn1t6uA6tl5RpKnTuk',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} ${roboto.variable}`}>
      <Head>
        <GoogleTagManager />
        <link
          rel="canonical"
          href="https://www.ldpersonalvermittlung.com/jobs/deliveryhelper"
          key="canonical"
        />
        <link
          rel="canonical"
          href="https://www.ldpersonalvermittlung.com/jobs/truckdriver"
          key="canonical"
        />

        <link
          rel="canonical"
          href="https://www.ldpersonalvermittlung.com/jobs/production"
          key="canonical"
        />
        <link
          rel="canonical"
          href="https://www.ldpersonalvermittlung.com/jobs/warehouse"
          key="canonical"
        />
        <link
          rel="canonical"
          href="https://www.ldpersonalvermittlung.com/jobs"
          key="canonical"
        />
        <link
          rel="canonical"
          href="https://www.ldpersonalvermittlung.com/blogs"
          key="canonical"
        />
      </Head>
      <body>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K2JKKDSP"
          height="0"
          width="0"
        ></iframe>
        <GoogleAnalytics />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
