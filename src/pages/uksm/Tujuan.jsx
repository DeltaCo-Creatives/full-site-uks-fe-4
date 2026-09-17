import ContentPage from "../../components/ui/ContentPage";
import { tentangUks } from "../../data/content/tentangUks";

export default function Tujuan() {
  return (
    <ContentPage
      eyebrow="UKS/M"
      title="Tujuan UKS/M"
      crumbs={[{ label: "UKS/M" }, { label: "Tujuan" }]}
      blocks={tentangUks.tujuan.blocks}
    />
  );
}
