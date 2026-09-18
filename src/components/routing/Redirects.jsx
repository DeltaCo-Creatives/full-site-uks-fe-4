import { Navigate, useParams } from "react-router-dom";
import { navSections } from "../../data/nav";
import { triasPillarAnchors, triasSubItemAliases } from "../../data/redirects";
import { slugify } from "../ui/ContentBlocks";
import { subItemAnchor } from "../../lib/anchors";
import NotFound from "../../pages/NotFound";

const triasSubItems = navSections.find((s) => s.key === "uksm").groups.flatMap((g) => g.subItems);

// Resolves a Trias pillar or sub-program slug (prod's /program/{slug}, the earlier
// /trias/{slug}) to its anchor on the single Trias page.
function triasTarget(slug) {
  if (triasPillarAnchors[slug]) return `/uksm/trias#${triasPillarAnchors[slug]}`;
  const sub = triasSubItemAliases[slug] ?? triasSubItems.find((s) => slugify(s) === slug);
  return sub ? `/uksm/trias#${subItemAnchor(sub)}` : null;
}

export function TriasSlugRedirect() {
  const { slug } = useParams();
  const target = triasTarget(slug);
  return target ? <Navigate to={target} replace /> : <NotFound />;
}

export function ParamRedirect({ to }) {
  const params = useParams();
  const target = to.replace(/:(\w+)/g, (_, key) => encodeURIComponent(params[key] ?? ""));
  return <Navigate to={target} replace />;
}
