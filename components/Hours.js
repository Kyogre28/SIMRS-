"use client";
import { useEffect, useRef, useState } from "react";
import { HOURS, BARS } from "@/lib/data";

export default function Hours() {
  const [today, setToday] = useState(-1);
  const [shown, setShown] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setToday((new Date().getDay() + 6) % 7);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="jam" style={{ background: "var(--soft)" }}>
      <div className="w hours">
        <div>
          <h2 style={{ textAlign: "left" }}>Layanan yang tertata</h2>
          <div className="bars" ref={ref}>
            {BARS.map(([label, v]) => (
              <div key={label}>
                <span><b>{label}</b><b>{v}%</b></span>
                <div className="bar"><i style={{ width: shown ? v + "%" : 0 }} /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="hr">
          <h3>Jam poliklinik</h3>
          {HOURS.map(([d, t], i) => (
            <div key={d} className={i === today ? "now" : ""}><span>{d}</span><span>{t}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
