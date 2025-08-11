import { HeroSection } from '@/components/organisms/hero-section';
import { AboutSection } from '@/components/organisms/about-section';
import { CriteriaSection } from '@/components/organisms/criteria-section';
import { StandForSection } from '@/components/organisms/standfor-section';
import { ObjectivesSection } from '@/components/organisms/objectives-section';
import { ContactSection } from '@/components/organisms/contact-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <StandForSection />
      <ObjectivesSection />
      <CriteriaSection />
      <ContactSection />
    </div>
  );
}
