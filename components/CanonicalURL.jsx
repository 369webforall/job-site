'use client';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

function CanonicalURL() {
  const siteUrl = 'https://www.ldpersonalvermittlung.com';
  const router = useRouter();
  const cleanPath = router.asPath
    ? router.asPath.split('#')[0].split('?')[0]
    : '';
  const canonicalUrl = `${siteUrl}${router.asPath === '/' ? '' : cleanPath}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}

export default CanonicalURL;
