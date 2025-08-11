import { Section } from '@/components/atoms/section';
import { Heading } from '@/components/atoms/heading';
import { Paragraph } from '../atoms/paragraph';
import messages from '@/lib/messages.json';

export const ContactSection = async () => {
  const { contact } = messages;
  return (
    <Section id="contact" className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="order-2 grid grid-cols-2 gap-2 md:order-1">
        {contact.social.map(s => (
          <a
            key={s.name}
            href={s.href || ''}
            className="text-muted-foreground hover:bg-muted/40 text-md flex aspect-square items-end justify-between rounded-2xl border p-4 transition"
          >
            <span>{s.name.toUpperCase()}</span>
            {s.href && <span aria-hidden>↗</span>}
          </a>
        ))}
      </div>
      <div className="order-1 flex flex-col items-start md:order-2">
        <div className="max-w-[200px]">
          <img src="/logo-dataia.png" alt="DataAI Services" className="" />
        </div>
        <Heading
          as="h2"
          className="mb-6 text-5xl font-bold text-blue-900 md:text-6xl"
        >
          {contact.title.toUpperCase()}
        </Heading>
        <Paragraph>{contact.description}</Paragraph>
      </div>
    </Section>
  );
};
