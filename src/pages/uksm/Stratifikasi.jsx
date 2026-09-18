import { Link } from "react-router-dom";
import { ExternalLink, Target, Info } from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import StrataRubricAccordion from "../../components/uksm/StrataRubricAccordion";
import {
  dashboardUrl,
  pengertian,
  tujuanStratifikasi,
  caraPenilaian,
  indikator,
  strataLevels,
} from "../../data/content/stratifikasi";

const SECTIONS = [
  { id: "pengertian", label: "Apa itu Stratifikasi" },
  { id: "tujuan", label: "Tujuan" },
  { id: "cara-penilaian", label: "Cara Penilaian" },
  { id: "indikator", label: "Indikator per Strata" },
];

function DashboardCta({ compact = false }) {
  return (
    <a
      href={dashboardUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-white font-semibold text-brand-700 transition hover:bg-sun-50 ${
        compact ? "w-full px-4 py-2.5 text-sm" : "px-6 py-3.5 text-base shadow-lg shadow-ink-900/10"
      }`}
    >
      Masuk ke Dasbor Stratifikasi UKS/M <ExternalLink size={compact ? 15 : 18} />
    </a>
  );
}

export default function Stratifikasi() {
  return (
    <>
      <PageHero
        eyebrow="UKS/M"
        title="Stratifikasi UKS/M"
        description={pengertian.lead}
        crumbs={[{ label: "UKS/M", href: "/uksm/tentang" }, { label: "Stratifikasi UKS/M" }]}
      />

      <div className="container-page py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px]">
          <div className="space-y-8">
            <Reveal
              as="section"
              id="pengertian"
              className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white p-7 sm:p-10"
            >
              <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                Apa itu Stratifikasi UKS/M?
              </h2>
              <div className="mt-5 space-y-5">
                {pengertian.paragraphs.map((p) => (
                  <div key={p.title}>
                    <p className="text-lg font-semibold text-ink-900">{p.title}</p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-600 sm:text-base">{p.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <section id="tujuan" className="scroll-mt-28">
              <Reveal className="mb-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-600">Tujuan</p>
                <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                  Tujuan Stratifikasi UKS/M
                </h2>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {tujuanStratifikasi.map((t, i) => (
                  <Reveal
                    key={t.title}
                    delay={i * 0.06}
                    className="rounded-2xl border border-ink-100 bg-white p-5 transition hover:shadow-lg hover:shadow-ink-900/5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Target size={18} />
                    </span>
                    <p className="mt-3 font-display font-semibold text-ink-900">{t.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{t.description}</p>
                  </Reveal>
                ))}
              </div>
            </section>

            <Reveal
              as="section"
              id="cara-penilaian"
              className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white p-7 sm:p-10"
            >
              <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">Cara Penilaian</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-600 sm:text-base">{caraPenilaian.lead}</p>
              <ul className="mt-5 space-y-3">
                {caraPenilaian.rules.map((rule, i) => (
                  <li key={rule.level} className="flex gap-3 rounded-xl bg-ink-50/60 p-3.5">
                    <span className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ${strataLevels[i].badge}`} />
                    <span className="text-sm leading-relaxed text-ink-600">{rule.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              as="section"
              className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-sky-600 p-7 text-center text-white sm:p-10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun-300">Alat Penilaian Resmi</p>
              <h2 className="mx-auto mt-2 max-w-xl font-display text-2xl font-semibold text-balance sm:text-3xl">
                Cek dan catat capaian stratifikasi sekolah Anda di Dasbor Stratifikasi UKS/M
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-balance text-white/80">
                Proses penilaian dan pencatatan stratifikasi UKS/M dilakukan melalui laman resmi{" "}
                <span className="font-semibold">stratifikasiuks.org</span>.
              </p>
              <div className="mt-6">
                <DashboardCta />
              </div>
            </Reveal>

            <Reveal
              as="section"
              id="indikator"
              className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white p-7 sm:p-10"
            >
              <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">Indikator per Strata</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-600 sm:text-base">{indikator.lead}</p>
              <div className="mt-4 flex gap-2.5 rounded-xl border border-sun-200 bg-sun-50 p-3.5 text-sm text-sun-700">
                <Info size={17} className="mt-0.5 shrink-0" />
                <span>{indikator.jenjangNote}</span>
              </div>
              <div className="mt-6">
                <StrataRubricAccordion />
              </div>
            </Reveal>
          </div>

          <aside className="lg:pt-2">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-ink-100 bg-white p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">Loncat ke</p>
                <ul className="space-y-1">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block rounded-lg px-2.5 py-2 text-sm text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-ink-100 pt-4">
                  <Link to="/uksm/tentang" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                    ← Kembali ke UKS/M
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl bg-brand-700 p-5">
                <p className="text-sm font-semibold text-white">Dasbor Stratifikasi</p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/75">
                  Input dan lihat hasil stratifikasi sekolah secara resmi.
                </p>
                <div className="mt-3">
                  <DashboardCta compact />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
