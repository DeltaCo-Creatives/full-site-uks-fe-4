// Structured content for /uksm/stratifikasi, sourced from
// docs/content-source/stratifikasi-uks-content.MD.
//
// Naming note (source Flag 3): the source page's own hardcoded hero text names
// the four tiers "Dasar, Madya, Utama, Paripurna", but three independent
// sources on the same page — the homepage section, the page's own (unused)
// CMS content, and the real SD scoring rubric table — all agree on
// "Minimal, Standar, Optimal, Paripurna". We use that naming everywhere here.
//
// The scoring rubric (see rubricCategories) only exists for jenjang SD/MI in
// the source; no SMP/SMA/PAUD table has been written yet.

export const dashboardUrl = "https://stratifikasiuks.org/";

export const pengertian = {
  lead: "Stratifikasi UKS/M adalah alat bantu untuk mengetahui apa yang sudah dicapai dan apa yang masih perlu dilakukan satuan pendidikan, agar dapat mencapai strata Minimal, Standar, Optimal, hingga Paripurna.",
  paragraphs: [
    {
      title: "Definisi",
      text: "Alat ukur kinerja yang dilakukan oleh sekolah dan Puskesmas (Tim Pelaksana UKS/M Kecamatan) serta Kementerian di pusat atau OPD terkait di Kab/Kota (Tim Pembina UKS/M Kab/Kota) terkait kegiatan trias UKS/M, yakni Pendidikan Kesehatan, Pelayanan Kesehatan dan Lingkungan Sekolah Sehat.",
    },
    {
      title: "Penilaian",
      text: "Bersifat absolut untuk semua kegiatan yang tercantum dalam daftar indikator minimal/standar/optimal/paripurna harus terlaksana/terpenuhi seluruhnya, baru satuan pendidikan dapat menyatakan UKS/M pada satuan pendidikan tersebut berada pada tingkat minimal/standar/optimal/paripurna.",
    },
  ],
};

export const tujuanStratifikasi = [
  { title: "Alat Ukur Trias UKS", description: "Mengukur pelaksanaan tiga program pokok UKS di satuan pendidikan." },
  { title: "Strategi Peningkatan Mutu", description: "Menjadi dasar perbaikan kualitas pelaksanaan UKS/M di sekolah." },
  { title: "Sistem Monev", description: "Bagian dari sistem monitoring dan evaluasi yang berkelanjutan." },
  { title: "Alat Capaian & Rekomendasi", description: "Dasar penyusunan rekomendasi tindak lanjut bagi sekolah." },
];

// The four strata, in ascending order. `badge` is a brand-token shade so each
// tier reads as progressively "fuller" without introducing new colors.
export const strataLevels = [
  { key: "minimal", order: 1, name: "Minimal", badge: "bg-brand-300" },
  { key: "standar", order: 2, name: "Standar", badge: "bg-brand-400" },
  { key: "optimal", order: 3, name: "Optimal", badge: "bg-brand-500" },
  { key: "paripurna", order: 4, name: "Paripurna", badge: "bg-brand-700" },
];

export const caraPenilaian = {
  lead: "Sekolah/madrasah harus memenuhi seluruh indikator (pendidikan kesehatan, pelayanan kesehatan, pembinaan lingkungan sekolah sehat dan manajemen UKS/M) pada kelompok stratifikasi UKS/M tertentu (minimal atau standar atau optimal atau paripurna).",
  rules: strataLevels.map((s) => ({
    level: s.name,
    text: `Sekolah memiliki stratifikasi UKS/M ${s.name} apabila telah memenuhi seluruh indikator (pendidikan kesehatan, pelayanan kesehatan, pembinaan lingkungan sekolah sehat dan manajemen UKS/M) pada kelompok stratifikasi UKS/M ${s.name.toUpperCase()}.`,
  })),
};

