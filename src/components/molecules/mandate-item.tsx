interface MandateItemProps {
  label: string;
  title: string;
  description: string;
}

export const MandateItem = ({
  label,
  title,
  description
}: MandateItemProps) => {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="text-primary mb-2 text-xs font-semibold">{label}</div>
      <div className="mb-1 font-medium">{title}</div>
      <div className="text-muted-foreground text-sm">{description}</div>
    </div>
  );
};
