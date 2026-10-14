"use client";
import { useState } from "react";
import { DOCTORS } from "@/lib/data";

export default function BookingForm() {
  const [poli, setPoli] = useState("Umum");
  const [form, setForm] = useState({ dokter: DOCTORS["Umum"][0], tanggal: "", nama: "", telp: "", bayar: "Umum", jam: "", keluhan: "" });
  const [msg, setMsg] = useState("");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const changePoli = (e) => {
    const p = e.target.value;
    setPoli(p);
    setForm({ ...form, dokter: DOCTORS[p][0] });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.nama.trim() || !form.telp.trim() || !form.tanggal) {
      setMsg("Lengkapi nama, telepon, dan tanggal kunjungan dulu.");
      return;
    }
    const q = "A-" + (Math.floor(Math.random() * 90) + 10);
    setMsg(
      `Terima kasih, ${form.nama}. Janji dengan ${form.dokter} (${poli}) pada ${form.tanggal} tercatat. Nomor antrean Anda ${q}.` +
        (form.bayar === "BPJS" ? " Siapkan kartu BPJS untuk diverifikasi." : "")
    );
  };

  const today = new Date().toISOString().slice(0, 10);

  return (
    <section id="daftar">
      <div className="w">
        <h2>Daftar kunjungan online</h2>
        <p className="sub">Isi formulir, sistem mencatat antrean Anda dan memverifikasi data BPJS bila dipilih.</p>
        <div className="two">
          <div className="dark">
            <h3>Gawat darurat</h3>
            <div className="tel">(0281) 123-4560</div>
            <p style={{ fontSize: 14 }}>Layanan IGD buka 24 jam. Tidak perlu mendaftar online, langsung datang ke IGD.</p>
            <a className="btn" href="tel:02811234560" style={{ background: "#14b8a6" }}>Hubungi IGD</a>
          </div>
          <form className="book" onSubmit={submit} noValidate>
            <h3>Buat janji</h3>
            <div className="g">
              <div><label htmlFor="sp">Poli</label>
                <select id="sp" value={poli} onChange={changePoli}>{Object.keys(DOCTORS).map((p) => <option key={p}>{p}</option>)}</select></div>
              <div><label htmlFor="dr">Dokter</label>
                <select id="dr" value={form.dokter} onChange={set("dokter")}>{DOCTORS[poli].map((d) => <option key={d}>{d}</option>)}</select></div>
              <div><label htmlFor="tg">Tanggal</label>
                <input id="tg" type="date" min={today} value={form.tanggal} onChange={set("tanggal")} /></div>
            </div>
            <div className="g">
              <div><label htmlFor="nm">Nama</label>
                <input id="nm" placeholder="Nama lengkap" autoComplete="name" value={form.nama} onChange={set("nama")} /></div>
              <div><label htmlFor="tl">Telepon</label>
                <input id="tl" type="tel" placeholder="08xxxxxxxxxx" autoComplete="tel" value={form.telp} onChange={set("telp")} /></div>
              <div><label htmlFor="py">Pembayaran</label>
                <select id="py" value={form.bayar} onChange={set("bayar")}><option>Umum</option><option>BPJS</option><option>Asuransi</option></select></div>
              <div><label htmlFor="jm">Jam</label>
                <input id="jm" type="time" value={form.jam} onChange={set("jam")} /></div>
            </div>
            <label htmlFor="ms">Keluhan</label>
            <textarea id="ms" placeholder="Tuliskan keluhan singkat" value={form.keluhan} onChange={set("keluhan")} />
            <div style={{ marginTop: 12 }}>
              <button className="btn" type="submit" style={{ background: "var(--navy)", color: "#fff", width: "100%" }}>Buat janji</button>
            </div>
            {msg && <div className="ok" role="status">{msg}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
