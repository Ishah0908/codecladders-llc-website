type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <header className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-[15px] font-semibold text-[#0071e3]">{eyebrow}</p>
      ) : null}
      <h2 className="text-[40px] font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-[48px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[19px] leading-7 text-[#6e6e73]">{description}</p>
      ) : null}
    </header>
  );
}
