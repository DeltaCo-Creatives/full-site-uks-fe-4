import { slugify } from "../components/ui/ContentBlocks";

// The real production content for "Pendidikan Kesehatan" has an authoring mistake:
// its "C." sub-heading is literally titled "Pendidikan Kesehatan" (a copy-paste slip)
// where every other section on the same page — and the real nav menu itself — calls
// this topic "Pendidikan Gizi". We keep the page's visible text exactly as authored
// (see src/data/content/programContent.js), but ContentBlocks disambiguates the
// resulting duplicate id by suffixing repeats ("-2", "-3", ...). This override map
// points the nav/search anchor at that resolved id so the link still lands correctly.
//
// On the combined Trias UKS/M page (src/pages/uksm/Trias.jsx) the "Pendidikan
// Kesehatan" pillar's own section wrapper additionally reserves the base id
// "pendidikan-kesehatan" (via ContentBlocks' `reserveIds`) so it doesn't collide
// with that pillar's own "PENDIDIKAN KESEHATAN" heading. That bumps the pillar
// heading itself to "-2", pushing the already-duplicate "C." sub-heading to "-3".
const ANCHOR_OVERRIDES = {
  "Pendidikan Gizi": "pendidikan-kesehatan-3",
  // The nav menu's official label is longer than the body heading actually
  // authored on the source page ("A. Penjaringan Kesehatan").
  "Penjaringan Kesehatan dan Pemeriksaan Berkala": "penjaringan-kesehatan",
};

export function subItemAnchor(sub) {
  return ANCHOR_OVERRIDES[sub] ?? slugify(sub);
}

// Group hrefs point at the pillar's own anchor on the Trias page, so drop that
// hash before appending the sub-item's.
export function subItemHref(groupHref, sub) {
  return `${groupHref.split("#")[0]}#${subItemAnchor(sub)}`;
}
