import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import PageHero from "../ui/PageHero";
import Reveal from "../ui/Reveal";
import NewsCard from "../ui/NewsCard";
import { formatDate } from "../../lib/format";

/**
 * Shared layout for the three /informasi/* detail pages (Berita, Praktik Baik,
 * UPT Bercerita). Each page normalizes its own data shape into `item` and
 * passes a `getHref` so related cards can link back into the same list.
 *
 * item: { judul, ringkasan, gambar?, kategori?, date, url? }
 * related: same shape as `item`, each also needs whatever field `getHref` reads.
 */
export default function DetailLayout({ listLabel, listHref, tagColor = "brand", item, related = [], getHref }) {
  const tagClasses =
    tagColor === "sun" ? "bg-sun-50 text-sun-700" : tagColor === "sky" ? "bg-sky-50 text-sky-700" : "bg-brand-50 text-brand-700";

  return (
    <>
      <PageHero
        eyebrow={listLabel}
        title={item.judul}
        crumbs={[{ label: "Informasi" }, { label: listLabel, href: listHref }, { label: item.judul }]}
      />
      <section className="container-page py-14 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            to={listHref}
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            <ArrowLeft size={15} /> Kembali ke daftar {listLabel}
          </Link>

          {item.gambar && (
            <Reveal className="mb-6 aspect-video overflow-hidden rounded-2xl bg-ink-50">
              <img src={item.gambar} alt={item.judul} className="h-full w-full object-cover" />
            </Reveal>
          )}

          <Reveal>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
              {item.kategori && (
                <span className={`rounded-full px-2.5 py-1 font-semibold ${tagClasses}`}>{item.kategori}</span>
              )}
              {item.date && <span className="text-ink-400">{formatDate(item.date)}</span>}
            </div>

            <p className="text-[15px] leading-relaxed text-ink-600 sm:text-base">{item.ringkasan}</p>

            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Sumber asli <ExternalLink size={14} />
              </a>
            )}
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="mb-6 font-display text-xl font-semibold text-ink-900">{listLabel} Lainnya</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <NewsCard
                  key={getHref(r)}
                  item={{ judul: r.judul, ringkasan: r.ringkasan, gambar: r.gambar, kategori: r.kategori, published_at: r.date }}
                  href={getHref(r)}
                  delay={i * 0.05}
                  tagColor={tagColor}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
