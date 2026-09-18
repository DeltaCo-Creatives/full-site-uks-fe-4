// Old URLs → their place in the current structure. Covers this project's own earlier
// routes plus the public URLs of the dev (portal-uks.demo.or.id) and prod
// (uks.kemendikdasmen.go.id) sites, so inbound links keep working.
export const staticRedirects = {
  // Earlier routes of this project
  "/uksm": "/uksm/tentang",
  "/uksm/deskripsi-umum": "/uksm/tentang#deskripsi-umum",
  "/uksm/tujuan": "/uksm/tentang#tujuan",
  "/uksm/sasaran": "/uksm/tentang#sasaran",
  "/uksm/struktur-organisasi": "/uksm/tentang#struktur-organisasi",
  "/uksm/struktur-organisasi/tim-pembina": "/uksm/tentang#tim-pembina",
  "/uksm/struktur-organisasi/tim-pelaksana": "/uksm/tentang#tim-pelaksana",
  "/trias": "/uksm/trias",
  "/sekolah-sehat": "/uksm/sekolah-sehat",
  "/sekolah-sehat/gerakan-sekolah-sehat": "/uksm/sekolah-sehat",
  "/sekolah-sehat/bahan-advokasi": "/uksm/sekolah-sehat#bahan-advokasi",
  "/program": "/program/7kaih",
  "/mitra": "/mitra/tentang",
  "/mitra/pendaftaran-mitra": "/mitra/tentang#pendaftaran-mitra",
  "/informasi": "/informasi/berita",
  "/publikasi": "/publikasi/buku-panduan",

  // Dev site
  "/tentang-uks": "/uksm/tentang",
  "/trias-uks": "/uksm/trias",
  "/manajemen-uks": "/uksm/manajemen",
  "/stratifikasi-uks": "/uksm/stratifikasi",
  "/7kaih": "/program/7kaih",
  "/mbg": "/program/mbg",
  "/ckg": "/program/ckg",
  "/asri": "/program/asri",
  "/mitra-uks": "/mitra/tentang",
  "/aktifitas-mitra": "/mitra/aktivitas",
  "/halaman/berita": "/informasi/berita",
  "/dokumen/produk-hukum": "/publikasi/produk-hukum",
  "/dokumen/publikasi/buku-panduan": "/publikasi/buku-panduan",
  "/dokumen/publikasi/infografis": "/publikasi/infografis",
  "/dokumen/publikasi/video": "/publikasi/video",
  "/pencarian": "/cari",

  // Prod site
  "/tentang-uks/deskripsi-umum": "/uksm/tentang#deskripsi-umum",
  "/tentang-uks/tujuan": "/uksm/tentang#tujuan",
  "/tentang-uks/sasaran": "/uksm/tentang#sasaran",
  "/tentang-uks/struktur-organisasi-tim-pembina": "/uksm/tentang#tim-pembina",
  "/tentang-uks/struktur-organisasi-timpelaksana": "/uksm/tentang#tim-pelaksana",
  "/program/manajemen-uks-m": "/uksm/manajemen",
  "/program/cek-kesehatan-gratis": "/program/ckg",
  "/sekolah-sehat/sehat-bergizi": "/uksm/sekolah-sehat#sehat-bergizi",
  "/sekolah-sehat/sehat-fisik": "/uksm/sekolah-sehat#sehat-fisik",
  "/sekolah-sehat/sehat-imunisasi": "/uksm/sekolah-sehat#sehat-imunisasi",
  "/sekolah-sehat/sehat-jiwa": "/uksm/sekolah-sehat#sehat-jiwa",
  "/sekolah-sehat/sehat-lingkungan": "/uksm/sekolah-sehat#sehat-lingkungan",
  "/sekolah-sehat/mitra-sekolah-sehat": "/mitra/panduan-kemitraan",
  "/gala-kreasi": "/program/7kaih#saih-gala-kreasi",
  "/faq": "/kontak",
};

// Prod's pillar overview pages and this project's earlier /trias/:slug pages.
export const triasPillarAnchors = {
  "pendidikan-kesehatan": "pendidikan-kesehatan",
  "pelayanan-kesehatan": "pelayanan-kesehatan",
  "pembinaan-lingkungan": "pembinaan-lingkungan",
  "pembinaan-lingkungan-sekolah-sehat": "pembinaan-lingkungan",
};

// Prod sub-program slugs that don't match slugify(label) of the nav's sub-item.
export const triasSubItemAliases = {
  "pemanfaatan-pekarangan-sekolah": "Pemanfaatan Pekarangan Sekolah/Madrasah",
  "kawasan-tanpa-rokok-napza-kekerasan-pornografi": "Kawasan Tanpa Rokok, Napza, Kekerasan dan Pornografi",
};
