import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { ministryLinks } from "../../data/home";

export default function TautanTerkaitSection() {
  return (
    <section id="tautan-terkait" className="bg-brand-50/60 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Kementerian & Lembaga"
          title="Tautan Terkait"
          description="Kementerian yang bersinergi dalam pelaksanaan Usaha Kesehatan Sekolah/Madrasah."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ministryLinks.map((m, i) => (
            <Reveal
              key={m.nama}
              delay={i * 0.06}
              as="a"
              href={m.url}
              target="_blank"
              rel="noreferrer"
              className="flex h-28 items-center justify-center rounded-2xl border border-ink-100 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10"
            >
              <img src={m.logo} alt={m.nama} className="max-h-14 max-w-full object-contain" loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
