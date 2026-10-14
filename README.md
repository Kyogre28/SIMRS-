# SIMRS Medic (Next.js)

Prototipe frontend Sistem Manajemen Rumah Sakit — Next.js 14 (App Router).

## Menjalankan
```bash
npm install
npm run dev     # buka http://localhost:3000
npm run build && npm start   # versi produksi
```
Butuh Node.js 18.17 atau lebih baru.

## Struktur
- `app/` — layout, halaman utama, CSS global
- `components/` — Header, Hero, Modules, Roles, BookingForm, Hours, Stats
- `lib/data.js` — data modul, peran, dokter, jam layanan (ubah di sini)
