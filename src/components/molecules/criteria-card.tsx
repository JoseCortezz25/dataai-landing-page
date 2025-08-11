interface CriteriaCardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  bullets?: string[];
}

export const CriteriaCard = ({
  icon,
  title,
  description,
  bullets
}: CriteriaCardProps) => {
  return (
    <div className="rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur-sm">
      <div className="mb-4 flex items-center gap-3 text-blue-900">
        {icon}
        <span className="font-semibold uppercase">{title}</span>
      </div>
      {bullets && bullets.length > 0 ? (
        <ul className="text-muted-foreground space-y-2 text-sm">
          {bullets.map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-[2px] text-blue-700">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </div>
  );
};
