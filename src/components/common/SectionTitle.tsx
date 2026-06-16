type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-white/70">{description}</p> : null}
    </div>
  );
}
