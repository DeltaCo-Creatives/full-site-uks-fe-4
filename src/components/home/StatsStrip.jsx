import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";
import { stats } from "../../data/site";

export default function StatsStrip() {
  return (
    <section className="bg-ink-900 py-16 text-white">
      <div className="container-page grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.key} delay={i * 0.08} className="text-center sm:text-left">
            <p className="font-display text-3xl font-bold text-brand-300 sm:text-4xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1.5 text-sm text-white/60">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
