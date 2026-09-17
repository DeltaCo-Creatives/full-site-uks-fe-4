import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { site } from "../data/site";
import { Mail, MapPin, Building2 } from "lucide-react";

export default function Kontak() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Hubungi Kami"
        description="Tim Direktorat Jenderal PAUD dan Dikdasmen siap membantu pertanyaan seputar UKS/M."
        crumbs={[{ label: "Kontak" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          <Reveal className="flex flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Mail size={20} />
            </span>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Email</p>
            <a href={`mailto:${site.contactEmail}`} className="font-medium text-ink-800 hover:text-brand-600">
              {site.contactEmail}
            </a>
          </Reveal>

          <Reveal delay={0.06} className="flex flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
              <Building2 size={20} />
            </span>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Kementerian</p>
            <p className="font-medium text-ink-800">{site.ministry}</p>
          </Reveal>

          <Reveal delay={0.12} className="sm:col-span-2 flex flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sun-50 text-sun-600">
              <MapPin size={20} />
            </span>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-400">Alamat</p>
            <p className="font-medium text-ink-800">{site.contactAddress}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
