import { Section } from '@/components/atoms/section';
import { Heading } from '@/components/atoms/heading';
import { Paragraph } from '@/components/atoms/paragraph';
import messages from '@/lib/messages.json';

export const AboutSection = async () => {
  const { about } = messages;
  return (
    <Section id="about" className="grid grid-cols-1 gap-10 md:grid-cols-3">
      <div className="md:col-span-1">
        <Paragraph className="text-primary font-medium tracking-wide uppercase">
          • {about.eyebrow}
        </Paragraph>
        <div className="mt-8 space-y-3">
          <Paragraph className="text-black-300 font-semibold uppercase">
            {about.coreValuesLabel}
          </Paragraph>
          <ul className="text-muted-foreground space-y-1 text-sm">
            {about.coreValues.map(value => (
              <li key={value}>{value}.</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:col-span-2">
        <Heading as="h2" className="text-primary mb-6 max-w-3xl">
          {about.title}
        </Heading>
        <Paragraph className="max-w-3xl">{about.description}</Paragraph>
        <a
          href="#about"
          className="secondary-button mt-8 inline-flex px-6 py-3"
        >
          {about.cta}
          <span aria-hidden>↗</span>
        </a>
      </div>
    </Section>
  );
};