// The "Indikator" section's own per-strata definition: every level requires
// all four Trias UKS/M + management categories, at that tier.
export const indikator = {
  lead: "Sekolah harus memenuhi seluruh indikator berikut pada kelompok strata yang sama.",
  jenjangNote: "Rubrik penilaian di bawah ini tersedia untuk jenjang SD/MI. Rubrik untuk jenjang SMP, SMA, dan PAUD belum tersedia pada sumber data.",
  categoryLabels: [
    "Pendidikan kesehatan",
    "Pelayanan kesehatan",
    "Pembinaan lingkungan sehat di sekolah sehat",
    "Manajemen UKS/M",
  ],
};

// Full SD/MI scoring rubric — one row per Trias UKS/M + management category,
// one column per strata. Each strata beyond "minimal" builds on the one
// before it ("Dipenuhinya strata ..., plus:"), reproduced here as `note`.
export const rubricCategories = [
  {
    key: "pendidikan-kesehatan",
    number: 1,
    title: "Pendidikan Kesehatan",
    icon: "GraduationCap",
    strata: {
      minimal: {
        items: [
          "Adanya rencana pembelajaran tentang Pendidikan kesehatan",
          "Pendidikan kesehatan dilaksanakan secara kurikuler",
          "Pendidikan jasmani dilaksanakan secara kurikuler",
        ],
      },
      standar: {
        note: "Dipenuhinya strata minimal, plus:",
        items: [
          "Pendidikan jasmani dan kesehatan dilaksanakan secara ekstrakulikuler",
          "Sekolah melaksanakan literasi dengan materi kesehatan",
          "Sekolah melaksanakan pembinaan kader kesehatan",
          "Sekolah melaksanakan kegiatan CTPS bersama",
          "Sekolah melaksanakan sarapan bersama dengan gizi seimbang",
          "Sekolah melaksanakan kegiatan sikat gigi bersama",
        ],
      },
      optimal: {
        note: "Dipenuhinya strata standar, plus:",
        items: [
          "Sekolah melakukan peregangan di antara jam pelajaran",
          "Sekolah melakukan tes kebugaran",
          "Pendidikan kesehatan (kespro, napza, sanitasi, gizi) terintegrasi dengan mata pelajaran lain",
        ],
      },
      paripurna: {
        note: "Dipenuhinya strata optimal, plus:",
        items: [
          "Penerapan pendidikan karakter dan keterampilan hidup sehat",
          "Adanya forum komunikasi pendidik dan konselor sebaya",
          "Melibatkan orang tua dalam pendidikan kesehatan",
        ],
      },
    },
  },
  {
    key: "pelayanan-kesehatan",
    number: 2,
    title: "Pelayanan Kesehatan",
    icon: "HeartPulse",
    strata: {
      minimal: {
        items: [
          "Sekolah memfasilitasi puskesmas melaksanakan penjaringan kesehatan dan pemeriksaan berkala",
          "Sekolah membantu pelaksanaan imunisasi anak sekolah",
          "Sekolah memeriksa kebersihan diri peserta didik",
        ],
      },
      standar: {
        note: "Dipenuhinya strata minimal, plus:",
        items: [
          "Sekolah melaksanakan pelayanan P3K dan P3P",
          "Sekolah melibatkan Puskesmas dalam penanganan rujukan jika diperlukan",
          "Sekolah memberikan obat cacing",
        ],
      },
      optimal: {
        note: "Dipenuhinya strata standar, plus:",
        items: ["Sekolah melaksanakan layanan konseling"],
      },
      paripurna: {
        note: "Dipenuhinya strata optimal, plus:",
        items: [
          "Sekolah menindaklanjuti hasil penjaringan dan pemeriksaan berkala",
          "Menurunnya jumlah hari tidak masuk sekolah karena sakit",
          "Peserta didik memiliki status gizi baik",
        ],
      },
    },
  },
  {
    key: "pembinaan-lingkungan",
    number: 3,
    title: "Pembinaan Lingkungan Sekolah Sehat",
    icon: "Trees",
    strata: {
      minimal: {
        items: [
          "Sekolah dengan sumber air layak, tersedia di lingkungan sekolah dan cukup",
          "Sekolah dengan tempat cuci tangan dengan sabun dan air mengalir",
          "Sekolah memiliki toilet dengan kondisi baik dan terpisah",
          "Sekolah memiliki saluran drainase",
          "Sekolah memiliki kantin",
          "Sekolah memiliki lahan/ruang terbuka hijau",
          "Sekolah memiliki tempat sampah yang tertutup",
          "Sekolah memiliki tempat pembuangan sampah sementara yang tertutup",
          "Ruang Kelas dalam keadaan bersih",
          "Sekolah melaksanakan pemberantasan sarang nyamuk",
          "Sekolah memiliki aturan KTR, KTN, KTK, KTP",
        ],
      },
      standar: {
        note: "Dipenuhinya strata minimal, plus:",
        items: [
          "Sekolah memiliki rasio toilet sesuai dengan standar Permendikbud 24/2007",
          "Sekolah memiliki tempat sampah yang terpilah",
          "Sekolah memiliki kantin sehat",
          "Sekolah menerapkan KTR",
        ],
      },
      optimal: {
        note: "Dipenuhinya strata standar, plus:",
        items: [
          "Sekolah memanfaatkan pekarangan sekolah dengan menanam tanaman obat dan pangan",
          "Sekolah melakukan 3R (Reduce, reuse, recycle)",
          "Tersedia toilet MKM (Manajemen Kebersihan Menstruasi)",
        ],
      },
      paripurna: {
        note: "Dipenuhinya strata optimal, plus:",
        items: [
          "Air minum disediakan oleh sekolah",
          "Sekolah memiliki rasio toilet sesuai dengan standar Kepmenkes 1429/2006",
          "Kantin telah mendapatkan stiker tanda laik higiene sanitasi",
          "Tersedia toilet disabilitas",
          "Sekolah bekerja sama dengan puskesmas melakukan pemeriksaan kualitas udara dan skrining siswa perokok",
          "Sekolah bekerjasama dengan pihak lain untuk menyediakan bank sampah",
          "Sekolah melakukan kegiatan pengolahan tanaman obat dan pangan",
        ],
      },
    },
  },
  {
    key: "manajemen-uksm",
    number: 4,
    title: "Manajemen UKS/M",
    icon: "ClipboardList",
    strata: {
      minimal: {
        items: [
          "Buku pegangan kesehatan (Buku UKS/M, gizi seimbang, kespro, sanitasi, Napza dll)",
          "Ada penanggungjawab UKS",
          "Tersedia media KIE kesehatan (alat peraga, poster dll)",
          "Tersedia sarana prasarana olahraga",
          "Tersedia dana untuk kegiatan UKS dan pemeliharaan sanitasi sekolah",
          "Terdapat kemitraan dengan Puskesmas",
          "Terdapat perencanaan kegiatan UKS di Sekolah",
        ],
      },
      standar: {
        note: "Dipenuhinya strata minimal, plus:",
        items: [
          "Sekolah menggunakan buku rapor kesehatanku",
          "Sekolah melakukan konsultasi/koordinasi dengan Tim Pembina UKS",
          "Sekolah memiliki ruang UKS",
        ],
      },
      optimal: {
        note: "Dipenuhinya strata standar, plus:",
        items: [
          "Adanya kemitraan dengan instansi terkait",
          "Tersedia sarana dan prasarana sekolah aman bencana",
        ],
      },
      paripurna: {
        note: "Dipenuhinya strata optimal, plus:",
        items: [
          "Sekolah melakukan pembinaan dan pengawasan",
          "Seluruh guru terorientasi UKS",
          "Sekolah menggunakan Rapor Kesehatan Lingkungan dan Kantin",
        ],
      },
    },
  },
];
