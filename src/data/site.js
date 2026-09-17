// Sourced from the live appConfig payload of https://uks.kemendikdasmen.go.id/ (Kontak/Index props.appConfig)
export const site = {
  name: "Portal UKS/M",
  fullName: "Usaha Kesehatan Sekolah/Madrasah",
  ministry: "Kementerian Pendidikan Dasar dan Menengah Republik Indonesia",
  metaDescription:
    "Portal resmi UKS/M, menyediakan informasi seputar program, berita, publikasi, dan panduan kesehatan sekolah.",
  themeColor: "#4CAF50",
  secondaryColor: "#1A73E8",
  contactEmail: "uks.dikdasmen@kemdikbud.go.id",
  contactAddress:
    "Gedung E lantai 5, Kemendikbudristek, Jl. Jenderal Sudirman, Senayan, Jakarta 10270",
  sources: [
    { label: "uks.kemendikdasmen.go.id", url: "https://uks.kemendikdasmen.go.id/" },
    { label: "portal-uks.demo.or.id", url: "https://portal-uks.demo.or.id/" },
  ],
};

// Real, verified stats from the production homepage payload (props.stats)
export const stats = [
  { key: "sekolah_binaan", value: 15000, suffix: "+", label: "Sekolah Binaan" },
  { key: "dokter_kecil", value: 50000, suffix: "+", label: "Dokter Kecil Terlatih" },
  { key: "kader_tiwi_sada", value: 25000, suffix: "+", label: "Kader Tiwisada" },
  { key: "provinsi", value: 38, suffix: "", label: "Provinsi Terjangkau" },
];
