import ContentPage from "../../components/ui/ContentPage";
import { mitraPages } from "../../data/content/mitraPages";

export default function PanduanKemitraan() {
  return (
    <ContentPage
      eyebrow="Mitra"
      title="Panduan Kemitraan"
      description="Bentuk kerja sama, ketentuan, manfaat, dan kriteria mitra dalam Kemitraan Sekolah Sehat (KSS)."
      crumbs={[{ label: "Mitra" }, { label: "Panduan Kemitraan" }]}
      blocks={mitraPages.panduanKemitraan.blocks}
    />
  );
}
