import PageHero from "../../components/ui/PageHero";
import ContentBlocks from "../../components/ui/ContentBlocks";
import Reveal from "../../components/ui/Reveal";
import { mitraPages } from "../../data/content/mitraPages";
import { partners } from "../../data/home";

export default function MitraKami() {
  return (
    <>
      <PageHero
        eyebrow="Mitra"
        title="Mitra Kami"
        description="Kolaborasi penta-helix bersama kementerian, lembaga, dan mitra pembangunan sejak 2022."
        crumbs={[{ label: "Mitra" }, { label: "Mitra Kami" }]}
      />

      <section className="container-page py-14 sm:py-16">
        <Reveal className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-400">Mitra dengan logo terverifikasi</Reveal>
        <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {partners.map((p, i) => (
            <Reveal
              key={p.nama}
              delay={i * 0.02}
              as="a"
              href={p.url ?? undefined}
              target={p.url ? "_blank" : undefined}
              rel="noreferrer"
              className="flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-ink-100 bg-white p-3 text-center transition hover:shadow-lg hover:shadow-ink-900/5"
            >
              <img src={p.logo} alt={p.nama} className="max-h-9 max-w-full object-contain" loading="lazy" />
              <span className="line-clamp-1 text-[11px] font-medium text-ink-400">{p.nama}</span>
            </Reveal>
          ))}
        </div>

        <Reveal as="article" className="max-w-3xl rounded-3xl border border-ink-100 bg-white p-7 sm:p-10">
          <ContentBlocks blocks={mitraPages.mitraKami.blocks} />
        </Reveal>
      </section>
    </>
  );
}
