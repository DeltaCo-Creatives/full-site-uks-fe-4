import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight, ChevronRight } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { buildSearchIndex } from "../lib/searchIndex";

const SUGGESTIONS = ["Kesehatan Siswa", "UKS Mandiri", "Gizi Sekolah", "Cuci Tangan"];

export default function Pencarian() {
  const [query, setQuery] = useState("");
  const index = useMemo(buildSearchIndex, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return index.filter((r) => r.title.toLowerCase().includes(q) || r.section.toLowerCase().includes(q));
  }, [query, index]);

  return (
    <>
      <PageHero eyebrow="Pencarian" title="Cari Apa yang Anda Butuhkan" crumbs={[{ label: "Cari" }]} />
      <section className="container-page py-14 sm:py-16">
        <Reveal className="mx-auto max-w-2xl">
          <div className="flex items-center gap-3 rounded-2xl border border-ink-200 bg-white px-5 py-4 shadow-sm focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-100">
            <Search size={20} className="text-ink-400" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ketik kata kunci..."
              className="w-full bg-transparent text-base text-ink-900 outline-none placeholder:text-ink-400"
            />
          </div>

          {!query.trim() ? (
            <div className="mt-10 text-center">
              <p className="text-ink-400">Mulai Pencarian — ketik kata kunci untuk menjelajahi Portal UKS/M.</p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-600 shadow-sm ring-1 ring-ink-100 transition hover:-translate-y-0.5 hover:text-brand-700 hover:ring-brand-200"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length ? (
            <div className="mt-8 space-y-1.5">
              {results.map((r) =>
                r.external ? (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3.5 shadow-sm ring-1 ring-ink-100 transition hover:ring-brand-200"
                  >
                    <span>
                      <span className="block font-medium text-ink-800">{r.title}</span>
                      <span className="block text-xs text-ink-400">{r.section}</span>
                    </span>
                    <ArrowUpRight size={16} className="text-ink-300" />
                  </a>
                ) : (
                  <Link
                    key={r.href}
                    to={r.href}
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3.5 shadow-sm ring-1 ring-ink-100 transition hover:ring-brand-200"
                  >
                    <span>
                      <span className="block font-medium text-ink-800">{r.title}</span>
                      <span className="block text-xs text-ink-400">{r.section}</span>
                    </span>
                    <ChevronRight size={16} className="text-ink-300" />
                  </Link>
                )
              )}
            </div>
          ) : (
            <p className="mt-10 text-center text-ink-400">Tidak ada hasil untuk &ldquo;{query}&rdquo;.</p>
          )}
        </Reveal>
      </section>
    </>
  );
}
