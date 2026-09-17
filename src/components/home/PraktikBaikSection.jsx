import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import NewsCard from "../ui/NewsCard";
import { latestPraktikBaik } from "../../data/home";

export default function PraktikBaikSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Cerita Inspiratif"
          title="Praktik Baik"
          action={
            <Link
              to="/informasi/praktik-baik"
              className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5 transition-all"
            >
              Semua Praktik Baik <ArrowRight size={15} />
            </Link>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestPraktikBaik.map((item, i) => (
            <NewsCard key={item.slug} item={item} delay={i * 0.06} tagColor="sun" />
          ))}
        </div>
      </div>
    </section>
  );
}
