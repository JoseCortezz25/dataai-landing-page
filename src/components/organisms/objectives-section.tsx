import { Section } from '@/components/atoms/section';
import { Heading } from '@/components/atoms/heading';
import messages from '@/lib/messages.json';
import { ObjectiveCard } from '@/components/molecules/objective-card';
import { Paragraph } from '../atoms/paragraph';

export const ObjectivesSection = async () => {
  const { objectives } = messages;
  return (
    <section id="objectives" className="bg-[#0c1941] py-10">
      <Section>
        <Heading
          as="h2"
          className="mb-2 text-center text-[24px] font-bold text-white md:text-[32px]"
        >
          {objectives.title}
        </Heading>
        <Paragraph className="mx-auto mb-10 text-center font-semibold tracking-wide text-white uppercase md:w-[60%]">
          {objectives.subtitle}
        </Paragraph>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {objectives.items.map(item => (
            <ObjectiveCard
              key={item.title}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      </Section>
    </section>
  );
};
