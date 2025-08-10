import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p
      className={cn(
        'text-muted-foreground text-sm leading-6 md:text-base',
        className
      )}
    >
      {children}
    </p>
  );
};
