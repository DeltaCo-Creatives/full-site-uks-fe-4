import { navSections } from "../data/nav";
import { subItemHref } from "./anchors";

export function buildSearchIndex() {
  const out = [];
  for (const section of navSections) {
    for (const item of section.items) {
      out.push({ title: item.title, href: item.href, external: item.external, section: section.title });
    }
    for (const group of section.groups || []) {
      out.push({ title: group.title, href: group.href, section: `${section.title} · Trias UKS/M` });
      for (const sub of group.subItems || []) {
        out.push({
          title: sub,
          href: subItemHref(group.href, sub),
          section: `${section.title} · ${group.title}`,
        });
      }
    }
    if (section.sekolahSehat) {
      for (const item of section.sekolahSehat.items) {
        out.push({ title: item.title, href: item.href, external: item.external, section: "Sekolah Sehat" });
      }
    }
  }
  return out;
}
