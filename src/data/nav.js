// Re-modeled navigation tree. Every label, URL and grouping is carried over from the
// real production nav (uks.kemendikdasmen.go.id `navItems` payload), just reorganized
// away from a 3-level hover dropdown into flat sections + chip groups for the Explore overlay.
export const navSections = [
  {
    key: "uksm",
    title: "UKS/M",
    blurb: "Profil, struktur, dan Trias UKS/M",
    items: [
      { title: "Deskripsi Umum", href: "/uksm/deskripsi-umum" },
      { title: "Tujuan", href: "/uksm/tujuan" },
      { title: "Sasaran", href: "/uksm/sasaran" },
      { title: "Tim Pembina UKS/M", href: "/uksm/struktur-organisasi/tim-pembina" },
      { title: "Tim Pelaksana UKS/M di Sekolah/Madrasah", href: "/uksm/struktur-organisasi/tim-pelaksana" },
      { title: "Manajemen UKS/M", href: "/uksm/manajemen" },
      { title: "Stratifikasi UKS/M", href: "https://stratifikasiuks.org/", external: true },
    ],
    groupLabel: "Trias UKS/M",
    groups: [
      {
        title: "Pendidikan Kesehatan",
        number: 1,
        href: "/trias/pendidikan-kesehatan",
        subItems: [
          "Literasi Kesehatan",
          "Perilaku Hidup Bersih dan Sehat",
          "Pendidikan Gizi",
          "Pendidikan Kesehatan Reproduksi",
          "Pendidikan Karakter",
          "Pembiasaan Aktivitas Fisik",
          "Dokter Kecil",
        ],
      },
      {
        title: "Pelayanan Kesehatan",
        number: 2,
        href: "/trias/pelayanan-kesehatan",
        subItems: [
          "Penjaringan Kesehatan dan Pemeriksaan Berkala",
          "Imunisasi",
          "Pemberian Obat Cacing",
          "P3K dan P3P",
        ],
      },
      {
        title: "Pembinaan Lingkungan Sekolah Sehat",
        number: 3,
        href: "/trias/pembinaan-lingkungan",
        subItems: [
          "Sanitasi Sekolah",
          "Pembinaan Kantin Sehat",
          "Pemanfaatan Pekarangan Sekolah/Madrasah",
          "Pemberantasan Sarang Nyamuk",
          "Kawasan Tanpa Rokok, Napza, Kekerasan dan Pornografi",
        ],
      },
    ],
    sekolahSehat: {
      title: "Sekolah Sehat",
      href: "/sekolah-sehat/gerakan-sekolah-sehat",
      items: [
        { title: "Gerakan Madrasah Sehat", href: "https://madrasah.kemenag.go.id/madrasahsehat/", external: true },
        { title: "Gerakan Sekolah Sehat", href: "/sekolah-sehat/gerakan-sekolah-sehat" },
        { title: "Sehat Bergizi", href: "/sekolah-sehat/gerakan-sekolah-sehat#sehat-bergizi" },
        { title: "Sehat Fisik", href: "/sekolah-sehat/gerakan-sekolah-sehat#sehat-fisik" },
        { title: "Sehat Imunisasi", href: "/sekolah-sehat/gerakan-sekolah-sehat#sehat-imunisasi" },
        { title: "Sehat Jiwa", href: "/sekolah-sehat/gerakan-sekolah-sehat#sehat-jiwa" },
        { title: "Sehat Lingkungan", href: "/sekolah-sehat/gerakan-sekolah-sehat#sehat-lingkungan" },
        { title: "Bahan Advokasi GSS", href: "/sekolah-sehat/bahan-advokasi" },
      ],
    },
  },
  {
    key: "program",
    title: "Program",
    blurb: "Program prioritas UKS/M saat ini",
    items: [
      { title: "7 Kebiasaan Anak Indonesia Hebat (7KAIH)", href: "/program/7kaih" },
      { title: "Makan Bergizi Gratis (MBG)", href: "/program/mbg" },
      { title: "Cek Kesehatan Gratis (CKG) Sekolah", href: "/program/ckg" },
      { title: "Gerakan Sekolah ASRI", href: "/program/asri" },
      { title: "Manajemen UKS/M", href: "/uksm/manajemen" },
    ],
  },
  {
    key: "mitra",
    title: "Mitra",
    blurb: "Kemitraan dan kolaborasi program",
    items: [
      { title: "Panduan Kemitraan", href: "/mitra/panduan-kemitraan" },
      { title: "Pendaftaran Mitra", href: "/mitra/pendaftaran-mitra" },
      { title: "Mitra Kami", href: "/mitra/mitra-kami" },
      { title: "Aktivitas Mitra", href: "/mitra/aktivitas" },
      { title: "Dukungan Mitra", href: "/mitra/dukungan-mitra" },
    ],
  },
  {
    key: "informasi",
    title: "Informasi",
    blurb: "Berita, cerita, dan agenda kegiatan",
    items: [
      { title: "Berita", href: "/informasi/berita" },
      { title: "Praktik Baik", href: "/informasi/praktik-baik" },
      { title: "UPT Bercerita", href: "/informasi/upt-bercerita" },
      { title: "Agenda", href: "/informasi/agenda" },
      { title: "Aplikasi", href: "/informasi/aplikasi" },
    ],
  },
  {
    key: "publikasi",
    title: "Publikasi",
    blurb: "Dokumen resmi dan bahan bacaan",
    items: [
      { title: "Produk Hukum", href: "/publikasi/produk-hukum" },
      { title: "Buku Panduan", href: "/publikasi/buku-panduan" },
      { title: "Infografis", href: "/publikasi/infografis" },
      { title: "Video", href: "/publikasi/video" },
    ],
  },
  {
    key: "tautan",
    title: "Tautan",
    blurb: "Kementerian dan mitra pemerintah",
    items: [{ title: "Semua Tautan Resmi", href: "/tautan" }],
  },
];

