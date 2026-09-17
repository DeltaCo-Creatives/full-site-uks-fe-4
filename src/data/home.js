// All entries below are copied from the live homepage payload of
// https://uks.kemendikdasmen.go.id/ (Home/Index props). Images are mirrored locally in /public/images.

export const heroSlides = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
  "/images/hero/hero-4.png",
];

export const triasPillars = [
  {
    number: 1,
    title: "Pendidikan Kesehatan",
    href: "/trias/pendidikan-kesehatan",
    indicatorCount: 7,
    description:
      "Berfokus meningkatkan pengetahuan, sikap, perilaku, dan keterampilan hidup sehat, melalui pendekatan intrakurikuler, ekstrakurikuler, dan kokurikuler.",
  },
  {
    number: 2,
    title: "Pelayanan Kesehatan",
    href: "/trias/pelayanan-kesehatan",
    indicatorCount: 4,
    description:
      "Upaya promotif, preventif, kuratif, dan rehabilitatif melalui skrining kesehatan, suplementasi, P3K/P3P, dan imunisasi.",
  },
  {
    number: 3,
    title: "Pembinaan Lingkungan Sekolah Sehat",
    href: "/trias/pembinaan-lingkungan",
    indicatorCount: 5,
    description:
      "Menciptakan lingkungan sekolah yang sehat secara fisik, sosial, dan emosional lewat sanitasi, kantin sehat, dan pekarangan sekolah.",
  },
];

// programCards from props.programCards (Program Prioritas section)
export const programPrioritas = [
  {
    title: "7 Kebiasaan Anak Indonesia Hebat (7KAIH)",
    href: "/program/7kaih",
    image: "/images/program/7kaih.jpeg",
    blurb: "Tujuh kebiasaan baik harian menuju Generasi Emas Indonesia 2045.",
  },
  {
    title: "Makan Bergizi Gratis (MBG)",
    href: "/program/mbg",
    image: "/images/program/mbg.jpeg",
    blurb: "Pemenuhan gizi harian peserta didik berdasarkan Perpres No. 83/2024.",
  },
  {
    title: "Cek Kesehatan Gratis (CKG) Sekolah",
    href: "/program/ckg",
    image: "/images/program/ckg.png",
    blurb: "Skrining kesehatan gratis tahunan untuk peserta didik kelas 1–12.",
  },
];

// props.latestBerita
export const latestBerita = [
  {
    judul: "Belajar Gizi dari Kebun Sekolah, Cara NGTS Ubah Pengetahuan menjadi Kebiasaan",
    slug: "belajar-gizi-dari-kebun-sekolah-cara-ngts-ubah-pengetahuan-menjadi-kebiasaan",
    ringkasan:
      "Jakarta, 25 Agustus 2026 — Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) melalui SEAMEO RECFON (Southeast Asian Ministers of Education Organization Regional Centre for Food and Nutrition) ...",
    gambar: "/images/berita/berita-1.png",
    published_at: "2026-08-25",
    kategori: "UKS",
  },
  {
    judul: "Kemendikdasmen Jadikan MBG Bagian Pendidikan Gizi Sekolah",
    slug: "kemendikdasmen-jadikan-mbg-bagian-pendidikan-gizi-sekolah",
    ringkasan:
      "RRI.CO.ID, Jakarta - Program Makan Bergizi Gratis (MBG) di sekolah didorong tidak hanya berfokus pada penyediaan makanan bagi peserta didik. Program tersebut perlu menjadi bagian dari pendidikan gizi ...",
    gambar: "/images/berita/berita-2.png",
    published_at: "2026-08-23",
    kategori: "Umum",
  },
  {
    judul: "Kemendikdasmen Dorong Sekolah Jadi Agen Perubahan Budaya Gizi dan Hidup Sehat",
    slug: "kemendikdasmen-dorong-sekolah-jadi-agen-perubahan-budaya-gizi-dan-hidup-sehat",
    ringkasan:
      "RRI.CO.ID, Jakarta - Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) mendorong edukasi gizi dan kebiasaan hidup sehat menjadi bagian dari budaya sekolah. Direktur Jenderal Pendidikan Menengah ...",
    gambar: "/images/berita/berita-3.png",
    published_at: "2026-08-23",
    kategori: "Umum",
  },
  {
    judul: "10 Tahun NGTS, 2.400 Sekolah dan Madrasah dapat Pelatihan Edukasi Gizi",
    slug: "10-tahun-ngts-2400-sekolah-dan-madrasah-dapat-pelatihan-edukasi-gizi",
    ringkasan:
      "JAKARTA, jakarta.suaramerdeka.com - Direktur SEAMEO Regional Centre for Food and Nutrition (Recfon), Prof. Rini Sekartini, mengatakan Nutrition Goes to School (NGTS) diinisiasi pada 2016 sebagai salah ...",
    gambar: "/images/berita/berita-4.png",
    published_at: "2026-08-23",
    kategori: "Umum",
  },
];

