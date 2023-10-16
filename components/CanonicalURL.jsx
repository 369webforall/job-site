// 'use client';
// import Head from 'next/head';
// import { useRouter } from 'next/navigation';

// function CanonicalURL() {
//   const siteUrl = 'https://www.ldpersonalvermittlung.com';
//   const router = useRouter();
//   const cleanPath = router.asPath
//     ? router.asPath.split('#')[0].split('?')[0]
//     : '';
//   const canonicalUrl = `${siteUrl}${router.asPath === '/' ? '' : cleanPath}`;

//   return (
//     <Head>
//       <link rel="canonical" href={canonicalUrl} key="canonical" />
//     </Head>
//   );
// }

// export default CanonicalURL;

export async function generateMetadata({ params }) {
  const { slug } = params;
  const siteURL = 'https://www.ldpersonalvermittlung.com';

  return {
    title: `LD Personalvermittlung - Ihr Partner für Erfolg`,
    description: `'LD-Personalvermittlungs GmbH: Zuverlässiger Partner für die Personalvermittlung. Erfahrung in der Direktbeschaffung und maßgeschneiderten Lösungen. Finden Sie jetzt Ihre ideale Arbeitskraft!'`,
    alternates: {
      canonical: `${siteURL}/yourSlug/${slug}`,
    },
  };
}
