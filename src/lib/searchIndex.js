import { navSections, tautanGroups } from "../data/nav";
import { latestBerita, latestPraktikBaik, bukuPanduan, infografis, latestVideo } from "../data/home";
import { uptBercerita, agendaList, produkHukum } from "../data/informasi";
import { subItemHref } from "./anchors";
import { getSlug } from "./slug";

function navEntries() {
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

const detailEntries = (list, base, section) =>
  list.map((item) => ({
    title: item.judul,
    text: item.ringkasan,
    href: `${base}/${getSlug(item)}`,
    section,
  }));

const listEntries = (list, href, section) =>
  list.map((item) => ({ title: item.judul, href, section }));

export function buildSearchIndex() {
  return [
    ...navEntries(),
    ...detailEntries(latestBerita, "/informasi/berita", "Berita"),
    ...detailEntries(latestPraktikBaik, "/informasi/praktik-baik", "Praktik Baik"),
    ...detailEntries(uptBercerita, "/informasi/upt-bercerita", "UPT Bercerita"),
    ...listEntries(agendaList, "/informasi/agenda", "Agenda"),
    ...listEntries(produkHukum, "/publikasi/produk-hukum", "Produk Hukum"),
    ...listEntries(bukuPanduan, "/publikasi/buku-panduan", "Buku Panduan"),
    ...listEntries(infografis, "/publikasi/infografis", "Infografis"),
    ...latestVideo.map((v) => ({ title: v.judul, href: v.url, external: true, section: "Video" })),
    ...tautanGroups.flatMap((g) =>
      g.links.map((l) => ({ title: l.title, href: l.href, external: true, section: `Tautan · ${g.title}` }))
    ),
  ];
}

// Every word of the query must appear somewhere in the entry's title, text or section,
// so multi-word queries like "gizi sekolah" match across fields.
export function searchEntries(index, query) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  return index.filter((r) => {
    const haystack = `${r.title} ${r.text ?? ""} ${r.section}`.toLowerCase();
    return words.every((w) => haystack.includes(w));
  });
}