// Grouped external links — real destinations from the production `Tautan` dropdown.
export const tautanGroups = [
  {
    title: "Kemenkes",
    links: [
      { title: "Kementerian Kesehatan", href: "https://kemkes.go.id/" },
      { title: "Ayo Sehat Kemenkes", href: "https://ayosehat.kemkes.go.id/" },
      { title: "Perangkat Ajar Kesehatan", href: "https://ayosehat.kemkes.go.id/perangkat-ajar-kesehatan" },
    ],
  },
  {
    title: "Kemendikdasmen",
    links: [
      { title: "Ditjen PAUDDIKDASMEN", href: "https://pdm.kemendikdasmen.go.id/" },
      { title: "Direktorat PAUD", href: "https://paudpedia.kemendikdasmen.go.id/" },
      { title: "Direktorat SD", href: "https://ditsd.kemendikdasmen.go.id/hal/usaha-kesehatan-sekolah" },
      { title: "Direktorat SMP", href: "https://ditsmp.kemendikdasmen.go.id" },
      { title: "Direktorat SMA", href: "https://sma.kemendikdasmen.go.id" },
    ],
  },
  {
    title: "Kemenag",
    links: [
      { title: "Direktorat KSKK", href: "https://pendis.kemenag.go.id/ditkskkmadrasah" },
      { title: "Direktorat Pesantren", href: "https://pendis.kemenag.go.id/ditpdpontren" },
    ],
  },
  {
    title: "Kemendagri",
    links: [{ title: "Direktorat SUPD", href: "https://bangda.kemendagri.go.id/" }],
  },
];

export const quickLinks = [
  { title: "Beranda", href: "/" },
  { title: "7KAIH", href: "/program/7kaih" },
  { title: "Makan Bergizi Gratis", href: "/program/mbg" },
  { title: "Cek Kesehatan Gratis", href: "/program/ckg" },
  { title: "Cari", href: "/cari" },
  { title: "Kontak", href: "/kontak" },
];
