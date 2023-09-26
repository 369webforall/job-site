import Image from 'next/image';
import HeroSection from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import SectionComponent from '@/components/SectionComponent';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Head from 'next/head';
export default function Home() {
  return (
    <main className="min-h-screen">
      <GoogleAnalytics />
      <Head>
        <link
          rel="canonical"
          href="https://www.ldpersonalvermittlung.com/"
          key="canonical"
        />
        <meta
          name="google-site-verification"
          content="B4qegFqzbZRAvx9a80H2v_4Z3nn1t6uA6tl5RpKnTuk"
        />
      </Head>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SectionComponent />
    </main>
  );
}
