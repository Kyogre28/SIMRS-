"use client";
import { useState } from "react";
import { ROLES } from "@/lib/data";

export default function Roles() {
  const [active, setActive] = useState("Pasien");
  return (
    <section id="peran" style={{ background: "var(--soft)" }}>
      <div className="w">
        <h2>Siapa melakukan apa</h2>
        <p className="sub">Sepuluh aktor sistem dan fungsi yang boleh mereka akses.</p>
        <div className="roles" role="tablist">
          {Object.keys(ROLES).map((k) => (
            <button key={k} className="tab" role="tab" aria-selected={k === active} onClick={() => setActive(k)}>{k}</button>
          ))}
        </div>
        <div className="panel" aria-live="polite">
          <h3>{active}</h3>
          <ul>{ROLES[active].map((it) => <li key={it}>{it}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
