import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import { ckg } from "../../data/programs";
import { CheckCircle2 } from "lucide-react";

export default function Ckg() {
  return (
    <>
      <PageHero
        eyebrow="Program Prioritas"
        title={ckg.title}
        description={ckg.tagline}
        crumbs={[{ label: "Program" }, { label: ckg.shortTitle }]}
      />

      <section className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <Reveal className="rounded-3xl border border-ink-100 bg-white p-7 sm:p-8">
            <p className="leading-relaxed text-ink-500">{ckg.intro}</p>
            <p className="mt-4 leading-relaxed text-ink-500">{ckg.context}</p>
          </Reveal>

          <Reveal className="space-y-3 rounded-3xl border border-brand-200 bg-brand-50/60 p-7">
            {ckg.facts.map((f) => (
              <div key={f} className="flex gap-2.5 text-sm text-ink-700">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-600" />
                <span>{f}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <h2 className="mb-6 font-display text-2xl font-semibold text-ink-900">Paket Pemeriksaan Sesuai Jenjang</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {ckg.packages.map((p) => (
              <div key={p.jenjang} className="rounded-2xl border border-ink-100 bg-white p-6">
                <p className="font-display font-semibold text-brand-700">{p.jenjang}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.cakupan}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <h2 className="mb-6 font-display text-2xl font-semibold text-ink-900">Tahapan Pelaksanaan</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ckg.steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-ink-100 bg-white p-6">
                <span className="font-display text-3xl font-bold text-brand-100">0{i + 1}</span>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-brand-600">{s.label}</p>
                <p className="mt-1.5 font-display font-semibold text-ink-900">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14 rounded-2xl bg-ink-50 p-6 text-sm text-ink-500">
          <strong className="text-ink-800">Dasar hukum:</strong> {ckg.legalBasis}
        </Reveal>
      </section>
    </>
  );
}