// props.latestPraktikBaik
export const latestPraktikBaik = [
  {
    judul: "Duta SMA 2026: Dari Potensi Pelajar, Lahir Gagasan untuk Pendidikan",
    slug: "duta-sma-2026-dari-potensi-pelajar-lahir-gagasan-untuk-pendidikan",
    ringkasan:
      "Yogyakarta, 14 Agustus 2026 — Menjadi murid bukan hanya tentang belajar dan meraih prestasi, tetapi juga tentang menemukan potensi diri, berani menyampaikan gagasan, dan mengambil peran di lingkungan ...",
    gambar: "/images/praktik-baik/pb-1.png",
    published_at: "2026-08-14",
    kategori: "Praktik Baik 7KAIH",
  },
  {
    judul: "Ruang Kelas Darurat Tumbuhkan Kembali Semangat Belajar Anak-anak Sorkam",
    slug: "ruang-kelas-darurat-tumbuhkan-kembali-semangat-belajar-anak-anak-sorkam",
    ringkasan:
      "Kab. Tapanuli Tengah, Sumatra Utara, 7 Agustus 2026 — Senyum dan tawa anak-anak kembali terdengar di SMP Insani Sorkam, Kabupaten (Kab.) Tapanuli Tengah, Sumatera Utara. Setelah fasilitas sekolah mereka ...",
    gambar: "/images/praktik-baik/pb-2.png",
    published_at: "2026-08-07",
    kategori: "Praktik Baik MBG",
  },
  {
    judul: "Setelah 21 Tahun, Revitalisasi Tembus Pulau Terluar Indonesia",
    slug: "setelah-21-tahun-revitalisasi-tembus-pulau-terluar-indonesia",
    ringkasan:
      "Kabupaten Kepulauan Talaud, Sulawesi Utara, 5 Agustus 2026 – Penyediaan sarana dan prasarana yang layak di satuan pendidikan wilayah tertinggal, terdepan, dan terluar (3T) menjadi salah satu upaya Kemendikdasmen ...",
    gambar: "/images/praktik-baik/pb-3.png",
    published_at: "2026-08-05",
    kategori: "Praktik Baik SMK",
  },
  {
    judul: "Dulu Rusak Berat, Kini SDN Jalmak 1 Jadi Rujukan Festival Pendidikan di Pamekasan",
    slug: "dulu-rusak-berat-kini-sdn-jalmak-1-jadi-rujukan-festival-pendidikan-di-pamekasan",
    ringkasan:
      "Kabupaten Pamekasan, Jawa Timur, 25 Mei 2026 – Hasil program Revitalisasi Satuan Pendidikan terus membawa dampak positif kepada para penerima manfaat program di seluruh wilayah Indonesia ...",
    gambar: "/images/praktik-baik/pb-4.png",
    published_at: "2026-05-25",
    kategori: "Praktik Baik SD",
  },
];

