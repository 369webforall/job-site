import Image from 'next/image';
import HeroSection from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import SectionComponent from '@/components/SectionComponent';
import GoogleAnalytics from '@/app/GoogleAnalytics';
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
      </Head>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SectionComponent />
    </main>
  );
}
