"use client";
import { useState } from "react";
import { MODULES } from "@/lib/data";

export default function Modules() {
  const [active, setActive] = useState(0);
  const m = MODULES[active];
  return (
    <section id="modul">
      <div className="w">
        <h2>Modul layanan</h2>
        <p className="sub">Tujuh modul sesuai use case diagram. Pilih modul untuk melihat fungsinya.</p>
        <div className="mods">
          {MODULES.map((x, i) => (
            <button key={x.name} className="mod" aria-pressed={i === active} onClick={() => setActive(i)}>
              <span className="ic">{x.icon}</span>
              {x.name}
            </button>
          ))}
        </div>
        <div className="panel" aria-live="polite">
          <h3>Modul {m.name}</h3>
          <ul>{m.items.map((it) => <li key={it}>{it}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
