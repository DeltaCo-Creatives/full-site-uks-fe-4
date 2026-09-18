import { useState } from "react";
import PageHero from "../../components/ui/PageHero";
import Reveal from "../../components/ui/Reveal";
import SaihGalaKreasi from "../../components/program/SaihGalaKreasi";
import { kaih } from "../../data/programs";

export default function Kaih() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Program Prioritas"
        title={kaih.title}
        description={kaih.intro}
        crumbs={[{ label: "Program" }, { label: kaih.shortTitle }]}
      />

      <section className="container-page py-14 sm:py-16">
        <Reveal className="mx-auto max-w-3xl text-center text-ink-500">
          <p className="leading-relaxed">{kaih.context}</p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          {kaih.habits.map((h, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={h.title} delay={i * 0.04} className="border-b border-ink-100">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-5 py-5 text-left"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-display text-lg font-bold transition ${
                      isOpen ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className={`flex-1 font-display text-lg font-semibold transition ${isOpen ? "text-brand-700" : "text-ink-900"}`}>
                    {h.title}
                  </span>
                  <span className={`text-2xl text-ink-300 transition-transform ${isOpen ? "rotate-45 text-brand-500" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="ml-16 pb-6 pr-4 text-ink-500 leading-relaxed">{h.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-14 max-w-2xl rounded-3xl bg-gradient-to-br from-brand-500 to-sky-600 p-8 text-center text-white sm:p-10">
          <h3 className="font-display text-2xl font-semibold">Yuk, Praktikkan 7KAIH!</h3>
          <p className="mt-2 text-white/85">
            Ajak keluarga, teman, dan sekolahmu membiasakan tujuh kebiasaan baik ini setiap hari — mulai dari hari ini!
          </p>
        </Reveal>
      </section>

      <div className="border-t border-ink-100 bg-ink-50/40">
        <SaihGalaKreasi />
      </div>
    </>
  );
}
