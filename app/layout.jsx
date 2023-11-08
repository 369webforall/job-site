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

export async function generateMetadata() {
  const siteURL = 'https://www.ldpersonalvermittlung.com';

  return {
    title: 'LD Personalvermittlung - Ihr Partner für Erfolg',
    description:
      'LD-Personalvermittlungs GmbH: Zuverlässiger Partner für die Personalvermittlung. Erfahrung in der Direktbeschaffung und maßgeschneiderten Lösungen. Finden Sie jetzt Ihre ideale Arbeitskraft!',
    keywords: [
      'Produktionsmitarbeiter',
      'Produktionshelfer',
      'Direktvermittlung',
      'Neue Mitarbeiter finden',
      'Pflegepersonal vermitteln',
      'Küchenhilfe Vermittlung',
      'Reinigungskräfte vermitteln',
      'Servicekräfte suchen',
      'Bauarbeiter Vermittlung',
      'Elektriker vermitteln',
      'Mechaniker einstellen',
      'LKW-Fahrer Vermittlung',
      'Paketzusteller finden',
      'Fahrdienst Personal',
      'Lagerhelfer vermitteln',
      'Kommissionierer einstellen',
      'Erntehelfer vermitteln',
      'Landwirtschaftliche Mitarbeiter suchen',
      'Personalvermittlung',
      'Stellenvermittlung',
    ],
    verification: {
      google: 'B4qegFqzbZRAvx9a80H2v_4Z3nn1t6uA6tl5RpKnTuk',
    },
    alternates: {
      canonical: `${siteURL}`,
    },
  };
}
export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} ${roboto.variable}`}>
      <Head>
        <GoogleTagManager />
      </Head>
      <body>
        <iframe
          src="https://www.googletagmanager.com/gtag/js?id=G-1FE30CX6B2"
          height="0"
          width="0"
          title="Google Tag Manager"
        ></iframe>
        <GoogleAnalytics />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
