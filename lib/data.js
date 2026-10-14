export const MODULES = [
  { icon: "🧾", name: "Pendaftaran", items: ["Daftar kunjungan online", "Login dan verifikasi identitas", "Registrasi pasien baru", "Kelola antrean", "Verifikasi BPJS atau asuransi"] },
  { icon: "🩺", name: "Rawat jalan", items: ["Pemeriksaan awal", "Buat diagnosa", "Input rekam medis", "Periksa pasien", "Buat rujukan", "Buat resep obat", "Pesan pemeriksaan lab"] },
  { icon: "🛏️", name: "Rawat inap", items: ["Catat perkembangan pasien", "Pilih kamar dan tempat tidur", "Jadwal visite dokter", "Pasien pulang"] },
  { icon: "🧪", name: "Laboratorium", items: ["Input hasil lab", "Proses sampel"] },
  { icon: "💊", name: "Farmasi", items: ["Kelola stok obat", "Proses resep", "Serahkan obat"] },
  { icon: "💳", name: "Keuangan", items: ["Hitung tagihan", "Bayar tagihan", "Cetak kuitansi", "Klaim asuransi"] },
  { icon: "⚙️", name: "Administrasi", items: ["Kelola akun dan hak akses", "Kelola data dokter dan perawat", "Kelola jadwal dokter", "Backup data", "Lihat laporan dan statistik"] },
];

export const ROLES = {
  "Pasien": ["Daftar kunjungan online", "Login dan verifikasi identitas"],
  "Pasien BPJS": ["Daftar kunjungan online", "Login dan verifikasi identitas", "Verifikasi BPJS atau asuransi"],
  "Petugas Pendaftaran": ["Registrasi pasien baru", "Kelola antrean", "Verifikasi BPJS atau asuransi"],
  "Dokter": ["Periksa pasien", "Buat diagnosa", "Input rekam medis", "Buat rujukan", "Buat resep obat", "Pesan pemeriksaan lab", "Jadwal visite dokter"],
  "Perawat": ["Pemeriksaan awal", "Catat perkembangan pasien", "Pilih kamar dan tempat tidur", "Pasien pulang"],
  "Petugas Lab": ["Proses sampel", "Input hasil lab"],
  "Apoteker": ["Proses resep", "Serahkan obat", "Kelola stok obat"],
  "Kasir": ["Hitung tagihan", "Bayar tagihan", "Cetak kuitansi", "Klaim asuransi"],
  "Admin Sistem": ["Kelola akun dan hak akses", "Kelola data dokter dan perawat", "Kelola jadwal dokter", "Backup data"],
  "Direktur RS": ["Lihat laporan dan statistik"],
};

export const DOCTORS = {
  "Umum": ["dr. Andreas", "dr. Diana"],
  "Penyakit dalam": ["dr. Regina", "dr. Bagas"],
  "Gigi": ["drg. Sinta"],
  "Anak": ["dr. Maya", "dr. Fajar"],
};

export const HOURS = [
  ["Senin", "08.00 – 18.00"], ["Selasa", "07.00 – 17.00"], ["Rabu", "09.00 – 19.00"],
  ["Kamis", "08.00 – 18.00"], ["Jumat", "08.30 – 18.00"], ["Sabtu", "09.30 – 17.00"], ["Minggu", "Tutup"],
];

export const BARS = [["Alur pendaftaran terpadu", 93], ["Rekam medis elektronik", 95], ["Integrasi farmasi dan lab", 95]];
