// Renders the {type, text}/{type:'ul', items} block arrays produced from real
// scraped page content (see src/data/content/*.js). Detects inline sub-headers
// like "1. Kebijakan" or "A. Sanitasi Sekolah" that the source authored as bold
// paragraphs rather than semantic headings, and renders them as sub-headings.
const subHeadingPattern = /^(\d{1,2}[).]|[A-Z][).])\s+\S/;
const numberingPrefix = /^(\d{1,2}[).]|[A-Z][).])\s+/;

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function ContentBlocks({ blocks = [], className = "" }) {
  // The real source content occasionally repeats a sub-heading's exact wording
  // (a copy-paste slip in the source CMS — see src/lib/anchors.js) which would
  // otherwise produce duplicate DOM ids. Disambiguate deterministically so every
  // heading still gets a stable, unique anchor.
  const usedIds = new Set();
  function makeId(text) {
    const base = slugify(text.replace(numberingPrefix, ""));
    if (!usedIds.has(base)) {
      usedIds.add(base);
      return base;
    }
    let n = 2;
    while (usedIds.has(`${base}-${n}`)) n++;
    const id = `${base}-${n}`;
    usedIds.add(id);
    return id;
  }

  return (
    <div className={`space-y-5 ${className}`}>
      {blocks.map((block, i) => {
        if (block.type === "h1" || block.type === "h2") {
          return (
            <h2
              key={i}
              id={makeId(block.text)}
              className="scroll-mt-28 pt-2 font-display text-2xl font-semibold text-ink-900 sm:text-3xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={i}
              id={makeId(block.text)}
              className="scroll-mt-28 pt-1 text-xl font-semibold text-brand-700"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-2.5 pl-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-ink-600">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (subHeadingPattern.test(block.text) && block.text.length < 90) {
          return (
            <p key={i} id={makeId(block.text)} className="scroll-mt-28 pt-2 text-lg font-semibold text-ink-900">
              {block.text}
            </p>
          );
        }
        return (
          <p key={i} className="text-[15px] leading-relaxed text-ink-600 sm:text-base">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
