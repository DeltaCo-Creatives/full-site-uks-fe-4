// Copied from the live rendered content of https://portal-uks.demo.or.id/{7kaih,mbg,ckg,asri}
// (production uks.kemendikdasmen.go.id does not have dedicated pages for these four flagship
// programs — they route to external dashboards/partners instead — so the descriptive copy here
// is sourced from the sibling demo deployment of the same portal).

export const kaih = {
  title: "7 Kebiasaan Anak Indonesia Hebat",
  shortTitle: "7KAIH",
  intro:
    "Gerakan Tujuh Kebiasaan Anak Indonesia Hebat (7KAIH) adalah gerakan penguatan karakter yang mengajak setiap anak Indonesia membiasakan tujuh kebiasaan baik setiap hari.",
  context:
    "Gerakan ini lahir untuk menjawab tantangan zaman — mulai dari derasnya arus teknologi, gaya hidup serba instan, hingga menurunnya karakter dan kesehatan fisik-psikis anak muda. Melalui pembiasaan tujuh kebiasaan ini, 7KAIH ingin membentuk generasi yang sehat fisik, mental, dan spiritual; cerdas dan kreatif; serta peduli dan bertanggung jawab secara sosial — langkah nyata menuju Generasi Emas Indonesia 2045.",
  image: "/images/program/7kaih.jpeg",
  habits: [
    { title: "Bangun Pagi", description: "Mengajarkan nilai disiplin, keseimbangan, produktivitas, dan menghargai waktu yang berkontribusi pada kualitas hidup yang lebih baik." },
    { title: "Beribadah", description: "Bukan sekadar ritual, tetapi menyimpan makna spiritual dan moral yang membentuk kepribadian serta hubungan harmonis dengan Tuhan, alam, dan sesama." },
    { title: "Berolahraga", description: "Lebih dari menjaga kesehatan fisik — membangun disiplin, keseimbangan, ketahanan mental, dan kehidupan yang lebih terarah dan bermakna." },
    { title: "Makan Sehat dan Bergizi", description: "Memenuhi kebutuhan nutrisi tubuh dengan prinsip gizi seimbang untuk mendukung kehidupan yang sehat, seimbang, dan bermakna." },
    { title: "Gemar Belajar", description: "Mengajak setiap anak untuk terus tumbuh dalam pemahaman, karakter, dan kearifan." },
    { title: "Bermasyarakat", description: "Mendorong setiap anak hidup bersama secara harmonis dan berkontribusi terhadap kesejahteraan bersama." },
    { title: "Tidur Cepat", description: "Aspek penting kehidupan yang berdampak pada kesehatan fisik, kesejahteraan mental, serta kehidupan spiritual dan sosial." },
  ],
};

