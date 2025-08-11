import { Section } from '@/components/atoms/section';
import { Heading } from '@/components/atoms/heading';
import { Paragraph } from '@/components/atoms/paragraph';
import { ServiceCard } from '../molecules/service-card';
import messages from '@/lib/messages.json';

export const CriteriaSection = async () => {
  const { services } = messages;
  return (
    <Section id="services">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <Heading as="h2" className="mt-2 text-blue-900">
          {services.title}
        </Heading>
        <Paragraph className="font-semibold tracking-wide text-blue-900 uppercase">
          {services.subtitle}
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.items.map(item => (
          <ServiceCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Section>
  );
};
