import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import { dukunganMitraTable } from "../../data/informasi";

export default function DukunganMitra() {
  return (
    <>
      <PageHero
        eyebrow="Mitra"
        title="Dukungan Mitra"
        description="Bentuk dukungan konkret dari mitra dalam pelaksanaan program Sekolah Sehat dan Makan Bergizi Gratis."
        crumbs={[{ label: "Mitra" }, { label: "Dukungan Mitra" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <div className="space-y-4">
          {dukunganMitraTable.map((row, i) => (
            <Reveal
              key={row.no}
              delay={i * 0.04}
              className="rounded-2xl border border-ink-100 bg-white p-6 transition hover:shadow-lg hover:shadow-ink-900/5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-ink-900">{row.mitra}</h3>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{row.periode}</span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{row.bentuk}</p>
              <p className="mt-2 text-xs font-medium text-ink-400">Lokasi: {row.lokasi}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
