import messages from '@/lib/messages.json';
import { Section } from '@/components/atoms/section';
import { Heading } from '../atoms/heading';

export const HeroSection = async () => {
  const { hero } = messages;
  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <Section className="relative flex min-h-[70vh] items-center">
        <div className="max-w-2xl text-white">
          <Heading as="h1" className="text-white/90">
            {hero.subtitle}
          </Heading>
          <a href={hero.ctaLink} className="primary-button mt-8 inline-block">
            {hero.cta}
          </a>
        </div>
      </Section>
    </div>
  );
};
