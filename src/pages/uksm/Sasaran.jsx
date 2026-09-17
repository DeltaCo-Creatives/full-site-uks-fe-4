import ContentPage from "../../components/ui/ContentPage";
import { tentangUks } from "../../data/content/tentangUks";

export default function Sasaran() {
  return (
    <ContentPage
      eyebrow="UKS/M"
      title="Sasaran UKS/M"
      crumbs={[{ label: "UKS/M" }, { label: "Sasaran" }]}
      blocks={tentangUks.sasaran.blocks}
    />
  );
}
