import './globals.css';
import GoogleAnalytics from './GoogleAnalytics';
import { Inter, Roboto } from 'next/font/google';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { GoogleTagManager } from '@next/third-parties/google';

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
      'LD-Personalvermittlung GmbH: Ihr Partner für zuverlässige Personalvermittlung und maßgeschneiderte Lösungen. Finden Sie Ihre Arbeitskraft!',

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="G-1FE30CX6B2" />
      <GoogleAnalytics />
    </html>
  );
}
