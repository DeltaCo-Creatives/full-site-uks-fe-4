import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { programPrioritas } from "../../data/home";

export default function ProgramPrioritasSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Fokus Saat Ini"
          title="Program Prioritas"
          description="Tiga program nasional yang sedang digencarkan untuk mewujudkan generasi sekolah yang sehat."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {programPrioritas.map((p, i) => (
            <Reveal key={p.href} delay={i * 0.1}>
              <Link to={p.href} className="group relative block h-90 overflow-hidden rounded-3xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-semibold text-white text-balance">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/75 text-balance">{p.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 opacity-0 transition group-hover:opacity-100">
                    Pelajari lebih lanjut <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
