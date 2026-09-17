import { Link } from "react-router-dom";
import { LayoutGrid } from "lucide-react";
import { useExplore } from "../context/ExploreContext";

export default function NotFound() {
  const openExplore = useExplore();
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-7xl font-bold text-brand-200">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold text-ink-900">Halaman Tidak Ditemukan</h1>
      <p className="mt-2 max-w-sm text-ink-400">Halaman yang Anda cari tidak ada, atau sudah dipindahkan.</p>
      <div className="mt-7 flex gap-3">
        <Link to="/" className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-800">
          Kembali ke Beranda
        </Link>
        <button
          onClick={openExplore}
          className="flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
        >
          <LayoutGrid size={16} /> Jelajahi Portal
        </button>
      </div>
    </div>
  );
}
