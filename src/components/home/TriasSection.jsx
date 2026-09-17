import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, HeartPulse, Trees } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { triasPillars } from "../../data/home";

const ICONS = [GraduationCap, HeartPulse, Trees];

export default function TriasSection() {
  return (
    <section className="container-page py-20 sm:py-24">
      <SectionHeading
        eyebrow="3 Pilar Pelaksanaan"
        title="Trias UKS/M"
        description="Tiga pilar utama yang menopang seluruh pelaksanaan Usaha Kesehatan Sekolah/Madrasah di satuan pendidikan."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {triasPillars.map((pillar, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <Link
                to={pillar.href}
                className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-brand-900/10"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                    <Icon size={26} />
                  </span>
                  <span className="font-display text-3xl font-bold text-ink-100 transition group-hover:text-brand-100">
                    0{pillar.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink-900">{pillar.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-400">{pillar.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-4 text-sm font-semibold text-brand-600">
                  <span>{pillar.indicatorCount} indikator</span>
                  <span className="flex items-center gap-1 transition group-hover:gap-2">
                    Selengkapnya <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
