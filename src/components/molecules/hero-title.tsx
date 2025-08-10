import { Heading } from '@/components/atoms/heading';

interface HeroTitleProps {
  lines: string[];
}

export const HeroTitle = ({ lines }: HeroTitleProps) => {
  return (
    <div className="space-y-2">
      {lines.map((line, index) => (
        <Heading
          key={index}
          as="h1"
          className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
        >
          {line}
        </Heading>
      ))}
    </div>
  );
};
