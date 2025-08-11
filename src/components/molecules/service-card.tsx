interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="flex h-[250px] flex-col justify-between rounded-2xl border bg-white/70 p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex max-h-[55px] min-h-[55px] max-w-[55px] min-w-[55px] items-center justify-center rounded-full bg-blue-50 text-blue-700">
          <span className="text-xl" aria-hidden>
            {icon || '📘'}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <span className="text-[18px] leading-7 font-semibold text-blue-900">
          {title}
        </span>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};
