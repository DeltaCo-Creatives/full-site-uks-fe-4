import Reveal from "./Reveal";
import { Download, Eye, PlayCircle } from "lucide-react";

export default function PublikasiGrid({ items, variant }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <Reveal key={item.judul} delay={i * 0.05} className="group overflow-hidden rounded-2xl border border-ink-100 bg-white">
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
          <div className="p-4">
            <p className="line-clamp-2 text-sm font-semibold text-ink-800">{item.judul}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-ink-400">
                {new Date(item.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
              </span>
              {variant === "buku" && item.file && (
                <a href={item.file} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700">
                  <Download size={13} /> Unduh
                </a>
              )}
              {variant === "info" && (
                <span className="flex items-center gap-1 text-xs font-semibold text-brand-600">
                  <Eye size={13} /> Lihat
                </span>
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
    </div>
  );
}
