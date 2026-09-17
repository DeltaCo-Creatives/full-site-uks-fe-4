import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { site } from "../../data/site";
import { navSections } from "../../data/nav";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 sm:col-span-3 lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/images/brand/logo-uks.png" alt="Logo UKS/M" className="h-10 w-auto" />
            <span className="font-display text-base font-semibold text-ink-900">Portal UKS/M</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">{site.metaDescription}</p>
          <div className="mt-5 space-y-2.5 text-sm text-ink-500">
            <a href={`mailto:${site.contactEmail}`} className="flex items-start gap-2 hover:text-brand-600">
              <Mail size={16} className="mt-0.5 shrink-0" /> {site.contactEmail}
            </a>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" /> {site.contactAddress}
            </p>
          </div>
        </div>

        {navSections.map((section) => (
          <div key={section.key}>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">{section.title}</p>
            <ul className="space-y-2">
              {section.items.slice(0, 6).map((item) =>
                item.external ? (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-sm text-ink-500 hover:text-brand-600">
                      {item.title}
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link to={item.href} className="text-sm text-ink-500 hover:text-brand-600">
                      {item.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink-100">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.ministry}
          </p>
          <p>
            Mockup desain independen berdasarkan konten publik{" "}
            <a href="https://uks.kemendikdasmen.go.id" target="_blank" rel="noreferrer" className="underline hover:text-brand-600">
              uks.kemendikdasmen.go.id
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
