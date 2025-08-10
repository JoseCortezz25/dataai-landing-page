import { HeroSection } from '@/components/organisms/hero-section';
import { AboutSection } from '@/components/organisms/about-section';
import { CriteriaSection } from '@/components/organisms/criteria-section';
import { MandateSection } from '@/components/organisms/mandate-section';
import { ContactSection } from '@/components/organisms/contact-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <CriteriaSection />
      <MandateSection />
      <ContactSection />
    </div>
  );
}
