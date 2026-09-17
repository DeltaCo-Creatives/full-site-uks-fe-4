import PageHero from "../../components/ui/PageHero";
import PublikasiGrid from "../../components/ui/PublikasiGrid";
import { infografis } from "../../data/home";

export default function Infografis() {
  return (
    <>
      <PageHero
        eyebrow="Publikasi"
        title="Infografis"
        description="Poster dan infografis edukatif seputar 7KAIH, MBG, dan kesehatan sekolah."
        crumbs={[{ label: "Publikasi" }, { label: "Infografis" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <PublikasiGrid items={infografis} variant="info" />
      </section>
    </>
  );
}
