import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { tautanGroups } from "../data/nav";
import { ExternalLink } from "lucide-react";

export default function Tautan() {
  return (
    <>
      <PageHero
        eyebrow="Tautan"
        title="Tautan Resmi"
        description="Kementerian dan direktorat mitra yang terlibat langsung dalam ekosistem UKS/M."
        crumbs={[{ label: "Tautan" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {tautanGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06} className="rounded-2xl border border-ink-100 bg-white p-6">
              <h3 className="mb-3 font-display text-lg font-semibold text-ink-900">{group.title}</h3>
              <div className="space-y-1.5">
                {group.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
                  >
                    {link.title} <ExternalLink size={14} className="shrink-0 text-ink-300" />
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
