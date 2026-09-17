import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import { asri } from "../../data/programs";

export default function Asri() {
  return (
    <>
      <PageHero
        eyebrow="Program Prioritas"
        title={asri.title}
        description={asri.intro}
        crumbs={[{ label: "Program" }, { label: asri.shortTitle }]}
      />

      <section className="container-page py-14 sm:py-16">
        <Reveal className="mx-auto max-w-3xl text-center text-ink-500">
          <p className="leading-relaxed">{asri.context}</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {asri.pillars.map((p, i) => (
            <Reveal
              key={p.letter}
              delay={i * 0.08}
              className="flex gap-5 rounded-3xl border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-sky-500 font-display text-2xl font-bold text-white">
                {p.letter}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-900">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
