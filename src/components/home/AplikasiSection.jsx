import { Smartphone, ExternalLink } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { aplikasiList } from "../../data/home";

export default function AplikasiSection() {
  return (
    <section className="container-page py-20 sm:py-24">
      <SectionHeading
        eyebrow="Ekosistem Digital"
        title="Aplikasi Terkait UKS/M"
        description="Aplikasi pendukung yang dikembangkan bersama mitra untuk kesehatan jiwa dan reproduksi peserta didik."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {aplikasiList.map((app, i) => (
          <Reveal
            key={app.nama}
            delay={i * 0.08}
            className="flex items-center gap-5 rounded-3xl border border-ink-100 bg-white p-6 transition hover:shadow-xl hover:shadow-ink-900/5"
          >
            <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-brand-50 text-brand-600">
              {app.logo ? (
                <img src={app.logo} alt={app.nama} className="h-full w-full object-cover" />
              ) : (
                <Smartphone size={28} />
              )}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-lg font-semibold text-ink-900">{app.nama}</h3>
              <p className="text-xs font-medium text-ink-400">oleh {app.client}</p>
              <p className="mt-2 line-clamp-2 text-sm text-ink-500">{app.deskripsi}</p>
              <a
                href={app.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Unduh Aplikasi <ExternalLink size={14} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
