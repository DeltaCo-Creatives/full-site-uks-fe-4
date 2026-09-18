import { ExternalLink } from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import ContentBlocks from "../../components/ui/ContentBlocks";
import Reveal from "../../components/ui/Reveal";
import { sekolahSehatContent } from "../../data/content/sekolahSehatContent";
import { navSections } from "../../data/nav";

const FOKUS_ORDER = ["sehatBergizi", "sehatFisik", "sehatImunisasi", "sehatJiwa", "sehatLingkungan"];

// The intro block ("gerakanSekolahSehat") repeats each fokus title as its own
// sub-heading (e.g. an "Sehat Bergizi" h3) before the dedicated fokus sections
// below it, and also has its own "Video" heading that the "Sehat Imunisasi"
// block repeats. Reserving all of those here stops the intro instance from
// claiming ids the sections below it need — see the reserveIds note in
// ContentBlocks.jsx. Each fokus section below separately reserves its own
// slug so its first heading doesn't collide with its own <section id>.
const RESERVED_SECTION_IDS = [
  ...FOKUS_ORDER.map((key) => sekolahSehatContent[key].slug),
  sekolahSehatContent.bahanAdvokasi.slug,
  "video",
];

const sekolahSehatNav = navSections.find((s) => s.key === "uksm").sekolahSehat;
const madrasahSehatLink = sekolahSehatNav.items.find((item) => item.external);

export default function SekolahSehat() {
  return (
    <>
      <PageHero
        eyebrow="Sekolah Sehat"
        title="Gerakan Sekolah Sehat"
        description="Satu gerakan, lima fokus pembiasaan — Bergizi, Fisik, Imunisasi, Jiwa, dan Lingkungan — untuk mewujudkan satuan pendidikan yang sehat."
        crumbs={[{ label: "UKS/M", href: "/uksm/tentang" }, { label: "Sekolah Sehat" }]}
      />
      <div className="container-page py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
          <div className="max-w-3xl space-y-8">
            <Reveal as="article" className="rounded-3xl border border-ink-100 bg-white p-7 sm:p-10">
              <ContentBlocks blocks={sekolahSehatContent.gerakanSekolahSehat.blocks} reserveIds={RESERVED_SECTION_IDS} />
            </Reveal>

            {FOKUS_ORDER.map((key) => (
              <Reveal
                as="section"
                key={key}
                id={sekolahSehatContent[key].slug}
                className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white p-7 sm:p-10"
              >
                <ContentBlocks
                  blocks={sekolahSehatContent[key].blocks}
                  // The intro block above already reserved this slug for its own
                  // repeated "Sehat X" heading, which pushed it to "-2" (see
                  // RESERVED_SECTION_IDS). Reserve both the base slug (owned by
                  // this <section>'s own id) and that "-2" so this section's own
                  // first heading lands on a genuinely free id instead of
                  // re-colliding with the intro block's heading.
                  reserveIds={[sekolahSehatContent[key].slug, `${sekolahSehatContent[key].slug}-2`]}
                />
              </Reveal>
            ))}

            {madrasahSehatLink && (
              <Reveal
                as="div"
                className="flex flex-col gap-3 rounded-3xl border border-brand-100 bg-brand-50/60 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Program Serupa</p>
                  <p className="mt-1 text-lg font-semibold text-ink-900">{madrasahSehatLink.title}</p>
                  <p className="mt-1 text-sm text-ink-500">
                    Kampanye sekolah sehat versi Kementerian Agama untuk madrasah di seluruh Indonesia.
                  </p>
                </div>
                <a
                  href={madrasahSehatLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Kunjungi Madrasah Sehat <ExternalLink size={15} />
                </a>
              </Reveal>
            )}

            <Reveal
              as="section"
              id={sekolahSehatContent.bahanAdvokasi.slug}
              className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white p-7 sm:p-10"
            >
              <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                {sekolahSehatContent.bahanAdvokasi.judul}
              </h2>
              <ContentBlocks blocks={sekolahSehatContent.bahanAdvokasi.blocks} />
            </Reveal>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-24 rounded-2xl border border-ink-100 bg-white p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">Loncat ke</p>
              <ul className="space-y-1">
                {FOKUS_ORDER.map((key) => (
                  <li key={key}>
                    <a
                      href={`#${sekolahSehatContent[key].slug}`}
                      className="block rounded-lg px-2.5 py-2 text-sm text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {sekolahSehatContent[key].judul}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`#${sekolahSehatContent.bahanAdvokasi.slug}`}
                    className="block rounded-lg px-2.5 py-2 text-sm text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
                  >
                    Bahan Advokasi
                  </a>
                </li>
                {madrasahSehatLink && (
                  <li>
                    <a
                      href={madrasahSehatLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {madrasahSehatLink.title} <ExternalLink size={13} />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
