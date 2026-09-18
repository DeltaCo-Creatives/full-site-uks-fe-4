import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import { mitraPages } from "../../data/content/mitraPages";
import { Building2, CheckCircle2, ClipboardList, ArrowRight } from "lucide-react";

const { bidangUsaha, bentukDukungan, pendaftaran } = mitraPages.tentangMitra;

export default function TentangMitra() {
  return (
    <>
      <PageHero
        eyebrow="Mitra"
        title="Tentang Mitra UKS/M"
        description="Bidang usaha yang dapat bermitra, bentuk dukungan yang diberikan, dan status pendaftaran mitra UKS/M."
        crumbs={[{ label: "Mitra" }, { label: "Tentang Mitra UKS/M" }]}
      />

      <section className="container-page py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          <Reveal id="bidang-usaha" className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white p-7 sm:p-8">
            <div className="flex items-center gap-2.5">
              <Building2 size={20} className="text-brand-500" />
              <h2 className="font-display text-xl font-semibold text-ink-900 sm:text-2xl">Bidang Usaha Mitra</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Mitra UKS/M berasal dari berbagai bidang usaha, di antaranya:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {bidangUsaha.map((b) => (
                <span key={b} className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700">
                  {b}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal id="bentuk-dukungan" className="scroll-mt-28 rounded-3xl border border-ink-100 bg-white p-7 sm:p-8">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={20} className="text-brand-500" />
              <h2 className="font-display text-xl font-semibold text-ink-900 sm:text-2xl">Bentuk Dukungan Mitra</h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {bentukDukungan.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-600">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal id="pendaftaran-mitra" className="scroll-mt-28 rounded-3xl border border-brand-200 bg-brand-50/60 p-7 sm:p-8">
            <div className="flex items-center gap-2.5">
              <ClipboardList size={20} className="text-brand-600" />
              <h2 className="font-display text-xl font-semibold text-ink-900 sm:text-2xl">Pendaftaran Mitra</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">{pendaftaran.status}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Kriteria dan ketentuan kerja sama mitra dijelaskan lengkap pada Panduan Kemitraan. Untuk menyampaikan
              minat bermitra, hubungi UKS/M melalui halaman Kontak.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/mitra/panduan-kemitraan"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Panduan Kemitraan <ArrowRight size={15} />
              </Link>
              <Link
                to="/mitra/mitra-kami"
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                Lihat Mitra Kami <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
