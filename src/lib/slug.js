import { slugify } from "../components/ui/ContentBlocks";

// Not every list item in our data sources carries an explicit `slug` field
// (e.g. src/data/informasi.js uptBercerita). Derive one deterministically
// from the title so every item still resolves to a stable detail URL.
export function getSlug(item) {
  return item.slug ?? slugify(item.judul);
}

export function findBySlug(list, slug) {
  return list.find((item) => getSlug(item) === slug) ?? null;
}
