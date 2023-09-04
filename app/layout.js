import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'LD-Personalvermittlungs | Job Portal',
  description:
    'LD-Personalvermittlungs GmbH, have many years of experience in the field of direct placement and are happy to support you in the search for your new employees',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-rows-layout h-screen w-full">
          <Header />
          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
