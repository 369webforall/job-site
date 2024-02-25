import HeroSection from '../components/Hero';
import AboutSection from '../components/AboutSection';
import JobDetails from '../components/JobDetails';
import EmployeeSection from '../components/EmployeeSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <JobDetails />
      <EmployeeSection />
      <AboutSection />
    </main>
  );
}
