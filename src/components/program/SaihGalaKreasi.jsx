import Reveal from "../ui/Reveal";
import { saihGalaKreasi } from "../../data/programs";
import { ExternalLink, FileText, Trophy } from "lucide-react";

/**
 * SAIH 2025 + Gala Kreasi Video 2024/2023 — prod had these as standalone pages
 * under /gala-kreasi/*; the current sitemap folds them into 7KAIH as one section.
 * Old prod URLs redirect here (see src/data/redirects.js: "/gala-kreasi").
 */
export default function SaihGalaKreasi() {
  return (
    <section id="saih-gala-kreasi" className="container-page scroll-mt-28 py-14 sm:py-16">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-600">{saihGalaKreasi.title}</p>
        <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">Lomba dan Apresiasi 7KAIH</h2>
        <p className="mt-3 text-ink-500 leading-relaxed">{saihGalaKreasi.intro}</p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
        {saihGalaKreasi.editions.map((edition, i) => (
          <Reveal
            key={edition.year}
            delay={i * 0.06}
            className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition hover:shadow-lg hover:shadow-ink-900/5"
          >
            <div className="flex items-center gap-2">
              <Trophy size={16} className="text-brand-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-ink-400">{edition.year}</span>
            </div>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink-900">{edition.title}</h3>
            {edition.theme && <p className="mt-1 text-sm font-medium text-brand-700">Tema: {edition.theme}</p>}
            <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{edition.description}</p>

            {edition.competitions && (
              <ul className="mt-4 space-y-2">
                {edition.competitions.map((c) =>
                  c.href ? (
                    <li key={c.title}>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-start justify-between gap-2 text-sm font-medium text-ink-700 hover:text-brand-700"
                      >
                        <span>{c.title}</span>
                        <ExternalLink size={13} className="mt-0.5 shrink-0" />
                      </a>
                    </li>
                  ) : (
                    <li key={c.title} className="text-sm text-ink-600">
                      {c.title}
                    </li>
                  )
                )}
              </ul>
            )}

            {edition.goals && (
              <ul className="mt-4 space-y-2">
                {edition.goals.map((g) => (
                  <li key={g} className="flex gap-2.5 text-sm leading-relaxed text-ink-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            )}

            {edition.sasaran && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {edition.sasaran.map((s) => (
                  <span key={s} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                    {s}
                  </span>
                ))}
              </div>
            )}

            {edition.downloads && (
              <div className="mt-5 space-y-2 border-t border-ink-100 pt-4">
                {edition.downloads.map((d) => (
                  <a
                    key={d.href}
                    href={d.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800"
                  >
                    <FileText size={14} className="shrink-0" />
                    <span>{d.label}</span>
                  </a>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
