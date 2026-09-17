import PageHero from "../../components/ui/PageHero";
import NewsCard from "../../components/ui/NewsCard";
import { latestBerita } from "../../data/home";

export default function Berita() {
  return (
    <>
      <PageHero
        eyebrow="Informasi"
        title="Berita"
        description="Kabar dan siaran pers resmi seputar UKS/M, gizi sekolah, dan kesehatan peserta didik."
        crumbs={[{ label: "Informasi" }, { label: "Berita" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestBerita.map((item, i) => (
            <NewsCard key={item.slug} item={item} delay={i * 0.05} />
          ))}
        </div>
      </section>
    </>
  );
}
