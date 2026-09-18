import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import PublikasiGrid from "../ui/PublikasiGrid";
import { bukuPanduan, infografis, latestVideo } from "../../data/home";

const TABS = [
  { key: "buku", label: "Buku Panduan", data: bukuPanduan, href: "/publikasi/buku-panduan", variant: "buku" },
  { key: "info", label: "Infografis", data: infografis, href: "/publikasi/infografis", variant: "info" },
  { key: "video", label: "Video", data: latestVideo, href: "/publikasi/video", variant: "video" },
];

const ROTATE_MS = 6000;

export default function PublikasiSection() {
  const [tabIndex, setTabIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = TABS[tabIndex];

  // Auto-rotate through the three tabs on a timer; picking a tab manually (or
  // hovering the section) restarts/pauses the countdown rather than fighting it.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setTabIndex((i) => (i + 1) % TABS.length), ROTATE_MS);
    return () => clearTimeout(t);
  }, [tabIndex, paused]);

  return (
    <section className="bg-ink-50 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Perpustakaan"
          title="Publikasi & Bahan Bacaan"
          description="Buku pedoman, infografis, dan video edukasi resmi untuk mendukung pelaksanaan UKS/M."
          action={
            <div className="w-full sm:w-auto">
              <div className="flex gap-1 rounded-full bg-white p-1 shadow-sm ring-1 ring-ink-100">
                {TABS.map((t, i) => (
                  <button
                    key={t.key}
                    onClick={() => setTabIndex(i)}
                    className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition sm:flex-initial ${
                      tabIndex === i ? "bg-brand-500 text-white shadow" : "text-ink-500 hover:text-ink-800"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className="mt-2 flex gap-1 px-1">
                {TABS.map((t, i) => (
                  <span key={t.key} className="h-1 flex-1 overflow-hidden rounded-full bg-ink-100">
                    {i < tabIndex ? (
                      <span className="block h-full w-full rounded-full bg-brand-500" />
                    ) : i === tabIndex ? (
                      <span
                        key={tabIndex}
                        className="block h-full w-full origin-left rounded-full bg-brand-500"
                        style={{
                          animation: `publikasi-progress ${ROTATE_MS}ms linear forwards`,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                      />
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
          }
        />

        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* Remount on tab change so an open viewer modal from the previous
              tab's variant always unmounts cleanly (restoring focus/scroll)
              instead of vanishing mid-open when the variant prop switches. */}
          <PublikasiGrid key={active.key} items={active.data} variant={active.variant} />
        </div>

        <div className="mt-8 text-center">
          <Link
            to={active.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5 transition-all"
          >
            Lihat semua {active.label.toLowerCase()} <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
