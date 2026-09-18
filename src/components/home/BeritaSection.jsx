import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import NewsCard from "../ui/NewsCard";
import { latestBerita } from "../../data/home";
import { getSlug } from "../../lib/slug";

export default function BeritaSection() {
  return (
    <section className="container-page py-20 sm:py-24">
      <SectionHeading
        eyebrow="Kabar Terbaru"
        title="Berita"
        action={
          <Link
            to="/informasi/berita"
            className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5 transition-all"
          >
            Semua Berita <ArrowRight size={15} />
          </Link>
        }
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {latestBerita.map((item, i) => (
          <NewsCard key={item.slug} item={item} href={`/informasi/berita/${getSlug(item)}`} delay={i * 0.06} />
        ))}
      </div>
    </section>
  );
}
