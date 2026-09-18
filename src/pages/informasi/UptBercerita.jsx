import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import { uptBercerita } from "../../data/informasi";
import { getSlug } from "../../lib/slug";

export default function UptBercerita() {
  return (
    <>
      <PageHero
        eyebrow="Informasi"
        title="UPT Bercerita"
        description="Kisah lapangan dari Unit Pelaksana Teknis (UPT) di berbagai daerah dalam mengawal program prioritas."
        crumbs={[{ label: "Informasi" }, { label: "UPT Bercerita" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-4">
          {uptBercerita.map((item, i) => (
            <Reveal
              key={item.judul}
              delay={i * 0.06}
              className="block rounded-2xl border border-ink-100 bg-white p-6 transition hover:shadow-lg hover:shadow-ink-900/5"
              as={Link}
              to={`/informasi/upt-bercerita/${getSlug(item)}`}
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">{item.kategori}</span>
                <span className="text-xs text-ink-400">
                  {new Date(item.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-900">{item.judul}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.ringkasan}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
