import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, ArrowDown } from "lucide-react";
import { gsap } from "../../lib/gsap";
import { heroSlides } from "../../data/home";
import { site } from "../../data/site";
import { useExplore } from "../../context/ExploreContext";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const imgRefs = useRef([]);
  const openExplore = useExplore();

  useEffect(() => {
    const el = imgRefs.current[index];
    if (el) {
      gsap.fromTo(el, { scale: 1.08 }, { scale: 1, duration: 6, ease: "power1.out" });
    }
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, [index]);

  return (
    <section className="relative flex h-[92vh] min-h-[560px] w-full items-center overflow-hidden bg-ink-900">
      {heroSlides.map((src, i) => (
        <img
          key={src}
          ref={(el) => (imgRefs.current[i] = el)}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/50 via-transparent to-transparent" />

      <div className="container-page relative">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 ring-1 ring-white/20 backdrop-blur-sm">
            {site.ministry}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] text-balance text-white sm:text-5xl md:text-6xl">
            Sekolah Sehat, <span className="text-brand-300">Anak Indonesia</span> Hebat
          </h1>
          <p className="mt-5 max-w-lg text-balance text-white/85 sm:text-lg">{site.metaDescription}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={openExplore}
              className="group flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 font-semibold text-white shadow-xl shadow-brand-900/30 transition hover:-translate-y-0.5 hover:bg-brand-400"
            >
              <LayoutGrid size={18} />
              Jelajahi Portal
            </button>
            <Link
              to="/informasi/berita"
              className="rounded-full bg-white/10 px-6 py-3.5 font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm transition hover:bg-white/20"
            >
              Berita Terbaru
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 sm:flex">
        <span className="text-xs font-medium uppercase tracking-widest">Gulir</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>

      <div className="absolute bottom-7 right-5 flex gap-1.5 sm:right-8">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-7 bg-brand-400" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
