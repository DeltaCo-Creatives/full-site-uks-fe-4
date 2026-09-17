import PageHero from "../../components/ui/PageHero";
import PublikasiGrid from "../../components/ui/PublikasiGrid";
import { latestVideo } from "../../data/home";

export default function Video() {
  return (
    <>
      <PageHero
        eyebrow="Publikasi"
        title="Video"
        description="Video edukasi dan dokumentasi kegiatan Gerakan Sekolah Sehat."
        crumbs={[{ label: "Publikasi" }, { label: "Video" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <PublikasiGrid items={latestVideo} variant="video" />
      </section>
    </>
  );
}
