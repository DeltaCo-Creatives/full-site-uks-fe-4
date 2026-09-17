import { useLocation, useNavigate } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import ContentBlocks from "../../components/ui/ContentBlocks";
import Reveal from "../../components/ui/Reveal";
import { tentangUks } from "../../data/content/tentangUks";

const TABS = [
  { key: "pembina", label: "Tim Pembina UKS/M", data: tentangUks.strukturPembina, path: "/uksm/struktur-organisasi/tim-pembina" },
  { key: "pelaksana", label: "Tim Pelaksana UKS/M", data: tentangUks.strukturPelaksana, path: "/uksm/struktur-organisasi/tim-pelaksana" },
];

export default function StrukturOrganisasi() {
  const location = useLocation();
  const navigate = useNavigate();
  const tab = location.pathname.includes("tim-pelaksana") ? "pelaksana" : "pembina";
  const active = TABS.find((t) => t.key === tab);

  return (
    <>
      <PageHero
        eyebrow="UKS/M"
        title="Struktur Organisasi"
        description="Bagaimana pembinaan dan pelaksanaan UKS/M terkoordinasi dari pusat hingga satuan pendidikan."
        crumbs={[{ label: "UKS/M" }, { label: "Struktur Organisasi" }]}
      />
      <div className="container-page py-14 sm:py-16">
        <Reveal className="mb-6 flex gap-2">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => navigate(t.path)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                tab === t.key ? "bg-brand-500 text-white shadow" : "bg-white text-ink-500 ring-1 ring-ink-100 hover:text-ink-800"
              }`}
            >
              {t.label}
            </button>
          ))}
        </Reveal>
        <Reveal as="article" className="max-w-3xl rounded-3xl border border-ink-100 bg-white p-7 sm:p-10">
          <ContentBlocks blocks={active.data.blocks} />
        </Reveal>
      </div>
    </>
  );
}