// props.sekolahSehatData.fokus
export const sekolahSehatFokus = [
  { title: "Sehat Bergizi", icon: "Heart", anchor: "sehat-bergizi", description: "Pemenuhan gizi seimbang untuk mendukung pertumbuhan dan prestasi belajar." },
  { title: "Sehat Fisik", icon: "Award", anchor: "sehat-fisik", description: "Aktivitas fisik rutin dan olahraga untuk kebugaran jasmani." },
  { title: "Sehat Imunisasi", icon: "Syringe", anchor: "sehat-imunisasi", description: "Perlindungan dari penyakit melalui imunisasi lengkap." },
  { title: "Sehat Jiwa", icon: "Smile", anchor: "sehat-jiwa", description: "Dukungan kesehatan mental dan kesejahteraan psikososial." },
  { title: "Sehat Lingkungan", icon: "TreePine", anchor: "sehat-lingkungan", description: "Lingkungan sekolah bersih, hijau, dan berkelanjutan." },
];

// props.bukuPanduan (latest) — only entries with a genuine UKS-relevant cover are shown with images
export const bukuPanduan = [
  { judul: "Buku Pedoman Kesehatan Jiwa di Satpen Jenjang SMP", tanggal: "2026-08-31", cover: "/images/publikasi/buku-keswa-smp.png", file: "https://uks.kemendikdasmen.go.id/storage/publikasi/file/buku_pedoman_keswa_smp.pdf" },
  { judul: "Panduan Implementasi Program Makan Bergizi Gratis di Satuan Pendidikan", tanggal: "2026-08-24", cover: "/images/publikasi/buku-panduan-mbg.png", file: "https://uks.kemendikdasmen.go.id/storage/publikasi/file/FA_A5_Panduan MBG 2025_ttd.pdf" },
  { judul: "Pedoman Pendidikan Karakter dalam Makan Bergizi Gratis", tanggal: "2026-08-13", cover: "/images/publikasi/buku-karakter-mbg.png", file: "https://uks.kemendikdasmen.go.id/storage/publikasi/file/Buku Pedoman Pendidikan Karakter dalam MBG-dikompresi.pdf" },
  { judul: "Pedoman Kesehatan Sekolah", tanggal: "2026-07-06", cover: "/images/publikasi/pedoman-kesehatan-sekolah.png", file: null },
];

// props.infografis (latest)
export const infografis = [
  { judul: "Poster 8 MBG", tanggal: "2026-08-24", cover: "/images/publikasi/poster-8-mbg.png" },
  { judul: "Poster 7 KAIH SD", tanggal: "2025-12-01", cover: "/images/publikasi/poster-7kaih-sd.png" },
  { judul: "Poster 7 KAIH SMP", tanggal: "2025-12-01", cover: "/images/publikasi/poster-7kaih-smp.png" },
  { judul: "Poster 7 KAIH SMA/SMK", tanggal: "2025-12-01", cover: "/images/publikasi/poster-7kaih-sma.png" },
];

// props.latestVideo
export const latestVideo = [
  { judul: "MBG: Bukan Sekedar Makan Gratis!", tanggal: "2026-07-23", cover: "/images/publikasi/video-mbg-cover.png", url: "https://www.youtube.com/watch?v=PdjSymf4ZSE" },
  { judul: "Penguatan Peran UKS di Satuan Pendidikan - Karawang 2025", tanggal: "2025-11-10", cover: "https://i.ytimg.com/vi/iWr14i9aO2k/hqdefault.jpg", url: "https://www.youtube.com/watch?v=iWr14i9aO2k" },
  { judul: "Penguatan Peran UKS Jenjang SMP - Medan 2025", tanggal: "2025-10-21", cover: "https://i.ytimg.com/vi/qdsgqJSa8s0/hqdefault.jpg", url: "https://www.youtube.com/watch?v=qdsgqJSa8s0" },
  { judul: "Lagu Tujuh Kebiasaan Anak Indonesia Hebat", tanggal: "2025-01-16", cover: "https://i.ytimg.com/vi/d1NwNLFT94g/hqdefault.jpg", url: "https://www.youtube.com/watch?v=d1NwNLFT94g" },
];

