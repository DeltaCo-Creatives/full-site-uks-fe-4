import { useParams, Link, Navigate } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import ContentBlocks from "../../components/ui/ContentBlocks";
import Reveal from "../../components/ui/Reveal";
import { navSections } from "../../data/nav";
import { programContent } from "../../data/content/programContent";
import { subItemAnchor } from "../../lib/anchors";

const PILLAR_MAP = {
  "pendidikan-kesehatan": { key: "pendidikanKesehatan", groupTitle: "Pendidikan Kesehatan" },
  "pelayanan-kesehatan": { key: "pelayananKesehatan", groupTitle: "Pelayanan Kesehatan" },
  "pembinaan-lingkungan": { key: "pembinaanLingkungan", groupTitle: "Pembinaan Lingkungan Sekolah Sehat" },
};

const uksmSection = navSections.find((s) => s.key === "uksm");

export default function TriasPillar() {
  const { slug } = useParams();
  const mapping = PILLAR_MAP[slug];
  if (!mapping) return <Navigate to="/uksm/deskripsi-umum" replace />;

  const group = uksmSection.groups.find((g) => g.title === mapping.groupTitle);
  const content = programContent[mapping.key];

  return (
    <>
      <PageHero
        eyebrow={`Trias UKS/M · Pilar ${group.number}`}
        title={content.judul}
        description={`${group.subItems.length} indikator pelaksanaan pada satuan pendidikan.`}
        crumbs={[{ label: "UKS/M", href: "/uksm/deskripsi-umum" }, { label: "Trias UKS/M" }, { label: content.judul }]}
      />

      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <Reveal as="article" className="max-w-3xl rounded-3xl border border-ink-100 bg-white p-7 sm:p-10">
            <ContentBlocks blocks={content.blocks} />
          </Reveal>

          <aside className="lg:pt-2">
            <div className="sticky top-24 rounded-2xl border border-ink-100 bg-white p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">Loncat ke Indikator</p>
              <ul className="space-y-1">
                {group.subItems.map((sub) => (
                  <li key={sub}>
                    <a
                      href={`#${subItemAnchor(sub)}`}
                      className="block rounded-lg px-2.5 py-2 text-sm text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-ink-100 pt-4">
                <Link to="/uksm/deskripsi-umum" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                  ← Kembali ke UKS/M
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
