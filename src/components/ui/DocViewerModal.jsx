import { useRef } from "react";
import { X, Download, ExternalLink } from "lucide-react";
import { useModalA11y } from "./useModalA11y";

export default function DocViewerModal({ open, onClose, title, file }) {
  const dialogRef = useRef(null);
  useModalA11y({ open, onClose, dialogRef });

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/70 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="doc-viewer-title"
        tabIndex={-1}
        className="flex w-full max-w-4xl flex-col sm:h-[85vh] overflow-hidden rounded-2xl bg-white shadow-2xl outline-none"
      >
        <div className="flex items-center justify-between gap-3 border-b border-ink-100 px-5 py-4">
          <h2 id="doc-viewer-title" className="truncate font-display text-base font-semibold text-ink-900">
            {title}
          </h2>
          <div className="flex shrink-0 items-center gap-2">
            {file && (
              <>
                <a
                  href={file}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700 hover:bg-brand-100"
                >
                  <Download size={14} /> Unduh
                </a>
                <a
                  href={file}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden items-center gap-1.5 rounded-full bg-ink-50 sm:flex px-3 py-1.5 text-sm font-semibold text-ink-600 hover:bg-ink-100"
                >
                  <ExternalLink size={14} /> Buka di tab baru
                </a>
              </>
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
        <div className="flex-1 bg-ink-50">
          {file ? (
            <>
              {/* tabIndex -1 keeps focus (and so Escape / Tab trapping) in the parent document. */}
              <iframe title={title} src={file} tabIndex={-1} className="hidden h-full w-full sm:block" />
              {/* Mobile browsers don't render PDFs inside iframes. */}
              <div className="flex flex-col items-center justify-center gap-4 px-6 py-12 text-center sm:hidden">
                <p className="text-sm text-ink-500">Pratinjau dokumen tidak tersedia di layar kecil.</p>
                <a
                  href={file}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
                >
                  <ExternalLink size={16} /> Buka Dokumen
                </a>
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-ink-400">
              Dokumen belum tersedia untuk ditampilkan.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
