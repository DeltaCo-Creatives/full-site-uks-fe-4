import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import { agendaList } from "../../data/informasi";
import { CalendarDays } from "lucide-react";

export default function Agenda() {
  return (
    <>
      <PageHero
        eyebrow="Informasi"
        title="Agenda"
        description="Rangkaian kegiatan dan momen penting perjalanan Gerakan Sekolah Sehat."
        crumbs={[{ label: "Informasi" }, { label: "Agenda" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agendaList.map((item, i) => (
            <Reveal
              key={item.judul}
              delay={i * 0.04}
              className="overflow-hidden rounded-2xl border border-ink-100 bg-white transition hover:shadow-lg hover:shadow-ink-900/5"
            >
              {item.gambar ? (
                <div className="aspect-video overflow-hidden bg-ink-50">
                  <img src={item.gambar} alt={item.judul} loading="lazy" className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="flex aspect-video items-center justify-center bg-brand-50 text-brand-300">
                  <CalendarDays size={32} />
                </div>
              )}
              <div className="p-5">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{item.jenis}</span>
                <h3 className="mt-2 line-clamp-2 font-display text-base font-semibold text-ink-900">{item.judul}</h3>
                <p className="mt-1.5 text-xs text-ink-400">
                  {new Date(item.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
