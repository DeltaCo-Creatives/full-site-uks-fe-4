import { useState } from "react";
import Reveal from "./Reveal";
import DocViewerModal from "./DocViewerModal";
import ImageLightbox from "./ImageLightbox";
import { Download, Eye, PlayCircle } from "lucide-react";

function CoverImage({ item, variant }) {
  return (
    <div className="relative aspect-3/4 overflow-hidden bg-ink-100">
      <img
        src={item.cover}
        alt={item.judul}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      {variant === "video" && (
        <span className="absolute inset-0 flex items-center justify-center bg-ink-900/25 opacity-0 transition group-hover:opacity-100">
          <PlayCircle size={40} className="text-white" />
        </span>
      )}
    </div>
  );
}

// "buku" opens the PDF in DocViewerModal and "info" opens the poster in
// ImageLightbox; "video" keeps linking out to YouTube.
export default function PublikasiGrid({ items, variant }) {
  const [viewerItem, setViewerItem] = useState(null);
  const isViewable = variant === "buku" || variant === "info";

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <Reveal key={item.judul} delay={i * 0.05} className="group overflow-hidden rounded-2xl border border-ink-100 bg-white">
          {isViewable ? (
            <button
              type="button"
              onClick={() => setViewerItem(item)}
              aria-label={`Lihat ${item.judul}`}
              className="block w-full text-left"
            >
              <CoverImage item={item} variant={variant} />
              <p className="line-clamp-2 px-4 pt-4 text-sm font-semibold text-ink-800">{item.judul}</p>
            </button>
          ) : (
            <>
              <CoverImage item={item} variant={variant} />
              <p className="line-clamp-2 px-4 pt-4 text-sm font-semibold text-ink-800">{item.judul}</p>
            </>
          )}

          <div className="px-4 pb-4 pt-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-ink-400">
                {new Date(item.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
              </span>
              {variant === "buku" && item.file && (
                <a
                  href={item.file}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700"
                >
                  <Download size={13} /> Unduh
                </a>
              )}
              {variant === "info" && (
                <button
                  type="button"
                  onClick={() => setViewerItem(item)}
                  className="flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700"
                >
                  <Eye size={13} /> Lihat
                </button>
              )}
              {variant === "video" && item.url && (
                <a href={item.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700">
                  Tonton
                </a>
              )}
            </div>
          </div>
        </Reveal>
      ))}

      {variant === "buku" && (
        <DocViewerModal
          open={viewerItem != null}
          onClose={() => setViewerItem(null)}
          title={viewerItem?.judul}
          file={viewerItem?.file}
        />
      )}
      {variant === "info" && (
        <ImageLightbox
          open={viewerItem != null}
          onClose={() => setViewerItem(null)}
          title={viewerItem?.judul}
          src={viewerItem?.cover}
        />
      )}
    </div>
  );
}
