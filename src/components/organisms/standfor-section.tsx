import { Section } from '@/components/atoms/section';
import { Heading } from '@/components/atoms/heading';
import { Paragraph } from '@/components/atoms/paragraph';
import messages from '@/lib/messages.json';

export const StandForSection = () => {
  const { standFor } = messages;
  return (
    <Section id="stand-for">
      <Heading as="h2" className="mb-10 text-blue-900">
        {standFor.title}
      </Heading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {standFor.items.map(item => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="flex max-h-[55px] min-h-[55px] max-w-[55px] min-w-[55px] items-center justify-center rounded-xl bg-slate-100 p-3 text-2xl">
              {item.icon}
            </div>
            <div>
              <p className="mb-2 text-[22px] font-semibold text-blue-900">
                {item.title}
              </p>
              <Paragraph>{item.description}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
