import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
}

export const Heading = ({ as = 'h2', children, className }: HeadingProps) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        'text-primary font-semibold tracking-tight text-balance',
        as === 'h1' && 'text-4xl sm:text-6xl md:text-7xl',
        as === 'h2' && 'text-3xl sm:text-4xl',
        as === 'h3' && 'text-2xl',
        className
      )}
    >
      {children}
    </Tag>
  );
};
