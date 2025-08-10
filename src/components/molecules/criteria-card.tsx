interface CriteriaCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const CriteriaCard = ({
  icon,
  title,
  description
}: CriteriaCardProps) => {
  return (
    <div className="rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur-sm">
      <div className="text-primary mb-4 flex items-center gap-3">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};
