import { useParams } from "react-router-dom";
import DetailLayout from "../../components/informasi/DetailLayout";
import NotFound from "../NotFound";
import { latestBerita } from "../../data/home";
import { findBySlug, getSlug } from "../../lib/slug";

export default function BeritaDetail() {
  const { slug } = useParams();
  const item = findBySlug(latestBerita, slug);
  if (!item) return <NotFound />;

  const related = latestBerita.filter((b) => getSlug(b) !== slug).slice(0, 3);

  return (
    <DetailLayout
      listLabel="Berita"
      listHref="/informasi/berita"
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
      getHref={(r) => `/informasi/berita/${r.slug}`}
    />
  );
}
