/**
 * ============================================================
 *  DATA PENAL CODE — EDIT DI SINI
 * ============================================================
 *  Ini data CONTOH. Ganti/tambah/hapus sesuai penal code
 *  server kamu sendiri. Struktur satu baris = satu pelanggaran:
 *
 *  {
 *    code:  "1-401(a)"      -> nomor pasal
 *    name:  "Pembunuhan Berencana" -> nama pelanggaran
 *    title: "person"        -> HARUS SAMA PERSIS dengan salah satu
 *                               "id" di CATEGORIES di bawah (bukan
 *                               nama panjangnya, cukup id-nya saja)
 *    class: "felony"        -> "infraction" | "misdemeanor" | "felony"
 *    time:  60               -> lama hukuman, dalam MENIT
 *    fine:  15000             -> denda, dalam angka (tanpa titik/koma)
 *    desc:  "..."            -> opsional, penjelasan singkat pasal
 *  }
 *
 *  Kategori (TITLE) bisa kamu ubah namanya (label) di CATEGORIES,
 *  tapi id-nya (person, Sexual Offenses & Public Indecency, dst) harus tetap dipakai
 *  konsisten di field "title" setiap kode.
 * ============================================================
 */

const CATEGORIES = [
  { id: "person",   label: "Title I  –  Crimes Against The Person" },
  { id: "Sexual",   label: "Title II  –  Sexual Offenses & Public Indecency" },
  { id: "Public Health and Safety",   label: "Title III  –  Crimes Against Public Health and Safety" },
  { id: "Against the Public Peace",    label: "Title IV  –  Crimes Against the Public Peace" },
  { id: "Against Property", label: "Title V  –  Crimes Against Property" },
  { id: "Against Public Justice",  label: "Title VI  –  Crimes Against Public Justice" },
  { id: "With a Vehicle",  label: "Title VII  –  Crimes With a Vehicle" },
  { id: "Weapon and Firearm Violation",   label: "Title VIII  –  Weapon and Firearm Violation" },
  { id: "vcode",    label: "Title IX  –  Vehicle Code" },
];

