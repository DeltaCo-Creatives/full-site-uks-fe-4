import ContentPage from "../../components/ui/ContentPage";
import { programContent } from "../../data/content/programContent";

export default function Manajemen() {
  return (
    <ContentPage
      eyebrow="UKS/M"
      title="Manajemen UKS/M"
      description="Lima komponen tata kelola pelaksanaan Trias UKS/M di satuan pendidikan."
      crumbs={[{ label: "UKS/M" }, { label: "Manajemen UKS/M" }]}
      blocks={programContent.manajemenUksM.blocks}
    />
  );
}
