import Head from 'next/head';

const Imprint = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Imprint - LD Recruitment Agency</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-4">Imprint</h1>
      <p className="mb-4">LD Recruitment Agency</p>
      <p className="mb-4">Responsible editor</p>
      <p className="mb-2">LD Personalvermittlungs GmbH</p>
      <p className="mb-4">
        Nickelstraße 21,
        <br /> 33378 Rheda Wiedenbrück
      </p>

      <p className="mb-4">
        Telephone: +49 15510 204189 / +49 05242/1821210 (according to the tariff
        for calls to the German mobile network)
      </p>
      <p className="mb-4">Email: kontkt@ld-personalvwerbung.de</p>
      <p className="mb-4">
        Responsible for the website: Lacramioara-Lili Cojocariu
      </p>
      <p className="mb-4">Management: Lacramioara-Lili Cojocariu</p>
      <p className="mb-4">Registration court: Gelsenkirchen District Court</p>
      <p className="mb-4">Registration number: HRB 16147</p>
      <p className="mb-4">
        Sales tax identification number in accordance with Section 27a of the
        Sales Tax Act: DE 346 107 669
      </p>
      <p className="mb-4">Disclaimer</p>
      <p className="mb-4">
        Despite careful control of content, we assume no liability for the
        content of external links. The operators are solely responsible for the
        content of the linked pages.
      </p>
      <p className="mb-4">
        *The imprint is valid for the company profiles of LD Personalvermittlung
        GmbH on the following pages:
      </p>
      <a
        href="https://www.facebook.com/LDPersonalvermittlungGmbH"
        rel="noopener noreferrer"
        className="mb-4 bg-orange-500 text-white px-4 py-2 rounded-full mt-8 inline-block"
        alt="facebook"
      >
        facebook.com
      </a>
    </div>
  );
};

export default Imprint;
