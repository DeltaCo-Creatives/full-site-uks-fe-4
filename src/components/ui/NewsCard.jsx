import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}

export default function NewsCard({ item, delay = 0, tagColor = "brand" }) {
  const [expanded, setExpanded] = useState(false);
  const tagClasses =
    tagColor === "brand" ? "bg-brand-50 text-brand-700" : "bg-sun-50 text-sun-700";

  return (
    <Reveal delay={delay} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition hover:shadow-xl hover:shadow-ink-900/5">
      <div className="aspect-4/3 overflow-hidden bg-ink-50">
        <img
          src={item.gambar}
          alt={item.judul}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className={`rounded-full px-2.5 py-1 font-semibold ${tagClasses}`}>{item.kategori}</span>
          <span className="text-ink-400">{formatDate(item.published_at)}</span>
        </div>
        <h3 className="font-display text-base font-semibold leading-snug text-ink-900">{item.judul}</h3>
        <p className={`mt-2 text-sm leading-relaxed text-ink-400 ${expanded ? "" : "line-clamp-3"}`}>
          {item.ringkasan}
        </p>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 flex items-center gap-1 self-start text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          {expanded ? "Tutup" : "Baca Selengkapnya"}
          <ChevronDown size={15} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>
    </Reveal>
  );
}
