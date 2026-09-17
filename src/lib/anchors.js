import { slugify } from "../components/ui/ContentBlocks";

// The real production content for "Pendidikan Kesehatan" has an authoring mistake:
// its "C." sub-heading is literally titled "Pendidikan Kesehatan" (a copy-paste slip)
// where every other section on the same page — and the real nav menu itself — calls
// this topic "Pendidikan Gizi". We keep the page's visible text exactly as authored
// (see src/data/content/programContent.js), but ContentBlocks disambiguates the
// resulting duplicate id by suffixing repeats ("-2", "-3", ...). This override map
// points the nav/search anchor at that resolved id so the link still lands correctly.
const ANCHOR_OVERRIDES = {
  "Pendidikan Gizi": "pendidikan-kesehatan-2",
  // The nav menu's official label is longer than the body heading actually
  // authored on the source page ("A. Penjaringan Kesehatan").
  "Penjaringan Kesehatan dan Pemeriksaan Berkala": "penjaringan-kesehatan",
};

export function subItemAnchor(sub) {
  return ANCHOR_OVERRIDES[sub] ?? slugify(sub);
}

export function subItemHref(groupHref, sub) {
  return `${groupHref}#${subItemAnchor(sub)}`;
}
