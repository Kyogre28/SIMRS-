export default function Hero() {
  return (
    <div className="hero">
      <div className="w">
        <div>
          <h1>Satu sistem untuk seluruh alur rumah sakit</h1>
          <p>Dari pendaftaran online, pemeriksaan, rawat inap, laboratorium, farmasi, sampai pembayaran dan laporan direksi, semuanya terhubung.</p>
          <div className="row">
            <a className="btn" href="#modul">Lihat modul</a>
            <a className="btn o" href="#daftar">Daftar kunjungan</a>
          </div>
        </div>
        <div className="art" aria-hidden="true">
          <div className="blob" />
          <div className="doc d1" />
          <div className="doc d2" />
          <div className="chip c1">🩺<span>Dr. Andreas<small>Dokter umum</small></span></div>
          <div className="chip c2">💊<span>Apoteker<small>Farmasi</small></span></div>
        </div>
      </div>
    </div>
  );
}
