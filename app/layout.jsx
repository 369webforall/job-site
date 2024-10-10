import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";
import { Inter, Roboto } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export async function generateMetadata() {
  const siteURL = "https://www.ldpersonalvermittlung.com";

  return {
    title: "LD Personalvermittlung - Ihr Partner für Erfolg",
    description:
      "LD-Personalvermittlung GmbH: Ihr Partner für zuverlässige Personalvermittlung und maßgeschneiderte Lösungen. Finden Sie Ihre Arbeitskraft!",

    verification: {
      google: "B4qegFqzbZRAvx9a80H2v_4Z3nn1t6uA6tl5RpKnTuk",
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
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1243065426880650');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1243065426880650&ev=PageView&noscript=1"
            alt="Facebook Meta Pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </Head>
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
