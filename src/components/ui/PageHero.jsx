import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, description, crumbs = [] }) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-sky-600 pb-14 pt-28 text-white sm:pb-16 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, white 0, transparent 45%), radial-gradient(circle at 85% 80%, white 0, transparent 40%)",
        }}
      />
      <div className="container-page relative">
        <Reveal>
          <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/70">
            <Link to="/" className="flex items-center gap-1 hover:text-white">
              <Home size={13} /> Beranda
            </Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                {c.href ? (
                  <Link to={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-sun-300">{eyebrow}</p>
          )}
          <h1 className="max-w-3xl font-display text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-balance text-white/85 sm:text-lg">{description}</p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
