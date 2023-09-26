import Image from 'next/image';
import HeroSection from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import SectionComponent from '@/components/SectionComponent';
import GoogleAnalytics from '@/components/GoogleAnalytics';
export default function Home() {
  return (
    <main className="min-h-screen">
      <GoogleAnalytics />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SectionComponent />
    </main>
  );
}
