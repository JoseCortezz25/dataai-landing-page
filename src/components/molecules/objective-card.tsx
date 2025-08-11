interface ObjectiveCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
}

export const ObjectiveCard = ({
  title,
  description,
  imageUrl,
  imageAlt
}: ObjectiveCardProps) => {
  return (
    <div className="flex flex-col items-start gap-6 rounded-[20px] bg-white px-7 py-6">
      <div className="mb-1 h-[65px] text-2xl text-[18px] leading-7 font-semibold text-pretty text-blue-900 uppercase md:text-[24px]">
        {title}
      </div>
      <div className="mb-3 w-full overflow-hidden rounded-[20px] bg-blue-900">
        <img
          src={imageUrl}
          alt={imageAlt || title}
          className="h-40 w-full rounded-[20px] object-cover"
          loading="lazy"
        />
      </div>
      <p className="text-muted-foreground text-sm text-pretty">{description}</p>
    </div>
  );
};
