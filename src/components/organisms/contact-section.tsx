import { Section } from '@/components/atoms/section';
import { Heading } from '@/components/atoms/heading';
import { ContactForm } from '@/components/molecules/contact-form';
import messages from '@/lib/messages.json';

export const ContactSection = async () => {
  const { contact } = messages;
  return (
    <Section id="contact" className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="grid grid-cols-2 gap-4">
        {contact.social.map(s => (
          <a
            key={s.name}
            href={s.href}
            className="text-muted-foreground hover:bg-muted/40 flex aspect-square items-end justify-between rounded-2xl border p-4 text-sm transition"
          >
            <span>{s.name.toUpperCase()}</span>
            <span aria-hidden>↗</span>
          </a>
        ))}
      </div>
      <div>
        <Heading as="h2" className="mb-6 text-5xl md:text-6xl">
          {contact.title.toUpperCase()}
        </Heading>
        <ContactForm />
      </div>
    </Section>
  );
};
