export const projectData = {
  title: "Aster Tropika at Kabil",
  tagline: "Rumah Ideal Untuk Keluarga Modern Tropis",
  logo: "/images/logo.png",
  logoMark: "/images/logo-mark.png",
  logoMarkWhite: "/images/logo-mark-white.png",
  developer: {
    name: "PT Buana Cipta Propertindo",
    group: "Cipta Group Batam",
    reputation: "Developer Terpercaya & Berpengalaman di Kota Batam",
    office: "Jl. Permata Putri Komp. Ruko Griya No 1-5, Batu Aji - Batam",
    phone: "(0778) 332 363",
    fax: "(0778) 332 347"
  },
  marketing: {
    name: "Frans Rumah Batam",
    title: "Senior Property Consultant",
    phone: "0823-9105-9216",
    phoneRaw: "6282391059216",
    status: "Marketing In-House Resmi Cipta Group",
    notes: "Siap mendampingi survei lokasi, skema cash bertahap 60x tanpa bunga (cukup KTP), dan pemilihan unit terbaik."
  },
  locationCoordinates: {
    lat: 1.082582,
    lng: 104.116634,
    display: "1.082582, 104.116634",
    mapsUrl: "https://www.google.com/maps?q=1.082582,104.116634",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1.082582,104.116634",
    embedUrl: "https://maps.google.com/maps?q=1.082582,104.116634&hl=id&z=16&output=embed"
  },
  paymentPromo: {
    title: "Cash Bertahap s/d 60x Tanpa Bunga",
    subtitle: "Punya Rumah di Kabil Tanpa Proses Bank yang Ribet? Bisa Banget!",
    badge: "Promo Unggulan Developer",
    terms: "Syarat Berkas Cukup KTP Saja • Tanpa BI Checking",
    benefits: [
      {
        icon: "calendar_month",
        title: "Cicilan s/d 60 Bulan",
        desc: "Cicilan langsung ke pengembang PT Buana Cipta Propertindo tanpa perantara."
      },
      {
        icon: "percent",
        title: "0% Bunga (Tanpa Bunga)",
        desc: "Bebas bunga kredit, tanpa biaya provisi, dan tanpa biaya appraisal bank."
      },
      {
        icon: "assignment_turned_in",
        title: "Proses Cepat & Tanpa Ribet",
        desc: "Pasti disetujui tanpa risiko penolakan bank atau proses wawancara berbelit."
      },
      {
        icon: "badge",
        title: "Syarat Berkas KTP Saja",
        desc: "Cukup lampirkan KTP saja, tanpa perlu slip gaji atau rekening koran berbelit."
      }
    ]
  },
  highlights: [
    { label: "Kamar Tidur", value: "2 Kamar", icon: "bed" },
    { label: "Carport Pribadi", value: "1 Mobil", icon: "directions_car" },
    { label: "Keamanan", value: "One Gate System", icon: "shield" },
    { label: "Ke Pelabuhan Punggur", value: "10 Menit", icon: "directions_boat" },
    { label: "Ke Bandara Hang Nadim", value: "15 Menit", icon: "flight" }
  ],
  advantages: [
    {
      id: "modern-tropis",
      title: "Modern Tropis",
      badge: "Sejuk & Lapang",
      icon: "nature_people",
      description: "Fasad geometris elegan berpadu ruang terbuka hijau, sirkulasi udara optimal, serta tata letak ruangan maksimal yang sejuk sepanjang hari."
    },
    {
      id: "one-gate",
      title: "One Gate System",
      badge: "Privasi & Aman",
      icon: "shield",
      description: "Sistem akses terpadu dengan gerbang otomatis dan pengawasan pos sekuriti 24 jam untuk menjamin keamanan dan ketenangan tinggal keluarga."
    },
    {
      id: "koneksi-strategis",
      title: "Koneksi Strategis",
      badge: "Mobilitas Cepat",
      icon: "hub",
      description: "Hanya beberapa menit ke Kawasan Industri Kabil, Pelabuhan Ferry Telaga Punggur, serta Bandara Internasional Hang Nadim Batam."
    },
    {
      id: "investasi-tinggi",
      title: "Nilai Investasi Tinggi",
      badge: "Prospek Cerah",
      icon: "trending_up",
      description: "Berada tepat di koridor rencana pendaratan Jembatan Batam-Bintan dan ekspansi industri timur Batam, menjanjikan kenaikan capital gain signifikan."
    }
  ],
  units: [
    {
      id: "tipe-30-60",
      code: "TIPE 30/60",
      name: "Tipe 30/60 Standar Mewah",
      subtitle: "Solusi hunian pertama terbaik untuk pasangan muda dan keluarga dinamis.",
      category: "Unit Terfavorit",
      badgeColor: "bg-tertiary-container text-tertiary-fixed",
      priceEstimated: 295000000,
      priceFormatted: "Rp 295.000.000",
      dpEstimated: "Rp 28.500.000 (10%)",
      installmentEstimated: "Rp 2.098.000 / bln (15 Thn)",
      lb: 30,
      lt: 60,
      dimension: "6 x 10 m (6000 x 10000 mm)",
      carport: 1,
      bedrooms: 2,
      bathrooms: 1,
      hasKitchen: false,
      image: "/images/tipe-30.jpg",
      floorPlanImage: "/images/denah-tipe-30-poster.jpg",
      posterImage: "/images/denah-tipe-30-poster.jpg",
      keySpecs: [
        { label: "Pondasi", val: "Beton Bertulang SNI" },
        { label: "Lantai", val: "Keramik 30x30 cm" },
        { label: "Kusen", val: "Aluminium Presisi" },
        { label: "Dinding", val: "Batako Press" },
        { label: "Sisa Lahan", val: "Taman Belakang" },
        { label: "Listrik & Air", val: "PLN & SPAM" }
      ],
      features: [
        "2 Kamar Tidur Nyaman dengan sirkulasi jendela",
        "1 Carport Pribadi Mobil",
        "1 Kamar Mandi / Toilet higienis",
        "Ruang Tamu & Ruang Keluarga Terintegrasi",
        "Taman Depan Asri & Taman Belakang"
      ]
    },
    {
      id: "tipe-36-72",
      code: "TIPE 36+/72",
      name: "Tipe 36+/72 Ruang Ekstra (Sudah Ada Dapur)",
      subtitle: "Sudah dilengkapi area dapur terpadu di dalam rumah dan lantai granit HT 60x60.",
      category: "Sudah Ada Dapur",
      badgeColor: "bg-secondary-container text-on-secondary-container",
      priceEstimated: 485000000,
      priceFormatted: "Rp 485.000.000",
      dpEstimated: "Rp 36.000.000 (10%)",
      installmentEstimated: "Rp 2.650.000 / bln (15 Thn)",
      lb: 36,
      lt: 72,
      dimension: "Tipe 36+/72",
      carport: 1,
      bedrooms: 2,
      bathrooms: 1,
      hasKitchen: true,
      image: "/images/tipe-36.jpg",
      floorPlanImage: "/images/denah-tipe-36-poster.jpg",
      posterImage: "/images/denah-tipe-36-poster.jpg",
      keySpecs: [
        { label: "Pondasi", val: "Beton Bertulang SNI" },
        { label: "Dapur", val: "Sudah Ada Dapurnya" },
        { label: "Lantai", val: "Granit HT 60x60 cm Mewah" },
        { label: "Plafon", val: "Gypsum Rangka Furing" },
        { label: "Sisa Lahan", val: "Taman Belakang Terbuka" },
        { label: "Listrik & Air", val: "PLN & SPAM" }
      ],
      features: [
        "Sudah Ada Dapurnya di dalam rumah (Siap Pakai)",
        "2 Kamar Tidur Lebih Luas & Nyaman",
        "1 Carport Pribadi Mobil",
        "1 Toilet / Kamar Mandi higienis",
        "Ruang Tamu & Ruang Makan Lapang",
        "Taman Depan & Taman Belakang Terbuka"
      ]
    }
  ],
  brochureScreens: [
    {
      id: "screen-1",
      stitchId: "17490527599292306251",
      originalName: "WhatsApp Image 2026-10-12 at 22.40.19.jpeg",
      title: "Fasad & Konsep Arsitektur Utama",
      subtitle: "Aster Tropika - Rumah Mewah Desain Tropis Modern",
      category: "Fasad Utama",
      image: "/images/konsep-hunian-tropis.jpg",
      description: "Tampilan visual fasad rumah modern tropis dengan perpaduan aksen batu alam, roster ventilasi, jendela lebar, dan carport beratap rapi."
    },
    {
      id: "screen-2",
      stitchId: "17490527599292307517",
      originalName: "media_1792989802728_2ff2ca2f.jpg",
      title: "Siteplan Resmi Kawasan Aster Tropika",
      subtitle: "Masterplan Blok & Tata Letak Lingkungan Perumahan",
      category: "Siteplan",
      image: "/images/siteplan-resmi.jpg",
      description: "Denah siteplan resmi Aster Tropika Kabil dari Cipta Group. Menampilkan zonasi blok unit hunian, jalan utama ROW 20M, jalan lingkungan ROW 7M - 8M, serta area fasilitas perumahan terpadu."
    },
    {
      id: "screen-3",
      stitchId: "17490527599292307815",
      originalName: "WhatsApp Image 2026-10-12 at 22.40.18 (1).jpeg",
      title: "Denah Ruang & Tata Letak",
      subtitle: "Denah Tipe 30/60 & Tipe 36+/72",
      category: "Denah Ruang",
      image: "/images/brochure/brochure-3-denah-ruang.jpeg",
      description: "Gambar teknis denah arsitektur skala proporsional dengan dimensi ruang tamu, kamar tidur utama, kamar tidur anak, kamar mandi, carport, dan taman."
    },
    {
      id: "screen-4",
      stitchId: "17490527599292309081",
      originalName: "WhatsApp Image 2026-10-12 at 22.40.18.jpeg",
      title: "Spesifikasi Teknis & Mutu Bangunan",
      subtitle: "Brosur Resmi Spesifikasi & Standar Mutu Cipta Group",
      category: "Spesifikasi & Mutu",
      image: "/images/spesifikasi-dan-mutu.jpg",
      description: "Lembar spesifikasi dan mutu resmi bangunan Aster Tropika at Kabil, mencakup pondasi beton bertulang, dinding batako press, atap spandek baja ringan, hingga instalasi listrik PLN dan air SPAM."
    },
    {
      id: "screen-5",
      stitchId: "17490527599292306549",
      originalName: "WhatsApp Image 2026-10-12 at 22.40.20.jpeg",
      title: "Fasilitas & Keunggulan Lingkungan",
      subtitle: "One Gate System, Taman Hijau, & Sarana Terdekat",
      category: "Fasilitas & Akses",
      image: "/images/brochure/brochure-5-fasilitas-akses.jpeg",
      description: "Visualisasi fasilitas keamanan gerbang otomatis one gate system, taman komunal asri, serta jarak tempuh ke pusat belanja dan sarana umum."
    }
  ],
  facilities: [
    {
      title: "One Gate System & Pos Jaga",
      badge: "Security 24 Jam",
      image: "/images/one-gate.jpg",
      icon: "vpn_key",
      description: "Akses pintu masuk tunggal yang dikontrol ketat oleh personel keamanan dan barrier gate. Menjamin ketenangan bagi anak-anak saat bermain di lingkungan perumahan serta privasi setiap keluarga."
    },
    {
      title: "Taman Tematik & Jogging Track",
      badge: "Area Terbuka Hijau",
      image: "/images/taman.jpg",
      icon: "park",
      description: "Taman komunal dengan tanaman peneduh tropis dan area duduk santai untuk berolahraga pagi maupun melepas penat sore hari bersama tetangga."
    },
    {
      title: "ROW Jalan Aspal Lebar",
      badge: "Leluasa & Bersih",
      icon: "add_road",
      description: "Jalan lingkungan lebar yang memudahkan papasan 2 mobil dengan leluasa serta memudahkan manuver kendaraan saat parkir di carport."
    },
    {
      title: "Drainase Tertutup Rapi",
      badge: "Bebas Banjir",
      icon: "water_damage",
      description: "Sistem saluran pembuangan air hujan tertutup di bawah trotoar jalan untuk menjaga lingkungan perumahan tetap higienis, tidak berbau, dan aman."
    },
    {
      title: "Penerangan Jalan Umum (PJU)",
      badge: "Terang & Aman",
      icon: "lightbulb",
      description: "Instalasi lampu penerangan jalan modern hemat energi di seluruh ruas blok jalan untuk kenyamanan beraktivitas pada malam hari."
    }
  ],
  locations: [
    {
      title: "Kawasan Industri Kabil & Tunas Prima",
      category: "Kawasan Kerja",
      time: "2 - 5 Menit",
      icon: "factory",
      description: "Sangat efisien bagi karyawan dan pelaku bisnis yang beraktivitas di Kawasan Industri Kabil, Tunas Prima, dan sekitarnya tanpa khawatir macet."
    },
    {
      title: "Pelabuhan Telaga Punggur",
      category: "Akses Laut",
      time: "10 Menit",
      icon: "directions_boat",
      description: "Kemudahan perjalanan feri cepat, kapal roro kargo, dan mobilitas antar-pulau di Kepulauan Riau (Tanjungpinang, Dabo, Karimun)."
    },
    {
      title: "Bandara Internasional Hang Nadim",
      category: "Akses Udara",
      time: "15 Menit",
      icon: "flight_takeoff",
      description: "Mendukung mobilitas tinggi untuk rute domestik dan internasional dengan akses cepat bebas hambatan melalui Bundaran Punggur."
    },
    {
      title: "Fasilitas Harian & Pendidikan Lengkap",
      category: "Kebutuhan Harian",
      time: "1 - 5 Menit",
      icon: "local_convenience_store",
      description: "Dekat dengan SMAN 3 Batam, SPBU Kabil, minimarket modern, dan kawasan komersial Era Cipta Square untuk belanja harian."
    },
    {
      title: "Landing Point Jembatan Batam – Bintan",
      category: "Potensi Mega Proyek",
      time: "Dekat Koridor Utama",
      icon: "alt_route",
      description: "Sangat dekat dengan rencana tapak pendaratan Jembatan Batam – Bintan yang akan mendongkrak pesat nilai apresiasi aset properti."
    }
  ],
  specifications: [
    { item: "Pondasi", spec: "Beton Bertulang", icon: "foundation" },
    { item: "Dinding", spec: "Batako Press", icon: "domain" },
    { item: "Cat", spec: "Exterior Jotun / Interior PFF Paint atau setaranya", icon: "format_paint" },
    { item: "Lantai", spec: "Keramik 30x30 (Tipe 30) • Keramik HT 60x60 (Tipe 36+)", icon: "grid_view" },
    { item: "Plafon", spec: "Gypsum", icon: "roofing" },
    { item: "Rangka Atap", spec: "Baja Ringan", icon: "construction" },
    { item: "Atap", spec: "Spandek", icon: "home" },
    { item: "Jendela", spec: "Kaca & Aluminium", icon: "window" },
    { item: "Pintu Utama", spec: "Kusen Aluminium / Pintu Kayu", icon: "door_front" },
    { item: "Pintu Kamar", spec: "Kusen Aluminium / Pintu Double Triplek Finishing PVC Sheet", icon: "meeting_room" },
    { item: "KM / WC", spec: "Closet Jongkok", icon: "wc" },
    { item: "Pintu WC", spec: "PVC", icon: "door_sliding" },
    { item: "Listrik", spec: "PLN", icon: "bolt" },
    { item: "Air", spec: "SPAM", icon: "water_drop" }
  ],
  faqs: [
    {
      q: "Bagaimana sistem pembayaran Cash Bertahap 60x tanpa bunga?",
      a: "Anda dapat mencicil pembayaran rumah langsung ke pengembang (PT Buana Cipta Propertindo / Cipta Group) hingga 60 kali (5 tahun) dengan bunga 0% (tanpa bunga). Prosesnya sangat mudah, pasti disetujui, dan tanpa ribet proses bank."
    },
    {
      q: "Apa saja syarat berkas untuk mengambil unit dengan Cash Bertahap?",
      a: "Syarat berkas sangat praktis: cukup fotokopi/foto KTP saja! Anda tidak memerlukan slip gaji, rekening koran 3 bulan, NPWP perusahaan, ataupun pengecekan BI Checking / SLIK OJK."
    },
    {
      q: "Berapa kisaran harga rumah di Aster Tropika at Kabil?",
      a: "Harga unit Aster Tropika mulai dari Rp 295.000.000 untuk Tipe 30/60 dan Rp 485.000.000 untuk Tipe 36+/72 (sudah ada dapurnya). Tersedia skema pembayaran Cash Keras dengan diskon spesial maupun Cash Bertahap 60x tanpa bunga."
    },
    {
      q: "Apakah perizinan dan legalitasnya aman?",
      a: "Sangat aman. Proyek ini dikembangkan secara resmi oleh PT Buana Cipta Propertindo yang merupakan anggota dari Cipta Group, salah satu pengembang terkemuka dan tepercaya di Kota Batam."
    },
    {
      q: "Bagaimana cara melakukan survei lokasi dan booking unit?",
      a: "Anda dapat langsung menghubungi Frans Rumah Batam melalui WhatsApp di 0823-9105-9216 untuk mendapatkan jadwal pendampingan survei langsung ke lokasi Kabil dan pemilihan nomor blok terbaik secara gratis."
    }
  ]
};
