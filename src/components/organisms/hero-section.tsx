import messages from '@/lib/messages.json';
import { Section } from '@/components/atoms/section';
import { Paragraph } from '@/components/atoms/paragraph';
import { HeroTitle } from '@/components/molecules/hero-title';

export const HeroSection = async () => {
  const { hero } = messages;
  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1920&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <Section className="relative flex min-h-[70vh] items-center">
        <div className="max-w-2xl text-white">
          <HeroTitle lines={hero.title} />
          <Paragraph className="mt-6 text-white/90">{hero.subtitle}</Paragraph>
          <a href="#contact" className="primary-button mt-8 inline-block">
            {hero.cta}
          </a>
        </div>
      </Section>
    </div>
  );
};
