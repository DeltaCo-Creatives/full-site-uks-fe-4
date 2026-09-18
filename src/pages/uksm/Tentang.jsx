import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import ContentBlocks from "../../components/ui/ContentBlocks";
import Reveal from "../../components/ui/Reveal";
import SectionHeading from "../../components/ui/SectionHeading";
import NewsCard from "../../components/ui/NewsCard";
import { tentangUks } from "../../data/content/tentangUks";
import { latestPraktikBaik } from "../../data/home";
import { getSlug } from "../../lib/slug";

const SECTIONS = [
  { id: "deskripsi-umum", label: "Deskripsi Umum", data: tentangUks.deskripsiUmum },
  // Deskripsi Umum also has a "Tujuan UKS/M" heading; reserve its id so this one gets a unique suffix.
  { id: "tujuan", label: "Tujuan", data: tentangUks.tujuan, reserveIds: ["tujuan-uks-m"] },
  { id: "sasaran", label: "Sasaran", data: tentangUks.sasaran },
];

const STRUKTUR_TABS = [
  { key: "pembina", id: "tim-pembina", label: "Tim Pembina UKS/M", data: tentangUks.strukturPembina },
  { key: "pelaksana", id: "tim-pelaksana", label: "Tim Pelaksana UKS/M", data: tentangUks.strukturPelaksana },
];

function StrukturOrganisasiSection() {
  const location = useLocation();
  const hashTab = STRUKTUR_TABS.find((t) => `#${t.id}` === location.hash)?.key;
  const [tab, setTab] = useState(hashTab ?? "pembina");
  const [prevHash, setPrevHash] = useState(location.hash);

  // Same-page hash navigation doesn't remount this component, so follow a
  // #tim-pembina / #tim-pelaksana hash change during render.
  if (location.hash !== prevHash) {
    setPrevHash(location.hash);
    if (hashTab) setTab(hashTab);
  }

  const active = STRUKTUR_TABS.find((t) => t.key === tab);

  return (
    <section id="struktur-organisasi" className="scroll-mt-28">
      <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
        Struktur Organisasi
      </h2>
      <div className="mb-6 flex gap-2">
        {STRUKTUR_TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              tab === t.key
                ? "bg-brand-500 text-white shadow"
                : "bg-white text-ink-500 ring-1 ring-ink-100 hover:text-ink-800"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div id={active.id} className="scroll-mt-28">
        <ContentBlocks blocks={active.data.blocks} />
      </div>
    </section>
  );
}

export default function TentangUks() {
  return (
    <>
      <PageHero
        eyebrow="UKS/M"
        title="Tentang UKS/M"
        description="Deskripsi umum, tujuan, sasaran, dan struktur organisasi Usaha Kesehatan Sekolah/Madrasah."
        crumbs={[{ label: "UKS/M" }, { label: "Tentang UKS/M" }]}
      />
      <div className="container-page py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
          <div className="max-w-3xl space-y-8">
            {SECTIONS.map((section) => (
              <Reveal
                as="section"
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white p-7 sm:p-10"
              >
                <ContentBlocks blocks={section.data.blocks} reserveIds={section.reserveIds} />
              </Reveal>
            ))}
            <Reveal as="div" className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white p-7 sm:p-10">
              <StrukturOrganisasiSection />
            </Reveal>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-24 rounded-2xl border border-ink-100 bg-white p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">Loncat ke</p>
              <ul className="space-y-1">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block rounded-lg px-2.5 py-2 text-sm text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#struktur-organisasi"
                    className="block rounded-lg px-2.5 py-2 text-sm text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
                  >
                    Struktur Organisasi
                  </a>
                  <ul className="ml-3 space-y-0.5 border-l border-ink-100 pl-3">
                    {STRUKTUR_TABS.map((t) => (
                      <li key={t.key}>
                        <a
                          href={`#${t.id}`}
                          className="block rounded-lg px-2.5 py-1.5 text-sm text-ink-500 transition hover:bg-brand-50 hover:text-brand-700"
                        >
                          {t.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Cerita Lapangan"
            title="Praktik Baik Terbaru"
            description="Kisah pelaksanaan UKS/M dan sekolah sehat dari satuan pendidikan di seluruh Indonesia."
            action={
              <Link
                to="/informasi/praktik-baik"
                className="text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Lihat Semua Praktik Baik →
              </Link>
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {latestPraktikBaik.map((item, i) => (
              <NewsCard
                key={item.slug}
                item={item}
                href={`/informasi/praktik-baik/${getSlug(item)}`}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
