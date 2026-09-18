import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { formatDate } from "../../lib/format";

// `href` is optional: pass it to make the whole card a link to a detail page.
// Without it, the card falls back to its original inline expand/collapse
// behaviour (used where there is no detail page to link to, e.g. inline
// listings on program/pillar pages).
export default function NewsCard({ item, href, delay = 0, tagColor = "brand" }) {
  const [expanded, setExpanded] = useState(false);
  const tagClasses =
    tagColor === "sun" ? "bg-sun-50 text-sun-700" : tagColor === "sky" ? "bg-sky-50 text-sky-700" : "bg-brand-50 text-brand-700";
  const date = item.published_at ?? item.tanggal;

  const body = (
    <>
      {item.gambar && (
        <div className="aspect-4/3 overflow-hidden bg-ink-50">
          <img
            src={item.gambar}
            alt={item.judul}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between text-xs">
          {item.kategori && <span className={`rounded-full px-2.5 py-1 font-semibold ${tagClasses}`}>{item.kategori}</span>}
          {date && <span className="text-ink-400">{formatDate(date)}</span>}
        </div>
        <h3 className="font-display text-base font-semibold leading-snug text-ink-900">{item.judul}</h3>
        <p className={`mt-2 text-sm leading-relaxed text-ink-400 ${href || !expanded ? "line-clamp-3" : ""}`}>
          {item.ringkasan}
        </p>
        {href ? (
          <span className="mt-3 flex items-center gap-1 self-start text-sm font-semibold text-brand-600 transition-all group-hover:gap-1.5">
            Baca Selengkapnya <ArrowRight size={15} />
          </span>
        ) : (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setExpanded((v) => !v);
            }}
            className="mt-3 flex items-center gap-1 self-start text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            {expanded ? "Tutup" : "Baca Selengkapnya"}
            <ChevronDown size={15} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
    </>
  );

  return (
    <Reveal delay={delay} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition hover:shadow-xl hover:shadow-ink-900/5">
      {href ? (
        <Link to={href} className="flex h-full flex-col">
          {body}
        </Link>
      ) : (
        body
      )}
    </Reveal>
  );
}
