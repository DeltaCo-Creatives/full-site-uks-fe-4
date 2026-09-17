import { useState } from "react";
import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import { aktivitasMitra } from "../../data/informasi";
import { ChevronDown } from "lucide-react";

export default function AktivitasMitra() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Mitra"
        title="Aktivitas Mitra"
        description="Kabar kolaborasi terbaru bersama mitra pembangunan Sekolah Sehat."
        crumbs={[{ label: "Mitra" }, { label: "Aktivitas Mitra" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-3">
          {aktivitasMitra.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.judul} delay={i * 0.05} className="rounded-2xl border border-ink-100 bg-white">
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-start gap-4 p-6 text-left">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-ink-400">
                      {new Date(item.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                    <h3 className="mt-1 font-display text-base font-semibold text-ink-900 sm:text-lg">{item.judul}</h3>
                  </div>
                  <ChevronDown size={18} className={`mt-1 shrink-0 text-ink-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <p className="px-6 pb-6 text-sm leading-relaxed text-ink-500">{item.ringkasan}</p>}
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
