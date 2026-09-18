import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { strataLevels, indikator } from "../../data/content/stratifikasi";

export default function StratifikasiSection() {
  return (
    <section id="stratifikasi" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Alat Ukur Trias UKS"
          title="Stratifikasi UKS/M"
          description="Empat strata capaian pelaksanaan UKS/M di satuan pendidikan, dari Minimal hingga Paripurna."
          action={
            <Link
              to="/uksm/stratifikasi"
              className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5 transition-all"
            >
              Lihat Detail <ArrowRight size={15} />
            </Link>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strataLevels.map((level, i) => (
            <Reveal key={level.key} delay={i * 0.08}>
              <Link
                to="/uksm/stratifikasi"
                className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-brand-900/10"
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${level.badge}`}>
                    <Award size={22} />
                  </span>
                  <span className="font-display text-2xl font-bold text-ink-100">0{level.order}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{level.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-400">
                  Memenuhi seluruh indikator {indikator.categoryLabels.join(", ")} pada kelompok {level.name.toLowerCase()}.
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
