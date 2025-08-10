import { Section } from '@/components/atoms/section';
import { Heading } from '@/components/atoms/heading';
import messages from '@/lib/messages.json';
import { CriteriaCard } from '@/components/molecules/criteria-card';

export const CriteriaSection = async () => {
  const { criteria } = messages;
  return (
    <Section id="criteria">
      <Heading as="h2" className="mb-10">
        {criteria.title}
      </Heading>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {criteria.items.map(item => (
          <CriteriaCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
};
