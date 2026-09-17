import ContentPage from "../../components/ui/ContentPage";
import { sekolahSehatContent } from "../../data/content/sekolahSehatContent";

export default function BahanAdvokasi() {
  return (
    <ContentPage
      eyebrow="Sekolah Sehat"
      title="Bahan Advokasi GSS"
      description="Dasar hukum dan materi kampanye resmi Gerakan Sekolah Sehat."
      crumbs={[{ label: "Sekolah Sehat" }, { label: "Bahan Advokasi" }]}
      blocks={sekolahSehatContent.bahanAdvokasi.blocks}
    />
  );
}
