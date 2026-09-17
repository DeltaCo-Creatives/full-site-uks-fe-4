import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Award, Syringe, Smile, TreePine, ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { sekolahSehatFokus } from "../../data/home";

const ICONS = { Heart, Award, Syringe, Smile, TreePine };

export default function SekolahSehatSection() {
  const [active, setActive] = useState(0);
  const current = sekolahSehatFokus[active];
  const Icon = ICONS[current.icon];

  return (
    <section className="bg-brand-50/60 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Gerakan Sekolah Sehat"
          title="5 Fokus Pembiasaan Sekolah Sehat"
          description="Satu gerakan besar, lima kebiasaan yang saling melengkapi — sentuh setiap ikon untuk melihat fokusnya."
        />

        <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {sekolahSehatFokus.map((f, i) => {
              const FIcon = ICONS[f.icon];
              const isActive = i === active;
              return (
                <button
                  key={f.title}
                  onClick={() => setActive(i)}
                  className={`flex w-28 flex-col items-center gap-2 rounded-2xl border p-4 text-center transition sm:w-32 ${
                    isActive
                      ? "border-brand-500 bg-white shadow-lg shadow-brand-900/10 -translate-y-1"
                      : "border-transparent bg-white/60 hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
                      isActive ? "bg-brand-500 text-white" : "bg-brand-100 text-brand-600"
                    }`}
                  >
                    <FIcon size={20} />
                  </span>
                  <span className="text-xs font-semibold text-ink-700">{f.title}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-brand-900/5 sm:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white">
              <Icon size={26} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">{current.title}</h3>
            <p className="mt-3 text-ink-500">{current.description}</p>
            <Link
              to={`/sekolah-sehat/gerakan-sekolah-sehat#${current.anchor}`}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5 transition-all"
            >
              Baca detail Gerakan Sekolah Sehat <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
