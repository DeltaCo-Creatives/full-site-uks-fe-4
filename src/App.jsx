import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { TriasSlugRedirect, ParamRedirect } from "./components/routing/Redirects";
import { staticRedirects } from "./data/redirects";

import Home from "./pages/Home";

import TentangUks from "./pages/uksm/Tentang";
import Trias from "./pages/uksm/Trias";
import Manajemen from "./pages/uksm/Manajemen";
import Stratifikasi from "./pages/uksm/Stratifikasi";
import SekolahSehat from "./pages/uksm/SekolahSehat";

import Kaih from "./pages/program/Kaih";
import Mbg from "./pages/program/Mbg";
import Ckg from "./pages/program/Ckg";
import Asri from "./pages/program/Asri";

import TentangMitra from "./pages/mitra/TentangMitra";
import PanduanKemitraan from "./pages/mitra/PanduanKemitraan";
import MitraKami from "./pages/mitra/MitraKami";
import DukunganMitra from "./pages/mitra/DukunganMitra";
import AktivitasMitra from "./pages/mitra/AktivitasMitra";

import Berita from "./pages/informasi/Berita";
import BeritaDetail from "./pages/informasi/BeritaDetail";
import PraktikBaik from "./pages/informasi/PraktikBaik";
import PraktikBaikDetail from "./pages/informasi/PraktikBaikDetail";
import UptBercerita from "./pages/informasi/UptBercerita";
import UptBerceritaDetail from "./pages/informasi/UptBerceritaDetail";
import Agenda from "./pages/informasi/Agenda";
import Aplikasi from "./pages/informasi/Aplikasi";

import ProdukHukum from "./pages/publikasi/ProdukHukum";
import BukuPanduan from "./pages/publikasi/BukuPanduan";
import Infografis from "./pages/publikasi/Infografis";
import Video from "./pages/publikasi/Video";

import Tautan from "./pages/Tautan";
import Pencarian from "./pages/Pencarian";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="uksm/tentang" element={<TentangUks />} />
          <Route path="uksm/trias" element={<Trias />} />
          <Route path="uksm/manajemen" element={<Manajemen />} />
          <Route path="uksm/stratifikasi" element={<Stratifikasi />} />
          <Route path="uksm/sekolah-sehat" element={<SekolahSehat />} />

          <Route path="program/7kaih" element={<Kaih />} />
          <Route path="program/mbg" element={<Mbg />} />
          <Route path="program/ckg" element={<Ckg />} />
          <Route path="program/asri" element={<Asri />} />

          <Route path="mitra/tentang" element={<TentangMitra />} />
          <Route path="mitra/panduan-kemitraan" element={<PanduanKemitraan />} />
          <Route path="mitra/mitra-kami" element={<MitraKami />} />
          <Route path="mitra/aktivitas" element={<AktivitasMitra />} />
          <Route path="mitra/dukungan-mitra" element={<DukunganMitra />} />

          <Route path="informasi/berita" element={<Berita />} />
          <Route path="informasi/berita/:slug" element={<BeritaDetail />} />
          <Route path="informasi/praktik-baik" element={<PraktikBaik />} />
          <Route path="informasi/praktik-baik/:slug" element={<PraktikBaikDetail />} />
          <Route path="informasi/upt-bercerita" element={<UptBercerita />} />
          <Route path="informasi/upt-bercerita/:slug" element={<UptBerceritaDetail />} />
          <Route path="informasi/agenda" element={<Agenda />} />
          <Route path="informasi/aplikasi" element={<Aplikasi />} />

          <Route path="publikasi/produk-hukum" element={<ProdukHukum />} />
          <Route path="publikasi/buku-panduan" element={<BukuPanduan />} />
          <Route path="publikasi/infografis" element={<Infografis />} />
          <Route path="publikasi/video" element={<Video />} />

          <Route path="tautan" element={<Tautan />} />
          <Route path="cari" element={<Pencarian />} />
          <Route path="kontak" element={<Kontak />} />

          {Object.entries(staticRedirects).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="trias/:slug" element={<TriasSlugRedirect />} />
          <Route path="program/:slug" element={<TriasSlugRedirect />} />
          <Route path="gala-kreasi/:slug" element={<Navigate to="/program/7kaih#saih-gala-kreasi" replace />} />
          <Route path="halaman/berita/:slug" element={<ParamRedirect to="/informasi/berita/:slug" />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
