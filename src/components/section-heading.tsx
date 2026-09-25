type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-5">
      <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
        <span className="text-[#ff3030]">{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
    </div>
  );
}
