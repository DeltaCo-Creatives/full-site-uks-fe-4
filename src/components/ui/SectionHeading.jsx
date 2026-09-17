import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}) {
  return (
    <Reveal
      className={`mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between ${
        align === "center" ? "text-center sm:text-left" : ""
      }`}
    >
      <div>
        {eyebrow && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>
        )}
        <h2 className="font-display text-2xl font-semibold text-balance text-ink-900 sm:text-3xl md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-balance text-ink-400">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