// Sourced from docs/content-source/program/saih-gala-kreasi.md (scraped from prod
// uks.kemendikdasmen.go.id) and docs/reports/gap-analysis-prod.md §1 (SK Pemenang PDF).
// Competition/download links that were confirmed dead (404 or unresolvable domain) are
// left without an `href` rather than invented or linked to a broken page.
export const saihGalaKreasi = {
  title: "SAIH & Gala Kreasi Video",
  intro:
    "Semarak Anak Indonesia Hebat (SAIH) dan Gala Kreasi Video adalah rangkaian lomba dan apresiasi bagi peserta didik serta satuan pendidikan yang mengaktifkan 7KAIH dan Gerakan Sekolah Sehat.",
  editions: [
    {
      year: "2025",
      title: "Semarak Anak Indonesia Hebat (SAIH) 2025",
      description:
        "Dalam rangka Hari Pendidikan Nasional 2025 dan tindak lanjut Surat Edaran Bersama No. 1 Tahun 2025 tentang Penguatan Pendidikan Karakter melalui Pembiasaan di Satuan Pendidikan, Ditjen PAUD Dikdasmen bersama BBPMP dan BPMP menyelenggarakan lomba bagi peserta didik PAUD, SD, SMP, dan SMA di seluruh Indonesia. Batas akhir pendaftaran dan pengiriman materi lomba: 25 April 2025.",
      competitions: [
        { title: "Lomba Senam Anak Indonesia Hebat (Seluruh Jenjang)", href: "https://s.id/InformasiLSAIH" },
        { title: "Lomba Video Cerita Anak (Jenjang PAUD)" },
        { title: "Lomba Potret Cerita (Jenjang SD)" },
        { title: "Lomba Video Cerita Pendek (Jenjang SMP)", href: "https://s.id/ReelsvideoPendek7KAIHDitSMP_" },
        { title: "Lomba Video Cerita Pendek/Vlog (Jenjang SMA)", href: "https://s.id/cerita7KAIH" },
      ],
      downloads: [
        {
          label: "Surat Edaran dan Panduan Lomba",
          href: "https://drive.google.com/drive/u/0/folders/14aBSX1V5P9ZL1vHOEZwyao1UmUl2br_8",
        },
      ],
    },
    {
      year: "2024",
      title: "Gala Kreasi Video Gerakan Sekolah Sehat 2024",
      theme: "Sekolah Sehat, Generasi Hebat",
      description:
        "Ajang lomba video praktik baik implementasi sebagian atau seluruh fokus Gerakan Sekolah Sehat (5 sehat) di seluruh jenjang satuan pendidikan, sekaligus ajang pemberian penghargaan kepada satuan pendidikan berdasarkan hasil penilaian video — peringkat 1 sampai dengan 10 terbaik untuk setiap jenjang pendidikan.",
      goals: [
        "Meningkatkan motivasi satuan pendidikan dalam melaksanakan implementasi atau mengaktivasi gerakan sekolah sehat (5 sehat) di satuannya.",
        "Memberikan apresiasi kepada satuan pendidikan yang telah dapat melaksanakan implementasi atau mengaktivasi gerakan sekolah sehat (5 sehat) dengan baik di satuannya.",
        "Memantik dan mengoptimalkan implementasi atau aktivasi pesan gerakan sekolah sehat.",
        "Ajang berbagi praktik baik implementasi atau aktivasi gerakan sekolah sehat (5 sehat) antar satuan pendidikan.",
      ],
      sasaran: ["PAUD (TK, KB, TPA, dan SPS)", "SD", "SMP", "SMA", "SMK", "SLB", "SKB dan PKBM"],
      downloads: [
        {
          label: "Buku Petunjuk Pelaksanaan",
          href: "https://uks.kemendikdasmen.go.id//storage/manajemen_uks/files/images/uPpuXgH6FalmAGQhTHwv6TGqfQI8ZJMXxk4fhdoM.pdf",
        },
        {
          label: "SK Pemenang Gala Kreasi Video GSS 2024",
          href: "https://uks.kemendikdasmen.go.id/storage/manajemen_uks/files/produk_hukum/DXRUqW5K8kiaCOCm6aW29UNVK6uvVsQ3hSflYReR.pdf",
        },
      ],
    },
    {
      year: "2023",
      title: "Gala Kreasi Video Kemitraan Sekolah Sehat 2023",
      theme: "Sekolah Sehat, Generasi Hebat",
      description:
        "Ajang lomba video praktik baik implementasi sebagian atau seluruh fokus 3 (tiga) sehat di seluruh jenjang satuan pendidikan, dengan penghargaan bagi peringkat 1 sampai dengan 10 terbaik untuk setiap jenjang pendidikan.",
      sasaran: ["PAUD (TK, KB, TPA, dan SPS)", "SD", "SMP", "SMA", "SMK", "SLB", "SKB dan PKBM"],
    },
  ],
};

export const mbg = {
  title: "Makan Bergizi Gratis",
  shortTitle: "MBG",
  intro:
    "Makan Bergizi Gratis (MBG) adalah program nasional pemberian makanan bergizi secara gratis dan berkelanjutan kepada kelompok sasaran prioritas di seluruh Indonesia, sebagai upaya pemerintah memenuhi kebutuhan gizi masyarakat sekaligus membangun fondasi generasi yang sehat dan berkualitas.",
  context:
    "Program ini dilaksanakan berdasarkan Peraturan Presiden Nomor 83 Tahun 2024, di bawah koordinasi Badan Gizi Nasional (BGN), melalui Satuan Pelayanan Pemenuhan Gizi (SPPG) yang tersebar di berbagai daerah dengan mengutamakan bahan pangan lokal.",
  image: "/images/program/mbg.jpeg",
  goals: [
    { title: "Status Gizi Baik", description: "Memastikan setiap individu generasi mendatang memiliki status gizi optimal sebagai modal kesehatan dan kecerdasan." },
    { title: "Morbiditas & Mortalitas Rendah", description: "Menurunnya angka kesakitan dan kematian, terutama pada ibu, bayi, dan anak-anak." },
    { title: "Partisipasi Sekolah Tinggi", description: "Menjamin anak-anak Indonesia dapat mengakses pendidikan dengan baik, didukung gizi yang memadai." },
    { title: "Penurunan Biaya Pengobatan", description: "Generasi yang sehat menekan beban biaya pengobatan bagi keluarga dan negara." },
    { title: "Peningkatan PDB Jangka Panjang", description: "Generasi sehat dan produktif berkontribusi pada pertumbuhan ekonomi yang berkelanjutan." },
  ],
  sasaran: ["Peserta Didik", "Anak-Anak", "Ibu Hamil dan Menyusui"],
  externalLinks: [
    { title: "Dasbor MBG", href: "https://mbg.pdm.kemendikdasmen.go.id/portal" },
    { title: "Badan Gizi Nasional", href: "https://www.bgn.go.id/" },
  ],
};

