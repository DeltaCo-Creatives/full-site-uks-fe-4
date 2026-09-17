import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Search,
  ArrowLeft,
  ArrowUpRight,
  Stethoscope,
  Trophy,
  HeartHandshake,
  Newspaper,
  BookOpenText,
  Link2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { gsap } from "../../lib/gsap";
import { navSections, quickLinks } from "../../data/nav";
import { buildSearchIndex } from "../../lib/searchIndex";
import { subItemHref } from "../../lib/anchors";

const ICONS = {
  uksm: Stethoscope,
  program: Trophy,
  mitra: HeartHandshake,
  informasi: Newspaper,
  publikasi: BookOpenText,
  tautan: Link2,
};

const TILE_STYLES = {
  uksm: "from-brand-500 to-brand-700",
  program: "from-sun-400 to-sun-600",
  mitra: "from-sky-500 to-sky-700",
  informasi: "from-rose-400 to-rose-600",
  publikasi: "from-violet-400 to-violet-600",
  tautan: "from-teal-400 to-teal-600",
};

export default function ExploreOverlay({ open, onClose }) {
  const [activeKey, setActiveKey] = useState(null);
  const [query, setQuery] = useState("");
  const scrimRef = useRef(null);
  const panelRef = useRef(null);
  const inputRef = useRef(null);

  const searchIndex = useMemo(buildSearchIndex, []);
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return searchIndex.filter((r) => r.title.toLowerCase().includes(q)).slice(0, 12);
  }, [query, searchIndex]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const ctx = gsap.context(() => {
      gsap.fromTo(scrimRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" });
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 24, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" }
      );
    });
    const t = setTimeout(() => inputRef.current?.focus(), 150);
    return () => {
      document.body.style.overflow = "";
      ctx.revert();
      clearTimeout(t);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function handleClose() {
    gsap.to(panelRef.current, { opacity: 0, y: 16, scale: 0.98, duration: 0.2, ease: "power2.in" });
    gsap.to(scrimRef.current, {
      opacity: 0,
      duration: 0.25,
      onComplete: () => {
        onClose();
        setActiveKey(null);
        setQuery("");
      },
    });
  }

  function goTo() {
    handleClose();
  }

  if (!open) return null;

  const activeSection = navSections.find((s) => s.key === activeKey);

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        ref={scrimRef}
        onClick={handleClose}
        className="absolute inset-0 bg-ink-900/70 backdrop-blur-sm"
      />
      <div className="relative flex h-full items-start justify-center overflow-y-auto px-4 py-6 sm:py-12">
        <div
          ref={panelRef}
          className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
        >
          {/* Search bar */}
          <div className="flex items-center gap-3 border-b border-ink-100 px-5 py-4 sm:px-7">
            <Search size={20} className="shrink-0 text-ink-400" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari halaman, program, atau informasi..."
              className="w-full bg-transparent text-base text-ink-900 outline-none placeholder:text-ink-400 sm:text-lg"
            />
            <button
              onClick={handleClose}
              aria-label="Tutup"
              className="rounded-full p-2 text-ink-400 transition hover:bg-ink-50 hover:text-ink-800"
            >
              <X size={20} />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-7">
            {query.trim() ? (
              <SearchResults results={results} onNavigate={goTo} query={query} />
            ) : activeSection ? (
              <SectionDetail section={activeSection} onBack={() => setActiveKey(null)} onNavigate={goTo} />
            ) : (
              <CategoryGrid onSelect={setActiveKey} onNavigate={goTo} />
            )}
          </div>

          {!query.trim() && !activeSection && (
            <div className="flex flex-wrap gap-2 border-t border-ink-100 bg-ink-50/60 px-5 py-4 sm:px-7">
              <span className="mr-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400">
                <Sparkles size={13} className="text-sun-500" /> Jalan Pintas
              </span>
              {quickLinks.map((q) => (
                <Link
                  key={q.href}
                  to={q.href}
                  onClick={goTo}
                  className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-ink-600 shadow-sm ring-1 ring-ink-100 transition hover:-translate-y-0.5 hover:text-brand-700 hover:ring-brand-200"
                >
                  {q.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CategoryGrid({ onSelect, onNavigate }) {
  return (
    <div>
      <Link
        to="/"
        onClick={onNavigate}
        className="mb-5 flex items-center justify-between rounded-2xl bg-gradient-to-r from-ink-900 to-ink-800 px-5 py-4 text-white transition hover:from-ink-800 hover:to-ink-700"
      >
        <span className="font-display text-lg font-semibold">Beranda Portal UKS/M</span>
        <ArrowUpRight size={20} />
      </Link>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {navSections.map((section) => {
          const Icon = ICONS[section.key] ?? Link2;
          const count =
            section.items.length + (section.groups?.length || 0) + (section.sekolahSehat ? 1 : 0);
          return (
            <button
              key={section.key}
              onClick={() => onSelect(section.key)}
              className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white ${TILE_STYLES[section.key]}`}
              >
                <Icon size={22} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2 font-display text-base font-semibold text-ink-900">
                  {section.title}
                  <ChevronRight size={16} className="text-ink-300 transition group-hover:translate-x-1 group-hover:text-brand-500" />
                </span>
                <span className="block truncate text-sm text-ink-400">{section.blurb}</span>
              </span>
              <span className="shrink-0 rounded-full bg-ink-50 px-2.5 py-1 text-xs font-semibold text-ink-400">
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SectionDetail({ section, onBack, onNavigate }) {
  const Icon = ICONS[section.key] ?? Link2;
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-5 flex items-center gap-1.5 text-sm font-semibold text-ink-500 transition hover:text-brand-600"
      >
        <ArrowLeft size={16} /> Semua Kategori
      </button>

      <div className="mb-5 flex items-center gap-3">
        <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white ${TILE_STYLES[section.key]}`}>
          <Icon size={20} />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold text-ink-900">{section.title}</h3>
          <p className="text-sm text-ink-400">{section.blurb}</p>
        </div>
      </div>

      <div className="grid gap-1.5 sm:grid-cols-2">
        {section.items.map((item) => (
          <NavLinkRow key={item.href} item={item} onNavigate={onNavigate} />
        ))}
      </div>

      {section.groups && (
        <div className="mt-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">{section.groupLabel}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {section.groups.map((group) => (
              <PillarCard key={group.href} group={group} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      )}

      {section.sekolahSehat && (
        <div className="mt-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">{section.sekolahSehat.title}</p>
          <div className="flex flex-wrap gap-2">
            {section.sekolahSehat.items.map((item) => (
              <ChipLink key={item.href} item={item} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NavLinkRow({ item, onNavigate }) {
  const commonClasses =
    "flex items-center justify-between gap-2 rounded-xl px-3.5 py-3 text-sm font-medium text-ink-700 transition hover:bg-brand-50 hover:text-brand-700";
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className={commonClasses} onClick={onNavigate}>
        {item.title}
        <ArrowUpRight size={15} className="shrink-0 text-ink-300" />
      </a>
    );
  }
  return (
    <Link to={item.href} className={commonClasses} onClick={onNavigate}>
      {item.title}
      <ChevronRight size={15} className="shrink-0 text-ink-300" />
    </Link>
  );
}

function PillarCard({ group, onNavigate }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="rounded-2xl border border-ink-100 p-4">
      <Link
        to={group.href}
        onClick={onNavigate}
        className="mb-2 flex items-center gap-2 font-semibold text-ink-900 hover:text-brand-700"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
          {group.number}
        </span>
        {group.title}
      </Link>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="text-xs font-semibold text-ink-400 hover:text-brand-600"
      >
        {expanded ? "Sembunyikan" : `Lihat ${group.subItems.length} sub-topik`}
      </button>
      {expanded && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {group.subItems.map((sub) => (
            <Link
              key={sub}
              to={subItemHref(group.href, sub)}
              onClick={onNavigate}
              className="rounded-full bg-ink-50 px-2.5 py-1 text-xs text-ink-600 hover:bg-brand-100 hover:text-brand-700"
            >
              {sub}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function ChipLink({ item, onNavigate }) {
  const classes =
    "rounded-full border border-ink-100 px-3.5 py-1.5 text-sm font-medium text-ink-600 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700";
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className={classes} onClick={onNavigate}>
        {item.title} ↗
      </a>
    );
  }
  return (
    <Link to={item.href} className={classes} onClick={onNavigate}>
      {item.title}
    </Link>
  );
}

function SearchResults({ results, onNavigate, query }) {
  if (!results.length) {
    return (
      <p className="py-10 text-center text-ink-400">
        Tidak ada hasil untuk &ldquo;{query}&rdquo;. Coba kata kunci lain.
      </p>
    );
  }
  return (
    <div className="grid gap-1.5 sm:grid-cols-2">
      {results.map((r) =>
        r.external ? (
          <a
            key={r.href}
            href={r.href}
            target="_blank"
            rel="noreferrer"
            onClick={onNavigate}
            className="flex flex-col rounded-xl px-3.5 py-3 transition hover:bg-brand-50"
          >
            <span className="text-sm font-semibold text-ink-800">{r.title}</span>
            <span className="text-xs text-ink-400">{r.section}</span>
          </a>
        ) : (
          <Link
            key={r.href}
            to={r.href}
            onClick={onNavigate}
            className="flex flex-col rounded-xl px-3.5 py-3 transition hover:bg-brand-50"
          >
            <span className="text-sm font-semibold text-ink-800">{r.title}</span>
            <span className="text-xs text-ink-400">{r.section}</span>
          </Link>
        )
      )}
    </div>
  );
}
