import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import { aplikasiList } from "../../data/home";
import { Smartphone, ExternalLink } from "lucide-react";

export default function Aplikasi() {
  return (
    <>
      <PageHero
        eyebrow="Informasi"
        title="Aplikasi"
        description="Aplikasi digital yang dikembangkan bersama mitra untuk mendukung kesehatan peserta didik."
        crumbs={[{ label: "Informasi" }, { label: "Aplikasi" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {aplikasiList.map((app, i) => (
            <Reveal
              key={app.nama}
              delay={i * 0.08}
              className="flex flex-col items-center rounded-3xl border border-ink-100 bg-white p-8 text-center"
            >
              <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl bg-brand-50 text-brand-600">
                {app.logo ? <img src={app.logo} alt={app.nama} className="h-full w-full object-cover" /> : <Smartphone size={32} />}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{app.nama}</h3>
              <p className="text-xs font-medium text-ink-400">oleh {app.client}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{app.deskripsi}</p>
              {app.qr && <img src={app.qr} alt={`QR ${app.nama}`} className="mt-5 h-28 w-28 rounded-xl border border-ink-100 p-1.5" />}
              <a
                href={app.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Unduh Aplikasi <ExternalLink size={14} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