// props.clients — 21 real partners
export const partners = [
  { nama: "UNICEF Indonesia", logo: "/images/partners/unicef.png", url: "https://www.unicef.org/indonesia/id" },
  { nama: "Save The Children", logo: "/images/partners/savethechildren.jpg", url: "https://savethechildren.or.id/" },
  { nama: "AIA", logo: "/images/partners/aia.png", url: "https://www.aia-financial.co.id/id" },
  { nama: "Maleo Edukasi (Educourse.id)", logo: "/images/partners/maleo.png", url: "https://educourse.id/" },
  { nama: "KAO Indonesia", logo: "/images/partners/kao.png", url: "https://www.kao.com/id/id/" },
  { nama: "Wardhana", logo: "/images/partners/wardhana.png", url: null },
  { nama: "Wings Group", logo: "/images/partners/wings.png", url: "https://wingscorp.com/" },
  { nama: "Cisarua Mountain Dairy", logo: "/images/partners/cimory.png", url: "https://cimory.com/" },
  { nama: "Mondelez Indonesia", logo: "/images/partners/mondelez.png", url: "https://www.mondelezinternational.com/indonesia/" },
  { nama: "Yayasan Sagasitas Indonesia", logo: "/images/partners/sagasitas.png", url: "https://sagasitas.org/" },
  { nama: "Tanoto Foundation", logo: "/images/partners/tanoto.png", url: "https://www.tanotofoundation.org/" },
  { nama: "Danone Indonesia", logo: "/images/partners/danone.png", url: "https://www.danone.com/" },
  { nama: "Float Oat Indonesia (Oatside)", logo: "/images/partners/oatside.png", url: "https://oatside.com/id/" },
  { nama: "PT Bio Farma Indonesia", logo: "/images/partners/biofarma.png", url: "https://www.biofarma.co.id/" },
  { nama: "Red Nose Foundation", logo: "/images/partners/rednose.png", url: "https://rednosefoundation.org/" },
  { nama: "PT Klinik Pendidikan MIPA", logo: "/images/partners/kpm.png", url: "https://www.read1kpmseikhlasnya.com/" },
  { nama: "Badan Gizi Nasional (BGN)", logo: "/images/partners/bgn.png", url: "https://www.bgn.go.id/" },
  { nama: "Universitas Pendidikan Indonesia (UPI)", logo: "/images/partners/upi.png", url: "https://www.upi.edu/" },
  { nama: "BPOM", logo: "/images/partners/bpom.jpg", url: "https://www.pom.go.id/" },
  { nama: "Kementerian Dalam Negeri RI", logo: "/images/partners/kemendagri.png", url: "https://www.kemendagri.go.id/" },
  { nama: "Kementerian Agama RI", logo: "/images/partners/kemenag.png", url: "https://kemenag.go.id/" },
  { nama: "Kementerian Kesehatan RI", logo: "/images/partners/kemenkes.png", url: "https://www.kemkes.go.id/" },
];

// props.props.aplikasiList
export const aplikasiList = [
  {
    nama: "SIJIWA",
    client: "Garuda Teknologi Indonesia",
    deskripsi: "Aplikasi sistem informasi kesehatan jiwa untuk mendukung layanan konseling dan deteksi dini kesehatan mental peserta didik.",
    link: "https://play.google.com/store/apps/details?id=com.sijiwa&hl=id&gl=US",
  },
  {
    nama: "OKY — Period Tracker App for Girls",
    client: "UNICEF Digital Strategy",
    deskripsi:
      "Aplikasi seluler untuk membantu remaja perempuan (usia 10+) melacak menstruasi dan mendapatkan edukasi kesehatan reproduksi remaja dengan cara yang menyenangkan.",
    link: "https://play.google.com/store/apps/details?id=com.oky",
    logo: "/images/program/app-oky.jpg",
    qr: "/images/program/qr-oky.jpeg",
  },
];