const PENAL_CODES = [
  // ---------- TITLE I · Crimes Against The Person ----------
  { code: "101(a)", name: "Criminal Threats (Fisik/Mati)", title: "person", class: "misdemeanor", time: 30, fine: 5000,
    desc: "Seseorang yang mengkomunikasikan kepada orang lain bahwa mereka akan melukai secara fisik atau membunuh orang tersebut, sehingga menempatkan orang itu dalam keadaan takut yang wajar terhadap keamanannya sendiri — baik secara langsung, tertulis, atau melalui media, dianggap bersalah melakukan misdemeanor." },
  { code: "101(b)", name: "Criminal Threats (Kerabat)", title: "person", class: "misdemeanor", time: 30, fine: 5000,
    desc: "Seseorang yang mengkomunikasikan bahwa mereka akan melukai secara fisik atau membunuh teman dekat atau kerabat orang lain — baik secara langsung, tertulis, atau melalui media, dianggap bersalah melakukan misdemeanor." },
  { code: "102", name: "Assault", title: "person", class: "misdemeanor", time: 25, fine: 6000,
    desc: "Seseorang yang secara ilegal mencoba dan memiliki kemampuan untuk melakukan cedera yang kekerasan pada orang lain dianggap bersalah melakukan misdemeanor." },
  { code: "103", name: "Assault on a Peace Officer", title: "person", class: "misdemeanor", time: 30, fine: 6500,
    desc: "Seseorang yang secara ilegal mencoba dan memiliki kemampuan untuk melakukan cedera yang kekerasan pada seorang petugas keamanan yang sedang menjalankan tugasnya dianggap bersalah melakukan misdemeanor." },
  { code: "104", name: "Assault on a State Employee", title: "person", class: "misdemeanor", time: 40, fine: 7000,
    desc: "Seseorang yang secara ilegal mencoba dan memiliki kemampuan untuk melakukan cedera yang kekerasan pada seorang pegawai negeri yang sedang menjalankan tugasnya dianggap bersalah melakukan misdemeanor." },
  { code: "105", name: "Assault with a Deadly Weapon", title: "person", class: "felony", time: 40, fine: 10000,
    desc: "Seseorang yang mencoba menyebabkan atau mengancam bahaya segera kepada orang lain dengan menggunakan senjata, alat, atau barang berbahaya lainnya untuk menyampaikan ancaman tersebut dianggap bersalah melakukan felony." },
  { code: "106", name: "Assault with a Deadly Weapon on a Peace Officer", title: "person", class: "felony", time: 50, fine: 20000,
    desc: "Seseorang yang mencoba menyebabkan atau mengancam bahaya segera kepada seorang petugas keamanan yang sedang menjalankan tugasnya, sambil menggunakan senjata, alat, atau barang berbahaya lainnya untuk menyampaikan ancaman tersebut, dianggap bersalah melakukan felony." },
  { code: "107", name: "Battery", title: "person", class: "misdemeanor", time: 24, fine: 4500,
    desc: "Seseorang yang menggunakan kekuatan atau kekerasan yang sengaja dan tidak sah untuk menyebabkan kerugian fisik kepada orang lain dianggap bersalah melakukan misdemeanor." },
  { code: "108", name: "Battery on a Peace Officer", title: "person", class: "misdemeanor", time: 30, fine: 5000,
    desc: "Seseorang yang menggunakan kekuatan atau kekerasan yang sengaja dan tidak sah untuk menyebabkan kerugian fisik kepada seorang petugas keamanan yang sedang menjalankan tugasnya dianggap bersalah melakukan misdemeanor." },
  { code: "109", name: "Battery on a State Employee", title: "person", class: "misdemeanor", time: 30, fine: 5000,
    desc: "Seseorang yang menggunakan kekuatan atau kekerasan yang sengaja dan tidak sah untuk menyebabkan kerugian fisik kepada seorang pegawai negeri yang sedang menjalankan tugasnya dianggap bersalah melakukan misdemeanor." },
  { code: "110(a)", name: "Aggravated Battery", title: "person", class: "felony", time: 36, fine: 8500,
    desc: "Seseorang yang menggunakan kekuatan atau kekerasan yang besar atau berkelanjutan terhadap orang lain dan menyebabkan kerugian berat dianggap bersalah melakukan felony." },
  { code: "110(b)", name: "Aggravated Battery (Weapon)", title: "person", class: "felony", time: 48, fine: 9000,
    desc: "Seseorang yang menggunakan senjata, alat, atau barang berbahaya lainnya untuk menyebabkan kerugian berat kepada orang lain dianggap bersalah melakukan felony." },
  { code: "111", name: "Manslaughter", title: "person", class: "felony", time: 72, fine: 11000,
    desc: "Seseorang yang secara tidak sah membunuh manusia lain tanpa niat jahat dianggap bersalah melakukan felony. Manslaughter dapat bersifat sukarela, tidak sukarela, atau melibatkan kendaraan bermotor sesuai keadaan tindak pidana." },
  { code: "112(a)", name: "False Imprisonment", title: "person", class: "felony", time: 36, fine: 6500,
    desc: "Seseorang yang menahan atau menangkap orang lain tanpa persetujuan mereka atau persetujuan wali mereka, tanpa niat yang direncanakan atau tebusan, dianggap bersalah melakukan felony. Ketentuan ini tidak berlaku untuk petugas penegak hukum yang menjalankan tugas secara sah." },
  { code: "112(b)", name: "Unlawful Citizen Arrest", title: "person", class: "misdemeanor", time: 12, fine: 2500,
    desc: "Seseorang yang melakukan penangkapan warga yang tidak sah dianggap bersalah melakukan misdemeanor. Ketentuan ini juga tidak berlaku untuk petugas penegak hukum yang menjalankan tugas secara sah." },
  { code: "113(a)", name: "Kidnapping", title: "person", class: "felony", time: 48, fine: 6500,
    desc: "Seseorang yang mengambil, menahan, atau menangkap orang lain dengan kekuatan atau cara lain yang menimbulkan ketakutan, tanpa persetujuan mereka atau wali mereka dan dengan niat yang direncanakan, dianggap bersalah melakukan felony." },
  { code: "113(b)", name: "Kidnapping (Ransom)", title: "person", class: "felony", time: 56, fine: 6600,
    desc: "Seseorang yang merebut, mengurung, menipu, menculik, menyembunyikan, atau mengangkut orang lain dengan niat untuk menahan atau menangkap orang tersebut, atau menahannya untuk tebusan, imbalan, pemerasan, atau mendapatkan uang atau barang berharga, dianggap bersalah melakukan felony." },
  { code: "114", name: "Mayhem", title: "person", class: "felony", time: 82, fine: 11000,
    desc: "Seseorang yang menyebabkan rasa sakit dan penderitaan dengan tujuan balas dendam, pemerasan, persuasi, atau tujuan sadis, atau dengan sengaja merusak, melumpuhkan, menghancurkan, atau merusak bagian tubuh seseorang dianggap bersalah melakukan felony." },
  { code: "115(a)", name: "Stalking", title: "person", class: "misdemeanor", time: 12, fine: 3500,
    desc: "Seseorang yang dengan sengaja dan berniat jahat mengikuti atau mengganggu orang lain yang telah menyatakan bahwa mereka tidak setuju dengan tindakan tersebut dianggap bersalah melakukan misdemeanor." },
  { code: "115(b)", name: "Stalking (RO Violation)", title: "person", class: "misdemeanor", time: 16, fine: 4000,
    desc: "Seseorang yang melanggar perintah penahanan resmi yang dikeluarkan oleh pengadilan dianggap bersalah melakukan misdemeanor." },
  { code: "116(a)", name: "Human Trafficking", title: "person", class: "felony", time: 36, fine: 7500,
    desc: "Seseorang yang dengan sengaja membatasi kebebasan orang lain dengan niat untuk memaksa kerja atau perdagangan seks, atau kegiatan paksa lainnya dianggap bersalah melakukan felony." },
  { code: "116(b)", name: "Human Trafficking (Illegal Entry)", title: "person", class: "felony", time: 120, fine: 20000,
    desc: "Seseorang yang dengan sengaja menyelinap orang asing ke dalam negara bagian tanpa visa dan identitas yang tepat dianggap bersalah melakukan felony." },
  { code: "185", name: "Wearing a Mask or Disguise to Evade Police", title: "person", class: "misdemeanor", time: 4, fine: 2000,
    desc: "Seseorang yang mengenakan topeng, jenggot palsu, atau penyamaran pribadi untuk menghindari penemuan, pengenalan, atau identifikasi dalam melakukan pelanggaran publik dianggap bersalah melakukan misdemeanor." },
  { code: "187(a)", name: "Murder — First Degree", title: "person", class: "felony", time: 132, fine: 30000,
    desc: "First Degree of Murder adalah seseorang yang secara ilegal membunuh orang lain dengan cara yang disengaja, direncanakan, deliberate, dan premeditated. Pembunuhan terhadap petugas keamanan yang sedang menjalankan tugasnya dianggap sebagai felony." },
  { code: "187(b)", name: "Murder — Second Degree", title: "person", class: "felony", time: 120, fine: 25000,
    desc: "Second Degree of Murder adalah seseorang yang secara ilegal membunuh manusia lain tanpa perencanaan dan deliberasi, tetapi dengan niat jahat sebelumnya, dianggap bersalah melakukan felony." },
  { code: "187(c)", name: "Felony Murder", title: "person", class: "felony", time: 120, fine: 23000,
    desc: "Felony murder terjadi ketika seseorang melakukan pembunuhan saat terlibat dalam suatu tindakan felony yang terbukti sebagai tindakan premeditated. Felony murder 187(c) didakwa bersamaan dengan tindakan felony asli yang mengarah pada pembunuhan." },
  { code: "188(a)", name: "Attempted Murder", title: "person", class: "felony", time: 56, fine: 9500,
    desc: "Seseorang yang dengan sengaja dan tegas mencoba untuk membunuh atau menyebabkan bahaya yang mengancam jiwa orang lain melalui tindakan premeditasi dianggap bersalah melakukan felony." },
  { code: "188(b)", name: "Attempted Murder (Criminal Accident)", title: "person", class: "felony", time: 48, fine: 8700,
    desc: "Seseorang yang akibat kecelakaan kriminal, kelalaian, atau dalam keadaan emosi yang tinggi menyebabkan kerusakan fisik yang parah atau mengancam jiwa orang lain dianggap bersalah melakukan felony." },
  { code: "211", name: "Robbery", title: "person", class: "felony", time: 30, fine: 10000,
    desc: "Seseorang yang mengambil harta dari kepemilikan orang lain tanpa izin mereka, dengan menggunakan kekuatan atau rasa takut dianggap bersalah melakukan felony." },
  { code: "215", name: "Carjacking", title: "person", class: "felony", time: 30, fine: 5000,
    desc: "Seseorang yang mengambil kendaraan bermotor yang berada dalam kepemilikan orang lain, dari tangan atau kehadiran orang tersebut, dengan menggunakan kekuatan atau rasa takut dianggap bersalah melakukan felony." },
  // ---------- TITLE II · Sexual Offenses & Public Indecency ----------
    {
    code: "216",
    name: "Rape",
    title: "Sexual",
    class: "felony",
    time: 56,
    fine: 6000,
    desc: "Seseorang yang memaksa orang lain untuk melakukan hubungan seksual, atau seseorang yang melakukan hubungan seksual tanpa persetujuan dengan orang lain, atau seseorang yang melakukan hubungan seksual dengan orang lain yang tidak mampu, cacat, atau tidak dapat memberikan persetujuan, dianggap bersalah melakukan felony."
  },
  {
    code: "217",
    name: "Lewd Or Dissolute Conduct In Public",
    title: "Sexual",
    class: "misdemeanor",
    time: 12,
    fine: 2500,
    desc: "Seseorang yang meminta siapa pun untuk, atau terlibat dalam, perilaku seksual yang tidak pantas atau perilaku yang sugestif secara seksual di tempat umum atau di tempat yang terbuka untuk umum atau terlihat oleh publik, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "218(a)",
    name: "Indecent Exposure (Tanah Publik)",
    title: "Sexual",
    class: "misdemeanor",
    time: 14,
    fine: 3000,
    desc: "Seseorang yang dengan sengaja memperlihatkan tubuh telanjang atau genitalia mereka di tanah publik atau di area publik dari bisnis yang dimiliki secara pribadi, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "218(b)",
    name: "Indecent Exposure (Tanah Pribadi)",
    title: "Sexual",
    class: "misdemeanor",
    time: 12,
    fine: 2500,
    desc: "Seseorang yang dengan sengaja memperlihatkan tubuh telanjang atau genitalia mereka di tanah pribadi tanpa izin dari pemilik tanah, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "218(c)",
    name: "Indecent Exposure (Di Depan Anak Di Bawah Umur)",
    title: "Sexual",
    class: "felony",
    time: 18,
    fine: 3500,
    desc: "Seseorang yang terlibat dalam seks atau aktivitas seksual lainnya di depan anak di bawah umur, dianggap bersalah melakukan felony."
  },
  {
    code: "219",
    name: "Sexual Assault",
    title: "Sexual",
    class: "misdemeanor",
    time: 24,
    fine: 4500,
    desc: "Seseorang yang melakukan penghinaan verbal untuk tujuan penggairahan seksual, gratifikasi, atau penyalahgunaan, atau seseorang yang mengancam bahaya yang akan segera terjadi atau kontak seksual yang tidak disetujui, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "220(a)",
    name: "Sexual Battery (Sentuhan Tidak Diinginkan)",
    title: "Sexual",
    class: "misdemeanor",
    time: 30,
    fine: 3500,
    desc: "Seseorang yang melakukan sentuhan yang tidak diinginkan atau kontak seksual, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "220(b)",
    name: "Sexual Battery (Serangan/Kontak Fisik Agresif)",
    title: "Sexual",
    class: "felony",
    time: 36,
    fine: 5500,
    desc: "Seseorang yang menyebabkan serangan atau kontak fisik agresif serupa untuk tujuan penggairahan seksual, gratifikasi, atau penyalahgunaan, dianggap bersalah melakukan felony."
  },
  {
    code: "221",
    name: "Prostitution",
    title: "Sexual",
    class: "misdemeanor",
    time: 8,
    fine: 1500,
    desc: "Seseorang yang dengan sadar terlibat dalam tindakan seksual sebagai imbalan untuk pembayaran, barang, layanan, atau barang lainnya yang bernilai, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "222",
    name: "Solicitation of a Prostitute",
    title: "Sexual",
    class: "misdemeanor",
    time: 8,
    fine: 1500,
    desc: "Seseorang yang menawarkan pembayaran, barang, layanan, atau barang lainnya yang bernilai kepada seseorang sebagai imbalan untuk tindakan seksual, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "223",
    name: "Pandering / Pimping",
    title: "Sexual",
    class: "felony",
    time: 20,
    fine: 3500,
    desc: "Seseorang yang mengajak atau mengiklankan, membantu atau menyediakan transportasi atau mengawasi orang-orang yang terlibat dalam prostitusi dan mempertahankan sebagian atau seluruh uang yang dihasilkan, dianggap bersalah melakukan felony."
  },
  {
    code: "224",
    name: "Statutory Rape",
    title: "Sexual",
    class: "felony",
    time: 18,
    fine: 5000,
    desc: "Seseorang yang terlibat dalam hubungan seksual yang saling menguntungkan dengan orang lain yang berusia di bawah 18 tahun dan oleh karena itu tidak dapat memberikan persetujuan hukum, dianggap bersalah melakukan felony."
  },
  {
    code: "225",
    name: "Child Abuse",
    title: "Sexual",
    class: "felony",
    time: 35,
    fine: 7000,
    desc: "Seseorang yang dengan sengaja menyebabkan siksaan yang kejam, berlebihan, atau tidak manusiawi terhadap anak di bawah 18 tahun, atau menyebabkan cedera yang mengakibatkan kerugian traumatis, atau menyebabkan cedera traumatis akibat kelalaian, dianggap bersalah melakukan felony."
  },
  {
    code: "226",
    name: "Possession of Child Pornography",
    title: "Sexual",
    class: "felony",
    time: 65,
    fine: 5000,
    desc: "Setiap orang yang dengan sengaja memiliki gambar, film, video, atau perangkat penyimpanan yang berisi konten seorang anak di bawah 18 tahun yang terlibat atau meniru perilaku seksual, dianggap bersalah melakukan felony."
  },
  {
    code: "227",
    name: "Solicitation of a Minor",
    title: "Sexual",
    class: "felony",
    time: 24,
    fine: 4500,
    desc: "Setiap orang yang berkomunikasi dengan anak di bawah umur untuk bertemu demi tindakan seksual, atau menghadiri pertemuan yang telah diatur, atau mengirimkan materi eksplisit/obscene kepada anak di bawah umur dengan tujuan menggoda, dianggap bersalah melakukan felony."
  },
  {
    code: "228",
    name: "Minor Alcohol Violation",
    title: "Sexual",
    class: "infraction",
    time: 0,
    fine: 2500,
    desc: "Seorang anak di bawah umur yang berusia di bawah 21 tahun yang memiliki alkohol untuk dikonsumsi, produk yang mengandung alkohol, atau yang terlihat sedang berada di bawah pengaruh alkohol, akan dikenakan infraction."
  },
  {
    code: "229",
    name: "Sale of Alcohol to a Minor",
    title: "Sexual",
    class: "misdemeanor",
    time: 4,
    fine: 500,
    desc: "Seorang yang dengan sengaja dan mengetahui menjual alkohol atau produk yang mengandung alkohol kepada anak di bawah umur yang berusia di bawah 21 tahun, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "230(a)",
    name: "Animal Abuse / Cruelty (Sengaja)",
    title: "Sexual",
    class: "felony",
    time: 16,
    fine: 500,
    desc: "Seorang yang dengan sengaja melukai, mencabik, menyiksa, melukai, atau membunuh hewan hidup, dianggap bersalah melakukan felony. Pemburu dibebaskan saat dengan sengaja membunuh hewan buruan saat berburu, namun tetap bersalah bila menyebabkan penderitaan yang tidak perlu sebelum membunuhnya."
  },
  {
    code: "230(b)",
    name: "Animal Abuse / Cruelty (Kelalaian)",
    title: "Sexual",
    class: "felony",
    time: 12,
    fine: 1500,
    desc: "Seorang yang karena kelalaian melukai, mencabik, menyiksa, melukai, atau membunuh hewan hidup, dianggap bersalah melakukan felony."
  },
  {
    code: "232",
    name: "Sale of Tobacco to a Minor",
    title: "Sexual",
    class: "misdemeanor",
    time: 4,
    fine: 500,
    desc: "Seorang yang dengan sengaja dan mengetahui menjual produk yang mengandung tobacco kepada seorang minor di bawah usia 21 tahun, dianggap bersalah melakukan misdemeanor."
  },
    // ---------- TITLE III · Public Health and Safety ----------
   {
    code: "301",
    name: "Littering",
    title: "Public Health and Safety",
    class: "infraction",
    time: 0,
    fine: 3000,
    desc: "Tindakan yang disengaja atau kelalaian melempar, menjatuhkan, menempatkan, atau menyebabkan terjadinya tindakan seperti itu, terhadap sampah termasuk namun tidak terbatas pada rokok yang menyala atau tidak menyala, cerutu, koreks api, atau sampah, barang bekas, limbah, kertas, wadah, kemasan, atau objek lain yang mungkin melukai seseorang atau menciptakan bahaya lalu lintas, akan dikenakan infraction."
  },
  {
    code: "302",
    name: "Illegally Discharging a Firearm",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 4,
    fine: 5000,
    desc: "Kecuali sebagaimana diatur oleh hukum, setiap orang yang dengan sengaja melepaskan tembakan dengan cara yang sangat ceroboh yang dapat mengakibatkan cedera atau kematian seseorang, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "303",
    name: "Shooting At An Inhabited Dwelling Or Occupied Car",
    title: "Public Health and Safety",
    class: "felony",
    time: 36,
    fine: 5500,
    desc: "Setiap orang yang dengan niat jahat dan sengaja melepaskan tembakan ke arah rumah yang dihuni, gedung yang ditempati, kendaraan bermotor yang dihuni, pesawat yang ditempati, atau trailer yang dihuni, dianggap bersalah melakukan felony."
  },
  {
    code: "304",
    name: "Possession of a Controlled Substance Other than Marijuana",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 4,
    fine: 1000,
    desc: "Setiap orang yang memiliki zat terkontrol, kecuali jika zat tersebut telah diberikan secara sah oleh seorang praktisi medis yang berlisensi atau tersedia secara legal tanpa resep, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "305",
    name: "Possession of a Controlled Substance Other than Marijuana with Intent To Sell",
    title: "Public Health and Safety",
    class: "felony",
    time: 24,
    fine: 3500,
    desc: "Setiap orang yang memiliki zat terkontrol atau beberapa zat terkontrol lainnya selain ganja dalam jumlah lebih dari 10 gram, dianggap bersalah melakukan felony."
  },
  {
    code: "306",
    name: "Possession of Drug Paraphernalia",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 4,
    fine: 500,
    desc: "Setiap orang yang dengan sengaja memiliki alat atau mekanisme yang digunakan secara eksklusif untuk memproses atau mengonsumsi zat terkontrol ilegal, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "307",
    name: "Maintaining A Place For The Purpose Of Distribution",
    title: "Public Health and Safety",
    class: "felony",
    time: 28,
    fine: 4500,
    desc: "Setiap orang yang membuka atau memelihara properti dengan tujuan untuk secara ilegal menjual, memberikan, menyimpan, atau menggunakan zat terkontrol, senjata api, atau perangkat, barang, atau layanan ilegal lainnya, dianggap bersalah melakukan felony."
  },
  {
    code: "308",
    name: "Manufacture of a Controlled Substance",
    title: "Public Health and Safety",
    class: "felony",
    time: 48,
    fine: 5500,
    desc: "Setiap orang yang, kecuali ditentukan lain oleh hukum, memproduksi, meramu, mengubah, menghasilkan, atau menyiapkan, baik secara langsung maupun tidak langsung melalui ekstraksi kimia atau alami, zat ilegal, dianggap bersalah melakukan felony."
  },
  {
    code: "309",
    name: "Sale of a Controlled Substance Other than Marijuana",
    title: "Public Health and Safety",
    class: "felony",
    time: 36,
    fine: 3500,
    desc: "Setiap orang yang menjual, atau memiliki niat untuk menjual, zat terkontrol kepada orang lain, terlepas dari apakah mereka memiliki zat terkontrol tersebut atau tidak, dianggap bersalah melakukan felony."
  },
  {
    code: "310",
    name: "Sale of a Controlled Substance",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 14,
    fine: 1500,
    desc: "Setiap orang yang menjual, atau memiliki niat untuk menjual, ganja atau obat resep kepada orang lain, terlepas dari apakah mereka memiliki zat terkontrol tersebut atau tidak, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "311",
    name: "Possession of an Open Container",
    title: "Public Health and Safety",
    class: "infraction",
    time: 0,
    fine: 5000,
    desc: "Seseorang yang memiliki wadah alkohol yang terlihat dan terbuka di tempat umum atau di dalam kendaraan bermotor, akan dikenakan infraction."
  },
  {
    code: "312",
    name: "Public Intoxication",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 4,
    fine: 400,
    desc: "Seseorang yang ditemukan di tempat umum di bawah pengaruh minuman beralkohol bersifat memabukkan, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "313(a)",
    name: "Under The Influence of a Controlled Substance",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 5,
    fine: 500,
    desc: "Seseorang yang menggunakan atau berada di bawah pengaruh zat terlarang atau zat berbahaya tanpa izin atau resep yang sah untuk menggunakan zat tersebut, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "313(b)",
    name: "Under The Influence of Marijuana in Public",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 4,
    fine: 300,
    desc: "Seseorang yang menggunakan atau berada di bawah pengaruh ganja di tempat umum, atau saat melakukan kejahatan lainnya, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "314(a)",
    name: "Possession of Marijuana (Lebih Dari 5 Gram)",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 6,
    fine: 500,
    desc: "Kepemilikan marijuana adalah legal kecuali seseorang yang memiliki lebih dari 5 gram, dianggap bersalah atas misdemeanor."
  },
  {
    code: "314(b)",
    name: "Possession of Marijuana (Di Bawah 21 Tahun)",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 4,
    fine: 400,
    desc: "Seseorang yang berusia di bawah 21 tahun yang memiliki hingga 5 gram marijuana, dianggap bersalah atas misdemeanor."
  },
  {
    code: "314(c)",
    name: "Possession of Marijuana (Di Bawah 18 Tahun)",
    title: "Public Health and Safety",
    class: "infraction",
    time: 0,
    fine: 2000,
    desc: "Seseorang yang berusia di bawah 18 tahun yang memiliki hingga 5 gram marijuana, akan dikenakan infraction."
  },
  {
    code: "315",
    name: "Possession of an Unlicensed Firearm",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 40,
    fine: 10000,
    desc: "Seseorang yang membawa senjata yang legal tetapi tanpa lisensi di tubuhnya, dalam kendaraan, tempat usaha, atau fasilitas lain tanpa izin yang sesuai, dianggap bersalah atas misdemeanor."
  },
  {
    code: "316",
    name: "Possession of a Destructive Device",
    title: "Public Health and Safety",
    class: "felony",
    time: 30,
    fine: 5000,
    desc: "Seseorang yang memiliki alat atau perangkat yang dibuat dari bahan peledak dan/atau cairan yang sangat mudah terbakar, gas, atau bahan padat, dianggap bersalah atas felony."
  },
  {
    code: "317",
    name: "Manufacture of a Destructive Device or Prohibited Weapon",
    title: "Public Health and Safety",
    class: "felony",
    time: 32,
    fine: 15000,
    desc: "Seseorang yang memproduksi, merakit, membongkar, atau memiliki bagian dari senjata yang berbahaya, peledak, perangkap, senjata api, pisau, atau alat perusak lainnya, dianggap bersalah atas felony."
  },
  {
    code: "318",
    name: "Illegal Sale, Lease, or Transfer of a Firearm",
    title: "Public Health and Safety",
    class: "felony",
    time: 60,
    fine: 10000,
    desc: "Seseorang yang menjual, menyewakan, atau mentransfer senjata api kepada orang lain tanpa Federal Firearms License, dianggap bersalah atas felony. Tuduhan ini dapat digabungkan dengan setiap senjata api yang dijual, disewakan, atau ditransfer secara ilegal. Transfer senjata api antara orang tua dan anak atau nenek dan cucu dikecualikan dari persyaratan Federal Firearms License."
  },
  {
    code: "319(a)",
    name: "Drive-By Shooting (Mengizinkan Penembakan Dari Kendaraan)",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 16,
    fine: 3000,
    desc: "Seorang pengemudi atau pemilik kendaraan yang dengan sengaja mengizinkan orang lain untuk menembakkan senjata api dari kendaraan tersebut, dianggap bersalah atas misdemeanor."
  },
  {
    code: "319(b)",
    name: "Drive-By Shooting (Menembak Dari Kendaraan)",
    title: "Public Health and Safety",
    class: "felony",
    time: 30,
    fine: 5000,
    desc: "Seseorang yang menembakkan senjata api dari kendaraan ke arah orang lain, dianggap bersalah atas felony."
  },
  {
    code: "320",
    name: "Weapons License Violation",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 50,
    fine: 5000,
    desc: "Seseorang yang membawa senjata api secara tersembunyi dengan memiliki CCW license namun melanggar ketentuan berikut dianggap bersalah atas misdemeanor dan dikenakan penarikan CCW: masuk ke area yang dilarang seperti sekolah, gedung pengadilan, atau bisnis yang menjual alkohol untuk dikonsumsi; menolak menunjukkan CCW license; gagal memberi tahu penegak hukum tentang membawa senjata dalam kendaraan saat dihentikan; menolak menyerahkan senjata tersembunyi kepada petugas keamanan saat diminta; mengonsumsi alkohol saat aktif membawa senjata api tersembunyi; atau pelanggaran regulasi senjata api lainnya yang ditetapkan oleh agen lisensi yang sesuai."
  },
  {
    code: "321",
    name: "Failure to Report a Stolen Firearm",
    title: "Public Health and Safety",
    class: "misdemeanor",
    time: 40,
    fine: 5000,
    desc: "Seseorang yang gagal melaporkan senjata api mereka sebagai hilang dalam waktu 48 jam setelah mengetahui atau memiliki alasan yang masuk akal bahwa senjata api tersebut hilang, dianggap bersalah atas misdemeanor."
  },
  {
    code: "322",
    name: "Illegal Distribution of Ammunition",
    title: "Public Health and Safety",
    class: "felony",
    time: 30,
    fine: 5500,
    desc: "Seseorang yang menjual atau mendistribusikan amunisi dengan cara ilegal, dianggap bersalah atas felony."
  },
  {
    code: "323(a)",
    name: "Terrorism (Ancaman/Tindakan Sistematis)",
    title: "Public Health and Safety",
    class: "felony",
    time: 180,
    fine: 100000,
    desc: "Seseorang yang menggunakan ancaman atau tindakan sistematis terhadap kepentingan umum untuk menimbulkan ketakutan dan intimidasi dalam skala besar, dianggap bersalah atas felony."
  },
  {
    code: "323(b)",
    name: "Terrorism (Serangan Terhadap Fasilitas Publik)",
    title: "Public Health and Safety",
    class: "felony",
    time: "Up to Death Penalty",
    fine: null,
    desc: "Seseorang yang melakukan serangan atau mengancam serangan terhadap fasilitas publik atau pribadi yang besar, seperti kompleks perkantoran, stadion, sistem transportasi publik, jembatan, atau struktur lainnya, dianggap bersalah atas felony."
  },
  {
    code: "324",
    name: "Treason",
    title: "Public Health and Safety",
    class: "felony",
    time: "Death Penalty",
    fine: 100000,
    desc: "Seseorang yang melakukan perang terhadap negara bagian San Andreas, berpegang pada musuh negara tersebut, atau memberikan bantuan dan kenyamanan kepada mereka sementara tetap setia kepada negara, dianggap bersalah atas felony."
  },
  {
    code: "401(a)",
    name: "Unlawful Assembly (Berkumpul Untuk Tindak Pidana)",
    title: "Against the Public Peace",
    class: "misdemeanor",
    time: 4,
    fine: 500,
    desc: "Dua atau lebih orang yang berkumpul untuk melakukan tindak pidana atau melakukan tindak hukum dengan cara yang kekerasan atau anarkis, dianggap bersalah atas misdemeanor."
  },
  {
    code: "401(b)",
    name: "Unlawful Assembly (Demonstrasi Tanpa Izin)",
    title: "Against the Public Peace",
    class: "infraction",
    time: 0,
    fine: 9000,
    desc: "Sebuah kelompok yang gagal untuk berunjuk rasa atau demonstrasi dengan damai tanpa izin atau otorisasi yang tepat dari kota, akan dikenakan infraction kepada pemimpin atau pengorganisir kelompok tersebut."
  },
  {
    code: "402",
    name: "Incitement to Riot",
    title: "Against the Public Peace",
    class: "felony",
    time: 20,
    fine: 4500,
    desc: "Seseorang yang tindakannya dengan sengaja menggugah atau berniat untuk menggugah kerumunan atau kelompok besar orang yang terorganisir atau berada dengan damai di area publik atau pribadi untuk mendorong tindakan kekerasan atau kerusuhan sipil, dianggap bersalah atas felony."
  },
  {
    code: "403(a)",
    name: "Riot (Tetap Hadir Setelah Peringatan)",
    title: "Against the Public Peace",
    class: "misdemeanor",
    time: 8,
    fine: 500,
    desc: "Seseorang yang tetap hadir di tempat kerusuhan atau pertemuan yang tidak sah setelah diberi peringatan secara hukum untuk beranjak, dianggap bersalah atas misdemeanor."
  },
  {
    code: "403(b)",
    name: "Riot (Membebaskan Tahanan Dengan Kerusuhan)",
    title: "Against the Public Peace",
    class: "felony",
    time: 24,
    fine: 5000,
    desc: "Seseorang yang berpartisipasi dalam pengambilan orang lain dari penahanan yang sah oleh petugas keamanan dengan menggunakan kerusuhan, dianggap bersalah atas felony."
  },
  {
    code: "404",
    name: "Brandishing a Firearm",
    title: "Against the Public Peace",
    class: "felony",
    time: 120,
    fine: 15000,
    desc: "Seseorang yang, kecuali dalam perlawanan diri, mengeluarkan atau memperlihatkan senjata api dengan cara yang marah atau mengancam, dianggap bersalah atas felony."
  },
  {
    code: "405",
    name: "Brandishing a Deadly Weapon",
    title: "Against the Public Peace",
    class: "misdemeanor",
    time: 20,
    fine: 2500,
    desc: "Seseorang yang, kecuali dalam perlawanan diri, mengeluarkan atau memperlihatkan senjata mematikan lain selain senjata api dengan cara yang marah atau mengancam, dianggap bersalah atas misdemeanor."
  },
  {
    code: "406(a)",
    name: "Unauthorized Entry on an Emergency Site",
    title: "Against the Public Peace",
    class: "misdemeanor",
    time: 10,
    fine: 2500,
    desc: "Seseorang yang memasuki area darurat, yang termasuk zona berbahaya, atau area yang telah dievakuasi karena darurat, mengetahui bahwa dia tidak berwenang untuk masuk dan bahwa area tersebut telah ditutup untuk umum oleh otoritas atau agen pemerintah yang bertanggung jawab, dianggap bersalah atas misdemeanor."
  },
  {
    code: "406(b)",
    name: "Refusing to Leave an Emergency Site",
    title: "Against the Public Peace",
    class: "misdemeanor",
    time: 15,
    fine: 2000,
    desc: "Seseorang yang ditangkap, dikeluarkan, atau diminta untuk meninggalkan area darurat, yang termasuk zona berbahaya, atau area yang telah dievakuasi karena darurat, oleh petugas keamanan yang bertindak di bawah otoritas pemerintah, dan yang menolak untuk melakukannya, atau yang masuk kembali ke area setelah dikeluarkan, dianggap bersalah atas misdemeanor."
  },
  {
    code: "406(c)",
    name: "Unlawful Conduct on an Emergency Site",
    title: "Against the Public Peace",
    class: "felony",
    time: 20,
    fine: 3000,
    desc: "Seseorang yang, saat berada di area darurat, yang termasuk zona berbahaya, atau area yang telah dievakuasi karena darurat, melakukan tindakan lain yang dilarang oleh hukum atau peraturan, termasuk tetapi tidak terbatas pada pencurian atau perampokan atas barang apapun atau kepemilikan, penggunaan, atau pengambilan barang secara ilegal, dianggap bersalah atas felony."
  },
  {
    code: "415(a)",
    name: "Disturbing the Peace (Bertarung/Menantang di Tempat Publik)",
    title: "Against the Public Peace",
    class: "misdemeanor",
    time: 3,
    fine: 200,
    desc: "Seseorang yang bertarung secara ilegal di tempat publik atau menantang orang lain di tempat publik untuk bertarung, atau di depan umum, terlepas dari persetujuan individu yang terlibat, dianggap bersalah atas misdemeanor."
  },
  {
    code: "415(b)",
    name: "Disturbing the Peace (Suara Keras dan Tidak Wajar)",
    title: "Against the Public Peace",
    class: "infraction",
    time: 0,
    fine: 2000,
    desc: "Seseorang yang mengganggu orang lain dengan suara yang keras dan tidak wajar, akan dikenakan infraction."
  },
  {
    code: "415(c)",
    name: "Disturbing the Peace (Kata-kata Provokatif)",
    title: "Against the Public Peace",
    class: "infraction",
    time: 0,
    fine: 5000,
    desc: "Seseorang yang menggunakan kata-kata yang menyinggung di tempat publik yang secara inheren cenderung memprovokasi reaksi kekerasan yang segera, akan dikenakan infraction."
  },
  {
    code: "459",
    name: "Burglary",
    title: "Against Property",
    class: "felony",
    time: 20,
    fine: 2500,
    desc: "Seseorang yang memasuki rumah, kamar, apartemen, toko, atau bangunan lainnya, atau kendaraan bermotor dengan niat untuk melakukan pencurian kecil, pencurian besar, atau felony lainnya, dianggap bersalah atas felony."
  },
  {
    code: "501(a)",
    name: "Embezzlement (Perorangan)",
    title: "Against Property",
    class: "misdemeanor",
    time: 8,
    fine: 500,
    desc: "Seseorang yang secara curang mengambil barang yang telah dipercayakan kepada mereka oleh orang lain, dianggap bersalah atas misdemeanor."
  },
  {
    code: "501(b)",
    name: "Embezzlement (Pegawai Negara)",
    title: "Against Property",
    class: "felony",
    time: 20,
    fine: 2500,
    desc: "Seorang pegawai negara yang secara curang memperoleh atau menggunakan barang yang berada dalam kepemilikan atau pengendaliannya berdasarkan kepercayaan tersebut, dianggap bersalah atas felony."
  },
  {
    code: "502(a)",
    name: "Arson (Disengaja)",
    title: "Against Property",
    class: "felony",
    time: 32,
    fine: 5500,
    desc: "Seseorang yang dengan sengaja dan jahat membakar atau membakar struktur, tanah hutan, atau barang tanpa izin sebelumnya, dianggap bersalah atas felony."
  },
  {
    code: "502(b)",
    name: "Arson (Kelalaian)",
    title: "Against Property",
    class: "misdemeanor",
    time: 4,
    fine: 500,
    desc: "Seseorang yang, melalui kecelakaan kriminal atau kelalaian, menyebabkan kebakaran yang membakar struktur, tanah hutan, atau barang, dianggap bersalah atas misdemeanor."
  },
  {
    code: "503",
    name: "Possession of Burglary Tools",
    title: "Against Property",
    class: "misdemeanor",
    time: 25,
    fine: 3000,
    desc: "Seseorang yang memiliki kombinasi alat yang tepat dan niat untuk melakukan pencurian, seperti batang tensa, obeng, shimmy, atau barang lainnya yang sesuai, dianggap bersalah atas misdemeanor."
  },
  {
    code: "504",
    name: "Forgery",
    title: "Against Property",
    class: "misdemeanor",
    time: 6,
    fine: 500,
    desc: "Seseorang yang, dengan niat untuk menipu atau membohongi orang lain, menandatangani nama orang lain atau nama fiktif, dianggap bersalah atas misdemeanor."
  },
  {
    code: "505",
    name: "Forgery of a State Document",
    title: "Against Property",
    class: "felony",
    time: 30,
    fine: 5000,
    desc: "Seseorang yang, dengan niat untuk menipu atau membohongi orang lain, secara sengaja mengubah, membuat, memiliki, atau mendistribusikan surat izin mengemudi yang palsu, surat izin pilot, kartu identitas yang dikeluarkan oleh agen pemerintah, atau izin senjata yang dikeluarkan oleh agen pemerintah, dianggap bersalah atas felony."
  },
  {
    code: "506",
    name: "Counterfeiting",
    title: "Against Property",
    class: "felony",
    time: 60,
    fine: 25000,
    desc: "Seseorang yang membuat atau sengaja memiliki alat seperti dadu, pelat, kertas, logam, atau mesin yang digunakan untuk memproduksi uang palsu, tagihan, koin, atau yang sengaja memiliki uang palsu, tagihan, atau koin, dianggap bersalah atas felony."
  },
  {
    code: "507",
    name: "Petty Theft",
    title: "Against Property",
    class: "misdemeanor",
    time: 8,
    fine: 1000,
    desc: "Seseorang yang mencuri atau mengambil barang pribadi milik orang lain, atau barang milik sebuah perusahaan, dengan nilai tidak melebihi $950, dianggap bersalah atas misdemeanor."
  },
  {
    code: "508(a)",
    name: "Grand Theft (Barang Bernilai Lebih Dari $950)",
    title: "Against Property",
    class: "felony",
    time: 20,
    fine: 2500,
    desc: "Seseorang yang mencuri atau mengambil barang pribadi milik orang lain, atau barang milik sebuah perusahaan, dengan nilai melebihi $950, dianggap bersalah atas felony."
  },
  {
    code: "508(b)",
    name: "Grand Theft (Mobil Tidak Dihuni)",
    title: "Against Property",
    class: "felony",
    time: 25,
    fine: 4000,
    desc: "Seseorang yang mencuri mobil yang tidak dihuni, dianggap bersalah atas felony."
  },
  {
    code: "508(c)",
    name: "Grand Theft (Senjata Api)",
    title: "Against Property",
    class: "felony",
    time: 30,
    fine: 10000,
    desc: "Seseorang yang mencuri senjata api, dianggap bersalah atas felony."
  },
  {
    code: "509(a)",
    name: "Extortion (Intimidasi/Kekerasan)",
    title: "Against Property",
    class: "felony",
    time: 22,
    fine: 3500,
    desc: "Seseorang yang menggunakan intimidasi atau kekerasan untuk, dengan persetujuannya, mendapatkan barang atau layanan dari orang lain, dianggap bersalah atas felony."
  },
  {
    code: "509(b)",
    name: "Extortion (Penyalahgunaan Kekuasaan/Otoritas)",
    title: "Against Property",
    class: "felony",
    time: 32,
    fine: 4500,
    desc: "Seseorang yang menggunakan atau mengancam dengan kekuasaannya atau otoritasnya dengan niat jahat untuk memaksa tindakan dari orang lain, dianggap bersalah atas felony."
  },
  {
    code: "510",
    name: "Receiving Stolen Property",
    title: "Against Property",
    class: "misdemeanor",
    time: 6,
    fine: 700,
    desc: "Seseorang yang dengan sengaja membeli atau menerima barang yang telah dicuri atau diperoleh dengan cara yang merupakan pencurian atau pemerasan, dianggap bersalah atas misdemeanor."
  },
  {
    code: "511(a)",
    name: "Insurance Fraud (Menghancurkan Barang Yang Diasuransikan)",
    title: "Against Property",
    class: "felony",
    time: 15,
    fine: 5000,
    desc: "Seseorang yang menghancurkan atau membuang barang yang pada saat itu diasuransikan terhadap kehilangan atau kerusakan akibat pencurian, penggelapan, banjir, atau kebakaran dengan niat untuk menipu perusahaan asuransi, baik barang tersebut milik atau dalam kepemilikan orang itu maupun orang lain, dianggap bersalah atas felony."
  },
  {
    code: "511(b)",
    name: "Insurance Fraud (Tabrakan/Kecelakaan Disengaja)",
    title: "Against Property",
    class: "misdemeanor",
    time: 8,
    fine: 1000,
    desc: "Seseorang yang sengaja menyebabkan atau berpartisipasi dalam tabrakan kendaraan atau kecelakaan kendaraan lainnya dengan niat untuk mengajukan klaim palsu atau penipuan, dianggap bersalah atas misdemeanor."
  },
  {
    code: "512(a)",
    name: "Trespass (Properti Tertutup)",
    title: "Against Property",
    class: "misdemeanor",
    time: 8,
    fine: 800,
    desc: "Seseorang yang memasuki properti orang lain saat ditutup atau tidak beroperasi tanpa izin tertulis atau diungkapkan untuk melakukannya, dianggap bersalah atas misdemeanor."
  },
  {
    code: "512(b)",
    name: "Trespass (Fasilitas Pemerintah)",
    title: "Against Property",
    class: "felony",
    time: 30,
    fine: 5000,
    desc: "Seseorang yang tanpa otorisasi yang tepat, memasuki fasilitas yang dimiliki atau dikelola pemerintah, atau bagian terlarang di gedung pemerintah yang diamankan dengan tujuan menjaga personel yang tidak berwenang keluar karena alasan keamanan atau bahaya keselamatan, dianggap bersalah atas felony."
  },
  {
    code: "512(c)",
    name: "Trespass (Tanda Dilarang Masuk)",
    title: "Against Property",
    class: "misdemeanor",
    time: 6,
    fine: 5000,
    desc: "Seseorang yang memasuki tanah di mana terdapat tanda yang menunjukkan bahwa masuk dilarang, dianggap bersalah atas misdemeanor."
  },
  {
    code: "512(d)",
    name: "Trespass (Menolak Meninggalkan Tempat Usaha)",
    title: "Against Property",
    class: "misdemeanor",
    time: 8,
    fine: 7000,
    desc: "Seseorang yang menolak meninggalkan tempat usaha saat diminta oleh pemilik atau orang yang berwenang, dianggap bersalah atas misdemeanor."
  },
  {
    code: "512(e)",
    name: "Trespass (Melanggar Peringatan Setelah Diberi Tahu)",
    title: "Against Property",
    class: "misdemeanor",
    time: 8,
    fine: 1000,
    desc: "Seseorang yang, meskipun telah menerima pemberitahuan dari penegak hukum atau pemilik properti bahwa mereka tidak diizinkan berada di properti tertentu, dengan sengaja melanggar peringatan itu dengan memasuki atau tetap berada di properti tersebut, dianggap bersalah atas misdemeanor."
  },
  {
    code: "513",
    name: "Fraud",
    title: "Against Property",
    class: "felony",
    time: 18,
    fine: 4000,
    desc: "Seseorang yang dengan sengaja, melalui pernyataan palsu atau penipuan, menipu orang lain atas uang, tenaga, barang, atau layanan lainnya, dianggap bersalah atas felony."
  },
  {
    code: "601",
    name: "Bribery",
    title: "Against Public Justice",
    class: "felony",
    time: 25,
    fine: 4500,
    desc: "Seseorang yang menawarkan atau memberikan hadiah uang, gratifikasi, barang berharga, layanan, atau imbalan lainnya kepada pejabat publik, pegawai negeri, atau petugas perdamaian dengan tujuan mempengaruhi tugas atau tindakan mereka, dianggap bersalah atas felony."
  },
  {
    code: "602(a)",
    name: "Jury Tampering (Mempengaruhi Juri)",
    title: "Against Public Justice",
    class: "felony",
    time: 10,
    fine: 5000,
    desc: "Setiap orang yang berusaha mempengaruhi juri atau orang yang dipanggil atau ditunjuk sebagai juri, menggunakan komunikasi lisan atau tertulis di luar proses hukum, dengan ancaman, intimidasi, bujukan, atau janji apa pun, dianggap bersalah atas felony."
  },
  {
    code: "602(b)",
    name: "Jury Tampering (Mengancam Juri Pasca Putusan)",
    title: "Against Public Justice",
    class: "felony",
    time: 20,
    fine: 8000,
    desc: "Setiap orang yang mengancam juri terkait dengan proses pidana di mana putusan telah dijatuhkan dan memiliki niat serta kemampuan yang tampak untuk menjalankan ancaman tersebut, sehingga menyebabkan ketakutan yang wajar terhadap keamanan mereka, dianggap bersalah atas felony."
  },
  {
    code: "603(a)",
    name: "Intimidating a Witness or Victim (Mencegah Kesaksian)",
    title: "Against Public Justice",
    class: "felony",
    time: 20,
    fine: 10000,
    desc: "Seseorang yang dengan sengaja dan jahat mencegah atau mendorong saksi atau korban untuk tidak hadir atau tidak memberikan kesaksian di persidangan, proses hukum, atau penyelidikan yang diizinkan oleh hukum, dengan menggunakan suap, ketakutan, atau taktik lainnya, dianggap bersalah atas felony."
  },
  {
    code: "603(b)",
    name: "Intimidating a Witness or Victim (Mencegah Proses Hukum)",
    title: "Against Public Justice",
    class: "felony",
    time: 16,
    fine: 7000,
    desc: "Seseorang yang mencegah distribusi, penyelesaian, jawaban, atau proses hukum yang semestinya terhadap surat pernyataan atau pernyataan hukum lainnya, dianggap bersalah atas felony."
  },
  {
    code: "604",
    name: "Escape",
    title: "Against Public Justice",
    class: "felony",
    time: 40,
    fine: 7000,
    desc: "Seseorang yang telah diproses masuk ke penjara county atau penjara karena dugaan atau hukuman atas suatu kejahatan, yang kemudian melarikan diri dari penjara county, penjara, layanan masyarakat, rumah sakit, atau penahanan oleh petugas Pemasyarakatan atau Pembebasan Bersyarat, dianggap bersalah atas felony."
  },
  {
    code: "605(a)",
    name: "Aiding in the Escape from State Custody (Membantu Langsung)",
    title: "Against Public Justice",
    class: "felony",
    time: 30,
    fine: 6000,
    desc: "Seseorang yang secara langsung membantu atau menolong orang yang secara hukum ditahan untuk melarikan diri dari hukum, termasuk dari penahanan yang sah oleh petugas perdamaian, transportasi tahanan, pembebasan bersyarat, layanan masyarakat, atau penahanan di penjara kabupaten atau penjara negara bagian, dianggap bersalah atas felony."
  },
  {
    code: "605(b)",
    name: "Aiding in the Escape from State Custody (Memberi Informasi)",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 8,
    fine: 4000,
    desc: "Seseorang yang memberikan informasi atau wawasan yang kemudian membantu orang yang secara hukum ditahan untuk melarikan diri dari hukum, dianggap bersalah atas misdemeanor."
  },
  {
    code: "606(a)",
    name: "Perjury (Informasi Palsu di Bawah Sumpah)",
    title: "Against Public Justice",
    class: "felony",
    time: 16,
    fine: 4000,
    desc: "Seseorang yang dengan sengaja memberikan informasi palsu sebagai bagian dari surat pernyataan, kesaksian, pernyataan yang diperintahkan pengadilan, atau dokumen dengan pernyataan yang menunjukkan keasliannya di bawah ancaman pidana perjury, dianggap bersalah atas felony."
  },
  {
    code: "606(b)",
    name: "Perjury (Pernyataan Palsu Petugas Perdamaian)",
    title: "Against Public Justice",
    class: "felony",
    time: 28,
    fine: 8000,
    desc: "Seorang petugas perdamaian yang dengan sengaja dan niat membuat atau menyebabkan dibuatnya pernyataan material dalam laporan resmi atau kepada petugas perdamaian lainnya, dan pernyataan tersebut termasuk dalam laporan resmi, mengetahui bahwa pernyataan tersebut adalah palsu, dianggap bersalah atas felony."
  },
  {
    code: "607(a)",
    name: "Filing a False Report (Laporan Kejahatan Palsu)",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 10,
    fine: 3000,
    desc: "Seseorang yang melaporkan kepada petugas perdamaian atau jaksa distrik bahwa felony atau misdemeanor telah dilakukan, mengetahui bahwa laporan tersebut palsu, dianggap bersalah atas misdemeanor."
  },
  {
    code: "607(b)",
    name: "Filing a False Report (Senjata Api Hilang Palsu)",
    title: "Against Public Justice",
    class: "felony",
    time: 24,
    fine: 5000,
    desc: "Seseorang yang melaporkan senjata api sebagai hilang atau dicuri, mengetahui bahwa laporan tersebut palsu, dianggap bersalah atas felony."
  },
  {
    code: "608",
    name: "Filing a False Complaint",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 10,
    fine: 5000,
    desc: "Seseorang yang dengan sengaja mengajukan keluhan palsu, pernyataan, dokumen, atau representasi kepada organisasi mana pun mengenai tingkah laku, kinerja kerja, atau perilaku seorang pejabat publik atau pegawai dengan tujuan untuk memulai tindakan administratif palsu terhadap pejabat tersebut, dianggap bersalah atas misdemeanor."
  },
  {
    code: "609(a)",
    name: "Corruption of Public Duty (Membocorkan Informasi Untuk Keuntungan Finansial)",
    title: "Against Public Justice",
    class: "felony",
    time: 30,
    fine: 10000,
    desc: "Setiap petugas keamanan, pegawai dari agen penegak hukum, atau jaksa negara yang mengungkapkan atau meminta informasi yang diperoleh selama penyelidikan kriminal untuk keuntungan finansial, dianggap bersalah atas felony."
  },
  {
    code: "609(b)",
    name: "Corruption of Public Duty (Menolak Menangkap)",
    title: "Against Public Justice",
    class: "felony",
    time: 24,
    fine: 12000,
    desc: "Setiap petugas keamanan yang memiliki wewenang untuk menerima atau menangkap seseorang yang didakwa dengan pelanggaran kriminal dan dengan sengaja menolak untuk menerima atau menangkap orang tersebut, dianggap bersalah atas felony."
  },
  {
    code: "609(c)",
    name: "Corruption of Public Duty (Kelalaian Kriminal Pegawai Negara)",
    title: "Against Public Justice",
    class: "felony",
    time: 24,
    fine: 14000,
    desc: "Setiap pegawai negara yang menunjukkan kelalaian kriminal dalam tugas mereka, dianggap bersalah atas felony."
  },
  {
    code: "610(a)",
    name: "Obstruction of Justice (Mencegah/Menunda Pegawai Negara)",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 6,
    fine: 3000,
    desc: "Setiap orang yang menunjukkan usaha yang jelas dan termotivasi untuk mencegah atau menunda seorang pegawai negara dalam melaksanakan tugasnya, dianggap bersalah atas misdemeanor."
  },
  {
    code: "610(b)",
    name: "Obstruction of Justice (Tidak Mematuhi Perintah Sah)",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 4,
    fine: 1000,
    desc: "Setiap orang yang gagal mematuhi perintah sah dari petugas keamanan, dianggap bersalah atas misdemeanor."
  },
  {
    code: "611(a)",
    name: "Resisting a Peace Officer (Menghindari/Melawan Penangkapan)",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 8,
    fine: 1000,
    desc: "Setiap orang yang menghindari penangkapan dari petugas keamanan dengan cara non-kendaraan atau melawan penangkapan dengan cara fisik, dianggap bersalah atas misdemeanor."
  },
  {
    code: "611(b)",
    name: "Resisting a Peace Officer (Melarikan Diri Dari Penjagaan)",
    title: "Against Public Justice",
    class: "felony",
    time: 10,
    fine: 1500,
    desc: "Setiap orang yang, menunggu tuduhan diajukan terhadapnya, secara fisik ditahan dengan menggunakan alat pembatas atau kekuatan fisik oleh petugas keamanan dan melarikan diri dari penjagaan petugas tersebut, dianggap bersalah atas felony."
  },
  {
    code: "612",
    name: "Failure To Pay A Fine",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 20,
    fine: 5000,
    desc: "Setiap orang yang gagal membayar denda atau biaya yang diperintahkan oleh pengadilan dalam periode waktu yang telah ditentukan dan dinyatakan dengan jelas, dianggap bersalah atas misdemeanor."
  },
  {
    code: "613",
    name: "Failure to Identify to a Peace Officer",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 30,
    fine: 10000,
    desc: "Seseorang yang, saat ditahan atau ditangkap oleh seorang petugas keamanan, tidak memberikan nama mereka seperti yang tertera pada kartu identitas atau informasi lain yang dapat dikenali untuk tujuan MDC, dianggap bersalah atas misdemeanor."
  },
  {
    code: "614(a)",
    name: "Impersonation of a State Employee (Berpura-pura Sebagai Pekerja Negara/Daerah)",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 15,
    fine: 10000,
    desc: "Seseorang yang berpura-pura atau menyiratkan peran sebagai pekerja pemerintah negara atau daerah, seperti petugas keamanan, paramedis, pengumpul pajak, jaksa negara, atau pejabat lainnya, dianggap bersalah atas misdemeanor."
  },
  {
    code: "614(b)",
    name: "Impersonation of a State Employee (Mengenakan Seragam Resmi)",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 20,
    fine: 12000,
    desc: "Seseorang yang mengenakan seragam pegawai negara yang resmi atau realistis dengan lencana atau tag identifikasi yang resmi atau realistis, kecuali dalam set film atau produksi resmi yang disetujui secara hukum, dianggap bersalah atas misdemeanor."
  },
  {
    code: "614(c)",
    name: "Impersonation of a State Employee (Berpura-pura Sebagai Pegawai Federal)",
    title: "Against Public Justice",
    class: "felony",
    time: 30,
    fine: 20000,
    desc: "Seseorang yang berpura-pura atau menyiratkan peran sebagai pegawai federal, seperti penyidik federal, jaksa federal, atau pejabat federal lainnya, dianggap bersalah atas felony."
  },
  {
    code: "615",
    name: "Making a False Report of an Emergency",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 10,
    fine: 5000,
    desc: "Seseorang yang melaporkan, atau menyebabkan laporan dibuat, kepada departemen negara dan/atau nomor darurat, bahwa ada sebuah 'keadaan darurat', dengan mengetahui bahwa laporan tersebut palsu, dianggap bersalah atas misdemeanor."
  },
  {
    code: "616",
    name: "Evidence Tampering",
    title: "Against Public Justice",
    class: "felony",
    time: 35,
    fine: 25000,
    desc: "Seseorang yang menghancurkan atau berusaha menghancurkan, menyembunyikan, atau mengubah bukti yang dapat digunakan dalam penyelidikan kriminal atau proses pengadilan di kemudian hari, dianggap bersalah atas felony."
  },
  {
    code: "617",
    name: "Introduction of Contraband",
    title: "Against Public Justice",
    class: "felony",
    time: 36,
    fine: 23000,
    desc: "Seseorang yang memberikan barang terlarang kepada seorang narapidana di suatu fasilitas pemasyarakatan, atau berusaha memasuki fasilitas dengan niat untuk mengangkut barang terlarang secara ilegal di dalamnya, dianggap bersalah atas felony."
  },
  {
    code: "618",
    name: "Violation of Parole",
    title: "Against Public Justice",
    class: "felony",
    time: 48,
    fine: 15000,
    desc: "Seseorang yang dengan sengaja melanggar ketentuan perjanjian parol, dianggap bersalah atas felony."
  },
  {
    code: "619(a)",
    name: "Voter Fraud / Voter Pandering (Menghalangi/Mempengaruhi Hasil Pemungutan Suara)",
    title: "Against Public Justice",
    class: "felony",
    time: 52,
    fine: 20000,
    desc: "Seseorang yang menghalangi atau memengaruhi hasil pemungutan suara secara ilegal, tidak sah, atau tidak etis, dianggap bersalah atas felony."
  },
  {
    code: "619(b)",
    name: "Voter Fraud / Voter Pandering (Membeli Suara)",
    title: "Against Public Justice",
    class: "felony",
    time: 60,
    fine: 30000,
    desc: "Seseorang yang melakukan tindak pidana membeli suara ketika ia menjanjikan, menawarkan, atau memberikan kepada seseorang, secara langsung atau tidak langsung, manfaat yang tidak semestinya, untuk orang tersebut atau pihak ketiga atau entitas agar orang tersebut memberikan suara, tidak memberikan suara, memberikan suara yang tidak sah, atau memberikan suara mendukung atau menolak seseorang atau proposal tertentu, dianggap bersalah atas felony."
  },
  {
    code: "620",
    name: "Corruption of Public Office",
    title: "Against Public Justice",
    class: "felony",
    time: 64,
    fine: 35000,
    desc: "Seseorang yang bertindak di luar kepentingan kebaikan publik, keadilan publik, atau tugas mereka yang menjabat di kantor publik, dianggap bersalah atas felony."
  },
  {
    code: "621",
    name: "Contempt of Senate",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 8,
    fine: 1000,
    desc: "Seseorang yang dengan sengaja tidak mematuhi perintah lisan atau tertulis dari Senat, tidak menghormati tata krama Senat, atau melanggar proses senat lainnya, dianggap bersalah atas misdemeanor."
  },
  {
    code: "622",
    name: "Contempt of Court",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 8,
    fine: 1500,
    desc: "Seseorang yang dengan sengaja tidak mematuhi perintah lisan atau tertulis dari otoritas pengadilan, tidak menghormati tata krama pengadilan, atau melanggar proses hukum lainnya, dianggap bersalah atas misdemeanor."
  },
  {
    code: "623",
    name: "Subpoena Violation",
    title: "Against Public Justice",
    class: "misdemeanor",
    time: 8,
    fine: 2500,
    desc: "Seseorang yang mengabaikan atau melanggar perintah subpoena yang dikeluarkan oleh Pengadilan, dianggap bersalah atas misdemeanor."
  },
  {
    code: "701",
    name: "Reckless Driving",
    title: "With a Vehicle",
    class: "misdemeanor",
    time: 20,
    fine: 3500,
    desc: "Seseorang yang mengemudikan kendaraan di jalan umum atau jalan raya dengan sengaja atau sembarangan mengabaikan keamanan orang atau harta benda, dianggap bersalah atas misdemeanor."
  },
  {
    code: "702",
    name: "Felony Reckless Driving",
    title: "With a Vehicle",
    class: "felony",
    time: 28,
    fine: 4000,
    desc: "Seseorang yang mengemudikan kendaraan di jalan umum atau jalan raya dengan sengaja atau sembarangan mengabaikan keamanan orang atau harta benda, seperti hampir menabrak pejalan kaki, memasuki jalur pejalan kaki, hampir menyebabkan bahaya serius bagi pengemudi lain, mengemudi dengan cara berbahaya bagi penumpang/pejalan kaki/warga sekitar, melintasi jalur pejalan kaki ramai atau plaza, melawan arah lalu lintas termasuk di jalan bebas hambatan, atau menyebabkan cedera fisik, dianggap bersalah atas felony, dengan penyitaan lisensi atas kebijaksanaan petugas."
  },
  {
    code: "703(a)",
    name: "Driving Under the Influence (Alkohol 0,08% atau Lebih)",
    title: "With a Vehicle",
    class: "felony",
    time: 24,
    fine: 4000,
    desc: "Seseorang yang mengemudikan kendaraan di bawah pengaruh minuman beralkohol dengan kadar alkohol 0,08 persen atau lebih dalam darahnya, dianggap bersalah atas felony, dengan penyitaan lisensi."
  },
  {
    code: "703(b)",
    name: "Driving Under the Influence (Pegawai Negara Bertugas)",
    title: "With a Vehicle",
    class: "felony",
    time: 30,
    fine: 5000,
    desc: "Setiap pegawai negara yang mengemudikan kendaraan di bawah pengaruh narkoba atau alkohol saat menjalankan tugas sebagai pegawai negara, atau mengoperasikan kendaraan milik negara saat di bawah pengaruh narkoba atau alkohol, dianggap bersalah atas felony, dengan penyitaan lisensi."
  },
  {
    code: "703(c)",
    name: "Driving Under the Influence (Kendaraan Komersial)",
    title: "With a Vehicle",
    class: "felony",
    time: 24,
    fine: 4000,
    desc: "Seseorang yang mengemudikan kendaraan komersial saat di bawah pengaruh narkoba atau memiliki kadar alkohol 0,04 persen atau lebih dalam darahnya, dianggap bersalah atas felony, dengan penyitaan lisensi."
  },
  {
    code: "703(d)",
    name: "Driving Under the Influence (Terganggu Alkohol/Narkoba)",
    title: "With a Vehicle",
    class: "misdemeanor",
    time: 30,
    fine: 5000,
    desc: "Seseorang yang mengemudikan kendaraan saat terganggu oleh alkohol, narkoba, atau kombinasi keduanya, dianggap bersalah atas misdemeanor, dengan penyitaan lisensi."
  },
  {
    code: "704",
    name: "Evading a Peace Officer",
    title: "With a Vehicle",
    class: "misdemeanor",
    time: 16,
    fine: 5000,
    desc: "Seseorang yang, saat mengoperasikan kendaraan bermotor, dengan sengaja melarikan diri atau berusaha menghindar dari kendaraan petugas keamanan yang mengejarnya, dianggap bersalah atas misdemeanor, dengan penyitaan lisensi atas kebijaksanaan petugas."
  },
  {
    code: "705",
    name: "Reckless Evading of a Peace Officer",
    title: "With a Vehicle",
    class: "felony",
    time: 36,
    fine: 3500,
    desc: "Seseorang yang, saat mengoperasikan kendaraan, melarikan diri atau berusaha menghindar dari petugas keamanan sambil mengemudikan kendaraan secara ceroboh atau berbahaya, dianggap bersalah atas felony, dengan penyitaan lisensi atas kebijaksanaan petugas."
  },
  {
    code: "706(a)",
    name: "Hit and Run (Menyebabkan Cedera/Kematian)",
    title: "With a Vehicle",
    class: "felony",
    time: 35,
    fine: 4000,
    desc: "Seseorang yang mengoperasikan kendaraan dan terlibat dalam kecelakaan yang mengakibatkan cedera pada orang lain, selain dirinya sendiri, atau menyebabkan kematian seseorang, dan tidak segera menghentikan kendaraan di lokasi kecelakaan tersebut, dianggap bersalah atas felony, dengan penyitaan lisensi atas kebijaksanaan petugas."
  },
  {
    code: "706(b)",
    name: "Hit and Run (Kerusakan Harta Benda)",
    title: "With a Vehicle",
    class: "misdemeanor",
    time: 10,
    fine: 1000,
    desc: "Seseorang yang mengoperasikan kendaraan dan terlibat dalam kecelakaan yang hanya mengakibatkan kerusakan pada harta benda atau kendaraan lain, dan tidak segera menghentikan kendaraan di lokasi kecelakaan tersebut, dianggap bersalah atas misdemeanor, dengan penyitaan lisensi atas kebijaksanaan petugas."
  },
  {
    code: "801",
    name: "Brandishing a Firearm",
    title: "Weapon and Firearm Violation",
    class: "misdemeanor",
    time: 20,
    fine: 10000,
    desc: "Tindakan dengan sengaja mengeluarkan, menampilkan, atau menunjukan senjata api atau mematikan dengan tujuan untuk mengancam nyawa 1 orang atau lebih, dianggap bersalah atas misdemeanor."
  },
  {
    code: "802",
    name: "Discharging a Firearm in Public",
    title: "Weapon and Firearm Violation",
    class: "misdemeanor",
    time: 20,
    fine: 5000,
    desc: "Setiap tindakan dari seseorang yang dengan sengaja menembakkan senjata api di tempat umum, atau gedung pemerintahan tanpa alasan yang jelas, dan bisa membahayakan nyawa orang lain atau tidak, dianggap bersalah atas misdemeanor. Tidak berlaku jika penembakan dilakukan untuk bela diri atau oleh petugas berwenang."
  },
  {
    code: "802(b)",
    name: "Discharging a Firearm in Public (Menyebabkan Cedera)",
    title: "Weapon and Firearm Violation",
    class: "felony",
    time: 40,
    fine: 15000,
    desc: "Tindakan menembakkan senjata api di tempat umum atau gedung pemerintahan tanpa alasan yang jelas yang menyebabkan cedera pada orang lain, dianggap bersalah atas felony."
  },
  {
    code: "803",
    name: "Unlicensed Possession of a Deadly Weapon",
    title: "Weapon and Firearm Violation",
    class: "misdemeanor",
    time: 20,
    fine: 7600,
    desc: "Tindakan dimana seseorang dengan sengaja membawa senjata mematikan di tempat umum, atau tempat pribadi tanpa persetujuan dari pemilik properti, atau tanpa lisensi yang valid dari pemilik properti untuk membawa senjata tersebut, dianggap bersalah atas misdemeanor."
  },
  {
    code: "804(a)",
    name: "Possession of an Unlicensed Firearm (Tidak Terdaftar)",
    title: "Weapon and Firearm Violation",
    class: "misdemeanor",
    time: 25,
    fine: 8500,
    desc: "Tindakan dimana seseorang memiliki senjata api yang tidak terdaftar di negara bagian San Andreas, dianggap bersalah atas misdemeanor."
  },
  {
    code: "804(b)",
    name: "Possession of an Unlicensed Firearm (Hasil Curian)",
    title: "Weapon and Firearm Violation",
    class: "felony",
    time: 30,
    fine: 10000,
    desc: "Tindakan dimana seseorang memiliki senjata api dari hasil curian di negara bagian San Andreas, dianggap bersalah atas felony."
  },
  {
    code: "804(c)",
    name: "Possession of an Unlicensed Firearm (Senjata Replika Untuk Mengancam)",
    title: "Weapon and Firearm Violation",
    class: "misdemeanor",
    time: 20,
    fine: 5000,
    desc: "Tindakan dimana seseorang memiliki senjata replika dengan niat untuk mengancam nyawa orang lain, dianggap bersalah atas misdemeanor."
  },
  {
    code: "805",
    name: "Possession of an Illegal Firearm",
    title: "Weapon and Firearm Violation",
    class: "felony",
    time: 40,
    fine: 6000,
    desc: "Tindakan dimana seseorang memiliki senjata api yang dihasilkan, atau dibeli secara ilegal, dianggap bersalah atas felony."
  },
  {
    code: "806",
    name: "Firearm Theft",
    title: "Weapon and Firearm Violation",
    class: "felony",
    time: 50,
    fine: 9500,
    desc: "Tindakan dimana seseorang mencuri, atau mengambil senjata api orang lain dengan cara sadar tau tidak sadar dengan cara mengancam atau tidak, dianggap bersalah atas felony."
  },
  {
    code: "807",
    name: "Illegal Firearm Distribution",
    title: "Weapon and Firearm Violation",
    class: "felony",
    time: 60,
    fine: 15000,
    desc: "Tindakan dimana seseorang memiliki senjata api ilegal dengan niat untuk diperjual-belikan, dianggap bersalah atas felony."
  },
  {
    code: "808",
    name: "Illegal Modification of a Firearm",
    title: "Weapon and Firearm Violation",
    class: "felony",
    time: 90,
    fine: 25000,
    desc: "Seseorang yang memodifikasi senjata api secara ilegal (seperti suppressor, full-auto conversion, atau extended magazine tanpa izin), dianggap bersalah atas felony."
  },
  {
    code: "809",
    name: "Negligent Storage of a Firearm",
    title: "Weapon and Firearm Violation",
    class: "misdemeanor",
    time: 30,
    fine: 7500,
    desc: "Seseorang yang menyimpan senjata api tanpa pengamanan yang memadai (seperti tidak dikunci atau diakses oleh anak di bawah umur), dianggap bersalah atas misdemeanor."
  },
  // ---------- TITLE IX · vcode ----------
    {
    code: "101(a)",
    name: "Vehicle Registration Violation (Belum Terdaftar)",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 1000,
    desc: "Seseorang yang mengemudikan, memindahkan, atau meninggalkan kendaraan di jalan umum, atau di tempat umum yang belum terdaftar di Negara Bagian San Andreas, akan dikenakan infraction dan kendaraan akan disita oleh petugas."
  },
  {
    code: "101(b)",
    name: "Vehicle Registration Violation (Tanpa Plat Valid)",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 1000,
    desc: "Seseorang yang mengemudikan kendaraan tanpa nomor plat yang valid yang dipajang di jalan umum, atau tempat umum, akan dikenakan infraction dan kendaraan akan disita oleh petugas."
  },
  {
    code: "201(a)",
    name: "Driving without a Valid License (Tanpa SIM/SIM Dicabut)",
    title: "vcode",
    class: "misdemeanor",
    time: 4,
    fine: 0,
    desc: "Seseorang yang mengemudikan, memindahkan, atau menggunakan kendaraan di jalan umum tanpa memiliki SIM yang valid yang diterbitkan oleh negara, atau mengemudi dengan SIM yang telah dicabut, dianggap bersalah melakukan misdemeanor. Kendaraan akan ditahan sesuai kebijakan petugas."
  },
  {
    code: "201(b)",
    name: "Driving without a Valid License (SIM Tidak Dibawa Fisik)",
    title: "vcode",
    class: "misdemeanor",
    time: 5,
    fine: 800,
    desc: "Seseorang yang mengemudikan, memindahkan, atau menggunakan kendaraan di jalan umum tanpa memiliki SIM dalam penguasaan fisik mereka, dianggap bersalah melakukan misdemeanor."
  },
  {
    code: "201(c)",
    name: "Driving without a Valid License (SIM Kedaluwarsa)",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 500,
    desc: "Seseorang yang mengemudikan, memindahkan, atau menggunakan kendaraan di jalan umum dengan SIM yang kedaluwarsa, akan dikenakan infraction."
  },
  {
    code: "202",
    name: "Driving on a Suspended License",
    title: "vcode",
    class: "misdemeanor",
    time: 4,
    fine: 700,
    desc: "Seseorang yang mengemudikan, memindahkan, atau menggunakan kendaraan di jalan umum dengan SIM yang penyitaan, tetapi masih valid, yang diterbitkan oleh negara, dianggap bersalah melakukan misdemeanor. Kendaraan akan ditahan sesuai kebijakan petugas."
  },
  {
    code: "301",
    name: "Driving without Insurance",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 500,
    desc: "Seseorang yang mengemudikan, memindahkan, atau menggunakan kendaraan di jalan umum tanpa asuransi kendaraan yang valid, akan dikenakan infraction dan kendaraannya akan ditahan sesuai kebijakan petugas."
  },
  {
    code: "401(a)",
    name: "Speeding (Area Bisnis/Pemukiman di Atas 40 MPH)",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 500,
    desc: "Seseorang yang mengemudikan kendaraan di jalan mana pun di daerah bisnis atau kawasan pemukiman dengan kecepatan lebih dari 40 MPH, akan dikenakan infraction dan satu poin pada SIM mereka."
  },
  {
    code: "401(b)",
    name: "Speeding (Di Luar Area Bisnis/Pemukiman di Atas 65 MPH)",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 700,
    desc: "Seseorang yang mengemudikan kendaraan di jalan mana pun yang tidak berada di daerah bisnis atau kawasan pemukiman dengan kecepatan lebih dari 65 MPH, akan dikenakan infraction dan satu poin pada SIM mereka."
  },
  {
    code: "401(c)",
    name: "Speeding (Jalan Raya di Atas 90 MPH)",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 1000,
    desc: "Seseorang yang mengemudikan kendaraan di jalan raya mana pun dengan kecepatan lebih dari 90 MPH, akan dikenakan infraction dan dua poin pada SIM mereka."
  },
  {
    code: "401(d)",
    name: "Speeding (Kecepatan Tidak Wajar)",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 700,
    desc: "Seseorang yang mengemudikan kendaraan dengan kecepatan yang lebih besar dari yang wajar dengan mempertimbangkan cuaca, visibilitas, dan lalu lintas di jalan umum mana pun, akan dikenakan infraction dan dua poin pada SIM mereka."
  },
  {
    code: "402",
    name: "Failure to Yield",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 500,
    desc: "Seseorang yang mengemudikan kendaraan yang tidak memberikan atau menyerahkan hak jalan kepada pengemudi lain di atau di persimpangan, akan dikenakan infraction. Kendaraan pertama yang tiba di persimpangan memiliki hak jalan; kendaraan yang sudah berada di dalam persimpangan juga memiliki hak jalan."
  },
  {
    code: "403",
    name: "Failure to Yield to Emergency Vehicles",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 800,
    desc: "Seseorang yang mengemudikan kendaraan bermotor yang tidak memberikan hak jalan dan segera mengemudikan kendaraannya ke sisi kanan jalan, di luar persimpangan, kepada kendaraan darurat yang membunyikan sirene dan memiliki lampu merah atau biru yang terlihat, akan dikenakan infraction."
  },
  {
    code: "404",
    name: "Failure to Abide by a Traffic Control Device",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 400,
    desc: "Seseorang yang mengemudikan kendaraan yang tidak mematuhi tanda, sinyal, atau perangkat pengatur lalu lintas lainnya, termasuk tanda berhenti, lampu lalu lintas, jalur penyeberangan pejalan kaki yang ditunjukkan dengan garis putih padat di persimpangan, dan arahan petugas keamanan atau pekerja konstruksi, akan dikenakan infraction."
  },
  {
    code: "405",
    name: "Illegal Parking",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 1500,
    desc: "Seseorang yang berhenti, memarkir, atau meninggalkan kendaraan, baik dalam keadaan diawasi atau tidak, di tempat-tempat terlarang seperti menghalangi persimpangan/gang/jalur penyeberangan/jalan umum, menghalangi lebih dari dua pertiga trotoar, menghadap arah lalu lintas berlawanan, di median, di dalam terowongan, di samping atau menghalangi hydrant pemadam kebakaran, di jalur pemadam kebakaran bertepi cat merah, di atas rel kereta api, di area parkir ambulans/rumah sakit/klinik, menghalangi jalur masuk pribadi, atau melanggar aturan parkir yang ditetapkan pemilik properti, akan dikenakan infraction dan penyitaan kendaraan."
  },
  {
    code: "406",
    name: "Vehicular Noise Violation",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 500,
    desc: "Seseorang yang kendaraannya mengeluarkan suara yang berlebihan, menciptakan gangguan publik, seperti modifikasi yang meningkatkan polusi suara atau penggunaan klakson/sirene secara berlebihan tanpa tujuan yang dapat dibenarkan, akan dikenakan infraction."
  },
  {
    code: "407",
    name: "Illegal Use of Hydraulics",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 450,
    desc: "Seseorang yang mengemudikan kendaraan di jalan umum mana pun yang menggunakan peralatan hidrolik saat bergerak, akan dikenakan infraction."
  },
  {
    code: "408",
    name: "Unsafe Usage of a Bicycle",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 700,
    desc: "Seseorang yang menggunakan kendaraan dengan cara yang menghalangi lalu lintas, memicu kekacauan, menciptakan bahaya, atau menunjukkan potensi untuk menimbulkan bahaya, akan dikenakan infraction."
  },
  {
    code: "409",
    name: "Jaywalking",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 400,
    desc: "Seseorang yang berjalan di antara persimpangan berdekatan yang dikendalikan oleh perangkat sinyal pengatur lalu lintas atau oleh petugas keamanan di tempat mana pun di jalan raya kecuali di jalur penyeberangan, akan dikenakan infraction."
  },
  {
    code: "410",
    name: "Speed Contests",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 1000,
    desc: "Seseorang yang terlibat dalam perlombaan kecepatan kendaraan bermotor di jalan umum mana pun, termasuk melawan kendaraan lain, jam, atau perangkat pengukur waktu lainnya, akan dikenakan infraction."
  },
  {
    code: "411",
    name: "Unlawful Operation of Truck on Non-Designated Routes",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 2500,
    desc: "Seseorang yang mengemudikan kendaraan komersial, truk berat, atau kendaraan berukuran besar pada jalan yang tidak ditetapkan sebagai rute truk, atau memasuki wilayah kota tanpa izin atau pengecualian yang sah, akan dikenakan infraction dan penyitaan kendaraan. Pengecualian berlaku bagi kendaraan atau pengemudi yang sudah mendapatkan izin dari kepolisian setempat."
  },
  {
    code: "412",
    name: "Operating a Commercial Vehicle Without Proper License Classification",
    title: "vcode",
    class: "misdemeanor",
    time: 0,
    fine: 1000,
    desc: "Seseorang yang mengemudikan kendaraan komersial, kendaraan berat, atau kendaraan yang membutuhkan lisensi kelas khusus tanpa memiliki lisensi yang sesuai, lisensi yang telah kedaluwarsa, atau lisensi yang dicabut, akan dikenakan misdemeanor. Jika pelanggaran mengakibatkan bahaya, kerusakan, atau gangguan lalu lintas, tambahan denda $500 dapat diterapkan."
  },
  {
    code: "501",
    name: "Tinted Windows",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 300,
    desc: "Seseorang yang mengemudikan kendaraan bermotor dengan bahan yang menghalangi yang diletakkan, ditampilkan, dipasang, ditempelkan, atau diterapkan pada kaca depan atau jendela samping atau belakang, akan dikenakan infraction."
  },
  {
    code: "502",
    name: "Driving Without use of Headlights",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 300,
    desc: "Seseorang yang mengemudikan kendaraan bermotor saat gelap (antara senja dan fajar) atau dalam kondisi cuaca buruk dengan visibilitas rendah (hujan, kabut, salju) tanpa menggunakan lampu depan, akan dikenakan infraction."
  },
  {
    code: "503",
    name: "Operating an Unsafe Vehicle",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 700,
    desc: "Seseorang yang mengemudikan kendaraan di jalan umum mana pun dengan salah satu dari kondisi berikut: ban kempes atau hilang, salah satu atau kedua lampu belakang rusak atau mati, hilangnya pintu/kap mesin/penutup bagasi, atau mengemudikan kendaraan dengan pintu/kap mesin/bagasi dalam posisi terbuka, akan dikenakan infraction."
  },
  {
    code: "504",
    name: "Unauthorized Use of Red/Blue Lights",
    title: "vcode",
    class: "misdemeanor",
    time: 10,
    fine: 500,
    desc: "Seseorang yang mengemudikan atau memiliki kendaraan dengan lampu darurat (merah/biru) tanpa izin resmi, dianggap bersalah melakukan misdemeanor, dengan penyitaan kendaraan sampai lampu darurat pada kendaraan dihilangkan."
  },
  {
    code: "601",
    name: "Failure to Wear a Helmet",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 500,
    desc: "Seorang pengemudi dan penumpang yang mengoperasikan atau mengendarai sepeda motor atau sepeda motor bertenaga tanpa menggunakan helm keselamatan, akan dikenakan infraction."
  },
  {
    code: "602",
    name: "Unlawful Riding and Towing",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 400,
    desc: "Seseorang yang mengoperasikan kendaraan yang mampu menarik atau mengangkut kendaraan yang tidak mengoperasikan kendaraannya dengan cara yang aman, seperti kecepatan dengan muatan yang tidak sesuai, tidak memberikan hak jalan di tempat yang diperlukan, membiarkan penumpang naik di trailer atau kendaraan yang ditarik/diangkut, atau jika kendaraan atau cara pengoperasiannya tidak aman di jalan, akan dikenakan infraction."
  },
  {
    code: "603",
    name: "Reckless Operation of Machinery",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 500,
    desc: "Seseorang yang mengoperasikan mesin seperti Bulldozer, Dump, Handler, Dune, Zhaba, Rallytruck, Airtug, Caddy dan semua variannya, Docktug, Forklift, Mower, atau Ripley di jalan umum, akan dikenakan infraction. Ketentuan ini tidak berlaku untuk individu yang mengoperasikan kendaraan tersebut dalam keadaan darurat oleh penegak hukum atau personel respons kebakaran."
  },
  {
    code: "604",
    name: "Reckless Operation of an Off-Road Vehicle",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 5000,
    desc: "Seseorang yang mengoperasikan kendaraan off-road di jalan umum mana pun akan dikenakan infraction dan kendaraannya dapat ditahan sesuai kebijakan petugas. Ketentuan ini tidak berlaku untuk individu yang mengoperasikan kendaraan tersebut dalam keadaan darurat oleh penegak hukum atau personel respons kebakaran."
  },
  {
    code: "605",
    name: "Unlawful Riding in a Vehicle",
    title: "vcode",
    class: "infraction",
    time: 0,
    fine: 400,
    desc: "Pelanggaran mencakup: mengemudikan kendaraan bermotor yang dengan sadar mengizinkan seseorang naik di bagian kendaraan yang tidak ditentukan untuk penumpang, naik di bagian kendaraan yang tidak ditentukan untuk penumpang, mengemudikan kendaraan bermotor yang dengan sadar mengizinkan seseorang naik di bagasi kendaraan, atau naik di bagasi kendaraan bermotor."
  },
];
