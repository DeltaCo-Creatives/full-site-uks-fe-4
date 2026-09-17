import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { partners } from "../../data/home";

export default function MitraMarquee() {
  const loop = [...partners, ...partners];

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Kolaborasi Penta-Helix"
          title="Mitra UKS/M"
          description="Kementerian, lembaga, dan mitra pembangunan yang bergotong royong mewujudkan Sekolah Sehat."
          action={
            <Link to="/mitra/mitra-kami" className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5 transition-all">
              Lihat semua mitra <ArrowRight size={15} />
            </Link>
          }
        />
      </div>

      <Reveal className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />
        <div className="marquee-track flex w-max gap-10 py-4">
          {loop.map((p, i) => (
            <a
              key={`${p.nama}-${i}`}
              href={p.url ?? undefined}
              target={p.url ? "_blank" : undefined}
              rel="noreferrer"
              className={`flex h-16 w-36 shrink-0 items-center justify-center rounded-xl bg-ink-50 p-3 grayscale transition hover:grayscale-0 ${
                p.url ? "cursor-pointer" : "cursor-default"
              }`}
              title={p.nama}
            >
              <img src={p.logo} alt={p.nama} className="max-h-10 max-w-full object-contain" loading="lazy" />
            </a>
          ))}
        </div>
      </Reveal>

      <style>{`
        .marquee-track {
          animation: marquee 42s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
