import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import { produkHukum } from "../../data/informasi";
import { Scale } from "lucide-react";

export default function ProdukHukum() {
  return (
    <>
      <PageHero
        eyebrow="Publikasi"
        title="Produk Hukum"
        description="Landasan regulasi pelaksanaan UKS/M — undang-undang, peraturan menteri, dan surat edaran resmi."
        crumbs={[{ label: "Publikasi" }, { label: "Produk Hukum" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-3">
          {produkHukum.map((doc, i) => (
            <Reveal
              key={doc.judul}
              delay={i * 0.04}
              className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition hover:shadow-lg hover:shadow-ink-900/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Scale size={20} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-medium leading-snug text-ink-800">{doc.judul}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-ink-50 px-2.5 py-1 font-semibold text-ink-500">{doc.jenis}</span>
                  <span className="rounded-full bg-ink-50 px-2.5 py-1 font-semibold text-ink-500">{doc.tahun}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
