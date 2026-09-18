import PageHero from "../../components/ui/PageHero";
import ContentBlocks from "../../components/ui/ContentBlocks";
import Reveal from "../../components/ui/Reveal";
import { navSections } from "../../data/nav";
import { programContent } from "../../data/content/programContent";
import { subItemAnchor } from "../../lib/anchors";

const uksmSection = navSections.find((s) => s.key === "uksm");

// Maps each pillar's nav group title to its content bucket in programContent.js.
const PILLAR_CONTENT_KEYS = {
  "Pendidikan Kesehatan": "pendidikanKesehatan",
  "Pelayanan Kesehatan": "pelayananKesehatan",
  "Pembinaan Lingkungan Sekolah Sehat": "pembinaanLingkungan",
};

// The 3 pillar sections below each get their own explicit id (pendidikan-kesehatan,
// pelayanan-kesehatan, pembinaan-lingkungan) so nav links can jump straight to a
// pillar. Reserving those same strings in every pillar's ContentBlocks instance
// stops that instance's own headings from silently claiming the identical id —
// see the comment on `reserveIds` in ContentBlocks.jsx and on ANCHOR_OVERRIDES
// in src/lib/anchors.js for how this plays out for "Pendidikan Kesehatan".
const RESERVED_SECTION_IDS = uksmSection.groups.map((g) => g.href.split("#")[1]);

export default function Trias() {
  return (
    <>
      <PageHero
        eyebrow="UKS/M"
        title="Trias UKS/M"
        description="Tiga pilar pelaksanaan UKS/M: Pendidikan Kesehatan, Pelayanan Kesehatan, dan Pembinaan Lingkungan Sekolah Sehat."
        crumbs={[{ label: "UKS/M", href: "/uksm/tentang" }, { label: "Trias UKS/M" }]}
      />
      <div className="container-page py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
          <div className="max-w-3xl space-y-8">
            {uksmSection.groups.map((group) => {
              const sectionId = group.href.split("#")[1];
              const content = programContent[PILLAR_CONTENT_KEYS[group.title]];
              return (
                <Reveal
                  as="section"
                  key={group.title}
                  id={sectionId}
                  className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white p-7 sm:p-10"
                >
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-brand-600">
                    Pilar {group.number}
                  </p>
                  <ContentBlocks blocks={content.blocks} reserveIds={RESERVED_SECTION_IDS} />
                </Reveal>
              );
            })}
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-24 rounded-2xl border border-ink-100 bg-white p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">Loncat ke</p>
              <nav className="space-y-4">
                {uksmSection.groups.map((group) => (
                  <div key={group.title}>
                    <a
                      href={`#${group.href.split("#")[1]}`}
                      className="block rounded-lg px-2.5 py-2 text-sm font-semibold text-ink-800 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {group.number}. {group.title}
                    </a>
                    <ul className="space-y-0.5 border-l border-ink-100 pl-3">
                      {group.subItems.map((sub) => (
                        <li key={sub}>
                          <a
                            href={`#${subItemAnchor(sub)}`}
                            className="block rounded-lg px-2.5 py-1.5 text-sm text-ink-500 transition hover:bg-brand-50 hover:text-brand-700"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
