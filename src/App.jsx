import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";

import DeskripsiUmum from "./pages/uksm/DeskripsiUmum";
import Tujuan from "./pages/uksm/Tujuan";
import Sasaran from "./pages/uksm/Sasaran";
import StrukturOrganisasi from "./pages/uksm/StrukturOrganisasi";
import Manajemen from "./pages/uksm/Manajemen";

import TriasPillar from "./pages/trias/TriasPillar";

import GerakanSekolahSehat from "./pages/sekolah-sehat/GerakanSekolahSehat";
import BahanAdvokasi from "./pages/sekolah-sehat/BahanAdvokasi";

import Kaih from "./pages/program/Kaih";
import Mbg from "./pages/program/Mbg";
import Ckg from "./pages/program/Ckg";
import Asri from "./pages/program/Asri";

import PanduanKemitraan from "./pages/mitra/PanduanKemitraan";
import PendaftaranMitra from "./pages/mitra/PendaftaranMitra";
import MitraKami from "./pages/mitra/MitraKami";
import DukunganMitra from "./pages/mitra/DukunganMitra";
import AktivitasMitra from "./pages/mitra/AktivitasMitra";

import Berita from "./pages/informasi/Berita";
import PraktikBaik from "./pages/informasi/PraktikBaik";
import UptBercerita from "./pages/informasi/UptBercerita";
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

          <Route path="uksm/deskripsi-umum" element={<DeskripsiUmum />} />
          <Route path="uksm/tujuan" element={<Tujuan />} />
          <Route path="uksm/sasaran" element={<Sasaran />} />
          <Route path="uksm/struktur-organisasi/tim-pembina" element={<StrukturOrganisasi />} />
          <Route path="uksm/struktur-organisasi/tim-pelaksana" element={<StrukturOrganisasi />} />
          <Route path="uksm/manajemen" element={<Manajemen />} />

          <Route path="trias/:slug" element={<TriasPillar />} />

          <Route path="sekolah-sehat/gerakan-sekolah-sehat" element={<GerakanSekolahSehat />} />
          <Route path="sekolah-sehat/bahan-advokasi" element={<BahanAdvokasi />} />

          <Route path="program/7kaih" element={<Kaih />} />
          <Route path="program/mbg" element={<Mbg />} />
          <Route path="program/ckg" element={<Ckg />} />
          <Route path="program/asri" element={<Asri />} />

          <Route path="mitra/panduan-kemitraan" element={<PanduanKemitraan />} />
          <Route path="mitra/pendaftaran-mitra" element={<PendaftaranMitra />} />
          <Route path="mitra/mitra-kami" element={<MitraKami />} />
          <Route path="mitra/dukungan-mitra" element={<DukunganMitra />} />
          <Route path="mitra/aktivitas" element={<AktivitasMitra />} />

          <Route path="informasi/berita" element={<Berita />} />
          <Route path="informasi/praktik-baik" element={<PraktikBaik />} />
          <Route path="informasi/upt-bercerita" element={<UptBercerita />} />
          <Route path="informasi/agenda" element={<Agenda />} />
          <Route path="informasi/aplikasi" element={<Aplikasi />} />

          <Route path="publikasi/produk-hukum" element={<ProdukHukum />} />
          <Route path="publikasi/buku-panduan" element={<BukuPanduan />} />
          <Route path="publikasi/infografis" element={<Infografis />} />
          <Route path="publikasi/video" element={<Video />} />

          <Route path="tautan" element={<Tautan />} />
          <Route path="cari" element={<Pencarian />} />
          <Route path="kontak" element={<Kontak />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
