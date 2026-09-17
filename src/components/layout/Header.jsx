import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, Search, Phone } from "lucide-react";
import { gsap } from "../../lib/gsap";

export default function Header({ onOpenExplore }) {
  const [scrolled, setScrolled] = useState(false);
  const ctaRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // A single, tasteful attention pulse the first time a visitor lands, so the
    // new navigation model gets discovered instead of ignored like a static button.
    if (sessionStorage.getItem("uksm_explore_seen")) return;
    const t = setTimeout(() => {
      gsap.fromTo(
        ctaRef.current,
        { scale: 1 },
        { scale: 1.06, duration: 0.55, ease: "power1.inOut", yoyo: true, repeat: 3 }
      );
      sessionStorage.setItem("uksm_explore_seen", "1");
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-2 sm:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <img src="/images/brand/logo-uks.png" alt="Logo UKS/M" className="h-8 w-auto shrink-0 sm:h-10" />
          <span
            className={`hidden whitespace-nowrap font-display text-sm font-semibold leading-tight sm:block sm:text-base ${
              scrolled ? "text-ink-900" : "text-white"
            }`}
          >
            Portal UKS/M
            <span className={`block text-[11px] font-medium ${scrolled ? "text-ink-400" : "text-white/75"}`}>
              Sekolah Sehat, Anak Hebat
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/kontak"
            className={`hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition sm:flex ${
              scrolled ? "text-ink-600 hover:bg-ink-50" : "text-white/90 hover:bg-white/10"
            }`}
          >
            <Phone size={15} /> Kontak
          </Link>
          <button
            onClick={onOpenExplore}
            aria-label="Cari"
            className={`rounded-full p-2.5 transition sm:hidden ${
              scrolled ? "text-ink-600 hover:bg-ink-50" : "text-white hover:bg-white/10"
            }`}
          >
            <Search size={19} />
          </button>
          <button
            ref={ctaRef}
            onClick={onOpenExplore}
            className="flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 hover:bg-brand-600 sm:px-5"
          >
            <LayoutGrid size={17} />
            <span className="hidden sm:inline">Jelajahi Portal</span>
            <span className="sm:hidden">Jelajahi</span>
          </button>
        </div>
      </div>
    </header>
  );
}
