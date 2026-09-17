import PageHero from "../../components/ui/PageHero";
import PublikasiGrid from "../../components/ui/PublikasiGrid";
import { bukuPanduan } from "../../data/home";

export default function BukuPanduan() {
  return (
    <>
      <PageHero
        eyebrow="Publikasi"
        title="Buku Panduan"
        description="Buku pedoman dan modul resmi untuk mendukung pelaksanaan UKS/M di satuan pendidikan."
        crumbs={[{ label: "Publikasi" }, { label: "Buku Panduan" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <PublikasiGrid items={bukuPanduan} variant="buku" />
      </section>
    </>
  );
}
