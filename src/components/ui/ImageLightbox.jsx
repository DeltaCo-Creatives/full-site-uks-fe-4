import { useRef } from "react";
import { X, Download } from "lucide-react";
import { useModalA11y } from "./useModalA11y";

export default function ImageLightbox({ open, onClose, title, src }) {
  const dialogRef = useRef(null);
  useModalA11y({ open, onClose, dialogRef });

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/80 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="image-lightbox-title"
        tabIndex={-1}
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl outline-none"
      >
        <div className="flex items-center justify-between gap-3 border-b border-ink-100 px-5 py-4">
          <h2 id="image-lightbox-title" className="truncate font-display text-base font-semibold text-ink-900">
            {title}
          </h2>
          <div className="flex shrink-0 items-center gap-2">
            {src && (
              <a
                href={src}
                download
                className="flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700 hover:bg-brand-100"
              >
                <Download size={14} /> Unduh
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup"
              className="rounded-full p-2 text-ink-400 transition hover:bg-ink-50 hover:text-ink-800"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto bg-ink-50 p-4">
          {src ? (
            <img src={src} alt={title} className="mx-auto max-h-[75vh] w-auto rounded-lg object-contain" />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-ink-400">
              Gambar belum tersedia.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
