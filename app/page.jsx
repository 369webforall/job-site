import HeroSection from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import GoogleAnalytics from '@/app/GoogleAnalytics';
import JobDetails from '@/components/JobDetails';

export default function Home() {
  return (
    <main className="min-h-screen">
      <GoogleAnalytics />
      <HeroSection />
      <JobDetails />
      <WorkSection />
      <AboutSection />
    </main>
  );
}
