import PageHero from "../../components/ui/PageHero";
import NewsCard from "../../components/ui/NewsCard";
import { latestPraktikBaik } from "../../data/home";
import { getSlug } from "../../lib/slug";

export default function PraktikBaik() {
  return (
    <>
      <PageHero
        eyebrow="Informasi"
        title="Praktik Baik"
        description="Cerita inspiratif pelaksanaan UKS/M dan program prioritas dari satuan pendidikan di seluruh Indonesia."
        crumbs={[{ label: "Informasi" }, { label: "Praktik Baik" }]}
      />
      <section className="container-page py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPraktikBaik.map((item, i) => (
            <NewsCard
              key={item.slug}
              item={item}
              href={`/informasi/praktik-baik/${getSlug(item)}`}
              delay={i * 0.05}
              tagColor="sun"
            />
          ))}
        </div>
      </section>
    </>
  );
}
