import { useState } from "react";
import { GraduationCap, HeartPulse, Trees, ClipboardList, ChevronDown, Check } from "lucide-react";
import { rubricCategories, strataLevels } from "../../data/content/stratifikasi";

const ICONS = { GraduationCap, HeartPulse, Trees, ClipboardList };

function StrataCard({ level, cell }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-4">
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white ${level.badge}`}>
        {level.name}
      </span>
      {cell.note && <p className="mt-2.5 text-xs font-medium italic text-ink-400">{cell.note}</p>}
      <ul className="mt-2.5 space-y-2">
        {cell.items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-600">
            <Check size={15} className="mt-0.5 shrink-0 text-brand-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Accordion of the four Trias UKS/M + manajemen categories; each panel shows
// the four strata (Minimal/Standar/Optimal/Paripurna) as stacked cards so the
// rubric stays readable on narrow screens with no horizontal scroll.
export default function StrataRubricAccordion() {
  const [openKey, setOpenKey] = useState(rubricCategories[0].key);

  return (
    <div className="space-y-3">
      {rubricCategories.map((category) => {
        const Icon = ICONS[category.icon];
        const isOpen = openKey === category.key;
        return (
          <div key={category.key} className="overflow-hidden rounded-2xl border border-ink-100 bg-white">
            <button
              type="button"
              onClick={() => setOpenKey(isOpen ? null : category.key)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-ink-400">
                  Kategori {category.number}
                </span>
                <span className="block font-display text-base font-semibold text-ink-900 sm:text-lg">
                  {category.title}
                </span>
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-ink-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="grid gap-3 border-t border-ink-100 p-4 sm:grid-cols-2 sm:p-5">
                {strataLevels.map((level) => (
                  <StrataCard key={level.key} level={level} cell={category.strata[level.key]} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
