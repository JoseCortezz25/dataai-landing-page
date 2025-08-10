import { Section } from '@/components/atoms/section';
import { Heading } from '@/components/atoms/heading';
import messages from '@/lib/messages.json';
import { MandateItem } from '@/components/molecules/mandate-item';

export const MandateSection = async () => {
  const { mandate } = messages;
  return (
    <Section id="mandate">
      <Heading as="h2" className="mb-10 text-center">
        {mandate.title}
      </Heading>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mandate.points.map(point => (
          <MandateItem
            key={point.label}
            label={point.label}
            title={point.title}
            description={point.description}
          />
        ))}
      </div>
    </Section>
  );
};
