import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import ContentBlocks from "../../components/ui/ContentBlocks";
import Reveal from "../../components/ui/Reveal";
import { sekolahSehatContent } from "../../data/content/sekolahSehatContent";

const FOKUS_ORDER = ["sehatBergizi", "sehatFisik", "sehatImunisasi", "sehatJiwa", "sehatLingkungan"];
const FOKUS_LABELS = {
  sehatBergizi: "Sehat Bergizi",
  sehatFisik: "Sehat Fisik",
  sehatImunisasi: "Sehat Imunisasi",
  sehatJiwa: "Sehat Jiwa",
  sehatLingkungan: "Sehat Lingkungan",
};

export default function GerakanSekolahSehat() {
  return (
    <>
      <PageHero
        eyebrow="Sekolah Sehat"
        title="Gerakan Sekolah Sehat"
        description="Satu gerakan, lima fokus pembiasaan — Bergizi, Fisik, Imunisasi, Jiwa, dan Lingkungan."
        crumbs={[{ label: "Sekolah Sehat" }, { label: "Gerakan Sekolah Sehat" }]}
      />
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_260px]">
          <div className="max-w-3xl space-y-8">
            <Reveal as="article" className="rounded-3xl border border-ink-100 bg-white p-7 sm:p-10">
              <ContentBlocks blocks={sekolahSehatContent.gerakanSekolahSehat.blocks} />
            </Reveal>

            {FOKUS_ORDER.map((key) => (
              <Reveal
                as="article"
                key={key}
                className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white p-7 sm:p-10"
              >
                <ContentBlocks blocks={sekolahSehatContent[key].blocks} />
              </Reveal>
            ))}
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-24 rounded-2xl border border-ink-100 bg-white p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">5 Fokus</p>
              <ul className="space-y-1">
                {FOKUS_ORDER.map((key) => (
                  <li key={key}>
                    <a
                      href={`#${sekolahSehatContent[key].slug}`}
                      className="block rounded-lg px-2.5 py-2 text-sm text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {FOKUS_LABELS[key]}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-ink-100 pt-4">
                <Link to="/sekolah-sehat/bahan-advokasi" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Bahan Advokasi GSS →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
