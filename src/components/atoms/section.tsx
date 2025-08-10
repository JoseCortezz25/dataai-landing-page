import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, children, className }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('mx-auto w-full max-w-6xl px-6 py-16 md:py-24', className)}
    >
      {children}
    </section>
  );
};