export const ckg = {
  title: "Cek Kesehatan Gratis (CKG) Sekolah",
  shortTitle: "CKG",
  tagline: "Sekolah Mulai, Cek Kesehatan Gratis Jangan Terlewat!",
  intro:
    "Cek Kesehatan Gratis (CKG) Sekolah adalah pemeriksaan kesehatan gratis dari pemerintah untuk seluruh peserta didik kelas 1–12 atau sederajat (termasuk pesantren), yang dilaksanakan setiap tahun ajaran baru. Bukan hal yang perlu ditakuti — CKG Sekolah justru jadi langkah positif untuk mendeteksi masalah kesehatan sejak dini, sebelum berkembang jadi lebih serius, supaya siswa-siswi bisa belajar dan tumbuh dengan lebih optimal.",
  context:
    "Program ini bagian dari Cek Kesehatan Gratis (CKG) yang lebih luas, mengedepankan upaya promotif dan preventif — periksa hari ini, sehat di masa depan.",
  image: "/images/program/ckg.png",
  facts: [
    "Gratis untuk seluruh peserta didik kelas 1–12 atau sederajat, termasuk pesantren.",
    "Dilaksanakan mulai tahun ajaran baru, bulan Juli, setiap tahunnya.",
    "Pemeriksaan dilakukan langsung di sekolah/madrasah/pesantren oleh petugas Puskesmas bersama guru.",
    "Jenis pemeriksaan disesuaikan dengan jenjang pendidikan dan usia peserta didik.",
    "Hasil pemeriksaan dapat diakses melalui SATUSEHAT Mobile atau WhatsApp.",
    "Pelaksanaan CKG dilakukan atas sepengetahuan dan izin orang tua/wali.",
  ],
  legalBasis:
    "Seluruh ketentuan pelaksanaan CKG Sekolah — mulai dari paket pemeriksaan, tahapan penyelenggaraan, pendanaan, hingga monitoring dan evaluasi — diatur lengkap dalam Keputusan Menteri Kesehatan Nomor HK.01.07/MENKES/770/2025 tentang Petunjuk Teknis Cek Kesehatan Gratis Sekolah.",
  packages: [
    { jenjang: "SD/MI/Pesantren (Kelas 1–6)", cakupan: "Status gizi, riwayat imunisasi (kelas 1), telinga, mata, gigi, kesehatan jiwa, tekanan darah, gula darah, TBC, Hepatitis B; ditambah merokok, kebugaran & kesehatan reproduksi (kelas 4–6)." },
    { jenjang: "SMP/MTs/Pesantren (Kelas 7–9)", cakupan: "Semua pemeriksaan jenjang SD, ditambah anemia (kelas 7), talasemia, Hepatitis C, riwayat imunisasi HPV (kelas 9 putri)." },
    { jenjang: "SMA/SMK/MA/Pesantren (Kelas 10–12)", cakupan: "Sama seperti jenjang SMP, dengan pemeriksaan anemia untuk peserta didik putri kelas 10." },
  ],
  steps: [
    { label: "H-7 Sebelum Pelaksanaan", title: "Koordinasi & Sosialisasi", description: "Puskesmas berkoordinasi dengan sekolah, menyampaikan tata cara pendaftaran dan kuesioner skrining mandiri kepada peserta didik/orang tua." },
    { label: "H-2 Sebelum Pelaksanaan", title: "Pengecekan Kesiapan", description: "Puskesmas mengecek jumlah pendaftar dan kelengkapan kuesioner, lalu menyiapkan alat kesehatan yang dibutuhkan." },
    { label: "Hari Pelaksanaan", title: "Pelaksanaan Pemeriksaan", description: "Peserta didik mengikuti pemeriksaan sesuai paket jenjangnya; tenaga kesehatan mencatat hasil secara real-time melalui SATUSEHAT IndonesiaKu." },
    { label: "Setelah Pelaksanaan", title: "Hasil & Tindak Lanjut", description: "Hasil pemeriksaan disampaikan langsung atau dikirim via WhatsApp/SATUSEHAT Mobile, lengkap dengan edukasi dan rujukan bila diperlukan." },
  ],
};

export const asri = {
  title: "Gerakan Sekolah ASRI",
  shortTitle: "ASRI",
  intro:
    "Gerakan Sekolah ASRI adalah program nasional yang mengajak seluruh warga sekolah — murid, guru, tenaga kependidikan, hingga orang tua — untuk bersama-sama menciptakan lingkungan belajar yang nyaman, bersih, hijau, dan aman.",
  context:
    "Gerakan ini merupakan bagian dari upaya pembinaan Usaha Kesehatan Sekolah/Madrasah (UKS/M) yang menekankan pada kebersihan, keindahan, dan kenyamanan lingkungan sekolah.",
  pillars: [
    { letter: "A", title: "Aman", description: "Bebas dari perundungan (bullying), infrastruktur yang tahan bencana, serta bekal keamanan digital untuk murid." },
    { letter: "S", title: "Sehat", description: "Gaya hidup sehat lewat kebiasaan cuci tangan, olahraga rutin, kantin sehat, dan kawasan bebas rokok." },
    { letter: "R", title: "Resik", description: "Budaya menjaga kebersihan lewat piket kelas, pemilahan sampah, daur ulang, hingga bank sampah sekolah." },
    { letter: "I", title: "Indah", description: "Penataan lingkungan fisik agar rapi, ruang terbuka hijau, dan pembiasaan tertib antre." },
  ],
};
