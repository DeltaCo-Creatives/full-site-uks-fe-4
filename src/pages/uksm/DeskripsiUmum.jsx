import ContentPage from "../../components/ui/ContentPage";
import { tentangUks } from "../../data/content/tentangUks";

export default function DeskripsiUmum() {
  return (
    <ContentPage
      eyebrow="UKS/M"
      title="Deskripsi Umum"
      description="Mengenal apa itu Usaha Kesehatan Sekolah/Madrasah dan tiga pilar pelaksanaannya."
      crumbs={[{ label: "UKS/M" }, { label: "Deskripsi Umum" }]}
      blocks={tentangUks.deskripsiUmum.blocks}
    />
  );
}
