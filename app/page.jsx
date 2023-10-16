import Image from 'next/image';
import HeroSection from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import SectionComponent from '@/components/SectionComponent';
import GoogleAnalytics from '@/app/GoogleAnalytics';
import Head from 'next/head';
import CanonicalURL from '@/components/CanonicalURL';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Head>
        <CanonicalURL />
      </Head>
      <GoogleAnalytics />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SectionComponent />
    </main>
  );
}
