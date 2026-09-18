import { useParams } from "react-router-dom";
import DetailLayout from "../../components/informasi/DetailLayout";
import NotFound from "../NotFound";
import { uptBercerita } from "../../data/informasi";
import { findBySlug, getSlug } from "../../lib/slug";

export default function UptBerceritaDetail() {
  const { slug } = useParams();
  const item = findBySlug(uptBercerita, slug);
  if (!item) return <NotFound />;

  const related = uptBercerita.filter((b) => getSlug(b) !== slug).slice(0, 3);

  return (
    <DetailLayout
      listLabel="UPT Bercerita"
      listHref="/informasi/upt-bercerita"
      tagColor="sky"
      item={{
        judul: item.judul,
        ringkasan: item.ringkasan,
        kategori: item.kategori,
        date: item.tanggal,
      }}
      related={related.map((r) => ({
        judul: r.judul,
        ringkasan: r.ringkasan,
        kategori: r.kategori,
        date: r.tanggal,
        slug: getSlug(r),
      }))}
      getHref={(r) => `/informasi/upt-bercerita/${r.slug}`}
    />
  );
}
