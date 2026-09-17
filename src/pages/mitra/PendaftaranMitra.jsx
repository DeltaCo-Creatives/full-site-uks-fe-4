import ContentPage from "../../components/ui/ContentPage";
import { mitraPages } from "../../data/content/mitraPages";

export default function PendaftaranMitra() {
  return (
    <ContentPage
      eyebrow="Mitra"
      title="Pendaftaran Mitra"
      crumbs={[{ label: "Mitra" }, { label: "Pendaftaran Mitra" }]}
      blocks={mitraPages.pendaftaranMitra.blocks}
    />
  );
}
