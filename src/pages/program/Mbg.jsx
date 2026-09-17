import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import { mbg } from "../../data/programs";
import { ExternalLink } from "lucide-react";

export default function Mbg() {
  return (
    <>
      <PageHero
        eyebrow="Program Prioritas"
        title={mbg.title}
        description={mbg.intro}
        crumbs={[{ label: "Program" }, { label: mbg.shortTitle }]}
      />

      <section className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal className="rounded-3xl border border-ink-100 bg-white p-7 sm:p-8">
              <p className="leading-relaxed text-ink-500">{mbg.context}</p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {mbg.goals.map((g, i) => (
                <Reveal
                  key={g.title}
                  delay={i * 0.06}
                  className="rounded-2xl border border-ink-100 bg-white p-5 transition hover:shadow-lg hover:shadow-ink-900/5"
                >
                  <p className="font-display font-semibold text-brand-700">{g.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{g.description}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Reveal className="overflow-hidden rounded-3xl">
              <img src={mbg.image} alt={mbg.title} className="h-64 w-full object-cover" />
            </Reveal>

            <Reveal className="rounded-3xl border border-ink-100 bg-white p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">Sasaran Program</p>
              <div className="flex flex-wrap gap-2">
                {mbg.sasaran.map((s) => (
                  <span key={s} className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="rounded-3xl border border-ink-100 bg-white p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">Tautan Resmi</p>
              <div className="space-y-2">
                {mbg.externalLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl bg-ink-50 px-4 py-3 text-sm font-medium text-ink-700 transition hover:bg-brand-50 hover:text-brand-700"
                  >
                    {l.title} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
