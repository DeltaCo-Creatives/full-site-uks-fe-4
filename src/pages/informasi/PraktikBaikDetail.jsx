import { useParams } from "react-router-dom";
import DetailLayout from "../../components/informasi/DetailLayout";
import NotFound from "../NotFound";
import { latestPraktikBaik } from "../../data/home";
import { findBySlug, getSlug } from "../../lib/slug";

export default function PraktikBaikDetail() {
  const { slug } = useParams();
  const item = findBySlug(latestPraktikBaik, slug);
  if (!item) return <NotFound />;

  const related = latestPraktikBaik.filter((b) => getSlug(b) !== slug).slice(0, 3);

  return (
    <DetailLayout
      listLabel="Praktik Baik"
      listHref="/informasi/praktik-baik"
      tagColor="sun"
      item={{
        judul: item.judul,
        ringkasan: item.ringkasan,
        gambar: item.gambar,
        kategori: item.kategori,
        date: item.published_at,
      }}
      related={related.map((r) => ({
        judul: r.judul,
        ringkasan: r.ringkasan,
        gambar: r.gambar,
        kategori: r.kategori,
        date: r.published_at,
        slug: getSlug(r),
      }))}
      getHref={(r) => `/informasi/praktik-baik/${r.slug}`}
    />
  );
}
